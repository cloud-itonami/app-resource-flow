goog.provide('cloud_itonami.app_resource_flow.ui');
cloud_itonami.app_resource_flow.ui.css_text = "\n.rf-app { min-height: 100vh; background: #0c0e14; color: #e6e6e6; font-family: system-ui, -apple-system, sans-serif; }\n.rf-main { max-width: 1100px; margin: 0 auto; padding: 24px; }\n.rf-main h1, .rf-main p { margin: 0; }\n.rf-head { margin-bottom: 18px; }\n.rf-head h1 { margin: 0 0 6px; font-size: 22px; }\n.rf-head p { color: #9aa0aa; font-size: 13px; }\n.rf-tabs { display: flex; gap: 4px; margin-bottom: 18px; border-bottom: 1px solid #232834; }\n.rf-tab { padding: 8px 16px; background: transparent; color: #9aa0aa; border: 0; border-bottom: 2px solid transparent; cursor: pointer; font-size: 14px; }\n.rf-tab-active { color: #e6e6e6; border-bottom-color: #2d6cdf; }\n.rf-form { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; align-items: end; margin-bottom: 18px; }\n.rf-field { display: flex; flex-direction: column; gap: 4px; font-size: 12px; }\n.rf-field select, .rf-field input { padding: 6px 8px; background: #161a22; color: #e6e6e6; border: 1px solid #2a2f3a; border-radius: 4px; }\n.rf-submit { padding: 8px 12px; background: #2d6cdf; color: white; border: 0; border-radius: 4px; cursor: pointer; }\n.rf-submit:disabled { opacity: 0.6; }\n.rf-error { margin-bottom: 14px; padding: 10px 12px; background: #3a1a1a; color: #ffb3b3; border: 1px solid #5a2c2c; border-radius: 4px; font-size: 13px; }\n.rf-card { background: #11141b; border: 1px solid #232834; border-radius: 6px; padding: 12px; }\n.rf-card-pad { padding: 14px; }\n.rf-meta { margin: 0 0 10px; color: #9aa0aa; font-size: 12px; }\n.rf-empty { color: #9aa0aa; font-size: 13px; margin: 30px 0; text-align: center; }\n.rf-foot { margin-top: 14px; color: #6c7280; font-size: 11px; }\n.rf-toast { margin-bottom: 10px; padding: 6px 10px; background: #142031; color: #9ec1ff; border: 1px solid #234063; border-radius: 4px; font-size: 12px; }\n.rf-table { width: 100%; border-collapse: collapse; font-size: 13px; }\n.rf-table th { text-align: left; color: #9aa0aa; border-bottom: 1px solid #232834; padding: 6px 4px; font-weight: 600; }\n.rf-table th.num, .rf-table td.num { text-align: right; font-variant-numeric: tabular-nums; }\n.rf-row { border-bottom: 1px solid #1a1d24; }\n.rf-row-reviewed { opacity: 0.55; }\n.rf-table td { padding: 8px 4px; }\n.rf-muted { color: #9aa0aa; }\n.rf-sev { display: inline-block; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 11px; text-transform: uppercase; }\n.rf-badge-reviewed { display: inline-block; padding: 2px 6px; border-radius: 3px; background: #1f3a2c; color: #7bd6a3; text-transform: uppercase; font-weight: 600; font-size: 11px; }\n.rf-count { color: #5a6068; font-size: 11px; }\n.rf-ratio { font-weight: 600; }\n.rf-when { color: #9aa0aa; font-size: 11px; font-variant-numeric: tabular-nums; }\n.rf-reviews { display: flex; gap: 4px; }\n.rf-review-btn { padding: 3px 6px; font-size: 10px; background: transparent; color: #9aa0aa; border: 1px solid #2a2f3a; border-radius: 3px; cursor: pointer; text-transform: uppercase; }\n.rf-review-btn:disabled { opacity: 0.4; cursor: default; }\n.rf-node-label { fill: #e6e6e6; font-size: 11px; }\n@media (max-width: 760px) { .rf-form { grid-template-columns: 1fr 1fr; } }\n";
cloud_itonami.app_resource_flow.ui.sev_color = (function cloud_itonami$app_resource_flow$ui$sev_color(severity){
var G__20205 = severity;
switch (G__20205) {
case "critical":
return "#ff4d4f";

break;
case "high":
return "#ff9f43";

break;
case "medium":
return "#feca57";

break;
case "low":
return "#5dade2";

break;
default:
return "#9aa0aa";

}
});
cloud_itonami.app_resource_flow.ui.header = (function cloud_itonami$app_resource_flow$ui$header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.rf-head","header.rf-head",-8464430),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"resource-flow.etzhayyim.com"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"ADR-0028 cluster \u00B7 ADR-0074 root-keyed \u00B7 ADR-0046 anomaly cron \u00B7 pipethrough ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"atproto.etzhayyim.com/xrpc/com.etzhayyim.apps.resourceFlow.*"], null)], null)], null);
});
cloud_itonami.app_resource_flow.ui.tabs = (function cloud_itonami$app_resource_flow$ui$tabs(tab){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.rf-tabs","nav.rf-tabs",-113140190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("sankey",tab))?"rf-tab rf-tab-active":"rf-tab"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cloud_itonami.app_resource_flow.state.set_tab_BANG_("sankey");
})], null),"Sankey"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("anomaly",tab))?"rf-tab rf-tab-active":"rf-tab"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cloud_itonami.app_resource_flow.state.set_tab_BANG_("anomaly");
})], null),"Anomalies"], null)], null);
});
cloud_itonami.app_resource_flow.ui.filter_form = (function cloud_itonami$app_resource_flow$ui$filter_form(){
var map__20209 = cljs.core.deref(cloud_itonami.app_resource_flow.state.state);
var map__20209__$1 = cljs.core.__destructure_map(map__20209);
var flow_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20209__$1,new cljs.core.Keyword(null,"flow-class","flow-class",-605480809));
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20209__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var fiscal_period = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20209__$1,new cljs.core.Keyword(null,"fiscal-period","fiscal-period",1997912059));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20209__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.rf-form","form.rf-form",1607521479),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return cloud_itonami.app_resource_flow.state.load_sankey_BANG_();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.rf-field","label.rf-field",-1459260282),"Flow class",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),flow_class,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20206_SHARP_){
return cloud_itonami.app_resource_flow.state.set_flow_class_BANG_(p1__20206_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"currency"], null),"currency"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"service"], null),"service"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"personnel"], null),"personnel"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.rf-field","label.rf-field",-1459260282),"Domain",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),domain,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20207_SHARP_){
return cloud_itonami.app_resource_flow.state.set_domain_BANG_(p1__20207_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"(any)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"hospitality"], null),"hospitality"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"transport"], null),"transport"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"manufacturing"], null),"manufacturing"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.rf-field","label.rf-field",-1459260282),"Fiscal period",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),fiscal_period,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"YYYY-MM / YYYY-Qn / YYYY",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20208_SHARP_){
return cloud_itonami.app_resource_flow.state.set_fiscal_BANG_(p1__20208_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rf-submit","button.rf-submit",558717574),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),loading_QMARK_], null),(cljs.core.truth_(loading_QMARK_)?"Loading\u2026":"Refresh")], null)], null);
});
cloud_itonami.app_resource_flow.ui.sankey_view = (function cloud_itonami$app_resource_flow$ui$sankey_view(edges,value_k,labels){
var map__20210 = cloud_itonami.app_resource_flow.state.sankey_layout(edges,value_k,labels,(1050),(540));
var map__20210__$1 = cljs.core.__destructure_map(map__20210);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20210__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20210__$1,new cljs.core.Keyword(null,"links","links",-654507394));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(1050),new cljs.core.Keyword(null,"height","height",1025178622),(540),new cljs.core.Keyword(null,"role","role",-736691072),"img",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Resource flow sankey",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__20211){
var map__20213 = p__20211;
var map__20213__$1 = cljs.core.__destructure_map(map__20213);
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20213__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20213__$1,new cljs.core.Keyword(null,"w","w",354169001));
var ci = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20213__$1,new cljs.core.Keyword(null,"ci","ci",409276812));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20213__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),d,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),cloud_itonami.app_resource_flow.state.color_for(ci),new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263),0.45,new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),links)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__20214){
var map__20215 = p__20214;
var map__20215__$1 = cljs.core.__destructure_map(map__20215);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20215__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var x0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20215__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20215__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20215__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20215__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var on_left_QMARK_ = (x0 < ((1050) / (2)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x0,new cljs.core.Keyword(null,"y","y",-1757859776),y0,new cljs.core.Keyword(null,"width","width",-384071477),(x1 - x0),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var x__5087__auto__ = (1);
var y__5088__auto__ = (y1 - y0);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})(),new cljs.core.Keyword(null,"fill","fill",883462889),"#9ec1ff"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text.rf-node-label","text.rf-node-label",589701265),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((on_left_QMARK_)?(x1 + (6)):(x0 - (6))),new cljs.core.Keyword(null,"y","y",-1757859776),((y0 + y1) / (2)),new cljs.core.Keyword(null,"dy","dy",1719547243),"0.35em",new cljs.core.Keyword(null,"textAnchor","textAnchor",-917689429),((on_left_QMARK_)?"start":"end")], null),name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),nodes))], null);
});
cloud_itonami.app_resource_flow.ui.sankey_screen = (function cloud_itonami$app_resource_flow$ui$sankey_screen(){
var map__20219 = cljs.core.deref(cloud_itonami.app_resource_flow.state.state);
var map__20219__$1 = cljs.core.__destructure_map(map__20219);
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20219__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20219__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20219__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var last_updated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20219__$1,new cljs.core.Keyword(null,"last-updated","last-updated",1881380161));
var labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20219__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));
var flow_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20219__$1,new cljs.core.Keyword(null,"flow-class","flow-class",-605480809));
var value_k = cloud_itonami.app_resource_flow.state.value_key(flow_class);
var n = cljs.core.count(edges);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_resource_flow.ui.filter_form], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rf-error","div.rf-error",2141191185),error], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.rf-card","section.rf-card",1519711917),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.rf-meta","p.rf-meta",-1008482911),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," edge(s) \u00B7 value key "].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.name(value_k)], null),(cljs.core.truth_(last_updated)?[" \u00B7 updated ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date(last_updated)).toLocaleTimeString())].join(''):null)], null),(((((n === (0))) && (((cljs.core.not(loading_QMARK_)) && (cljs.core.not(error))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.rf-empty","p.rf-empty",664630468),"No edges yet. Confirm a yadoya reservation (or wait for the ","firehose consumer to ingest legalEntity{Currency,Service,Personnel}","Flow records)."], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_resource_flow.ui.sankey_view,edges,value_k,labels], null))], null)], null);
});
cloud_itonami.app_resource_flow.ui.ratio = (function cloud_itonami$app_resource_flow$ui$ratio(a){
var b = new cljs.core.Keyword(null,"baseline_avg","baseline_avg",2119304396).cljs$core$IFn$_invoke$arity$1(a);
if(((typeof b === 'number') && ((b > (0))))){
return (new cljs.core.Keyword(null,"observed_value","observed_value",-1810557397).cljs$core$IFn$_invoke$arity$1(a) / b);
} else {
return (0);
}
});
cloud_itonami.app_resource_flow.ui.display = (function cloud_itonami$app_resource_flow$ui$display(labels,did){
if((did == null)){
return "independent";
} else {
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(labels,did);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cloud_itonami.app_resource_flow.state.short_label(did);
}
}
});
cloud_itonami.app_resource_flow.ui.fmt_ts = (function cloud_itonami$app_resource_flow$ui$fmt_ts(iso){
return (new Date(iso)).toISOString().slice((0),(16)).replace("T"," ");
});
cloud_itonami.app_resource_flow.ui.anomaly_row = (function cloud_itonami$app_resource_flow$ui$anomaly_row(a,labels,pending_id){
var r = cloud_itonami.app_resource_flow.ui.ratio(a);
var reviewed_QMARK_ = ((0) < (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"review_count","review_count",639075645).cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());
var sc = cloud_itonami.app_resource_flow.ui.sev_color(new cljs.core.Keyword(null,"severity","severity",175684886).cljs$core$IFn$_invoke$arity$1(a));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((reviewed_QMARK_)?"rf-row rf-row-reviewed":"rf-row")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.rf-sev","span.rf-sev",600192734),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sc),"22"].join(''),new cljs.core.Keyword(null,"color","color",1011675173),sc], null)], null),new cljs.core.Keyword(null,"severity","severity",175684886).cljs$core$IFn$_invoke$arity$1(a)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.rf-muted","td.rf-muted",1457986500),new cljs.core.Keyword(null,"flow_class","flow_class",-1085111850).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"source_did","source_did",1735858613).cljs$core$IFn$_invoke$arity$1(a)], null),cloud_itonami.app_resource_flow.ui.display(labels,new cljs.core.Keyword(null,"source_did","source_did",1735858613).cljs$core$IFn$_invoke$arity$1(a))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#5a6068"], null)], null)," \u2192 "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"counterparty_did","counterparty_did",1664448093).cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})()], null),cloud_itonami.app_resource_flow.ui.display(labels,new cljs.core.Keyword(null,"counterparty_did","counterparty_did",1664448093).cljs$core$IFn$_invoke$arity$1(a))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.rf-muted","td.rf-muted",1457986500),new cljs.core.Keyword(null,"fiscal_period","fiscal_period",2094052215).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.num","td.num",-44285459),new cljs.core.Keyword(null,"observed_value","observed_value",-1810557397).cljs$core$IFn$_invoke$arity$1(a).toFixed((0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.num.rf-muted","td.num.rf-muted",-1332369559),new cljs.core.Keyword(null,"baseline_avg","baseline_avg",2119304396).cljs$core$IFn$_invoke$arity$1(a).toFixed((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.num.rf-ratio","td.num.rf-ratio",-1295501390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),sc], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(r.toFixed((2))),"\u00D7"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.rf-when","td.rf-when",1174631513),cloud_itonami.app_resource_flow.ui.fmt_ts(new cljs.core.Keyword(null,"observed_at","observed_at",1439814072).cljs$core$IFn$_invoke$arity$1(a))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((reviewed_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.rf-badge-reviewed","span.rf-badge-reviewed",-1387043711),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"last_action","last_action",-94525736).cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "reviewed";
}
})()], null),((((1) < (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"review_count","review_count",639075645).cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.rf-count","span.rf-count",-595774880),["\u00B7",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"review_count","review_count",639075645).cljs$core$IFn$_invoke$arity$1(a))].join('')], null):null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.rf-muted","span.rf-muted",581529345),"open"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rf-reviews","div.rf-reviews",-1844580345),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_resource_flow$ui$anomaly_row_$_iter__20232(s__20233){
return (new cljs.core.LazySeq(null,(function (){
var s__20233__$1 = s__20233;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20233__$1);
if(temp__5825__auto__){
var s__20233__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20233__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20233__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20235 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20234 = (0);
while(true){
if((i__20234 < size__5479__auto__)){
var act = cljs.core._nth(c__5478__auto__,i__20234);
cljs.core.chunk_append(b__20235,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rf-review-btn","button.rf-review-btn",-1462226782),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),act,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pending_id,new cljs.core.Keyword(null,"vertex_id","vertex_id",-59238679).cljs$core$IFn$_invoke$arity$1(a)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20234,act,c__5478__auto__,size__5479__auto__,b__20235,s__20233__$2,temp__5825__auto__,r,reviewed_QMARK_,sc){
return (function (){
return cloud_itonami.app_resource_flow.state.review_BANG_(a,act);
});})(i__20234,act,c__5478__auto__,size__5479__auto__,b__20235,s__20233__$2,temp__5825__auto__,r,reviewed_QMARK_,sc))
], null),(function (){var G__20236 = act;
switch (G__20236) {
case "acknowledge":
return "ACK";

break;
case "dismiss":
return "DIS";

break;
default:
return "ESC";

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),act], null)));

var G__20253 = (i__20234 + (1));
i__20234 = G__20253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20235),cloud_itonami$app_resource_flow$ui$anomaly_row_$_iter__20232(cljs.core.chunk_rest(s__20233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20235),null);
}
} else {
var act = cljs.core.first(s__20233__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rf-review-btn","button.rf-review-btn",-1462226782),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),act,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pending_id,new cljs.core.Keyword(null,"vertex_id","vertex_id",-59238679).cljs$core$IFn$_invoke$arity$1(a)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (act,s__20233__$2,temp__5825__auto__,r,reviewed_QMARK_,sc){
return (function (){
return cloud_itonami.app_resource_flow.state.review_BANG_(a,act);
});})(act,s__20233__$2,temp__5825__auto__,r,reviewed_QMARK_,sc))
], null),(function (){var G__20238 = act;
switch (G__20238) {
case "acknowledge":
return "ACK";

break;
case "dismiss":
return "DIS";

break;
default:
return "ESC";

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),act], null)),cloud_itonami$app_resource_flow$ui$anomaly_row_$_iter__20232(cljs.core.rest(s__20233__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["acknowledge","dismiss","escalate"], null));
})())], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"vertex_id","vertex_id",-59238679).cljs$core$IFn$_invoke$arity$1(a)], null));
});
cloud_itonami.app_resource_flow.ui.anomaly_screen = (function cloud_itonami$app_resource_flow$ui$anomaly_screen(){
var map__20243 = cljs.core.deref(cloud_itonami.app_resource_flow.state.state);
var map__20243__$1 = cljs.core.__destructure_map(map__20243);
var a_flow_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,new cljs.core.Keyword(null,"a-flow-class","a-flow-class",1539683130));
var anomalies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,new cljs.core.Keyword(null,"anomalies","anomalies",620099616));
var labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));
var a_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,new cljs.core.Keyword(null,"a-error","a-error",116300194));
var a_reviewed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,new cljs.core.Keyword(null,"a-reviewed","a-reviewed",-1839074461));
var a_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,new cljs.core.Keyword(null,"a-loading?","a-loading?",-70340122));
var pending_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,new cljs.core.Keyword(null,"pending-id","pending-id",1999041996));
var toast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,new cljs.core.Keyword(null,"toast","toast",68598129));
var a_severity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243__$1,new cljs.core.Keyword(null,"a-severity","a-severity",1190391959));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.rf-card.rf-card-pad","section.rf-card.rf-card-pad",-1614473969),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.rf-form","form.rf-form",1607521479),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return cloud_itonami.app_resource_flow.state.load_anomaly_BANG_();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.rf-field","label.rf-field",-1459260282),"Flow class",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),a_flow_class,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20239_SHARP_){
return cloud_itonami.app_resource_flow.state.set_a_flow_class_BANG_(p1__20239_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"(any)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"currency"], null),"currency"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"service"], null),"service"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"personnel"], null),"personnel"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.rf-field","label.rf-field",-1459260282),"Severity",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),a_severity,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20240_SHARP_){
return cloud_itonami.app_resource_flow.state.set_a_severity_BANG_(p1__20240_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"(any)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"critical"], null),"critical"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"high"], null),"high"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"medium"], null),"medium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"low"], null),"low"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.rf-field","label.rf-field",-1459260282),"Reviewed",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),a_reviewed,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20241_SHARP_){
return cloud_itonami.app_resource_flow.state.set_a_reviewed_BANG_(p1__20241_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"open"], null),"open (queue)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"closed"], null),"closed (reviewed)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"any"], null),"any"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rf-submit","button.rf-submit",558717574),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),a_loading_QMARK_], null),(cljs.core.truth_(a_loading_QMARK_)?"Loading\u2026":"Refresh")], null)], null),(cljs.core.truth_(a_error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rf-error","div.rf-error",2141191185),a_error], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.rf-meta","p.rf-meta",-1008482911),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(anomalies))," anomaly(ies)"].join('')], null),(cljs.core.truth_(toast)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rf-toast","div.rf-toast",331474410),toast], null):null),((((cljs.core.empty_QMARK_(anomalies)) && (((cljs.core.not(a_loading_QMARK_)) && (cljs.core.not(a_error))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.rf-empty","p.rf-empty",664630468),"No anomalies. The R/PT24H detector hasn't flagged anything yet \u2014 ","or the cluster baseline is still warming up (need at least 3 ","baseline periods per tuple)."], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.rf-table","table.rf-table",1689658535),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Severity"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Flow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Source \u2192 Counterparty"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Period"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.num","th.num",1736467221),"Observed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.num","th.num",1736467221),"Baseline"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.num","th.num",1736467221),"Ratio"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"When"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Review"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20242_SHARP_){
return cloud_itonami.app_resource_flow.ui.anomaly_row(p1__20242_SHARP_,labels,pending_id);
}),anomalies))], null)], null)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.rf-foot","p.rf-foot",1545260632),"Detector: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"R/PT24H"], null)," BPMN cron \u00B7 threshold 3.0\u00D7 rolling ","30-day avg \u00B7 written by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"com.etzhayyim.apps.resourceFlow.detectAnomaly"], null)," \u00B7 listed via ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"com.etzhayyim.apps.resourceFlow.listAnomalies"], null),"."], null)], null);
});
cloud_itonami.app_resource_flow.ui.root = (function cloud_itonami$app_resource_flow$ui$root(){
var map__20247 = cljs.core.deref(cloud_itonami.app_resource_flow.state.state);
var map__20247__$1 = cljs.core.__destructure_map(map__20247);
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20247__$1,new cljs.core.Keyword(null,"tab","tab",-559583621));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cloud_itonami.app_resource_flow.ui.css_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appkit.core.panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rf-app","div.rf-app",1597722258),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.rf-main","main.rf-main",-936225001),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_resource_flow.ui.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_resource_flow.ui.tabs,tab], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("anomaly",tab))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_resource_flow.ui.anomaly_screen], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_resource_flow.ui.sankey_screen], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.rf-foot","p.rf-foot",1545260632),"PII tier 1 \u2014 aggregate only, no individual DID. ADR-0018 ","cohort_size \u2265 5 enforced upstream. Counterparty labels resolved ","via ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"getActorLabels"], null)," (single round-trip)."], null)], null)], null)], null)], null);
});

//# sourceMappingURL=cloud_itonami.app_resource_flow.ui.js.map
