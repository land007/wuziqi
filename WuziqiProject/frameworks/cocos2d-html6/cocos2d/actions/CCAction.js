cc.ACTION_TAG_INVALID = -1;
cc.Action = cc.Class.extend({
    originalTarget: null,
    target: null,
    tag: cc.ACTION_TAG_INVALID,
    ctor: function() {
        this.originalTarget = null;
        this.target = null;
        this.tag = cc.ACTION_TAG_INVALID;
    },
    copy: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->13");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->20");
    },
    isDone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->23");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->27");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->30");
    },
    step: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->33");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->36");
    },
    getTarget: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->39");
    },
    setTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->42");
    },
    getOriginalTarget: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->45");
    },
    setOriginalTarget: function(originalTarget) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->48");
    },
    getTag: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->51");
    },
    setTag: function(tag) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->54");
    },
    retain: function() {},
    release: function() {}
});
cc.action = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->60");
};
cc.Action.create = cc.action;
cc.FiniteTimeAction = cc.Action.extend({
    _duration: 0,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->67");
    },
    getDuration: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->70");
    },
    setDuration: function(duration) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->73");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->77");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->80");
    }
});
cc.Speed = cc.Action.extend({
    _speed: 0,
    _innerAction: null,
    ctor: function(action, speed) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->90");
    },
    getSpeed: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->93");
    },
    setSpeed: function(speed) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->96");
    },
    initWithAction: function(action, speed) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->104");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->109");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->113");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->117");
    },
    step: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->120");
    },
    isDone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->123");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->126");
    },
    setInnerAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->131");
    },
    getInnerAction: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->134");
    }
});
cc.speed = function(action, speed) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->138");
};
cc.Speed.create = cc.speed;
cc.Follow = cc.Action.extend({
    _followedNode: null,
    _boundarySet: false,
    _boundaryFullyCovered: false,
    _halfScreenSize: null,
    _fullScreenSize: null,
    _worldRect: null,
    leftBoundary: 0,
    rightBoundary: 0,
    topBoundary: 0,
    bottomBoundary: 0,
    ctor: function(followedNode, rect) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->166");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->173");
    },
    isBoundarySet: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->176");
    },
    setBoudarySet: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->179");
    },
    initWithTarget: function(followedNode, rect) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->209");
    },
    step: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->224");
    },
    isDone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->227");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->231");
    }
});
cc.follow = function(followedNode, rect) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js->235");
};
cc.Follow.create = cc.follow;