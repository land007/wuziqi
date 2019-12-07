cc.PointObject = cc.Class.extend({
    _ratio: null,
    _offset: null,
    _child: null,
    ctor: function(ratio, offset) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->6");
    },
    getRatio: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->9");
    },
    setRatio: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->12");
    },
    getOffset: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->15");
    },
    setOffset: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->18");
    },
    getChild: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->21");
    },
    setChild: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->24");
    },
    initWithCCPoint: function(ratio, offset) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->30");
    }
});
cc.PointObject.create = function(ratio, offset) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->34");
};
cc.ParallaxNode = cc.Node.extend({
    parallaxArray: null,
    _lastPosition: null,
    _className: "ParallaxNode",
    getParallaxArray: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->41");
    },
    setParallaxArray: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->44");
    },
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->49");
    },
    addChild: function(child, z, ratio, offset) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->63");
    },
    removeChild: function(child, cleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->74");
    },
    removeAllChildren: function(cleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->78");
    },
    _updateParallaxPosition: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->90");
    },
    _absolutePosition: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->99");
    },
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->106");
    }
});
cc.ParallaxNode.create = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNode.js->110");
};