(function() {
    cc.ProtectedNode.WebGLRenderCmd = function(renderable) {
        cc.Node.WebGLRenderCmd.call(this, renderable);
    };
    var proto = cc.ProtectedNode.WebGLRenderCmd.prototype = Object.create(cc.Node.WebGLRenderCmd.prototype);
    cc.inject(cc.ProtectedNode.RenderCmd, proto);
    proto.constructor = cc.ProtectedNode.WebGLRenderCmd;
    proto.visit = function(parentCmd) {
        var node = this._node;
        if (!node._visible) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->11");
        }
        var i, j, currentStack = cc.current_stack;
        currentStack.stack.push(currentStack.top);
        this._syncStatus(parentCmd);
        currentStack.top = this._stackMatrix;
        var locGrid = node.grid;
        if (locGrid && locGrid._active) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->19");
        }
        var locChildren = node._children, locProtectedChildren = node._protectedChildren;
        var childLen = locChildren.length, pLen = locProtectedChildren.length;
        node.sortAllChildren();
        node.sortAllProtectedChildren();
        var pChild;
        for (i = 0; i < childLen; i++) {
            if (locChildren[i] && locChildren[i]._localZOrder < 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->28");
            } else {
                break;
            }
        }
        for (j = 0; j < pLen; j++) {
            pChild = locProtectedChildren[j];
            if (pChild && pChild._localZOrder < 0) {
                this._changeProtectedChild(pChild);
                pChild.visit(this);
            } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->39");
            }
        }
        cc.renderer.pushRenderCommand(this);
        for (; i < childLen; i++) {
            locChildren[i] && locChildren[i].visit(this);
        }
        for (; j < pLen; j++) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->47");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->48");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->49");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->50");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->51");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->52");
        }
        if (locGrid && locGrid._active) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->55");
        }
        this._dirtyFlag = 0;
        currentStack.top = currentStack.stack.pop();
    };
    proto.transform = function(parentCmd, recursive) {
        var node = this._node;
        var t4x4 = this._transform4x4, stackMatrix = this._stackMatrix, parentMatrix = parentCmd ? parentCmd._stackMatrix : cc.current_stack.top;
        var trans = node.getNodeToParentTransform();
        if (node._changePosition) {
            node._changePosition();
        }
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
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->78");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->79");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->80");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->81");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->82");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->83");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->84");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->85");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->86");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->87");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->88");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->89");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->90");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->91");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->92");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->93");
        }
        var i, len, locChildren = node._children;
        if (recursive && locChildren && locChildren.length !== 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->97");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->98");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNodeWebGLRenderCmd.js->99");
        }
        locChildren = node._protectedChildren;
        if (recursive && locChildren && locChildren.length !== 0) {
            for (i = 0, len = locChildren.length; i < len; i++) {
                locChildren[i]._renderCmd.transform(this, recursive);
            }
        }
    };
})();