ccs.TweenType = {
    customEasing: -1,
    linear: 0,
    sineEaseIn: 1,
    sineEaseOut: 2,
    sineEaseInOut: 3,
    quadEaseIn: 4,
    quadEaseOut: 5,
    quadEaseInOut: 6,
    cubicEaseIn: 7,
    cubicEaseOut: 8,
    cubicEaseInOut: 9,
    quartEaseIn: 10,
    quartEaseOut: 11,
    quartEaseInOut: 12,
    quintEaseIn: 13,
    quintEaseOut: 14,
    quintEaseInOut: 15,
    expoEaseIn: 16,
    expoEaseOut: 17,
    expoEaseInOut: 18,
    circEaseIn: 19,
    eircEaseOut: 20,
    circEaseInOut: 21,
    elasticEaseIn: 22,
    elasticEaseOut: 23,
    elasticEaseInOut: 24,
    backEaseIn: 25,
    backEaseOut: 26,
    backEaseInOut: 27,
    bounceEaseIn: 28,
    bounceEaseOut: 29,
    bounceEaseInOut: 30,
    tweenEasingMax: 1e4
};
ccs.TweenFunction = ccs.TweenFunction || ccs.Class.extend({});
ccs.DOUBLE_PI = ccs.M_PI_X_2 = Math.PI * 2;
ccs.HALF_PI = ccs.M_PI_2 = Math.PI / 2;
ccs.M_PI = Math.PI;
ccs.TweenFunction.tweenTo = function(time, type, easingParam) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->50");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->51");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->55");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->56");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->57");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->112");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->113");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->148");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->149");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->150");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->151");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->152");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->155");
};
ccs.TweenFunction.linear = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->158");
};
ccs.TweenFunction.sineEaseIn = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->161");
};
ccs.TweenFunction.sineEaseOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->164");
};
ccs.TweenFunction.sineEaseInOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->167");
};
ccs.TweenFunction.quadEaseIn = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->170");
};
ccs.TweenFunction.quadEaseOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->173");
};
ccs.TweenFunction.quadEaseInOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->176");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->177");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->178");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->179");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->180");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->181");
};
ccs.TweenFunction.cubicEaseIn = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->184");
};
ccs.TweenFunction.cubicEaseOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->187");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->188");
};
ccs.TweenFunction.cubicEaseInOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->191");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->192");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->193");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->194");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->195");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->196");
};
ccs.TweenFunction.quartEaseIn = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->199");
};
ccs.TweenFunction.quartEaseOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->202");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->203");
};
ccs.TweenFunction.quartEaseInOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->206");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->207");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->208");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->209");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->210");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->211");
};
ccs.TweenFunction.quintEaseIn = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->214");
};
ccs.TweenFunction.quintEaseOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->217");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->218");
};
ccs.TweenFunction.quintEaseInOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->221");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->222");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->223");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->224");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->225");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->226");
};
ccs.TweenFunction.expoEaseIn = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->229");
};
ccs.TweenFunction.expoEaseOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->232");
};
ccs.TweenFunction.expoEaseInOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->235");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->236");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->237");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->238");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->239");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->240");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->241");
};
ccs.TweenFunction.circEaseIn = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->244");
};
ccs.TweenFunction.circEaseOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->247");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->248");
};
ccs.TweenFunction.circEaseInOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->251");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->252");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->253");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->254");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->255");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->256");
};
ccs.TweenFunction.elasticEaseIn = function(time, easingParam) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->259");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->260");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->261");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->262");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->263");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->264");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->265");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->266");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->267");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->268");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->269");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->270");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->271");
};
ccs.TweenFunction.elasticEaseOut = function(time, easingParam) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->274");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->275");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->276");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->277");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->278");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->279");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->280");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->281");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->282");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->283");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->284");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->285");
};
ccs.TweenFunction.elasticEaseInOut = function(time, easingParam) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->288");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->289");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->290");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->291");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->292");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->293");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->294");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->295");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->296");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->297");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->298");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->299");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->300");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->301");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->302");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->303");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->304");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->305");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->306");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->307");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->308");
};
ccs.TweenFunction.backEaseIn = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->311");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->312");
};
ccs.TweenFunction.backEaseOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->315");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->316");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->317");
};
ccs.TweenFunction.backEaseInOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->320");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->321");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->322");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->323");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->324");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->325");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->326");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->327");
};
ccs.bounceTime = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->330");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->331");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->332");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->333");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->334");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->335");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->336");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->337");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->338");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->339");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->340");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->341");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->342");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->343");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->344");
};
ccs.TweenFunction.bounceEaseIn = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->347");
};
ccs.TweenFunction.bounceEaseOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->350");
};
ccs.TweenFunction.bounceEaseInOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->353");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->354");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->355");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->356");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->357");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->358");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->359");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->360");
};
ccs.TweenFunction.customEase = function(time, easingParam) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->363");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->364");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->365");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->366");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->367");
};
ccs.TweenFunction.easeIn = function(time, rate) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->370");
};
ccs.TweenFunction.easeOut = function(time, rate) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->373");
};
ccs.TweenFunction.easeInOut = function(time, rate) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->376");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->377");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->378");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->379");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->380");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->381");
};
ccs.TweenFunction.quadraticIn = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->384");
};
ccs.TweenFunction.quadraticOut = function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->387");
};
ccs.TweenFunction.bezieratFunction = function(a, b, c, d, t) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCTweenFunction.js->390");
};