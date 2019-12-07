ccs.ANIMATION_TYPE_SINGLE_FRAME = -4;
ccs.ANIMATION_TYPE_NO_LOOP = -3;
ccs.ANIMATION_TYPE_TO_LOOP_FRONT = -2;
ccs.ANIMATION_TYPE_TO_LOOP_BACK = -1;
ccs.ANIMATION_TYPE_LOOP_FRONT = 0;
ccs.ANIMATION_TYPE_LOOP_BACK = 1;
ccs.ANIMATION_TYPE_MAX = 2;
ccs.ProcessBase = ccs.Class.extend({
    _processScale: 1,
    _isComplete: true,
    _isPause: true,
    _isPlaying: false,
    _currentPercent: 0,
    _rawDuration: 0,
    _loopType: 0,
    _tweenEasing: 0,
    animationInternal: null,
    _currentFrame: 0,
    _durationTween: 0,
    _nextFrameIndex: 0,
    _curFrameIndex: null,
    _isLoopBack: false,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->24");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->25");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->27");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->28");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->29");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->35");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->36");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->37");
    },
    pause: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->41");
    },
    resume: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->45");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->49");
    },
    play: function(durationTo, durationTween, loop, tweenEasing) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->55");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->56");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->57");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->77");
    },
    gotoFrame: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->90");
    },
    getCurrentFrameIndex: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->94");
    },
    updateHandler: function() {},
    isPause: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->98");
    },
    isComplete: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->101");
    },
    getCurrentPercent: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->104");
    },
    getRawDuration: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->107");
    },
    getLoop: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->110");
    },
    getTweenEasing: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->113");
    },
    getAnimationInternal: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->116");
    },
    setAnimationInternal: function(animationInternal) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->119");
    },
    getProcessScale: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->122");
    },
    setProcessScale: function(processScale) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->125");
    },
    isPlaying: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCProcessBase.js->128");
    }
});
var _p = ccs.ProcessBase.prototype;
_p.currentFrameIndex;
cc.defineGetterSetter(_p, "currentFrameIndex", _p.getCurrentFrameIndex);
_p.paused;
cc.defineGetterSetter(_p, "paused", _p.isPause);
_p.completed;
cc.defineGetterSetter(_p, "completed", _p.isComplete);
_p.currentPercent;
cc.defineGetterSetter(_p, "currentPercent", _p.getCurrentPercent);
_p.rawDuration;
cc.defineGetterSetter(_p, "rawDuration", _p.getRawDuration);
_p.loop;
cc.defineGetterSetter(_p, "loop", _p.getLoop);
_p.tweenEasing;
cc.defineGetterSetter(_p, "tweenEasing", _p.getTweenEasing);
_p.playing;
cc.defineGetterSetter(_p, "playing", _p.isPlaying);
_p = null;