cc.Touches = [];
cc.TouchesIntergerDict = {};
cc.DENSITYDPI_DEVICE = "device-dpi";
cc.DENSITYDPI_HIGH = "high-dpi";
cc.DENSITYDPI_MEDIUM = "medium-dpi";
cc.DENSITYDPI_LOW = "low-dpi";
cc.__BrowserGetter = {
    init: function() {
        this.html = document.getElementsByTagName("html")[0];
    },
    availWidth: function(frame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->16");
    },
    availHeight: function(frame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->23");
    },
    meta: {
        width: "device-width",
        "user-scalable": "no"
    }
};
switch (cc.sys.browserType) {
  case cc.sys.BROWSER_TYPE_SAFARI:
    cc.__BrowserGetter.meta["minimal-ui"] = "true";
    cc.__BrowserGetter.availWidth = function(frame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->34");
    };
    cc.__BrowserGetter.availHeight = function(frame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->37");
    };
    break;
  case cc.sys.BROWSER_TYPE_CHROME:
    cc.__BrowserGetter.__defineGetter__("target-densitydpi", function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->42");
    });
  case cc.sys.BROWSER_TYPE_UC:
    cc.__BrowserGetter.availWidth = function(frame) {
        return frame.clientWidth;
    };
    cc.__BrowserGetter.availHeight = function(frame) {
        return frame.clientHeight;
    };
    break;
  case cc.sys.BROWSER_TYPE_MIUI:
    cc.__BrowserGetter.init = function(view) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->61");
    };
    break;
}
cc.EGLView = cc.Class.extend({
    _delegate: null,
    _frameSize: null,
    _designResolutionSize: null,
    _originalDesignResolutionSize: null,
    _viewPortRect: null,
    _visibleRect: null,
    _retinaEnabled: false,
    _autoFullScreen: true,
    _devicePixelRatio: 1,
    _viewName: "",
    _resizeCallback: null,
    _scaleX: 1,
    _originalScaleX: 1,
    _scaleY: 1,
    _originalScaleY: 1,
    _indexBitsUsed: 0,
    _maxTouches: 5,
    _resolutionPolicy: null,
    _rpExactFit: null,
    _rpShowAll: null,
    _rpNoBorder: null,
    _rpFixedHeight: null,
    _rpFixedWidth: null,
    _initialized: false,
    _captured: false,
    _wnd: null,
    _hDC: null,
    _hRC: null,
    _supportTouch: false,
    _contentTranslateLeftTop: null,
    _frame: null,
    _frameZoomFactor: 1,
    __resizeWithBrowserSize: false,
    _isAdjustViewPort: true,
    _targetDensityDPI: null,
    ctor: function() {
        var _t = this, d = document, _strategyer = cc.ContainerStrategy, _strategy = cc.ContentStrategy;
        cc.__BrowserGetter.init(this);
        _t._frame = cc.container.parentNode === d.body ? d.documentElement : cc.container.parentNode;
        _t._frameSize = cc.size(0, 0);
        _t._initFrameSize();
        var w = cc._canvas.width, h = cc._canvas.height;
        _t._designResolutionSize = cc.size(w, h);
        _t._originalDesignResolutionSize = cc.size(w, h);
        _t._viewPortRect = cc.rect(0, 0, w, h);
        _t._visibleRect = cc.rect(0, 0, w, h);
        _t._contentTranslateLeftTop = {
            left: 0,
            top: 0
        };
        _t._viewName = "Cocos2dHTML5";
        var sys = cc.sys;
        _t.enableRetina(sys.os == sys.OS_IOS || sys.os == sys.OS_OSX);
        cc.visibleRect && cc.visibleRect.init(_t._visibleRect);
        _t._rpExactFit = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.EXACT_FIT);
        _t._rpShowAll = new cc.ResolutionPolicy(_strategyer.PROPORTION_TO_FRAME, _strategy.SHOW_ALL);
        _t._rpNoBorder = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.NO_BORDER);
        _t._rpFixedHeight = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_HEIGHT);
        _t._rpFixedWidth = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_WIDTH);
        _t._hDC = cc._canvas;
        _t._hRC = cc._renderContext;
        _t._targetDensityDPI = cc.DENSITYDPI_HIGH;
    },
    _resizeEvent: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->148");
    },
    setTargetDensityDPI: function(densityDPI) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->152");
    },
    getTargetDensityDPI: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->155");
    },
    resizeWithBrowserSize: function(enabled) {
        if (enabled) {
            if (!this.__resizeWithBrowserSize) {
                this.__resizeWithBrowserSize = true;
                cc._addEventListener(window, "resize", this._resizeEvent);
                cc._addEventListener(window, "orientationchange", this._resizeEvent);
            }
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->169");
        }
    },
    setResizeCallback: function(callback) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->175");
    },
    _initFrameSize: function() {
        var locFrameSize = this._frameSize;
        locFrameSize.width = cc.__BrowserGetter.availWidth(this._frame);
        locFrameSize.height = cc.__BrowserGetter.availHeight(this._frame);
    },
    _adjustSizeKeepCanvasSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->187");
    },
    _setViewPortMeta: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->216");
    },
    _setScaleXYForRenderTexture: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->221");
    },
    _resetScale: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->225");
    },
    _adjustSizeToBrowser: function() {},
    initialize: function() {
        this._initialized = true;
    },
    adjustViewPort: function(enabled) {
        this._isAdjustViewPort = enabled;
    },
    enableRetina: function(enabled) {
        this._retinaEnabled = enabled ? true : false;
    },
    isRetinaEnabled: function() {
        return this._retinaEnabled;
    },
    enableAutoFullScreen: function(enabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->241");
    },
    isAutoFullScreenEnabled: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->244");
    },
    end: function() {},
    isOpenGLReady: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->248");
    },
    setFrameZoomFactor: function(zoomFactor) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->253");
    },
    swapBuffers: function() {},
    setIMEKeyboardState: function(isOpen) {},
    setContentTranslateLeftTop: function(offsetLeft, offsetTop) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->261");
    },
    getContentTranslateLeftTop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->264");
    },
    getFrameSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->267");
    },
    setFrameSize: function(width, height) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->275");
    },
    centerWindow: function() {},
    getVisibleSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->279");
    },
    getVisibleOrigin: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->282");
    },
    canSetContentScaleFactor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->285");
    },
    getResolutionPolicy: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->288");
    },
    setResolutionPolicy: function(resolutionPolicy) {
        var _t = this;
        if (resolutionPolicy instanceof cc.ResolutionPolicy) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->293");
        } else {
            var _locPolicy = cc.ResolutionPolicy;
            if (resolutionPolicy === _locPolicy.EXACT_FIT) {
                _t._resolutionPolicy = _t._rpExactFit;
            }
            if (resolutionPolicy === _locPolicy.SHOW_ALL) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->300");
            }
            if (resolutionPolicy === _locPolicy.NO_BORDER) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->303");
            }
            if (resolutionPolicy === _locPolicy.FIXED_HEIGHT) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->306");
            }
            if (resolutionPolicy === _locPolicy.FIXED_WIDTH) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->309");
            }
        }
    },
    setDesignResolutionSize: function(width, height, resolutionPolicy) {
        if (!(width > 0 || height > 0)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->316");
        }
        this.setResolutionPolicy(resolutionPolicy);
        var policy = this._resolutionPolicy;
        if (!policy) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->321");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->322");
        }
        policy.preApply(this);
        if (cc.sys.isMobile) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->326");
        }
        this._initFrameSize();
        this._originalDesignResolutionSize.width = this._designResolutionSize.width = width;
        this._originalDesignResolutionSize.height = this._designResolutionSize.height = height;
        var result = policy.apply(this, this._designResolutionSize);
        if (result.scale && result.scale.length == 2) {
            this._scaleX = result.scale[0];
            this._scaleY = result.scale[1];
        }
        if (result.viewport) {
            var vp = this._viewPortRect, vb = this._visibleRect, rv = result.viewport;
            vp.x = rv.x;
            vp.y = rv.y;
            vp.width = rv.width;
            vp.height = rv.height;
            vb.x = -vp.x / this._scaleX;
            vb.y = -vp.y / this._scaleY;
            vb.width = cc._canvas.width / this._scaleX;
            vb.height = cc._canvas.height / this._scaleY;
            cc._renderContext.setOffset && cc._renderContext.setOffset(vp.x, -vp.y);
        }
        var director = cc.director;
        director._winSizeInPoints.width = this._designResolutionSize.width;
        director._winSizeInPoints.height = this._designResolutionSize.height;
        policy.postApply(this);
        cc.winSize.width = director._winSizeInPoints.width;
        cc.winSize.height = director._winSizeInPoints.height;
        if (cc._renderType == cc._RENDER_TYPE_WEBGL) {
            director._createStatsLabel();
            director.setGLDefaultValues();
        }
        this._originalScaleX = this._scaleX;
        this._originalScaleY = this._scaleY;
        if (cc.DOM) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->361");
        }
        cc.visibleRect && cc.visibleRect.init(this._visibleRect);
    },
    getDesignResolutionSize: function() {
        return cc.size(this._designResolutionSize.width, this._designResolutionSize.height);
    },
    setViewPortInPoints: function(x, y, w, h) {
        var locFrameZoomFactor = this._frameZoomFactor, locScaleX = this._scaleX, locScaleY = this._scaleY;
        cc._renderContext.viewport(x * locScaleX * locFrameZoomFactor + this._viewPortRect.x * locFrameZoomFactor, y * locScaleY * locFrameZoomFactor + this._viewPortRect.y * locFrameZoomFactor, w * locScaleX * locFrameZoomFactor, h * locScaleY * locFrameZoomFactor);
    },
    setScissorInPoints: function(x, y, w, h) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->374");
    },
    isScissorEnabled: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->378");
    },
    getScissorRect: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->383");
    },
    setViewName: function(viewName) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->388");
    },
    getViewName: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->391");
    },
    getViewPortRect: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->394");
    },
    getScaleX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->397");
    },
    getScaleY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->400");
    },
    getDevicePixelRatio: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->403");
    },
    convertToLocationInView: function(tx, ty, relatedPos) {
        return {
            x: this._devicePixelRatio * (tx - relatedPos.left),
            y: this._devicePixelRatio * (relatedPos.top + relatedPos.height - ty)
        };
    },
    _convertMouseToLocationInView: function(point, relatedPos) {
        var locViewPortRect = this._viewPortRect, _t = this;
        point.x = (_t._devicePixelRatio * (point.x - relatedPos.left) - locViewPortRect.x) / _t._scaleX;
        point.y = (_t._devicePixelRatio * (relatedPos.top + relatedPos.height - point.y) - locViewPortRect.y) / _t._scaleY;
    },
    _convertTouchesWithScale: function(touches) {
        var locViewPortRect = this._viewPortRect, locScaleX = this._scaleX, locScaleY = this._scaleY, selTouch, selPoint, selPrePoint;
        for (var i = 0; i < touches.length; i++) {
            selTouch = touches[i];
            selPoint = selTouch._point;
            selPrePoint = selTouch._prevPoint;
            selTouch._setPoint((selPoint.x - locViewPortRect.x) / locScaleX, (selPoint.y - locViewPortRect.y) / locScaleY);
            selTouch._setPrevPoint((selPrePoint.x - locViewPortRect.x) / locScaleX, (selPrePoint.y - locViewPortRect.y) / locScaleY);
        }
    }
});
cc.EGLView._getInstance = function() {
    if (!this._instance) {
        this._instance = this._instance || new cc.EGLView;
        this._instance.initialize();
    }
    return this._instance;
};
cc.ContainerStrategy = cc.Class.extend({
    preApply: function(view) {},
    apply: function(view, designedResolution) {},
    postApply: function(view) {},
    _setupContainer: function(view, w, h) {
        var frame = view._frame;
        if (cc.view._autoFullScreen && cc.sys.isMobile && frame == document.documentElement) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->441");
        }
        var locCanvasElement = cc._canvas, locContainer = cc.container;
        locContainer.style.width = locCanvasElement.style.width = w + "px";
        locContainer.style.height = locCanvasElement.style.height = h + "px";
        var devicePixelRatio = view._devicePixelRatio = 1;
        if (view.isRetinaEnabled()) {
            devicePixelRatio = view._devicePixelRatio = window.devicePixelRatio || 1;
        }
        locCanvasElement.width = w * devicePixelRatio;
        locCanvasElement.height = h * devicePixelRatio;
        cc._renderContext.resetCache && cc._renderContext.resetCache();
        var body = document.body, style;
        if (body && (style = body.style)) {
            style.paddingTop = style.paddingTop || "0px";
            style.paddingRight = style.paddingRight || "0px";
            style.paddingBottom = style.paddingBottom || "0px";
            style.paddingLeft = style.paddingLeft || "0px";
            style.borderTop = style.borderTop || "0px";
            style.borderRight = style.borderRight || "0px";
            style.borderBottom = style.borderBottom || "0px";
            style.borderLeft = style.borderLeft || "0px";
            style.marginTop = style.marginTop || "0px";
            style.marginRight = style.marginRight || "0px";
            style.marginBottom = style.marginBottom || "0px";
            style.marginLeft = style.marginLeft || "0px";
        }
    },
    _fixContainer: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->470");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->471");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->472");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->475");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->476");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->477");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->478");
    }
});
cc.ContentStrategy = cc.Class.extend({
    _result: {
        scale: [ 1, 1 ],
        viewport: null
    },
    _buildResult: function(containerW, containerH, contentW, contentH, scaleX, scaleY) {
        Math.abs(containerW - contentW) < 2 && (contentW = containerW);
        Math.abs(containerH - contentH) < 2 && (contentH = containerH);
        var viewport = cc.rect(Math.round((containerW - contentW) / 2), Math.round((containerH - contentH) / 2), contentW, contentH);
        if (cc._renderType == cc._RENDER_TYPE_CANVAS) {}
        this._result.scale = [ scaleX, scaleY ];
        this._result.viewport = viewport;
        return this._result;
    },
    preApply: function(view) {},
    apply: function(view, designedResolution) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->497");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->498");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->499");
    },
    postApply: function(view) {}
});
(function() {
    var EqualToFrame = cc.ContainerStrategy.extend({
        apply: function(view) {
            this._setupContainer(view, view._frameSize.width, view._frameSize.height);
        }
    });
    var ProportionalToFrame = cc.ContainerStrategy.extend({
        apply: function(view, designedResolution) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->511");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->512");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->513");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->514");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->515");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->516");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->517");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->518");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->519");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->520");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->521");
        }
    });
    var EqualToWindow = EqualToFrame.extend({
        preApply: function(view) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->526");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->527");
        },
        apply: function(view) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->530");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->531");
        }
    });
    var ProportionalToWindow = ProportionalToFrame.extend({
        preApply: function(view) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->536");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->537");
        },
        apply: function(view, designedResolution) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->540");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->541");
        }
    });
    var OriginalContainer = cc.ContainerStrategy.extend({
        apply: function(view) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->546");
        }
    });
    cc.ContainerStrategy.EQUAL_TO_FRAME = new EqualToFrame;
    cc.ContainerStrategy.PROPORTION_TO_FRAME = new ProportionalToFrame;
    cc.ContainerStrategy.ORIGINAL_CONTAINER = new OriginalContainer;
    var ExactFit = cc.ContentStrategy.extend({
        apply: function(view, designedResolution) {
            var containerW = cc._canvas.width, containerH = cc._canvas.height, scaleX = containerW / designedResolution.width, scaleY = containerH / designedResolution.height;
            return this._buildResult(containerW, containerH, containerW, containerH, scaleX, scaleY);
        }
    });
    var ShowAll = cc.ContentStrategy.extend({
        apply: function(view, designedResolution) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->560");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->561");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->562");
        }
    });
    var NoBorder = cc.ContentStrategy.extend({
        apply: function(view, designedResolution) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->567");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->568");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->569");
        }
    });
    var FixedHeight = cc.ContentStrategy.extend({
        apply: function(view, designedResolution) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->574");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->575");
        },
        postApply: function(view) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->578");
        }
    });
    var FixedWidth = cc.ContentStrategy.extend({
        apply: function(view, designedResolution) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->583");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->584");
        },
        postApply: function(view) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCEGLView.js->587");
        }
    });
    cc.ContentStrategy.EXACT_FIT = new ExactFit;
    cc.ContentStrategy.SHOW_ALL = new ShowAll;
    cc.ContentStrategy.NO_BORDER = new NoBorder;
    cc.ContentStrategy.FIXED_HEIGHT = new FixedHeight;
    cc.ContentStrategy.FIXED_WIDTH = new FixedWidth;
})();
cc.ResolutionPolicy = cc.Class.extend({
    _containerStrategy: null,
    _contentStrategy: null,
    ctor: function(containerStg, contentStg) {
        this.setContainerStrategy(containerStg);
        this.setContentStrategy(contentStg);
    },
    preApply: function(view) {
        this._containerStrategy.preApply(view);
        this._contentStrategy.preApply(view);
    },
    apply: function(view, designedResolution) {
        this._containerStrategy.apply(view, designedResolution);
        return this._contentStrategy.apply(view, designedResolution);
    },
    postApply: function(view) {
        this._containerStrategy.postApply(view);
        this._contentStrategy.postApply(view);
    },
    setContainerStrategy: function(containerStg) {
        if (containerStg instanceof cc.ContainerStrategy) {
            this._containerStrategy = containerStg;
        }
    },
    setContentStrategy: function(contentStg) {
        if (contentStg instanceof cc.ContentStrategy) {
            this._contentStrategy = contentStg;
        }
    }
});
cc.ResolutionPolicy.EXACT_FIT = 0;
cc.ResolutionPolicy.NO_BORDER = 1;
cc.ResolutionPolicy.SHOW_ALL = 2;
cc.ResolutionPolicy.FIXED_HEIGHT = 3;
cc.ResolutionPolicy.FIXED_WIDTH = 4;
cc.ResolutionPolicy.UNKNOWN = 5;