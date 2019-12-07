cc.Camera = cc.Class.extend({
    _eyeX: null,
    _eyeY: null,
    _eyeZ: null,
    _centerX: null,
    _centerY: null,
    _centerZ: null,
    _upX: null,
    _upY: null,
    _upZ: null,
    _dirty: false,
    _lookupMatrix: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->15");
    },
    description: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->18");
    },
    setDirty: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->21");
    },
    isDirty: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->24");
    },
    restore: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->34");
    },
    locate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->45");
    },
    _locateForRenderer: function(matrix) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->56");
    },
    setEyeXYZ: function(eyeX, eyeY, eyeZ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->59");
    },
    setEye: function(eyeX, eyeY, eyeZ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->65");
    },
    setCenterXYZ: function(centerX, centerY, centerZ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->68");
    },
    setCenter: function(centerX, centerY, centerZ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->74");
    },
    setUpXYZ: function(upX, upY, upZ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->77");
    },
    setUp: function(upX, upY, upZ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->83");
    },
    getEyeXYZ: function(eyeX, eyeY, eyeZ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->90");
    },
    getEye: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->97");
    },
    getCenterXYZ: function(centerX, centerY, centerZ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->104");
    },
    getCenter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->111");
    },
    getUpXYZ: function(upX, upY, upZ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->118");
    },
    getUp: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->125");
    },
    _DISALLOW_COPY_AND_ASSIGN: function(CCCamera) {}
});
cc.Camera.getZEye = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCCamera.js->130");
};