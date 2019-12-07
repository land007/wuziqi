(function() {
    ccui.Layout.WebGLRenderCmd = function(renderable) {
        ccui.ProtectedNode.WebGLRenderCmd.call(this, renderable);
        this._needDraw = false;
        this._currentStencilEnabled = 0;
        this._currentStencilWriteMask = 0;
        this._currentStencilFunc = 0;
        this._currentStencilRef = 0;
        this._currentStencilValueMask = 0;
        this._currentStencilFail = 0;
        this._currentStencilPassDepthFail = 0;
        this._currentStencilPassDepthPass = 0;
        this._currentDepthWriteMask = false;
        this._mask_layer_le = 0;
        this._beforeVisitCmdStencil = new cc.CustomRenderCmd(this, this._onBeforeVisitStencil);
        this._afterDrawStencilCmd = new cc.CustomRenderCmd(this, this._onAfterDrawStencil);
        this._afterVisitCmdStencil = new cc.CustomRenderCmd(this, this._onAfterVisitStencil);
        this._beforeVisitCmdScissor = new cc.CustomRenderCmd(this, this._onBeforeVisitScissor);
        this._afterVisitCmdScissor = new cc.CustomRenderCmd(this, this._onAfterVisitScissor);
    };
    var proto = ccui.Layout.WebGLRenderCmd.prototype = Object.create(ccui.ProtectedNode.WebGLRenderCmd.prototype);
    proto.constructor = ccui.Layout.WebGLRenderCmd;
    proto.visit = function(parentCmd) {
        var node = this._node;
        if (!node._visible) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->26");
        }
        node._adaptRenderers();
        node._doLayout();
        if (node._clippingEnabled) {
            switch (node._clippingType) {
              case ccui.Layout.CLIPPING_STENCIL:
                this.stencilClippingVisit(parentCmd);
                break;
              case ccui.Layout.CLIPPING_SCISSOR:
                this.scissorClippingVisit(parentCmd);
                break;
              default:
                break;
            }
        } else {
            ccui.Widget.WebGLRenderCmd.prototype.visit.call(this, parentCmd);
        }
    };
    proto._onBeforeVisitStencil = function(ctx) {
        var gl = ctx || cc._renderContext;
        ccui.Layout.WebGLRenderCmd._layer++;
        var mask_layer = 1 << ccui.Layout.WebGLRenderCmd._layer;
        var mask_layer_l = mask_layer - 1;
        this._mask_layer_le = mask_layer | mask_layer_l;
        this._currentStencilEnabled = gl.isEnabled(gl.STENCIL_TEST);
        this._currentStencilWriteMask = gl.getParameter(gl.STENCIL_WRITEMASK);
        this._currentStencilFunc = gl.getParameter(gl.STENCIL_FUNC);
        this._currentStencilRef = gl.getParameter(gl.STENCIL_REF);
        this._currentStencilValueMask = gl.getParameter(gl.STENCIL_VALUE_MASK);
        this._currentStencilFail = gl.getParameter(gl.STENCIL_FAIL);
        this._currentStencilPassDepthFail = gl.getParameter(gl.STENCIL_PASS_DEPTH_FAIL);
        this._currentStencilPassDepthPass = gl.getParameter(gl.STENCIL_PASS_DEPTH_PASS);
        gl.enable(gl.STENCIL_TEST);
        gl.stencilMask(mask_layer);
        this._currentDepthWriteMask = gl.getParameter(gl.DEPTH_WRITEMASK);
        gl.depthMask(false);
        gl.stencilFunc(gl.NEVER, mask_layer, mask_layer);
        gl.stencilOp(gl.ZERO, gl.KEEP, gl.KEEP);
        this._drawFullScreenQuadClearStencil();
        gl.stencilFunc(gl.NEVER, mask_layer, mask_layer);
        gl.stencilOp(gl.REPLACE, gl.KEEP, gl.KEEP);
    };
    proto._onAfterDrawStencil = function(ctx) {
        var gl = ctx || cc._renderContext;
        gl.depthMask(this._currentDepthWriteMask);
        gl.stencilFunc(gl.EQUAL, this._mask_layer_le, this._mask_layer_le);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    };
    proto._onAfterVisitStencil = function(ctx) {
        var gl = ctx || cc._renderContext;
        gl.stencilFunc(this._currentStencilFunc, this._currentStencilRef, this._currentStencilValueMask);
        gl.stencilOp(this._currentStencilFail, this._currentStencilPassDepthFail, this._currentStencilPassDepthPass);
        gl.stencilMask(this._currentStencilWriteMask);
        if (!this._currentStencilEnabled) {
            gl.disable(gl.STENCIL_TEST);
        }
        ccui.Layout.WebGLRenderCmd._layer--;
    };
    proto._onBeforeVisitScissor = function(ctx) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->86");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->87");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->88");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->89");
    };
    proto._onAfterVisitScissor = function(ctx) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->92");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->93");
    };
    proto._drawFullScreenQuadClearStencil = function() {
        cc.kmGLMatrixMode(cc.KM_GL_PROJECTION);
        cc.kmGLPushMatrix();
        cc.kmGLLoadIdentity();
        cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW);
        cc.kmGLPushMatrix();
        cc.kmGLLoadIdentity();
        cc._drawingUtil.drawSolidRect(cc.p(-1, -1), cc.p(1, 1), cc.color(255, 255, 255, 255));
        cc.kmGLMatrixMode(cc.KM_GL_PROJECTION);
        cc.kmGLPopMatrix();
        cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW);
        cc.kmGLPopMatrix();
    };
    proto.rebindStencilRendering = function(stencil) {};
    proto.transform = function(parentCmd, recursive) {
        var node = this._node;
        ccui.ProtectedNode.WebGLRenderCmd.prototype.transform.call(this, parentCmd, recursive);
        if (node._clippingStencil) {
            node._clippingStencil._renderCmd.transform(this, recursive);
        }
    };
    proto.stencilClippingVisit = function(parentCmd) {
        var node = this._node;
        if (!node._clippingStencil || !node._clippingStencil.isVisible()) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->119");
        }
        if (ccui.Layout.WebGLRenderCmd._layer + 1 == cc.stencilBits) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->124");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->125");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->126");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->127");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->128");
        }
        cc.renderer.pushRenderCommand(this._beforeVisitCmdStencil);
        var currentStack = cc.current_stack;
        currentStack.stack.push(currentStack.top);
        this._syncStatus(parentCmd);
        this._dirtyFlag = 0;
        currentStack.top = this._stackMatrix;
        node._clippingStencil.visit(this);
        cc.renderer.pushRenderCommand(this._afterDrawStencilCmd);
        var i = 0;
        var j = 0;
        node.sortAllChildren();
        node.sortAllProtectedChildren();
        var locChildren = node._children, locProtectChildren = node._protectedChildren;
        var iLen = locChildren.length, jLen = locProtectChildren.length, child;
        for (; i < iLen; i++) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->145");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->146");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->147");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->148");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->149");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->150");
        }
        for (; j < jLen; j++) {
            child = locProtectChildren[j];
            if (child && child.getLocalZOrder() < 0) {
                child.visit(this);
            } else {
                break;
            }
        }
        for (; i < iLen; i++) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->161");
        }
        for (; j < jLen; j++) {
            locProtectChildren[j].visit(this);
        }
        cc.renderer.pushRenderCommand(this._afterVisitCmdStencil);
        currentStack.top = currentStack.stack.pop();
    };
    proto.scissorClippingVisit = function(parentCmd) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->170");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->171");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutWebGLRenderCmd.js->172");
    };
    ccui.Layout.WebGLRenderCmd._layer = -1;
    ccui.Layout.WebGLRenderCmd._visit_once = null;
})();