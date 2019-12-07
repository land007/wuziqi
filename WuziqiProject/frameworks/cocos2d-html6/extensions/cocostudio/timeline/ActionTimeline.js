ccs.ActionTimelineData = ccs.Class.extend({
    _actionTag: 0,
    ctor: function(actionTag) {
        this._init(actionTag);
    },
    _init: function(actionTag) {
        this._actionTag = actionTag;
        return true;
    },
    setActionTag: function(actionTag) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->11");
    },
    getActionTag: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->14");
    }
});
ccs.ActionTimelineData.create = function(actionTag) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->18");
};
ccs.ActionTimeline = cc.Action.extend({
    _timelineMap: null,
    _timelineList: null,
    _duration: 0,
    _time: null,
    _timeSpeed: 1,
    _frameInternal: 1 / 60,
    _playing: false,
    _currentFrame: 0,
    _startFrame: 0,
    _endFrame: 0,
    _loop: null,
    _frameEventListener: null,
    ctor: function() {
        cc.Action.prototype.ctor.call(this);
        this._timelineMap = {};
        this._timelineList = [];
        this.init();
    },
    _gotoFrame: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->43");
    },
    _stepToFrame: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->49");
    },
    _emitFrameEvent: function(frame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->54");
    },
    init: function() {
        return true;
    },
    gotoFrameAndPlay: function(startIndex, endIndex, currentFrameIndex, loop) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->79");
    },
    gotoFrameAndPause: function(startIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->85");
    },
    pause: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->88");
    },
    resume: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->91");
    },
    isPlaying: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->94");
    },
    setTimeSpeed: function(speed) {
        this._timeSpeed = speed;
    },
    getTimeSpeed: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->100");
    },
    setDuration: function(duration) {
        this._duration = duration;
    },
    getDuration: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->106");
    },
    getStartFrame: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->109");
    },
    getEndFrame: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->112");
    },
    setCurrentFrame: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->120");
    },
    getCurrentFrame: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->123");
    },
    addTimeline: function(timeline) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->138");
    },
    removeTimeline: function(timeline) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->148");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->149");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->150");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->151");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->152");
    },
    getTimelines: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->155");
    },
    setFrameEventCallFunc: function(listener) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->158");
    },
    clearFrameEventCallFunc: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->161");
    },
    clone: function() {
        var newAction = new ccs.ActionTimeline;
        newAction.setDuration(this._duration);
        newAction.setTimeSpeed(this._timeSpeed);
        for (var a in this._timelineMap) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->169");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->170");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->171");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->172");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->173");
        }
        return newAction;
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->178");
    },
    step: function(delta) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->181");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->182");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->183");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->184");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->185");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->186");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->187");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->188");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->189");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->190");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->191");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->192");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->193");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->194");
    },
    _foreachNodeDescendant: function(parent, callback) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->197");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->198");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->199");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->200");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->201");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->202");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->205");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->206");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->207");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->208");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->209");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->210");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->211");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->212");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->213");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->214");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->215");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->216");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->217");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->218");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->219");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->220");
    },
    isDone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->223");
    }
});
ccs.ActionTimeline.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/ActionTimeline.js->227");
};