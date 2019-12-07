cc.Touch = cc.Class.extend({
    _point: null,
    _prevPoint: null,
    _id: 0,
    _startPointCaptured: false,
    _startPoint: null,
    ctor: function(x, y, id) {
        this._point = cc.p(x || 0, y || 0);
        this._id = id || 0;
    },
    getLocation: function() {
        return {
            x: this._point.x,
            y: this._point.y
        };
    },
    getLocationX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->18");
    },
    getLocationY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->21");
    },
    getPreviousLocation: function() {
        return {
            x: this._prevPoint.x,
            y: this._prevPoint.y
        };
    },
    getStartLocation: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->33");
    },
    getDelta: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->36");
    },
    getLocationInView: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->42");
    },
    getPreviousLocationInView: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->48");
    },
    getStartLocationInView: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->54");
    },
    getID: function() {
        return this._id;
    },
    getId: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->61");
    },
    setTouchInfo: function(id, x, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCTouch.js->70");
    },
    _setPoint: function(x, y) {
        if (y === undefined) {
            this._point.x = x.x;
            this._point.y = x.y;
        } else {
            this._point.x = x;
            this._point.y = y;
        }
    },
    _setPrevPoint: function(x, y) {
        if (y === undefined) {
            this._prevPoint = cc.p(x.x, x.y);
        } else {
            this._prevPoint = cc.p(x || 0, y || 0);
        }
    }
});