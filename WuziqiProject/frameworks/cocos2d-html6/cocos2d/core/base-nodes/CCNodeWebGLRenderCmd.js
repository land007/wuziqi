(function() {
    cc.Node.WebGLRenderCmd = function(renderable) {
        cc.Node.RenderCmd.call(this, renderable);
        var mat4 = new cc.kmMat4;
        mat4.mat[2] = mat4.mat[3] = mat4.mat[6] = mat4.mat[7] = mat4.mat[8] = mat4.mat[9] = mat4.mat[11] = mat4.mat[14] = 0;
        mat4.mat[10] = mat4.mat[15] = 1;
        this._transform4x4 = mat4;
        this._stackMatrix = new cc.kmMat4;
        this._shaderProgram = null;
        this._camera = null;
    };
    var proto = cc.Node.WebGLRenderCmd.prototype = Object.create(cc.Node.RenderCmd.prototype);
    proto.constructor = cc.Node.WebGLRenderCmd;
    proto.getNodeToParentTransform = function() {
        var node = this._node;
        if (node._usingNormalizedPosition && node._parent) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->20");
        }
        if (this._dirtyFlag & cc.Node._dirtyFlags.transformDirty) {
            var x = node._position.x, y = node._position.y;
            var apx = this._anchorPointInPoints.x, napx = -apx;
            var apy = this._anchorPointInPoints.y, napy = -apy;
            var scx = node._scaleX, scy = node._scaleY;
            var rotationRadiansX = node._rotationX * .017453292519943295;
            var rotationRadiansY = node._rotationY * .017453292519943295;
            if (node._ignoreAnchorPointForPosition) {
                x += apx;
                y += apy;
            }
            var cx = 1, sx = 0, cy = 1, sy = 0;
            if (node._rotationX !== 0 || node._rotationY !== 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->38");
            }
            var needsSkewMatrix = node._skewX || node._skewY;
            if (!needsSkewMatrix && (apx !== 0 || apy !== 0)) {
                x += cy * napx * scx + -sx * napy * scy;
                y += sy * napx * scx + cx * napy * scy;
            }
            var t = this._transform;
            t.a = cy * scx;
            t.b = sy * scx;
            t.c = -sx * scy;
            t.d = cx * scy;
            t.tx = x;
            t.ty = y;
            if (needsSkewMatrix) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->63");
            }
            if (node._additionalTransformDirty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->67");
            }
            this._transform = t;
        }
        return this._transform;
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
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->83");
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
            this._updateColor();
        }
        this.transform(parentCmd);
    };
    proto._updateColor = function() {};
    proto.visit = function(parentCmd) {
        var node = this._node;
        if (!node._visible) {
            return;
        }
        parentCmd = parentCmd || this.getParentRenderCmd();
        if (node._parent && node._parent._renderCmd) {
            this._curLevel = node._parent._renderCmd._curLevel + 1;
        }
        var i, currentStack = cc.current_stack;
        currentStack.stack.push(currentStack.top);
        this._syncStatus(parentCmd);
        currentStack.top = this._stackMatrix;
        var locChildren = node._children;
        if (locChildren && locChildren.length > 0) {
            var childLen = locChildren.length;
            node.sortAllChildren();
            for (i = 0; i < childLen; i++) {
                if (locChildren[i] && locChildren[i]._localZOrder < 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->118");
                } else {
                    break;
                }
            }
            cc.renderer.pushRenderCommand(this);
            for (; i < childLen; i++) {
                if (locChildren[i]) {
                    locChildren[i]._renderCmd.visit(this);
                }
            }
        } else {
            cc.renderer.pushRenderCommand(this);
        }
        this._dirtyFlag = 0;
        currentStack.top = currentStack.stack.pop();
    };
    proto.transform = function(parentCmd, recursive) {
        var t4x4 = this._transform4x4, stackMatrix = this._stackMatrix, node = this._node;
        parentCmd = parentCmd || this.getParentRenderCmd();
        var parentMatrix = parentCmd ? parentCmd._stackMatrix : cc.current_stack.top;
        var trans = this.getNodeToParentTransform();
        this._dirtyFlag = this._dirtyFlag & cc.Node._dirtyFlags.transformDirty ^ this._dirtyFlag;
        var t4x4Mat = t4x4.mat;
        t4x4Mat[0] = trans.a;
        t4x4Mat[4] = trans.c;
        t4x4Mat[12] = trans.tx;
        t4x4Mat[1] = trans.b;
        t4x4Mat[5] = trans.d;
        t4x4Mat[13] = trans.ty;
        t4x4Mat[14] = node._vertexZ;
        cc.kmMat4Multiply(stackMatrix, parentMatrix, t4x4);
        if (node._camera != null && !(node.grid != null && node.grid.isActive())) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->166");
        }
        if (!recursive || !node._children || node._children.length === 0) {
            return;
        }
        var i, len, locChildren = node._children;
        for (i = 0, len = locChildren.length; i < len; i++) {
            locChildren[i]._renderCmd.transform(this, recursive);
        }
    };
    proto.setShaderProgram = function(shaderProgram) {
        this._shaderProgram = shaderProgram;
    };
    proto.getShaderProgram = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNodeWebGLRenderCmd.js->180");
    };
})();