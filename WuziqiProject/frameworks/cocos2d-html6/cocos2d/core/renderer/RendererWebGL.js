cc.rendererWebGL = {
    childrenOrderDirty: true,
    _transformNodePool: [],
    _renderCmds: [],
    _isCacheToBufferOn: false,
    _cacheToBufferCmds: {},
    _cacheInstanceIds: [],
    _currentID: 0,
    getRenderCmd: function(renderableObject) {
        return renderableObject._createRenderCmd();
    },
    rendering: function(ctx) {
        var locCmds = this._renderCmds, i, len;
        var context = ctx || cc._renderContext;
        for (i = 0, len = locCmds.length; i < len; i++) {
            locCmds[i].rendering(context);
        }
    },
    _turnToCacheMode: function(renderTextureID) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->24");
    },
    _turnToNormalMode: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->27");
    },
    _renderingToBuffer: function(renderTextureId) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->43");
    },
    resetFlag: function() {
        this.childrenOrderDirty = false;
        this._transformNodePool.length = 0;
    },
    transform: function() {
        var locPool = this._transformNodePool;
        locPool.sort(this._sortNodeByLevelAsc);
        for (var i = 0, len = locPool.length; i < len; i++) {
            locPool[i].updateStatus();
        }
        locPool.length = 0;
    },
    transformDirty: function() {
        return this._transformNodePool.length > 0;
    },
    _sortNodeByLevelAsc: function(n1, n2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->61");
    },
    pushDirtyNode: function(node) {
        this._transformNodePool.push(node);
    },
    clearRenderCommands: function() {
        this._renderCmds.length = 0;
    },
    pushRenderCommand: function(cmd) {
        if (!cmd._needDraw) {
            return;
        }
        if (this._isCacheToBufferOn) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererWebGL.js->78");
        } else {
            if (this._renderCmds.indexOf(cmd) === -1) {
                this._renderCmds.push(cmd);
            }
        }
    }
};
if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
    cc.renderer = cc.rendererWebGL;
}