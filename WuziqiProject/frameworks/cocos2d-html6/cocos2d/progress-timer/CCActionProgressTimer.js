cc.ProgressTo = cc.ActionInterval.extend({
    _to: 0,
    _from: 0,
    ctor: function(duration, percent) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->5");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->7");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->8");
    },
    initWithDuration: function(duration, percent) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->15");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->20");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->24");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->28");
    },
    update: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->33");
    }
});
cc.progressTo = function(duration, percent) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->37");
};
cc.ProgressTo.create = cc.progressTo;
cc.ProgressFromTo = cc.ActionInterval.extend({
    _to: 0,
    _from: 0,
    ctor: function(duration, fromPercentage, toPercentage) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->47");
    },
    initWithDuration: function(duration, fromPercentage, toPercentage) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->55");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->60");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->63");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->66");
    },
    update: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->71");
    }
});
cc.progressFromTo = function(duration, fromPercentage, toPercentage) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCActionProgressTimer.js->75");
};
cc.ProgressFromTo.create = cc.progressFromTo;