cc.LoaderScene = cc.Scene.extend({
    _interval: null,
    _label: null,
    _className: "LoaderScene",
    init: function() {
        var self = this;
        var logoWidth = 160;
        var logoHeight = 200;
        var bgLayer = self._bgLayer = new cc.LayerColor(cc.color(32, 32, 32, 255));
        self.addChild(bgLayer, 0);
        var fontSize = 24, lblHeight = -logoHeight / 2 + 100;
        if (cc._loaderImage) {
            cc.loader.loadImg(cc._loaderImage, {
                isCrossOrigin: false
            }, function(err, img) {
                logoWidth = img.width;
                logoHeight = img.height;
                self._initStage(img, cc.visibleRect.center);
            });
            fontSize = 14;
            lblHeight = -logoHeight / 2 - 10;
        }
        var label = self._label = new cc.LabelTTF("Loading... 0%", "Arial", fontSize);
        label.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, lblHeight)));
        label.setColor(cc.color(180, 180, 180));
        bgLayer.addChild(this._label, 10);
        return true;
    },
    _initStage: function(img, centerPos) {
        var self = this;
        var texture2d = self._texture2d = new cc.Texture2D;
        texture2d.initWithElement(img);
        texture2d.handleLoadedTexture();
        var logo = self._logo = new cc.Sprite(texture2d);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        self._bgLayer.addChild(logo, 10);
    },
    onEnter: function() {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, .3);
    },
    onExit: function() {
        cc.Node.prototype.onExit.call(this);
        var tmpStr = "Loading... 0%";
        this._label.setString(tmpStr);
    },
    initWithResources: function(resources, cb) {
        if (cc.isString(resources)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/scenes/CCLoaderScene.js->52");
        }
        this.resources = resources || [];
        this.cb = cb;
    },
    _startLoading: function() {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res, function(result, count, loadedCount) {
            var percent = loadedCount / count * 100 | 0;
            percent = Math.min(percent, 100);
            self._label.setString("Loading... " + percent + "%");
        }, function() {
            if (self.cb) {
                self.cb();
            }
        });
    }
});
cc.LoaderScene.preload = function(resources, cb) {
    var _cc = cc;
    if (!_cc.loaderScene) {
        _cc.loaderScene = new cc.LoaderScene;
        _cc.loaderScene.init();
    }
    _cc.loaderScene.initWithResources(resources, cb);
    cc.director.runScene(_cc.loaderScene);
    return _cc.loaderScene;
};