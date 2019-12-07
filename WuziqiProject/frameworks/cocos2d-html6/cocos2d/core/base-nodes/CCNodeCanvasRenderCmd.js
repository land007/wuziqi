cc.CustomRenderCmd = function(target, func) {
    this._needDraw = true;
    this._target = target;
    this._callback = func;
    this.rendering = function(ctx, scaleX, scaleY) {
        if (!this._callback) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->7");
        }
        this._callback.call(this._target, ctx, scaleX, scaleY);
    };
};
cc.Node._dirtyFlags = {
    transformDirty: 1 << 0,
    visibleDirty: 1 << 1,
    colorDirty: 1 << 2,
    opacityDirty: 1 << 3,
    cacheDirty: 1 << 4,
    orderDirty: 1 << 5,
    textDirty: 1 << 6,
    gradientDirty: 1 << 7,
    all: (1 << 8) - 1
};
cc.Node.RenderCmd = function(renderable) {
    this._dirtyFlag = 1;
    this._node = renderable;
    this._needDraw = false;
    this._anchorPointInPoints = new cc.Point(0, 0);
    this._transform = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    };
    this._worldTransform = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    };
    this._inverse = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    };
    this._displayedOpacity = 255;
    this._displayedColor = cc.color(255, 255, 255, 255);
    this._cascadeColorEnabledDirty = false;
    this._cascadeOpacityEnabledDirty = false;
    this._curLevel = -1;
};
cc.Node.RenderCmd.prototype = {
    constructor: cc.Node.RenderCmd,
    getAnchorPointInPoints: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->61");
    },
    getDisplayedColor: function() {
        var tmpColor = this._displayedColor;
        return cc.color(tmpColor.r, tmpColor.g, tmpColor.b, tmpColor.a);
    },
    getDisplayedOpacity: function() {
        return this._displayedOpacity;
    },
    setCascadeColorEnabledDirty: function() {
        this._cascadeColorEnabledDirty = true;
        this.setDirtyFlag(cc.Node._dirtyFlags.colorDirty);
    },
    setCascadeOpacityEnabledDirty: function() {
        this._cascadeOpacityEnabledDirty = true;
        this.setDirtyFlag(cc.Node._dirtyFlags.opacityDirty);
    },
    getParentToNodeTransform: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->82");
    },
    detachFromParent: function() {},
    _updateAnchorPointInPoint: function() {
        var locAPP = this._anchorPointInPoints, locSize = this._node._contentSize, locAnchorPoint = this._node._anchorPoint;
        locAPP.x = locSize.width * locAnchorPoint.x;
        locAPP.y = locSize.height * locAnchorPoint.y;
        this.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    setDirtyFlag: function(dirtyFlag) {
        if (this._dirtyFlag === 0 && dirtyFlag !== 0) {
            cc.renderer.pushDirtyNode(this);
        }
        this._dirtyFlag |= dirtyFlag;
    },
    getParentRenderCmd: function() {
        if (this._node && this._node._parent && this._node._parent._renderCmd) {
            return this._node._parent._renderCmd;
        }
        return null;
    },
    _updateDisplayColor: function(parentColor) {
        var node = this._node;
        var locDispColor = this._displayedColor, locRealColor = node._realColor;
        var i, len, selChildren, item;
        if (this._cascadeColorEnabledDirty && !node._cascadeColorEnabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->119");
        } else {
            if (parentColor === undefined) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->127");
            }
            locDispColor.r = 0 | locRealColor.r * parentColor.r / 255;
            locDispColor.g = 0 | locRealColor.g * parentColor.g / 255;
            locDispColor.b = 0 | locRealColor.b * parentColor.b / 255;
            if (node._cascadeColorEnabled) {
                selChildren = node._children;
                for (i = 0, len = selChildren.length; i < len; i++) {
                    item = selChildren[i];
                    if (item && item._renderCmd) {
                        item._renderCmd._updateDisplayColor(locDispColor);
                        item._renderCmd._updateColor();
                    }
                }
            }
        }
        this._dirtyFlag = this._dirtyFlag & cc.Node._dirtyFlags.colorDirty ^ this._dirtyFlag;
    },
    _updateDisplayOpacity: function(parentOpacity) {
        var node = this._node;
        var i, len, selChildren, item;
        if (this._cascadeOpacityEnabledDirty && !node._cascadeOpacityEnabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->157");
        } else {
            if (parentOpacity === undefined) {
                var locParent = node._parent;
                parentOpacity = 255;
                if (locParent && locParent._cascadeOpacityEnabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->163");
                }
            }
            this._displayedOpacity = node._realOpacity * parentOpacity / 255;
            if (node._cascadeOpacityEnabled) {
                selChildren = node._children;
                for (i = 0, len = selChildren.length; i < len; i++) {
                    item = selChildren[i];
                    if (item && item._renderCmd) {
                        item._renderCmd._updateDisplayOpacity(this._displayedOpacity);
                        item._renderCmd._updateColor();
                    }
                }
            }
        }
        this._dirtyFlag = this._dirtyFlag & cc.Node._dirtyFlags.opacityDirty ^ this._dirtyFlag;
    },
    _syncDisplayColor: function(parentColor) {
        var node = this._node, locDispColor = this._displayedColor, locRealColor = node._realColor;
        if (parentColor === undefined) {
            var locParent = node._parent;
            if (locParent && locParent._cascadeColorEnabled) {
                parentColor = locParent.getDisplayedColor();
            } else {
                parentColor = cc.color.WHITE;
            }
        }
        locDispColor.r = 0 | locRealColor.r * parentColor.r / 255;
        locDispColor.g = 0 | locRealColor.g * parentColor.g / 255;
        locDispColor.b = 0 | locRealColor.b * parentColor.b / 255;
    },
    _syncDisplayOpacity: function(parentOpacity) {
        var node = this._node;
        if (parentOpacity === undefined) {
            var locParent = node._parent;
            parentOpacity = 255;
            if (locParent && locParent._cascadeOpacityEnabled) {
                parentOpacity = locParent.getDisplayedOpacity();
            }
        }
        this._displayedOpacity = node._realOpacity * parentOpacity / 255;
    },
    _updateColor: function() {},
    updateStatus: function() {
        var flags = cc.Node._dirtyFlags, locFlag = this._dirtyFlag;
        var colorDirty = locFlag & flags.colorDirty, opacityDirty = locFlag & flags.opacityDirty;
        if (colorDirty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->210");
        }
        if (opacityDirty) {
            this._updateDisplayOpacity();
        }
        if (colorDirty || opacityDirty) {
            this._updateColor();
        }
        if (locFlag & flags.transformDirty) {
            this.transform(this.getParentRenderCmd(), true);
            this._dirtyFlag = this._dirtyFlag & cc.Node._dirtyFlags.transformDirty ^ this._dirtyFlag;
        }
    }
};
(function() {
    cc.Node.CanvasRenderCmd = function(renderable) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->228");
    };
    var proto = cc.Node.CanvasRenderCmd.prototype = Object.create(cc.Node.RenderCmd.prototype);
    proto.constructor = cc.Node.CanvasRenderCmd;
    proto.transform = function(parentCmd, recursive) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->262");
    };
    proto.getNodeToParentTransform = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->295");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->303");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->319");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->320");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->321");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->324");
    };
    proto.visit = function(parentCmd) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->337");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->355");
    };
    proto._syncStatus = function(parentCmd) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->358");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->363");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->369");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->382");
    };
    proto.setDirtyFlag = function(dirtyFlag) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->389");
    };
    proto._setCacheDirty = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->392");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->393");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->395");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->396");
    };
    proto._setCachedParent = function(cachedParent) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->401");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->403");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->405");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->406");
    };
    proto.detachFromParent = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->413");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->416");
    };
    proto.setShaderProgram = function(shaderProgram) {};
    proto.getShaderProgram = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->420");
    };
    cc.Node.CanvasRenderCmd._getCompositeOperationByBlendFunc = function(blendFunc) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->428");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->430");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->431");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->432");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->433");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeCanvasRenderCmd.js->439");
    };
})();