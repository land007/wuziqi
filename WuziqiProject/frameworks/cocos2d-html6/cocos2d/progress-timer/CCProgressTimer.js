cc.ProgressTimer = cc.Node.extend({
    _type: null,
    _percentage: 0,
    _sprite: null,
    _midPoint: null,
    _barChangeRate: null,
    _reverseDirection: false,
    _className: "ProgressTimer",
    ctor: function(sprite) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->17");
    },
    getMidpoint: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->20");
    },
    setMidpoint: function(mpoint) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->23");
    },
    getBarChangeRate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->26");
    },
    setBarChangeRate: function(barChangeRate) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->29");
    },
    getType: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->32");
    },
    getPercentage: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->35");
    },
    getSprite: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->38");
    },
    setPercentage: function(percentage) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->44");
    },
    setOpacityModifyRGB: function(bValue) {},
    isOpacityModifyRGB: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->48");
    },
    isReverseDirection: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->51");
    },
    setColor: function(color) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->55");
    },
    setOpacity: function(opacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->59");
    },
    getColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->62");
    },
    getOpacity: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->65");
    },
    setReverseProgress: function(reverse) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->71");
    },
    setSprite: function(sprite) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->82");
    },
    setType: function(type) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->88");
    },
    setReverseDirection: function(reverse) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->94");
    },
    initWithSprite: function(sprite) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->105");
    },
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->112");
    }
});
var _p = cc.ProgressTimer.prototype;
_p.midPoint;
cc.defineGetterSetter(_p, "midPoint", _p.getMidpoint, _p.setMidpoint);
_p.barChangeRate;
cc.defineGetterSetter(_p, "barChangeRate", _p.getBarChangeRate, _p.setBarChangeRate);
_p.type;
cc.defineGetterSetter(_p, "type", _p.getType, _p.setType);
_p.percentage;
cc.defineGetterSetter(_p, "percentage", _p.getPercentage, _p.setPercentage);
_p.sprite;
cc.defineGetterSetter(_p, "sprite", _p.getSprite, _p.setSprite);
_p.reverseDir;
cc.defineGetterSetter(_p, "reverseDir", _p.isReverseDirection, _p.setReverseDirection);
cc.ProgressTimer.create = function(sprite) {
console.log("/frameworks/cocos2d-html5/cocos2d/progress-timer/CCProgressTimer.js->129");
};
cc.ProgressTimer.TEXTURE_COORDS_COUNT = 4;
cc.ProgressTimer.TEXTURE_COORDS = 75;
cc.ProgressTimer.TYPE_RADIAL = 0;
cc.ProgressTimer.TYPE_BAR = 1;