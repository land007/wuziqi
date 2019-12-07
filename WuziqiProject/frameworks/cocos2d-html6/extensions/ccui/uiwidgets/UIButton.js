ccui.Button = ccui.Widget.extend({
    _buttonNormalRenderer: null,
    _buttonClickedRenderer: null,
    _buttonDisableRenderer: null,
    _titleRenderer: null,
    _normalFileName: "",
    _clickedFileName: "",
    _disabledFileName: "",
    _prevIgnoreSize: true,
    _scale9Enabled: false,
    _capInsetsNormal: null,
    _capInsetsPressed: null,
    _capInsetsDisabled: null,
    _normalTexType: ccui.Widget.LOCAL_TEXTURE,
    _pressedTexType: ccui.Widget.LOCAL_TEXTURE,
    _disabledTexType: ccui.Widget.LOCAL_TEXTURE,
    _normalTextureSize: null,
    _pressedTextureSize: null,
    _disabledTextureSize: null,
    pressedActionEnabled: false,
    _titleColor: null,
    _normalTextureScaleXInSize: 1,
    _normalTextureScaleYInSize: 1,
    _pressedTextureScaleXInSize: 1,
    _pressedTextureScaleYInSize: 1,
    _zoomScale: .1,
    _normalTextureLoaded: false,
    _pressedTextureLoaded: false,
    _disabledTextureLoaded: false,
    _className: "Button",
    _normalTextureAdaptDirty: true,
    _pressedTextureAdaptDirty: true,
    _disabledTextureAdaptDirty: true,
    _fontName: "Thonburi",
    _fontSize: 12,
    _type: 0,
    ctor: function(normalImage, selectedImage, disableImage, texType) {
        this._capInsetsNormal = cc.rect(0, 0, 0, 0);
        this._capInsetsPressed = cc.rect(0, 0, 0, 0);
        this._capInsetsDisabled = cc.rect(0, 0, 0, 0);
        this._normalTextureSize = cc.size(0, 0);
        this._pressedTextureSize = cc.size(0, 0);
        this._disabledTextureSize = cc.size(0, 0);
        this._titleColor = cc.color.WHITE;
        ccui.Widget.prototype.ctor.call(this);
        this.setTouchEnabled(true);
        this.init(normalImage, selectedImage, disableImage, texType);
    },
    init: function(normalImage, selectedImage, disableImage, texType) {
        if (ccui.Widget.prototype.init.call(this)) {
            if (normalImage === undefined) {
                return true;
            }
            this.loadTextures(normalImage, selectedImage, disableImage, texType);
        }
        return false;
    },
    _initRenderer: function() {
        this._buttonNormalRenderer = new cc.Sprite;
        this._buttonClickedRenderer = new cc.Sprite;
        this._buttonDisableRenderer = new cc.Sprite;
        this._titleRenderer = new cc.LabelTTF("");
        this._titleRenderer.setAnchorPoint(.5, .5);
        this.addProtectedChild(this._buttonNormalRenderer, ccui.Button.NORMAL_RENDERER_ZORDER, -1);
        this.addProtectedChild(this._buttonClickedRenderer, ccui.Button.PRESSED_RENDERER_ZORDER, -1);
        this.addProtectedChild(this._buttonDisableRenderer, ccui.Button.DISABLED_RENDERER_ZORDER, -1);
        this.addProtectedChild(this._titleRenderer, ccui.Button.TITLE_RENDERER_ZORDER, -1);
    },
    setScale9Enabled: function(able) {
        if (this._scale9Enabled == able) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->71");
        }
        this._brightStyle = ccui.Widget.BRIGHT_STYLE_NONE;
        this._scale9Enabled = able;
        this.removeProtectedChild(this._buttonNormalRenderer);
        this.removeProtectedChild(this._buttonClickedRenderer);
        this.removeProtectedChild(this._buttonDisableRenderer);
        if (this._scale9Enabled) {
            this._buttonNormalRenderer = new ccui.Scale9Sprite;
            this._buttonClickedRenderer = new ccui.Scale9Sprite;
            this._buttonDisableRenderer = new ccui.Scale9Sprite;
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->83");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->84");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->85");
        }
        this._buttonClickedRenderer.setVisible(false);
        this._buttonDisableRenderer.setVisible(false);
        this.loadTextureNormal(this._normalFileName, this._normalTexType);
        this.loadTexturePressed(this._clickedFileName, this._pressedTexType);
        this.loadTextureDisabled(this._disabledFileName, this._disabledTexType);
        this.addProtectedChild(this._buttonNormalRenderer, ccui.Button.NORMAL_RENDERER_ZORDER, -1);
        this.addProtectedChild(this._buttonClickedRenderer, ccui.Button.PRESSED_RENDERER_ZORDER, -1);
        this.addProtectedChild(this._buttonDisableRenderer, ccui.Button.DISABLED_RENDERER_ZORDER, -1);
        if (this._scale9Enabled) {
            var ignoreBefore = this._ignoreSize;
            this.ignoreContentAdaptWithSize(false);
            this._prevIgnoreSize = ignoreBefore;
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->100");
        }
        this.setCapInsetsNormalRenderer(this._capInsetsNormal);
        this.setCapInsetsPressedRenderer(this._capInsetsPressed);
        this.setCapInsetsDisabledRenderer(this._capInsetsDisabled);
        this.setBright(this._bright);
        this._normalTextureAdaptDirty = true;
        this._pressedTextureAdaptDirty = true;
        this._disabledTextureAdaptDirty = true;
    },
    isScale9Enabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->111");
    },
    ignoreContentAdaptWithSize: function(ignore) {
        if (this._unifySize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->116");
        }
        if (!this._scale9Enabled || this._scale9Enabled && !ignore) {
            ccui.Widget.prototype.ignoreContentAdaptWithSize.call(this, ignore);
            this._prevIgnoreSize = ignore;
        }
    },
    getVirtualRendererSize: function() {
        if (this._unifySize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->125");
        }
        if (!this._normalTextureLoaded && this._titleRenderer.getString().length > 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->128");
        }
        return cc.size(this._normalTextureSize);
    },
    loadTextures: function(normal, selected, disabled, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->133");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->134");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->135");
    },
    loadTextureNormal: function(normal, texType) {
        if (!normal) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->139");
        }
        texType = texType || ccui.Widget.LOCAL_TEXTURE;
        this._normalFileName = normal;
        this._normalTexType = texType;
        var self = this;
        var normalRenderer = this._buttonNormalRenderer;
        if (!normalRenderer._textureLoaded) {
            normalRenderer.addEventListener("load", function() {
                self.loadTextureNormal(normal, texType);
            });
        }
        switch (this._normalTexType) {
          case ccui.Widget.LOCAL_TEXTURE:
            normalRenderer.initWithFile(normal);
            break;
          case ccui.Widget.PLIST_TEXTURE:
            normalRenderer.initWithSpriteFrameName(normal);
            break;
          default:
            break;
        }
        this._normalTextureSize = this._buttonNormalRenderer.getContentSize();
        this._updateChildrenDisplayedRGBA();
        if (this._unifySize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->164");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->165");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->166");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->167");
        } else {
            this._updateContentSizeWithTextureSize(this._normalTextureSize);
        }
        this._normalTextureLoaded = true;
        this._normalTextureAdaptDirty = true;
        this._findLayout();
    },
    loadTexturePressed: function(selected, texType) {
        if (!selected) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->177");
        }
        texType = texType || ccui.Widget.LOCAL_TEXTURE;
        this._clickedFileName = selected;
        this._pressedTexType = texType;
        var self = this;
        var clickedRenderer = this._buttonClickedRenderer;
        if (!clickedRenderer._textureLoaded) {
            clickedRenderer.addEventListener("load", function() {
                self.loadTexturePressed(selected, texType);
            });
        }
        switch (this._pressedTexType) {
          case ccui.Widget.LOCAL_TEXTURE:
            clickedRenderer.initWithFile(selected);
            break;
          case ccui.Widget.PLIST_TEXTURE:
            clickedRenderer.initWithSpriteFrameName(selected);
            break;
          default:
            break;
        }
        if (this._scale9Enabled) {
            clickedRenderer.setCapInsets(this._capInsetsPressed);
        }
        this._pressedTextureSize = this._buttonClickedRenderer.getContentSize();
        this._updateChildrenDisplayedRGBA();
        this._pressedTextureLoaded = true;
        this._pressedTextureAdaptDirty = true;
        this._findLayout();
    },
    loadTextureDisabled: function(disabled, texType) {
        if (!disabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->210");
        }
        texType = texType || ccui.Widget.LOCAL_TEXTURE;
        this._disabledFileName = disabled;
        this._disabledTexType = texType;
        var self = this;
        var disabledRenderer = this._buttonDisableRenderer;
        if (!disabledRenderer._textureLoaded) {
            disabledRenderer.addEventListener("load", function() {
                self.loadTextureDisabled(disabled, texType);
            });
        }
        switch (this._disabledTexType) {
          case ccui.Widget.LOCAL_TEXTURE:
            disabledRenderer.initWithFile(disabled);
            break;
          case ccui.Widget.PLIST_TEXTURE:
            disabledRenderer.initWithSpriteFrameName(disabled);
            break;
          default:
            break;
        }
        if (this._scale9Enabled) {
            disabledRenderer.setCapInsets(this._capInsetsDisabled);
        }
        this._disabledTextureSize = this._buttonDisableRenderer.getContentSize();
        this._updateChildrenDisplayedRGBA();
        this._disabledTextureLoaded = true;
        this._disabledTextureAdaptDirty = true;
        this._findLayout();
    },
    setCapInsets: function(capInsets) {
        this.setCapInsetsNormalRenderer(capInsets);
        this.setCapInsetsPressedRenderer(capInsets);
        this.setCapInsetsDisabledRenderer(capInsets);
    },
    setCapInsetsNormalRenderer: function(capInsets) {
        if (!capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->248");
        }
        var x = capInsets.x, y = capInsets.y;
        var width = capInsets.width, height = capInsets.height;
        if (this._normalTextureSize.width < width) {
            x = 0;
            width = 0;
        }
        if (this._normalTextureSize.height < height) {
            y = 0;
            height = 0;
        }
        var locInsets = this._capInsetsNormal;
        locInsets.x = x;
        locInsets.y = y;
        locInsets.width = width;
        locInsets.height = height;
        if (!this._scale9Enabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->266");
        }
        this._buttonNormalRenderer.setCapInsets(locInsets);
    },
    getCapInsetsNormalRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->271");
    },
    setCapInsetsPressedRenderer: function(capInsets) {
        if (!capInsets || !this._scale9Enabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->275");
        }
        var x = capInsets.x, y = capInsets.y;
        var width = capInsets.width, height = capInsets.height;
        if (this._normalTextureSize.width < width) {
            x = 0;
            width = 0;
        }
        if (this._normalTextureSize.height < height) {
            y = 0;
            height = 0;
        }
        var locInsets = this._capInsetsPressed;
        locInsets.x = x;
        locInsets.y = y;
        locInsets.width = width;
        locInsets.height = height;
        this._buttonClickedRenderer.setCapInsets(locInsets);
    },
    getCapInsetsPressedRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->295");
    },
    setCapInsetsDisabledRenderer: function(capInsets) {
        if (!capInsets || !this._scale9Enabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->299");
        }
        var x = capInsets.x, y = capInsets.y;
        var width = capInsets.width, height = capInsets.height;
        if (this._normalTextureSize.width < width) {
            x = 0;
            width = 0;
        }
        if (this._normalTextureSize.height < height) {
            y = 0;
            height = 0;
        }
        var locInsets = this._capInsetsDisabled;
        locInsets.x = x;
        locInsets.y = y;
        locInsets.width = width;
        locInsets.height = height;
        this._buttonDisableRenderer.setCapInsets(locInsets);
    },
    getCapInsetsDisabledRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->319");
    },
    _onPressStateChangedToNormal: function() {
        this._buttonNormalRenderer.setVisible(true);
        this._buttonClickedRenderer.setVisible(false);
        this._buttonDisableRenderer.setVisible(false);
        if (this._scale9Enabled) {
            this._buttonNormalRenderer.setState(ccui.Scale9Sprite.state.NORMAL);
        }
        if (this._pressedTextureLoaded) {
            if (this.pressedActionEnabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->330");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->331");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->332");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->333");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->334");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->335");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->336");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->337");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->338");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->339");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->340");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->341");
            }
        } else {
            this._buttonNormalRenderer.stopAllActions();
            this._buttonNormalRenderer.setScale(this._normalTextureScaleXInSize, this._normalTextureScaleYInSize);
            this._titleRenderer.stopAllActions();
            if (this._scale9Enabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->348");
            }
            this._titleRenderer.setScaleX(1);
            this._titleRenderer.setScaleY(1);
        }
    },
    _onPressStateChangedToPressed: function() {
        var locNormalRenderer = this._buttonNormalRenderer;
        if (this._scale9Enabled) {
            locNormalRenderer.setState(ccui.Scale9Sprite.state.NORMAL);
        }
        if (this._pressedTextureLoaded) {
            locNormalRenderer.setVisible(false);
            this._buttonClickedRenderer.setVisible(true);
            this._buttonDisableRenderer.setVisible(false);
            if (this.pressedActionEnabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->364");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->365");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->366");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->367");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->368");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->369");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->370");
            }
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->373");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->374");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->375");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->376");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->377");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->378");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->379");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->380");
        }
    },
    _onPressStateChangedToDisabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->384");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->385");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->386");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->387");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->388");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->389");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->390");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->391");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->392");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->393");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->394");
    },
    _updateContentSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->397");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->398");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->399");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->400");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->401");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->402");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->403");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->404");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->405");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->406");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->407");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->408");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->409");
    },
    _updateTexturesRGBA: function() {
        this._buttonNormalRenderer.setColor(this.getColor());
        this._buttonClickedRenderer.setColor(this.getColor());
        this._buttonDisableRenderer.setColor(this.getColor());
        this._buttonNormalRenderer.setOpacity(this.getOpacity());
        this._buttonClickedRenderer.setOpacity(this.getOpacity());
        this._buttonDisableRenderer.setOpacity(this.getOpacity());
    },
    _onSizeChanged: function() {
        ccui.Widget.prototype._onSizeChanged.call(this);
        this._updateTitleLocation();
        this._normalTextureAdaptDirty = true;
        this._pressedTextureAdaptDirty = true;
        this._disabledTextureAdaptDirty = true;
    },
    getVirtualRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->427");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->428");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->429");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->430");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->431");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->432");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->433");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->434");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->435");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->436");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->437");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->438");
    },
    _normalTextureScaleChangedWithSize: function() {
        if (this._ignoreSize && !this._unifySize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->442");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->443");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->444");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->445");
        } else {
            if (this._scale9Enabled) {
                this._buttonNormalRenderer.setPreferredSize(this._contentSize);
                this._normalTextureScaleXInSize = this._normalTextureScaleYInSize = 1;
                this._buttonNormalRenderer.setScale(this._normalTextureScaleXInSize, this._normalTextureScaleYInSize);
            } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->452");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->453");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->454");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->455");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->456");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->457");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->458");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->459");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->460");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->461");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->462");
            }
        }
        this._buttonNormalRenderer.setPosition(this._contentSize.width / 2, this._contentSize.height / 2);
    },
    _pressedTextureScaleChangedWithSize: function() {
        if (this._ignoreSize && !this._unifySize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->469");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->470");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->471");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->472");
        } else {
            if (this._scale9Enabled) {
                this._buttonClickedRenderer.setPreferredSize(this._contentSize);
                this._pressedTextureScaleXInSize = this._pressedTextureScaleYInSize = 1;
                this._buttonClickedRenderer.setScale(this._pressedTextureScaleXInSize, this._pressedTextureScaleYInSize);
            } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->479");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->480");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->481");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->482");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->483");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->484");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->485");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->486");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->487");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->488");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->489");
            }
        }
        this._buttonClickedRenderer.setPosition(this._contentSize.width / 2, this._contentSize.height / 2);
    },
    _disabledTextureScaleChangedWithSize: function() {
        if (this._ignoreSize && !this._unifySize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->496");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->497");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->498");
        } else {
            if (this._scale9Enabled) {
                this._buttonDisableRenderer.setScale(1);
                this._buttonDisableRenderer.setPreferredSize(this._contentSize);
            } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->504");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->505");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->506");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->507");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->508");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->509");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->510");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->511");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->512");
            }
        }
        this._buttonDisableRenderer.setPosition(this._contentSize.width / 2, this._contentSize.height / 2);
    },
    _adaptRenderers: function() {
        if (this._normalTextureAdaptDirty) {
            this._normalTextureScaleChangedWithSize();
            this._normalTextureAdaptDirty = false;
        }
        if (this._pressedTextureAdaptDirty) {
            this._pressedTextureScaleChangedWithSize();
            this._pressedTextureAdaptDirty = false;
        }
        if (this._disabledTextureAdaptDirty) {
            this._disabledTextureScaleChangedWithSize();
            this._disabledTextureAdaptDirty = false;
        }
    },
    _updateTitleLocation: function() {
        this._titleRenderer.setPosition(this._contentSize.width * .5, this._contentSize.height * .5);
    },
    setPressedActionEnabled: function(enabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->535");
    },
    setTitleText: function(text) {
        if (text == this.getTitleText()) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->539");
        }
        this._titleRenderer.setString(text);
        if (this._ignoreSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->543");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->544");
        } else {
            this._titleRenderer._renderCmd._updateTTF();
        }
    },
    getTitleText: function() {
        return this._titleRenderer.getString();
    },
    setTitleColor: function(color) {
        this._titleRenderer.setFontFillColor(color);
    },
    getTitleColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->556");
    },
    setTitleFontSize: function(size) {
        this._titleRenderer.setFontSize(size);
        this._fontSize = size;
    },
    getTitleFontSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->563");
    },
    setZoomScale: function(scale) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->566");
    },
    getZoomScale: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->569");
    },
    getNormalTextureSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->572");
    },
    setTitleFontName: function(fontName) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->575");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->576");
    },
    getTitleRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->579");
    },
    getTitleFontName: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->582");
    },
    _setTitleFont: function(font) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->585");
    },
    _getTitleFont: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->588");
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->591");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->594");
    },
    _copySpecialProperties: function(uiButton) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->597");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->598");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->599");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->600");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->601");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->602");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->603");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->604");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->605");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->606");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->607");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->608");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->609");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->610");
    },
    setColor: function(color) {
        cc.ProtectedNode.prototype.setColor.call(this, color);
        this._updateTexturesRGBA();
    },
    _getNormalSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->617");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->618");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->619");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->620");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->621");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->622");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->623");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->624");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->625");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->626");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->627");
    }
});
var _p = ccui.Button.prototype;
_p.titleText;
cc.defineGetterSetter(_p, "titleText", _p.getTitleText, _p.setTitleText);
_p.titleFont;
cc.defineGetterSetter(_p, "titleFont", _p._getTitleFont, _p._setTitleFont);
_p.titleFontSize;
cc.defineGetterSetter(_p, "titleFontSize", _p.getTitleFontSize, _p.setTitleFontSize);
_p.titleFontName;
cc.defineGetterSetter(_p, "titleFontName", _p.getTitleFontName, _p.setTitleFontName);
_p.titleColor;
cc.defineGetterSetter(_p, "titleColor", _p.getTitleColor, _p.setTitleColor);
_p = null;
ccui.Button.create = function(normalImage, selectedImage, disableImage, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIButton.js->643");
};
ccui.Button.NORMAL_RENDERER_ZORDER = -2;
ccui.Button.PRESSED_RENDERER_ZORDER = -2;
ccui.Button.DISABLED_RENDERER_ZORDER = -2;
ccui.Button.TITLE_RENDERER_ZORDER = -1;
ccui.Button.ZOOM_ACTION_TIME_STEP = .05;
ccui.Button.SYSTEM = 0;
ccui.Button.TTF = 1;