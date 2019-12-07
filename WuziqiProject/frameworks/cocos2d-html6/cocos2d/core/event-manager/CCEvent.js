cc.Event = cc.Class.extend({
    _type: 0,
    _isStopped: false,
    _currentTarget: null,
    _setCurrentTarget: function(target) {
        this._currentTarget = target;
    },
    ctor: function(type) {
        this._type = type;
    },
    getType: function() {
        return this._type;
    },
    stopPropagation: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->15");
    },
    isStopped: function() {
        return this._isStopped;
    },
    getCurrentTarget: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->21");
    }
});
cc.Event.TOUCH = 0;
cc.Event.KEYBOARD = 1;
cc.Event.ACCELERATION = 2;
cc.Event.MOUSE = 3;
cc.Event.FOCUS = 4;
cc.Event.CUSTOM = 6;
cc.EventCustom = cc.Event.extend({
    _eventName: null,
    _userData: null,
    ctor: function(eventName) {
        cc.Event.prototype.ctor.call(this, cc.Event.CUSTOM);
        this._eventName = eventName;
    },
    setUserData: function(data) {
        this._userData = data;
    },
    getUserData: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->41");
    },
    getEventName: function() {
        return this._eventName;
    }
});
cc.EventMouse = cc.Event.extend({
    _eventType: 0,
    _button: 0,
    _x: 0,
    _y: 0,
    _prevX: 0,
    _prevY: 0,
    _scrollX: 0,
    _scrollY: 0,
    ctor: function(eventType) {
        cc.Event.prototype.ctor.call(this, cc.Event.MOUSE);
        this._eventType = eventType;
    },
    setScrollData: function(scrollX, scrollY) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->62");
    },
    getScrollX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->65");
    },
    getScrollY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->68");
    },
    setLocation: function(x, y) {
        this._x = x;
        this._y = y;
    },
    getLocation: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->78");
    },
    getLocationInView: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->84");
    },
    _setPrevCursor: function(x, y) {
        this._prevX = x;
        this._prevY = y;
    },
    getDelta: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->94");
    },
    getDeltaX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->97");
    },
    getDeltaY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->100");
    },
    setButton: function(button) {
        this._button = button;
    },
    getButton: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->106");
    },
    getLocationX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->109");
    },
    getLocationY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->112");
    }
});
cc.EventMouse.NONE = 0;
cc.EventMouse.DOWN = 1;
cc.EventMouse.UP = 2;
cc.EventMouse.MOVE = 3;
cc.EventMouse.SCROLL = 4;
cc.EventMouse.BUTTON_LEFT = 0;
cc.EventMouse.BUTTON_RIGHT = 2;
cc.EventMouse.BUTTON_MIDDLE = 1;
cc.EventMouse.BUTTON_4 = 3;
cc.EventMouse.BUTTON_5 = 4;
cc.EventMouse.BUTTON_6 = 5;
cc.EventMouse.BUTTON_7 = 6;
cc.EventMouse.BUTTON_8 = 7;
cc.EventTouch = cc.Event.extend({
    _eventCode: 0,
    _touches: null,
    ctor: function(arr) {
        cc.Event.prototype.ctor.call(this, cc.Event.TOUCH);
        this._touches = arr || [];
    },
    getEventCode: function() {
        return this._eventCode;
    },
    getTouches: function() {
        return this._touches;
    },
    _setEventCode: function(eventCode) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->142");
    },
    _setTouches: function(touches) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->145");
    }
});
cc.EventTouch.MAX_TOUCHES = 5;
cc.EventTouch.EventCode = {
    BEGAN: 0,
    MOVED: 1,
    ENDED: 2,
    CANCELLED: 3
};
cc.EventFocus = cc.Event.extend({
    _widgetGetFocus: null,
    _widgetLoseFocus: null,
    ctor: function(widgetLoseFocus, widgetGetFocus) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEvent.js->161");
    }
});