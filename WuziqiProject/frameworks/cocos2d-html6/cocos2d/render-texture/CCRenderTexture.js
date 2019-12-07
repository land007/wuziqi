cc.IMAGE_FORMAT_JPEG = 0;
cc.IMAGE_FORMAT_PNG = 1;
cc.IMAGE_FORMAT_RAWDATA = 9;
cc.NextPOT = function(x) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->5");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->7");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->8");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->11");
};
cc.RenderTexture = cc.Node.extend({
    sprite: null,
    clearFlags: 0,
    clearDepthVal: 0,
    autoDraw: false,
    _texture: null,
    _pixelFormat: cc.Texture2D.PIXEL_FORMAT_RGBA8888,
    clearStencilVal: 0,
    _clearColor: null,
    _className: "RenderTexture",
    ctor: function(width, height, format, depthStencilFormat) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->33");
    },
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->40");
    },
    cleanup: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->44");
    },
    getSprite: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->47");
    },
    setSprite: function(sprite) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->50");
    },
    initWithWidthAndHeight: function(width, height, format, depthStencilFormat) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->53");
    },
    begin: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->57");
    },
    beginWithClear: function(r, g, b, a, depthValue, stencilValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->63");
    },
    _beginWithClear: function(r, g, b, a, depthValue, stencilValue, flags) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->67");
    },
    end: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->70");
    },
    clear: function(r, g, b, a) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->74");
    },
    clearRect: function(x, y, width, height) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->77");
    },
    clearDepth: function(depthValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->80");
    },
    clearStencil: function(stencilValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->83");
    },
    getClearFlags: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->86");
    },
    setClearFlags: function(clearFlags) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->89");
    },
    getClearColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->92");
    },
    setClearColor: function(clearColor) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->100");
    },
    getClearDepth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->103");
    },
    setClearDepth: function(clearDepth) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->106");
    },
    getClearStencil: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->109");
    },
    setClearStencil: function(clearStencil) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->112");
    },
    isAutoDraw: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->115");
    },
    setAutoDraw: function(autoDraw) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->118");
    },
    saveToFile: function(filePath, format) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->121");
    },
    newCCImage: function(flipImage) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->125");
    },
    listenToBackground: function(obj) {},
    listenToForeground: function(obj) {}
});
var _p = cc.RenderTexture.prototype;
_p.clearColorVal;
cc.defineGetterSetter(_p, "clearColorVal", _p.getClearColor, _p.setClearColor);
cc.RenderTexture.create = function(width, height, format, depthStencilFormat) {
console.log("/frameworks/cocos2d-html5/cocos2d/render-texture/CCRenderTexture.js->134");
};