ccui._FocusNavigationController = cc.Class.extend({
    _keyboardListener: null,
    _firstFocusedWidget: null,
    _enableFocusNavigation: false,
    _keyboardEventPriority: 1,
    enableFocusNavigation: function(flag) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->7");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->8");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->9");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->10");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->11");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->12");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->13");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->14");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->15");
    },
    _setFirstFocsuedWidget: function(widget) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->18");
    },
    _onKeyPressed: function(keyCode, event) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->21");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->22");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->23");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->24");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->25");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->26");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->27");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->28");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->29");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->30");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->31");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->32");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->33");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->34");
    },
    _addKeyboardEventListener: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->37");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->38");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->39");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->40");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->41");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->42");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->43");
    },
    _removeKeyboardEventListener: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->46");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->47");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->48");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->49");
    }
});
ccui.__LAYOUT_COMPONENT_NAME = "__ui_layout";
ccui.Widget = ccui.ProtectedNode.extend({
    _enabled: true,
    _bright: true,
    _touchEnabled: false,
    _brightStyle: null,
    _touchBeganPosition: null,
    _touchMovePosition: null,
    _touchEndPosition: null,
    _touchEventListener: null,
    _touchEventSelector: null,
    _name: "default",
    _widgetType: null,
    _actionTag: 0,
    _customSize: null,
    _layoutParameterDictionary: null,
    _layoutParameterType: 0,
    _focused: false,
    _focusEnabled: true,
    _ignoreSize: false,
    _affectByClipping: false,
    _sizeType: null,
    _sizePercent: null,
    _positionType: null,
    _positionPercent: null,
    _hit: false,
    _nodes: null,
    _touchListener: null,
    _className: "Widget",
    _flippedX: false,
    _flippedY: false,
    _opacity: 255,
    _highlight: false,
    _touchEventCallback: null,
    _clickEventListener: null,
    _propagateTouchEvents: true,
    _unifySize: false,
    _callbackName: null,
    _callbackType: null,
    _usingLayoutComponent: false,
    ctor: function() {
        cc.ProtectedNode.prototype.ctor.call(this);
        this._brightStyle = ccui.Widget.BRIGHT_STYLE_NONE;
        this._touchBeganPosition = cc.p(0, 0);
        this._touchMovePosition = cc.p(0, 0);
        this._touchEndPosition = cc.p(0, 0);
        this._widgetType = ccui.Widget.TYPE_WIDGET;
        this._customSize = cc.size(0, 0);
        this._layoutParameterDictionary = {};
        this._sizeType = ccui.Widget.SIZE_ABSOLUTE;
        this._sizePercent = cc.p(0, 0);
        this._positionType = ccui.Widget.POSITION_ABSOLUTE;
        this._positionPercent = cc.p(0, 0);
        this._nodes = [];
        this._layoutParameterType = ccui.LayoutParameter.NONE;
        this.init();
    },
    init: function() {
        if (cc.ProtectedNode.prototype.init.call(this)) {
            this._layoutParameterDictionary = {};
            this._initRenderer();
            this.setBright(true);
            this.onFocusChanged = this.onFocusChange.bind(this);
            this.onNextFocusedWidget = null;
            this.setAnchorPoint(cc.p(.5, .5));
            this.ignoreContentAdaptWithSize(true);
            return true;
        }
        return false;
    },
    onEnter: function() {
        var locListener = this._touchListener;
        if (locListener && !locListener._isRegistered() && this._touchEnabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->125");
        }
        if (!this._usingLayoutComponent) {
            this.updateSizeAndPosition();
        }
        cc.ProtectedNode.prototype.onEnter.call(this);
    },
    onExit: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->133");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->134");
    },
    _getOrCreateLayoutComponent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->137");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->138");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->139");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->140");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->141");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->142");
    },
    getWidgetParent: function() {
        var widget = this.getParent();
        if (widget instanceof ccui.Widget) {
            return widget;
        }
        return null;
    },
    _updateContentSizeWithTextureSize: function(size) {
        if (this._unifySize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->153");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->154");
        }
        this.setContentSize(this._ignoreSize ? size : this._customSize);
    },
    _isAncestorsEnabled: function() {
        var parentWidget = this._getAncensterWidget(this);
        if (parentWidget == null) {
            return true;
        }
        if (parentWidget && !parentWidget.isEnabled()) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->164");
        }
        return parentWidget._isAncestorsEnabled();
    },
    setPropagateTouchEvents: function(isPropagate) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->169");
    },
    isPropagateTouchEvents: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->172");
    },
    setSwallowTouches: function(swallow) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->175");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->176");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->177");
    },
    isSwallowTouches: function() {
        if (this._touchListener) {
            return this._touchListener.isSwallowTouches();
        }
        return false;
    },
    _getAncensterWidget: function(node) {
        if (null == node) {
            return null;
        }
        var parent = node.getParent();
        if (null == parent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->191");
        }
        if (parent instanceof ccui.Widget) {
            return parent;
        } else {
            return this._getAncensterWidget(parent.getParent());
        }
    },
    _isAncestorsVisible: function(node) {
        if (null == node) {
            return true;
        }
        var parent = node.getParent();
        if (parent && !parent.isVisible()) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->205");
        }
        return this._isAncestorsVisible(parent);
    },
    _cleanupWidget: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->210");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->211");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->212");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->213");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->214");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->215");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->216");
    },
    setEnabled: function(enabled) {
        this._enabled = enabled;
    },
    _initRenderer: function() {},
    setContentSize: function(contentSize, height) {
        var locWidth = height === undefined ? contentSize.width : contentSize;
        var locHeight = height === undefined ? contentSize.height : height;
        cc.Node.prototype.setContentSize.call(this, locWidth, locHeight);
        this._customSize.width = locWidth;
        this._customSize.height = locHeight;
        if (this._unifySize) {} else {
            if (this._ignoreSize) {
                this._contentSize = this.getVirtualRendererSize();
            }
        }
        if (!this._usingLayoutComponent && this._running) {
            var widgetParent = this.getWidgetParent();
            var pSize = widgetParent ? widgetParent.getContentSize() : this._parent.getContentSize();
            this._sizePercent.x = pSize.width > 0 ? locWidth / pSize.width : 0;
            this._sizePercent.y = pSize.height > 0 ? locHeight / pSize.height : 0;
        }
        this._onSizeChanged();
    },
    _setWidth: function(w) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->242");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->243");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->244");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->245");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->246");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->247");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->248");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->249");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->250");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->251");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->252");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->253");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->254");
    },
    _setHeight: function(h) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->257");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->258");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->259");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->260");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->261");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->262");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->263");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->264");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->265");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->266");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->267");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->268");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->269");
    },
    setSizePercent: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->272");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->273");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->274");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->275");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->276");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->277");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->278");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->279");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->280");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->281");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->282");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->283");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->284");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->285");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->286");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->287");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->288");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->289");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->290");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->291");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->292");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->293");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->294");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->295");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->296");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->297");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->298");
    },
    _setWidthPercent: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->301");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->302");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->303");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->304");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->305");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->306");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->307");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->308");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->309");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->310");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->311");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->312");
    },
    _setHeightPercent: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->315");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->316");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->317");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->318");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->319");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->320");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->321");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->322");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->323");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->324");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->325");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->326");
    },
    updateSizeAndPosition: function(parentSize) {
        if (!parentSize) {
            var widgetParent = this.getWidgetParent();
            if (widgetParent) {
                parentSize = widgetParent.getLayoutSize();
            } else {
                parentSize = this._parent.getContentSize();
            }
        }
        switch (this._sizeType) {
          case ccui.Widget.SIZE_ABSOLUTE:
            if (this._ignoreSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->340");
            } else {
                this.setContentSize(this._customSize);
            }
            this._sizePercent.x = parentSize.width > 0 ? this._customSize.width / parentSize.width : 0;
            this._sizePercent.y = parentSize.height > 0 ? this._customSize.height / parentSize.height : 0;
            break;
          case ccui.Widget.SIZE_PERCENT:
            var cSize = cc.size(parentSize.width * this._sizePercent.x, parentSize.height * this._sizePercent.y);
            if (this._ignoreSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->350");
            } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->352");
            }
            this._customSize.width = cSize.width;
            this._customSize.height = cSize.height;
            break;
          default:
            break;
        }
        this._onSizeChanged();
        var absPos = this.getPosition();
        switch (this._positionType) {
          case ccui.Widget.POSITION_ABSOLUTE:
            if (parentSize.width <= 0 || parentSize.height <= 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->365");
            } else {
                this._positionPercent.x = absPos.x / parentSize.width;
                this._positionPercent.y = absPos.y / parentSize.height;
            }
            break;
          case ccui.Widget.POSITION_PERCENT:
            absPos = cc.p(parentSize.width * this._positionPercent.x, parentSize.height * this._positionPercent.y);
            break;
          default:
            break;
        }
        if (this._parent instanceof ccui.ImageView) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->378");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->379");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->380");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->381");
        }
        this.setPosition(absPos);
    },
    setSizeType: function(type) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->386");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->387");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->388");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->389");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->390");
    },
    getSizeType: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->393");
    },
    ignoreContentAdaptWithSize: function(ignore) {
        if (this._unifySize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->397");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->398");
        }
        if (this._ignoreSize == ignore) {
            return;
        }
        this._ignoreSize = ignore;
        this.setContentSize(ignore ? this.getVirtualRendererSize() : this._customSize);
    },
    isIgnoreContentAdaptWithSize: function() {
        return this._ignoreSize;
    },
    getCustomSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->410");
    },
    getLayoutSize: function() {
        return cc.size(this._contentSize);
    },
    getSizePercent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->416");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->417");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->418");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->419");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->420");
    },
    _getWidthPercent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->423");
    },
    _getHeightPercent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->426");
    },
    getWorldPosition: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->429");
    },
    getVirtualRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->432");
    },
    getVirtualRendererSize: function() {
        return cc.size(this._contentSize);
    },
    _onSizeChanged: function() {
        if (!this._usingLayoutComponent) {
            var locChildren = this.getChildren();
            for (var i = 0, len = locChildren.length; i < len; i++) {
                var child = locChildren[i];
                if (child instanceof ccui.Widget) {
                    child.updateSizeAndPosition();
                }
            }
        }
    },
    setTouchEnabled: function(enable) {
        if (this._touchEnabled === enable) {
            return;
        }
        this._touchEnabled = enable;
        if (this._touchEnabled) {
            if (!this._touchListener) {
                this._touchListener = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: true,
                    onTouchBegan: this.onTouchBegan.bind(this),
                    onTouchMoved: this.onTouchMoved.bind(this),
                    onTouchEnded: this.onTouchEnded.bind(this)
                });
            }
            cc.eventManager.addListener(this._touchListener, this);
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->465");
        }
    },
    isTouchEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->469");
    },
    isHighlighted: function() {
        return this._highlight;
    },
    setHighlighted: function(highlight) {
        if (highlight == this._highlight) {
            return;
        }
        this._highlight = highlight;
        if (this._bright) {
            if (this._highlight) {
                this.setBrightStyle(ccui.Widget.BRIGHT_STYLE_HIGH_LIGHT);
            } else {
                this.setBrightStyle(ccui.Widget.BRIGHT_STYLE_NORMAL);
            }
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->486");
        }
    },
    isFocused: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->490");
    },
    setFocused: function(focus) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->493");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->494");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->495");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->496");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->497");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->498");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->499");
    },
    isFocusEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->502");
    },
    setFocusEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->505");
    },
    findNextFocusedWidget: function(direction, current) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->508");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->509");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->510");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->511");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->512");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->513");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->514");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->515");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->516");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->517");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->518");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->519");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->520");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->521");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->522");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->523");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->524");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->525");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->526");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->527");
    },
    requestFocus: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->530");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->531");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->532");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->533");
    },
    getCurrentFocusedWidget: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->536");
    },
    onFocusChanged: null,
    onNextFocusedWidget: null,
    interceptTouchEvent: function(eventType, sender, touch) {
        var widgetParent = this.getWidgetParent();
        if (widgetParent) {
            widgetParent.interceptTouchEvent(eventType, sender, touch);
        }
    },
    onFocusChange: function(widgetLostFocus, widgetGetFocus) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->547");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->548");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->549");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->550");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->551");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->552");
    },
    dispatchFocusEvent: function(widgetLostFocus, widgetGetFocus) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->555");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->556");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->557");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->558");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->559");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->560");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->561");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->562");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->563");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->564");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->565");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->566");
    },
    setBright: function(bright) {
        this._bright = bright;
        if (this._bright) {
            this._brightStyle = ccui.Widget.BRIGHT_STYLE_NONE;
            this.setBrightStyle(ccui.Widget.BRIGHT_STYLE_NORMAL);
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->574");
        }
    },
    setBrightStyle: function(style) {
        if (this._brightStyle == style) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->579");
        }
        style = style || ccui.Widget.BRIGHT_STYLE_NORMAL;
        this._brightStyle = style;
        switch (this._brightStyle) {
          case ccui.Widget.BRIGHT_STYLE_NORMAL:
            this._onPressStateChangedToNormal();
            break;
          case ccui.Widget.BRIGHT_STYLE_HIGH_LIGHT:
            this._onPressStateChangedToPressed();
            break;
          default:
            break;
        }
    },
    _onPressStateChangedToNormal: function() {},
    _onPressStateChangedToPressed: function() {},
    _onPressStateChangedToDisabled: function() {},
    _updateChildrenDisplayedRGBA: function() {
        this.setColor(this.getColor());
        this.setOpacity(this.getOpacity());
    },
    didNotSelectSelf: function() {},
    onTouchBegan: function(touch, event) {
        this._hit = false;
        if (this.isVisible() && this.isEnabled() && this._isAncestorsEnabled() && this._isAncestorsVisible(this)) {
            var touchPoint = touch.getLocation();
            this._touchBeganPosition.x = touchPoint.x;
            this._touchBeganPosition.y = touchPoint.y;
            if (this.hitTest(this._touchBeganPosition) && this.isClippingParentContainsPoint(this._touchBeganPosition)) {
                this._hit = true;
            }
        }
        if (!this._hit) {
            return false;
        }
        this.setHighlighted(true);
        if (this._propagateTouchEvents) {
            this.propagateTouchEvent(ccui.Widget.TOUCH_BEGAN, this, touch);
        }
        this._pushDownEvent();
        return true;
    },
    propagateTouchEvent: function(event, sender, touch) {
        var widgetParent = this.getWidgetParent();
        if (widgetParent) {
            widgetParent.interceptTouchEvent(event, sender, touch);
        }
    },
    onTouchMoved: function(touch, event) {
        var touchPoint = touch.getLocation();
        this._touchMovePosition.x = touchPoint.x;
        this._touchMovePosition.y = touchPoint.y;
        this.setHighlighted(this.hitTest(touchPoint));
        if (this._propagateTouchEvents) {
            this.propagateTouchEvent(ccui.Widget.TOUCH_MOVED, this, touch);
        }
        this._moveEvent();
    },
    onTouchEnded: function(touch, event) {
        var touchPoint = touch.getLocation();
        this._touchEndPosition.x = touchPoint.x;
        this._touchEndPosition.y = touchPoint.y;
        if (this._propagateTouchEvents) {
            this.propagateTouchEvent(ccui.Widget.TOUCH_ENDED, this, touch);
        }
        var highlight = this._highlight;
        this.setHighlighted(false);
        if (highlight) {
            this._releaseUpEvent();
        } else {
            this._cancelUpEvent();
        }
    },
    onTouchCancelled: function(touchPoint) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->654");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->655");
    },
    onTouchLongClicked: function(touchPoint) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->658");
    },
    _pushDownEvent: function() {
        if (this._touchEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->662");
        }
        if (this._touchEventListener && this._touchEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->665");
        }
    },
    _moveEvent: function() {
        if (this._touchEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->670");
        }
        if (this._touchEventListener && this._touchEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->673");
        }
    },
    _releaseUpEvent: function() {
        if (this._touchEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->678");
        }
        if (this._touchEventListener && this._touchEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->681");
        }
        if (this._clickEventListener) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->684");
        }
    },
    _cancelUpEvent: function() {
        if (this._touchEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->689");
        }
        if (this._touchEventListener && this._touchEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->692");
        }
    },
    longClickEvent: function() {},
    addTouchEventListener: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->697");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->698");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->699");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->700");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->701");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->702");
    },
    addClickEventListener: function(callback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->705");
    },
    hitTest: function(pt) {
        var bb = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        return cc.rectContainsPoint(bb, this.convertToNodeSpace(pt));
    },
    isClippingParentContainsPoint: function(pt) {
        this._affectByClipping = false;
        var parent = this.getParent();
        var clippingParent = null;
        while (parent) {
            if (parent instanceof ccui.Layout) {
                if (parent.isClippingEnabled()) {
                    this._affectByClipping = true;
                    clippingParent = parent;
                    break;
                }
            }
            parent = parent.getParent();
        }
        if (!this._affectByClipping) {
            return true;
        }
        if (clippingParent) {
            if (clippingParent.hitTest(pt)) {
                return clippingParent.isClippingParentContainsPoint(pt);
            }
            return false;
        }
        return true;
    },
    checkChildInfo: function(handleState, sender, touchPoint) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->737");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->738");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->739");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->740");
    },
    setPosition: function(pos, posY) {
        if (!this._usingLayoutComponent && this._running) {
            var widgetParent = this.getWidgetParent();
            if (widgetParent) {
                var pSize = widgetParent.getContentSize();
                if (pSize.width <= 0 || pSize.height <= 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->748");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->749");
                } else {
                    if (posY == undefined) {
                        this._positionPercent.x = pos.x / pSize.width;
                        this._positionPercent.y = pos.y / pSize.height;
                    } else {
                        this._positionPercent.x = pos / pSize.width;
                        this._positionPercent.y = posY / pSize.height;
                    }
                }
            }
        }
        cc.Node.prototype.setPosition.call(this, pos, posY);
    },
    setPositionX: function(x) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->764");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->765");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->766");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->767");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->768");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->769");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->770");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->771");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->772");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->773");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->774");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->775");
    },
    setPositionY: function(y) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->778");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->779");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->780");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->781");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->782");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->783");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->784");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->785");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->786");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->787");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->788");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->789");
    },
    setPositionPercent: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->792");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->793");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->794");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->795");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->796");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->797");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->798");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->799");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->800");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->801");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->802");
    },
    _setXPercent: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->805");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->806");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->807");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->808");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->809");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->810");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->811");
    },
    _setYPercent: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->814");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->815");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->816");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->817");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->818");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->819");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->820");
    },
    getPositionPercent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->823");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->824");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->825");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->826");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->827");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->828");
    },
    _getXPercent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->831");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->832");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->833");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->834");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->835");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->836");
    },
    _getYPercent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->839");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->840");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->841");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->842");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->843");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->844");
    },
    setPositionType: function(type) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->847");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->848");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->849");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->850");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->851");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->852");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->853");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->854");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->855");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->856");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->857");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->858");
    },
    getPositionType: function() {
        return this._positionType;
    },
    setFlippedX: function(flipX) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->864");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->865");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->866");
    },
    isFlippedX: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->869");
    },
    setFlippedY: function(flipY) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->872");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->873");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->874");
    },
    isFlippedY: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->877");
    },
    _adaptRenderers: function() {},
    isBright: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->881");
    },
    isEnabled: function() {
        return this._enabled;
    },
    getLeftBoundary: function() {
        return this.getPositionX() - this._getAnchorX() * this._contentSize.width;
    },
    getBottomBoundary: function() {
        return this.getPositionY() - this._getAnchorY() * this._contentSize.height;
    },
    getRightBoundary: function() {
        return this.getLeftBoundary() + this._contentSize.width;
    },
    getTopBoundary: function() {
        return this.getBottomBoundary() + this._contentSize.height;
    },
    getTouchBeganPosition: function() {
        return cc.p(this._touchBeganPosition);
    },
    getTouchMovePosition: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->902");
    },
    getTouchEndPosition: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->905");
    },
    getWidgetType: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->908");
    },
    setLayoutParameter: function(parameter) {
        if (!parameter) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->912");
        }
        this._layoutParameterDictionary[parameter.getLayoutType()] = parameter;
        this._layoutParameterType = parameter.getLayoutType();
    },
    getLayoutParameter: function(type) {
        type = type || this._layoutParameterType;
        return this._layoutParameterDictionary[type];
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->922");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->925");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->926");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->927");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->928");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->931");
    },
    _copyClonedWidgetChildren: function(model) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->934");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->935");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->936");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->937");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->938");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->939");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->940");
    },
    _copySpecialProperties: function(model) {},
    _copyProperties: function(widget) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->944");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->945");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->946");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->947");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->948");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->949");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->950");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->951");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->952");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->953");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->954");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->955");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->956");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->957");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->958");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->959");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->960");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->961");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->962");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->963");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->964");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->965");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->966");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->967");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->968");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->969");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->970");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->971");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->972");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->973");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->974");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->975");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->976");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->977");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->978");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->979");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->980");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->981");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->982");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->983");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->984");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->985");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->986");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->987");
    },
    setActionTag: function(tag) {
        this._actionTag = tag;
    },
    getActionTag: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->993");
    },
    getLeftInParent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->996");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->997");
    },
    getBottomInParent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1000");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1001");
    },
    getRightInParent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1004");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1005");
    },
    getTopInParent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1008");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1009");
    },
    getTouchEndPos: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1012");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1013");
    },
    getTouchMovePos: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1016");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1017");
    },
    clippingParentAreaContainPoint: function(pt) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1020");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1021");
    },
    getTouchStartPos: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1024");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1025");
    },
    setSize: function(size) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1028");
    },
    getSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1031");
    },
    addNode: function(node, zOrder, tag) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1034");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1035");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1036");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1037");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1038");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1039");
    },
    getNodeByTag: function(tag) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1042");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1043");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1044");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1045");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1046");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1047");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1048");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1049");
    },
    getNodes: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1052");
    },
    removeNode: function(node, cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1055");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1056");
    },
    removeNodeByTag: function(tag, cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1059");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1060");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1061");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1062");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1063");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1064");
    },
    removeAllNodes: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1067");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1068");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1069");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1070");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1071");
    },
    _findLayout: function() {
        cc.renderer.childrenOrderDirty = true;
        var layout = this._parent;
        while (layout) {
            if (layout._doLayout) {
                layout._doLayoutDirty = true;
                break;
            } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1081");
            }
        }
    },
    isUnifySizeEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1086");
    },
    setUnifySizeEnabled: function(enable) {
        this._unifySize = enable;
    },
    _ccEventCallback: null,
    addCCSEventListener: function(callback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1093");
    },
    setScaleX: function(scaleX) {
        if (this._flippedX) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1097");
        }
        cc.Node.prototype.setScaleX.call(this, scaleX);
    },
    setScaleY: function(scaleY) {
        if (this._flippedY) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1103");
        }
        cc.Node.prototype.setScaleY.call(this, scaleY);
    },
    setScale: function(scaleX, scaleY) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1108");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1109");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1110");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1111");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1112");
    },
    getScaleX: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1116");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1117");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1118");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1119");
    },
    getScaleY: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1124");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1125");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1126");
    },
    getScale: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1129");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1130");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1131");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1132");
    },
    setCallbackName: function(callbackName) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1135");
    },
    getCallbackName: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1138");
    },
    setCallbackType: function(callbackType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1141");
    },
    getCallbackType: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1144");
    },
    setLayoutComponentEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1147");
    },
    isLayoutComponentEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1150");
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
            return new ccui.Widget.WebGLRenderCmd(this);
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1156");
        }
    }
});
var _p = ccui.Widget.prototype;
_p.xPercent;
cc.defineGetterSetter(_p, "xPercent", _p._getXPercent, _p._setXPercent);
_p.yPercent;
cc.defineGetterSetter(_p, "yPercent", _p._getYPercent, _p._setYPercent);
_p.widthPercent;
cc.defineGetterSetter(_p, "widthPercent", _p._getWidthPercent, _p._setWidthPercent);
_p.heightPercent;
cc.defineGetterSetter(_p, "heightPercent", _p._getHeightPercent, _p._setHeightPercent);
_p.widgetParent;
cc.defineGetterSetter(_p, "widgetParent", _p.getWidgetParent);
_p.enabled;
cc.defineGetterSetter(_p, "enabled", _p.isEnabled, _p.setEnabled);
_p.focused;
cc.defineGetterSetter(_p, "focused", _p.isFocused, _p.setFocused);
_p.sizeType;
cc.defineGetterSetter(_p, "sizeType", _p.getSizeType, _p.setSizeType);
_p.widgetType;
cc.defineGetterSetter(_p, "widgetType", _p.getWidgetType);
_p.touchEnabled;
cc.defineGetterSetter(_p, "touchEnabled", _p.isTouchEnabled, _p.setTouchEnabled);
_p.updateEnabled;
cc.defineGetterSetter(_p, "updateEnabled", _p.isUpdateEnabled, _p.setUpdateEnabled);
_p.bright;
cc.defineGetterSetter(_p, "bright", _p.isBright, _p.setBright);
_p.name;
cc.defineGetterSetter(_p, "name", _p.getName, _p.setName);
_p.actionTag;
cc.defineGetterSetter(_p, "actionTag", _p.getActionTag, _p.setActionTag);
_p.opacity;
cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
_p = null;
ccui.Widget.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1193");
};
ccui.Widget._focusedWidget = null;
ccui.Widget._focusNavigationController = null;
ccui.Widget.enableDpadNavigation = function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1198");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1199");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1200");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1201");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1202");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1203");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1204");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1205");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1206");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1207");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1208");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1209");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1210");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1211");
};
ccui.Widget.getCurrentFocusedWidget = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/UIWidget.js->1214");
};
ccui.Widget.BRIGHT_STYLE_NONE = -1;
ccui.Widget.BRIGHT_STYLE_NORMAL = 0;
ccui.Widget.BRIGHT_STYLE_HIGH_LIGHT = 1;
ccui.Widget.TYPE_WIDGET = 0;
ccui.Widget.TYPE_CONTAINER = 1;
ccui.Widget.LEFT = 0;
ccui.Widget.RIGHT = 1;
ccui.Widget.UP = 2;
ccui.Widget.DOWN = 3;
ccui.Widget.LOCAL_TEXTURE = 0;
ccui.Widget.PLIST_TEXTURE = 1;
ccui.Widget.TOUCH_BEGAN = 0;
ccui.Widget.TOUCH_MOVED = 1;
ccui.Widget.TOUCH_ENDED = 2;
ccui.Widget.TOUCH_CANCELED = 3;
ccui.Widget.SIZE_ABSOLUTE = 0;
ccui.Widget.SIZE_PERCENT = 1;
ccui.Widget.POSITION_ABSOLUTE = 0;
ccui.Widget.POSITION_PERCENT = 1;