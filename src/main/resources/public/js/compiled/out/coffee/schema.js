// Compiled by ClojureScript 1.7.170 {}
goog.provide('coffee.schema');
goog.require('cljs.core');
coffee.schema.schema = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("session","organizer","session/organizer",405688552),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","doc","db/doc",1913350069),"Organizer for this session",new cljs.core.Keyword("db.install","_attribute","db.install/_attribute",1853441294),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("user","choice","user/choice",-1378487514),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","doc","db/doc",1913350069),"User's coffee choice",new cljs.core.Keyword("db.install","_attribute","db.install/_attribute",1853441294),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("session","name","session/name",-279653677),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","doc","db/doc",1913350069),"Session's name identifier",new cljs.core.Keyword("db.install","_attribute","db.install/_attribute",1853441294),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","doc","db/doc",1913350069),"User's name",new cljs.core.Keyword("db.install","_attribute","db.install/_attribute",1853441294),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("coffee","name","coffee/name",925343749),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","doc","db/doc",1913350069),"User's name",new cljs.core.Keyword("db.install","_attribute","db.install/_attribute",1853441294),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)], null)], null);
coffee.schema.get_session_name = (function coffee$schema$get_session_name(){
return "session";
});
coffee.schema.create_schema = (function coffee$schema$create_schema(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__6478_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__6478_SHARP_)],[cljs.core.dissoc.call(null,p1__6478_SHARP_,new cljs.core.Keyword("db","ident","db/ident",-737096))]);
}),coffee.schema.schema));
});

//# sourceMappingURL=schema.js.map?rel=1459672176358