goog.provide('byoubu.spec');
/**
 * Every backdrop names the same nine roles. A fixed vocabulary is what lets
 *   `byoubu.plate` build a plate for any entry without special-casing, and
 *   what lets two backdrops be compared.
 */
byoubu.spec.required_palette_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky-zenith","sky-zenith",-20065151),new cljs.core.Keyword(null,"sky-mid","sky-mid",106630624),new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617),new cljs.core.Keyword(null,"haze","haze",-1024870708),new cljs.core.Keyword(null,"ridge-far","ridge-far",762525090),new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738),new cljs.core.Keyword(null,"dune-lit","dune-lit",790638115),new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330),new cljs.core.Keyword(null,"star","star",279424429)], null);
byoubu.spec.required_scene_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.Keyword(null,"atmosphere","atmosphere",523254734),new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"grade","grade",2117054771)], null);
byoubu.spec.textures = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),null,new cljs.core.Keyword(null,"calm","calm",-533989756),null,new cljs.core.Keyword(null,"busy","busy",-328286801),null], null), null);
byoubu.spec.missing = (function byoubu$spec$missing(m,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20110_SHARP_){
return cljs.core.contains_QMARK_(m,p1__20110_SHARP_);
}),ks);
});
/**
 * Vector of problem descriptions for one backdrop; empty means valid.
 */
byoubu.spec.problems = (function byoubu$spec$problems(backdrop){
var id = new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(backdrop);
var palette = new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321).cljs$core$IFn$_invoke$arity$1(backdrop);
var band = new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238).cljs$core$IFn$_invoke$arity$1(backdrop);
var scene = new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071).cljs$core$IFn$_invoke$arity$1(backdrop);
var pfx = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),": "].join('');
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__20123(s__20124){
return (new cljs.core.LazySeq(null,(function (){
var s__20124__$1 = s__20124;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20124__$1);
if(temp__5825__auto__){
var s__20124__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20124__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20124__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20126 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20125 = (0);
while(true){
if((i__20125 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__20125);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
cljs.core.chunk_append(b__20126,[pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__20328 = (i__20125 + (1));
i__20125 = G__20328;
continue;
} else {
var G__20329 = (i__20125 + (1));
i__20125 = G__20329;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20126),byoubu$spec$problems_$_iter__20123(cljs.core.chunk_rest(s__20124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20126),null);
}
} else {
var k = cljs.core.first(s__20124__$2);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
return cljs.core.cons([pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__20123(cljs.core.rest(s__20124__$2)));
} else {
var G__20332 = cljs.core.rest(s__20124__$2);
s__20124__$1 = G__20332;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","id","byoubu/id",459733156),new cljs.core.Keyword("byoubu","title","byoubu/title",1943539519),new cljs.core.Keyword("byoubu","summary","byoubu/summary",1753941440),new cljs.core.Keyword("byoubu","tags","byoubu/tags",-743870735),new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191),new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445),new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268),new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321),new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238),new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071)], null));
})(),(((id instanceof cljs.core.Keyword))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"id must be a keyword"].join('')], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.int_QMARK_(new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"seed must be an integer \u2014 a backdrop nobody can re-render ","is an asset, not a spec"].join('')], null)),((cljs.core.contains_QMARK_(byoubu.spec.textures,new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"texture must be one of ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(byoubu.spec.textures))].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__20146(s__20147){
return (new cljs.core.LazySeq(null,(function (){
var s__20147__$1 = s__20147;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20147__$1);
if(temp__5825__auto__){
var s__20147__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20147__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20147__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20149 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20148 = (0);
while(true){
if((i__20148 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__20148);
cljs.core.chunk_append(b__20149,[pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__20338 = (i__20148 + (1));
i__20148 = G__20338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20149),byoubu$spec$problems_$_iter__20146(cljs.core.chunk_rest(s__20147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20149),null);
}
} else {
var k = cljs.core.first(s__20147__$2);
return cljs.core.cons([pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__20146(cljs.core.rest(s__20147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(palette,byoubu.spec.required_palette_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__20216(s__20217){
return (new cljs.core.LazySeq(null,(function (){
var s__20217__$1 = s__20217;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20217__$1);
if(temp__5825__auto__){
var s__20217__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20217__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20217__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20219 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20218 = (0);
while(true){
if((i__20218 < size__5479__auto__)){
var vec__20224 = cljs.core._nth(c__5478__auto__,i__20218);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20224,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20224,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
cljs.core.chunk_append(b__20219,[pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''));

var G__20340 = (i__20218 + (1));
i__20218 = G__20340;
continue;
} else {
var G__20341 = (i__20218 + (1));
i__20218 = G__20341;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20219),byoubu$spec$problems_$_iter__20216(cljs.core.chunk_rest(s__20217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20219),null);
}
} else {
var vec__20234 = cljs.core.first(s__20217__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20234,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20234,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
return cljs.core.cons([pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''),byoubu$spec$problems_$_iter__20216(cljs.core.rest(s__20217__$2)));
} else {
var G__20348 = cljs.core.rest(s__20217__$2);
s__20217__$1 = G__20348;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(palette);
})(),((cljs.core.contains_QMARK_(palette,new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"accent ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)], 0))," is not a palette key"].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__20250(s__20251){
return (new cljs.core.LazySeq(null,(function (){
var s__20251__$1 = s__20251;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20251__$1);
if(temp__5825__auto__){
var s__20251__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20251__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20251__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20253 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20252 = (0);
while(true){
if((i__20252 < size__5479__auto__)){
var vec__20267 = cljs.core._nth(c__5478__auto__,i__20252);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20267,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20267,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
cljs.core.chunk_append(b__20253,[pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__20349 = (i__20252 + (1));
i__20252 = G__20349;
continue;
} else {
var G__20350 = (i__20252 + (1));
i__20252 = G__20350;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20253),byoubu$spec$problems_$_iter__20250(cljs.core.chunk_rest(s__20251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20253),null);
}
} else {
var vec__20276 = cljs.core.first(s__20251__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20276,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20276,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
return cljs.core.cons([pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__20250(cljs.core.rest(s__20251__$2)));
} else {
var G__20353 = cljs.core.rest(s__20251__$2);
s__20251__$1 = G__20353;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(band);
})(),(function (){var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,band));
var drift = (total - 1.0);
var drift__$1 = (((drift < (0)))?(- drift):drift);
if((drift__$1 > 0.001)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"content-band weights sum to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),", not 1.0"].join('')], null);
} else {
return null;
}
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__20286(s__20287){
return (new cljs.core.LazySeq(null,(function (){
var s__20287__$1 = s__20287;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20287__$1);
if(temp__5825__auto__){
var s__20287__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20287__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20287__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20289 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20288 = (0);
while(true){
if((i__20288 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__20288);
cljs.core.chunk_append(b__20289,[pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__20356 = (i__20288 + (1));
i__20288 = G__20356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20289),byoubu$spec$problems_$_iter__20286(cljs.core.chunk_rest(s__20287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20289),null);
}
} else {
var k = cljs.core.first(s__20287__$2);
return cljs.core.cons([pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__20286(cljs.core.rest(s__20287__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(scene,byoubu.spec.required_scene_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__20295(s__20296){
return (new cljs.core.LazySeq(null,(function (){
var s__20296__$1 = s__20296;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20296__$1);
if(temp__5825__auto__){
var s__20296__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20296__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20296__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20298 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20297 = (0);
while(true){
if((i__20297 < size__5479__auto__)){
var vec__20305 = cljs.core._nth(c__5478__auto__,i__20297);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20305,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20305,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
cljs.core.chunk_append(b__20298,[pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''));

var G__20357 = (i__20297 + (1));
i__20297 = G__20357;
continue;
} else {
var G__20358 = (i__20297 + (1));
i__20297 = G__20358;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20298),byoubu$spec$problems_$_iter__20295(cljs.core.chunk_rest(s__20296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20298),null);
}
} else {
var vec__20309 = cljs.core.first(s__20296__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20309,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20309,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
return cljs.core.cons([pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''),byoubu$spec$problems_$_iter__20295(cljs.core.rest(s__20296__$2)));
} else {
var G__20359 = cljs.core.rest(s__20296__$2);
s__20296__$1 = G__20359;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.select_keys(new cljs.core.Keyword("byoubu","measured","byoubu/measured",-610808208).cljs$core$IFn$_invoke$arity$1(backdrop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plate","plate",-1920178141),new cljs.core.Keyword(null,"poster","poster",-1616913550)], null)));
})(),(function (){var f = byoubu.facts.derive_facts(backdrop);
var ink = new cljs.core.Keyword("byoubu.facts","ink","byoubu.facts/ink",567836213).cljs$core$IFn$_invoke$arity$1(f);
var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__20312(s__20313){
return (new cljs.core.LazySeq(null,(function (){
var s__20313__$1 = s__20313;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20313__$1);
if(temp__5825__auto__){
var s__20313__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20313__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20313__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20315 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20314 = (0);
while(true){
if((i__20314 < size__5479__auto__)){
var vec__20317 = cljs.core._nth(c__5478__auto__,i__20314);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20317,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20317,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
cljs.core.chunk_append(b__20315,[pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''));

var G__20360 = (i__20314 + (1));
i__20314 = G__20360;
continue;
} else {
var G__20361 = (i__20314 + (1));
i__20314 = G__20361;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20315),byoubu$spec$problems_$_iter__20312(cljs.core.chunk_rest(s__20313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20315),null);
}
} else {
var vec__20320 = cljs.core.first(s__20313__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20320,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20320,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
return cljs.core.cons([pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''),byoubu$spec$problems_$_iter__20312(cljs.core.rest(s__20313__$2)));
} else {
var G__20362 = cljs.core.rest(s__20313__$2);
s__20313__$1 = G__20362;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.facts.tier_colors(backdrop));
})()], 0)));
});
byoubu.spec.valid_QMARK_ = (function byoubu$spec$valid_QMARK_(backdrop){
return cljs.core.empty_QMARK_(byoubu.spec.problems(backdrop));
});

//# sourceMappingURL=byoubu.spec.js.map
