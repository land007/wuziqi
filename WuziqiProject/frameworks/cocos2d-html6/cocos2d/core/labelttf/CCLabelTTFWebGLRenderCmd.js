(function() {
    cc.LabelTTF.WebGLRenderCmd = function(renderable) {
        cc.Sprite.WebGLRenderCmd.call(this, renderable);
        cc.LabelTTF.RenderCmd.call(this);
        this.setShaderProgram(cc.shaderCache.programForKey(cc.LabelTTF._SHADER_PROGRAM));
    };
    var proto = cc.LabelTTF.WebGLRenderCmd.prototype = Object.create(cc.Sprite.WebGLRenderCmd.prototype);
    cc.inject(cc.LabelTTF.RenderCmd.prototype, proto);
    proto.constructor = cc.LabelTTF.WebGLRenderCmd;
    proto._setColorsString = function() {
        this.setDirtyFlag(cc.Node._dirtyFlags.textDirty);
        var node = this._node;
        var locStrokeColor = node._strokeColor, locFontFillColor = node._textFillColor;
        this._shadowColorStr = "rgba(128,128,128," + node._shadowOpacity + ")";
        this._fillColorStr = "rgba(" + (0 | locFontFillColor.r) + "," + (0 | locFontFillColor.g) + "," + (0 | locFontFillColor.b) + ", 1)";
        this._strokeColorStr = "rgba(" + (0 | locStrokeColor.r) + "," + (0 | locStrokeColor.g) + "," + (0 | locStrokeColor.b) + ", 1)";
    };
    proto.updateStatus = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->39");
    };
    proto._syncStatus = function(parentCmd) {
        var flags = cc.Node._dirtyFlags, locFlag = this._dirtyFlag;
        var parentNode = parentCmd ? parentCmd._node : null;
        if (parentNode && parentNode._cascadeColorEnabled && parentCmd._dirtyFlag & flags.colorDirty) {
            locFlag |= flags.colorDirty;
        }
        if (parentNode && parentNode._cascadeOpacityEnabled && parentCmd._dirtyFlag & flags.opacityDirty) {
            locFlag |= flags.opacityDirty;
        }
        if (parentCmd && parentCmd._dirtyFlag & flags.transformDirty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->51");
        }
        var colorDirty = locFlag & flags.colorDirty, opacityDirty = locFlag & flags.opacityDirty;
        this._dirtyFlag = locFlag;
        if (colorDirty) {
            this._syncDisplayColor();
        }
        if (opacityDirty) {
            this._syncDisplayOpacity();
        }
        if (colorDirty || opacityDirty) {
            this._setColorsString();
            this._updateColor();
            this._updateTexture();
        } else {
            if (locFlag & flags.textDirty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFWebGLRenderCmd.js->67");
            }
        }
        this.transform(parentCmd);
    };
})();