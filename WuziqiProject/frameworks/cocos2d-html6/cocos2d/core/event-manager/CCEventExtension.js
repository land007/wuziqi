cc.EventAcceleration = cc.Event.extend({
    _acc: null,
    ctor: function(acc) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->4");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->5");
    }
});
cc.EventKeyboard = cc.Event.extend({
    _keyCode: 0,
    _isPressed: false,
    ctor: function(keyCode, isPressed) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->14");
    }
});
cc._EventListenerAcceleration = cc.EventListener.extend({
    _onAccelerationEvent: null,
    ctor: function(callback) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->25");
    },
    checkAvailable: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->29");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->32");
    }
});
cc._EventListenerAcceleration.LISTENER_ID = "__cc_acceleration";
cc._EventListenerAcceleration.create = function(callback) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->37");
};
cc._EventListenerKeyboard = cc.EventListener.extend({
    onKeyPressed: null,
    onKeyReleased: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->55");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->61");
    },
    checkAvailable: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->68");
    }
});
cc._EventListenerKeyboard.LISTENER_ID = "__cc_keyboard";
cc._EventListenerKeyboard.create = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventExtension.js->73");
};