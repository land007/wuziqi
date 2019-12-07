cc.LabelAtlas = cc.AtlasNode.extend({
    _string: null,
    _mapStartChar: null,
    _textureLoaded: false,
    _className: "LabelAtlas",
    ctor: function(strText, charMapFile, itemWidth, itemHeight, startCharMap) {
        cc.AtlasNode.prototype.ctor.call(this);
        this._renderCmd.setCascade();
        charMapFile && cc.LabelAtlas.prototype.initWithString.call(this, strText, charMapFile, itemWidth, itemHeight, startCharMap);
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
            return new cc.LabelAtlas.WebGLRenderCmd(this);
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->15");
        }
    },
    textureLoaded: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->19");
    },
    addLoadedEventListener: function(callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->22");
    },
    initWithString: function(strText, charMapFile, itemWidth, itemHeight, startCharMap) {
        var label = strText + "", textureFilename, width, height, startChar;
        if (itemWidth === undefined) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->36");
        } else {
            textureFilename = charMapFile;
            width = itemWidth || 0;
            height = itemHeight || 0;
            startChar = startCharMap || " ";
        }
        var texture = null;
        if (textureFilename instanceof cc.Texture2D) {
            texture = textureFilename;
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->47");
        }
        var locLoaded = texture.isLoaded();
        this._textureLoaded = locLoaded;
        if (!locLoaded) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->57");
        }
        if (this.initWithTexture(texture, width, height, label.length)) {
            this._mapStartChar = startChar;
            this.string = label;
            return true;
        }
        return false;
    },
    setColor: function(color3) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->68");
    },
    getString: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->71");
    },
    addChild: function(child, localZOrder, tag) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->75");
    },
    updateAtlasValues: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->78");
    },
    setString: function(label) {
        label = String(label);
        var len = label.length;
        this._string = label;
        this.setContentSize(len * this._itemWidth, this._itemHeight);
        this._renderCmd.setString(label);
        this._renderCmd.updateAtlasValues();
        this.quadsToDraw = len;
    }
});
(function() {
    var proto = cc.LabelAtlas.prototype;
    cc.defineGetterSetter(proto, "opacity", proto.getOpacity, proto.setOpacity);
    cc.defineGetterSetter(proto, "color", proto.getColor, proto.setColor);
    proto.string;
    cc.defineGetterSetter(proto, "string", proto.getString, proto.setString);
})();
cc.LabelAtlas.create = function(strText, charMapFile, itemWidth, itemHeight, startCharMap) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelAtlas.js->98");
};