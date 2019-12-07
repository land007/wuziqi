cc.Sprite = cc.Node.extend({
    dirty: false,
    atlasIndex: 0,
    textureAtlas: null,
    _batchNode: null,
    _recursiveDirty: null,
    _hasChildren: null,
    _shouldBeHidden: false,
    _transformToBatch: null,
    _blendFunc: null,
    _texture: null,
    _rect: null,
    _rectRotated: false,
    _offsetPosition: null,
    _unflippedOffsetPositionFromCenter: null,
    _opacityModifyRGB: false,
    _flippedX: false,
    _flippedY: false,
    _textureLoaded: false,
    _className: "Sprite",
    ctor: function(fileName, rect, rotated) {
        var self = this;
        cc.Node.prototype.ctor.call(self);
        self._shouldBeHidden = false;
        self._offsetPosition = cc.p(0, 0);
        self._unflippedOffsetPositionFromCenter = cc.p(0, 0);
        self._blendFunc = {
            src: cc.BLEND_SRC,
            dst: cc.BLEND_DST
        };
        self._rect = cc.rect(0, 0, 0, 0);
        self._softInit(fileName, rect, rotated);
    },
    textureLoaded: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->35");
    },
    addLoadedEventListener: function(callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->38");
    },
    isDirty: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->41");
    },
    setDirty: function(bDirty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->44");
    },
    isTextureRectRotated: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->47");
    },
    getAtlasIndex: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->50");
    },
    setAtlasIndex: function(atlasIndex) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->53");
    },
    getTextureRect: function() {
        return cc.rect(this._rect);
    },
    getTextureAtlas: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->59");
    },
    setTextureAtlas: function(textureAtlas) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->62");
    },
    getOffsetPosition: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->65");
    },
    _getOffsetX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->68");
    },
    _getOffsetY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->71");
    },
    getBlendFunc: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->74");
    },
    initWithSpriteFrame: function(spriteFrame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->85");
    },
    initWithSpriteFrameName: function(spriteFrameName) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->91");
    },
    useBatchNode: function(batchNode) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->95");
    },
    setVertexRect: function(rect) {
        var locRect = this._rect;
        locRect.x = rect.x;
        locRect.y = rect.y;
        locRect.width = rect.width;
        locRect.height = rect.height;
    },
    sortAllChildren: function() {
        if (this._reorderChildDirty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->128");
        }
    },
    reorderChild: function(child, zOrder) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->144");
    },
    removeChild: function(child, cleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->150");
    },
    setVisible: function(visible) {
        cc.Node.prototype.setVisible.call(this, visible);
        this._renderCmd.setDirtyRecursively(true);
    },
    removeAllChildren: function(cleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->164");
    },
    ignoreAnchorPointForPosition: function(relative) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->171");
    },
    setFlippedX: function(flippedX) {
        if (this._flippedX != flippedX) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->177");
        }
    },
    setFlippedY: function(flippedY) {
        if (this._flippedY != flippedY) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->184");
        }
    },
    isFlippedX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->188");
    },
    isFlippedY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->191");
    },
    setOpacityModifyRGB: function(modify) {
        if (this._opacityModifyRGB !== modify) {
            this._opacityModifyRGB = modify;
            this._renderCmd._setColorDirty();
        }
    },
    isOpacityModifyRGB: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->200");
    },
    setDisplayFrameWithAnimationName: function(animationName, frameIndex) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->214");
    },
    getBatchNode: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->217");
    },
    _setReorderChildDirtyRecursively: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->227");
    },
    getTexture: function() {
        return this._texture;
    },
    _softInit: function(fileName, rect, rotated) {
        if (fileName === undefined) {
            cc.Sprite.prototype.init.call(this);
        } else {
            if (cc.isString(fileName)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->243");
            } else {
                if (cc.isObject(fileName)) {
                    if (fileName instanceof cc.Texture2D) {
                        this.initWithTexture(fileName, rect, rotated);
                    } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->258");
                    }
                }
            }
        }
    },
    getQuad: function() {
        return this._renderCmd.getQuad();
    },
    setBlendFunc: function(src, dst) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->276");
    },
    init: function() {
        var _t = this;
        if (arguments.length > 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->281");
        }
        cc.Node.prototype.init.call(_t);
        _t.dirty = _t._recursiveDirty = false;
        _t._blendFunc.src = cc.BLEND_SRC;
        _t._blendFunc.dst = cc.BLEND_DST;
        _t.texture = null;
        _t._flippedX = _t._flippedY = false;
        _t.anchorX = .5;
        _t.anchorY = .5;
        _t._offsetPosition.x = 0;
        _t._offsetPosition.y = 0;
        _t._hasChildren = false;
        this._renderCmd._init();
        _t.setTextureRect(cc.rect(0, 0, 0, 0), false, cc.size(0, 0));
        return true;
    },
    initWithFile: function(filename, rect) {
        cc.assert(filename, cc._LogInfos.Sprite_initWithFile);
        var tex = cc.textureCache.getTextureForKey(filename);
        if (!tex) {
            tex = cc.textureCache.addImage(filename);
            return this.initWithTexture(tex, rect || cc.rect(0, 0, tex._contentSize.width, tex._contentSize.height));
        } else {
            if (!rect) {
                var size = tex.getContentSize();
                rect = cc.rect(0, 0, size.width, size.height);
            }
            return this.initWithTexture(tex, rect);
        }
    },
    initWithTexture: function(texture, rect, rotated, counterclockwise) {
        var _t = this;
        cc.assert(arguments.length != 0, cc._LogInfos.CCSpriteBatchNode_initWithTexture);
        rotated = rotated || false;
        texture = this._renderCmd._handleTextureForRotatedTexture(texture, rect, rotated, counterclockwise);
        if (!cc.Node.prototype.init.call(_t)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->318");
        }
        _t._batchNode = null;
        _t._recursiveDirty = false;
        _t.dirty = false;
        _t._opacityModifyRGB = true;
        _t._blendFunc.src = cc.BLEND_SRC;
        _t._blendFunc.dst = cc.BLEND_DST;
        _t._flippedX = _t._flippedY = false;
        _t.setAnchorPoint(.5, .5);
        _t._offsetPosition.x = 0;
        _t._offsetPosition.y = 0;
        _t._hasChildren = false;
        this._renderCmd._init();
        var locTextureLoaded = texture.isLoaded();
        _t._textureLoaded = locTextureLoaded;
        if (!locTextureLoaded) {
            _t._rectRotated = rotated;
            if (rect) {
                _t._rect.x = rect.x;
                _t._rect.y = rect.y;
                _t._rect.width = rect.width;
                _t._rect.height = rect.height;
            }
            if (_t.texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->343");
            }
            texture.addEventListener("load", _t._renderCmd._textureLoadedCallback, _t);
            _t.texture = texture;
            return true;
        }
        if (!rect) {
            rect = cc.rect(0, 0, texture.width, texture.height);
        }
        this._renderCmd._checkTextureBoundary(texture, rect, rotated);
        _t.texture = texture;
        _t.setTextureRect(rect, rotated);
        _t.setBatchNode(null);
        return true;
    },
    setTextureRect: function(rect, rotated, untrimmedSize, needConvert) {
        var _t = this;
        _t._rectRotated = rotated || false;
        _t.setContentSize(untrimmedSize || rect);
        _t.setVertexRect(rect);
        _t._renderCmd._setTextureCoords(rect, needConvert);
        var relativeOffset = _t._unflippedOffsetPositionFromCenter;
        if (_t._flippedX) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->366");
        }
        if (_t._flippedY) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->369");
        }
        var locRect = _t._rect;
        _t._offsetPosition.x = relativeOffset.x + (_t._contentSize.width - locRect.width) / 2;
        _t._offsetPosition.y = relativeOffset.y + (_t._contentSize.height - locRect.height) / 2;
        if (_t._batchNode) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->375");
        } else {
            this._renderCmd._resetForBatchNode();
        }
    },
    updateTransform: function() {
        this._renderCmd.updateTransform();
    },
    addChild: function(child, localZOrder, tag) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->391");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->392");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->393");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->394");
    },
    setSpriteFrame: function(newFrame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->397");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->398");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->401");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->403");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->405");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->413");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->426");
    },
    setDisplayFrame: function(newFrame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->430");
    },
    isFrameDisplayed: function(frame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->433");
    },
    displayFrame: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->436");
    },
    setBatchNode: function(spriteBatchNode) {
        var _t = this;
        _t._batchNode = spriteBatchNode;
        if (!_t._batchNode) {
            _t.atlasIndex = cc.Sprite.INDEX_NOT_INITIALIZED;
            _t.textureAtlas = null;
            _t._recursiveDirty = false;
            _t.dirty = false;
            this._renderCmd._resetForBatchNode();
        } else {
            _t._transformToBatch = cc.affineTransformIdentity();
            _t.textureAtlas = _t._batchNode.getTextureAtlas();
        }
    },
    setTexture: function(texture) {
        if (!texture) {
            return this._renderCmd._setTexture(null);
        }
        if (cc.isString(texture)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->457");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->458");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->459");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->460");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->461");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->462");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->463");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->464");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->465");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->466");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->467");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->468");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->469");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->470");
        } else {
            cc.assert(texture instanceof cc.Texture2D, cc._LogInfos.Sprite_setTexture_2);
            this._changeRectWithTexture(texture.getContentSize());
            this._renderCmd._setTexture(texture);
        }
    },
    _changeRectWithTexture: function(rect) {
        if (!rect || !rect.width && !rect.height) {
            return;
        }
        var textureRect = this.getTextureRect();
        if (textureRect.height || textureRect.width) {
            return;
        }
        rect.x = rect.x || 0;
        rect.y = rect.y || 0;
        rect.width = rect.width || 0;
        rect.height = rect.height || 0;
        this.setTextureRect(rect);
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->493");
        } else {
            return new cc.Sprite.WebGLRenderCmd(this);
        }
    }
});
cc.Sprite.create = function(fileName, rect, rotated) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSprite.js->500");
};
cc.Sprite.createWithTexture = cc.Sprite.create;
cc.Sprite.createWithSpriteFrameName = cc.Sprite.create;
cc.Sprite.createWithSpriteFrame = cc.Sprite.create;
cc.Sprite.INDEX_NOT_INITIALIZED = -1;
cc.EventHelper.prototype.apply(cc.Sprite.prototype);
cc.assert(cc.isFunction(cc._tmp.PrototypeSprite), cc._LogInfos.MissingFile, "SpritesPropertyDefine.js");
cc._tmp.PrototypeSprite();
delete cc._tmp.PrototypeSprite;