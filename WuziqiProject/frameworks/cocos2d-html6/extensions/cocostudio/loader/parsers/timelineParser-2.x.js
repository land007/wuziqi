(function(load, baseParser) {
    var DEBUG = false;
    var Parser = baseParser.extend({
        parse: function(file, json) {
            var resourcePath = this._dirname(file);
            this.pretreatment(json, resourcePath, file);
            var node = this.parseNode(this.getNodeJson(json), resourcePath);
            this.deferred(json, resourcePath, node, file);
            return node;
        },
        getNodeJson: function(json) {
            return json["Content"]["Content"]["ObjectData"];
        },
        getClass: function(json) {
            return json["ctype"];
        }
    });
    var parser = new Parser;
    var getParam = function(value, dValue) {
        if (value === undefined) {
            return dValue;
        } else {
            return value;
        }
    };
    parser.generalAttributes = function(node, json) {
        if (json["Name"] != null) {
            node.setName(json["Name"]);
        }
        var position = json["Position"];
        if (position != null && (position["X"] != null || position["Y"] != null)) {
            node.setPosition(cc.p(position["X"] || 0, position["Y"] || 0));
        }
        var scale = json["Scale"];
        if (scale != null) {
            if (scale["ScaleX"] != null) {
                node.setScaleX(scale["ScaleX"]);
            }
            if (scale["ScaleY"] != null) {
                node.setScaleY(scale["ScaleY"]);
            }
        }
        var rotationSkewX = json["RotationSkewX"];
        if (rotationSkewX != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->45");
        }
        var rotationSkewY = json["RotationSkewY"];
        if (json["RotationSkewY"] != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->49");
        }
        var anchor = json["AnchorPoint"];
        if (anchor != null) {
            if (anchor["ScaleX"] == null) {
                anchor["ScaleX"] = 0;
            }
            if (anchor["ScaleY"] == null) {
                anchor["ScaleY"] = 0;
            }
            if (anchor["ScaleX"] != .5 || anchor["ScaleY"] != .5) {
                node.setAnchorPoint(cc.p(anchor["ScaleX"], anchor["ScaleY"]));
            }
        }
        if (json["ZOrder"] != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->64");
        }
        var visible = getParam(json["VisibleForFrame"], true);
        node.setVisible(visible);
        setContentSize(node, json["Size"]);
        if (json["Alpha"] != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->70");
        }
        node.setTag(json["Tag"] || 0);
        node.setUserObject(new ccs.ActionTimelineData(json["ActionTag"] || 0));
        node.setCascadeColorEnabled(true);
        node.setCascadeOpacityEnabled(true);
    };
    parser.parseChild = function(node, children, resourcePath) {
        if (!node || !children) {
            return;
        }
        for (var i = 0; i < children.length; i++) {
            var child = this.parseNode(children[i], resourcePath);
            if (child) {
                if (node instanceof ccui.PageView) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->87");
                } else {
                    if (node instanceof ccui.ListView) {
                        if (child instanceof ccui.Widget) {
                            node.pushBackCustomItem(child);
                        }
                    } else {
                        if (!(node instanceof ccui.Layout) && child instanceof ccui.Widget) {
                            if (child.getPositionType() == ccui.Widget.POSITION_PERCENT) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->98");
                            }
                        }
                        node.addChild(child);
                    }
                }
            }
        }
    };
    parser.initSingleNode = function(json) {
        var node = new cc.Node;
        this.generalAttributes(node, json);
        return node;
    };
    parser.initSprite = function(json, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->113");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->135");
    };
    parser.initParticle = function(json, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->147");
    };
    parser.widgetAttributes = function(widget, json) {
        widget.setCascadeColorEnabled(true);
        widget.setCascadeOpacityEnabled(true);
        widget.setUnifySizeEnabled(false);
        widget.ignoreContentAdaptWithSize(false);
        setContentSize(widget, json["Size"]);
        var name = json["Name"];
        if (name) {
            widget.setName(name);
        }
        var actionTag = json["ActionTag"] || 0;
        widget.setActionTag(actionTag);
        widget.setUserObject(new ccs.ActionTimelineData(actionTag));
        var rotationSkewX = json["RotationSkewX"];
        if (rotationSkewX) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->164");
        }
        var rotationSkewY = json["RotationSkewY"];
        if (rotationSkewY) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->168");
        }
        var flipX = json["FlipX"];
        if (flipX) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->172");
        }
        var flipY = json["FlipY"];
        if (flipY) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->176");
        }
        var zOrder = json["zOrder"];
        if (zOrder != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->180");
        }
        var visible = getParam(json["VisibleForFrame"], true);
        widget.setVisible(visible);
        var alpha = json["Alpha"];
        if (alpha != null) {
            widget.setOpacity(alpha);
        }
        widget.setTag(json["Tag"] || 0);
        var touchEnabled = json["TouchEnable"] || false;
        widget.setTouchEnabled(touchEnabled);
        var callBackType = json["CallBackType"];
        if (callBackType != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->193");
        }
        var callBackName = json["CallBackName"];
        if (callBackName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->197");
        }
        var position = json["Position"];
        if (position != null) {
            widget.setPosition(position["X"] || 0, position["Y"] || 0);
        }
        var scale = json["Scale"];
        if (scale != null) {
            var scaleX = getParam(scale["ScaleX"], 1);
            var scaleY = getParam(scale["ScaleY"], 1);
            widget.setScaleX(scaleX);
            widget.setScaleY(scaleY);
        }
        var anchorPoint = json["AnchorPoint"];
        if (anchorPoint != null) {
            widget.setAnchorPoint(anchorPoint["ScaleX"] || 0, anchorPoint["ScaleY"] || 0);
        }
        var color = json["CColor"];
        if (color != null) {
            widget.setColor(getColor(color));
        }
        if (widget instanceof ccui.Layout) {
            var layoutComponent = ccui.LayoutComponent.bindLayoutComponent(widget);
            var positionXPercentEnabled = json["PositionPercentXEnable"] || false;
            var positionYPercentEnabled = json["PositionPercentYEnable"] || false;
            var positionXPercent = 0, positionYPercent = 0, PrePosition = json["PrePosition"];
            if (PrePosition != null) {
                positionXPercent = PrePosition["X"] || 0;
                positionYPercent = PrePosition["Y"] || 0;
            }
            var sizeXPercentEnable = json["PercentWidthEnable"] || false;
            var sizeYPercentEnable = json["PercentHeightEnable"] || false;
            var sizeXPercent = 0, sizeYPercent = 0, PreSize = json["PreSize"];
            if (PrePosition != null) {
                sizeXPercent = PreSize["X"] || 0;
                sizeYPercent = PreSize["Y"] || 0;
            }
            var stretchHorizontalEnabled = json["StretchWidthEnable"] || false;
            var stretchVerticalEnabled = json["StretchHeightEnable"] || false;
            var horizontalEdge = json["HorizontalEdge"];
            var verticalEdge = json["VerticalEdge"];
            var leftMargin = json["LeftMargin"] || 0;
            var rightMargin = json["RightMargin"] || 0;
            var topMargin = json["TopMargin"] || 0;
            var bottomMargin = json["BottomMargin"] || 0;
            layoutComponent.setPositionPercentXEnabled(positionXPercentEnabled);
            layoutComponent.setPositionPercentYEnabled(positionYPercentEnabled);
            layoutComponent.setPositionPercentX(positionXPercent);
            layoutComponent.setPositionPercentY(positionYPercent);
            layoutComponent.setPercentWidthEnabled(sizeXPercentEnable);
            layoutComponent.setPercentHeightEnabled(sizeYPercentEnable);
            layoutComponent.setPercentWidth(sizeXPercent);
            layoutComponent.setPercentHeight(sizeYPercent);
            layoutComponent.setStretchWidthEnabled(stretchHorizontalEnabled);
            layoutComponent.setStretchHeightEnabled(stretchVerticalEnabled);
            var horizontalEdgeType = ccui.LayoutComponent.horizontalEdge.NONE;
            if (horizontalEdge == "LeftEdge") {
                horizontalEdgeType = ccui.LayoutComponent.horizontalEdge.LEFT;
            } else {
                if (horizontalEdge == "RightEdge") {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->257");
                } else {
                    if (horizontalEdge == "BothEdge") {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->260");
                    }
                }
            }
            layoutComponent.setHorizontalEdge(horizontalEdgeType);
            var verticalEdgeType = ccui.LayoutComponent.verticalEdge.NONE;
            if (verticalEdge == "TopEdge") {
                verticalEdgeType = ccui.LayoutComponent.verticalEdge.TOP;
            } else {
                if (verticalEdge == "BottomEdge") {
                    verticalEdgeType = ccui.LayoutComponent.verticalEdge.BOTTOM;
                } else {
                    if (verticalEdge == "BothEdge") {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->273");
                    }
                }
            }
            layoutComponent.setVerticalEdge(verticalEdgeType);
            layoutComponent.setTopMargin(topMargin);
            layoutComponent.setBottomMargin(bottomMargin);
            layoutComponent.setLeftMargin(leftMargin);
            layoutComponent.setRightMargin(rightMargin);
        }
    };
    parser.initPanel = function(json, resourcePath) {
        var widget = new ccui.Layout;
        this.widgetAttributes(widget, json);
        var clipEnabled = json["ClipAble"];
        if (clipEnabled != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->289");
        }
        var colorType = getParam(json["ComboBoxIndex"], 0);
        widget.setBackGroundColorType(colorType);
        var bgColorOpacity = getParam(json["BackColorAlpha"], 255);
        if (bgColorOpacity != null) {
            widget.setBackGroundColorOpacity(bgColorOpacity);
        }
        var backGroundScale9Enabled = json["Scale9Enable"];
        if (backGroundScale9Enabled != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->299");
        }
        var opacity = getParam(json["Alpha"], 255);
        widget.setOpacity(opacity);
        loadTexture(json["FileData"], resourcePath, function(path, type) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->304");
        });
        if (backGroundScale9Enabled) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->307");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->308");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->309");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->310");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->311");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->312");
        } else {
            if (!widget.isIgnoreContentAdaptWithSize()) {
                setContentSize(widget, json["Size"]);
            }
        }
        var bgStartColor = json["FirstColor"];
        var bgEndColor = json["EndColor"];
        if (bgStartColor != null && bgEndColor != null) {
            var startC = getColor(bgStartColor);
            if (bgEndColor["R"] == null && bgEndColor["G"] == null && bgEndColor["B"] == null) {
                widget.setBackGroundColor(startC);
            } else {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->325");
            }
        }
        var colorVector = json["ColorVector"];
        if (colorVector != null) {
            widget.setBackGroundColorVector(cc.p(colorVector["ScaleX"], colorVector["ScaleY"]));
        }
        return widget;
    };
    parser.initText = function(json, resourcePath) {
        var widget = new ccui.Text;
        this.widgetAttributes(widget, json);
        var touchScaleEnabled = json["TouchScaleChangeAble"];
        if (touchScaleEnabled != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->339");
        }
        var text = json["LabelText"];
        if (text != null) {
            widget.setString(text);
        }
        var fontSize = json["FontSize"];
        if (fontSize != null) {
            widget.setFontSize(fontSize);
        }
        var fontName = json["FontName"];
        if (fontName != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->351");
        }
        var areaWidth = json["AreaWidth"];
        var areaHeight = json["areaHeight"];
        if (areaWidth && areaHeight) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->356");
        }
        var h_alignment = json["HorizontalAlignmentType"] || "HT_Left";
        switch (h_alignment) {
          case "HT_Right":
            h_alignment = 2;
            break;
          case "HT_Center":
            h_alignment = 1;
            break;
          case "HT_Left":
          default:
            h_alignment = 0;
        }
        widget.setTextHorizontalAlignment(h_alignment);
        var v_alignment = json["VerticalAlignmentType"] || "VT_Top";
        switch (v_alignment) {
          case "VT_Bottom":
            v_alignment = 2;
            break;
          case "VT_Center":
            v_alignment = 1;
            break;
          case "VT_Top":
          default:
            v_alignment = 0;
        }
        widget.setTextVerticalAlignment(v_alignment);
        var isCustomSize = json["IsCustomSize"];
        if (isCustomSize != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->386");
        }
        var fontResource = json["FontResource"];
        if (fontResource != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->390");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->391");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->392");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->393");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->394");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->395");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->396");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->397");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->398");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->399");
        }
        widget.setUnifySizeEnabled(false);
        if (widget.isIgnoreContentAdaptWithSize()) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->403");
        }
        return widget;
    };
    parser.initButton = function(json, resourcePath) {
        var widget = new ccui.Button;
        loadTexture(json["NormalFileData"], resourcePath, function(path, type) {
            widget.loadTextureNormal(path, type);
        });
        loadTexture(json["PressedFileData"], resourcePath, function(path, type) {
            widget.loadTexturePressed(path, type);
        });
        loadTexture(json["DisabledFileData"], resourcePath, function(path, type) {
            widget.loadTextureDisabled(path, type);
        });
        var scale9Enabled = getParam(json["Scale9Enable"], false);
        if (scale9Enabled) {
            widget.setScale9Enabled(scale9Enabled);
        }
        var text = json["ButtonText"];
        if (text != null) {
            widget.setTitleText(text);
        }
        var fontSize = json["FontSize"];
        if (fontSize != null) {
            widget.setTitleFontSize(fontSize);
        }
        var fontName = json["FontName"];
        if (fontName != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->432");
        }
        var textColor = json["TextColor"];
        if (textColor != null) {
            widget.setTitleColor(getColor(textColor));
        }
        var displaystate = getParam(json["DisplayState"], true);
        widget.setBright(displaystate);
        widget.setEnabled(displaystate);
        var fontResource = json["FontResource"];
        if (fontResource != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->443");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->444");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->445");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->446");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->447");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->448");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->449");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->450");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->451");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->452");
        }
        this.widgetAttributes(widget, json);
        if (scale9Enabled) {
            widget.setUnifySizeEnabled(false);
            widget.ignoreContentAdaptWithSize(false);
            var capInsets = cc.rect(json["Scale9OriginX"] || 0, json["Scale9OriginY"] || 0, json["Scale9Width"] || 0, json["Scale9Height"] || 0);
            widget.setCapInsets(capInsets);
        }
        setContentSize(widget, json["Size"]);
        return widget;
    };
    parser.initCheckBox = function(json, resourcePath) {
        var widget = new ccui.CheckBox;
        this.widgetAttributes(widget, json);
        var dataList = [ {
            name: "NormalBackFileData",
            handle: widget.loadTextureBackGround
        }, {
            name: "PressedBackFileData",
            handle: widget.loadTextureBackGroundSelected
        }, {
            name: "NodeNormalFileData",
            handle: widget.loadTextureFrontCross
        }, {
            name: "DisableBackFileData",
            handle: widget.loadTextureBackGroundDisabled
        }, {
            name: "NodeDisableFileData",
            handle: widget.loadTextureFrontCrossDisabled
        } ];
        dataList.forEach(function(item) {
            loadTexture(json[item.name], resourcePath, function(path, type) {
                item.handle.call(widget, path, type);
            });
        });
        var selectedState = getParam(json["CheckedState"], false);
        widget.setSelected(selectedState);
        var displaystate = getParam(json["DisplayState"], true);
        widget.setBright(displaystate);
        widget.setEnabled(displaystate);
        return widget;
    };
    parser.initScrollView = function(json, resourcePath) {
        var widget = new ccui.ScrollView;
        this.widgetAttributes(widget, json);
        var clipEnabled = json["ClipAble"];
        widget.setClippingEnabled(clipEnabled);
        var colorType = getParam(json["ComboBoxIndex"], 0);
        widget.setBackGroundColorType(colorType);
        var bgColorOpacity = json["BackColorAlpha"];
        if (bgColorOpacity != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->504");
        }
        var backGroundScale9Enabled = json["Scale9Enable"];
        if (backGroundScale9Enabled) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->508");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->509");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->510");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->511");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->512");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->513");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->514");
        } else {
            if (!widget.isIgnoreContentAdaptWithSize()) {
                setContentSize(widget, json["Size"]);
            }
        }
        var firstColor = json["FirstColor"];
        var endColor = json["EndColor"];
        if (firstColor && endColor) {
            if (endColor["R"] != null && endColor["G"] != null && endColor["B"] != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->524");
            } else {
                widget.setBackGroundColor(getColor(firstColor));
            }
        } else {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->529");
        }
        var colorVector = json["ColorVector"];
        if (colorVector) {
            var colorVectorX = getParam(colorVector["ScaleX"], 1);
            var colorVectorY = getParam(colorVector["ScaleY"], 1);
            widget.setBackGroundColorVector(cc.p(colorVectorX, colorVectorY));
        }
        loadTexture(json["FileData"], resourcePath, function(path, type) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->538");
        });
        var innerNodeSize = json["InnerNodeSize"];
        var innerSize = cc.size(innerNodeSize["Width"] || 0, innerNodeSize["Height"] || 0);
        widget.setInnerContainerSize(innerSize);
        var direction = 0;
        if (json["ScrollDirectionType"] == "Vertical") {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->545");
        }
        if (json["ScrollDirectionType"] == "Horizontal") {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->548");
        }
        if (json["ScrollDirectionType"] == "Vertical_Horizontal") {
            direction = 3;
        }
        widget.setDirection(direction);
        var bounceEnabled = getParam(json["IsBounceEnabled"], false);
        widget.setBounceEnabled(bounceEnabled);
        return widget;
    };
    parser.initImageView = function(json, resourcePath) {
        var widget = new ccui.ImageView;
        loadTexture(json["FileData"], resourcePath, function(path, type) {
            widget.loadTexture(path, type);
        });
        loadTexture(json["ImageFileData"], resourcePath, function(path, type) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->564");
        });
        var scale9Enabled = json["Scale9Enable"];
        if (scale9Enabled) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->568");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->569");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->570");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->571");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->572");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->573");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->574");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->575");
        } else {
            setContentSize(widget, json["Size"]);
        }
        this.widgetAttributes(widget, json);
        return widget;
    };
    parser.initLoadingBar = function(json, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->583");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->584");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->585");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->586");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->587");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->588");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->589");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->590");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->591");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->592");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->593");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->594");
    };
    parser.initSlider = function(json, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->597");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->598");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->599");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->600");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->601");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->602");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->603");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->604");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->605");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->606");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->607");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->608");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->609");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->610");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->611");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->612");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->613");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->614");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->615");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->616");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->617");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->618");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->619");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->620");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->621");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->622");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->623");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->624");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->625");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->626");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->627");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->628");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->629");
    };
    parser.initPageView = function(json, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->632");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->633");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->634");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->635");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->636");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->637");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->638");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->639");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->640");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->641");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->642");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->643");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->644");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->645");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->646");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->647");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->648");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->649");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->650");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->651");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->652");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->653");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->654");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->655");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->656");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->657");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->658");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->659");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->660");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->661");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->662");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->663");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->664");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->665");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->666");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->667");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->668");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->669");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->670");
    };
    parser.initListView = function(json, resourcePath) {
        var widget = new ccui.ListView;
        this.widgetAttributes(widget, json);
        var clipEnabled = json["ClipAble"] || false;
        widget.setClippingEnabled(clipEnabled);
        var colorType = getParam(json["ComboBoxIndex"], 0);
        widget.setBackGroundColorType(colorType);
        var bgColorOpacity = getParam(json["BackColorAlpha"], 255);
        var backGroundScale9Enabled = json["Scale9Enable"];
        if (backGroundScale9Enabled) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->682");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->683");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->684");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->685");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->686");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->687");
        }
        var directionType = getParam(json["DirectionType"], ccui.ListView.DIR_HORIZONTAL);
        var verticalType = getParam(json["VerticalType"], "Align_Left");
        var horizontalType = getParam(json["HorizontalType"], "Align_Top");
        if (!directionType) {
            widget.setDirection(ccui.ScrollView.DIR_HORIZONTAL);
            if (verticalType == "Align_Bottom") {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->695");
            } else {
                if (verticalType == "Align_VerticalCenter") {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->698");
                } else {
                    widget.setGravity(ccui.ListView.GRAVITY_TOP);
                }
            }
        } else {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->704");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->705");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->706");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->707");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->708");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->709");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->710");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->711");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->712");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->713");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->714");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->715");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->716");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->717");
        }
        var bounceEnabled = getParam(json["IsBounceEnabled"], false);
        widget.setBounceEnabled(bounceEnabled);
        var itemMargin = json["ItemMargin"] || 0;
        widget.setItemsMargin(itemMargin);
        var innerSize = json["InnerNodeSize"];
        if (innerSize != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->725");
        }
        var firstColor = json["FirstColor"];
        var endColor = json["EndColor"];
        if (firstColor && endColor) {
            if (endColor["R"] != null && endColor["G"] != null && endColor["B"] != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->731");
            } else {
                widget.setBackGroundColor(getColor(firstColor));
            }
        } else {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->736");
        }
        var colorVector = json["ColorVector"];
        if (colorVector != null && colorVector["ScaleX"] != null && colorVector["ScaleY"] != null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->740");
        }
        if (bgColorOpacity != null) {
            widget.setBackGroundColorOpacity(bgColorOpacity);
        }
        loadTexture(json["FileData"], resourcePath, function(path, type) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->746");
        });
        setContentSize(widget, json["Size"]);
        return widget;
    };
    parser.initTextAtlas = function(json, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->752");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->753");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->754");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->755");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->756");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->757");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->758");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->759");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->760");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->761");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->762");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->763");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->764");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->765");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->766");
    };
    parser.initTextBMFont = function(json, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->769");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->770");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->771");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->772");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->773");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->774");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->775");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->776");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->777");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->778");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->779");
    };
    parser.initTextField = function(json, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->782");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->783");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->784");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->785");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->786");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->787");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->788");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->789");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->790");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->791");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->792");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->793");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->794");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->795");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->796");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->797");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->798");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->799");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->800");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->801");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->802");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->803");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->804");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->805");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->806");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->807");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->808");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->809");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->810");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->811");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->812");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->813");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->814");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->815");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->816");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->817");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->818");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->819");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->820");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->821");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->822");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->823");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->824");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->825");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->826");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->827");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->828");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->829");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->830");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->831");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->832");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->833");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->834");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->835");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->836");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->837");
    };
    parser.initSimpleAudio = function(json, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->840");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->841");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->842");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->843");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->844");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->845");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->846");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->847");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->848");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->849");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->850");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->851");
    };
    parser.initGameMap = function(json, resourcePath) {
        var node = null;
        loadTexture(json["FileData"], resourcePath, function(path, type) {
            if (type == 0) {
                node = new cc.TMXTiledMap(path);
            }
            parser.generalAttributes(node, json);
        });
        return node;
    };
    parser.initProjectNode = function(json, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->864");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->865");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->866");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->867");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->868");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->869");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->870");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->871");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->872");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->873");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->874");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->875");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->876");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->877");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->878");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->879");
    };
    var getFileName = function(name) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->882");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->883");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->884");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->885");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->886");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->887");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->888");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->889");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->890");
    };
    parser.initArmature = function(json, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->893");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->894");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->895");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->896");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->897");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->898");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->899");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->900");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->901");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->902");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->903");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->904");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->905");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->906");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->907");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->908");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->909");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->910");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->911");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->912");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->913");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->914");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->915");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->916");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->917");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->918");
    };
    var loadedPlist = {};
    var loadTexture = function(json, resourcePath, cb) {
        if (json != null) {
            var path = json["Path"];
            var type;
            if (json["Type"] == "Default" || json["Type"] == "Normal") {
                type = 0;
            } else {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->928");
            }
            var plist = json["Plist"];
            if (plist) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->932");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->933");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->934");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->935");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->936");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->937");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->938");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->939");
            }
            if (type !== 0) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->942");
            } else {
                cb(resourcePath + path, type);
            }
        }
    };
    var getColor = function(json) {
        if (!json) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-2.x.js->950");
        }
        var r = json["R"] != null ? json["R"] : 255;
        var g = json["G"] != null ? json["G"] : 255;
        var b = json["B"] != null ? json["B"] : 255;
        return cc.color(r, g, b);
    };
    var setContentSize = function(node, size) {
        var x = size["X"] || 0;
        var y = size["Y"] || 0;
        if (size) {
            node.setContentSize(cc.size(x, y));
        }
    };
    var register = [ {
        name: "SingleNodeObjectData",
        handle: parser.initSingleNode
    }, {
        name: "LayerObjectData",
        handle: parser.initSingleNode
    }, {
        name: "SpriteObjectData",
        handle: parser.initSprite
    }, {
        name: "ParticleObjectData",
        handle: parser.initParticle
    }, {
        name: "PanelObjectData",
        handle: parser.initPanel
    }, {
        name: "TextObjectData",
        handle: parser.initText
    }, {
        name: "ButtonObjectData",
        handle: parser.initButton
    }, {
        name: "CheckBoxObjectData",
        handle: parser.initCheckBox
    }, {
        name: "ScrollViewObjectData",
        handle: parser.initScrollView
    }, {
        name: "ImageViewObjectData",
        handle: parser.initImageView
    }, {
        name: "LoadingBarObjectData",
        handle: parser.initLoadingBar
    }, {
        name: "SliderObjectData",
        handle: parser.initSlider
    }, {
        name: "PageViewObjectData",
        handle: parser.initPageView
    }, {
        name: "ListViewObjectData",
        handle: parser.initListView
    }, {
        name: "TextAtlasObjectData",
        handle: parser.initTextAtlas
    }, {
        name: "TextBMFontObjectData",
        handle: parser.initTextBMFont
    }, {
        name: "TextFieldObjectData",
        handle: parser.initTextField
    }, {
        name: "SimpleAudioObjectData",
        handle: parser.initSimpleAudio
    }, {
        name: "GameMapObjectData",
        handle: parser.initGameMap
    }, {
        name: "ProjectNodeObjectData",
        handle: parser.initProjectNode
    }, {
        name: "ArmatureNodeObjectData",
        handle: parser.initArmature
    } ];
    register.forEach(function(item) {
        parser.registerParser(item.name, function(options, resourcePath) {
            var node = item.handle.call(this, options, resourcePath);
            this.parseChild(node, options["Children"], resourcePath);
            DEBUG && node && (node.__parserName = item.name);
            return node;
        });
    });
    load.registerParser("timeline", "2.*", parser);
})(ccs._load, ccs._parser);