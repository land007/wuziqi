ccs.ActionNode = ccs.Class.extend({
    _currentFrameIndex: 0,
    _destFrameIndex: 0,
    _unitTime: 0,
    _actionTag: 0,
    _object: null,
    _actionSpawn: null,
    _action: null,
    _frameArray: null,
    _frameArrayNum: 0,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->12");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->13");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->14");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->15");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->16");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->17");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->18");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->19");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->20");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->21");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->23");
    },
    initWithDictionary: function(dic, root) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->27");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->28");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->29");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->35");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->36");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->37");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->38");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->50");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->51");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->55");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->56");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->57");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->99");
    },
    _initActionNodeFromRoot: function(root) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->107");
    },
    setUnitTime: function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->111");
    },
    getUnitTime: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->114");
    },
    setActionTag: function(tag) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->117");
    },
    getActionTag: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->120");
    },
    setObject: function(node) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->123");
    },
    getObject: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->126");
    },
    getActionNode: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->132");
    },
    insertFrame: function(index, frame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->140");
    },
    addFrame: function(frame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->148");
    },
    deleteFrame: function(frame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->151");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->152");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->156");
    },
    clearAllFrame: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->159");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->160");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->161");
    },
    _refreshActionProperty: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->164");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->165");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->166");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->167");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->169");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->170");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->171");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->172");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->173");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->174");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->175");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->176");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->177");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->178");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->179");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->180");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->181");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->182");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->183");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->184");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->185");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->186");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->187");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->188");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->189");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->190");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->191");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->192");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->193");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->194");
    },
    playAction: function(fun) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->197");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->198");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->199");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->200");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->201");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->202");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->203");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->204");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->205");
    },
    _runAction: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->208");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->209");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->210");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->211");
    },
    stopAction: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->214");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->215");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->216");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->217");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->218");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->219");
    },
    getFirstFrameIndex: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->222");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->223");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->224");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->225");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->226");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->227");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->228");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->229");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->230");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->231");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->232");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->233");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->234");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->235");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->236");
    },
    getLastFrameIndex: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->239");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->240");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->241");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->242");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->243");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->244");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->245");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->246");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->247");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->248");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->249");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->250");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->251");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->252");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->253");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->254");
    },
    updateActionToTimeLine: function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->257");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->258");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->259");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->260");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->261");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->262");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->263");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->264");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->265");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->266");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->267");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->268");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->269");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->270");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->271");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->272");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->273");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->274");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->275");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->276");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->277");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->278");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->279");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->280");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->281");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->282");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->283");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->284");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->285");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->286");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->287");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->288");
    },
    _easingToFrame: function(duration, delayTime, destFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->291");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->292");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->293");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->294");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->295");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->296");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->297");
    },
    isActionDoneOnce: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->300");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->301");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->302");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionNode.js->303");
    }
});