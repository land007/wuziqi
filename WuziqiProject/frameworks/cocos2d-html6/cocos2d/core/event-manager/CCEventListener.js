cc.EventListener = cc.Class.extend({
    _onEvent: null,
    _type: 0,
    _listenerID: null,
    _registered: false,
    _fixedPriority: 0,
    _node: null,
    _paused: true,
    _isEnabled: true,
    ctor: function(type, listenerID, callback) {
        this._onEvent = callback;
        this._type = type || 0;
        this._listenerID = listenerID || "";
    },
    _setPaused: function(paused) {
        this._paused = paused;
    },
    _isPaused: function() {
        return this._paused;
    },
    _setRegistered: function(registered) {
        this._registered = registered;
    },
    _isRegistered: function() {
        return this._registered;
    },
    _getType: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->28");
    },
    _getListenerID: function() {
        return this._listenerID;
    },
    _setFixedPriority: function(fixedPriority) {
        this._fixedPriority = fixedPriority;
    },
    _getFixedPriority: function() {
        return this._fixedPriority;
    },
    _setSceneGraphPriority: function(node) {
        this._node = node;
    },
    _getSceneGraphPriority: function() {
        return this._node;
    },
    checkAvailable: function() {
        return this._onEvent != null;
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->49");
    },
    setEnabled: function(enabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->52");
    },
    isEnabled: function() {
        return this._isEnabled;
    },
    retain: function() {},
    release: function() {}
});
cc.EventListener.UNKNOWN = 0;
cc.EventListener.TOUCH_ONE_BY_ONE = 1;
cc.EventListener.TOUCH_ALL_AT_ONCE = 2;
cc.EventListener.KEYBOARD = 3;
cc.EventListener.MOUSE = 4;
cc.EventListener.ACCELERATION = 5;
cc.EventListener.ACCELERATION = 6;
cc.EventListener.CUSTOM = 8;
cc.EventListener.FOCUS = 7;
cc._EventListenerCustom = cc.EventListener.extend({
    _onCustomEvent: null,
    ctor: function(listenerId, callback) {
        this._onCustomEvent = callback;
        var selfPointer = this;
        var listener = function(event) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->77");
        };
        cc.EventListener.prototype.ctor.call(this, cc.EventListener.CUSTOM, listenerId, listener);
    },
    checkAvailable: function() {
        return cc.EventListener.prototype.checkAvailable.call(this) && this._onCustomEvent != null;
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->85");
    }
});
cc._EventListenerCustom.create = function(eventName, callback) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->89");
};
cc._EventListenerMouse = cc.EventListener.extend({
    onMouseDown: null,
    onMouseUp: null,
    onMouseMove: null,
    onMouseScroll: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->125");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->133");
    },
    checkAvailable: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->136");
    }
});
cc._EventListenerMouse.LISTENER_ID = "__cc_mouse";
cc._EventListenerMouse.create = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->141");
};
cc._EventListenerTouchOneByOne = cc.EventListener.extend({
    _claimedTouches: null,
    swallowTouches: false,
    onTouchBegan: null,
    onTouchMoved: null,
    onTouchEnded: null,
    onTouchCancelled: null,
    ctor: function() {
        cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ONE_BY_ONE, cc._EventListenerTouchOneByOne.LISTENER_ID, null);
        this._claimedTouches = [];
    },
    setSwallowTouches: function(needSwallow) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->155");
    },
    isSwallowTouches: function() {
        return this.swallowTouches;
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->167");
    },
    checkAvailable: function() {
        if (!this.onTouchBegan) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->172");
        }
        return true;
    }
});
cc._EventListenerTouchOneByOne.LISTENER_ID = "__cc_touch_one_by_one";
cc._EventListenerTouchOneByOne.create = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->179");
};
cc._EventListenerTouchAllAtOnce = cc.EventListener.extend({
    onTouchesBegan: null,
    onTouchesMoved: null,
    onTouchesEnded: null,
    onTouchesCancelled: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->187");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->195");
    },
    checkAvailable: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->202");
    }
});
cc._EventListenerTouchAllAtOnce.LISTENER_ID = "__cc_touch_all_at_once";
cc._EventListenerTouchAllAtOnce.create = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->207");
};
cc.EventListener.create = function(argObj) {
    cc.assert(argObj && argObj.event, cc._LogInfos.EventListener_create);
    var listenerType = argObj.event;
    delete argObj.event;
    var listener = null;
    if (listenerType === cc.EventListener.TOUCH_ONE_BY_ONE) {
        listener = new cc._EventListenerTouchOneByOne;
    } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->242");
    }
    for (var key in argObj) {
        listener[key] = argObj[key];
    }
    return listener;
};
cc._EventListenerFocus = cc.EventListener.extend({
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->253");
    },
    checkAvailable: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->260");
    },
    onFocusChanged: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventListener.js->269");
    }
});
cc._EventListenerFocus.LISTENER_ID = "__cc_focus_event";