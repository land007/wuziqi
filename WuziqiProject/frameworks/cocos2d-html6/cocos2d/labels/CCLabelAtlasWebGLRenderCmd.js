(function() {
    cc.LabelAtlas.WebGLRenderCmd = function(renderable) {
        cc.AtlasNode.WebGLRenderCmd.call(this, renderable);
        this._needDraw = true;
    };
    var proto = cc.LabelAtlas.WebGLRenderCmd.prototype = Object.create(cc.AtlasNode.WebGLRenderCmd.prototype);
    proto.constructor = cc.LabelAtlas.WebGLRenderCmd;
    proto.setCascade = function() {
        var node = this._node;
        node._cascadeOpacityEnabled = true;
        node._cascadeColorEnabled = true;
    };
    proto.rendering = function(ctx) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->19");
    };
    proto.updateAtlasValues = function() {
        var node = this._node;
        var locString = node._string;
        var n = locString.length;
        var locTextureAtlas = this._textureAtlas;
        var texture = locTextureAtlas.texture;
        var textureWide = texture.pixelsWidth;
        var textureHigh = texture.pixelsHeight;
        var itemWidthInPixels = node._itemWidth;
        var itemHeightInPixels = node._itemHeight;
        if (!node._ignoreContentScaleFactor) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->33");
        }
        if (n > locTextureAtlas.getCapacity()) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->36");
        }
        var quads = locTextureAtlas.quads;
        var locDisplayedColor = this._displayedColor;
        var curColor = {
            r: locDisplayedColor.r,
            g: locDisplayedColor.g,
            b: locDisplayedColor.b,
            a: node._displayedOpacity
        };
        var locItemWidth = node._itemWidth;
        for (var i = 0; i < n; i++) {
            var a = locString.charCodeAt(i) - node._mapStartChar.charCodeAt(0);
            var row = a % node._itemsPerRow;
            var col = 0 | a / node._itemsPerRow;
            var left, right, top, bottom;
            if (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlasWebGLRenderCmd.js->56");
            } else {
                left = row * itemWidthInPixels / textureWide;
                right = left + itemWidthInPixels / textureWide;
                top = col * itemHeightInPixels / textureHigh;
                bottom = top + itemHeightInPixels / textureHigh;
            }
            var quad = quads[i];
            var locQuadTL = quad.tl, locQuadTR = quad.tr, locQuadBL = quad.bl, locQuadBR = quad.br;
            locQuadTL.texCoords.u = left;
            locQuadTL.texCoords.v = top;
            locQuadTR.texCoords.u = right;
            locQuadTR.texCoords.v = top;
            locQuadBL.texCoords.u = left;
            locQuadBL.texCoords.v = bottom;
            locQuadBR.texCoords.u = right;
            locQuadBR.texCoords.v = bottom;
            locQuadBL.vertices.x = i * locItemWidth;
            locQuadBL.vertices.y = 0;
            locQuadBL.vertices.z = 0;
            locQuadBR.vertices.x = i * locItemWidth + locItemWidth;
            locQuadBR.vertices.y = 0;
            locQuadBR.vertices.z = 0;
            locQuadTL.vertices.x = i * locItemWidth;
            locQuadTL.vertices.y = node._itemHeight;
            locQuadTL.vertices.z = 0;
            locQuadTR.vertices.x = i * locItemWidth + locItemWidth;
            locQuadTR.vertices.y = node._itemHeight;
            locQuadTR.vertices.z = 0;
            locQuadTL.colors = curColor;
            locQuadTR.colors = curColor;
            locQuadBL.colors = curColor;
            locQuadBR.colors = curColor;
        }
        if (n > 0) {
            locTextureAtlas.dirty = true;
            var totalQuads = locTextureAtlas.totalQuads;
            if (n > totalQuads) {
                locTextureAtlas.increaseTotalQuadsWith(n - totalQuads);
            }
        }
    };
    proto.setString = function(label) {
        var len = label.length;
        if (len > this._textureAtlas.totalQuads) {
            this._textureAtlas.resizeCapacity(len);
        }
    };
    proto._addChild = function() {};
})();