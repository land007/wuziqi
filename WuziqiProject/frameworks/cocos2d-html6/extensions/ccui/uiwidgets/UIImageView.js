ccui.ImageView = ccui.Widget.extend({
    _scale9Enabled: false,
    _prevIgnoreSize: true,
    _capInsets: null,
    _imageRenderer: null,
    _textureFile: "",
    _imageTexType: ccui.Widget.LOCAL_TEXTURE,
    _imageTextureSize: null,
    _className: "ImageView",
    _imageRendererAdaptDirty: true,
    ctor: function(imageFileName, texType) {
        this._capInsets = cc.rect(0, 0, 0, 0);
        this._imageTextureSize = cc.size(this._capInsets.width, this._capInsets.height);
        ccui.Widget.prototype.ctor.call(this);
        texType = texType === undefined ? 0 : texType;
        this.init(imageFileName, texType);
    },
    init: function(imageFileName, texType) {
        if (ccui.Widget.prototype.init.call(this)) {
            if (imageFileName === undefined) {
                this._imageTexType = ccui.Widget.LOCAL_TEXTURE;
            } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->23");
            }
            return true;
        }
        return false;
    },
    _initRenderer: function() {
        this._imageRenderer = new cc.Sprite;
        this.addProtectedChild(this._imageRenderer, ccui.ImageView.RENDERER_ZORDER, -1);
    },
    setRotation: function(rotate) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->34");
    },
    loadTexture: function(fileName, texType) {
        if (!fileName) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->38");
        }
        var self = this;
        texType = texType || ccui.Widget.LOCAL_TEXTURE;
        this._textureFile = fileName;
        this._imageTexType = texType;
        var imageRenderer = self._imageRenderer;
        if (!imageRenderer._textureLoaded) {
            imageRenderer.addEventListener("load", function() {
                self.loadTexture(fileName, texType);
            });
        }
        switch (self._imageTexType) {
          case ccui.Widget.LOCAL_TEXTURE:
            if (self._scale9Enabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->53");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->54");
            } else {
                imageRenderer.initWithFile(fileName);
            }
            break;
          case ccui.Widget.PLIST_TEXTURE:
            if (self._scale9Enabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->61");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->62");
            } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->64");
            }
            break;
          default:
            break;
        }
        self._imageTextureSize = imageRenderer.getContentSize();
        this._updateChildrenDisplayedRGBA();
        self._updateContentSizeWithTextureSize(self._imageTextureSize);
        self._imageRendererAdaptDirty = true;
        self._findLayout();
    },
    setTextureRect: function(rect) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->77");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->78");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->79");
    },
    setScale9Enabled: function(able) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->82");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->83");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->84");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->85");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->86");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->87");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->88");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->89");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->90");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->91");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->92");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->93");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->94");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->95");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->96");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->97");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->98");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->99");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->100");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->101");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->102");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->103");
    },
    isScale9Enabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->106");
    },
    ignoreContentAdaptWithSize: function(ignore) {
        if (!this._scale9Enabled || this._scale9Enabled && !ignore) {
            ccui.Widget.prototype.ignoreContentAdaptWithSize.call(this, ignore);
            this._prevIgnoreSize = ignore;
        }
    },
    setCapInsets: function(capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->116");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->117");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->118");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->119");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->120");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->121");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->124");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->125");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->126");
    },
    getCapInsets: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->129");
    },
    _onSizeChanged: function() {
        ccui.Widget.prototype._onSizeChanged.call(this);
        this._imageRendererAdaptDirty = true;
    },
    _adaptRenderers: function() {
        if (this._imageRendererAdaptDirty) {
            this._imageTextureScaleChangedWithSize();
            this._imageRendererAdaptDirty = false;
        }
    },
    getVirtualRendererSize: function() {
        return cc.size(this._imageTextureSize);
    },
    getVirtualRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->145");
    },
    _imageTextureScaleChangedWithSize: function() {
        if (this._ignoreSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->149");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->150");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->151");
        } else {
            if (this._scale9Enabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->154");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->155");
            } else {
                var textureSize = this._imageTextureSize;
                if (textureSize.width <= 0 || textureSize.height <= 0) {
                    this._imageRenderer.setScale(1);
                    return;
                }
                this._imageRenderer.setScaleX(this._contentSize.width / textureSize.width);
                this._imageRenderer.setScaleY(this._contentSize.height / textureSize.height);
            }
        }
        this._imageRenderer.setPosition(this._contentSize.width / 2, this._contentSize.height / 2);
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->169");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->172");
    },
    _copySpecialProperties: function(imageView) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->175");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->176");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->177");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->178");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->179");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->180");
    },
    setContentSize: function(contentSize, height) {
        if (height != null) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->184");
        }
        ccui.Widget.prototype.setContentSize.call(this, contentSize);
        if (!this._scale9Enabled) {
            var iContentSize = this._imageRenderer.getContentSize();
            this._imageRenderer.setScaleX(contentSize.width / iContentSize.width);
            this._imageRenderer.setScaleY(contentSize.height / iContentSize.height);
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->192");
        }
    }
});
ccui.ImageView.create = function(imageFileName, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIImageView.js->197");
};
ccui.ImageView.RENDERER_ZORDER = -1;