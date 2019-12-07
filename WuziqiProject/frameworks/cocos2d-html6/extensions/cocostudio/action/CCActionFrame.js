ccs.FRAME_TYPE_MOVE = 0;
ccs.FRAME_TYPE_SCALE = 1;
ccs.FRAME_TYPE_ROTATE = 2;
ccs.FRAME_TYPE_TINT = 3;
ccs.FRAME_TYPE_FADE = 4;
ccs.FRAME_TYPE_MAX = 5;
ccs.FrameEaseType = {
    Custom: -1,
    Linear: 0,
    Sine_EaseIn: 1,
    Sine_EaseOut: 2,
    Sine_EaseInOut: 3,
    Quad_EaseIn: 4,
    Quad_EaseOut: 5,
    Quad_EaseInOut: 6,
    Cubic_EaseIn: 7,
    Cubic_EaseOut: 8,
    Cubic_EaseInOut: 9,
    Quart_EaseIn: 10,
    Quart_EaseOut: 11,
    Quart_EaseInOut: 12,
    Quint_EaseIn: 13,
    Quint_EaseOut: 14,
    Quint_EaseInOut: 15,
    Expo_EaseIn: 16,
    Expo_EaseOut: 17,
    Expo_EaseInOut: 18,
    Circ_EaseIn: 19,
    Circ_EaseOut: 20,
    Circ_EaseInOut: 21,
    Elastic_EaesIn: 22,
    Elastic_EaesOut: 23,
    Elastic_EaesInOut: 24,
    Back_EaseIn: 25,
    Back_EaseOut: 26,
    Back_EaseInOut: 27,
    Bounce_EaseIn: 28,
    Bounce_EaseOut: 29,
    Bounce_EaseInOut: 30
};
ccs.ActionFrame = ccs.Class.extend({
    frameType: 0,
    easingType: 0,
    frameIndex: 0,
    _Parameter: null,
    time: 0,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->50");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->51");
    },
    getAction: function(duration, srcFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->55");
    },
    _getEasingAction: function(action) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->112");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->113");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->148");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->149");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->150");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->151");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->152");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->156");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->159");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->160");
    },
    setEasingParameter: function(parameter) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->163");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->164");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->165");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->166");
    },
    setEasingType: function(easingType) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->169");
    }
});
ccs.ActionMoveFrame = ccs.ActionFrame.extend({
    _position: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->175");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->176");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->177");
    },
    setPosition: function(pos, y) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->180");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->181");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->182");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->183");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->184");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->185");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->186");
    },
    getPosition: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->189");
    },
    getAction: function(duration) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->192");
    }
});
ccs.ActionScaleFrame = ccs.ActionFrame.extend({
    _scaleX: 1,
    _scaleY: 1,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->199");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->200");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->201");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->202");
    },
    setScaleX: function(scaleX) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->205");
    },
    getScaleX: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->208");
    },
    setScaleY: function(scaleY) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->211");
    },
    getScaleY: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->214");
    },
    getAction: function(duration) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->217");
    }
});
ccs.ActionRotationFrame = ccs.ActionFrame.extend({
    _rotation: 0,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->223");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->224");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->225");
    },
    setRotation: function(rotation) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->228");
    },
    getRotation: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->231");
    },
    getAction: function(duration, srcFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->234");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->235");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->236");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->237");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->238");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->239");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->240");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->241");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->242");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->243");
    }
});
ccs.ActionFadeFrame = ccs.ActionFrame.extend({
    _opacity: 255,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->249");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->250");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->251");
    },
    setOpacity: function(opacity) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->254");
    },
    getOpacity: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->257");
    },
    getAction: function(duration) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->260");
    }
});
ccs.ActionTintFrame = ccs.ActionFrame.extend({
    _color: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->266");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->267");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->268");
    },
    setColor: function(color) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->271");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->272");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->273");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->274");
    },
    getColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->277");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->278");
    },
    getAction: function(duration) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/action/CCActionFrame.js->281");
    }
});