(function() {
    cc.ParallaxNode.CanvasRenderCmd = function(renderable) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->3");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->4");
    };
    var proto = cc.ParallaxNode.CanvasRenderCmd.prototype = Object.create(cc.Node.CanvasRenderCmd.prototype);
    proto.constructor = cc.ParallaxNode.CanvasRenderCmd;
    proto.updateStatus = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->10");
    };
    proto._syncStatus = function(parentCmd) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->14");
    };
})();
(function() {
    if (cc._renderType !== cc._RENDER_TYPE_WEBGL) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->19");
    }
    cc.ParallaxNode.WebGLRenderCmd = function(renderable) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->23");
    };
    var proto = cc.ParallaxNode.WebGLRenderCmd.prototype = Object.create(cc.Node.WebGLRenderCmd.prototype);
    proto.constructor = cc.ParallaxNode.WebGLRenderCmd;
    proto.updateStatus = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->29");
    };
    proto._syncStatus = function(parentCmd) {
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/parallax/CCParallaxNodeRenderCmd.js->33");
    };
})();