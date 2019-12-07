ccui.Scale9Sprite = cc.Node.extend({
    _spriteRect: null,
    _capInsetsInternal: null,
    _positionsAreDirty: false,
    _scale9Image: null,
    _topLeft: null,
    _top: null,
    _topRight: null,
    _left: null,
    _centre: null,
    _right: null,
    _bottomLeft: null,
    _bottom: null,
    _bottomRight: null,
    _scale9Dirty: true,
    _opacityModifyRGB: false,
    _originalSize: null,
    _preferredSize: null,
    _opacity: 0,
    _color: null,
    _capInsets: null,
    _insetLeft: 0,
    _insetTop: 0,
    _insetRight: 0,
    _insetBottom: 0,
    _spritesGenerated: false,
    _spriteFrameRotated: false,
    _textureLoaded: false,
    _className: "Scale9Sprite",
    _flippedX: false,
    _flippedY: false,
    textureLoaded: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->33");
    },
    addLoadedEventListener: function(callback, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->36");
    },
    _updateCapInset: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->39");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->40");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->41");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->42");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->43");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->44");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->45");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->46");
    },
    _updatePositions: function() {
        if (!(this._topLeft && this._topRight && this._bottomRight && this._bottomLeft && this._centre)) {
            return;
        }
        var size = this._contentSize;
        var locTopLeft = this._topLeft, locTopRight = this._topRight, locBottomRight = this._bottomRight, locBottomLeft = this._bottomLeft;
        var locCenter = this._centre, locCenterContentSize = this._centre.getContentSize();
        var locTopLeftContentSize = locTopLeft.getContentSize();
        var locBottomLeftContentSize = locBottomLeft.getContentSize();
        var sizableWidth = size.width - locTopLeftContentSize.width - locTopRight.getContentSize().width;
        var sizableHeight = size.height - locTopLeftContentSize.height - locBottomRight.getContentSize().height;
        var horizontalScale = sizableWidth / locCenterContentSize.width;
        var verticalScale = sizableHeight / locCenterContentSize.height;
        var rescaledWidth = locCenterContentSize.width * horizontalScale;
        var rescaledHeight = locCenterContentSize.height * verticalScale;
        var leftWidth = locBottomLeftContentSize.width;
        var bottomHeight = locBottomLeftContentSize.height;
        if (cc._renderType == cc._RENDER_TYPE_WEBGL) {
            var roundedRescaledWidth = Math.round(rescaledWidth);
            if (rescaledWidth != roundedRescaledWidth) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->68");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->69");
            }
            var roundedRescaledHeight = Math.round(rescaledHeight);
            if (rescaledHeight != roundedRescaledHeight) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->73");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->74");
            }
        }
        locCenter.setScaleX(horizontalScale);
        locCenter.setScaleY(verticalScale);
        var locLeft = this._left, locRight = this._right, locTop = this._top, locBottom = this._bottom;
        var tempAP = cc.p(0, 0);
        locBottomLeft.setAnchorPoint(tempAP);
        locBottomRight.setAnchorPoint(tempAP);
        locTopLeft.setAnchorPoint(tempAP);
        locTopRight.setAnchorPoint(tempAP);
        locLeft.setAnchorPoint(tempAP);
        locRight.setAnchorPoint(tempAP);
        locTop.setAnchorPoint(tempAP);
        locBottom.setAnchorPoint(tempAP);
        locCenter.setAnchorPoint(tempAP);
        locBottomLeft.setPosition(0, 0);
        locBottomRight.setPosition(leftWidth + rescaledWidth, 0);
        locTopLeft.setPosition(0, bottomHeight + rescaledHeight);
        locTopRight.setPosition(leftWidth + rescaledWidth, bottomHeight + rescaledHeight);
        locLeft.setPosition(0, bottomHeight);
        locLeft.setScaleY(verticalScale);
        locRight.setPosition(leftWidth + rescaledWidth, bottomHeight);
        locRight.setScaleY(verticalScale);
        locBottom.setPosition(leftWidth, 0);
        locBottom.setScaleX(horizontalScale);
        locTop.setPosition(leftWidth, bottomHeight + rescaledHeight);
        locTop.setScaleX(horizontalScale);
        locCenter.setPosition(leftWidth, bottomHeight);
    },
    ctor: function(file, rect, capInsets) {
        cc.Node.prototype.ctor.call(this);
        this._spriteRect = cc.rect(0, 0, 0, 0);
        this._capInsetsInternal = cc.rect(0, 0, 0, 0);
        this._originalSize = cc.size(0, 0);
        this._preferredSize = cc.size(0, 0);
        this._capInsets = cc.rect(0, 0, 0, 0);
        if (file != undefined) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->112");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->113");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->114");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->116");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->117");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->118");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->119");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->120");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->121");
        } else {
            this.init();
        }
    },
    getSprite: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->127");
    },
    getOriginalSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->130");
    },
    getPreferredSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->133");
    },
    _getPreferredWidth: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->136");
    },
    _getPreferredHeight: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->139");
    },
    setPreferredSize: function(preferredSize) {
        this.setContentSize(preferredSize);
        this._preferredSize = preferredSize;
        if (this._positionsAreDirty) {
            this._updatePositions();
            this._positionsAreDirty = false;
            this._scale9Dirty = true;
        }
    },
    _setPreferredWidth: function(value) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->151");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->152");
    },
    _setPreferredHeight: function(value) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->155");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->156");
    },
    setOpacity: function(opacity) {
        if (!this._scale9Image) {
            return;
        }
        cc.Node.prototype.setOpacity.call(this, opacity);
        var scaleChildren = this._scale9Image.getChildren();
        for (var i = 0; i < scaleChildren.length; i++) {
            var selChild = scaleChildren[i];
            if (selChild) {
                selChild.setOpacity(opacity);
            }
        }
        this._scale9Dirty = true;
    },
    setColor: function(color) {
        if (!this._scale9Image) {
            return;
        }
        cc.Node.prototype.setColor.call(this, color);
        var scaleChildren = this._scale9Image.getChildren();
        for (var i = 0; i < scaleChildren.length; i++) {
            var selChild = scaleChildren[i];
            if (selChild) {
                selChild.setColor(color);
            }
        }
        this._scale9Dirty = true;
    },
    getCapInsets: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->187");
    },
    setCapInsets: function(capInsets) {
        if (!this._scale9Image) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->191");
        }
        var contentSize = this._contentSize;
        var tempWidth = contentSize.width, tempHeight = contentSize.height;
        this.updateWithBatchNode(this._scale9Image, this._spriteRect, this._spriteFrameRotated, capInsets);
        this.setContentSize(tempWidth, tempHeight);
    },
    getInsetLeft: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->199");
    },
    setInsetLeft: function(insetLeft) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->202");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->203");
    },
    getInsetTop: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->206");
    },
    setInsetTop: function(insetTop) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->209");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->210");
    },
    getInsetRight: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->213");
    },
    setInsetRight: function(insetRight) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->216");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->217");
    },
    getInsetBottom: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->220");
    },
    setInsetBottom: function(insetBottom) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->223");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->224");
    },
    setContentSize: function(size, height) {
        cc.Node.prototype.setContentSize.call(this, size, height);
        this._positionsAreDirty = true;
    },
    _setWidth: function(value) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->231");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->232");
    },
    _setHeight: function(value) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->235");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->236");
    },
    init: function() {
        return this.initWithBatchNode(null, cc.rect(0, 0, 0, 0), false, cc.rect(0, 0, 0, 0));
    },
    initWithBatchNode: function(batchNode, rect, rotated, capInsets) {
        if (capInsets === undefined) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->243");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->244");
        }
        if (batchNode) {
            this.updateWithBatchNode(batchNode, rect, rotated, capInsets);
        }
        this.setCascadeColorEnabled(true);
        this.setCascadeOpacityEnabled(true);
        this.setAnchorPoint(.5, .5);
        this._positionsAreDirty = true;
        return true;
    },
    initWithFile: function(file, rect, capInsets) {
        if (file instanceof cc.Rect) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->257");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->258");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->259");
        } else {
            rect = rect || cc.rect(0, 0, 0, 0);
            capInsets = capInsets || cc.rect(0, 0, 0, 0);
        }
        if (!file) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->265");
        }
        var texture = cc.textureCache.getTextureForKey(file);
        if (!texture) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->269");
        }
        var locLoaded = texture.isLoaded();
        this._textureLoaded = locLoaded;
        if (!locLoaded) {
            texture.addEventListener("load", function(sender) {
                var preferredSize = this._preferredSize;
                preferredSize = cc.size(preferredSize.width, preferredSize.height);
                var size = sender.getContentSize();
                this.updateWithBatchNode(this._scale9Image, cc.rect(0, 0, size.width, size.height), false, this._capInsets);
                this.setPreferredSize(preferredSize);
                this._positionsAreDirty = true;
                this.dispatchEvent("load");
            }, this);
        }
        return this.initWithBatchNode(new cc.SpriteBatchNode(file, 9), rect, false, capInsets);
    },
    initWithSpriteFrame: function(spriteFrame, capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->287");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->288");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->289");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->290");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->291");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->292");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->293");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->294");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->295");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->296");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->297");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->298");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->299");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->300");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->301");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->302");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->303");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->304");
    },
    initWithSpriteFrameName: function(spriteFrameName, capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->307");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->308");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->309");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->310");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->311");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->312");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->313");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->314");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->315");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->316");
    },
    resizableSpriteWithCapInsets: function(capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->319");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->320");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->321");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->322");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->323");
    },
    setOpacityModifyRGB: function(value) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->326");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->327");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->328");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->329");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->330");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->331");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->332");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->333");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->334");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->335");
    },
    isOpacityModifyRGB: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->338");
    },
    updateWithBatchNode: function(batchNode, originalRect, rotated, capInsets) {
        var opacity = this.getOpacity();
        var color = this.getColor();
        var rect = cc.rect(originalRect.x, originalRect.y, originalRect.width, originalRect.height);
        this.removeAllChildren(true);
        if (this._scale9Image != batchNode) {
            this._scale9Image = batchNode;
        }
        if (!this._scale9Image) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->349");
        }
        var tmpTexture = batchNode.getTexture();
        var locLoaded = tmpTexture.isLoaded();
        this._textureLoaded = locLoaded;
        if (!locLoaded) {
            tmpTexture.addEventListener("load", function(sender) {
                this._positionsAreDirty = true;
                this.dispatchEvent("load");
            }, this);
            return true;
        }
        var locScale9Image = this._scale9Image;
        locScale9Image.removeAllChildren(true);
        var locCapInsets = this._capInsets;
        locCapInsets.x = capInsets.x;
        locCapInsets.y = capInsets.y;
        locCapInsets.width = capInsets.width;
        locCapInsets.height = capInsets.height;
        this._spriteFrameRotated = rotated;
        var selTexture = locScale9Image.getTexture();
        if (cc._rectEqualToZero(rect)) {
            var textureSize = selTexture.getContentSize();
            rect = cc.rect(0, 0, textureSize.width, textureSize.height);
        }
        this._spriteRect = rect;
        var locSpriteRect = this._spriteRect;
        locSpriteRect.x = rect.x;
        locSpriteRect.y = rect.y;
        locSpriteRect.width = rect.width;
        locSpriteRect.height = rect.height;
        this._originalSize.width = rect.width;
        this._originalSize.height = rect.height;
        var locPreferredSize = this._preferredSize;
        if (locPreferredSize.width === 0 && locPreferredSize.height === 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->384");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->385");
        }
        var locCapInsetsInternal = this._capInsetsInternal;
        if (capInsets) {
            locCapInsetsInternal.x = capInsets.x;
            locCapInsetsInternal.y = capInsets.y;
            locCapInsetsInternal.width = capInsets.width;
            locCapInsetsInternal.height = capInsets.height;
        }
        var w = rect.width, h = rect.height;
        if (cc._rectEqualToZero(locCapInsetsInternal)) {
            locCapInsetsInternal.x = w / 3;
            locCapInsetsInternal.y = h / 3;
            locCapInsetsInternal.width = w / 3;
            locCapInsetsInternal.height = h / 3;
        }
        var left_w = locCapInsetsInternal.x, center_w = locCapInsetsInternal.width, right_w = w - (left_w + center_w);
        var top_h = locCapInsetsInternal.y, center_h = locCapInsetsInternal.height, bottom_h = h - (top_h + center_h);
        var x = 0, y = 0;
        var lefttopbounds = cc.rect(x + .5 | 0, y + .5 | 0, left_w + .5 | 0, top_h + .5 | 0);
        x += left_w;
        var centertopbounds = cc.rect(x + .5 | 0, y + .5 | 0, center_w + .5 | 0, top_h + .5 | 0);
        x += center_w;
        var righttopbounds = cc.rect(x + .5 | 0, y + .5 | 0, right_w + .5 | 0, top_h + .5 | 0);
        x = 0;
        y = 0;
        y += top_h;
        var leftcenterbounds = cc.rect(x + .5 | 0, y + .5 | 0, left_w + .5 | 0, center_h + .5 | 0);
        x += left_w;
        var centerbounds = cc.rect(x + .5 | 0, y + .5 | 0, center_w + .5 | 0, center_h + .5 | 0);
        x += center_w;
        var rightcenterbounds = cc.rect(x + .5 | 0, y + .5 | 0, right_w + .5 | 0, center_h + .5 | 0);
        x = 0;
        y = 0;
        y += top_h;
        y += center_h;
        var leftbottombounds = cc.rect(x + .5 | 0, y + .5 | 0, left_w + .5 | 0, bottom_h + .5 | 0);
        x += left_w;
        var centerbottombounds = cc.rect(x + .5 | 0, y + .5 | 0, center_w + .5 | 0, bottom_h + .5 | 0);
        x += center_w;
        var rightbottombounds = cc.rect(x + .5 | 0, y + .5 | 0, right_w + .5 | 0, bottom_h + .5 | 0);
        var t = cc.affineTransformMakeIdentity();
        if (!rotated) {
            t = cc.affineTransformTranslate(t, rect.x, rect.y);
            cc._rectApplyAffineTransformIn(centerbounds, t);
            cc._rectApplyAffineTransformIn(rightbottombounds, t);
            cc._rectApplyAffineTransformIn(leftbottombounds, t);
            cc._rectApplyAffineTransformIn(righttopbounds, t);
            cc._rectApplyAffineTransformIn(lefttopbounds, t);
            cc._rectApplyAffineTransformIn(rightcenterbounds, t);
            cc._rectApplyAffineTransformIn(leftcenterbounds, t);
            cc._rectApplyAffineTransformIn(centerbottombounds, t);
            cc._rectApplyAffineTransformIn(centertopbounds, t);
            this._centre = new cc.Sprite;
            this._centre.initWithTexture(selTexture, centerbounds);
            locScale9Image.addChild(this._centre, 0, ccui.Scale9Sprite.POSITIONS_CENTRE);
            this._top = new cc.Sprite;
            this._top.initWithTexture(selTexture, centertopbounds);
            locScale9Image.addChild(this._top, 1, ccui.Scale9Sprite.POSITIONS_TOP);
            this._bottom = new cc.Sprite;
            this._bottom.initWithTexture(selTexture, centerbottombounds);
            locScale9Image.addChild(this._bottom, 1, ccui.Scale9Sprite.POSITIONS_BOTTOM);
            this._left = new cc.Sprite;
            this._left.initWithTexture(selTexture, leftcenterbounds);
            locScale9Image.addChild(this._left, 1, ccui.Scale9Sprite.POSITIONS_LEFT);
            this._right = new cc.Sprite;
            this._right.initWithTexture(selTexture, rightcenterbounds);
            locScale9Image.addChild(this._right, 1, ccui.Scale9Sprite.POSITIONS_RIGHT);
            this._topLeft = new cc.Sprite;
            this._topLeft.initWithTexture(selTexture, lefttopbounds);
            locScale9Image.addChild(this._topLeft, 2, ccui.Scale9Sprite.POSITIONS_TOPLEFT);
            this._topRight = new cc.Sprite;
            this._topRight.initWithTexture(selTexture, righttopbounds);
            locScale9Image.addChild(this._topRight, 2, ccui.Scale9Sprite.POSITIONS_TOPRIGHT);
            this._bottomLeft = new cc.Sprite;
            this._bottomLeft.initWithTexture(selTexture, leftbottombounds);
            locScale9Image.addChild(this._bottomLeft, 2, ccui.Scale9Sprite.POSITIONS_BOTTOMLEFT);
            this._bottomRight = new cc.Sprite;
            this._bottomRight.initWithTexture(selTexture, rightbottombounds);
            locScale9Image.addChild(this._bottomRight, 2, ccui.Scale9Sprite.POSITIONS_BOTTOMRIGHT);
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->466");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->467");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->468");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->469");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->470");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->471");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->472");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->473");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->474");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->475");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->476");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->477");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->478");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->479");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->480");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->481");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->482");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->483");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->484");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->485");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->486");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->487");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->488");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->489");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->490");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->491");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->492");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->493");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->494");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->495");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->496");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->497");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->498");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->499");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->500");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->501");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->502");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->503");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->504");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->505");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->506");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->507");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->508");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->509");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->510");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->511");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->512");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->513");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->514");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->515");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->516");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->517");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->518");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->519");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->520");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->521");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->522");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->523");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->524");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->525");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->526");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->527");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->528");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->529");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->530");
        }
        this.setContentSize(rect.width, rect.height);
        if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
            this.addChild(locScale9Image);
        }
        if (this._spritesGenerated) {
            this.setOpacity(opacity);
            this.setColor(color);
        }
        this._spritesGenerated = true;
        return true;
    },
    setSpriteFrame: function(spriteFrame) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->544");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->545");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->546");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->547");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->548");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->549");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->550");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->551");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->552");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->553");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->554");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->555");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->556");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->557");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->558");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->559");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->560");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->561");
    },
    setState: function(state) {
        this._renderCmd.setState(state);
    },
    setFlippedX: function(flippedX) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->567");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->568");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->569");
    },
    isFlippedX: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->572");
    },
    setFlippedY: function(flippedY) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->575");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->576");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->577");
    },
    isFlippedY: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->580");
    },
    setScaleX: function(scaleX) {
        if (this._flippedX) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->584");
        }
        cc.Node.prototype.setScaleX.call(this, scaleX);
    },
    setScaleY: function(scaleY) {
        if (this._flippedY) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->590");
        }
        cc.Node.prototype.setScaleY.call(this, scaleY);
    },
    setScale: function(scaleX, scaleY) {
        if (scaleY === undefined) {
            scaleY = scaleX;
        }
        this.setScaleX(scaleX);
        this.setScaleY(scaleY);
    },
    getScaleX: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->602");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->603");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->604");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->605");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->606");
    },
    getScaleY: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->609");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->610");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->611");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->612");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->613");
    },
    getScale: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->616");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->617");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->618");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->619");
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->623");
        } else {
            return new ccui.Scale9Sprite.WebGLRenderCmd(this);
        }
    }
});
var _p = ccui.Scale9Sprite.prototype;
cc.EventHelper.prototype.apply(_p);
_p.preferredSize;
cc.defineGetterSetter(_p, "preferredSize", _p.getPreferredSize, _p.setPreferredSize);
_p.capInsets;
cc.defineGetterSetter(_p, "capInsets", _p.getCapInsets, _p.setCapInsets);
_p.insetLeft;
cc.defineGetterSetter(_p, "insetLeft", _p.getInsetLeft, _p.setInsetLeft);
_p.insetTop;
cc.defineGetterSetter(_p, "insetTop", _p.getInsetTop, _p.setInsetTop);
_p.insetRight;
cc.defineGetterSetter(_p, "insetRight", _p.getInsetRight, _p.setInsetRight);
_p.insetBottom;
cc.defineGetterSetter(_p, "insetBottom", _p.getInsetBottom, _p.setInsetBottom);
_p = null;
ccui.Scale9Sprite.create = function(file, rect, capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->645");
};
ccui.Scale9Sprite.createWithSpriteFrame = function(spriteFrame, capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->648");
};
ccui.Scale9Sprite.createWithSpriteFrameName = function(spriteFrameName, capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIScale9Sprite.js->651");
};
ccui.Scale9Sprite.POSITIONS_CENTRE = 0;
ccui.Scale9Sprite.POSITIONS_TOP = 1;
ccui.Scale9Sprite.POSITIONS_LEFT = 2;
ccui.Scale9Sprite.POSITIONS_RIGHT = 3;
ccui.Scale9Sprite.POSITIONS_BOTTOM = 4;
ccui.Scale9Sprite.POSITIONS_TOPRIGHT = 5;
ccui.Scale9Sprite.POSITIONS_TOPLEFT = 6;
ccui.Scale9Sprite.POSITIONS_BOTTOMRIGHT = 7;
ccui.Scale9Sprite.state = {
    NORMAL: 0,
    GRAY: 1
};