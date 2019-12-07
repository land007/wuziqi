(function() {
    cc.AtlasNode.CanvasRenderCmd = function(renderableObject) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->3");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->4");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->5");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->7");
    };
    var proto = cc.AtlasNode.CanvasRenderCmd.prototype = Object.create(cc.Node.CanvasRenderCmd.prototype);
    proto.constructor = cc.AtlasNode.CanvasRenderCmd;
    proto.initWithTexture = function(texture, tileWidth, tileHeight, itemsToRender) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->24");
    };
    proto.setColor = function(color3) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->33");
    };
    if (cc.sys._supportCanvasNewBlendModes) {
        proto._changeTextureColor = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->55");
        };
    } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->81");
    }
    proto.setOpacity = function(opacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->85");
    };
    proto.getTexture = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->88");
    };
    proto.setTexture = function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->91");
    };
    proto._calculateMaxItems = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeCanvasRenderCmd.js->98");
    };
})();