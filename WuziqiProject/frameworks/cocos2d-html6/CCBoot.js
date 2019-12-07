var cc = cc || {};
cc._tmp = cc._tmp || {};
cc._LogInfos = {};
window._p;
_p = window;
_p.gl;
_p.WebGLRenderingContext;
_p.DeviceOrientationEvent;
_p.DeviceMotionEvent;
_p.AudioContext;
_p.webkitAudioContext;
_p.mozAudioContext;
_p = Object.prototype;
_p._super;
_p.ctor;
delete window._p;
cc.newElement = function(x) {
    return document.createElement(x);
};
cc._addEventListener = function(element, type, listener, useCapture) {
    element.addEventListener(type, listener, useCapture);
};
cc._isNodeJs = typeof require !== "undefined" && require("fs");
cc.each = function(obj, iterator, context) {
    if (!obj) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->26");
    }
    if (obj instanceof Array) {
        for (var i = 0, li = obj.length; i < li; i++) {
            if (iterator.call(context, obj[i], i) === false) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->31");
            }
        }
    } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->35");
console.log("/frameworks/cocos2d-html5/CCBoot.js->36");
console.log("/frameworks/cocos2d-html5/CCBoot.js->37");
console.log("/frameworks/cocos2d-html5/CCBoot.js->38");
console.log("/frameworks/cocos2d-html5/CCBoot.js->39");
    }
};
cc.extend = function(target) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->43");
console.log("/frameworks/cocos2d-html5/CCBoot.js->44");
console.log("/frameworks/cocos2d-html5/CCBoot.js->45");
console.log("/frameworks/cocos2d-html5/CCBoot.js->46");
console.log("/frameworks/cocos2d-html5/CCBoot.js->47");
console.log("/frameworks/cocos2d-html5/CCBoot.js->48");
console.log("/frameworks/cocos2d-html5/CCBoot.js->49");
console.log("/frameworks/cocos2d-html5/CCBoot.js->50");
console.log("/frameworks/cocos2d-html5/CCBoot.js->51");
};
cc.isFunction = function(obj) {
    return typeof obj == "function";
};
cc.isNumber = function(obj) {
    return typeof obj == "number" || Object.prototype.toString.call(obj) == "[object Number]";
};
cc.isString = function(obj) {
    return typeof obj == "string" || Object.prototype.toString.call(obj) == "[object String]";
};
cc.isArray = function(obj) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->63");
};
cc.isUndefined = function(obj) {
    return typeof obj == "undefined";
};
cc.isObject = function(obj) {
    var type = typeof obj;
    return type == "function" || obj && type == "object";
};
cc.isCrossOrigin = function(url) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->73");
console.log("/frameworks/cocos2d-html5/CCBoot.js->74");
console.log("/frameworks/cocos2d-html5/CCBoot.js->75");
console.log("/frameworks/cocos2d-html5/CCBoot.js->76");
console.log("/frameworks/cocos2d-html5/CCBoot.js->77");
console.log("/frameworks/cocos2d-html5/CCBoot.js->78");
console.log("/frameworks/cocos2d-html5/CCBoot.js->79");
console.log("/frameworks/cocos2d-html5/CCBoot.js->80");
console.log("/frameworks/cocos2d-html5/CCBoot.js->81");
console.log("/frameworks/cocos2d-html5/CCBoot.js->82");
console.log("/frameworks/cocos2d-html5/CCBoot.js->83");
};
cc.AsyncPool = function(srcObj, limit, iterator, onEnd, target) {
    var self = this;
    self._srcObj = srcObj;
    self._limit = limit;
    self._pool = [];
    self._iterator = iterator;
    self._iteratorTarget = target;
    self._onEnd = onEnd;
    self._onEndTarget = target;
    self._results = srcObj instanceof Array ? [] : {};
    self._isErr = false;
    cc.each(srcObj, function(value, index) {
        self._pool.push({
            index: index,
            value: value
        });
    });
    self.size = self._pool.length;
    self.finishedSize = 0;
    self._workingSize = 0;
    self._limit = self._limit || self.size;
    self.onIterator = function(iterator, target) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->107");
console.log("/frameworks/cocos2d-html5/CCBoot.js->108");
    };
    self.onEnd = function(endCb, endCbTarget) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->111");
console.log("/frameworks/cocos2d-html5/CCBoot.js->112");
    };
    self._handleItem = function() {
        var self = this;
        if (self._pool.length == 0 || self._workingSize >= self._limit) {
            return;
        }
        var item = self._pool.shift();
        var value = item.value, index = item.index;
        self._workingSize++;
        self._iterator.call(self._iteratorTarget, value, index, function(err) {
            if (self._isErr) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->124");
            }
            self.finishedSize++;
            self._workingSize--;
            if (err) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->129");
console.log("/frameworks/cocos2d-html5/CCBoot.js->130");
console.log("/frameworks/cocos2d-html5/CCBoot.js->131");
console.log("/frameworks/cocos2d-html5/CCBoot.js->132");
console.log("/frameworks/cocos2d-html5/CCBoot.js->133");
            }
            var arr = Array.prototype.slice.call(arguments, 1);
            self._results[this.index] = arr[0];
            if (self.finishedSize == self.size) {
                if (self._onEnd) {
                    self._onEnd.call(self._onEndTarget, null, self._results);
                }
                return;
            }
            self._handleItem();
        }.bind(item), self);
    };
    self.flow = function() {
        var self = this;
        if (self._pool.length == 0) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->149");
console.log("/frameworks/cocos2d-html5/CCBoot.js->150");
console.log("/frameworks/cocos2d-html5/CCBoot.js->151");
console.log("/frameworks/cocos2d-html5/CCBoot.js->152");
        }
        for (var i = 0; i < self._limit; i++) {
            self._handleItem();
        }
    };
};
cc.async = {
    series: function(tasks, cb, target) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->161");
console.log("/frameworks/cocos2d-html5/CCBoot.js->162");
console.log("/frameworks/cocos2d-html5/CCBoot.js->163");
console.log("/frameworks/cocos2d-html5/CCBoot.js->164");
console.log("/frameworks/cocos2d-html5/CCBoot.js->165");
    },
    parallel: function(tasks, cb, target) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->168");
console.log("/frameworks/cocos2d-html5/CCBoot.js->169");
console.log("/frameworks/cocos2d-html5/CCBoot.js->170");
console.log("/frameworks/cocos2d-html5/CCBoot.js->171");
console.log("/frameworks/cocos2d-html5/CCBoot.js->172");
    },
    waterfall: function(tasks, cb, target) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->175");
console.log("/frameworks/cocos2d-html5/CCBoot.js->176");
console.log("/frameworks/cocos2d-html5/CCBoot.js->177");
console.log("/frameworks/cocos2d-html5/CCBoot.js->178");
console.log("/frameworks/cocos2d-html5/CCBoot.js->179");
console.log("/frameworks/cocos2d-html5/CCBoot.js->180");
console.log("/frameworks/cocos2d-html5/CCBoot.js->181");
console.log("/frameworks/cocos2d-html5/CCBoot.js->182");
console.log("/frameworks/cocos2d-html5/CCBoot.js->183");
console.log("/frameworks/cocos2d-html5/CCBoot.js->184");
console.log("/frameworks/cocos2d-html5/CCBoot.js->185");
console.log("/frameworks/cocos2d-html5/CCBoot.js->186");
console.log("/frameworks/cocos2d-html5/CCBoot.js->187");
console.log("/frameworks/cocos2d-html5/CCBoot.js->188");
console.log("/frameworks/cocos2d-html5/CCBoot.js->189");
console.log("/frameworks/cocos2d-html5/CCBoot.js->190");
console.log("/frameworks/cocos2d-html5/CCBoot.js->191");
console.log("/frameworks/cocos2d-html5/CCBoot.js->192");
console.log("/frameworks/cocos2d-html5/CCBoot.js->193");
console.log("/frameworks/cocos2d-html5/CCBoot.js->194");
console.log("/frameworks/cocos2d-html5/CCBoot.js->195");
console.log("/frameworks/cocos2d-html5/CCBoot.js->196");
    },
    map: function(tasks, iterator, callback, target) {
        var locIterator = iterator;
        if (typeof iterator == "object") {
console.log("/frameworks/cocos2d-html5/CCBoot.js->201");
console.log("/frameworks/cocos2d-html5/CCBoot.js->202");
console.log("/frameworks/cocos2d-html5/CCBoot.js->203");
        }
        var asyncPool = new cc.AsyncPool(tasks, 0, locIterator, callback, target);
        asyncPool.flow();
        return asyncPool;
    },
    mapLimit: function(tasks, limit, iterator, cb, target) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->210");
console.log("/frameworks/cocos2d-html5/CCBoot.js->211");
console.log("/frameworks/cocos2d-html5/CCBoot.js->212");
    }
};
cc.path = {
    join: function() {
        var l = arguments.length;
        var result = "";
        for (var i = 0; i < l; i++) {
            result = (result + (result == "" ? "" : "/") + arguments[i]).replace(/(\/|\\\\)$/, "");
        }
        return result;
    },
    extname: function(pathStr) {
        var temp = /(\.[^\.\/\?\\]*)(\?.*)?$/.exec(pathStr);
        return temp ? temp[1] : null;
    },
    mainFileName: function(fileName) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->229");
console.log("/frameworks/cocos2d-html5/CCBoot.js->230");
console.log("/frameworks/cocos2d-html5/CCBoot.js->231");
console.log("/frameworks/cocos2d-html5/CCBoot.js->232");
console.log("/frameworks/cocos2d-html5/CCBoot.js->233");
console.log("/frameworks/cocos2d-html5/CCBoot.js->234");
console.log("/frameworks/cocos2d-html5/CCBoot.js->235");
    },
    basename: function(pathStr, extname) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->238");
console.log("/frameworks/cocos2d-html5/CCBoot.js->239");
console.log("/frameworks/cocos2d-html5/CCBoot.js->240");
console.log("/frameworks/cocos2d-html5/CCBoot.js->241");
console.log("/frameworks/cocos2d-html5/CCBoot.js->242");
console.log("/frameworks/cocos2d-html5/CCBoot.js->243");
console.log("/frameworks/cocos2d-html5/CCBoot.js->244");
console.log("/frameworks/cocos2d-html5/CCBoot.js->245");
console.log("/frameworks/cocos2d-html5/CCBoot.js->246");
console.log("/frameworks/cocos2d-html5/CCBoot.js->247");
console.log("/frameworks/cocos2d-html5/CCBoot.js->248");
console.log("/frameworks/cocos2d-html5/CCBoot.js->249");
console.log("/frameworks/cocos2d-html5/CCBoot.js->250");
console.log("/frameworks/cocos2d-html5/CCBoot.js->251");
    },
    dirname: function(pathStr) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->254");
    },
    changeExtname: function(pathStr, extname) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->257");
console.log("/frameworks/cocos2d-html5/CCBoot.js->258");
console.log("/frameworks/cocos2d-html5/CCBoot.js->259");
console.log("/frameworks/cocos2d-html5/CCBoot.js->260");
console.log("/frameworks/cocos2d-html5/CCBoot.js->261");
console.log("/frameworks/cocos2d-html5/CCBoot.js->262");
console.log("/frameworks/cocos2d-html5/CCBoot.js->263");
console.log("/frameworks/cocos2d-html5/CCBoot.js->264");
console.log("/frameworks/cocos2d-html5/CCBoot.js->265");
console.log("/frameworks/cocos2d-html5/CCBoot.js->266");
console.log("/frameworks/cocos2d-html5/CCBoot.js->267");
console.log("/frameworks/cocos2d-html5/CCBoot.js->268");
    },
    changeBasename: function(pathStr, basename, isSameExt) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->271");
console.log("/frameworks/cocos2d-html5/CCBoot.js->272");
console.log("/frameworks/cocos2d-html5/CCBoot.js->273");
console.log("/frameworks/cocos2d-html5/CCBoot.js->274");
console.log("/frameworks/cocos2d-html5/CCBoot.js->275");
console.log("/frameworks/cocos2d-html5/CCBoot.js->276");
console.log("/frameworks/cocos2d-html5/CCBoot.js->277");
console.log("/frameworks/cocos2d-html5/CCBoot.js->278");
console.log("/frameworks/cocos2d-html5/CCBoot.js->279");
console.log("/frameworks/cocos2d-html5/CCBoot.js->280");
console.log("/frameworks/cocos2d-html5/CCBoot.js->281");
console.log("/frameworks/cocos2d-html5/CCBoot.js->282");
console.log("/frameworks/cocos2d-html5/CCBoot.js->283");
    }
};
cc.loader = {
    _jsCache: {},
    _register: {},
    _langPathCache: {},
    _aliases: {},
    resPath: "",
    audioPath: "",
    cache: {},
    getXMLHttpRequest: function() {
        return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP");
    },
    _getArgs4Js: function(args) {
        var a0 = args[0], a1 = args[1], a2 = args[2], results = [ "", null, null ];
        if (args.length === 1) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->300");
        } else {
            if (args.length === 2) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->303");
console.log("/frameworks/cocos2d-html5/CCBoot.js->304");
console.log("/frameworks/cocos2d-html5/CCBoot.js->305");
console.log("/frameworks/cocos2d-html5/CCBoot.js->306");
console.log("/frameworks/cocos2d-html5/CCBoot.js->307");
console.log("/frameworks/cocos2d-html5/CCBoot.js->308");
console.log("/frameworks/cocos2d-html5/CCBoot.js->309");
            } else {
                if (args.length === 3) {
                    results[0] = a0 || "";
                    results[1] = a1 instanceof Array ? a1 : [ a1 ];
                    results[2] = a2;
                } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->316");
                }
            }
        }
        return results;
    },
    loadJs: function(baseDir, jsList, cb) {
        var self = this, localJsCache = self._jsCache, args = self._getArgs4Js(arguments);
        var preDir = args[0], list = args[1], callback = args[2];
        if (navigator.userAgent.indexOf("Trident/5") > -1) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->326");
        } else {
            cc.async.map(list, function(item, index, cb1) {
                var jsPath = cc.path.join(preDir, item);
                if (localJsCache[jsPath]) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->331");
                }
                self._createScript(jsPath, false, cb1);
            }, callback);
        }
    },
    loadJsWithImg: function(baseDir, jsList, cb) {
        var self = this, jsLoadingImg = self._loadJsImg(), args = self._getArgs4Js(arguments);
        this.loadJs(args[0], args[1], function(err) {
            if (err) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->341");
            }
            jsLoadingImg.parentNode.removeChild(jsLoadingImg);
            if (args[2]) {
                args[2]();
            }
        });
    },
    _createScript: function(jsPath, isAsync, cb) {
        var d = document, self = this, s = cc.newElement("script");
        s.async = isAsync;
        self._jsCache[jsPath] = true;
        if (cc.game.config["noCache"] && typeof jsPath === "string") {
console.log("/frameworks/cocos2d-html5/CCBoot.js->354");
console.log("/frameworks/cocos2d-html5/CCBoot.js->355");
console.log("/frameworks/cocos2d-html5/CCBoot.js->356");
console.log("/frameworks/cocos2d-html5/CCBoot.js->357");
console.log("/frameworks/cocos2d-html5/CCBoot.js->358");
        } else {
            s.src = jsPath;
        }
        cc._addEventListener(s, "load", function() {
            this.removeEventListener("load", arguments.callee, false);
            cb();
        }, false);
        cc._addEventListener(s, "error", function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->367");
console.log("/frameworks/cocos2d-html5/CCBoot.js->368");
        }, false);
        d.body.appendChild(s);
    },
    _loadJs4Dependency: function(baseDir, jsList, index, cb) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->373");
console.log("/frameworks/cocos2d-html5/CCBoot.js->374");
console.log("/frameworks/cocos2d-html5/CCBoot.js->375");
console.log("/frameworks/cocos2d-html5/CCBoot.js->376");
console.log("/frameworks/cocos2d-html5/CCBoot.js->377");
console.log("/frameworks/cocos2d-html5/CCBoot.js->378");
console.log("/frameworks/cocos2d-html5/CCBoot.js->379");
console.log("/frameworks/cocos2d-html5/CCBoot.js->380");
console.log("/frameworks/cocos2d-html5/CCBoot.js->381");
console.log("/frameworks/cocos2d-html5/CCBoot.js->382");
console.log("/frameworks/cocos2d-html5/CCBoot.js->383");
console.log("/frameworks/cocos2d-html5/CCBoot.js->384");
console.log("/frameworks/cocos2d-html5/CCBoot.js->385");
    },
    _loadJsImg: function() {
        var d = document, jsLoadingImg = d.getElementById("cocos2d_loadJsImg");
        if (!jsLoadingImg) {
            jsLoadingImg = cc.newElement("img");
            if (cc._loadingImage) {
                jsLoadingImg.src = cc._loadingImage;
            }
            var canvasNode = d.getElementById(cc.game.config["id"]);
            canvasNode.style.backgroundColor = "black";
            canvasNode.parentNode.appendChild(jsLoadingImg);
            var canvasStyle = getComputedStyle ? getComputedStyle(canvasNode) : canvasNode.currentStyle;
            if (!canvasStyle) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->399");
console.log("/frameworks/cocos2d-html5/CCBoot.js->400");
console.log("/frameworks/cocos2d-html5/CCBoot.js->401");
console.log("/frameworks/cocos2d-html5/CCBoot.js->402");
            }
            jsLoadingImg.style.left = canvasNode.offsetLeft + (parseFloat(canvasStyle.width) - jsLoadingImg.width) / 2 + "px";
            jsLoadingImg.style.top = canvasNode.offsetTop + (parseFloat(canvasStyle.height) - jsLoadingImg.height) / 2 + "px";
            jsLoadingImg.style.position = "absolute";
        }
        return jsLoadingImg;
    },
    loadTxt: function(url, cb) {
        if (!cc._isNodeJs) {
            var xhr = this.getXMLHttpRequest(), errInfo = "load " + url + " failed!";
            xhr.open("GET", url, true);
            if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->415");
console.log("/frameworks/cocos2d-html5/CCBoot.js->416");
console.log("/frameworks/cocos2d-html5/CCBoot.js->417");
console.log("/frameworks/cocos2d-html5/CCBoot.js->418");
console.log("/frameworks/cocos2d-html5/CCBoot.js->419");
console.log("/frameworks/cocos2d-html5/CCBoot.js->420");
            } else {
                if (xhr.overrideMimeType) {
                    xhr.overrideMimeType("text/plain; charset=utf-8");
                }
                xhr.onload = function() {
                    if (xhr.readyState == 4) {
                        xhr.status == 200 ? cb(null, xhr.responseText) : cb(errInfo);
                    }
                };
            }
            xhr.send(null);
        } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->433");
console.log("/frameworks/cocos2d-html5/CCBoot.js->434");
console.log("/frameworks/cocos2d-html5/CCBoot.js->435");
console.log("/frameworks/cocos2d-html5/CCBoot.js->436");
        }
    },
    _loadTxtSync: function(url) {
        if (!cc._isNodeJs) {
            var xhr = this.getXMLHttpRequest();
            xhr.open("GET", url, false);
            if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->444");
            } else {
                if (xhr.overrideMimeType) {
                    xhr.overrideMimeType("text/plain; charset=utf-8");
                }
            }
            xhr.send(null);
            if (!xhr.readyState == 4 || xhr.status != 200) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->452");
            }
            return xhr.responseText;
        } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->456");
console.log("/frameworks/cocos2d-html5/CCBoot.js->457");
        }
    },
    loadCsb: function(url, cb) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->461");
console.log("/frameworks/cocos2d-html5/CCBoot.js->462");
console.log("/frameworks/cocos2d-html5/CCBoot.js->463");
console.log("/frameworks/cocos2d-html5/CCBoot.js->464");
console.log("/frameworks/cocos2d-html5/CCBoot.js->465");
console.log("/frameworks/cocos2d-html5/CCBoot.js->466");
console.log("/frameworks/cocos2d-html5/CCBoot.js->467");
console.log("/frameworks/cocos2d-html5/CCBoot.js->468");
console.log("/frameworks/cocos2d-html5/CCBoot.js->469");
console.log("/frameworks/cocos2d-html5/CCBoot.js->470");
console.log("/frameworks/cocos2d-html5/CCBoot.js->471");
console.log("/frameworks/cocos2d-html5/CCBoot.js->472");
console.log("/frameworks/cocos2d-html5/CCBoot.js->473");
    },
    loadJson: function(url, cb) {
        this.loadTxt(url, function(err, txt) {
            if (err) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->478");
            } else {
                try {
                    var result = JSON.parse(txt);
                } catch (e) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->483");
console.log("/frameworks/cocos2d-html5/CCBoot.js->484");
                }
                cb(null, result);
            }
        });
    },
    _checkIsImageURL: function(url) {
        var ext = /(\.png)|(\.jpg)|(\.bmp)|(\.jpeg)|(\.gif)/.exec(url);
        return ext != null;
    },
    loadImg: function(url, option, callback) {
        var opt = {
            isCrossOrigin: true
        };
        if (callback !== undefined) {
            opt.isCrossOrigin = option.isCrossOrigin == null ? opt.isCrossOrigin : option.isCrossOrigin;
        } else {
            if (option !== undefined) {
                callback = option;
            }
        }
        var img = this.getRes(url);
        if (img) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->507");
console.log("/frameworks/cocos2d-html5/CCBoot.js->508");
        }
        img = new Image;
        if (opt.isCrossOrigin && location.origin != "file://") {
            img.crossOrigin = "Anonymous";
        }
        var loadCallback = function() {
            this.removeEventListener("load", loadCallback, false);
            this.removeEventListener("error", errorCallback, false);
            cc.loader.cache[url] = img;
            if (callback) {
                callback(null, img);
            }
        };
        var self = this;
        var errorCallback = function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->524");
console.log("/frameworks/cocos2d-html5/CCBoot.js->525");
console.log("/frameworks/cocos2d-html5/CCBoot.js->526");
console.log("/frameworks/cocos2d-html5/CCBoot.js->527");
console.log("/frameworks/cocos2d-html5/CCBoot.js->528");
console.log("/frameworks/cocos2d-html5/CCBoot.js->529");
console.log("/frameworks/cocos2d-html5/CCBoot.js->530");
console.log("/frameworks/cocos2d-html5/CCBoot.js->531");
        };
        cc._addEventListener(img, "load", loadCallback);
        cc._addEventListener(img, "error", errorCallback);
        img.src = url;
        return img;
    },
    _loadResIterator: function(item, index, cb) {
        var self = this, url = null;
        var type = item.type;
        if (type) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->542");
console.log("/frameworks/cocos2d-html5/CCBoot.js->543");
        } else {
            url = item;
            type = cc.path.extname(url);
        }
        var obj = self.getRes(url);
        if (obj) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->550");
        }
        var loader = null;
        if (type) {
            loader = self._register[type.toLowerCase()];
        }
        if (!loader) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->557");
console.log("/frameworks/cocos2d-html5/CCBoot.js->558");
        }
        var basePath = loader.getBasePath ? loader.getBasePath() : self.resPath;
        var realUrl = self.getUrl(basePath, url);
        if (cc.game.config["noCache"] && typeof realUrl === "string") {
console.log("/frameworks/cocos2d-html5/CCBoot.js->563");
console.log("/frameworks/cocos2d-html5/CCBoot.js->564");
console.log("/frameworks/cocos2d-html5/CCBoot.js->565");
console.log("/frameworks/cocos2d-html5/CCBoot.js->566");
console.log("/frameworks/cocos2d-html5/CCBoot.js->567");
        }
        loader.load(realUrl, url, item, function(err, data) {
            if (err) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->571");
console.log("/frameworks/cocos2d-html5/CCBoot.js->572");
console.log("/frameworks/cocos2d-html5/CCBoot.js->573");
console.log("/frameworks/cocos2d-html5/CCBoot.js->574");
            } else {
                self.cache[url] = data;
                cb(null, data);
            }
        });
    },
    _noCacheRex: /\?/,
    getUrl: function(basePath, url) {
        var self = this, langPathCache = self._langPathCache, path = cc.path;
        if (basePath !== undefined && url === undefined) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->585");
console.log("/frameworks/cocos2d-html5/CCBoot.js->586");
console.log("/frameworks/cocos2d-html5/CCBoot.js->587");
console.log("/frameworks/cocos2d-html5/CCBoot.js->588");
console.log("/frameworks/cocos2d-html5/CCBoot.js->589");
console.log("/frameworks/cocos2d-html5/CCBoot.js->590");
console.log("/frameworks/cocos2d-html5/CCBoot.js->591");
console.log("/frameworks/cocos2d-html5/CCBoot.js->592");
console.log("/frameworks/cocos2d-html5/CCBoot.js->593");
        }
        url = cc.path.join(basePath || "", url);
        if (url.match(/[\/(\\\\)]lang[\/(\\\\)]/i)) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->597");
console.log("/frameworks/cocos2d-html5/CCBoot.js->598");
console.log("/frameworks/cocos2d-html5/CCBoot.js->599");
console.log("/frameworks/cocos2d-html5/CCBoot.js->600");
console.log("/frameworks/cocos2d-html5/CCBoot.js->601");
        }
        return url;
    },
    load: function(resources, option, loadCallback) {
        var self = this;
        var len = arguments.length;
        if (len == 0) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->609");
        }
        if (len == 3) {
            if (typeof option == "function") {
                if (typeof loadCallback == "function") {
                    option = {
                        trigger: option,
                        cb: loadCallback
                    };
                } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->619");
console.log("/frameworks/cocos2d-html5/CCBoot.js->620");
console.log("/frameworks/cocos2d-html5/CCBoot.js->621");
console.log("/frameworks/cocos2d-html5/CCBoot.js->622");
                }
            }
        } else {
            if (len == 2) {
                if (typeof option == "function") {
                    option = {
                        cb: option
                    };
                }
            } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->633");
console.log("/frameworks/cocos2d-html5/CCBoot.js->634");
console.log("/frameworks/cocos2d-html5/CCBoot.js->635");
            }
        }
        if (!(resources instanceof Array)) {
            resources = [ resources ];
        }
        var asyncPool = new cc.AsyncPool(resources, 0, function(value, index, AsyncPoolCallback, aPool) {
            self._loadResIterator(value, index, function(err) {
                if (err) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->644");
                }
                var arr = Array.prototype.slice.call(arguments, 1);
                if (option.trigger) {
                    option.trigger.call(option.triggerTarget, arr[0], aPool.size, aPool.finishedSize);
                }
                AsyncPoolCallback(null, arr[0]);
            });
        }, option.cb, option.cbTarget);
        asyncPool.flow();
        return asyncPool;
    },
    _handleAliases: function(fileNames, cb) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->657");
console.log("/frameworks/cocos2d-html5/CCBoot.js->658");
console.log("/frameworks/cocos2d-html5/CCBoot.js->659");
console.log("/frameworks/cocos2d-html5/CCBoot.js->660");
console.log("/frameworks/cocos2d-html5/CCBoot.js->661");
console.log("/frameworks/cocos2d-html5/CCBoot.js->662");
console.log("/frameworks/cocos2d-html5/CCBoot.js->663");
console.log("/frameworks/cocos2d-html5/CCBoot.js->664");
    },
    loadAliases: function(url, callback) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->667");
console.log("/frameworks/cocos2d-html5/CCBoot.js->668");
console.log("/frameworks/cocos2d-html5/CCBoot.js->669");
console.log("/frameworks/cocos2d-html5/CCBoot.js->670");
console.log("/frameworks/cocos2d-html5/CCBoot.js->671");
console.log("/frameworks/cocos2d-html5/CCBoot.js->672");
console.log("/frameworks/cocos2d-html5/CCBoot.js->673");
console.log("/frameworks/cocos2d-html5/CCBoot.js->674");
    },
    register: function(extNames, loader) {
        if (!extNames || !loader) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->678");
        }
        var self = this;
        if (typeof extNames == "string") {
console.log("/frameworks/cocos2d-html5/CCBoot.js->682");
        }
        for (var i = 0, li = extNames.length; i < li; i++) {
            self._register["." + extNames[i].trim().toLowerCase()] = loader;
        }
    },
    getRes: function(url) {
        return this.cache[url] || this.cache[this._aliases[url]];
    },
    release: function(url) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->692");
console.log("/frameworks/cocos2d-html5/CCBoot.js->693");
console.log("/frameworks/cocos2d-html5/CCBoot.js->694");
console.log("/frameworks/cocos2d-html5/CCBoot.js->695");
    },
    releaseAll: function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->698");
console.log("/frameworks/cocos2d-html5/CCBoot.js->699");
console.log("/frameworks/cocos2d-html5/CCBoot.js->700");
console.log("/frameworks/cocos2d-html5/CCBoot.js->701");
console.log("/frameworks/cocos2d-html5/CCBoot.js->702");
console.log("/frameworks/cocos2d-html5/CCBoot.js->703");
console.log("/frameworks/cocos2d-html5/CCBoot.js->704");
    }
};
cc.formatStr = function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->708");
console.log("/frameworks/cocos2d-html5/CCBoot.js->709");
console.log("/frameworks/cocos2d-html5/CCBoot.js->710");
console.log("/frameworks/cocos2d-html5/CCBoot.js->711");
console.log("/frameworks/cocos2d-html5/CCBoot.js->712");
console.log("/frameworks/cocos2d-html5/CCBoot.js->713");
console.log("/frameworks/cocos2d-html5/CCBoot.js->714");
console.log("/frameworks/cocos2d-html5/CCBoot.js->715");
console.log("/frameworks/cocos2d-html5/CCBoot.js->716");
console.log("/frameworks/cocos2d-html5/CCBoot.js->717");
console.log("/frameworks/cocos2d-html5/CCBoot.js->718");
console.log("/frameworks/cocos2d-html5/CCBoot.js->719");
console.log("/frameworks/cocos2d-html5/CCBoot.js->720");
console.log("/frameworks/cocos2d-html5/CCBoot.js->721");
console.log("/frameworks/cocos2d-html5/CCBoot.js->722");
console.log("/frameworks/cocos2d-html5/CCBoot.js->723");
console.log("/frameworks/cocos2d-html5/CCBoot.js->724");
console.log("/frameworks/cocos2d-html5/CCBoot.js->725");
console.log("/frameworks/cocos2d-html5/CCBoot.js->726");
console.log("/frameworks/cocos2d-html5/CCBoot.js->727");
console.log("/frameworks/cocos2d-html5/CCBoot.js->728");
console.log("/frameworks/cocos2d-html5/CCBoot.js->729");
console.log("/frameworks/cocos2d-html5/CCBoot.js->730");
console.log("/frameworks/cocos2d-html5/CCBoot.js->731");
console.log("/frameworks/cocos2d-html5/CCBoot.js->732");
console.log("/frameworks/cocos2d-html5/CCBoot.js->733");
console.log("/frameworks/cocos2d-html5/CCBoot.js->734");
console.log("/frameworks/cocos2d-html5/CCBoot.js->735");
console.log("/frameworks/cocos2d-html5/CCBoot.js->736");
console.log("/frameworks/cocos2d-html5/CCBoot.js->737");
console.log("/frameworks/cocos2d-html5/CCBoot.js->738");
console.log("/frameworks/cocos2d-html5/CCBoot.js->739");
console.log("/frameworks/cocos2d-html5/CCBoot.js->740");
console.log("/frameworks/cocos2d-html5/CCBoot.js->741");
console.log("/frameworks/cocos2d-html5/CCBoot.js->742");
};
(function() {
    var win = window, hidden, visibilityChange, _undef = "undefined";
    if (!cc.isUndefined(document.hidden)) {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->750");
console.log("/frameworks/cocos2d-html5/CCBoot.js->751");
console.log("/frameworks/cocos2d-html5/CCBoot.js->752");
console.log("/frameworks/cocos2d-html5/CCBoot.js->753");
console.log("/frameworks/cocos2d-html5/CCBoot.js->754");
console.log("/frameworks/cocos2d-html5/CCBoot.js->755");
console.log("/frameworks/cocos2d-html5/CCBoot.js->756");
console.log("/frameworks/cocos2d-html5/CCBoot.js->757");
console.log("/frameworks/cocos2d-html5/CCBoot.js->758");
console.log("/frameworks/cocos2d-html5/CCBoot.js->759");
console.log("/frameworks/cocos2d-html5/CCBoot.js->760");
console.log("/frameworks/cocos2d-html5/CCBoot.js->761");
console.log("/frameworks/cocos2d-html5/CCBoot.js->762");
console.log("/frameworks/cocos2d-html5/CCBoot.js->763");
    }
    var onHidden = function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->766");
console.log("/frameworks/cocos2d-html5/CCBoot.js->767");
console.log("/frameworks/cocos2d-html5/CCBoot.js->768");
    };
    var onShow = function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->771");
console.log("/frameworks/cocos2d-html5/CCBoot.js->772");
console.log("/frameworks/cocos2d-html5/CCBoot.js->773");
console.log("/frameworks/cocos2d-html5/CCBoot.js->774");
console.log("/frameworks/cocos2d-html5/CCBoot.js->775");
console.log("/frameworks/cocos2d-html5/CCBoot.js->776");
console.log("/frameworks/cocos2d-html5/CCBoot.js->777");
    };
    if (hidden) {
        cc._addEventListener(document, visibilityChange, function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->781");
console.log("/frameworks/cocos2d-html5/CCBoot.js->782");
console.log("/frameworks/cocos2d-html5/CCBoot.js->783");
console.log("/frameworks/cocos2d-html5/CCBoot.js->784");
console.log("/frameworks/cocos2d-html5/CCBoot.js->785");
        }, false);
    } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->788");
console.log("/frameworks/cocos2d-html5/CCBoot.js->789");
    }
    if (navigator.userAgent.indexOf("MicroMessenger") > -1) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->792");
console.log("/frameworks/cocos2d-html5/CCBoot.js->793");
console.log("/frameworks/cocos2d-html5/CCBoot.js->794");
    }
    if ("onpageshow" in window && "onpagehide" in window) {
        cc._addEventListener(win, "pagehide", onHidden, false);
        cc._addEventListener(win, "pageshow", onShow, false);
    }
    win = null;
    visibilityChange = null;
})();
cc.log = cc.warn = cc.error = cc.assert = function() {};
cc.create3DContext = function(canvas, opt_attribs) {
    var names = [ "webgl", "experimental-webgl", "webkit-3d", "moz-webgl" ];
    var context = null;
    for (var ii = 0; ii < names.length; ++ii) {
        try {
            context = canvas.getContext(names[ii], opt_attribs);
        } catch (e) {}
        if (context) {
            break;
        }
    }
    return context;
};
cc._initSys = function(config, CONFIG_KEY) {
    cc._RENDER_TYPE_CANVAS = 0;
    cc._RENDER_TYPE_WEBGL = 1;
    cc.sys = {};
    var sys = cc.sys;
    sys.LANGUAGE_ENGLISH = "en";
    sys.LANGUAGE_CHINESE = "zh";
    sys.LANGUAGE_FRENCH = "fr";
    sys.LANGUAGE_ITALIAN = "it";
    sys.LANGUAGE_GERMAN = "de";
    sys.LANGUAGE_SPANISH = "es";
    sys.LANGUAGE_DUTCH = "du";
    sys.LANGUAGE_RUSSIAN = "ru";
    sys.LANGUAGE_KOREAN = "ko";
    sys.LANGUAGE_JAPANESE = "ja";
    sys.LANGUAGE_HUNGARIAN = "hu";
    sys.LANGUAGE_PORTUGUESE = "pt";
    sys.LANGUAGE_ARABIC = "ar";
    sys.LANGUAGE_NORWEGIAN = "no";
    sys.LANGUAGE_POLISH = "pl";
    sys.OS_WINDOWS = "Windows";
    sys.OS_IOS = "iOS";
    sys.OS_OSX = "OS X";
    sys.OS_UNIX = "UNIX";
    sys.OS_LINUX = "Linux";
    sys.OS_ANDROID = "Android";
    sys.OS_UNKNOWN = "Unknown";
    sys.WINDOWS = 0;
    sys.LINUX = 1;
    sys.MACOS = 2;
    sys.ANDROID = 3;
    sys.IPHONE = 4;
    sys.IPAD = 5;
    sys.BLACKBERRY = 6;
    sys.NACL = 7;
    sys.EMSCRIPTEN = 8;
    sys.TIZEN = 9;
    sys.WINRT = 10;
    sys.WP8 = 11;
    sys.MOBILE_BROWSER = 100;
    sys.DESKTOP_BROWSER = 101;
    sys.BROWSER_TYPE_WECHAT = "wechat";
    sys.BROWSER_TYPE_ANDROID = "androidbrowser";
    sys.BROWSER_TYPE_IE = "ie";
    sys.BROWSER_TYPE_QQ = "qqbrowser";
    sys.BROWSER_TYPE_MOBILE_QQ = "mqqbrowser";
    sys.BROWSER_TYPE_UC = "ucbrowser";
    sys.BROWSER_TYPE_360 = "360browser";
    sys.BROWSER_TYPE_BAIDU_APP = "baiduboxapp";
    sys.BROWSER_TYPE_BAIDU = "baidubrowser";
    sys.BROWSER_TYPE_MAXTHON = "maxthon";
    sys.BROWSER_TYPE_OPERA = "opera";
    sys.BROWSER_TYPE_OUPENG = "oupeng";
    sys.BROWSER_TYPE_MIUI = "miuibrowser";
    sys.BROWSER_TYPE_FIREFOX = "firefox";
    sys.BROWSER_TYPE_SAFARI = "safari";
    sys.BROWSER_TYPE_CHROME = "chrome";
    sys.BROWSER_TYPE_LIEBAO = "liebao";
    sys.BROWSER_TYPE_QZONE = "qzone";
    sys.BROWSER_TYPE_SOUGOU = "sogou";
    sys.BROWSER_TYPE_UNKNOWN = "unknown";
    sys.isNative = false;
    var browserSupportWebGL = [ sys.BROWSER_TYPE_BAIDU, sys.BROWSER_TYPE_OPERA, sys.BROWSER_TYPE_FIREFOX, sys.BROWSER_TYPE_CHROME, sys.BROWSER_TYPE_SAFARI ];
    var osSupportWebGL = [ sys.OS_IOS, sys.OS_WINDOWS, sys.OS_OSX, sys.OS_LINUX ];
    var multipleAudioWhiteList = [ sys.BROWSER_TYPE_BAIDU, sys.BROWSER_TYPE_OPERA, sys.BROWSER_TYPE_FIREFOX, sys.BROWSER_TYPE_CHROME, sys.BROWSER_TYPE_BAIDU_APP, sys.BROWSER_TYPE_SAFARI, sys.BROWSER_TYPE_UC, sys.BROWSER_TYPE_QQ, sys.BROWSER_TYPE_MOBILE_QQ, sys.BROWSER_TYPE_IE ];
    var win = window, nav = win.navigator, doc = document, docEle = doc.documentElement;
    var ua = nav.userAgent.toLowerCase();
    sys.isMobile = ua.indexOf("mobile") != -1 || ua.indexOf("android") != -1;
    sys.platform = sys.isMobile ? sys.MOBILE_BROWSER : sys.DESKTOP_BROWSER;
    var currLanguage = nav.language;
    currLanguage = currLanguage ? currLanguage : nav.browserLanguage;
    currLanguage = currLanguage ? currLanguage.split("-")[0] : sys.LANGUAGE_ENGLISH;
    sys.language = currLanguage;
    var browserType = sys.BROWSER_TYPE_UNKNOWN;
    var browserTypes = ua.match(/sogou|qzone|liebao|micromessenger|qqbrowser|ucbrowser|360 aphone|360browser|baiduboxapp|baidubrowser|maxthon|trident|oupeng|opera|miuibrowser|firefox/i) || ua.match(/chrome|safari/i);
    if (browserTypes && browserTypes.length > 0) {
        browserType = browserTypes[0];
        if (browserType == "micromessenger") {
console.log("/frameworks/cocos2d-html5/CCBoot.js->895");
        } else {
            if (browserType === "safari" && ua.match(/android.*applewebkit/)) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->898");
            } else {
                if (browserType == "trident") {
console.log("/frameworks/cocos2d-html5/CCBoot.js->901");
                } else {
                    if (browserType == "360 aphone") {
console.log("/frameworks/cocos2d-html5/CCBoot.js->904");
                    }
                }
            }
        }
    }
    sys.browserType = browserType;
    var iOS = ua.match(/(iPad|iPhone|iPod)/i) ? true : false;
    var isAndroid = ua.match(/android/i) || nav.platform.match(/android/i) ? true : false;
    var osName = sys.OS_UNKNOWN;
    if (nav.appVersion.indexOf("Win") != -1) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->915");
    } else {
        if (iOS) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->918");
        } else {
            if (nav.appVersion.indexOf("Mac") != -1) {
                osName = sys.OS_OSX;
            } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->923");
console.log("/frameworks/cocos2d-html5/CCBoot.js->924");
console.log("/frameworks/cocos2d-html5/CCBoot.js->925");
console.log("/frameworks/cocos2d-html5/CCBoot.js->926");
console.log("/frameworks/cocos2d-html5/CCBoot.js->927");
console.log("/frameworks/cocos2d-html5/CCBoot.js->928");
console.log("/frameworks/cocos2d-html5/CCBoot.js->929");
console.log("/frameworks/cocos2d-html5/CCBoot.js->930");
console.log("/frameworks/cocos2d-html5/CCBoot.js->931");
console.log("/frameworks/cocos2d-html5/CCBoot.js->932");
console.log("/frameworks/cocos2d-html5/CCBoot.js->933");
            }
        }
    }
    sys.os = osName;
    sys._supportMultipleAudio = multipleAudioWhiteList.indexOf(sys.browserType) > -1;
    var userRenderMode = parseInt(config[CONFIG_KEY.renderMode]);
    var renderType = cc._RENDER_TYPE_WEBGL;
    var tempCanvas = cc.newElement("Canvas");
    cc._supportRender = true;
    var notSupportGL = !window.WebGLRenderingContext || browserSupportWebGL.indexOf(sys.browserType) == -1 || osSupportWebGL.indexOf(sys.os) == -1;
    if (userRenderMode === 1 || userRenderMode === 0 && notSupportGL || location.origin == "file://") {
console.log("/frameworks/cocos2d-html5/CCBoot.js->945");
    }
    sys._canUseCanvasNewBlendModes = function() {
        var canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        var context = canvas.getContext("2d");
        context.fillStyle = "#000";
        context.fillRect(0, 0, 1, 1);
        context.globalCompositeOperation = "multiply";
        var canvas2 = document.createElement("canvas");
        canvas2.width = 1;
        canvas2.height = 1;
        var context2 = canvas2.getContext("2d");
        context2.fillStyle = "#fff";
        context2.fillRect(0, 0, 1, 1);
        context.drawImage(canvas2, 0, 0, 1, 1);
        return context.getImageData(0, 0, 1, 1).data[0] === 0;
    };
    sys._supportCanvasNewBlendModes = sys._canUseCanvasNewBlendModes();
    if (renderType == cc._RENDER_TYPE_WEBGL) {
        if (!win.WebGLRenderingContext || !cc.create3DContext(tempCanvas, {
            stencil: true,
            preserveDrawingBuffer: true
        })) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->970");
console.log("/frameworks/cocos2d-html5/CCBoot.js->971");
console.log("/frameworks/cocos2d-html5/CCBoot.js->972");
console.log("/frameworks/cocos2d-html5/CCBoot.js->973");
console.log("/frameworks/cocos2d-html5/CCBoot.js->974");
        }
    }
    if (renderType == cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->978");
console.log("/frameworks/cocos2d-html5/CCBoot.js->979");
console.log("/frameworks/cocos2d-html5/CCBoot.js->980");
console.log("/frameworks/cocos2d-html5/CCBoot.js->981");
console.log("/frameworks/cocos2d-html5/CCBoot.js->982");
    }
    cc._renderType = renderType;
    try {
        sys._supportWebAudio = !!(win.AudioContext || win.webkitAudioContext || win.mozAudioContext);
    } catch (e) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->988");
    }
    try {
        var localStorage = sys.localStorage = win.localStorage;
        localStorage.setItem("storage", "");
        localStorage.removeItem("storage");
        localStorage = null;
    } catch (e) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->996");
console.log("/frameworks/cocos2d-html5/CCBoot.js->997");
console.log("/frameworks/cocos2d-html5/CCBoot.js->998");
console.log("/frameworks/cocos2d-html5/CCBoot.js->999");
    }
    var capabilities = sys.capabilities = {
        canvas: true
    };
    if (cc._renderType == cc._RENDER_TYPE_WEBGL) {
        capabilities["opengl"] = true;
    }
    if (docEle["ontouchstart"] !== undefined || doc["ontouchstart"] !== undefined || nav.msPointerEnabled) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1008");
    }
    if (docEle["onmouseup"] !== undefined) {
        capabilities["mouse"] = true;
    }
    if (docEle["onkeyup"] !== undefined) {
        capabilities["keyboard"] = true;
    }
    if (win.DeviceMotionEvent || win.DeviceOrientationEvent) {
        capabilities["accelerometer"] = true;
    }
    sys.garbageCollect = function() {};
    sys.dumpRoot = function() {};
    sys.restartVM = function() {};
    sys.cleanScript = function(jsfile) {};
    sys.dump = function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1024");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1025");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1026");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1027");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1028");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1029");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1030");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1031");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1032");
    };
};
cc.ORIENTATION_PORTRAIT = 0;
cc.ORIENTATION_PORTRAIT_UPSIDE_DOWN = 1;
cc.ORIENTATION_LANDSCAPE_LEFT = 2;
cc.ORIENTATION_LANDSCAPE_RIGHT = 3;
cc._drawingUtil = null;
cc._renderContext = null;
cc._canvas = null;
cc._gameDiv = null;
cc._rendererInitialized = false;
cc._setupCalled = false;
cc._setup = function(el, width, height) {
    if (cc._setupCalled) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1047");
    } else {
        cc._setupCalled = true;
    }
    var win = window;
    var element = cc.$(el) || cc.$("#" + el);
    var localCanvas, localContainer, localConStyle;
    cc.game._setAnimFrame();
    if (element.tagName == "CANVAS") {
        width = width || element.width;
        height = height || element.height;
        localContainer = cc.container = cc.newElement("DIV");
        localCanvas = cc._canvas = element;
        localCanvas.parentNode.insertBefore(localContainer, localCanvas);
        localCanvas.appendTo(localContainer);
        localContainer.setAttribute("id", "Cocos2dGameContainer");
    } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1064");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1065");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1066");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1067");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1068");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1069");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1070");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1071");
    }
    localCanvas.addClass("gameCanvas");
    localCanvas.setAttribute("width", width || 480);
    localCanvas.setAttribute("height", height || 320);
    localCanvas.setAttribute("tabindex", 99);
    localCanvas.style.outline = "none";
    localConStyle = localContainer.style;
    localConStyle.width = (width || 480) + "px";
    localConStyle.height = (height || 320) + "px";
    localConStyle.margin = "0 auto";
    localConStyle.position = "relative";
    localConStyle.overflow = "hidden";
    localContainer.top = "100%";
    if (cc._renderType == cc._RENDER_TYPE_WEBGL) {
        cc._renderContext = cc.webglContext = cc.create3DContext(localCanvas, {
            stencil: true,
            preserveDrawingBuffer: true,
            antialias: !cc.sys.isMobile,
            alpha: false
        });
    }
    if (cc._renderContext) {
        win.gl = cc._renderContext;
        cc._drawingUtil = new cc.DrawingPrimitiveWebGL(cc._renderContext);
        cc._rendererInitialized = true;
        cc.textureCache._initializingRenderer();
        cc.shaderCache._init();
    } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1100");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1101");
    }
    cc._gameDiv = localContainer;
    cc.log(cc.ENGINE_VERSION);
    cc._setContextMenuEnable(false);
    if (cc.sys.isMobile) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1107");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1108");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1109");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1110");
    }
    cc.view = cc.EGLView._getInstance();
    cc.inputManager.registerSystemEvent(cc._canvas);
    cc.director = cc.Director._getInstance();
    if (cc.director.setOpenGLView) {
        cc.director.setOpenGLView(cc.view);
    }
    cc.winSize = cc.director.getWinSize();
    cc.saxParser = new cc.SAXParser;
    cc.plistParser = new cc.PlistParser;
};
cc._checkWebGLRenderMode = function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1123");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1124");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1125");
};
cc._isContextMenuEnable = false;
cc._setContextMenuEnable = function(enabled) {
    cc._isContextMenuEnable = enabled;
    cc._canvas.oncontextmenu = function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1131");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1132");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1133");
    };
};
cc.game = {
    DEBUG_MODE_NONE: 0,
    DEBUG_MODE_INFO: 1,
    DEBUG_MODE_WARN: 2,
    DEBUG_MODE_ERROR: 3,
    DEBUG_MODE_INFO_FOR_WEB_PAGE: 4,
    DEBUG_MODE_WARN_FOR_WEB_PAGE: 5,
    DEBUG_MODE_ERROR_FOR_WEB_PAGE: 6,
    EVENT_HIDE: "game_on_hide",
    EVENT_SHOW: "game_on_show",
    _eventHide: null,
    _eventShow: null,
    _onBeforeStartArr: [],
    CONFIG_KEY: {
        engineDir: "engineDir",
        dependencies: "dependencies",
        debugMode: "debugMode",
        showFPS: "showFPS",
        frameRate: "frameRate",
        id: "id",
        renderMode: "renderMode",
        jsList: "jsList",
        classReleaseMode: "classReleaseMode"
    },
    _prepareCalled: false,
    _prepared: false,
    _paused: true,
    _intervalId: null,
    _lastTime: null,
    _frameTime: null,
    config: null,
    onStart: null,
    onStop: null,
    setFrameRate: function(frameRate) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1170");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1171");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1172");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1173");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1174");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1175");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1176");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1177");
    },
    _setAnimFrame: function() {
        this._lastTime = new Date;
        this._frameTime = 1e3 / cc.game.config[cc.game.CONFIG_KEY.frameRate];
        if (cc.sys.os === cc.sys.OS_IOS && cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT || cc.game.config[cc.game.CONFIG_KEY.frameRate] != 60) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1183");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1184");
        } else {
            window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || this._stTime;
            window.cancelAnimationFrame = window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || this._ctTime;
        }
    },
    _stTime: function(callback) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1191");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1192");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1193");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1194");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1195");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1196");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1197");
    },
    _ctTime: function(id) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1200");
    },
    _runMainLoop: function() {
        var self = this, callback, config = self.config, CONFIG_KEY = self.CONFIG_KEY, director = cc.director;
        director.setDisplayStats(config[CONFIG_KEY.showFPS]);
        callback = function() {
            if (!self._paused) {
                director.mainLoop();
                if (self._intervalId) {
                    window.cancelAnimationFrame(self._intervalId);
                }
                self._intervalId = window.requestAnimFrame(callback);
            }
        };
        if (window.asdfasd == undefined) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1215");
        }
        if (window.asdfasd == 124) {
            console.log("-------------" + window.asdfasd);
            window.requestAnimFrame(callback);
        }
        window.asdfasd++;
        self._paused = false;
    },
    restart: function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1225");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1226");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1227");
    },
    run: function(id) {
        var self = this;
        var _run = function() {
            if (id) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1233");
            }
            if (!self._prepareCalled) {
                self.prepare(function() {
                    self._prepared = true;
                });
            }
            if (cc._supportRender) {
                self._checkPrepare = setInterval(function() {
                    if (self._prepared) {
                        cc._setup(self.config[self.CONFIG_KEY.id]);
                        self._runMainLoop();
                        self._eventHide = self._eventHide || new cc.EventCustom(self.EVENT_HIDE);
                        self._eventHide.setUserData(self);
                        self._eventShow = self._eventShow || new cc.EventCustom(self.EVENT_SHOW);
                        self._eventShow.setUserData(self);
                        self.onStart();
                        clearInterval(self._checkPrepare);
                    }
                }, 10);
            }
        };
        document.body ? _run() : cc._addEventListener(window, "load", function() {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1256");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1257");
        }, false);
    },
    _initConfig: function() {
        var self = this, CONFIG_KEY = self.CONFIG_KEY;
        var _init = function(cfg) {
            cfg[CONFIG_KEY.engineDir] = cfg[CONFIG_KEY.engineDir] || "frameworks/cocos2d-html5";
            if (cfg[CONFIG_KEY.debugMode] == null) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1265");
            }
            cfg[CONFIG_KEY.frameRate] = cfg[CONFIG_KEY.frameRate] || 60;
            if (cfg[CONFIG_KEY.renderMode] == null) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1269");
            }
            return cfg;
        };
        if (document["ccConfig"]) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1274");
        } else {
            try {
                var cocos_script = document.getElementsByTagName("script");
                for (var i = 0; i < cocos_script.length; i++) {
                    var _t = cocos_script[i].getAttribute("cocos");
                    if (_t == "" || _t) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1281");
                    }
                }
                var _src, txt, _resPath;
                if (i < cocos_script.length) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1286");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1287");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1288");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1289");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1290");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1291");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1292");
                }
                if (!txt) {
                    txt = cc.loader._loadTxtSync("project.json");
                }
                var data = JSON.parse(txt);
                self.config = _init(data || {});
            } catch (e) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1300");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1301");
            }
        }
        cc._initSys(self.config, CONFIG_KEY);
    },
    _jsAddedCache: {},
    _getJsListOfModule: function(moduleMap, moduleName, dir) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1308");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1309");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1310");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1311");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1312");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1313");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1314");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1315");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1316");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1317");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1318");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1319");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1320");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1321");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1322");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1323");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1324");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1325");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1326");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1327");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1328");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1329");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1330");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1331");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1332");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1333");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1334");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1335");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1336");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1337");
    },
    prepare: function(cb) {
        var self = this;
        var config = self.config, CONFIG_KEY = self.CONFIG_KEY, engineDir = config[CONFIG_KEY.engineDir], loader = cc.loader;
        if (!cc._supportRender) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1343");
        }
        self._prepareCalled = true;
        var jsList = config[CONFIG_KEY.jsList] || [];
        if (cc.Class) {
            loader.loadJsWithImg("", jsList, function(err) {
                if (err) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1350");
                }
                self._prepared = true;
                if (cb) {
                    cb();
                }
            });
        } else {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1358");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1359");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1360");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1361");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1362");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1363");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1364");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1365");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1366");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1367");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1368");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1369");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1370");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1371");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1372");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1373");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1374");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1375");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1376");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1377");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1378");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1379");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1380");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1381");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1382");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1383");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1384");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1385");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1386");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1387");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1388");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1389");
        }
    }
};
cc.game._initConfig();
Function.prototype.bind = Function.prototype.bind || function(oThis) {
console.log("/frameworks/cocos2d-html5/CCBoot.js->1395");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1396");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1397");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1398");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1399");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1400");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1401");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1402");
console.log("/frameworks/cocos2d-html5/CCBoot.js->1403");
};