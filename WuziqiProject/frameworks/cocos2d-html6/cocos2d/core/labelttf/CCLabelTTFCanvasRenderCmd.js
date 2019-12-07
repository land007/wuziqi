cc.LabelTTF._textAlign = [ "left", "center", "right" ];
cc.LabelTTF._textBaseline = [ "top", "middle", "bottom" ];
cc.LabelTTF.wrapInspection = true;
cc.LabelTTF._wordRex = /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôû]+|\S)/;
cc.LabelTTF._symbolRex = /^[!,.:;}\]%\?>、‘“》？。，！]/;
cc.LabelTTF._lastWordRex = /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôû]+|\S)$/;
cc.LabelTTF._lastEnglish = /[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôû]+$/;
cc.LabelTTF._firsrEnglish = /^[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôû]/;
(function() {
    cc.LabelTTF.RenderCmd = function() {
        this._fontClientHeight = 18;
        this._fontStyleStr = "";
        this._shadowColorStr = "rgba(128, 128, 128, 0.5)";
        this._strokeColorStr = "";
        this._fillColorStr = "rgba(255,255,255,1)";
        this._labelCanvas = null;
        this._labelContext = null;
        this._lineWidths = [];
        this._strings = [];
        this._isMultiLine = false;
    };
    var proto = cc.LabelTTF.RenderCmd.prototype;
    proto.constructor = cc.LabelTTF.RenderCmd;
    proto._getLabelContext = function() {
        if (this._labelContext) {
            return this._labelContext;
        }
        var node = this._node;
        if (!this._labelCanvas) {
            var locCanvas = cc.newElement("canvas");
            locCanvas.width = 1;
            locCanvas.height = 1;
            var labelTexture = new cc.Texture2D;
            labelTexture.initWithElement(locCanvas);
            node.setTexture(labelTexture);
            this._labelCanvas = locCanvas;
        }
        this._labelContext = this._labelCanvas.getContext("2d");
        return this._labelContext;
    };
    proto._setFontStyle = function(fontName, fontSize, fontStyle, fontWeight) {
        this._fontStyleStr = fontStyle + " " + fontWeight + " " + fontSize + "px '" + fontName + "'";
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(fontName, fontSize);
    };
    proto._getFontStyle = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->46");
    };
    proto._getFontClientHeight = function() {
        return this._fontClientHeight;
    };
    proto._updateTexture = function() {
        this._dirtyFlag = this._dirtyFlag & cc.Node._dirtyFlags.textDirty ^ this._dirtyFlag;
        var node = this._node;
        var locContext = this._getLabelContext(), locLabelCanvas = this._labelCanvas;
        var locContentSize = node._contentSize;
        if (node._string.length === 0) {
            locLabelCanvas.width = 1;
            locLabelCanvas.height = locContentSize.height || 1;
            node._texture && node._texture.handleLoadedTexture();
            node.setTextureRect(cc.rect(0, 0, 1, locContentSize.height));
            return true;
        }
        locContext.font = this._fontStyleStr;
        this._updateTTF();
        var width = locContentSize.width, height = locContentSize.height;
        var flag = locLabelCanvas.width == width && locLabelCanvas.height == height;
        locLabelCanvas.width = width;
        locLabelCanvas.height = height;
        if (flag) {
            locContext.clearRect(0, 0, width, height);
        }
        this._drawTTFInCanvas(locContext);
        node._texture && node._texture.handleLoadedTexture();
        node.setTextureRect(cc.rect(0, 0, width, height));
        return true;
    };
    proto._measureConfig = function() {
        this._getLabelContext().font = this._fontStyleStr;
    };
    proto._measure = function(text) {
        return this._getLabelContext().measureText(text).width;
    };
    proto._updateTTF = function() {
        var node = this._node;
        var locDimensionsWidth = node._dimensions.width, i, strLength;
        var locLineWidth = this._lineWidths;
        locLineWidth.length = 0;
        this._isMultiLine = false;
        this._measureConfig();
        if (locDimensionsWidth !== 0) {
            this._strings = node._string.split("\n");
            for (i = 0; i < this._strings.length; i++) {
                this._checkWarp(this._strings, i, locDimensionsWidth);
            }
        } else {
            this._strings = node._string.split("\n");
            for (i = 0, strLength = this._strings.length; i < strLength; i++) {
                locLineWidth.push(this._measure(this._strings[i]));
            }
        }
        if (this._strings.length > 0) {
            this._isMultiLine = true;
        }
        var locSize, locStrokeShadowOffsetX = 0, locStrokeShadowOffsetY = 0;
        if (node._strokeEnabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->106");
        }
        if (node._shadowEnabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->111");
        }
        if (locDimensionsWidth === 0) {
            if (this._isMultiLine) {
                locSize = cc.size(Math.ceil(Math.max.apply(Math, locLineWidth) + locStrokeShadowOffsetX), Math.ceil(this._fontClientHeight * this._strings.length + locStrokeShadowOffsetY));
            } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->117");
            }
        } else {
            if (node._dimensions.height === 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->125");
            } else {
                locSize = cc.size(Math.ceil(locDimensionsWidth + locStrokeShadowOffsetX), Math.ceil(node._dimensions.height + locStrokeShadowOffsetY));
            }
        }
        if (node._getFontStyle() != "normal") {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->131");
        }
        node.setContentSize(locSize);
        node._strokeShadowOffsetX = locStrokeShadowOffsetX;
        node._strokeShadowOffsetY = locStrokeShadowOffsetY;
        var locAP = node._anchorPoint;
        this._anchorPointInPoints.x = locStrokeShadowOffsetX * .5 + (locSize.width - locStrokeShadowOffsetX) * locAP.x;
        this._anchorPointInPoints.y = locStrokeShadowOffsetY * .5 + (locSize.height - locStrokeShadowOffsetY) * locAP.y;
    };
    proto._drawTTFInCanvas = function(context) {
        if (!context) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->142");
        }
        var node = this._node;
        var locStrokeShadowOffsetX = node._strokeShadowOffsetX, locStrokeShadowOffsetY = node._strokeShadowOffsetY;
        var locContentSizeHeight = node._contentSize.height - locStrokeShadowOffsetY, locVAlignment = node._vAlignment, locHAlignment = node._hAlignment, locStrokeSize = node._strokeSize;
        context.setTransform(1, 0, 0, 1, 0 + locStrokeShadowOffsetX * .5, locContentSizeHeight + locStrokeShadowOffsetY * .5);
        if (context.font != this._fontStyleStr) {
            context.font = this._fontStyleStr;
        }
        context.fillStyle = this._fillColorStr;
        var xOffset = 0, yOffset = 0;
        var locStrokeEnabled = node._strokeEnabled;
        if (locStrokeEnabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->156");
        }
        if (node._shadowEnabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->163");
        }
        context.textBaseline = cc.LabelTTF._textBaseline[locVAlignment];
        context.textAlign = cc.LabelTTF._textAlign[locHAlignment];
        var locContentWidth = node._contentSize.width - locStrokeShadowOffsetX;
        var lineHeight = node.getLineHeight();
        var transformTop = (lineHeight - this._fontClientHeight) / 2;
        if (locHAlignment === cc.TEXT_ALIGNMENT_RIGHT) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->171");
        } else {
            if (locHAlignment === cc.TEXT_ALIGNMENT_CENTER) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->174");
            } else {
                xOffset += 0;
            }
        }
        if (this._isMultiLine) {
            var locStrLen = this._strings.length;
            if (locVAlignment === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->182");
            } else {
                if (locVAlignment === cc.VERTICAL_TEXT_ALIGNMENT_CENTER) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->185");
                }
            }
            for (var i = 0; i < locStrLen; i++) {
                var line = this._strings[i];
                var tmpOffsetY = -locContentSizeHeight + (lineHeight * i + transformTop) + yOffset;
                if (locStrokeEnabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->192");
                }
                context.fillText(line, xOffset, tmpOffsetY);
            }
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->207");
        }
    };
    proto._checkWarp = function(strArr, i, maxWidth) {
        var text = strArr[i];
        var allWidth = this._measure(text);
        if (allWidth > maxWidth && text.length > 1) {
            var fuzzyLen = text.length * (maxWidth / allWidth) | 0;
            var tmpText = text.substr(fuzzyLen);
            var width = allWidth - this._measure(tmpText);
            var sLine;
            var pushNum = 0;
            var checkWhile = 0;
            while (width > maxWidth && checkWhile++ < 100) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->224");
            }
            checkWhile = 0;
            while (width < maxWidth && checkWhile++ < 100) {
                if (tmpText) {
                    var exec = cc.LabelTTF._wordRex.exec(tmpText);
                    pushNum = exec ? exec[0].length : 1;
                    sLine = tmpText;
                }
                fuzzyLen = fuzzyLen + pushNum;
                tmpText = text.substr(fuzzyLen);
                width = allWidth - this._measure(tmpText);
            }
            fuzzyLen -= pushNum;
            if (fuzzyLen === 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->240");
            }
            var sText = text.substr(0, fuzzyLen), result;
            if (cc.LabelTTF.wrapInspection) {
                if (cc.LabelTTF._symbolRex.test(sLine || tmpText)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->248");
                }
            }
            if (cc.LabelTTF._firsrEnglish.test(sLine)) {
                result = cc.LabelTTF._lastEnglish.exec(sText);
                if (result && sText !== result[0]) {
                    fuzzyLen -= result[0].length;
                    sLine = text.substr(fuzzyLen);
                    sText = text.substr(0, fuzzyLen);
                }
            }
            strArr[i] = sLine || tmpText;
            strArr.splice(i, 0, sText);
        }
    };
})();
(function() {
    cc.LabelTTF.CanvasRenderCmd = function(renderable) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->267");
    };
    cc.LabelTTF.CanvasRenderCmd.prototype = Object.create(cc.Sprite.CanvasRenderCmd.prototype);
    cc.inject(cc.LabelTTF.RenderCmd.prototype, cc.LabelTTF.CanvasRenderCmd.prototype);
    var proto = cc.LabelTTF.CanvasRenderCmd.prototype;
    proto.constructor = cc.LabelTTF.CanvasRenderCmd;
    proto.updateStatus = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->292");
    };
    proto._syncStatus = function(parentCmd) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->295");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->303");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->319");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->320");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->321");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->323");
    };
    proto._setColorsString = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->330");
    };
    proto._updateColor = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/core/labelttf/CCLabelTTFCanvasRenderCmd.js->334");
    };
})();