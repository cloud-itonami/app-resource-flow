(ns cloud-itonami.app-resource-flow.ui
  "View tree for the app-resource-flow (resource-flow-ui-r3s0fl0w) UI.
  Ported 1:1 from the former appview/resource-flow-ui-r3s0fl0w/svelte/
  (App.svelte — Sankey/Anomaly tabs with ?tab= URL state, flow filter form,
  <svg> sankey; AnomalyPanel.svelte — severity-coloured anomaly table with
  ACK/DIS/ESC inline review buttons, open/closed/any filter, row dimming,
  Status badge showing last action). Structural chrome comes from
  appkit.core / kotoba-ui.core (murakumo-studio構成); the original inline
  styles are reproduced as an equivalent hand-rolled `rf-*` CSS layer
  embedded via [:style], mirroring cloud-itonami.app-kaigo.ui /
  cloud-itonami.rare-earth.ui. Sankey.svelte's d3 DOM painting becomes
  hiccup :svg nodes over state/sankey-layout."
  (:require [appkit.core :as shape]
            [clojure.string :as str]
            [cloud-itonami.app-resource-flow.state :as st]))

(def css-text
  "
.rf-app { min-height: 100vh; background: #0c0e14; color: #e6e6e6; font-family: system-ui, -apple-system, sans-serif; }
.rf-main { max-width: 1100px; margin: 0 auto; padding: 24px; }
.rf-main h1, .rf-main p { margin: 0; }
.rf-head { margin-bottom: 18px; }
.rf-head h1 { margin: 0 0 6px; font-size: 22px; }
.rf-head p { color: #9aa0aa; font-size: 13px; }
.rf-tabs { display: flex; gap: 4px; margin-bottom: 18px; border-bottom: 1px solid #232834; }
.rf-tab { padding: 8px 16px; background: transparent; color: #9aa0aa; border: 0; border-bottom: 2px solid transparent; cursor: pointer; font-size: 14px; }
.rf-tab-active { color: #e6e6e6; border-bottom-color: #2d6cdf; }
.rf-form { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; align-items: end; margin-bottom: 18px; }
.rf-field { display: flex; flex-direction: column; gap: 4px; font-size: 12px; }
.rf-field select, .rf-field input { padding: 6px 8px; background: #161a22; color: #e6e6e6; border: 1px solid #2a2f3a; border-radius: 4px; }
.rf-submit { padding: 8px 12px; background: #2d6cdf; color: white; border: 0; border-radius: 4px; cursor: pointer; }
.rf-submit:disabled { opacity: 0.6; }
.rf-error { margin-bottom: 14px; padding: 10px 12px; background: #3a1a1a; color: #ffb3b3; border: 1px solid #5a2c2c; border-radius: 4px; font-size: 13px; }
.rf-card { background: #11141b; border: 1px solid #232834; border-radius: 6px; padding: 12px; }
.rf-card-pad { padding: 14px; }
.rf-meta { margin: 0 0 10px; color: #9aa0aa; font-size: 12px; }
.rf-empty { color: #9aa0aa; font-size: 13px; margin: 30px 0; text-align: center; }
.rf-foot { margin-top: 14px; color: #6c7280; font-size: 11px; }
.rf-toast { margin-bottom: 10px; padding: 6px 10px; background: #142031; color: #9ec1ff; border: 1px solid #234063; border-radius: 4px; font-size: 12px; }
.rf-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.rf-table th { text-align: left; color: #9aa0aa; border-bottom: 1px solid #232834; padding: 6px 4px; font-weight: 600; }
.rf-table th.num, .rf-table td.num { text-align: right; font-variant-numeric: tabular-nums; }
.rf-row { border-bottom: 1px solid #1a1d24; }
.rf-row-reviewed { opacity: 0.55; }
.rf-table td { padding: 8px 4px; }
.rf-muted { color: #9aa0aa; }
.rf-sev { display: inline-block; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 11px; text-transform: uppercase; }
.rf-badge-reviewed { display: inline-block; padding: 2px 6px; border-radius: 3px; background: #1f3a2c; color: #7bd6a3; text-transform: uppercase; font-weight: 600; font-size: 11px; }
.rf-count { color: #5a6068; font-size: 11px; }
.rf-ratio { font-weight: 600; }
.rf-when { color: #9aa0aa; font-size: 11px; font-variant-numeric: tabular-nums; }
.rf-reviews { display: flex; gap: 4px; }
.rf-review-btn { padding: 3px 6px; font-size: 10px; background: transparent; color: #9aa0aa; border: 1px solid #2a2f3a; border-radius: 3px; cursor: pointer; text-transform: uppercase; }
.rf-review-btn:disabled { opacity: 0.4; cursor: default; }
.rf-node-label { fill: #e6e6e6; font-size: 11px; }
@media (max-width: 760px) { .rf-form { grid-template-columns: 1fr 1fr; } }
")

(defn- sev-color [severity]
  (case severity
    "critical" "#ff4d4f"
    "high"     "#ff9f43"
    "medium"   "#feca57"
    "low"      "#5dade2"
    "#9aa0aa"))

;; ── header + tabs (App.svelte) ─────────────────────────────────────────────

(defn- header []
  [:header.rf-head
   [:h1 "resource-flow.etzhayyim.com"]
   [:p "ADR-0028 cluster · ADR-0074 root-keyed · ADR-0046 anomaly cron · pipethrough "
    [:code "atproto.etzhayyim.com/xrpc/com.etzhayyim.apps.resourceFlow.*"]]])

(defn- tabs [tab]
  [:nav.rf-tabs
   [:button {:class (if (= "sankey" tab) "rf-tab rf-tab-active" "rf-tab")
             :on-click #(st/set-tab! "sankey")} "Sankey"]
   [:button {:class (if (= "anomaly" tab) "rf-tab rf-tab-active" "rf-tab")
             :on-click #(st/set-tab! "anomaly")} "Anomalies"]])

;; ── sankey screen ──────────────────────────────────────────────────────────

(defn- filter-form []
  (let [{:keys [flow-class domain fiscal-period loading?]} @st/state]
    [:form.rf-form
     {:on-submit (fn [e] (.preventDefault e) (st/load-sankey!))}
     [:label.rf-field "Flow class"
      [:select {:value flow-class
                :on-change #(st/set-flow-class! (.. % -target -value))}
       [:option {:value "currency"} "currency"]
       [:option {:value "service"} "service"]
       [:option {:value "personnel"} "personnel"]]]
     [:label.rf-field "Domain"
      [:select {:value domain
                :on-change #(st/set-domain! (.. % -target -value))}
       [:option {:value ""} "(any)"]
       [:option {:value "hospitality"} "hospitality"]
       [:option {:value "transport"} "transport"]
       [:option {:value "manufacturing"} "manufacturing"]]]
     [:label.rf-field "Fiscal period"
      [:input {:value fiscal-period
               :placeholder "YYYY-MM / YYYY-Qn / YYYY"
               :on-change #(st/set-fiscal! (.. % -target -value))}]]
     [:button.rf-submit {:type "submit" :disabled loading?}
      (if loading? "Loading…" "Refresh")]]))

(defn- sankey-view [edges value-k labels]
  (let [{:keys [nodes links]} (st/sankey-layout edges value-k labels 1050 540)]
    [:svg {:width 1050 :height 540 :role "img"
           :aria-label "Resource flow sankey"
           :style {:max-width "100%"}}
     ;; links first (under nodes) — same paint order as the Svelte version
     (into [:g]
       (map-indexed
         (fn [i {:keys [d w ci title]}]
           ^{:key i}
           [:path {:d d :fill "none"
                   :stroke (st/color-for ci)
                   :strokeOpacity 0.45
                   :strokeWidth w}
            [:title title]])
         links))
     (into [:g]
       (map-indexed
         (fn [i {:keys [name x0 y0 x1 y1]}]
           (let [on-left? (< x0 (/ 1050 2))]
             ^{:key i}
             [:g
              [:rect {:x x0 :y y0 :width (- x1 x0)
                      :height (max 1 (- y1 y0)) :fill "#9ec1ff"}]
              [:text.rf-node-label
               {:x (if on-left? (+ x1 6) (- x0 6))
                :y (/ (+ y0 y1) 2)
                :dy "0.35em"
                :textAnchor (if on-left? "start" "end")}
               name]]))
         nodes))]))

(defn- sankey-screen []
  (let [{:keys [edges loading? error last-updated labels flow-class]} @st/state
        value-k (st/value-key flow-class)
        n       (count edges)]
    [:<>
     [filter-form]
     (when error [:div.rf-error error])
     [:section.rf-card
      [:p.rf-meta (str n " edge(s) · value key ")
       [:code (name value-k)]
       (when last-updated
         (str " · updated " (.toLocaleTimeString (js/Date. last-updated))))]
      (if (and (zero? n) (not loading?) (not error))
        [:p.rf-empty
         "No edges yet. Confirm a yadoya reservation (or wait for the "
         "firehose consumer to ingest legalEntity{Currency,Service,Personnel}"
         "Flow records)."]
        [sankey-view edges value-k labels])]]))

;; ── anomaly screen (AnomalyPanel.svelte) ───────────────────────────────────

(defn- ratio [a]
  (let [b (:baseline_avg a)]
    (if (and (number? b) (> b 0))
      (/ (:observed_value a) b)
      0)))

(defn- display [labels did]
  (if (nil? did) "independent" (or (get labels did) (st/short-label did))))

(defn- fmt-ts [iso]
  (-> (js/Date. iso) (.toISOString) (.slice 0 16) (.replace "T" " ")))

(defn- anomaly-row [a labels pending-id]
  (let [r        (ratio a)
        reviewed? (< 0 (or (:review_count a) 0))
        sc       (sev-color (:severity a))]
    ^{:key (:vertex_id a)}
    [:tr {:class (if reviewed? "rf-row rf-row-reviewed" "rf-row")}
     [:td
      [:span.rf-sev {:style {:background (str sc "22") :color sc}}
       (:severity a)]]
     [:td.rf-muted (:flow_class a)]
     [:td
      [:span {:title (:source_did a)} (display labels (:source_did a))]
      [:span {:style {:color "#5a6068"}} " → "]
      [:span {:title (or (:counterparty_did a) "")}
       (display labels (:counterparty_did a))]]
     [:td.rf-muted (:fiscal_period a)]
     [:td.num (.toFixed (:observed_value a) 0)]
     [:td.num.rf-muted (.toFixed (:baseline_avg a) 2)]
     [:td.num.rf-ratio {:style {:color sc}} (str (.toFixed r 2) "×")]
     [:td.rf-when (fmt-ts (:observed_at a))]
     [:td
      (if reviewed?
        [:<>
         [:span.rf-badge-reviewed (or (:last_action a) "reviewed")]
         (when (< 1 (or (:review_count a) 0))
           [:span.rf-count (str "·" (:review_count a))])]
        [:span.rf-muted "open"])]
     [:td
      [:div.rf-reviews
       (into [:<>]
         (for [act ["acknowledge" "dismiss" "escalate"]]
           ^{:key act}
           [:button.rf-review-btn
            {:title act
             :disabled (= pending-id (:vertex_id a))
             :on-click #(st/review! a act)}
            (case act "acknowledge" "ACK" "dismiss" "DIS" "ESC")]))]]]))

(defn- anomaly-screen []
  (let [{:keys [a-flow-class a-severity a-reviewed anomalies labels
                a-loading? a-error pending-id toast]} @st/state]
    [:section.rf-card.rf-card-pad
     [:form.rf-form
      {:on-submit (fn [e] (.preventDefault e) (st/load-anomaly!))}
      [:label.rf-field "Flow class"
       [:select {:value a-flow-class
                 :on-change #(st/set-a-flow-class! (.. % -target -value))}
        [:option {:value ""} "(any)"]
        [:option {:value "currency"} "currency"]
        [:option {:value "service"} "service"]
        [:option {:value "personnel"} "personnel"]]]
      [:label.rf-field "Severity"
       [:select {:value a-severity
                 :on-change #(st/set-a-severity! (.. % -target -value))}
        [:option {:value ""} "(any)"]
        [:option {:value "critical"} "critical"]
        [:option {:value "high"} "high"]
        [:option {:value "medium"} "medium"]
        [:option {:value "low"} "low"]]]
      [:label.rf-field "Reviewed"
       [:select {:value a-reviewed
                 :on-change #(st/set-a-reviewed! (.. % -target -value))}
        [:option {:value "open"} "open (queue)"]
        [:option {:value "closed"} "closed (reviewed)"]
        [:option {:value "any"} "any"]]]
      [:button.rf-submit {:type "submit" :disabled a-loading?}
       (if a-loading? "Loading…" "Refresh")]]
     (when a-error [:div.rf-error a-error])
     [:p.rf-meta (str (count anomalies) " anomaly(ies)")]
     (when toast [:div.rf-toast toast])
     (if (and (empty? anomalies) (not a-loading?) (not a-error))
       [:p.rf-empty
        "No anomalies. The R/PT24H detector hasn't flagged anything yet — "
        "or the cluster baseline is still warming up (need at least 3 "
        "baseline periods per tuple)."]
       [:table.rf-table
        [:thead
         [:tr
          [:th "Severity"]
          [:th "Flow"]
          [:th "Source → Counterparty"]
          [:th "Period"]
          [:th.num "Observed"]
          [:th.num "Baseline"]
          [:th.num "Ratio"]
          [:th "When"]
          [:th "Status"]
          [:th "Review"]]]
        [:tbody
         (into [:<>] (map #(anomaly-row % labels pending-id) anomalies))]])
     [:p.rf-foot
      "Detector: " [:code "R/PT24H"] " BPMN cron · threshold 3.0× rolling "
      "30-day avg · written by " [:code "com.etzhayyim.apps.resourceFlow.detectAnomaly"]
      " · listed via " [:code "com.etzhayyim.apps.resourceFlow.listAnomalies"] "."]]))

;; ── root ───────────────────────────────────────────────────────────────────

(defn root []
  (let [{:keys [tab]} @st/state]
    [:div
     [:style css-text]
     [shape/panel
      [:div.rf-app
       [:main.rf-main
        [header]
        [tabs tab]
        (if (= "anomaly" tab)
          [anomaly-screen]
          [sankey-screen])
        [:p.rf-foot
         "PII tier 1 — aggregate only, no individual DID. ADR-0018 "
         "cohort_size ≥ 5 enforced upstream. Counterparty labels resolved "
         "via " [:code "getActorLabels"] " (single round-trip)."]]]]]))
