cc.AtlasNode = cc.Node.extend({
    textureAtlas: null,
    quadsToDraw: 0,
    _itemsPerRow: 0,
    _itemsPerColumn: 0,
    _itemWidth: 0,
    _itemHeight: 0,
    _opacityModifyRGB: false,
    _blendFunc: null,
    _ignoreContentScaleFactor: false,
    _className: "AtlasNode",
    _textureForCanvas: null,
    ctor: function(tile, tileWidth, tileHeight, itemsToRender) {
        cc.Node.prototype.ctor.call(this);
        this._blendFunc = {
            src: cc.BLEND_SRC,
            dst: cc.BLEND_DST
        };
        this._ignoreContentScaleFactor = false;
        itemsToRender !== undefined && this.initWithTileFile(tile, tileWidth, tileHeight, itemsToRender);
    },
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->27");
    },
    updateAtlasValues: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->30");
    },
    getColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->36");
    },
    setOpacityModifyRGB: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->41");
    },
    isOpacityModifyRGB: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->44");
    },
    getBlendFunc: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->47");
    },
    setBlendFunc: function(src, dst) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->57");
    },
    setTextureAtlas: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->60");
    },
    getTextureAtlas: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->63");
    },
    getQuadsToDraw: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->66");
    },
    setQuadsToDraw: function(quadsToDraw) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->69");
    },
    initWithTileFile: function(tile, tileWidth, tileHeight, itemsToRender) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->76");
    },
    initWithTexture: function(texture, tileWidth, tileHeight, itemsToRender) {
        return this._renderCmd.initWithTexture(texture, tileWidth, tileHeight, itemsToRender);
    },
    setColor: function(color) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->82");
    },
    setOpacity: function(opacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->85");
    },
    getTexture: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->88");
    },
    setTexture: function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->91");
    },
    _setIgnoreContentScaleFactor: function(ignoreContentScaleFactor) {
        this._ignoreContentScaleFactor = ignoreContentScaleFactor;
    }
});
var _p = cc.AtlasNode.prototype;
cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
cc.defineGetterSetter(_p, "color", _p.getColor, _p.setColor);
_p.texture;
cc.defineGetterSetter(_p, "texture", _p.getTexture, _p.setTexture);
_p.textureAtlas;
_p.quadsToDraw;
cc.EventHelper.prototype.apply(_p);
cc.AtlasNode.create = function(tile, tileWidth, tileHeight, itemsToRender) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCAtlasNode.js->106");
};