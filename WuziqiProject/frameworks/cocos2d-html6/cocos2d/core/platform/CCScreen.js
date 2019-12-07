cc.screen = {
    _supportsFullScreen: false,
    _preOnFullScreenChange: null,
    _touchEvent: "",
    _fn: null,
    _fnMap: [ [ "requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenEnabled", "fullscreenElement" ], [ "requestFullScreen", "exitFullScreen", "fullScreenchange", "fullScreenEnabled", "fullScreenElement" ], [ "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitIsFullScreen", "webkitCurrentFullScreenElement" ], [ "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozFullScreen", "mozFullScreenElement" ], [ "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "msFullscreenEnabled", "msFullscreenElement" ] ],
    init: function() {
        this._fn = {};
        var i, val, map = this._fnMap, valL;
        for (i = 0, l = map.length; i < l; i++) {
            val = map[i];
            if (val && val[1] in document) {
                for (i = 0, valL = val.length; i < valL; i++) {
                    this._fn[map[0][i]] = val[i];
                }
                break;
            }
        }
        this._supportsFullScreen = this._fn.requestFullscreen != undefined;
        this._touchEvent = "ontouchstart" in window ? "touchstart" : "mousedown";
    },
    fullScreen: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->23");
    },
    requestFullScreen: function(element, onFullScreenChange) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->39");
    },
    exitFullScreen: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->42");
    },
    autoFullScreen: function(element, onFullScreenChange) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCScreen.js->53");
    }
};
cc.screen.init();