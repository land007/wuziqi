ccui.CheckBox = ccui.Widget.extend({
    _backGroundBoxRenderer: null,
    _backGroundSelectedBoxRenderer: null,
    _frontCrossRenderer: null,
    _backGroundBoxDisabledRenderer: null,
    _frontCrossDisabledRenderer: null,
    _isSelected: true,
    _checkBoxEventListener: null,
    _checkBoxEventSelector: null,
    _backGroundTexType: ccui.Widget.LOCAL_TEXTURE,
    _backGroundSelectedTexType: ccui.Widget.LOCAL_TEXTURE,
    _frontCrossTexType: ccui.Widget.LOCAL_TEXTURE,
    _backGroundDisabledTexType: ccui.Widget.LOCAL_TEXTURE,
    _frontCrossDisabledTexType: ccui.Widget.LOCAL_TEXTURE,
    _backGroundFileName: "",
    _backGroundSelectedFileName: "",
    _frontCrossFileName: "",
    _backGroundDisabledFileName: "",
    _frontCrossDisabledFileName: "",
    _className: "CheckBox",
    _zoomScale: .1,
    _backgroundTextureScaleX: .1,
    _backgroundTextureScaleY: .1,
    _backGroundBoxRendererAdaptDirty: true,
    _backGroundSelectedBoxRendererAdaptDirty: true,
    _frontCrossRendererAdaptDirty: true,
    _backGroundBoxDisabledRendererAdaptDirty: true,
    _frontCrossDisabledRendererAdaptDirty: true,
    ctor: function(backGround, backGroundSelected, cross, backGroundDisabled, frontCrossDisabled, texType) {
        ccui.Widget.prototype.ctor.call(this);
        this.setTouchEnabled(true);
        var strNum = 0;
        for (var i = 0; i < arguments.length; i++) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->34");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->35");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->36");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->37");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->38");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->39");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->40");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->41");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->42");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->43");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->44");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->45");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->46");
        }
        switch (strNum) {
          case 2:
            texType = cross;
            cross = backGroundSelected;
            backGroundSelected = undefined;
        }
        texType = texType === undefined ? 0 : texType;
        this.init(backGround, backGroundSelected, cross, backGroundDisabled, frontCrossDisabled, texType);
    },
    init: function(backGround, backGroundSelected, cross, backGroundDisabled, frontCrossDisabled, texType) {
        if (ccui.Widget.prototype.init.call(this)) {
            this._isSelected = true;
            this.setSelected(false);
            this.loadTextures(backGround, backGroundSelected, cross, backGroundDisabled, frontCrossDisabled, texType);
            return true;
        }
        return false;
    },
    _initRenderer: function() {
        this._backGroundBoxRenderer = new cc.Sprite;
        this._backGroundSelectedBoxRenderer = new cc.Sprite;
        this._frontCrossRenderer = new cc.Sprite;
        this._backGroundBoxDisabledRenderer = new cc.Sprite;
        this._frontCrossDisabledRenderer = new cc.Sprite;
        this.addProtectedChild(this._backGroundBoxRenderer, ccui.CheckBox.BOX_RENDERER_ZORDER, -1);
        this.addProtectedChild(this._backGroundSelectedBoxRenderer, ccui.CheckBox.BOX_SELECTED_RENDERER_ZORDER, -1);
        this.addProtectedChild(this._frontCrossRenderer, ccui.CheckBox.FRONT_CROSS_RENDERER_ZORDER, -1);
        this.addProtectedChild(this._backGroundBoxDisabledRenderer, ccui.CheckBox.BOX_DISABLED_RENDERER_ZORDER, -1);
        this.addProtectedChild(this._frontCrossDisabledRenderer, ccui.CheckBox.FRONT_CROSS_DISABLED_RENDERER_ZORDER, -1);
    },
    loadTextures: function(backGround, backGroundSelected, cross, backGroundDisabled, frontCrossDisabled, texType) {
        backGround && this.loadTextureBackGround(backGround, texType);
        backGroundSelected && this.loadTextureBackGroundSelected(backGroundSelected, texType);
        cross && this.loadTextureFrontCross(cross, texType);
        backGroundDisabled && this.loadTextureBackGroundDisabled(backGroundDisabled, texType);
        frontCrossDisabled && this.loadTextureFrontCrossDisabled(frontCrossDisabled, texType);
    },
    loadTextureBackGround: function(backGround, texType) {
        if (!backGround || this._backGroundFileName == backGround && this._backGroundTexType == texType) {
            return;
        }
        texType = texType || ccui.Widget.LOCAL_TEXTURE;
        this._backGroundFileName = backGround;
        this._backGroundTexType = texType;
        var bgBoxRenderer = this._backGroundBoxRenderer;
        if (!bgBoxRenderer._textureLoaded) {
            bgBoxRenderer.addEventListener("load", function() {
                this._updateContentSizeWithTextureSize(this._backGroundBoxRenderer.getContentSize());
                this.loadTextureBackGround(backGround, texType);
            }, this);
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->99");
        }
        switch (this._backGroundTexType) {
          case ccui.Widget.LOCAL_TEXTURE:
            bgBoxRenderer.initWithFile(backGround);
            break;
          case ccui.Widget.PLIST_TEXTURE:
            bgBoxRenderer.initWithSpriteFrameName(backGround);
            break;
          default:
            break;
        }
        this._updateChildrenDisplayedRGBA();
        this._updateContentSizeWithTextureSize(this._backGroundBoxRenderer.getContentSize());
        this._backGroundBoxRendererAdaptDirty = true;
        this._findLayout();
    },
    loadTextureBackGroundSelected: function(backGroundSelected, texType) {
        if (!backGroundSelected || this._backGroundSelectedFileName == backGroundSelected && this._backGroundSelectedTexType == texType) {
            return;
        }
        texType = texType || ccui.Widget.LOCAL_TEXTURE;
        this._backGroundSelectedFileName = backGroundSelected;
        this._backGroundSelectedTexType = texType;
        var backGroundSelectedBoxRenderer = this._backGroundSelectedBoxRenderer;
        if (!backGroundSelectedBoxRenderer._textureLoaded) {
            backGroundSelectedBoxRenderer.addEventListener("load", function() {
                this.loadTextureBackGroundSelected(backGroundSelected, texType);
            }, this);
        }
        switch (this._backGroundSelectedTexType) {
          case ccui.Widget.LOCAL_TEXTURE:
            backGroundSelectedBoxRenderer.initWithFile(backGroundSelected);
            break;
          case ccui.Widget.PLIST_TEXTURE:
            backGroundSelectedBoxRenderer.initWithSpriteFrameName(backGroundSelected);
            break;
          default:
            break;
        }
        this._updateChildrenDisplayedRGBA();
        this._backGroundSelectedBoxRendererAdaptDirty = true;
        this._findLayout();
    },
    loadTextureFrontCross: function(cross, texType) {
        if (!cross || this._frontCrossFileName == cross && this._frontCrossTexType == texType) {
            return;
        }
        texType = texType || ccui.Widget.LOCAL_TEXTURE;
        this._frontCrossFileName = cross;
        this._frontCrossTexType = texType;
        var self = this;
        var frontCrossRenderer = this._frontCrossRenderer;
        if (!frontCrossRenderer._textureLoaded) {
            frontCrossRenderer.addEventListener("load", function() {
                this.loadTextureFrontCross(cross, texType);
            }, this);
        }
        switch (this._frontCrossTexType) {
          case ccui.Widget.LOCAL_TEXTURE:
            frontCrossRenderer.initWithFile(cross);
            break;
          case ccui.Widget.PLIST_TEXTURE:
            frontCrossRenderer.initWithSpriteFrameName(cross);
            break;
          default:
            break;
        }
        this._updateChildrenDisplayedRGBA();
        this._frontCrossRendererAdaptDirty = true;
        this._findLayout();
    },
    loadTextureBackGroundDisabled: function(backGroundDisabled, texType) {
        if (!backGroundDisabled || this._backGroundDisabledFileName == backGroundDisabled && this._backGroundDisabledTexType == texType) {
            return;
        }
        texType = texType || ccui.Widget.LOCAL_TEXTURE;
        this._backGroundDisabledFileName = backGroundDisabled;
        this._backGroundDisabledTexType = texType;
        var self = this;
        var backGroundBoxDisabledRenderer = this._backGroundBoxDisabledRenderer;
        if (!backGroundBoxDisabledRenderer._textureLoaded) {
            backGroundBoxDisabledRenderer.addEventListener("load", function() {
                this.loadTextureBackGroundDisabled(backGroundDisabled, texType);
            }, this);
        }
        switch (this._backGroundDisabledTexType) {
          case ccui.Widget.LOCAL_TEXTURE:
            backGroundBoxDisabledRenderer.initWithFile(backGroundDisabled);
            break;
          case ccui.Widget.PLIST_TEXTURE:
            backGroundBoxDisabledRenderer.initWithSpriteFrameName(backGroundDisabled);
            break;
          default:
            break;
        }
        this._updateChildrenDisplayedRGBA();
        this._backGroundBoxDisabledRendererAdaptDirty = true;
        this._findLayout();
    },
    loadTextureFrontCrossDisabled: function(frontCrossDisabled, texType) {
        if (!frontCrossDisabled || this._frontCrossDisabledFileName == frontCrossDisabled && this._frontCrossDisabledTexType == texType) {
            return;
        }
        texType = texType || ccui.Widget.LOCAL_TEXTURE;
        this._frontCrossDisabledFileName = frontCrossDisabled;
        this._frontCrossDisabledTexType = texType;
        var self = this;
        var frontCrossDisabledRenderer = this._frontCrossDisabledRenderer;
        if (!frontCrossDisabledRenderer._textureLoaded) {
            frontCrossDisabledRenderer.addEventListener("load", function() {
                this.loadTextureFrontCrossDisabled(frontCrossDisabled, texType);
            }, this);
        }
        switch (this._frontCrossDisabledTexType) {
          case ccui.Widget.LOCAL_TEXTURE:
            frontCrossDisabledRenderer.initWithFile(frontCrossDisabled);
            break;
          case ccui.Widget.PLIST_TEXTURE:
            frontCrossDisabledRenderer.initWithSpriteFrameName(frontCrossDisabled);
            break;
          default:
            break;
        }
        this._updateChildrenDisplayedRGBA();
        this._frontCrossDisabledRendererAdaptDirty = true;
        this._findLayout();
    },
    _onPressStateChangedToNormal: function() {
        this._backGroundBoxRenderer.setVisible(true);
        this._backGroundSelectedBoxRenderer.setVisible(false);
        this._backGroundBoxDisabledRenderer.setVisible(false);
        this._frontCrossDisabledRenderer.setVisible(false);
        this._backGroundBoxRenderer.setScale(this._backgroundTextureScaleX, this._backgroundTextureScaleY);
        this._frontCrossRenderer.setScale(this._backgroundTextureScaleX, this._backgroundTextureScaleY);
        if (this._isSelected) {
            this._frontCrossRenderer.setVisible(true);
        }
    },
    _onPressStateChangedToPressed: function() {
        if (!this._backGroundSelectedFileName) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->240");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->241");
        } else {
            this._backGroundBoxRenderer.setVisible(false);
            this._backGroundSelectedBoxRenderer.setVisible(true);
            this._backGroundBoxDisabledRenderer.setVisible(false);
            this._frontCrossDisabledRenderer.setVisible(false);
        }
    },
    _onPressStateChangedToDisabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->250");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->251");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->252");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->253");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->254");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->255");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->256");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->257");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->258");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->259");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->260");
    },
    setZoomScale: function(scale) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->263");
    },
    getZoomScale: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->266");
    },
    setSelectedState: function(selected) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->269");
    },
    setSelected: function(selected) {
        if (selected == this._isSelected) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->273");
        }
        this._isSelected = selected;
        this._frontCrossRenderer.setVisible(this._isSelected);
    },
    getSelectedState: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->279");
    },
    isSelected: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->282");
    },
    _selectedEvent: function() {
        if (this._checkBoxEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->286");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->287");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->288");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->289");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->290");
        }
    },
    _unSelectedEvent: function() {
        if (this._checkBoxEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->295");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->296");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->297");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->298");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->299");
        }
    },
    _releaseUpEvent: function() {
        ccui.Widget.prototype._releaseUpEvent.call(this);
        if (this._isSelected) {
            this.setSelected(false);
            this._unSelectedEvent();
        } else {
            this.setSelected(true);
            this._selectedEvent();
        }
    },
    addEventListenerCheckBox: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->313");
    },
    addEventListener: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->316");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->317");
    },
    getVirtualRendererSize: function() {
        return this._backGroundBoxRenderer.getContentSize();
    },
    _onSizeChanged: function() {
        ccui.Widget.prototype._onSizeChanged.call(this);
        this._backGroundBoxRendererAdaptDirty = true;
        this._backGroundSelectedBoxRendererAdaptDirty = true;
        this._frontCrossRendererAdaptDirty = true;
        this._backGroundBoxDisabledRendererAdaptDirty = true;
        this._frontCrossDisabledRendererAdaptDirty = true;
    },
    getVirtualRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->331");
    },
    _backGroundTextureScaleChangedWithSize: function() {
        var locRenderer = this._backGroundBoxRenderer, locContentSize = this._contentSize;
        if (this._ignoreSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->336");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->337");
        } else {
            var textureSize = locRenderer.getContentSize();
            if (textureSize.width <= 0 || textureSize.height <= 0) {
                locRenderer.setScale(1);
                this._backgroundTextureScaleX = this._backgroundTextureScaleY = 1;
                return;
            }
            var scaleX = locContentSize.width / textureSize.width;
            var scaleY = locContentSize.height / textureSize.height;
            this._backgroundTextureScaleX = scaleX;
            this._backgroundTextureScaleY = scaleY;
            locRenderer.setScaleX(scaleX);
            locRenderer.setScaleY(scaleY);
        }
        locRenderer.setPosition(locContentSize.width * .5, locContentSize.height * .5);
    },
    _backGroundSelectedTextureScaleChangedWithSize: function() {
        var locRenderer = this._backGroundSelectedBoxRenderer, locContentSize = this._contentSize;
        if (this._ignoreSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->357");
        } else {
            var textureSize = locRenderer.getContentSize();
            if (textureSize.width <= 0 || textureSize.height <= 0) {
                locRenderer.setScale(1);
                return;
            }
            var scaleX = locContentSize.width / textureSize.width;
            var scaleY = locContentSize.height / textureSize.height;
            locRenderer.setScaleX(scaleX);
            locRenderer.setScaleY(scaleY);
        }
        locRenderer.setPosition(locContentSize.width * .5, locContentSize.height * .5);
    },
    _frontCrossTextureScaleChangedWithSize: function() {
        var locRenderer = this._frontCrossRenderer, locContentSize = this._contentSize;
        if (this._ignoreSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->374");
        } else {
            var textureSize = locRenderer.getContentSize();
            if (textureSize.width <= 0 || textureSize.height <= 0) {
                locRenderer.setScale(1);
                return;
            }
            var scaleX = locContentSize.width / textureSize.width;
            var scaleY = locContentSize.height / textureSize.height;
            locRenderer.setScaleX(scaleX);
            locRenderer.setScaleY(scaleY);
        }
        locRenderer.setPosition(locContentSize.width * .5, locContentSize.height * .5);
    },
    _backGroundDisabledTextureScaleChangedWithSize: function() {
        var locRenderer = this._backGroundBoxDisabledRenderer, locContentSize = this._contentSize;
        if (this._ignoreSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->391");
        } else {
            var textureSize = locRenderer.getContentSize();
            if (textureSize.width <= 0 || textureSize.height <= 0) {
                locRenderer.setScale(1);
                return;
            }
            var scaleX = locContentSize.width / textureSize.width;
            var scaleY = locContentSize.height / textureSize.height;
            locRenderer.setScaleX(scaleX);
            locRenderer.setScaleY(scaleY);
        }
        locRenderer.setPosition(locContentSize.width * .5, locContentSize.height * .5);
    },
    _frontCrossDisabledTextureScaleChangedWithSize: function() {
        var locRenderer = this._frontCrossDisabledRenderer, locContentSize = this._contentSize;
        if (this._ignoreSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->408");
        } else {
            var textureSize = locRenderer.getContentSize();
            if (textureSize.width <= 0 || textureSize.height <= 0) {
                locRenderer.setScale(1);
                return;
            }
            var scaleX = locContentSize.width / textureSize.width;
            var scaleY = locContentSize.height / textureSize.height;
            locRenderer.setScaleX(scaleX);
            locRenderer.setScaleY(scaleY);
        }
        locRenderer.setPosition(locContentSize.width * .5, locContentSize.height * .5);
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->423");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->426");
    },
    _copySpecialProperties: function(uiCheckBox) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->429");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->430");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->431");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->432");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->433");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->434");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->435");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->436");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->437");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->438");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->439");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->440");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->441");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->442");
    },
    _adaptRenderers: function() {
        if (this._backGroundBoxRendererAdaptDirty) {
            this._backGroundTextureScaleChangedWithSize();
            this._backGroundBoxRendererAdaptDirty = false;
        }
        if (this._backGroundSelectedBoxRendererAdaptDirty) {
            this._backGroundSelectedTextureScaleChangedWithSize();
            this._backGroundSelectedBoxRendererAdaptDirty = false;
        }
        if (this._frontCrossRendererAdaptDirty) {
            this._frontCrossTextureScaleChangedWithSize();
            this._frontCrossRendererAdaptDirty = false;
        }
        if (this._backGroundBoxDisabledRendererAdaptDirty) {
            this._backGroundDisabledTextureScaleChangedWithSize();
            this._backGroundBoxDisabledRendererAdaptDirty = false;
        }
        if (this._frontCrossDisabledRendererAdaptDirty) {
            this._frontCrossDisabledTextureScaleChangedWithSize();
            this._frontCrossDisabledRendererAdaptDirty = false;
        }
    }
});
var _p = ccui.CheckBox.prototype;
_p.selected;
cc.defineGetterSetter(_p, "selected", _p.isSelected, _p.setSelected);
_p = null;
ccui.CheckBox.create = function(backGround, backGroundSeleted, cross, backGroundDisabled, frontCrossDisabled, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UICheckBox.js->472");
};
ccui.CheckBox.EVENT_SELECTED = 0;
ccui.CheckBox.EVENT_UNSELECTED = 1;
ccui.CheckBox.BOX_RENDERER_ZORDER = -1;
ccui.CheckBox.BOX_SELECTED_RENDERER_ZORDER = -1;
ccui.CheckBox.BOX_DISABLED_RENDERER_ZORDER = -1;
ccui.CheckBox.FRONT_CROSS_RENDERER_ZORDER = -1;
ccui.CheckBox.FRONT_CROSS_DISABLED_RENDERER_ZORDER = -1;