cc.ActionTweenDelegate = cc.Class.extend({
    updateTweenAction: function(value, key) {}
});
cc.ActionTween = cc.ActionInterval.extend({
    key: "",
    from: 0,
    to: 0,
    delta: 0,
    ctor: function(duration, key, from, to) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->12");
    },
    initWithDuration: function(duration, key, from, to) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->21");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->28");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->31");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->34");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->39");
    }
});
cc.actionTween = function(duration, key, from, to) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionTween.js->43");
};
cc.ActionTween.create = cc.actionTween;