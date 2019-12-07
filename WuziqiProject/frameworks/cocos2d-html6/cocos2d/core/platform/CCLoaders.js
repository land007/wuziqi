cc._txtLoader = {
    load: function(realUrl, url, res, cb) {
        cc.loader.loadTxt(realUrl, cb);
    }
};
cc.loader.register([ "txt", "xml", "vsh", "fsh", "atlas" ], cc._txtLoader);
cc._jsonLoader = {
    load: function(realUrl, url, res, cb) {
        cc.loader.loadJson(realUrl, cb);
    }
};
cc.loader.register([ "json", "ExportJson" ], cc._jsonLoader);
cc._jsLoader = {
    load: function(realUrl, url, res, cb) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->15");
    }
};
cc.loader.register([ "js" ], cc._jsLoader);
cc._imgLoader = {
    load: function(realUrl, url, res, cb) {
        cc.loader.cache[url] = cc.loader.loadImg(realUrl, function(err, img) {
            if (err) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->23");
            }
            cc.textureCache.handleLoadedTexture(url);
            cb(null, img);
        });
    }
};
cc.loader.register([ "png", "jpg", "bmp", "jpeg", "gif", "ico" ], cc._imgLoader);
cc._serverImgLoader = {
    load: function(realUrl, url, res, cb) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->39");
    }
};
cc.loader.register([ "serverImg" ], cc._serverImgLoader);
cc._plistLoader = {
    load: function(realUrl, url, res, cb) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->50");
    }
};
cc.loader.register([ "plist" ], cc._plistLoader);
cc._fontLoader = {
    TYPE: {
        ".eot": "embedded-opentype",
        ".ttf": "truetype",
        ".woff": "woff",
        ".svg": "svg"
    },
    _loadFont: function(name, srcs, type) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->84");
    },
    load: function(realUrl, url, res, cb) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->96");
    }
};
cc.loader.register([ "font", "eot", "ttf", "woff", "svg" ], cc._fontLoader);
cc._binaryLoader = {
    load: function(realUrl, url, res, cb) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->102");
    }
};
cc._csbLoader = {
    load: function(realUrl, url, res, cb) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCLoaders.js->107");
    }
};
cc.loader.register([ "csb" ], cc._csbLoader);