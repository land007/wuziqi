(function() {
    ccs.Skin.RenderCmd = {
        updateArmatureTransform: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCSkinCanvasRenderCmd.js->4");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCSkinCanvasRenderCmd.js->5");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCSkinCanvasRenderCmd.js->6");
        },
        getNodeToWorldTransform: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCSkinCanvasRenderCmd.js->9");
        },
        getNodeToWorldTransformAR: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCSkinCanvasRenderCmd.js->12");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCSkinCanvasRenderCmd.js->13");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCSkinCanvasRenderCmd.js->14");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCSkinCanvasRenderCmd.js->15");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCSkinCanvasRenderCmd.js->16");
        }
    };
    ccs.Skin.CanvasRenderCmd = function(renderable) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCSkinCanvasRenderCmd.js->20");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/display/CCSkinCanvasRenderCmd.js->21");
    };
    var proto = ccs.Skin.CanvasRenderCmd.prototype = Object.create(cc.Sprite.CanvasRenderCmd.prototype);
    cc.inject(ccs.Skin.RenderCmd, proto);
    proto.constructor = ccs.Skin.CanvasRenderCmd;
})();