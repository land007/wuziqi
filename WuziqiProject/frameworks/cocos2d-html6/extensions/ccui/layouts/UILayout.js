ccui.Layout = ccui.Widget.extend({
    _clippingEnabled: false,
    _backGroundScale9Enabled: null,
    _backGroundImage: null,
    _backGroundImageFileName: null,
    _backGroundImageCapInsets: null,
    _colorType: null,
    _bgImageTexType: ccui.Widget.LOCAL_TEXTURE,
    _colorRender: null,
    _gradientRender: null,
    _color: null,
    _startColor: null,
    _endColor: null,
    _alongVector: null,
    _opacity: 255,
    _backGroundImageTextureSize: null,
    _layoutType: null,
    _doLayoutDirty: true,
    _clippingRectDirty: true,
    _clippingType: null,
    _clippingStencil: null,
    _scissorRectDirty: false,
    _clippingRect: null,
    _clippingParent: null,
    _className: "Layout",
    _backGroundImageColor: null,
    _finalPositionX: 0,
    _finalPositionY: 0,
    _backGroundImageOpacity: 0,
    _loopFocus: false,
    __passFocusToChild: true,
    _isFocusPassing: false,
    _isInterceptTouch: false,
    ctor: function() {
        this._layoutType = ccui.Layout.ABSOLUTE;
        this._widgetType = ccui.Widget.TYPE_CONTAINER;
        this._clippingType = ccui.Layout.CLIPPING_STENCIL;
        this._colorType = ccui.Layout.BG_COLOR_NONE;
        ccui.Widget.prototype.ctor.call(this);
        this._backGroundImageCapInsets = cc.rect(0, 0, 0, 0);
        this._color = cc.color(255, 255, 255, 255);
        this._startColor = cc.color(255, 255, 255, 255);
        this._endColor = cc.color(255, 255, 255, 255);
        this._alongVector = cc.p(0, -1);
        this._backGroundImageTextureSize = cc.size(0, 0);
        this._clippingRect = cc.rect(0, 0, 0, 0);
        this._backGroundImageColor = cc.color(255, 255, 255, 255);
    },
    onEnter: function() {
        ccui.Widget.prototype.onEnter.call(this);
        if (this._clippingStencil) {
            this._clippingStencil.onEnter();
        }
        this._doLayoutDirty = true;
        this._clippingRectDirty = true;
    },
    onExit: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->58");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->59");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->60");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->61");
    },
    setLoopFocus: function(loop) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->64");
    },
    isLoopFocus: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->67");
    },
    setPassFocusToChild: function(pass) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->70");
    },
    isPassFocusToChild: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->73");
    },
    findNextFocusedWidget: function(direction, current) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->76");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->77");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->78");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->79");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->80");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->81");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->82");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->83");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->84");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->85");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->86");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->87");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->88");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->89");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->90");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->91");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->92");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->93");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->94");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->95");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->96");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->97");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->98");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->99");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->100");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->101");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->102");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->103");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->104");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->105");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->106");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->107");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->108");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->109");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->110");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->111");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->112");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->113");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->114");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->116");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->117");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->118");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->119");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->120");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->121");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->124");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->125");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->126");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->127");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->128");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->129");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->130");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->131");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->132");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->133");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->134");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->135");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->136");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->137");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->138");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->139");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->140");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->141");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->142");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->143");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->144");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->145");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->146");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->147");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->148");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->149");
    },
    onPassFocusToChild: null,
    init: function() {
        if (ccui.Widget.prototype.init.call(this)) {
            this.ignoreContentAdaptWithSize(false);
            this.setContentSize(cc.size(0, 0));
            this.setAnchorPoint(0, 0);
            this.onPassFocusToChild = this._findNearestChildWidgetIndex.bind(this);
            return true;
        }
        return false;
    },
    addChild: function(widget, zOrder, tag) {
        if (widget instanceof ccui.Widget) {
            this._supplyTheLayoutParameterLackToChild(widget);
        }
        ccui.Widget.prototype.addChild.call(this, widget, zOrder, tag);
        this._doLayoutDirty = true;
    },
    removeChild: function(widget, cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->170");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->171");
    },
    removeAllChildren: function(cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->174");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->175");
    },
    removeAllChildrenWithCleanup: function(cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->178");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->179");
    },
    isClippingEnabled: function() {
        return this._clippingEnabled;
    },
    visit: function(parentCmd) {
        if (!this._visible) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->186");
        }
        this._adaptRenderers();
        this._doLayout();
        if (this._clippingEnabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->191");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->192");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->193");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->194");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->195");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->196");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->197");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->198");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->199");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->200");
        } else {
            ccui.Widget.prototype.visit.call(this, parentCmd);
        }
    },
    setClippingEnabled: function(able) {
        if (able == this._clippingEnabled) {
            return;
        }
        this._clippingEnabled = able;
        switch (this._clippingType) {
          case ccui.Layout.CLIPPING_STENCIL:
            if (able) {
                this._clippingStencil = new cc.DrawNode;
                this._renderCmd.rebindStencilRendering(this._clippingStencil);
                if (this._running) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->216");
                }
                this._setStencilClippingSize(this._contentSize);
            } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->220");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->221");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->222");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->223");
            }
            break;
          default:
            break;
        }
    },
    setClippingType: function(type) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->231");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->232");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->233");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->234");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->235");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->236");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->237");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->238");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->239");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->240");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->241");
    },
    getClippingType: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->244");
    },
    _setStencilClippingSize: function(size) {
        if (this._clippingEnabled && this._clippingType == ccui.Layout.CLIPPING_STENCIL) {
            var rect = [];
            rect[0] = cc.p(0, 0);
            rect[1] = cc.p(size.width, 0);
            rect[2] = cc.p(size.width, size.height);
            rect[3] = cc.p(0, size.height);
            var green = cc.color.GREEN;
            this._clippingStencil.clear();
            this._clippingStencil.drawPoly(rect, 4, green, 0, green);
        }
    },
    _getClippingRect: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->259");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->260");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->261");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->262");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->263");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->264");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->265");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->266");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->267");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->268");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->269");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->270");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->271");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->272");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->273");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->274");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->275");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->276");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->277");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->278");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->279");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->280");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->281");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->282");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->283");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->284");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->285");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->286");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->287");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->288");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->289");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->290");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->291");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->292");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->293");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->294");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->295");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->296");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->297");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->298");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->299");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->300");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->301");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->302");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->303");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->304");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->305");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->306");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->307");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->308");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->309");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->310");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->311");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->312");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->313");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->314");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->315");
    },
    _onSizeChanged: function() {
        ccui.Widget.prototype._onSizeChanged.call(this);
        var locContentSize = this._contentSize;
        this._setStencilClippingSize(locContentSize);
        this._doLayoutDirty = true;
        this._clippingRectDirty = true;
        if (this._backGroundImage) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->324");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->325");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->326");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->327");
        }
        if (this._colorRender) {
            this._colorRender.setContentSize(locContentSize);
        }
        if (this._gradientRender) {
            this._gradientRender.setContentSize(locContentSize);
        }
    },
    setBackGroundImageScale9Enabled: function(able) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->337");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->338");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->339");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->340");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->341");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->342");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->343");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->344");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->345");
    },
    isBackGroundImageScale9Enabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->348");
    },
    setBackGroundImage: function(fileName, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->351");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->352");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->353");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->354");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->355");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->356");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->357");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->358");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->359");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->360");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->361");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->362");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->363");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->364");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->365");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->366");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->367");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->368");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->369");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->370");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->371");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->372");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->373");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->374");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->375");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->376");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->377");
    },
    setBackGroundImageCapInsets: function(capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->380");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->381");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->382");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->383");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->384");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->385");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->386");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->387");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->388");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->389");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->390");
    },
    getBackGroundImageCapInsets: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->393");
    },
    _supplyTheLayoutParameterLackToChild: function(locChild) {
        if (!locChild) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->397");
        }
        switch (this._layoutType) {
          case ccui.Layout.ABSOLUTE:
            break;
          case ccui.Layout.LINEAR_HORIZONTAL:
          case ccui.Layout.LINEAR_VERTICAL:
            var layoutParameter = locChild.getLayoutParameter(ccui.LayoutParameter.LINEAR);
            if (!layoutParameter) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->406");
            }
            break;
          case ccui.Layout.RELATIVE:
            var layoutParameter = locChild.getLayoutParameter(ccui.LayoutParameter.RELATIVE);
            if (!layoutParameter) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->412");
            }
            break;
          default:
            break;
        }
    },
    _addBackGroundImage: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->420");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->421");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->422");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->423");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->424");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->425");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->426");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->427");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->428");
    },
    removeBackGroundImage: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->431");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->432");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->433");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->434");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->435");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->436");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->437");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->438");
    },
    setBackGroundColorType: function(type) {
        if (this._colorType == type) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->442");
        }
        switch (this._colorType) {
          case ccui.Layout.BG_COLOR_NONE:
            if (this._colorRender) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->447");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->448");
            }
            if (this._gradientRender) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->451");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->452");
            }
            break;
          case ccui.Layout.BG_COLOR_SOLID:
            if (this._colorRender) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->457");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->458");
            }
            break;
          case ccui.Layout.BG_COLOR_GRADIENT:
            if (this._gradientRender) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->463");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->464");
            }
            break;
          default:
            break;
        }
        this._colorType = type;
        switch (this._colorType) {
          case ccui.Layout.BG_COLOR_NONE:
            break;
          case ccui.Layout.BG_COLOR_SOLID:
            this._colorRender = new cc.LayerColor;
            this._colorRender.setContentSize(this._contentSize);
            this._colorRender.setOpacity(this._opacity);
            this._colorRender.setColor(this._color);
            this.addProtectedChild(this._colorRender, ccui.Layout.BACKGROUND_RENDERER_ZORDER, -1);
            break;
          case ccui.Layout.BG_COLOR_GRADIENT:
            this._gradientRender = new cc.LayerGradient(cc.color(255, 0, 0, 255), cc.color(0, 255, 0, 255));
            this._gradientRender.setContentSize(this._contentSize);
            this._gradientRender.setOpacity(this._opacity);
            this._gradientRender.setStartColor(this._startColor);
            this._gradientRender.setEndColor(this._endColor);
            this._gradientRender.setVector(this._alongVector);
            this.addProtectedChild(this._gradientRender, ccui.Layout.BACKGROUND_RENDERER_ZORDER, -1);
            break;
          default:
            break;
        }
    },
    getBackGroundColorType: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->495");
    },
    setBackGroundColor: function(color, endColor) {
        if (!endColor) {
            this._color.r = color.r;
            this._color.g = color.g;
            this._color.b = color.b;
            if (this._colorRender) {
                this._colorRender.setColor(color);
            }
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->506");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->507");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->508");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->509");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->510");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->511");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->512");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->513");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->514");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->515");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->516");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->517");
        }
    },
    getBackGroundColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->521");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->522");
    },
    getBackGroundStartColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->525");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->526");
    },
    getBackGroundEndColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->529");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->530");
    },
    setBackGroundColorOpacity: function(opacity) {
        this._opacity = opacity;
        switch (this._colorType) {
          case ccui.Layout.BG_COLOR_NONE:
            break;
          case ccui.Layout.BG_COLOR_SOLID:
            this._colorRender.setOpacity(opacity);
            break;
          case ccui.Layout.BG_COLOR_GRADIENT:
            this._gradientRender.setOpacity(opacity);
            break;
          default:
            break;
        }
    },
    getBackGroundColorOpacity: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->548");
    },
    setBackGroundColorVector: function(vector) {
        this._alongVector.x = vector.x;
        this._alongVector.y = vector.y;
        if (this._gradientRender) {
            this._gradientRender.setVector(vector);
        }
    },
    getBackGroundColorVector: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->558");
    },
    setBackGroundImageColor: function(color) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->561");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->562");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->563");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->564");
    },
    setBackGroundImageOpacity: function(opacity) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->567");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->568");
    },
    getBackGroundImageColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->571");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->572");
    },
    getBackGroundImageOpacity: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->575");
    },
    _updateBackGroundImageColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->578");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->579");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->580");
    },
    getBackGroundImageTextureSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->583");
    },
    setLayoutType: function(type) {
        this._layoutType = type;
        var layoutChildrenArray = this._children;
        var locChild = null;
        for (var i = 0; i < layoutChildrenArray.length; i++) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->590");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->591");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->592");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->593");
        }
        this._doLayoutDirty = true;
    },
    getLayoutType: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->598");
    },
    requestDoLayout: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->601");
    },
    _doLayout: function() {
        if (!this._doLayoutDirty) {
            return;
        }
        this.sortAllChildren();
        var executant = ccui.getLayoutManager(this._layoutType);
        if (executant) {
            executant._doLayout(this);
        }
        this._doLayoutDirty = false;
    },
    _getLayoutContentSize: function() {
        return this.getContentSize();
    },
    _getLayoutElements: function() {
        return this.getChildren();
    },
    _updateBackGroundImageOpacity: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->621");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->622");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->623");
    },
    _updateBackGroundImageRGBA: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->626");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->627");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->628");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->629");
    },
    _getLayoutAccumulatedSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->632");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->633");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->634");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->635");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->636");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->637");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->638");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->639");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->640");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->641");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->642");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->643");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->644");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->645");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->646");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->647");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->648");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->649");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->650");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->651");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->652");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->653");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->654");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->655");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->656");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->657");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->658");
    },
    _findNearestChildWidgetIndex: function(direction, baseWidget) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->661");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->662");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->663");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->664");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->665");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->666");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->667");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->668");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->669");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->670");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->671");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->672");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->673");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->674");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->675");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->676");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->677");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->678");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->679");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->680");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->681");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->682");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->683");
    },
    _findFarthestChildWidgetIndex: function(direction, baseWidget) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->686");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->687");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->688");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->689");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->690");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->691");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->692");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->693");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->694");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->695");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->696");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->697");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->698");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->699");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->700");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->701");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->702");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->703");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->704");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->705");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->706");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->707");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->708");
    },
    _calculateNearestDistance: function(baseWidget) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->711");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->712");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->713");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->714");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->715");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->716");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->717");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->718");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->719");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->720");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->721");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->722");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->723");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->724");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->725");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->726");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->727");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->728");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->729");
    },
    _calculateFarthestDistance: function(baseWidget) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->732");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->733");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->734");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->735");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->736");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->737");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->738");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->739");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->740");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->741");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->742");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->743");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->744");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->745");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->746");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->747");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->748");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->749");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->750");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->751");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->752");
    },
    _findProperSearchingFunctor: function(direction, baseWidget) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->755");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->756");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->757");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->758");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->759");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->760");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->761");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->762");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->763");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->764");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->765");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->766");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->767");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->768");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->769");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->770");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->771");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->772");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->773");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->774");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->775");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->776");
    },
    _findFirstNonLayoutWidget: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->779");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->780");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->781");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->782");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->783");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->784");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->785");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->786");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->787");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->788");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->789");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->790");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->791");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->792");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->793");
    },
    _findFirstFocusEnabledWidgetIndex: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->796");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->797");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->798");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->799");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->800");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->801");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->802");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->803");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->804");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->805");
    },
    _findFocusEnabledChildWidgetByIndex: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->808");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->809");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->810");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->811");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->812");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->813");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->814");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->815");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->816");
    },
    _getWorldCenterPoint: function(widget) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->819");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->820");
    },
    _getNextFocusedWidget: function(direction, current) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->823");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->824");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->825");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->826");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->827");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->828");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->829");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->830");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->831");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->832");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->833");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->834");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->835");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->836");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->837");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->838");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->839");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->840");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->841");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->842");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->843");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->844");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->845");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->846");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->847");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->848");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->849");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->850");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->851");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->852");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->853");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->854");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->855");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->856");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->857");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->858");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->859");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->860");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->861");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->862");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->863");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->864");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->865");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->866");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->867");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->868");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->869");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->870");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->871");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->872");
    },
    _getPreviousFocusedWidget: function(direction, current) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->875");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->876");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->877");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->878");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->879");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->880");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->881");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->882");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->883");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->884");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->885");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->886");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->887");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->888");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->889");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->890");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->891");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->892");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->893");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->894");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->895");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->896");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->897");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->898");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->899");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->900");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->901");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->902");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->903");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->904");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->905");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->906");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->907");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->908");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->909");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->910");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->911");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->912");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->913");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->914");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->915");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->916");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->917");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->918");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->919");
    },
    _getChildWidgetByIndex: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->922");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->923");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->924");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->925");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->926");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->927");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->928");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->929");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->930");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->931");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->932");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->933");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->934");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->935");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->936");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->937");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->938");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->939");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->940");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->941");
    },
    _isLastWidgetInContainer: function(widget, direction) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->944");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->945");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->946");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->947");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->948");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->949");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->950");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->951");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->952");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->953");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->954");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->955");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->956");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->957");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->958");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->959");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->960");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->961");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->962");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->963");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->964");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->965");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->966");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->967");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->968");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->969");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->970");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->971");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->972");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->973");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->974");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->975");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->976");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->977");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->978");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->979");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->980");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->981");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->982");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->983");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->984");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->985");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->986");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->987");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->988");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->989");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->990");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->991");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->992");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->993");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->994");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->995");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->996");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->997");
    },
    _isWidgetAncestorSupportLoopFocus: function(widget, direction) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1000");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1001");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1002");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1003");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1004");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1005");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1006");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1007");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1008");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1009");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1010");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1011");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1012");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1013");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1014");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1015");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1016");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1017");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1018");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1019");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1020");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1021");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1022");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1023");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1024");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1025");
    },
    _passFocusToChild: function(direction, current) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1028");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1029");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1030");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1031");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1032");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1033");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1034");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1035");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1036");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1037");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1038");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1039");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1040");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1041");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1042");
    },
    _checkFocusEnabledChild: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1045");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1046");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1047");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1048");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1049");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1050");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1051");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1052");
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1055");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1058");
    },
    _copyClonedWidgetChildren: function(model) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1061");
    },
    _copySpecialProperties: function(layout) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1064");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1065");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1066");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1067");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1068");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1069");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1070");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1071");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1072");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1073");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1074");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1075");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1076");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1077");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1078");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1079");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1080");
    },
    forceDoLayout: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1083");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1084");
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
            return new ccui.Layout.WebGLRenderCmd(this);
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1090");
        }
    }
});
var _p = ccui.Layout.prototype;
_p.clippingEnabled;
cc.defineGetterSetter(_p, "clippingEnabled", _p.isClippingEnabled, _p.setClippingEnabled);
_p.clippingType;
cc.defineGetterSetter(_p, "clippingType", null, _p.setClippingType);
_p.layoutType;
cc.defineGetterSetter(_p, "layoutType", _p.getLayoutType, _p.setLayoutType);
_p = null;
ccui.Layout.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayout.js->1103");
};
ccui.Layout.BG_COLOR_NONE = 0;
ccui.Layout.BG_COLOR_SOLID = 1;
ccui.Layout.BG_COLOR_GRADIENT = 2;
ccui.Layout.ABSOLUTE = 0;
ccui.Layout.LINEAR_VERTICAL = 1;
ccui.Layout.LINEAR_HORIZONTAL = 2;
ccui.Layout.RELATIVE = 3;
ccui.Layout.CLIPPING_STENCIL = 0;
ccui.Layout.CLIPPING_SCISSOR = 1;
ccui.Layout.BACKGROUND_IMAGE_ZORDER = -2;
ccui.Layout.BACKGROUND_RENDERER_ZORDER = -2;