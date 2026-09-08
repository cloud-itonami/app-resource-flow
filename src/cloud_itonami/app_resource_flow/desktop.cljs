(ns cloud-itonami.app-resource-flow.desktop
  "Entry point for the shadow-cljs :app build (web/dist/js/main.js, loaded
  by web/index.html) — same mount pattern as murakumo-studio.desktop and
  cloud-itonami.app-kaigo.desktop. The former App.svelte onMount(load)
  becomes the initial load-sankey! here (the anomaly screen loads when
  its tab is opened, mirroring the {#if} remount)."
  (:require [reagent.dom.client :as rdomc]
            [cloud-itonami.app-resource-flow.state :as st]
            [cloud-itonami.app-resource-flow.ui :as ui]))

(defonce root (atom nil))

(defn- mount! []
  (let [el (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdomc/create-root el)))
    (rdomc/render @root [ui/root])))

(defn init! []
  (mount!)
  (if (= "anomaly" (:tab @st/state))
    (st/load-anomaly!)
    (st/load-sankey!)))
