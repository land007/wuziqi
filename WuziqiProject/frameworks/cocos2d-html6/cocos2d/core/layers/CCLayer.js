cc.Layer = cc.Node.extend({
    _className: "Layer",
    ctor: function() {
        var nodep = cc.Node.prototype;
        nodep.ctor.call(this);
        this._ignoreAnchorPointForPosition = true;
        nodep.setAnchorPoint.call(this, .5, .5);
        nodep.setContentSize.call(this, cc.winSize);
    },
    init: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->17");
    },
    bake: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->20");
    },
    unbake: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->23");
    },
    isBaked: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->26");
    },
    addChild: function(child, localZOrder, tag) {
        cc.Node.prototype.addChild.call(this, child, localZOrder, tag);
        this._renderCmd._bakeForAddChild(child);
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->34");
        } else {
            return new cc.Layer.WebGLRenderCmd(this);
        }
    }
});
cc.Layer.create = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->41");
};
cc.LayerColor = cc.Layer.extend({
    _blendFunc: null,
    _className: "LayerColor",
    getBlendFunc: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->47");
    },
    changeWidthAndHeight: function(w, h) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->51");
    },
    changeWidth: function(w) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->54");
    },
    changeHeight: function(h) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->57");
    },
    setOpacityModifyRGB: function(value) {},
    isOpacityModifyRGB: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->61");
    },
    ctor: function(color, width, height) {
        cc.Layer.prototype.ctor.call(this);
        this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
        cc.LayerColor.prototype.init.call(this, color, width, height);
    },
    init: function(color, width, height) {
        if (cc._renderType !== cc._RENDER_TYPE_CANVAS) {
            this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_COLOR);
        }
        var winSize = cc.director.getWinSize();
        color = color || cc.color(0, 0, 0, 255);
        width = width === undefined ? winSize.width : width;
        height = height === undefined ? winSize.height : height;
        var locRealColor = this._realColor;
        locRealColor.r = color.r;
        locRealColor.g = color.g;
        locRealColor.b = color.b;
        this._realOpacity = color.a;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty | cc.Node._dirtyFlags.opacityDirty);
        cc.LayerColor.prototype.setContentSize.call(this, width, height);
        return true;
    },
    setBlendFunc: function(src, dst) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->94");
    },
    _setWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->98");
    },
    _setHeight: function(height) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->102");
    },
    setContentSize: function(size, height) {
        cc.Layer.prototype.setContentSize.call(this, size, height);
        this._renderCmd._updateSquareVertices(size, height);
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->110");
        } else {
            return new cc.LayerColor.WebGLRenderCmd(this);
        }
    }
});
cc.LayerColor.create = function(color, width, height) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->117");
};
(function() {
    var proto = cc.LayerColor.prototype;
    cc.defineGetterSetter(proto, "width", proto._getWidth, proto._setWidth);
    cc.defineGetterSetter(proto, "height", proto._getHeight, proto._setHeight);
})();
cc.LayerGradient = cc.LayerColor.extend({
    _endColor: null,
    _startOpacity: 255,
    _endOpacity: 255,
    _alongVector: null,
    _compressedInterpolation: false,
    _className: "LayerGradient",
    ctor: function(start, end, v) {
        var _t = this;
        cc.LayerColor.prototype.ctor.call(_t);
        _t._endColor = cc.color(0, 0, 0, 255);
        _t._alongVector = cc.p(0, -1);
        _t._startOpacity = 255;
        _t._endOpacity = 255;
        cc.LayerGradient.prototype.init.call(_t, start, end, v);
    },
    init: function(start, end, v) {
        start = start || cc.color(0, 0, 0, 255);
        end = end || cc.color(0, 0, 0, 255);
        v = v || cc.p(0, -1);
        var _t = this;
        var locEndColor = _t._endColor;
        _t._startOpacity = start.a;
        locEndColor.r = end.r;
        locEndColor.g = end.g;
        locEndColor.b = end.b;
        _t._endOpacity = end.a;
        _t._alongVector = v;
        _t._compressedInterpolation = true;
        cc.LayerColor.prototype.init.call(_t, cc.color(start.r, start.g, start.b, 255));
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty | cc.Node._dirtyFlags.opacityDirty | cc.Node._dirtyFlags.gradientDirty);
        return true;
    },
    setContentSize: function(size, height) {
        cc.LayerColor.prototype.setContentSize.call(this, size, height);
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.gradientDirty);
    },
    _setWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->163");
    },
    _setHeight: function(height) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->167");
    },
    getStartColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->170");
    },
    setStartColor: function(color) {
        this.color = color;
    },
    setEndColor: function(color) {
        this._endColor = color;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty);
    },
    getEndColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->180");
    },
    setStartOpacity: function(o) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->184");
    },
    getStartOpacity: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->187");
    },
    setEndOpacity: function(o) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->191");
    },
    getEndOpacity: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->194");
    },
    setVector: function(Var) {
        this._alongVector.x = Var.x;
        this._alongVector.y = Var.y;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.gradientDirty);
    },
    getVector: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->202");
    },
    isCompressedInterpolation: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->205");
    },
    setCompressedInterpolation: function(compress) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->209");
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->213");
        } else {
            return new cc.LayerGradient.WebGLRenderCmd(this);
        }
    }
});
cc.LayerGradient.create = function(start, end, v) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->220");
};
(function() {
    var proto = cc.LayerGradient.prototype;
    proto.startColor;
    cc.defineGetterSetter(proto, "startColor", proto.getStartColor, proto.setStartColor);
    proto.endColor;
    cc.defineGetterSetter(proto, "endColor", proto.getEndColor, proto.setEndColor);
    proto.startOpacity;
    cc.defineGetterSetter(proto, "startOpacity", proto.getStartOpacity, proto.setStartOpacity);
    proto.endOpacity;
    cc.defineGetterSetter(proto, "endOpacity", proto.getEndOpacity, proto.setEndOpacity);
    proto.vector;
    cc.defineGetterSetter(proto, "vector", proto.getVector, proto.setVector);
})();
cc.LayerMultiplex = cc.Layer.extend({
    _enabledLayer: 0,
    _layers: null,
    _className: "LayerMultiplex",
    ctor: function(layers) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->245");
    },
    initWithLayers: function(layers) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->254");
    },
    switchTo: function(n) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->263");
    },
    switchToAndReleaseMe: function(n) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->273");
    },
    addLayer: function(layer) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->280");
    }
});
cc.LayerMultiplex.create = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayer.js->284");
};