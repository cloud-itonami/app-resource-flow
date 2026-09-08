goog.provide('cloud_itonami.app_resource_flow.state');
goog.scope(function(){
  cloud_itonami.app_resource_flow.state.goog$module$goog$object = goog.module.get('goog.object');
});
cloud_itonami.app_resource_flow.state.current_search = (function cloud_itonami$app_resource_flow$state$current_search(){
var temp__5825__auto__ = (function (){var and__5000__auto__ = (typeof window !== 'undefined');
if(and__5000__auto__){
return window.location;
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var loc = temp__5825__auto__;
return loc.search;
} else {
return null;
}
});
cloud_itonami.app_resource_flow.state.initial_tab = (function cloud_itonami$app_resource_flow$state$initial_tab(){
var temp__5823__auto__ = cloud_itonami.app_resource_flow.state.current_search();
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
if(cljs.core.truth_(cljs.core.re_find(/[?&]tab=anomaly/,s))){
return "anomaly";
} else {
return "sankey";
}
} else {
return "sankey";
}
});
cloud_itonami.app_resource_flow.state.sync_tab_url_BANG_ = (function cloud_itonami$app_resource_flow$state$sync_tab_url_BANG_(tab){
var temp__5825__auto__ = (function (){var and__5000__auto__ = (typeof window !== 'undefined');
if(and__5000__auto__){
return window;
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var w = temp__5825__auto__;
var loc = w.location;
var others = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20110_SHARP_){
return cljs.core.re_find(/^tab=/,p1__20110_SHARP_);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace((function (){var or__5002__auto__ = loc.search;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),/^\?/,""),/&/)));
return w.history.replaceState((new Object()),"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.cons(["tab=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab)].join(''),others))].join(''));
} else {
return null;
}
});
if((typeof cloud_itonami !== 'undefined') && (typeof cloud_itonami.app_resource_flow !== 'undefined') && (typeof cloud_itonami.app_resource_flow.state !== 'undefined') && (typeof cloud_itonami.app_resource_flow.state.state !== 'undefined')){
} else {
cloud_itonami.app_resource_flow.state.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"anomalies","anomalies",620099616),new cljs.core.Keyword(null,"last-updated","last-updated",1881380161),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"a-error","a-error",116300194),new cljs.core.Keyword(null,"a-reviewed","a-reviewed",-1839074461),new cljs.core.Keyword(null,"a-loading?","a-loading?",-70340122),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"pending-id","pending-id",1999041996),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"flow-class","flow-class",-605480809),new cljs.core.Keyword(null,"a-severity","a-severity",1190391959),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"a-flow-class","a-flow-class",1539683130),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"fiscal-period","fiscal-period",1997912059),new cljs.core.Keyword(null,"edges","edges",-694791395)],[cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null,"open",false,false,null,null,"currency","",null,"hospitality","",cloud_itonami.app_resource_flow.state.initial_tab(),"",cljs.core.PersistentVector.EMPTY]));
}
cloud_itonami.app_resource_flow.state.upper_re = RegExp("[A-Z]","g");
/**
 * camelCase JSON key -> kebab-case keyword (displayName -> :display-name).
 *   Must be a global RegExp — a bare #"..." literal has no /g flag in CLJS,
 *   so String.replace would only rewrite the FIRST capital.
 */
cloud_itonami.app_resource_flow.state.kebab = (function cloud_itonami$app_resource_flow$state$kebab(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s).replace(cloud_itonami.app_resource_flow.state.upper_re,(function (m){
return ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m.toLowerCase())].join('');
})));
});
/**
 * JS value -> CLJS with recursive camelCase->kebab-case keywordization of
 *   map keys (plain JS objects do not reduce-kv — walk own keys via
 *   goog.object).
 */
cloud_itonami.app_resource_flow.state.__GT_clj = (function cloud_itonami$app_resource_flow$state$__GT_clj(v){
if(cljs.core.array_QMARK_(v)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cloud_itonami.app_resource_flow.state.__GT_clj,v);
} else {
if(cljs.core.object_QMARK_(v)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cloud_itonami.app_resource_flow.state.kebab(k),(function (){var G__20111 = (v[k]);
return (cloud_itonami.app_resource_flow.state.__GT_clj.cljs$core$IFn$_invoke$arity$1 ? cloud_itonami.app_resource_flow.state.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__20111) : cloud_itonami.app_resource_flow.state.__GT_clj.call(null, G__20111));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.seq(cloud_itonami.app_resource_flow.state.goog$module$goog$object.getKeys(v))));
} else {
return v;

}
}
});
cloud_itonami.app_resource_flow.state.default_service = "https://atproto.etzhayyim.com";
cloud_itonami.app_resource_flow.state.service = (function cloud_itonami$app_resource_flow$state$service(){
if((!((typeof window !== 'undefined')))){
return cloud_itonami.app_resource_flow.state.default_service;
} else {
var w = window;
var override = w.__RF_SERVICE__;
var loc = w.location;
var hostname = loc.hostname;
var local_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hostname,"localhost")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hostname,"127.0.0.1")));
if(((typeof override === 'string') && ((!(cljs.core.empty_QMARK_(override)))))){
return override;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = (!(local_QMARK_));
if(and__5000__auto__){
return loc.origin.endsWith("etzhayyim.com");
} else {
return and__5000__auto__;
}
})())){
return loc.origin;
} else {
return cloud_itonami.app_resource_flow.state.default_service;

}
}
}
});
/**
 * <service>/xrpc/<nsid>?<k>=<v>… — drops nil/'' params exactly like the
 *   original xrpcQuery loop.
 */
cloud_itonami.app_resource_flow.state.url_with_params = (function cloud_itonami$app_resource_flow$state$url_with_params(nsid,params){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20112){
var vec__20113 = p__20112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20113,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20113,(1),null);
return (((v == null)) || (("" === v)));
}),params);
var qs = ((cljs.core.seq(pairs))?["?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",(function (){var iter__5480__auto__ = (function cloud_itonami$app_resource_flow$state$url_with_params_$_iter__20126(s__20127){
return (new cljs.core.LazySeq(null,(function (){
var s__20127__$1 = s__20127;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20127__$1);
if(temp__5825__auto__){
var s__20127__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20127__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20127__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20129 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20128 = (0);
while(true){
if((i__20128 < size__5479__auto__)){
var vec__20130 = cljs.core._nth(c__5478__auto__,i__20128);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20130,(1),null);
cljs.core.chunk_append(b__20129,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join(''));

var G__20212 = (i__20128 + (1));
i__20128 = G__20212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20129),cloud_itonami$app_resource_flow$state$url_with_params_$_iter__20126(cljs.core.chunk_rest(s__20127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20129),null);
}
} else {
var vec__20133 = cljs.core.first(s__20127__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20133,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join(''),cloud_itonami$app_resource_flow$state$url_with_params_$_iter__20126(cljs.core.rest(s__20127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(pairs);
})())].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloud_itonami.app_resource_flow.state.service()),"/xrpc/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsid),(function (){var or__5002__auto__ = qs;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})()].join('');
});
cloud_itonami.app_resource_flow.state.get_json = (function cloud_itonami$app_resource_flow$state$get_json(nsid,params){
return fetch(cloud_itonami.app_resource_flow.state.url_with_params(nsid,params),({"headers": ({"accept": "application/json"})})).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
return res.text().then((function (t){
return Promise.reject((new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsid)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(res.status),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''))));
}));
}
}));
});
/**
 * getSankey query -> clj {:flow-class .. :edges [..] :nodes [..]}.
 */
cloud_itonami.app_resource_flow.state.get_sankey = (function cloud_itonami$app_resource_flow$state$get_sankey(st){
return cloud_itonami.app_resource_flow.state.get_json("com.etzhayyim.apps.resourceFlow.getSankey",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flowClass","flowClass",-21080896),new cljs.core.Keyword(null,"flow-class","flow-class",-605480809).cljs$core$IFn$_invoke$arity$1(st)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.not_empty(new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(st))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fiscalPeriod","fiscalPeriod",-38081661),cljs.core.not_empty(new cljs.core.Keyword(null,"fiscal-period","fiscal-period",1997912059).cljs$core$IFn$_invoke$arity$1(st))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(200)], null)], null)).then(cloud_itonami.app_resource_flow.state.__GT_clj);
});
cloud_itonami.app_resource_flow.state.list_anomalies = (function cloud_itonami$app_resource_flow$state$list_anomalies(st){
return cloud_itonami.app_resource_flow.state.get_json("com.etzhayyim.apps.resourceFlow.listAnomalies",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(50)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500),new cljs.core.Keyword(null,"a-reviewed","a-reviewed",-1839074461).cljs$core$IFn$_invoke$arity$1(st)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flowClass","flowClass",-21080896),cljs.core.not_empty(new cljs.core.Keyword(null,"a-flow-class","a-flow-class",1539683130).cljs$core$IFn$_invoke$arity$1(st))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"severity","severity",175684886),cljs.core.not_empty(new cljs.core.Keyword(null,"a-severity","a-severity",1190391959).cljs$core$IFn$_invoke$arity$1(st))], null)], null)).then(cloud_itonami.app_resource_flow.state.__GT_clj);
});
cloud_itonami.app_resource_flow.state.read_bearer = (function cloud_itonami$app_resource_flow$state$read_bearer(){
if((typeof window !== 'undefined')){
var v = window.__RF_BEARER__;
var or__5002__auto__ = ((typeof v === 'string')?cljs.core.not_empty(v):null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5825__auto__ = window.localStorage;
if(cljs.core.truth_(temp__5825__auto__)){
var ls = temp__5825__auto__;
return ls.getItem("rf:bearer");
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * POST reviewAnomaly {anomalyId action post:true}; bearer from the former
 *   __RF_BEARER__ / localStorage seam.
 */
cloud_itonami.app_resource_flow.state.review_anomaly = (function cloud_itonami$app_resource_flow$state$review_anomaly(anomaly_id,action){
var headers = (new Object());
(headers["content-type"] = "application/json");

var temp__5825__auto___20216 = cloud_itonami.app_resource_flow.state.read_bearer();
if(cljs.core.truth_(temp__5825__auto___20216)){
var b_20217 = temp__5825__auto___20216;
(headers["authorization"] = ["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_20217)].join(''));
} else {
}

return fetch([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloud_itonami.app_resource_flow.state.service()),"/xrpc/com.etzhayyim.apps.resourceFlow.reviewAnomaly"].join(''),({"method": "POST", "headers": headers, "body": JSON.stringify(({"anomalyId": anomaly_id, "action": action, "post": true}))})).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
return res.text().then((function (t){
return Promise.reject((new Error(["reviewAnomaly ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(res.status),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''))));
}));
}
})).then(cloud_itonami.app_resource_flow.state.__GT_clj);
});
/**
 * rf-xrpc.ts shortLabel — truncated display for unresolved DIDs.
 */
cloud_itonami.app_resource_flow.state.short_label = (function cloud_itonami$app_resource_flow$state$short_label(did){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(did,"independent")){
return "Independent";
} else {
if(cljs.core.truth_(did.startsWith("did:erc725:"))){
var tail = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(did,/:/));
var tail__$1 = (((cljs.core.count(tail) > (8)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(tail,(0),(8)):tail);
return ["erc725:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail__$1),"\u2026"].join('');
} else {
if(cljs.core.truth_(did.startsWith("did:web:"))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(did,(8)),/:/)));
} else {
if((cljs.core.count(did) > (32))){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(did,(0),(32)),"\u2026"].join('');
} else {
return did;
}

}
}
}
});
cloud_itonami.app_resource_flow.state.label_cache = (new Map());
cloud_itonami.app_resource_flow.state.repeated_dids_url = (function cloud_itonami$app_resource_flow$state$repeated_dids_url(dids){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloud_itonami.app_resource_flow.state.service()),"/xrpc/com.etzhayyim.apps.resourceFlow.getActorLabels?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",(function (){var iter__5480__auto__ = (function cloud_itonami$app_resource_flow$state$repeated_dids_url_$_iter__20140(s__20141){
return (new cljs.core.LazySeq(null,(function (){
var s__20141__$1 = s__20141;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20141__$1);
if(temp__5825__auto__){
var s__20141__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20141__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20141__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20143 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20142 = (0);
while(true){
if((i__20142 < size__5479__auto__)){
var d = cljs.core._nth(c__5478__auto__,i__20142);
cljs.core.chunk_append(b__20143,["dids=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(d))].join(''));

var G__20218 = (i__20142 + (1));
i__20142 = G__20218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20143),cloud_itonami$app_resource_flow$state$repeated_dids_url_$_iter__20140(cljs.core.chunk_rest(s__20141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20143),null);
}
} else {
var d = cljs.core.first(s__20141__$2);
return cljs.core.cons(["dids=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(d))].join(''),cloud_itonami$app_resource_flow$state$repeated_dids_url_$_iter__20140(cljs.core.rest(s__20141__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(dids);
})())].join('');
});
/**
 * Single round-trip; resolves to a clj did->label map. Rejects when the
 *   cluster view is unavailable (caller falls back to per-DID getProfile —
 *   exactly the try/catch of the former resolveProfiles).
 */
cloud_itonami.app_resource_flow.state.bulk_labels = (function cloud_itonami$app_resource_flow$state$bulk_labels(dids){
return fetch(cloud_itonami.app_resource_flow.state.repeated_dids_url(dids),({"headers": ({"accept": "application/json"})})).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
return Promise.reject((new Error(["getActorLabels ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(res.status)].join(''))));
}
})).then((function (json){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (l){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did","did",593382517).cljs$core$IFn$_invoke$arity$1(l),l], null);
})),new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(cloud_itonami.app_resource_flow.state.__GT_clj(json)));
}));
});
cloud_itonami.app_resource_flow.state.profile_fallback_BANG_ = (function cloud_itonami$app_resource_flow$state$profile_fallback_BANG_(d){
return cloud_itonami.app_resource_flow.state.get_json("app.bsky.actor.getProfile",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actor","actor",-1830560481),d], null)], null)).then(cloud_itonami.app_resource_flow.state.__GT_clj).then((function (p){
return cloud_itonami.app_resource_flow.state.label_cache.set(d,(cljs.core.truth_(p)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did","did",593382517),d,new cljs.core.Keyword(null,"handle","handle",1538948854),new cljs.core.Keyword(null,"handle","handle",1538948854).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(p)], null):null));
})).catch((function (_){
return cloud_itonami.app_resource_flow.state.label_cache.set(d,null);
}));
});
cloud_itonami.app_resource_flow.state.labels_of = (function cloud_itonami$app_resource_flow$state$labels_of(dids){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
var l = cloud_itonami.app_resource_flow.state.label_cache.get(d);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"handle","handle",1538948854).cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cloud_itonami.app_resource_flow.state.short_label(d);
}
}
})()], null);
}),dids));
});
/**
 * did -> display string (displayName ?? handle ?? shortLabel) for the
 *   given DIDs: one bulk getActorLabels round-trip with N×getProfile
 *   fallback and an in-memory cache. Returns a JS Promise of a clj map.
 */
cloud_itonami.app_resource_flow.state.resolve_labels = (function cloud_itonami$app_resource_flow$state$resolve_labels(dids){
var dids__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20144_SHARP_){
return (((p1__20144_SHARP_ == null)) || (("" === p1__20144_SHARP_)));
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(dids));
var todo = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20145_SHARP_){
return cloud_itonami.app_resource_flow.state.label_cache.has(p1__20145_SHARP_);
}),dids__$1);
if(cljs.core.empty_QMARK_(todo)){
return Promise.resolve(cloud_itonami.app_resource_flow.state.labels_of(dids__$1));
} else {
return cloud_itonami.app_resource_flow.state.bulk_labels(cljs.core.vec(todo)).then((function (by_did){
var seq__20146 = cljs.core.seq(todo);
var chunk__20147 = null;
var count__20148 = (0);
var i__20149 = (0);
while(true){
if((i__20149 < count__20148)){
var d = chunk__20147.cljs$core$IIndexed$_nth$arity$2(null, i__20149);
cloud_itonami.app_resource_flow.state.label_cache.set(d,cljs.core.get.cljs$core$IFn$_invoke$arity$2(by_did,d));


var G__20220 = seq__20146;
var G__20221 = chunk__20147;
var G__20222 = count__20148;
var G__20223 = (i__20149 + (1));
seq__20146 = G__20220;
chunk__20147 = G__20221;
count__20148 = G__20222;
i__20149 = G__20223;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20146);
if(temp__5825__auto__){
var seq__20146__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20146__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20146__$1);
var G__20224 = cljs.core.chunk_rest(seq__20146__$1);
var G__20225 = c__5525__auto__;
var G__20226 = cljs.core.count(c__5525__auto__);
var G__20227 = (0);
seq__20146 = G__20224;
chunk__20147 = G__20225;
count__20148 = G__20226;
i__20149 = G__20227;
continue;
} else {
var d = cljs.core.first(seq__20146__$1);
cloud_itonami.app_resource_flow.state.label_cache.set(d,cljs.core.get.cljs$core$IFn$_invoke$arity$2(by_did,d));


var G__20228 = cljs.core.next(seq__20146__$1);
var G__20229 = null;
var G__20230 = (0);
var G__20231 = (0);
seq__20146 = G__20228;
chunk__20147 = G__20229;
count__20148 = G__20230;
i__20149 = G__20231;
continue;
}
} else {
return null;
}
}
break;
}
})).catch((function (_){
return Promise.all(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cloud_itonami.app_resource_flow.state.profile_fallback_BANG_,todo))).then((function (___$1){
return null;
}));
})).then((function (_){
return cloud_itonami.app_resource_flow.state.labels_of(dids__$1);
}));
}
});
cloud_itonami.app_resource_flow.state.merge_labels_BANG_ = (function cloud_itonami$app_resource_flow$state$merge_labels_BANG_(m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cloud_itonami.app_resource_flow.state.state,cljs.core.update,new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
});
/**
 * Former App.svelte load(): getSankey + bulk label resolution for the
 *   returned edge DIDs (Sankey.svelte's $effect did the same).
 */
cloud_itonami.app_resource_flow.state.load_sankey_BANG_ = (function cloud_itonami$app_resource_flow$state$load_sankey_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

return cloud_itonami.app_resource_flow.state.get_sankey(cljs.core.deref(cloud_itonami.app_resource_flow.state.state)).then((function (out){
var edges = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"edges","edges",-694791395),edges,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"last-updated","last-updated",1881380161),(new Date()).toISOString()], 0));

return cloud_itonami.app_resource_flow.state.resolve_labels(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__20150_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source_did","source_did",1735858613).cljs$core$IFn$_invoke$arity$1(p1__20150_SHARP_),new cljs.core.Keyword(null,"counterparty_did","counterparty_did",1664448093).cljs$core$IFn$_invoke$arity$1(p1__20150_SHARP_)],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edges], 0))).then(cloud_itonami.app_resource_flow.state.merge_labels_BANG_).catch((function (_){
return null;
}));
})).catch((function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(e),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
});
/**
 * Former AnomalyPanel load(): listAnomalies + labels for every distinct
 *   DID in the queue.
 */
cloud_itonami.app_resource_flow.state.load_anomaly_BANG_ = (function cloud_itonami$app_resource_flow$state$load_anomaly_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"a-loading?","a-loading?",-70340122),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"a-error","a-error",116300194),null], 0));

return cloud_itonami.app_resource_flow.state.list_anomalies(cljs.core.deref(cloud_itonami.app_resource_flow.state.state)).then((function (out){
var as = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"anomalies","anomalies",620099616).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"anomalies","anomalies",620099616),as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"a-loading?","a-loading?",-70340122),false], 0));

return cloud_itonami.app_resource_flow.state.resolve_labels(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__20151_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source_did","source_did",1735858613).cljs$core$IFn$_invoke$arity$1(p1__20151_SHARP_),new cljs.core.Keyword(null,"counterparty_did","counterparty_did",1664448093).cljs$core$IFn$_invoke$arity$1(p1__20151_SHARP_)],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([as], 0)))).then(cloud_itonami.app_resource_flow.state.merge_labels_BANG_).catch((function (_){
return null;
}));
})).catch((function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"a-error","a-error",116300194),cljs.core.ex_message(e),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"anomalies","anomalies",620099616),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"a-loading?","a-loading?",-70340122),false], 0));
}));
});
cloud_itonami.app_resource_flow.state.review_applied_BANG_ = (function cloud_itonami$app_resource_flow$state$review_applied_BANG_(a,action,out){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"toast","toast",68598129),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)," recorded \u2014 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"review-id","review-id",1630099374).cljs$core$IFn$_invoke$arity$1(out))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("open",new cljs.core.Keyword(null,"a-reviewed","a-reviewed",-1839074461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_resource_flow.state.state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.update,new cljs.core.Keyword(null,"anomalies","anomalies",620099616),(function (xs){
return cljs.core.filterv((function (p1__20152_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertex_id","vertex_id",-59238679).cljs$core$IFn$_invoke$arity$1(p1__20152_SHARP_),new cljs.core.Keyword(null,"vertex_id","vertex_id",-59238679).cljs$core$IFn$_invoke$arity$1(a));
}),xs);
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.update,new cljs.core.Keyword(null,"anomalies","anomalies",620099616),(function (xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertex_id","vertex_id",-59238679).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"vertex_id","vertex_id",-59238679).cljs$core$IFn$_invoke$arity$1(a))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword(null,"review_count","review_count",639075645),((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"review_count","review_count",639075645).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last_action","last_action",-94525736),action,new cljs.core.Keyword(null,"last_reviewed_at","last_reviewed_at",1189122017),(new Date()).toISOString(),new cljs.core.Keyword(null,"last_thread_post_uri","last_thread_post_uri",353527265),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"thread-uri","thread-uri",1285170072).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"last_thread_post_uri","last_thread_post_uri",353527265).cljs$core$IFn$_invoke$arity$1(x);
}
})()], 0));
} else {
return x;
}
}),xs);
}));
}
});
/**
 * Former review(a, action): ACK / DIS / ESC inline buttons, guarded by
 *   pending-id (one in-flight review at a time).
 */
cloud_itonami.app_resource_flow.state.review_BANG_ = (function cloud_itonami$app_resource_flow$state$review_BANG_(a,action){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-id","pending-id",1999041996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_resource_flow.state.state)))){
return null;
} else {
var vid = new cljs.core.Keyword(null,"vertex_id","vertex_id",-59238679).cljs$core$IFn$_invoke$arity$1(a);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996),vid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"toast","toast",68598129),null], 0));

return cloud_itonami.app_resource_flow.state.review_anomaly(vid,action).then(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cloud_itonami.app_resource_flow.state.review_applied_BANG_,a,action)).catch((function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"toast","toast",68598129),cljs.core.ex_message(e));
})).then((function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996),null);
}));
}
});
cloud_itonami.app_resource_flow.state.set_tab_BANG_ = (function cloud_itonami$app_resource_flow$state$set_tab_BANG_(next){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"tab","tab",-559583621),next);

cloud_itonami.app_resource_flow.state.sync_tab_url_BANG_(next);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("anomaly",next)){
return cloud_itonami.app_resource_flow.state.load_anomaly_BANG_();
} else {
return cloud_itonami.app_resource_flow.state.load_sankey_BANG_();
}
});
cloud_itonami.app_resource_flow.state.set_flow_class_BANG_ = (function cloud_itonami$app_resource_flow$state$set_flow_class_BANG_(v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"flow-class","flow-class",-605480809),v);
});
cloud_itonami.app_resource_flow.state.set_domain_BANG_ = (function cloud_itonami$app_resource_flow$state$set_domain_BANG_(v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"domain","domain",1847214937),v);
});
cloud_itonami.app_resource_flow.state.set_fiscal_BANG_ = (function cloud_itonami$app_resource_flow$state$set_fiscal_BANG_(v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"fiscal-period","fiscal-period",1997912059),v);
});
cloud_itonami.app_resource_flow.state.set_a_flow_class_BANG_ = (function cloud_itonami$app_resource_flow$state$set_a_flow_class_BANG_(v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"a-flow-class","a-flow-class",1539683130),v);
});
cloud_itonami.app_resource_flow.state.set_a_severity_BANG_ = (function cloud_itonami$app_resource_flow$state$set_a_severity_BANG_(v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"a-severity","a-severity",1190391959),v);
});
cloud_itonami.app_resource_flow.state.set_a_reviewed_BANG_ = (function cloud_itonami$app_resource_flow$state$set_a_reviewed_BANG_(v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cloud_itonami.app_resource_flow.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"a-reviewed","a-reviewed",-1839074461),v);
});
/**
 * Derived VALUE_KEY from App.svelte. The keyword NAME is the string shown
 *   in the `value key <code>` line and used as a JSON path.
 */
cloud_itonami.app_resource_flow.state.value_key = (function cloud_itonami$app_resource_flow$state$value_key(flow_class){
var G__20153 = flow_class;
switch (G__20153) {
case "currency":
return new cljs.core.Keyword(null,"amount_sum","amount_sum",-1614608112);

break;
case "service":
return new cljs.core.Keyword(null,"total_count","total_count",-1975357629);

break;
case "personnel":
return new cljs.core.Keyword(null,"headcount_sum","headcount_sum",-2001301098);

break;
default:
return new cljs.core.Keyword(null,"event_count","event_count",-1889732422);

}
});
cloud_itonami.app_resource_flow.state.tableau10 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"], null);
cloud_itonami.app_resource_flow.state.color_for = (function cloud_itonami$app_resource_flow$state$color_for(i){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cloud_itonami.app_resource_flow.state.tableau10,cljs.core.mod(i,(10)));
});
/**
 * buildGraph() rule: non-finite/≤0 values fall back to max(1, event_count)
 *   because d3-sankey rejects non-positive link values.
 */
cloud_itonami.app_resource_flow.state.edge_value = (function cloud_itonami$app_resource_flow$state$edge_value(e,value_k){
var raw = Number(cljs.core.get.cljs$core$IFn$_invoke$arity$3(e,value_k,(0)));
var raw__$1 = (cljs.core.truth_(Number.isFinite(raw))?raw:(0));
if((raw__$1 > (0))){
return raw__$1;
} else {
var x__5087__auto__ = (1);
var y__5088__auto__ = Number(new cljs.core.Keyword(null,"event_count","event_count",-1889732422).cljs$core$IFn$_invoke$arity$2(e,(1)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}
});
/**
 * Per-node vertical offsets for links touching `side` (:s -> outgoing
 *   ordered by target y, :t -> incoming ordered by source y) — d3's default
 *   ordering. Returns {:link-index y-center}; `other` is the opposite key.
 */
cloud_itonami.app_resource_flow.state.link_offsets = (function cloud_itonami$app_resource_flow$state$link_offsets(side,links,node_map,ky){
var other = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(side,new cljs.core.Keyword(null,"s","s",1705939918)))?new cljs.core.Keyword(null,"t","t",-1397832519):new cljs.core.Keyword(null,"s","s",1705939918));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__5480__auto__ = (function cloud_itonami$app_resource_flow$state$link_offsets_$_iter__20155(s__20156){
return (new cljs.core.LazySeq(null,(function (){
var s__20156__$1 = s__20156;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20156__$1);
if(temp__5825__auto__){
var s__20156__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20156__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20156__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20158 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20157 = (0);
while(true){
if((i__20157 < size__5479__auto__)){
var key = cljs.core._nth(c__5478__auto__,i__20157);
cljs.core.chunk_append(b__20158,cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__20157,key,c__5478__auto__,size__5479__auto__,b__20158,s__20156__$2,temp__5825__auto__,other){
return (function (p__20159,p__20160){
var vec__20161 = p__20159;
var off = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20161,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20161,(1),null);
var map__20164 = p__20160;
var map__20164__$1 = cljs.core.__destructure_map(map__20164);
var l = map__20164__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20164__$1,new cljs.core.Keyword(null,"v","v",21465059));
var w = (v * ky);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_map,key);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(off + w),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(l),((new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(n) + off) + (w / (2))))], null);
});})(i__20157,key,c__5478__auto__,size__5479__auto__,b__20158,s__20156__$2,temp__5825__auto__,other))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentArrayMap.EMPTY], null),(function (){var ls = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__20157,key,c__5478__auto__,size__5479__auto__,b__20158,s__20156__$2,temp__5825__auto__,other){
return (function (p1__20154_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((side.cljs$core$IFn$_invoke$arity$1 ? side.cljs$core$IFn$_invoke$arity$1(p1__20154_SHARP_) : side.call(null, p1__20154_SHARP_)),key);
});})(i__20157,key,c__5478__auto__,size__5479__auto__,b__20158,s__20156__$2,temp__5825__auto__,other))
,links);
var kn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_map,key);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (i__20157,ls,kn,key,c__5478__auto__,size__5479__auto__,b__20158,s__20156__$2,temp__5825__auto__,other){
return (function (l){
return new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(node_map,other.cljs$core$IFn$_invoke$arity$1(l),kn));
});})(i__20157,ls,kn,key,c__5478__auto__,size__5479__auto__,b__20158,s__20156__$2,temp__5825__auto__,other))
,ls);
})())));

var G__20244 = (i__20157 + (1));
i__20157 = G__20244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20158),cloud_itonami$app_resource_flow$state$link_offsets_$_iter__20155(cljs.core.chunk_rest(s__20156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20158),null);
}
} else {
var key = cljs.core.first(s__20156__$2);
return cljs.core.cons(cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (key,s__20156__$2,temp__5825__auto__,other){
return (function (p__20165,p__20166){
var vec__20167 = p__20165;
var off = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20167,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20167,(1),null);
var map__20170 = p__20166;
var map__20170__$1 = cljs.core.__destructure_map(map__20170);
var l = map__20170__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"v","v",21465059));
var w = (v * ky);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_map,key);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(off + w),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(l),((new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(n) + off) + (w / (2))))], null);
});})(key,s__20156__$2,temp__5825__auto__,other))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentArrayMap.EMPTY], null),(function (){var ls = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (key,s__20156__$2,temp__5825__auto__,other){
return (function (p1__20154_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((side.cljs$core$IFn$_invoke$arity$1 ? side.cljs$core$IFn$_invoke$arity$1(p1__20154_SHARP_) : side.call(null, p1__20154_SHARP_)),key);
});})(key,s__20156__$2,temp__5825__auto__,other))
,links);
var kn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_map,key);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (ls,kn,key,s__20156__$2,temp__5825__auto__,other){
return (function (l){
return new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(node_map,other.cljs$core$IFn$_invoke$arity$1(l),kn));
});})(ls,kn,key,s__20156__$2,temp__5825__auto__,other))
,ls);
})())),cloud_itonami$app_resource_flow$state$link_offsets_$_iter__20155(cljs.core.rest(s__20156__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(side,links)));
})());
});
/**
 * Pure-CLJS replacement for
 *   sankey().nodeId(d=>d.id).nodeAlign(sankeyJustify).nodeWidth(14)
 *          .nodePadding(10).extent([[1 1] [width-1 height-6]])
 *   + sankeyLinkHorizontal. `edges` are clj maps (:source_did
 *   :counterparty_did :event_count …), `value-k` the keyword from value-key,
 *   `labels` did -> display string. Geometry rules reproduced: column =
 *   longest path from a source (sinks justified to the right edge), node
 *   value = max(Σ in, Σ out), a single global vertical scale ky = min over
 *   columns of (extent - padding)/(Σ values), insertion-order stacking
 *   within a column, and per-node link offsets ordered by the opposite
 *   node's y. Returns {:nodes [{:id :name :x0 :y0 :x1 :y1}…]
 *   :links [{:d :w :ci :title}…]} (both empty when there are no links).
 */
cloud_itonami.app_resource_flow.state.sankey_layout = (function cloud_itonami$app_resource_flow$state$sankey_layout(edges,value_k,labels,width,height){
var node_width = (14);
var node_padding = (10);
var y_top = (1);
var y_bot = (height - (6));
var x_left = (1);
var x_right = (width - (1));
var edges__$1 = cljs.core.filterv((function (p1__20171_SHARP_){
var s = new cljs.core.Keyword(null,"source_did","source_did",1735858613).cljs$core$IFn$_invoke$arity$1(p1__20171_SHARP_);
var t = new cljs.core.Keyword(null,"counterparty_did","counterparty_did",1664448093).cljs$core$IFn$_invoke$arity$1(p1__20171_SHARP_);
var and__5000__auto__ = s;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = t;
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,t);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),edges);
var links = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (i,e){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"i","i",-1386841315),i,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"source_did","source_did",1735858613).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"counterparty_did","counterparty_did",1664448093).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"v","v",21465059),cloud_itonami.app_resource_flow.state.edge_value(e,value_k),new cljs.core.Keyword(null,"row","row",-570139521),e], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),edges__$1);
var ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__20172_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(p1__20172_SHARP_),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(p1__20172_SHARP_)],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([links], 0)));
var out_deg = cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"s","s",1705939918),links));
var n = cljs.core.count(ids);
if(cljs.core.empty_QMARK_(links)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.PersistentVector.EMPTY], null);
} else {
var depth = (function (){var d = cljs.core.zipmap(ids,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)));
var it = n;
while(true){
var step = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (d,it,node_width,node_padding,y_top,y_bot,x_left,x_right,edges__$1,links,ids,out_deg,n){
return (function (dd,p__20175){
var map__20176 = p__20175;
var map__20176__$1 = cljs.core.__destructure_map(map__20176);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20176__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20176__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(dd,t,cljs.core.max,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dd,s,(0)) + (1)));
});})(d,it,node_width,node_padding,y_top,y_bot,x_left,x_right,edges__$1,links,ids,out_deg,n))
,d,links);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(step,d)) || ((it === (0))))){
return step;
} else {
var G__20245 = step;
var G__20246 = (it - (1));
d = G__20245;
it = G__20246;
continue;
}
break;
}
})();
var max_col = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(depth));
var col = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(((cljs.core.get.cljs$core$IFn$_invoke$arity$3(out_deg,id,(0)) > (0)))?cljs.core.get.cljs$core$IFn$_invoke$arity$3(depth,id,(0)):max_col)], null);
}),ids));
var cols = (max_col + (1));
var scale_x = (function (c){
if(((1) < cols)){
return (x_left + (c * (((x_right - x_left) - node_width) / (cols - (1)))));
} else {
return x_left;
}
});
var vsum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__20177){
var map__20178 = p__20177;
var map__20178__$1 = cljs.core.__destructure_map(map__20178);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20178__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20178__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20178__$1,new cljs.core.Keyword(null,"v","v",21465059));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,new cljs.core.Keyword(null,"out","out",-910545517)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(0)),v),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(0)),v);
}),cljs.core.PersistentArrayMap.EMPTY,links);
var val = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vsum,id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(function (){var x__5087__auto__ = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var y__5088__auto__ = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})()], null);
}),ids));
var ky = (function (){var cands = (function (){var iter__5480__auto__ = (function cloud_itonami$app_resource_flow$state$sankey_layout_$_iter__20179(s__20180){
return (new cljs.core.LazySeq(null,(function (){
var s__20180__$1 = s__20180;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20180__$1);
if(temp__5825__auto__){
var s__20180__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20180__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20180__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20182 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20181 = (0);
while(true){
if((i__20181 < size__5479__auto__)){
var vec__20183 = cljs.core._nth(c__5478__auto__,i__20181);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20183,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20183,(1),null);
var tot = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(val,ns));
cljs.core.chunk_append(b__20182,(((tot === (0)))?(1):(((y_bot - y_top) - (node_padding * (cljs.core.count(ns) - (1)))) / tot)));

var G__20248 = (i__20181 + (1));
i__20181 = G__20248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20182),cloud_itonami$app_resource_flow$state$sankey_layout_$_iter__20179(cljs.core.chunk_rest(s__20180__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20182),null);
}
} else {
var vec__20186 = cljs.core.first(s__20180__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186,(1),null);
var tot = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(val,ns));
return cljs.core.cons((((tot === (0)))?(1):(((y_bot - y_top) - (node_padding * (cljs.core.count(ns) - (1)))) / tot)),cloud_itonami$app_resource_flow$state$sankey_layout_$_iter__20179(cljs.core.rest(s__20180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.group_by(col,ids)));
})();
var k = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cands);
if(cljs.core.truth_((function (){var and__5000__auto__ = Number.isFinite(k);
if(cljs.core.truth_(and__5000__auto__)){
return (k > (0));
} else {
return and__5000__auto__;
}
})())){
return k;
} else {
return (1);
}
})();
var ypos = (function (){var y = cljs.core.PersistentArrayMap.EMPTY;
var groups = cljs.core.seq(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.group_by(col,ids)));
while(true){
var temp__5823__auto__ = cljs.core.first(groups);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__20196 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20196,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20196,(1),null);
var G__20249 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y,cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (y,groups,vec__20196,_,ns,temp__5823__auto__,depth,max_col,col,cols,scale_x,vsum,val,ky,node_width,node_padding,y_top,y_bot,x_left,x_right,edges__$1,links,ids,out_deg,n){
return (function (p__20199,id){
var vec__20200 = p__20199;
var yy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20200,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20200,(1),null);
var h = (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = ((val.cljs$core$IFn$_invoke$arity$1 ? val.cljs$core$IFn$_invoke$arity$1(id) : val.call(null, id)) * ky);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y0 = yy;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y0 + h) + node_padding),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y0","y0",111454807),y0,new cljs.core.Keyword(null,"y1","y1",589123466),(y0 + h)], null))], null);
});})(y,groups,vec__20196,_,ns,temp__5823__auto__,depth,max_col,col,cols,scale_x,vsum,val,ky,node_width,node_padding,y_top,y_bot,x_left,x_right,edges__$1,links,ids,out_deg,n))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_top,cljs.core.PersistentArrayMap.EMPTY], null),ns))], 0));
var G__20250 = cljs.core.next(groups);
y = G__20249;
groups = G__20250;
continue;
} else {
return y;
}
break;
}
})();
var node_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var x0 = scale_x((col.cljs$core$IFn$_invoke$arity$1 ? col.cljs$core$IFn$_invoke$arity$1(id) : col.call(null, id)));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ypos,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y0","y0",111454807),y_top,new cljs.core.Keyword(null,"y1","y1",589123466),(y_top + (1))], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(labels,id);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cloud_itonami.app_resource_flow.state.short_label(id);
}
})(),new cljs.core.Keyword(null,"x0","x0",410843387),x0,new cljs.core.Keyword(null,"x1","x1",-1863922247),(x0 + node_width),new cljs.core.Keyword(null,"y0","y0",111454807),new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"y1","y1",589123466),(function (){var x__5087__auto__ = (new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(g) + (1));
var y__5088__auto__ = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(g);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})()], null)], null);
}),ids));
var nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(node_map,ids);
var sy = cloud_itonami.app_resource_flow.state.link_offsets(new cljs.core.Keyword(null,"s","s",1705939918),links,node_map,ky);
var ty = cloud_itonami.app_resource_flow.state.link_offsets(new cljs.core.Keyword(null,"t","t",-1397832519),links,node_map,ky);
var geo = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (i,p__20203){
var map__20204 = p__20203;
var map__20204__$1 = cljs.core.__destructure_map(map__20204);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204__$1,new cljs.core.Keyword(null,"v","v",21465059));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var sn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_map,s);
var tn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_map,t);
var x0 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(sn);
var x1 = new cljs.core.Keyword(null,"x0","x0",410843387).cljs$core$IFn$_invoke$arity$1(tn);
var y0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(sy,i,new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(sn));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ty,i,new cljs.core.Keyword(null,"y0","y0",111454807).cljs$core$IFn$_invoke$arity$1(tn));
var xm = ((x0 + x1) / (2));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),["M",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x0),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0),"C",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xm),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xm),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1)].join(''),new cljs.core.Keyword(null,"w","w",354169001),(function (){var x__5087__auto__ = (1);
var y__5088__auto__ = (v * ky);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})(),new cljs.core.Keyword(null,"ci","ci",409276812),cljs.core.mod(i,(10)),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(sn))," \u2192 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tn)),"\n",cljs.core.name(value_k)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"\n","period=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fiscal_period","fiscal_period",2094052215).cljs$core$IFn$_invoke$arity$2(row,"")),"  isic=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"industry_code","industry_code",-2095710694).cljs$core$IFn$_invoke$arity$2(row,"")),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"service_class","service_class",1807658904).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(temp__5825__auto__)){
var sc = temp__5825__auto__;
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sc)].join('');
} else {
return null;
}
})()].join('')], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),links);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"links","links",-654507394),geo], null);
}
});

//# sourceMappingURL=cloud_itonami.app_resource_flow.state.js.map
