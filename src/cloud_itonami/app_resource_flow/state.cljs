(ns cloud-itonami.app-resource-flow.state
  "App state + XRPC client + sankey layout for the app-resource-flow
  (resource-flow-ui-r3s0fl0w) UI. Ported 1:1 from the former
  appview/resource-flow-ui-r3s0fl0w/svelte/ (App.svelte +
  AnomalyPanel.svelte + lib/rf-xrpc.ts): two screens (Sankey / Anomalies)
  over the worker's com.etzhayyim.apps.resourceFlow.* XRPC surface.
  d3-sankey is replaced by sankey-layout below (pure CLJS — longest-path
  columns with sinks justified right, node value = max(Σin, Σout), one
  global ky, and the same sankeyLinkHorizontal cubic beziers the Svelte
  component drew into its <svg>). Single reagent atom, murakumo-studio構成.

  NOTE on JSON keys: the wire format is snake_case (source_did,
  event_count, observed_value…) — the camelCase->kebab kebabizer leaves
  those untouched, so edge/anomaly access uses :snake_keywords; only
  genuinely camelCase fields (displayName, reviewId…) become kebab."
  (:require [clojure.string :as str]
            [goog.object :as gobj]
            [reagent.core :as r]))

;; ── URL-state helpers (former readInitialTab / setTab replaceState) ────────

(defn- current-search []
  (when-let [loc (and (exists? js/window) (.-location js/window))]
    (.-search loc)))

(defn initial-tab []
  (if-let [s (current-search)]
    (if (re-find #"[?&]tab=anomaly" s) "anomaly" "sankey")
    "sankey"))

(defn- sync-tab-url! [tab]
  (when-let [w (and (exists? js/window) js/window)]
    (let [loc    (.-location w)
          others (remove empty?
                   (remove #(re-find #"^tab=" %)
                           (str/split (str/replace (or (.-search loc) "") #"^\?" "") #"&")))]
      (.replaceState (.-history w) (js/Object.) ""
                     (str (.-origin loc) (.-pathname loc) "?"
                          (str/join "&" (cons (str "tab=" tab) others)))))))

;; ── state ──────────────────────────────────────────────────────────────────

(defonce state
  (r/atom {:tab           (initial-tab)
           :flow-class    "currency"
           :domain        "hospitality"
           :fiscal-period ""
           :edges         []
           :loading?      false
           :error         nil
           :last-updated  nil
           :labels        {}          ; did -> display label
           ;; anomaly screen (former AnomalyPanel.svelte)
           :a-flow-class  ""
           :a-severity    ""
           :a-reviewed    "open"
           :anomalies     []
           :a-loading?    false
           :a-error       nil
           :pending-id    nil
           :toast         nil}))

;; ── JSON → CLJS (camelCase -> kebab-case keys; snake_case stays as-is) ────

(def ^:private upper-re (js/RegExp "[A-Z]" "g"))

(defn- kebab
  "camelCase JSON key -> kebab-case keyword (displayName -> :display-name).
  Must be a global RegExp — a bare #\"...\" literal has no /g flag in CLJS,
  so String.replace would only rewrite the FIRST capital."
  [s]
  (keyword (.replace (str s) upper-re
                     (fn [m] (str "-" (.toLowerCase m))))))

(defn ->clj
  "JS value -> CLJS with recursive camelCase->kebab-case keywordization of
  map keys (plain JS objects do not reduce-kv — walk own keys via
  goog.object)."
  [v]
  (cond
    (array? v)  (mapv ->clj v)
    (object? v) (persistent!
                  (reduce
                    (fn [m k] (assoc! m (kebab k) (->clj (unchecked-get v k))))
                    (transient {})
                    (seq (gobj/getKeys v))))
    :otherwise  v))

;; ── XRPC client (former lib/rf-xrpc.ts) ────────────────────────────────────

(def ^:private default-service "https://atproto.etzhayyim.com")

(defn- service []
  (if-not (exists? js/window)
    default-service
    (let [w        js/window
          override (.-__RF_SERVICE__ w)
          loc      (.-location w)
          hostname (.-hostname loc)
          local?   (or (= hostname "localhost") (= hostname "127.0.0.1"))]
      (cond
        (and (string? override) (not (empty? override))) override
        (and (not local?) (.endsWith (.-origin loc) "etzhayyim.com")) (.-origin loc)
        :otherwise default-service))))

(defn- url-with-params
  "<service>/xrpc/<nsid>?<k>=<v>… — drops nil/'' params exactly like the
  original xrpcQuery loop."
  [nsid params]
  (let [pairs (remove (fn [[_ v]] (or (nil? v) (identical? "" v))) params)
        qs    (when (seq pairs)
                (str "?" (str/join "&"
                          (for [[k v] pairs]
                            (str (js/encodeURIComponent (name k)) "="
                                 (js/encodeURIComponent (str v)))))))]
    (str (service) "/xrpc/" nsid (or qs ""))))

(defn- get-json [nsid params]
  (-> (js/fetch (url-with-params nsid params)
                #js {:headers #js {:accept "application/json"}})
      (.then (fn [res]
               (if (.-ok res)
                 (.json res)
                 (-> (.text res)
                     (.then (fn [t]
                              (js/Promise.reject
                                (js/Error. (str nsid " " (.-status res) ": " t)))))))))))

(defn get-sankey
  "getSankey query -> clj {:flow-class .. :edges [..] :nodes [..]}."
  [st]
  (-> (get-json "com.etzhayyim.apps.resourceFlow.getSankey"
                [[:flowClass (:flow-class st)]
                 [:domain (not-empty (:domain st))]
                 [:fiscalPeriod (not-empty (:fiscal-period st))]
                 [:limit 200]])
      (.then ->clj)))

(defn list-anomalies [st]
  (-> (get-json "com.etzhayyim.apps.resourceFlow.listAnomalies"
                [[:limit 50]
                 [:reviewed (:a-reviewed st)]
                 [:flowClass (not-empty (:a-flow-class st))]
                 [:severity (not-empty (:a-severity st))]])
      (.then ->clj)))

(defn- read-bearer []
  (when (exists? js/window)
    (let [v (.-__RF_BEARER__ js/window)]
      (or (when (string? v) (not-empty v))
          (when-let [ls (.-localStorage js/window)] (.getItem ls "rf:bearer"))))))

(defn review-anomaly
  "POST reviewAnomaly {anomalyId action post:true}; bearer from the former
  __RF_BEARER__ / localStorage seam."
  [anomaly-id action]
  (let [headers (js/Object.)]
    (unchecked-set headers "content-type" "application/json")
    (when-let [b (read-bearer)]
      (unchecked-set headers "authorization" (str "Bearer " b)))
    (-> (js/fetch (str (service) "/xrpc/com.etzhayyim.apps.resourceFlow.reviewAnomaly")
                  #js {:method  "POST"
                       :headers headers
                       :body    (js/JSON.stringify
                                  #js {:anomalyId anomaly-id
                                       :action    action
                                       :post      true})})
        (.then (fn [res]
                 (if (.-ok res)
                   (.json res)
                   (-> (.text res)
                       (.then (fn [t]
                                (js/Promise.reject
                                  (js/Error. (str "reviewAnomaly " (.-status res) ": " t)))))))))
        (.then ->clj))))

;; ── actor label resolution (ADR-0074 bulk getActorLabels + fallback) ──────

(defn short-label
  "rf-xrpc.ts shortLabel — truncated display for unresolved DIDs."
  [did]
  (cond
    (= did "independent") "Independent"
    (.startsWith did "did:erc725:")
      (let [tail (last (str/split did #":"))
            tail (if (> (count tail) 8) (subs tail 0 8) tail)]
        (str "erc725:" tail "…"))
    (.startsWith did "did:web:")
      (str/join ":" (take 4 (str/split (subs did 8) #":")))
    :otherwise
      (if (> (count did) 32) (str (subs did 0 32) "…") did)))

(def ^:private label-cache (js/Map.))

(defn- repeated-dids-url [dids]
  (str (service) "/xrpc/com.etzhayyim.apps.resourceFlow.getActorLabels?"
       (str/join "&" (for [d dids] (str "dids=" (js/encodeURIComponent d))))))

(defn- bulk-labels
  "Single round-trip; resolves to a clj did->label map. Rejects when the
  cluster view is unavailable (caller falls back to per-DID getProfile —
  exactly the try/catch of the former resolveProfiles)."
  [dids]
  (-> (js/fetch (repeated-dids-url dids)
                #js {:headers #js {:accept "application/json"}})
      (.then (fn [res]
               (if (.-ok res)
                 (.json res)
                 (js/Promise.reject (js/Error. (str "getActorLabels " (.-status res)))))))
      (.then (fn [json]
               (into {} (map (fn [l] [(:did l) l]))
                  (:labels (->clj json)))))))

(defn- profile-fallback! [d]
  (-> (get-json "app.bsky.actor.getProfile" [[:actor d]])
      (.then ->clj)
      (.then (fn [p]
               (.set label-cache d
                     (when p {:did d :handle (:handle p) :display-name (:display-name p)}))))
      (.catch (fn [_] (.set label-cache d nil)))))

(defn- labels-of [dids]
  (into {} (map (fn [d]
                  (let [l (.get label-cache d)]
                    [d (or (:display-name l) (:handle l) (short-label d))]))
             dids)))

(defn resolve-labels
  "did -> display string (displayName ?? handle ?? shortLabel) for the
  given DIDs: one bulk getActorLabels round-trip with N×getProfile
  fallback and an in-memory cache. Returns a JS Promise of a clj map."
  [dids]
  (let [dids (remove #(or (nil? %) (identical? "" %)) (distinct dids))
        todo (remove #(.has label-cache %) dids)]
    (if (empty? todo)
      (js/Promise.resolve (labels-of dids))
      (-> (bulk-labels (vec todo))
          (.then (fn [by-did] (doseq [d todo] (.set label-cache d (get by-did d)))))
          (.catch (fn [_]
                    (-> (js/Promise.all (into-array (map profile-fallback! todo)))
                        (.then (fn [_] nil)))))
          (.then (fn [_] (labels-of dids)))))))

(defn- merge-labels! [m]
  (swap! state update :labels merge m))

;; ── load / action functions ────────────────────────────────────────────────

(defn load-sankey!
  "Former App.svelte load(): getSankey + bulk label resolution for the
  returned edge DIDs (Sankey.svelte's $effect did the same)."
  []
  (swap! state assoc :loading? true :error nil)
  (-> (get-sankey @state)
      (.then (fn [out]
               (let [edges (or (:edges out) [])]
                 (swap! state assoc :edges edges :loading? false
                        :last-updated (.toISOString (js/Date.)))
                 (-> (resolve-labels (mapcat #(vector (:source_did %) (:counterparty_did %)) edges))
                     (.then merge-labels!)
                     (.catch (fn [_] nil))))))
      (.catch (fn [e]
                (swap! state assoc :error (ex-message e) :edges [] :loading? false)))))

(defn load-anomaly!
  "Former AnomalyPanel load(): listAnomalies + labels for every distinct
  DID in the queue."
  []
  (swap! state assoc :a-loading? true :a-error nil)
  (-> (list-anomalies @state)
      (.then (fn [out]
               (let [as (or (:anomalies out) [])]
                 (swap! state assoc :anomalies as :a-loading? false)
                 (-> (resolve-labels (remove nil?
                                      (mapcat #(vector (:source_did %) (:counterparty_did %)) as)))
                     (.then merge-labels!)
                     (.catch (fn [_] nil))))))
      (.catch (fn [e]
                (swap! state assoc :a-error (ex-message e) :anomalies [] :a-loading? false)))))

(defn- review-applied! [a action out]
  (swap! state assoc :toast (str action " recorded — " (:review-id out)))
  (if (= "open" (:a-reviewed @state))
    ;; optimistically remove from the open queue (canonical state surfaces
    ;; on next refresh via mv_resource_flow_anomaly_review_latest)
    (swap! state update :anomalies
           (fn [xs] (filterv #(not= (:vertex_id %) (:vertex_id a)) xs)))
    ;; otherwise tag the row as reviewed in place
    (swap! state update :anomalies
           (fn [xs]
             (mapv (fn [x]
                     (if (= (:vertex_id x) (:vertex_id a))
                       (assoc x
                         :review_count         (inc (or (:review_count x) 0))
                         :last_action          action
                         :last_reviewed_at     (.toISOString (js/Date.))
                         :last_thread_post_uri (or (:thread-uri out) (:last_thread_post_uri x)))
                       x))
                   xs)))))

(defn review!
  "Former review(a, action): ACK / DIS / ESC inline buttons, guarded by
  pending-id (one in-flight review at a time)."
  [a action]
  (when-not (:pending-id @state)
    (let [vid (:vertex_id a)]
      (swap! state assoc :pending-id vid :toast nil)
      (-> (review-anomaly vid action)
          (.then (partial review-applied! a action))
          (.catch (fn [e] (swap! state assoc :toast (ex-message e))))
          (.then (fn [_] (swap! state assoc :pending-id nil)))))))

(defn set-tab! [next]
  (swap! state assoc :tab next)
  (sync-tab-url! next)
  ;; Svelte remounted the {#if} branch and its onMount(load) ran — mirror
  ;; that by (re)loading the tab that just became visible.
  (if (= "anomaly" next)
    (load-anomaly!)
    (load-sankey!)))

(defn set-flow-class!   [v] (swap! state assoc :flow-class v))
(defn set-domain!       [v] (swap! state assoc :domain v))
(defn set-fiscal!       [v] (swap! state assoc :fiscal-period v))
(defn set-a-flow-class! [v] (swap! state assoc :a-flow-class v))
(defn set-a-severity!   [v] (swap! state assoc :a-severity v))
(defn set-a-reviewed!   [v] (swap! state assoc :a-reviewed v))

;; ── sankey data + pure-CLJS layout (replaces d3-sankey) ────────────────────

(defn value-key
  "Derived VALUE_KEY from App.svelte. The keyword NAME is the string shown
  in the `value key <code>` line and used as a JSON path."
  [flow-class]
  (case flow-class
    "currency"  :amount_sum
    "service"   :total_count
    "personnel" :headcount_sum
    :event_count))

(def ^:private tableau10
  ["#4e79a7" "#f28e2c" "#e15759" "#76b7b2" "#59a14f"
   "#edc949" "#af7aa1" "#ff9da7" "#9c755f" "#bab0ab"])

(defn color-for [i] (nth tableau10 (mod i 10)))

(defn- edge-value
  "buildGraph() rule: non-finite/≤0 values fall back to max(1, event_count)
  because d3-sankey rejects non-positive link values."
  [e value-k]
  (let [raw (js/Number (get e value-k 0))
        raw (if (js/Number.isFinite raw) raw 0)]
    (if (> raw 0) raw (max 1 (js/Number (:event_count e 1))))))

(defn- link-offsets
  "Per-node vertical offsets for links touching `side` (:s -> outgoing
  ordered by target y, :t -> incoming ordered by source y) — d3's default
  ordering. Returns {:link-index y-center}; `other` is the opposite key."
  [side links node-map ky]
  (let [other (if (= side :s) :t :s)]
    (apply merge
      (for [key (distinct (map side links))]
        (second
          (reduce
            (fn [[off m] {:keys [v] :as l}]
              (let [w (* v ky)
                    n (get node-map key)]
                [(+ off w)
                 (assoc m (:i l) (+ (:y0 n) off (/ w 2)))]))
            [0 {}]
            (let [ls (filter #(= (side %) key) links)
                  kn (get node-map key)]
              (sort-by (fn [l] (:y0 (get node-map (other l) kn)))
                       ls))))))))

(defn sankey-layout
  "Pure-CLJS replacement for
  sankey().nodeId(d=>d.id).nodeAlign(sankeyJustify).nodeWidth(14)
            .nodePadding(10).extent([[1 1] [width-1 height-6]])
  + sankeyLinkHorizontal. `edges` are clj maps (:source_did
  :counterparty_did :event_count …), `value-k` the keyword from value-key,
  `labels` did -> display string. Geometry rules reproduced: column =
  longest path from a source (sinks justified to the right edge), node
  value = max(Σ in, Σ out), a single global vertical scale ky = min over
  columns of (extent - padding)/(Σ values), insertion-order stacking
  within a column, and per-node link offsets ordered by the opposite
  node's y. Returns {:nodes [{:id :name :x0 :y0 :x1 :y1}…]
  :links [{:d :w :ci :title}…]} (both empty when there are no links)."
  [edges value-k labels width height]
  (let [node-width   14
        node-padding 10
        y-top        1
        y-bot        (- height 6)
        x-left       1
        x-right      (- width 1)
        edges        (filterv #(let [s (:source_did %) t (:counterparty_did %)]
                                 (and s t (not= s t)))
                         edges)
        links        (mapv (fn [i e] {:i i
                                      :s (:source_did e) :t (:counterparty_did e)
                                      :v (edge-value e value-k) :row e})
                        (range) edges)
        ids          (distinct (mapcat #(vector (:s %) (:t %)) links))
        out-deg      (frequencies (map :s links))
        n            (count ids)]
    (if (empty? links)
      {:nodes [] :links []}
      (let [depth    (loop [d (zipmap ids (repeat 0)) it n]
                       (let [step (reduce (fn [dd {:keys [s t]}]
                                            (update dd t max (inc (get dd s 0))))
                                          d links)]
                         (if (or (= step d) (zero? it)) step (recur step (dec it)))))
            max-col  (apply max (vals depth))
            col      (into {}
                       (map (fn [id]
                              [id (if (pos? (get out-deg id 0))
                                    (get depth id 0)
                                    max-col)])
                            ids))
            cols     (inc max-col)
            scale-x  (fn [c]
                       (if (< 1 cols)
                         (+ x-left (* c (/ (- (- x-right x-left) node-width)
                                           (dec cols))))
                         x-left))
            vsum     (reduce (fn [m {:keys [s t v]}]
                               (-> m
                                 (update-in [s :out] (fnil + 0) v)
                                 (update-in [t :in] (fnil + 0) v)))
                          {} links)
            val      (into {}
                       (map (fn [id]
                              (let [m (get vsum id)]
                                [id (max (or (:in m) 0) (or (:out m) 0))]))
                            ids))
            ky       (let [cands (for [[_ ns] (sort-by key (group-by col ids))
                                       :let    [tot (double (apply + (map val ns)))]]
                                  (if (zero? tot)
                                    1
                                    (/ (- (- y-bot y-top) (* node-padding (dec (count ns))))
                                       tot)))
                          k     (apply min cands)]
                       (if (and (js/Number.isFinite k) (pos? k)) k 1))
            ypos     (loop [y {}
                            groups (seq (sort-by key (group-by col ids)))]
                       (if-let [[_ ns] (first groups)]
                         (recur (merge y
                                  (second
                                    (reduce
                                      (fn [[yy m] id]
                                        (let [h  (max 1 (* (val id) ky))
                                              y0 (double yy)]
                                          [(+ y0 h node-padding)
                                           (assoc m id {:y0 y0 :y1 (+ y0 h)})]))
                                      [y-top {}] ns)))
                           (next groups))
                         y))
            node-map (into {}
                       (map
                         (fn [id]
                           (let [x0 (scale-x (col id))
                                 g  (get ypos id {:y0 y-top :y1 (inc y-top)})]
                             [id {:id   id
                                  :name (or (get labels id) (short-label id))
                                  :x0   x0 :x1 (+ x0 node-width)
                                  :y0   (:y0 g) :y1 (max (inc (:y0 g)) (:y1 g))}]))
                         ids))
            nodes    (mapv node-map ids)
            sy       (link-offsets :s links node-map ky)
            ty       (link-offsets :t links node-map ky)
            geo      (mapv
                       (fn [i {:keys [s t v row]}]
                         (let [sn (get node-map s)
                               tn (get node-map t)
                               x0 (:x1 sn)
                               x1 (:x0 tn)
                               y0 (get sy i (:y0 sn))
                               y1 (get ty i (:y0 tn))
                               xm (/ (+ x0 x1) 2)]
                           {:d     (str "M" x0 "," y0
                                        "C" xm "," y0 " " xm "," y1 " " x1 "," y1)
                            :w     (max 1 (* v ky))
                            :ci    (mod i 10)
                            :title (str (:name sn) " → " (:name tn) "\n"
                                        (name value-k) " = " v "\n"
                                        "period=" (:fiscal_period row "")
                                        "  isic=" (:industry_code row "")
                                        (when-let [c (:currency row)] (str "  " c))
                                        (when-let [sc (:service_class row)] (str "  " sc)))}))
                       (range) links)]
        {:nodes nodes :links geo}))))
