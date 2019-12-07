(function() {
    ccui.Scale9Sprite.WebGLRenderCmd = function(renderable) {
        cc.Node.WebGLRenderCmd.call(this, renderable);
        this._cachedParent = null;
        this._cacheDirty = false;
    };
    var proto = ccui.Scale9Sprite.WebGLRenderCmd.prototype = Object.create(cc.Node.WebGLRenderCmd.prototype);
    proto.constructor = ccui.Scale9Sprite.WebGLRenderCmd;
    proto.visit = function(parentCmd) {
        var node = this._node;
        if (!node._visible) {
            return;
        }
        if (node._positionsAreDirty) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->15");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->16");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->17");
        }
        cc.Node.WebGLRenderCmd.prototype.visit.call(this, parentCmd);
    };
    proto.transform = function(parentCmd, recursive) {
        var node = this._node;
        cc.Node.WebGLRenderCmd.prototype.transform.call(this, parentCmd, recursive);
        if (node._positionsAreDirty) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->25");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->26");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->27");
        }
    };
    proto._updateDisplayColor = function(parentColor) {
        cc.Node.WebGLRenderCmd.prototype._updateDisplayColor.call(this, parentColor);
        var scale9Image = this._node._scale9Image;
        if (scale9Image) {
            var scaleChildren = scale9Image.getChildren();
            for (var i = 0; i < scaleChildren.length; i++) {
                var selChild = scaleChildren[i];
                if (selChild) {
                    selChild._renderCmd._updateDisplayColor(parentColor);
                    selChild._renderCmd._updateColor();
                }
            }
        }
    };
    proto._updateDisplayOpacity = function(parentColor) {
        cc.Node.WebGLRenderCmd.prototype._updateDisplayOpacity.call(this, parentColor);
        var scale9Image = this._node._scale9Image;
        if (scale9Image) {
            var scaleChildren = scale9Image.getChildren();
            for (var i = 0; i < scaleChildren.length; i++) {
                var selChild = scaleChildren[i];
                if (selChild) {
                    selChild._renderCmd._updateDisplayOpacity(parentColor);
                    selChild._renderCmd._updateColor();
                }
            }
        }
    };
    proto.setState = function(state) {
        var scale9Image = this._node._scale9Image;
        if (scale9Image == null) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->61");
        }
        if (state === ccui.Scale9Sprite.state.NORMAL) {
            scale9Image.setShaderProgram(cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR));
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->66");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->67");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->68");
        }
    };
    ccui.Scale9Sprite.WebGLRenderCmd._grayShaderProgram = null;
    ccui.Scale9Sprite.WebGLRenderCmd._getGrayShaderProgram = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->73");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->74");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->75");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->76");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->77");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->78");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->79");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->80");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->81");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->82");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->83");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->84");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9SpriteWebGLRenderCmd.js->85");
    };
    ccui.Scale9Sprite.WebGLRenderCmd._grayShaderFragment = "precision lowp float;\n" + "varying vec4 v_fragmentColor; \n" + "varying vec2 v_texCoord; \n" + "void main() \n" + "{ \n" + "    vec4 c = texture2D(CC_Texture0, v_texCoord); \n" + "    gl_FragColor.xyz = vec3(0.2126*c.r + 0.7152*c.g + 0.0722*c.b); \n" + "     gl_FragColor.w = c.w ; \n" + "}";
})();