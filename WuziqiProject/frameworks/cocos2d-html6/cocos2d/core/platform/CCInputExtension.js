var _p = cc.inputManager;
_p.setAccelerometerEnabled = function(isEnable) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->3");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->4");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->5");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->7");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->8");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->15");
};
_p.setAccelerometerInterval = function(interval) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->20");
};
_p._registerKeyboardEvent = function() {
    cc._addEventListener(cc._canvas, "keydown", function(e) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->26");
    }, false);
    cc._addEventListener(cc._canvas, "keyup", function(e) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->31");
    }, false);
};
_p._registerAccelerometerEvent = function() {
    var w = window, _t = this;
    _t._acceleration = new cc.Acceleration;
    _t._accelDeviceEvent = w.DeviceMotionEvent || w.DeviceOrientationEvent;
    if (cc.sys.browserType == cc.sys.BROWSER_TYPE_MOBILE_QQ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->39");
    }
    var _deviceEventType = _t._accelDeviceEvent == w.DeviceMotionEvent ? "devicemotion" : "deviceorientation";
    var ua = navigator.userAgent;
    if (/Android/.test(ua) || /Adr/.test(ua) && cc.sys.browserType == cc.BROWSER_TYPE_UC) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->44");
    }
    cc._addEventListener(w, _deviceEventType, _t.didAccelerate.bind(_t), false);
};
_p.didAccelerate = function(eventData) {
    var _t = this, w = window;
    if (!_t._accelEnabled) {
        return;
    }
    var mAcceleration = _t._acceleration;
    var x, y, z;
    if (_t._accelDeviceEvent == window.DeviceMotionEvent) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->59");
    } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->63");
    }
    if (cc.sys.os === cc.sys.OS_ANDROID) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->67");
    } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->70");
    }
    mAcceleration.z = z;
    mAcceleration.timestamp = eventData.timeStamp || Date.now();
    var tmpX = mAcceleration.x;
    if (w.orientation === cc.UIInterfaceOrientationLandscapeRight) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->77");
    } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputExtension.js->87");
    }
};
delete _p;