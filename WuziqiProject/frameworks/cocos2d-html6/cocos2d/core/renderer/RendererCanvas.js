cc.rendererCanvas = {
    childrenOrderDirty: true,
    _transformNodePool: [],
    _renderCmds: [],
    _isCacheToCanvasOn: false,
    _cacheToCanvasCmds: {},
    _cacheInstanceIds: [],
    _currentID: 0,
    getRenderCmd: function(renderableObject) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->10");
    },
    rendering: function(ctx) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->18");
    },
    _renderingToCacheCanvas: function(ctx, instanceID, scaleX, scaleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->40");
    },
    _turnToCacheMode: function(renderTextureID) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->49");
    },
    _turnToNormalMode: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->52");
    },
    resetFlag: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->56");
    },
    transform: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->66");
    },
    transformDirty: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->69");
    },
    _sortNodeByLevelAsc: function(n1, n2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->72");
    },
    pushDirtyNode: function(node) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->75");
    },
    clearRenderCommands: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->78");
    },
    pushRenderCommand: function(cmd) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->94");
    }
};
if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->98");
}
(function() {
    cc.CanvasContextWrapper = function(context) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->111");
    };
    var proto = cc.CanvasContextWrapper.prototype;
    proto.resetCache = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->120");
    };
    proto.setOffset = function(x, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->125");
    };
    proto.computeRealOffsetY = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->128");
    };
    proto.setViewScale = function(scaleX, scaleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->132");
    };
    proto.getContext = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->135");
    };
    proto.save = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->139");
    };
    proto.restore = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->143");
    };
    proto.setGlobalAlpha = function(alpha) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->153");
    };
    proto.setCompositeOperation = function(compositionOperation) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->163");
    };
    proto.setFillStyle = function(fillStyle) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->173");
    };
    proto.setStrokeStyle = function(strokeStyle) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->183");
    };
    proto.setTransform = function(t, scaleX, scaleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->192");
    };
    proto._switchToArmatureMode = function(enable, t, scaleX, scaleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/core/renderer/RendererCanvas.js->202");
    };
})();