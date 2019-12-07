cc.LabelTTF = cc.Sprite.extend({
    _dimensions: null,
    _hAlignment: cc.TEXT_ALIGNMENT_CENTER,
    _vAlignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
    _fontName: null,
    _fontSize: 0,
    _string: "",
    _originalText: null,
    _shadowEnabled: false,
    _shadowOffset: null,
    _shadowOpacity: 0,
    _shadowBlur: 0,
    _shadowColor: null,
    _strokeEnabled: false,
    _strokeColor: null,
    _strokeSize: 0,
    _textFillColor: null,
    _strokeShadowOffsetX: 0,
    _strokeShadowOffsetY: 0,
    _needUpdateTexture: false,
    _lineWidths: null,
    _className: "LabelTTF",
    _lineHeight: 0,
    _fontStyle: "normal",
    _fontWeight: "normal",
    initWithString: function(label, fontName, fontSize, dimensions, hAlignment, vAlignment) {
        var strInfo;
        if (label) {
            strInfo = label + "";
        } else {
            strInfo = "";
        }
        fontSize = fontSize || 16;
        dimensions = dimensions || cc.size(0, 0);
        hAlignment = hAlignment || cc.TEXT_ALIGNMENT_LEFT;
        vAlignment = vAlignment || cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this._opacityModifyRGB = false;
        this._dimensions = cc.size(dimensions.width, dimensions.height);
        this._fontName = fontName || "Arial";
        this._hAlignment = hAlignment;
        this._vAlignment = vAlignment;
        this._fontSize = fontSize;
        this._renderCmd._setFontStyle(this._fontName, fontSize, this._fontStyle, this._fontWeight);
        this.string = strInfo;
        this._renderCmd._setColorsString();
        this._renderCmd._updateTexture();
        this._setUpdateTextureDirty();
        return true;
    },
    _setUpdateTextureDirty: function() {
        this._needUpdateTexture = true;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.textDirty);
    },
    ctor: function(text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
        cc.Sprite.prototype.ctor.call(this);
        this._dimensions = cc.size(0, 0);
        this._hAlignment = cc.TEXT_ALIGNMENT_LEFT;
        this._vAlignment = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this._opacityModifyRGB = false;
        this._fontName = "Arial";
        this._shadowEnabled = false;
        this._shadowOffset = cc.p(0, 0);
        this._shadowOpacity = 0;
        this._shadowBlur = 0;
        this._strokeEnabled = false;
        this._strokeColor = cc.color(255, 255, 255, 255);
        this._strokeSize = 0;
        this._textFillColor = cc.color(255, 255, 255, 255);
        this._strokeShadowOffsetX = 0;
        this._strokeShadowOffsetY = 0;
        this._needUpdateTexture = false;
        this._lineWidths = [];
        this._renderCmd._setColorsString();
        this._textureLoaded = true;
        if (fontName && fontName instanceof cc.FontDefinition) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->76");
        } else {
            cc.LabelTTF.prototype.initWithString.call(this, text, fontName, fontSize, dimensions, hAlignment, vAlignment);
        }
    },
    init: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->82");
    },
    description: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->85");
    },
    getLineHeight: function() {
        return this._lineHeight || this._renderCmd._getFontClientHeight();
    },
    setLineHeight: function(lineHeight) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->91");
    },
    getString: function() {
        return this._string;
    },
    getHorizontalAlignment: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->97");
    },
    getVerticalAlignment: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->100");
    },
    getDimensions: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->103");
    },
    getFontSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->106");
    },
    getFontName: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->109");
    },
    initWithStringAndTextDefinition: function(text, textDefinition) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->114");
    },
    setTextDefinition: function(theDefinition) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->119");
    },
    getTextDefinition: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->122");
    },
    enableShadow: function(a, b, c, d) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->129");
    },
    _enableShadowNoneColor: function(shadowOffsetX, shadowOffsetY, shadowOpacity, shadowBlur) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->148");
    },
    _enableShadow: function(shadowColor, offset, blurRadius) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->162");
    },
    _getShadowOffsetX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->165");
    },
    _setShadowOffsetX: function(x) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->174");
    },
    _getShadowOffsetY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->177");
    },
    _setShadowOffsetY: function(y) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->186");
    },
    _getShadowOffset: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->189");
    },
    _setShadowOffset: function(offset) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->199");
    },
    _getShadowOpacity: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->202");
    },
    _setShadowOpacity: function(shadowOpacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->212");
    },
    _getShadowBlur: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->215");
    },
    _setShadowBlur: function(shadowBlur) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->224");
    },
    disableShadow: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->230");
    },
    enableStroke: function(strokeColor, strokeSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->246");
    },
    _getStrokeStyle: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->249");
    },
    _setStrokeStyle: function(strokeStyle) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->262");
    },
    _getLineWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->265");
    },
    _setLineWidth: function(lineWidth) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->274");
    },
    disableStroke: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->280");
    },
    setFontFillColor: function(fillColor) {
        var locTextFillColor = this._textFillColor;
        if (locTextFillColor.r != fillColor.r || locTextFillColor.g != fillColor.g || locTextFillColor.b != fillColor.b) {
            locTextFillColor.r = fillColor.r;
            locTextFillColor.g = fillColor.g;
            locTextFillColor.b = fillColor.b;
            this._renderCmd._setColorsString();
            this._needUpdateTexture = true;
        }
    },
    _getFillStyle: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->293");
    },
    _updateWithTextDefinition: function(textDefinition, mustUpdateTexture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->303");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->319");
    },
    _prepareTextDefinition: function(adjustForResolution) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->324");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->325");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->337");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->354");
    },
    setString: function(text) {
        text = String(text);
        if (this._originalText != text) {
            this._originalText = text + "";
            this._updateString();
            this._setUpdateTextureDirty();
            this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        }
    },
    _updateString: function() {
        if ((!this._string || this._string === "") && this._string !== this._originalText) {
            cc.renderer.childrenOrderDirty = true;
        }
        this._string = this._originalText;
    },
    setHorizontalAlignment: function(alignment) {
        if (alignment !== this._hAlignment) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->374");
        }
    },
    setVerticalAlignment: function(verticalAlignment) {
        if (verticalAlignment != this._vAlignment) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->380");
        }
    },
    setDimensions: function(dim, height) {
        var width;
        if (height === undefined) {
            width = dim.width;
            height = dim.height;
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->389");
        }
        if (width != this._dimensions.width || height != this._dimensions.height) {
            this._dimensions.width = width;
            this._dimensions.height = height;
            this._updateString();
            this._setUpdateTextureDirty();
        }
    },
    _getBoundingWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->399");
    },
    _setBoundingWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->403");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->405");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->406");
    },
    _getBoundingHeight: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->409");
    },
    _setBoundingHeight: function(height) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->413");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->416");
    },
    setFontSize: function(fontSize) {
        if (this._fontSize !== fontSize) {
            this._fontSize = fontSize;
            this._renderCmd._setFontStyle(this._fontName, this._fontSize, this._fontStyle, this._fontWeight);
            this._setUpdateTextureDirty();
        }
    },
    setFontName: function(fontName) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->428");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->430");
    },
    _getFont: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->433");
    },
    _setFont: function(fontStyle) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->441");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->442");
    },
    getContentSize: function() {
        if (this._needUpdateTexture) {
            this._renderCmd._updateTTF();
        }
        return cc.Sprite.prototype.getContentSize.call(this);
    },
    _getWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->451");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->452");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->453");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->454");
    },
    _getHeight: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->457");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->458");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->459");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->460");
    },
    setTextureRect: function(rect, rotated, untrimmedSize) {
        cc.Sprite.prototype.setTextureRect.call(this, rect, rotated, untrimmedSize, false);
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->467");
        } else {
            return new cc.LabelTTF.WebGLRenderCmd(this);
        }
    },
    _setFontStyle: function(fontStyle) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->475");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->476");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->477");
    },
    _getFontStyle: function() {
        return this._fontStyle;
    },
    _setFontWeight: function(fontWeight) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->483");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->484");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->485");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->486");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->487");
    },
    _getFontWeight: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->490");
    }
});
cc.assert(cc.isFunction(cc._tmp.PrototypeLabelTTF), cc._LogInfos.MissingFile, "LabelTTFPropertyDefine.js");
cc._tmp.PrototypeLabelTTF();
delete cc._tmp.PrototypeLabelTTF;
cc.LabelTTF._fontStyleRE = /^(\d+)px\s+['"]?([\w\s\d]+)['"]?$/;
cc.LabelTTF.create = function(text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->498");
};
cc.LabelTTF.createWithFontDefinition = cc.LabelTTF.create;
if (cc.USE_LA88_LABELS) {
    cc.LabelTTF._SHADER_PROGRAM = cc.SHADER_POSITION_TEXTURECOLOR;
} else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->504");
}
cc.LabelTTF.__labelHeightDiv = cc.newElement("div");
cc.LabelTTF.__labelHeightDiv.style.fontFamily = "Arial";
cc.LabelTTF.__labelHeightDiv.style.position = "absolute";
cc.LabelTTF.__labelHeightDiv.style.left = "-100px";
cc.LabelTTF.__labelHeightDiv.style.top = "-100px";
cc.LabelTTF.__labelHeightDiv.style.lineHeight = "normal";
document.body ? document.body.appendChild(cc.LabelTTF.__labelHeightDiv) : cc._addEventListener(window, "load", function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->513");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTF.js->514");
}, false);
cc.LabelTTF.__getFontHeightByDiv = function(fontName, fontSize) {
    var clientHeight = cc.LabelTTF.__fontHeightCache[fontName + "." + fontSize];
    if (clientHeight > 0) {
        return clientHeight;
    }
    var labelDiv = cc.LabelTTF.__labelHeightDiv;
    labelDiv.innerHTML = "ajghl~!";
    labelDiv.style.fontFamily = fontName;
    labelDiv.style.fontSize = fontSize + "px";
    clientHeight = labelDiv.clientHeight;
    cc.LabelTTF.__fontHeightCache[fontName + "." + fontSize] = clientHeight;
    labelDiv.innerHTML = "";
    return clientHeight;
};
cc.LabelTTF.__fontHeightCache = {};