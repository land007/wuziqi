ccs.DisplayManager = ccs.Class.extend({
    _decoDisplayList: null,
    _currentDecoDisplay: null,
    _displayRenderNode: null,
    _displayIndex: null,
    _forceChangeDisplay: false,
    _bone: null,
    _visible: true,
    _displayType: null,
    ctor: function(bone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->11");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->12");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->13");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->14");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->15");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->16");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->17");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->18");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->19");
    },
    init: function(bone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->24");
    },
    addDisplay: function(display, index) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->27");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->28");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->29");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->35");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->36");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->37");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->38");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->50");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->51");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->55");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->56");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->57");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->91");
    },
    _addDisplayOther: function(decoDisplay, display) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->112");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->113");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->136");
    },
    removeDisplay: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->143");
    },
    getDecorativeDisplayList: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->146");
    },
    changeDisplayWithIndex: function(index, force) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->149");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->150");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->151");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->152");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->156");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->159");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->160");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->161");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->162");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->163");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->164");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->165");
    },
    changeDisplayWithName: function(name, force) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->169");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->170");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->171");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->172");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->173");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->174");
    },
    setCurrentDecorativeDisplay: function(decoDisplay) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->177");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->178");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->179");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->180");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->181");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->182");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->183");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->184");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->185");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->186");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->187");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->188");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->189");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->190");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->191");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->192");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->193");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->194");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->195");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->196");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->197");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->198");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->199");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->200");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->201");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->202");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->203");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->204");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->205");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->206");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->207");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->208");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->209");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->210");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->211");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->212");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->213");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->214");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->215");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->216");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->217");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->218");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->219");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->220");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->221");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->222");
    },
    getDisplayRenderNode: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->225");
    },
    getDisplayRenderNodeType: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->228");
    },
    getCurrentDisplayIndex: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->231");
    },
    getCurrentDecorativeDisplay: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->234");
    },
    getDecorativeDisplayByIndex: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->237");
    },
    initDisplayList: function(boneData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->240");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->241");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->242");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->243");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->244");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->245");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->246");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->247");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->248");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->249");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->250");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->251");
    },
    containPoint: function(point, y) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->254");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->255");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->256");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->257");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->258");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->259");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->260");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->261");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->262");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->263");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->264");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->265");
    },
    setVisible: function(visible) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->268");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->269");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->270");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->271");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->272");
    },
    isVisible: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->275");
    },
    getContentSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->278");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->279");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->280");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->281");
    },
    getBoundingBox: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->284");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->285");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->286");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->287");
    },
    getAnchorPoint: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->290");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->291");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->292");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->293");
    },
    getAnchorPointInPoints: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->296");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->297");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->298");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->299");
    },
    getForceChangeDisplay: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->302");
    },
    release: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->305");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->306");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->307");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->308");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->309");
    }
});
ccs.DisplayManager.create = function(bone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCDisplayManager.js->313");
};