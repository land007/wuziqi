ccui.Text = ccui.Widget.extend({
    _touchScaleChangeEnabled: false,
    _normalScaleValueX: 1,
    _normalScaleValueY: 1,
    _fontName: "Thonburi",
    _fontSize: 10,
    _onSelectedScaleOffset: .5,
    _labelRenderer: "",
    _textAreaSize: null,
    _textVerticalAlignment: 0,
    _textHorizontalAlignment: 0,
    _className: "Text",
    _type: null,
    _labelRendererAdaptDirty: true,
    ctor: function(textContent, fontName, fontSize) {
        this._type = ccui.Text.Type.SYSTEM;
        this._textAreaSize = cc.size(0, 0);
        ccui.Widget.prototype.ctor.call(this);
        fontSize !== undefined && this.init(textContent, fontName, fontSize);
    },
    init: function(textContent, fontName, fontSize) {
        if (ccui.Widget.prototype.init.call(this)) {
            if (arguments.length > 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->24");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->25");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->26");
            }
            return true;
        }
        return false;
    },
    _initRenderer: function() {
        this._labelRenderer = new cc.LabelTTF;
        this.addProtectedChild(this._labelRenderer, ccui.Text.RENDERER_ZORDER, -1);
    },
    setText: function(text) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->37");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->38");
    },
    setString: function(text) {
        if (text == this._labelRenderer.getString()) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->42");
        }
        this._labelRenderer.setString(text);
        this._updateContentSizeWithTextureSize(this._labelRenderer.getContentSize());
        this._labelRendererAdaptDirty = true;
    },
    getStringValue: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->49");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->50");
    },
    getString: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->53");
    },
    getStringLength: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->56");
    },
    setFontSize: function(size) {
        this._labelRenderer.setFontSize(size);
        this._fontSize = size;
        this._updateContentSizeWithTextureSize(this._labelRenderer.getContentSize());
        this._labelRendererAdaptDirty = true;
    },
    getFontSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->65");
    },
    setFontName: function(name) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->68");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->69");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->70");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->71");
    },
    getFontName: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->74");
    },
    _setFont: function(font) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->77");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->78");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->79");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->80");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->81");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->82");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->83");
    },
    _getFont: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->86");
    },
    getType: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->89");
    },
    setTextAreaSize: function(size) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->92");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->93");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->94");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->95");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->96");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->97");
    },
    getTextAreaSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->100");
    },
    setTextHorizontalAlignment: function(alignment) {
        this._labelRenderer.setHorizontalAlignment(alignment);
        this._updateContentSizeWithTextureSize(this._labelRenderer.getContentSize());
        this._labelRendererAdaptDirty = true;
    },
    getTextHorizontalAlignment: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->108");
    },
    setTextVerticalAlignment: function(alignment) {
        this._labelRenderer.setVerticalAlignment(alignment);
        this._updateContentSizeWithTextureSize(this._labelRenderer.getContentSize());
        this._labelRendererAdaptDirty = true;
    },
    getTextVerticalAlignment: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->116");
    },
    setTouchScaleChangeEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->119");
    },
    isTouchScaleChangeEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->122");
    },
    _onPressStateChangedToNormal: function() {
        if (!this._touchScaleChangeEnabled) {
            return;
        }
        this._labelRenderer.setScaleX(this._normalScaleValueX);
        this._labelRenderer.setScaleY(this._normalScaleValueY);
    },
    _onPressStateChangedToPressed: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->132");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->133");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->134");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->135");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->136");
    },
    _onPressStateChangedToDisabled: function() {},
    _onSizeChanged: function() {
        ccui.Widget.prototype._onSizeChanged.call(this);
        this._labelRendererAdaptDirty = true;
    },
    _adaptRenderers: function() {
        if (this._labelRendererAdaptDirty) {
            this._labelScaleChangedWithSize();
            this._labelRendererAdaptDirty = false;
        }
    },
    getVirtualRendererSize: function() {
        return this._labelRenderer.getContentSize();
    },
    getVirtualRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->153");
    },
    getAutoRenderSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->156");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->157");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->158");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->159");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->160");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->161");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->162");
    },
    _labelScaleChangedWithSize: function() {
        var locContentSize = this._contentSize;
        if (this._ignoreSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->167");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->168");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->169");
        } else {
            this._labelRenderer.setDimensions(cc.size(locContentSize.width, locContentSize.height));
            var textureSize = this._labelRenderer.getContentSize();
            if (textureSize.width <= 0 || textureSize.height <= 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->174");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->175");
            }
            var scaleX = locContentSize.width / textureSize.width;
            var scaleY = locContentSize.height / textureSize.height;
            this._labelRenderer.setScaleX(scaleX);
            this._labelRenderer.setScaleY(scaleY);
            this._normalScaleValueX = scaleX;
            this._normalScaleValueY = scaleY;
        }
        this._labelRenderer.setPosition(locContentSize.width / 2, locContentSize.height / 2);
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->187");
    },
    enableShadow: function(shadowColor, offset, blurRadius) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->190");
    },
    enableOutline: function(outlineColor, outlineSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->193");
    },
    enableGlow: function(glowColor) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->196");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->197");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->198");
    },
    disableEffect: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->201");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->202");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->203");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->206");
    },
    _copySpecialProperties: function(uiLabel) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->209");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->210");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->211");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->212");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->213");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->214");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->215");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->216");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->217");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->218");
    },
    _setBoundingWidth: function(value) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->221");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->222");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->223");
    },
    _setBoundingHeight: function(value) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->226");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->227");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->228");
    },
    _getBoundingWidth: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->231");
    },
    _getBoundingHeight: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->234");
    },
    _changePosition: function() {
        this._adaptRenderers();
    },
    setColor: function(color) {
        cc.ProtectedNode.prototype.setColor.call(this, color);
        this._labelRenderer.setColor(color);
    },
    setTextColor: function(color) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->244");
    },
    getTextColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->247");
    }
});
var _p = ccui.Text.prototype;
_p.boundingWidth;
cc.defineGetterSetter(_p, "boundingWidth", _p._getBoundingWidth, _p._setBoundingWidth);
_p.boundingHeight;
cc.defineGetterSetter(_p, "boundingHeight", _p._getBoundingHeight, _p._setBoundingHeight);
_p.string;
cc.defineGetterSetter(_p, "string", _p.getString, _p.setString);
_p.stringLength;
cc.defineGetterSetter(_p, "stringLength", _p.getStringLength);
_p.font;
cc.defineGetterSetter(_p, "font", _p._getFont, _p._setFont);
_p.fontSize;
cc.defineGetterSetter(_p, "fontSize", _p.getFontSize, _p.setFontSize);
_p.fontName;
cc.defineGetterSetter(_p, "fontName", _p.getFontName, _p.setFontName);
_p.textAlign;
cc.defineGetterSetter(_p, "textAlign", _p.getTextHorizontalAlignment, _p.setTextHorizontalAlignment);
_p.verticalAlign;
cc.defineGetterSetter(_p, "verticalAlign", _p.getTextVerticalAlignment, _p.setTextVerticalAlignment);
_p = null;
ccui.Label = ccui.Text.create = function(textContent, fontName, fontSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIText.js->271");
};
ccui.Text.RENDERER_ZORDER = -1;
ccui.Text.Type = {
    SYSTEM: 0,
    TTF: 1
};