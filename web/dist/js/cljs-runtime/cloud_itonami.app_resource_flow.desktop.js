goog.provide('cloud_itonami.app_resource_flow.desktop');
if((typeof cloud_itonami !== 'undefined') && (typeof cloud_itonami.app_resource_flow !== 'undefined') && (typeof cloud_itonami.app_resource_flow.desktop !== 'undefined') && (typeof cloud_itonami.app_resource_flow.desktop.root !== 'undefined')){
} else {
cloud_itonami.app_resource_flow.desktop.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cloud_itonami.app_resource_flow.desktop.mount_BANG_ = (function cloud_itonami$app_resource_flow$desktop$mount_BANG_(){
var el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(cloud_itonami.app_resource_flow.desktop.root))){
} else {
cljs.core.reset_BANG_(cloud_itonami.app_resource_flow.desktop.root,reagent.dom.client.create_root(el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cloud_itonami.app_resource_flow.desktop.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_resource_flow.ui.root], null));
});
cloud_itonami.app_resource_flow.desktop.init_BANG_ = (function cloud_itonami$app_resource_flow$desktop$init_BANG_(){
cloud_itonami.app_resource_flow.desktop.mount_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("anomaly",new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_resource_flow.state.state)))){
return cloud_itonami.app_resource_flow.state.load_anomaly_BANG_();
} else {
return cloud_itonami.app_resource_flow.state.load_sankey_BANG_();
}
});

//# sourceMappingURL=cloud_itonami.app_resource_flow.desktop.js.map
