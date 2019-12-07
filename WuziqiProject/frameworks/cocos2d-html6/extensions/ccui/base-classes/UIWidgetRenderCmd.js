if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->2");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->3");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->4");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->5");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->6");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->7");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->8");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->9");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->10");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->11");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->12");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->13");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->14");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->15");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->16");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->17");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->18");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->19");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->20");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->21");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->22");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->23");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->24");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->25");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->26");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->27");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->28");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->29");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->30");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->31");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->32");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidgetRenderCmd.js->33");
} else {
    (function() {
        ccui.Widget.WebGLRenderCmd = function(renderable) {
            cc.ProtectedNode.WebGLRenderCmd.call(this, renderable);
            this._needDraw = false;
        };
        var proto = ccui.Widget.WebGLRenderCmd.prototype = Object.create(cc.ProtectedNode.WebGLRenderCmd.prototype);
        proto.constructor = ccui.Widget.WebGLRenderCmd;
        proto.visit = function(parentCmd) {
            var node = this._node;
            if (node._visible) {
                node._adaptRenderers();
                cc.ProtectedNode.WebGLRenderCmd.prototype.visit.call(this, parentCmd);
            }
        };
        proto.transform = function(parentCmd, recursive) {
            var node = this._node;
            if (node._visible) {
                node._adaptRenderers();
                if (!this._usingLayoutComponent) {
                    var widgetParent = node.getWidgetParent();
                    if (widgetParent) {
                        var parentSize = widgetParent.getContentSize();
                        if (parentSize.width !== 0 && parentSize.height !== 0) {
                            node._position.x = parentSize.width * node._positionPercent.x;
                            node._position.y = parentSize.height * node._positionPercent.y;
                        }
                    }
                }
                cc.ProtectedNode.WebGLRenderCmd.prototype.transform.call(this, parentCmd, recursive);
            }
        };
    })();
}