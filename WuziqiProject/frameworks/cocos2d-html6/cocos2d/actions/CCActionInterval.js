cc.ActionInterval = cc.FiniteTimeAction.extend({
    _elapsed: 0,
    _firstTick: false,
    _easeList: null,
    _timesForRepeat: 1,
    _repeatForever: false,
    _repeatMethod: false,
    _speed: 1,
    _speedMethod: false,
    ctor: function(d) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->18");
    },
    getElapsed: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->21");
    },
    initWithDuration: function(d) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->27");
    },
    isDone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->30");
    },
    _cloneDecoration: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->38");
    },
    _reverseEaseList: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->46");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->51");
    },
    easing: function(easeObj) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->62");
    },
    _computeEaseTime: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->72");
    },
    step: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->90");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->95");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->99");
    },
    setAmplitudeRate: function(amp) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->102");
    },
    getAmplitudeRate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->106");
    },
    speed: function(speed) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->115");
    },
    getSpeed: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->118");
    },
    setSpeed: function(speed) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->122");
    },
    repeat: function(times) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->132");
    },
    repeatForever: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->138");
    }
});
cc.actionInterval = function(d) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->142");
};
cc.ActionInterval.create = cc.actionInterval;
cc.Sequence = cc.ActionInterval.extend({
    _actions: null,
    _split: null,
    _last: 0,
    ctor: function(tempArray) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->166");
    },
    initWithTwoActions: function(actionOne, actionTwo) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->176");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->182");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->187");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->193");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->227");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->233");
    }
});
cc.sequence = function(tempArray) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->256");
};
cc.Sequence.create = cc.sequence;
cc.Sequence._actionOneTwo = function(actionOne, actionTwo) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->262");
};
cc.Repeat = cc.ActionInterval.extend({
    _times: 0,
    _total: 0,
    _nextDt: 0,
    _actionInstant: false,
    _innerAction: null,
    ctor: function(action, times) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->272");
    },
    initWithAction: function(action, times) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->286");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->292");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->295");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->298");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->302");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->319");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->320");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->321");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->324");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->325");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->332");
    },
    isDone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->335");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->341");
    },
    setInnerAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->346");
    },
    getInnerAction: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->349");
    }
});
cc.repeat = function(action, times) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->353");
};
cc.Repeat.create = cc.repeat;
cc.RepeatForever = cc.ActionInterval.extend({
    _innerAction: null,
    ctor: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->361");
    },
    initWithAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->368");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->374");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->378");
    },
    step: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->386");
    },
    isDone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->389");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->392");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->393");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->395");
    },
    setInnerAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->398");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->400");
    },
    getInnerAction: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->403");
    }
});
cc.repeatForever = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->407");
};
cc.RepeatForever.create = cc.repeatForever;
cc.Spawn = cc.ActionInterval.extend({
    _one: null,
    _two: null,
    ctor: function(tempArray) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->428");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->430");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->431");
    },
    initWithTwoActions: function(action1, action2) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->441");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->442");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->445");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->446");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->447");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->448");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->449");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->450");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->451");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->452");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->455");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->456");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->457");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->458");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->461");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->462");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->463");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->466");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->467");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->468");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->471");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->472");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->475");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->476");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->477");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->480");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->481");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->482");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->483");
    }
});
cc.spawn = function(tempArray) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->487");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->488");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->489");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->490");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->491");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->492");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->493");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->494");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->495");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->496");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->497");
};
cc.Spawn.create = cc.spawn;
cc.Spawn._actionOneTwo = function(action1, action2) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->501");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->502");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->503");
};
cc.RotateTo = cc.ActionInterval.extend({
    _dstAngleX: 0,
    _startAngleX: 0,
    _diffAngleX: 0,
    _dstAngleY: 0,
    _startAngleY: 0,
    _diffAngleY: 0,
    ctor: function(duration, deltaAngleX, deltaAngleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->513");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->514");
    },
    initWithDuration: function(duration, deltaAngleX, deltaAngleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->517");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->518");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->519");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->520");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->521");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->522");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->525");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->526");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->527");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->528");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->531");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->532");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->533");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->534");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->535");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->536");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->537");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->538");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->539");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->540");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->541");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->542");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->543");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->544");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->545");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->546");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->547");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->548");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->549");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->550");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->553");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->556");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->557");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->558");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->559");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->560");
    }
});
cc.rotateTo = function(duration, deltaAngleX, deltaAngleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->564");
};
cc.RotateTo.create = cc.rotateTo;
cc.RotateBy = cc.ActionInterval.extend({
    _angleX: 0,
    _startAngleX: 0,
    _angleY: 0,
    _startAngleY: 0,
    ctor: function(duration, deltaAngleX, deltaAngleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->573");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->574");
    },
    initWithDuration: function(duration, deltaAngleX, deltaAngleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->577");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->578");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->579");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->580");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->581");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->582");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->585");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->586");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->587");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->588");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->591");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->592");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->593");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->596");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->597");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->598");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->599");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->600");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->603");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->604");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->605");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->606");
    }
});
cc.rotateBy = function(duration, deltaAngleX, deltaAngleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->610");
};
cc.RotateBy.create = cc.rotateBy;
cc.MoveBy = cc.ActionInterval.extend({
    _positionDelta: null,
    _startPosition: null,
    _previousPosition: null,
    ctor: function(duration, deltaPos, deltaY) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->618");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->619");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->620");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->621");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->622");
    },
    initWithDuration: function(duration, position, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->625");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->626");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->627");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->628");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->629");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->630");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->631");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->632");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->633");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->634");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->637");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->638");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->639");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->640");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->643");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->644");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->645");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->646");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->647");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->648");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->649");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->652");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->653");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->654");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->655");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->656");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->657");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->658");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->659");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->660");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->661");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->662");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->663");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->664");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->665");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->666");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->667");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->668");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->669");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->670");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->671");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->674");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->675");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->676");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->677");
    }
});
cc.moveBy = function(duration, deltaPos, deltaY) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->681");
};
cc.MoveBy.create = cc.moveBy;
cc.MoveTo = cc.MoveBy.extend({
    _endPosition: null,
    ctor: function(duration, position, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->687");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->688");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->689");
    },
    initWithDuration: function(duration, position, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->692");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->693");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->694");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->695");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->696");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->697");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->698");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->699");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->700");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->701");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->704");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->705");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->706");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->707");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->710");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->711");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->712");
    }
});
cc.moveTo = function(duration, position, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->716");
};
cc.MoveTo.create = cc.moveTo;
cc.SkewTo = cc.ActionInterval.extend({
    _skewX: 0,
    _skewY: 0,
    _startSkewX: 0,
    _startSkewY: 0,
    _endSkewX: 0,
    _endSkewY: 0,
    _deltaX: 0,
    _deltaY: 0,
    ctor: function(t, sx, sy) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->729");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->730");
    },
    initWithDuration: function(t, sx, sy) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->733");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->734");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->735");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->736");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->737");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->738");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->739");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->742");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->743");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->744");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->745");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->748");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->749");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->750");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->751");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->752");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->753");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->754");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->755");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->756");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->757");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->758");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->759");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->760");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->761");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->762");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->763");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->764");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->767");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->768");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->769");
    }
});
cc.skewTo = function(t, sx, sy) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->773");
};
cc.SkewTo.create = cc.skewTo;
cc.SkewBy = cc.SkewTo.extend({
    ctor: function(t, sx, sy) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->778");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->779");
    },
    initWithDuration: function(t, deltaSkewX, deltaSkewY) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->782");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->783");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->784");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->785");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->786");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->787");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->788");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->791");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->792");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->793");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->794");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->797");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->798");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->799");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->800");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->801");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->804");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->805");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->806");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->807");
    }
});
cc.skewBy = function(t, sx, sy) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->811");
};
cc.SkewBy.create = cc.skewBy;
cc.JumpBy = cc.ActionInterval.extend({
    _startPosition: null,
    _delta: null,
    _height: 0,
    _jumps: 0,
    _previousPosition: null,
    ctor: function(duration, position, y, height, jumps) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->821");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->822");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->823");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->824");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->825");
    },
    initWithDuration: function(duration, position, y, height, jumps) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->828");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->829");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->830");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->831");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->832");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->833");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->834");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->835");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->836");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->837");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->838");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->839");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->840");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->841");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->844");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->845");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->846");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->847");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->850");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->851");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->852");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->853");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->854");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->855");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->856");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->859");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->860");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->861");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->862");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->863");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->864");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->865");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->866");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->867");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->868");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->869");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->870");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->871");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->872");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->873");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->874");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->875");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->876");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->877");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->878");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->879");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->880");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->883");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->884");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->885");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->886");
    }
});
cc.jumpBy = function(duration, position, y, height, jumps) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->890");
};
cc.JumpBy.create = cc.jumpBy;
cc.JumpTo = cc.JumpBy.extend({
    _endPosition: null,
    ctor: function(duration, position, y, height, jumps) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->896");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->897");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->898");
    },
    initWithDuration: function(duration, position, y, height, jumps) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->901");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->902");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->903");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->904");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->905");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->906");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->907");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->908");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->909");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->910");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->913");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->914");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->915");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->918");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->919");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->920");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->921");
    }
});
cc.jumpTo = function(duration, position, y, height, jumps) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->925");
};
cc.JumpTo.create = cc.jumpTo;
cc.bezierAt = function(a, b, c, d, t) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->929");
};
cc.BezierBy = cc.ActionInterval.extend({
    _config: null,
    _startPosition: null,
    _previousPosition: null,
    ctor: function(t, c) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->936");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->937");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->938");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->939");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->940");
    },
    initWithDuration: function(t, c) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->943");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->944");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->945");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->946");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->947");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->950");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->951");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->952");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->953");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->954");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->955");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->956");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->957");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->958");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->961");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->962");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->963");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->964");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->965");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->966");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->967");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->970");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->971");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->972");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->973");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->974");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->975");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->976");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->977");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->978");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->979");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->980");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->981");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->982");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->983");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->984");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->985");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->986");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->987");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->988");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->989");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->990");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->991");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->992");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->993");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->994");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->995");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->996");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->997");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->998");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1001");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1002");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1003");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1004");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1005");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1006");
    }
});
cc.bezierBy = function(t, c) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1010");
};
cc.BezierBy.create = cc.bezierBy;
cc.BezierTo = cc.BezierBy.extend({
    _toConfig: null,
    ctor: function(t, c) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1016");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1017");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1018");
    },
    initWithDuration: function(t, c) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1021");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1022");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1023");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1024");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1025");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1028");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1029");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1030");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1031");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1034");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1035");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1036");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1037");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1038");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1039");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1040");
    }
});
cc.bezierTo = function(t, c) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1044");
};
cc.BezierTo.create = cc.bezierTo;
cc.ScaleTo = cc.ActionInterval.extend({
    _scaleX: 1,
    _scaleY: 1,
    _startScaleX: 1,
    _startScaleY: 1,
    _endScaleX: 0,
    _endScaleY: 0,
    _deltaX: 0,
    _deltaY: 0,
    ctor: function(duration, sx, sy) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1057");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1058");
    },
    initWithDuration: function(duration, sx, sy) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1061");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1062");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1063");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1064");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1065");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1066");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1069");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1070");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1071");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1072");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1075");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1076");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1077");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1078");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1079");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1082");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1083");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1084");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1085");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1086");
    }
});
cc.scaleTo = function(duration, sx, sy) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1090");
};
cc.ScaleTo.create = cc.scaleTo;
cc.ScaleBy = cc.ScaleTo.extend({
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1095");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1096");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1097");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1100");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1101");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1102");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1103");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1106");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1107");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1108");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1109");
    }
});
cc.scaleBy = function(duration, sx, sy) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1113");
};
cc.ScaleBy.create = cc.scaleBy;
cc.Blink = cc.ActionInterval.extend({
    _times: 0,
    _originalState: false,
    ctor: function(duration, blinks) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1120");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1121");
    },
    initWithDuration: function(duration, blinks) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1124");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1125");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1126");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1127");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1128");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1131");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1132");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1133");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1134");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1137");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1138");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1139");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1140");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1141");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1142");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1145");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1146");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1149");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1150");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1153");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1154");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1155");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1156");
    }
});
cc.blink = function(duration, blinks) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1160");
};
cc.Blink.create = cc.blink;
cc.FadeTo = cc.ActionInterval.extend({
    _toOpacity: 0,
    _fromOpacity: 0,
    ctor: function(duration, opacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1167");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1168");
    },
    initWithDuration: function(duration, opacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1171");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1172");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1173");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1174");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1175");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1178");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1179");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1180");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1181");
    },
    update: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1184");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1185");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1186");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1189");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1190");
    }
});
cc.fadeTo = function(duration, opacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1194");
};
cc.FadeTo.create = cc.fadeTo;
cc.FadeIn = cc.FadeTo.extend({
    _reverseAction: null,
    ctor: function(duration) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1200");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1201");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1202");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1203");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1204");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1207");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1208");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1209");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1210");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1211");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1214");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1215");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1216");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1217");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1220");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1221");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1222");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1223");
    }
});
cc.fadeIn = function(duration) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1227");
};
cc.FadeIn.create = cc.fadeIn;
cc.FadeOut = cc.FadeTo.extend({
    ctor: function(duration) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1232");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1233");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1234");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1235");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1236");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1239");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1240");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1241");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1242");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1243");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1244");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1247");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1248");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1249");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1250");
    }
});
cc.fadeOut = function(d) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1254");
};
cc.FadeOut.create = cc.fadeOut;
cc.TintTo = cc.ActionInterval.extend({
    _to: null,
    _from: null,
    ctor: function(duration, red, green, blue) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1261");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1262");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1263");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1264");
    },
    initWithDuration: function(duration, red, green, blue) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1267");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1268");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1269");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1270");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1271");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1274");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1275");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1276");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1277");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1278");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1281");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1282");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1285");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1286");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1287");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1288");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1289");
    }
});
cc.tintTo = function(duration, red, green, blue) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1293");
};
cc.TintTo.create = cc.tintTo;
cc.TintBy = cc.ActionInterval.extend({
    _deltaR: 0,
    _deltaG: 0,
    _deltaB: 0,
    _fromR: 0,
    _fromG: 0,
    _fromB: 0,
    ctor: function(duration, deltaRed, deltaGreen, deltaBlue) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1304");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1305");
    },
    initWithDuration: function(duration, deltaRed, deltaGreen, deltaBlue) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1308");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1309");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1310");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1311");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1312");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1313");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1314");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1317");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1318");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1319");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1320");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1323");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1324");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1325");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1326");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1327");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1330");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1331");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1334");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1335");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1336");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1337");
    }
});
cc.tintBy = function(duration, deltaRed, deltaGreen, deltaBlue) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1341");
};
cc.TintBy.create = cc.tintBy;
cc.DelayTime = cc.ActionInterval.extend({
    update: function(dt) {},
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1347");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1348");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1349");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1350");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1353");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1354");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1355");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1356");
    }
});
cc.delayTime = function(d) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1360");
};
cc.DelayTime.create = cc.delayTime;
cc.ReverseTime = cc.ActionInterval.extend({
    _other: null,
    ctor: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1366");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1367");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1368");
    },
    initWithAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1371");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1372");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1373");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1374");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1375");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1376");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1377");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1378");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1379");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1380");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1381");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1384");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1385");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1386");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1387");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1390");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1391");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1394");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1395");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1396");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1397");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1400");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1403");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1404");
    }
});
cc.reverseTime = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1408");
};
cc.ReverseTime.create = cc.reverseTime;
cc.Animate = cc.ActionInterval.extend({
    _animation: null,
    _nextFrame: 0,
    _origFrame: null,
    _executedLoops: 0,
    _splitTimes: null,
    ctor: function(animation) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1418");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1419");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1420");
    },
    getAnimation: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1423");
    },
    setAnimation: function(animation) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1426");
    },
    initWithAnimation: function(animation) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1429");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1430");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1431");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1432");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1433");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1434");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1435");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1436");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1437");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1438");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1439");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1440");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1441");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1442");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1443");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1444");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1445");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1446");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1447");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1448");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1449");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1450");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1451");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1452");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1455");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1456");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1457");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1458");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1461");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1462");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1463");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1464");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1465");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1466");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1469");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1470");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1471");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1472");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1473");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1474");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1475");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1476");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1477");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1478");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1479");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1480");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1481");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1482");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1483");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1484");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1485");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1486");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1487");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1488");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1491");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1492");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1493");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1494");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1495");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1496");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1497");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1498");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1499");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1500");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1501");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1502");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1503");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1504");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1505");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1506");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1507");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1508");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1509");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1512");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1513");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1514");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1515");
    }
});
cc.animate = function(animation) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1519");
};
cc.Animate.create = cc.animate;
cc.TargetedAction = cc.ActionInterval.extend({
    _action: null,
    _forcedTarget: null,
    ctor: function(target, action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1526");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1527");
    },
    initWithTarget: function(target, action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1530");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1531");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1532");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1533");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1534");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1535");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1538");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1539");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1540");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1541");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1544");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1545");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1548");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1551");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1552");
    },
    getForcedTarget: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1555");
    },
    setForcedTarget: function(forcedTarget) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1558");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1559");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1560");
    }
});
cc.targetedAction = function(target, action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInterval.js->1564");
};
cc.TargetedAction.create = cc.targetedAction;