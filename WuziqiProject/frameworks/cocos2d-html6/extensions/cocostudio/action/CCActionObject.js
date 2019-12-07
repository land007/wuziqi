ccs.ActionObject = ccs.Class.extend({
    _actionNodeList: null,
    _name: "",
    _loop: false,
    _pause: false,
    _playing: false,
    _unitTime: 0,
    _currentTime: 0,
    _scheduler: null,
    _callback: null,
    _fTotalTime: 0,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->13");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->14");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->15");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->16");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->17");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->18");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->19");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->20");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->21");
    },
    setName: function(name) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->24");
    },
    getName: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->27");
    },
    setLoop: function(loop) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->30");
    },
    getLoop: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->33");
    },
    setUnitTime: function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->36");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->37");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->38");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->41");
    },
    getUnitTime: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->44");
    },
    getCurrentTime: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->47");
    },
    setCurrentTime: function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->50");
    },
    getTotalTime: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->53");
    },
    isPlaying: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->56");
    },
    initWithDictionary: function(dic, root) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->75");
    },
    addActionNode: function(node) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->82");
    },
    removeActionNode: function(node) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->88");
    },
    play: function(fun) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->103");
    },
    pause: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->107");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->112");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->113");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->116");
    },
    updateToFrameByTime: function(time) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->123");
    },
    simulationActionUpdate: function(dt) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionObject.js->143");
    }
});