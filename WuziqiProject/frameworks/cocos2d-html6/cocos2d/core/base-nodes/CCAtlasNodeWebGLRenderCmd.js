(function() {
    cc.AtlasNode.WebGLRenderCmd = function(renderableObject) {
        cc.Node.WebGLRenderCmd.call(this, renderableObject);
        this._needDraw = true;
        this._textureAtlas = null;
        this._colorUnmodified = cc.color.WHITE;
        this._colorF32Array = null;
        this._uniformColor = null;
        this._shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURE_UCOLOR);
        this._uniformColor = cc._renderContext.getUniformLocation(this._shaderProgram.getProgram(), "u_color");
    };
    var proto = cc.AtlasNode.WebGLRenderCmd.prototype = Object.create(cc.Node.WebGLRenderCmd.prototype);
    proto.constructor = cc.AtlasNode.WebGLRenderCmd;
    proto._updateBlendFunc = function() {
        var node = this._node;
        if (!this._textureAtlas.texture.hasPremultipliedAlpha()) {
            node._blendFunc.src = cc.SRC_ALPHA;
            node._blendFunc.dst = cc.ONE_MINUS_SRC_ALPHA;
        }
    };
    proto._updateOpacityModifyRGB = function() {
        this._node._opacityModifyRGB = this._textureAtlas.texture.hasPremultipliedAlpha();
    };
    proto.rendering = function(ctx) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->32");
    };
    proto.initWithTexture = function(texture, tileWidth, tileHeight, itemsToRender) {
        var node = this._node;
        node._itemWidth = tileWidth;
        node._itemHeight = tileHeight;
        this._colorUnmodified = cc.color.WHITE;
        node._opacityModifyRGB = true;
        node._blendFunc.src = cc.BLEND_SRC;
        node._blendFunc.dst = cc.BLEND_DST;
        var locRealColor = node._realColor;
        this._colorF32Array = new Float32Array([ locRealColor.r / 255, locRealColor.g / 255, locRealColor.b / 255, node._realOpacity / 255 ]);
        this._textureAtlas = new cc.TextureAtlas;
        this._textureAtlas.initWithTexture(texture, itemsToRender);
        if (!this._textureAtlas) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->48");
        }
        this._updateBlendFunc();
        this._updateOpacityModifyRGB();
        this._calculateMaxItems();
        node.quadsToDraw = itemsToRender;
        return true;
    };
    proto.setColor = function(color3) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->65");
    };
    proto.setOpacity = function(opacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->72");
    };
    proto._updateColor = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->76");
    };
    proto.getTexture = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->79");
    };
    proto.setTexture = function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNodeWebGLRenderCmd.js->84");
    };
    proto._calculateMaxItems = function() {
        var node = this._node;
        var selTexture = this._textureAtlas.texture;
        var size = selTexture.getContentSize();
        if (node._ignoreContentScaleFactor) {
            size = selTexture.getContentSizeInPixels();
        }
        node._itemsPerColumn = 0 | size.height / node._itemHeight;
        node._itemsPerRow = 0 | size.width / node._itemWidth;
    };
})();