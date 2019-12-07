cc.stencilBits = -1;
cc.ClippingNode = cc.Node.extend({
    alphaThreshold: 0,
    inverted: false,
    _stencil: null,
    _className: "ClippingNode",
    ctor: function(stencil) {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->8");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->13");
    },
    init: function(stencil) {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->20");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->24");
    },
    onEnterTransitionDidFinish: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->28");
    },
    onExitTransitionDidStart: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->32");
    },
    onExit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->36");
    },
    getAlphaThreshold: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->39");
    },
    setAlphaThreshold: function(alphaThreshold) {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->42");
    },
    isInverted: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->45");
    },
    setInverted: function(inverted) {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->48");
    },
    getStencil: function() {
        return this._stencil;
    },
    setStencil: function(stencil) {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->57");
    },
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->64");
    }
});
var _p = cc.ClippingNode.prototype;
cc.defineGetterSetter(_p, "stencil", _p.getStencil, _p.setStencil);
_p.stencil;
cc.ClippingNode.create = function(stencil) {
console.log("/frameworks/cocos2d-html5/cocos2d/clipping-nodes/CCClippingNode.js->71");
};