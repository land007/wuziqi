ccs._load = function() {
    var load = function(file, type) {
        var json = cc.loader.getRes(file);
        if (!json) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->5");
        }
        var ext = extname(file).toLocaleLowerCase();
        if (ext !== "json" && ext !== "exportjson") {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->9");
        }
        var parse;
        if (!type) {
            if (json["widgetTree"]) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->14");
            } else {
                if (json["nodeTree"]) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->17");
                } else {
                    if (json["Content"] && json["Content"]["Content"]) {
                        parse = parser["timeline"];
                    } else {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->24");
                    }
                }
            }
        } else {
            parse = parser[type];
        }
        if (!parse) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->33");
        }
        var version = json["version"] || json["Version"];
        if (!version && json["armature_data"]) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->37");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->38");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->40");
        }
        var currentParser = getParser(parse, version);
        if (!currentParser) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->45");
        }
        return currentParser.parse(file, json) || null;
    };
    var parser = {
        ccui: {},
        timeline: {},
        action: {},
        scene: {}
    };
    load.registerParser = function(name, version, target) {
        if (!name || !version || !target) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->57");
        }
        if (!parser[name]) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->60");
        }
        parser[name][version] = target;
    };
    load.getParser = function(name, version) {
        if (name && version) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->66");
        }
        if (name) {
            return parser[name];
        }
        return parser;
    };
    var extname = function(fileName) {
        var arr = fileName.match(extnameReg);
        return arr && arr[1] ? arr[1] : null;
    };
    var extnameReg = /\.([^\.]+)$/;
    var parserReg = /([^\.](\.\*)?)*$/;
    var getParser = function(parser, version) {
        if (parser[version]) {
            return parser[version];
        } else {
            if (version === "*") {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->84");
            } else {
                return getParser(parser, version.replace(parserReg, "*"));
            }
        }
    };
    return load;
}();
ccs._parser = cc.Class.extend({
    ctor: function() {
        this.parsers = {};
    },
    _dirnameReg: /\S*\//,
    _dirname: function(path) {
        var arr = path.match(this._dirnameReg);
        return arr && arr[0] ? arr[0] : "";
    },
    getClass: function(json) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->102");
    },
    getNodeJson: function(json) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->105");
    },
    parse: function(file, json) {
        var resourcePath = this._dirname(file);
        this.pretreatment(json, resourcePath);
        var node = this.parseNode(this.getNodeJson(json), resourcePath, file);
        node && this.deferred(json, resourcePath, node, file);
        return node;
    },
    pretreatment: function(json, resourcePath, file) {},
    deferred: function(json, resourcePath, node, file) {},
    parseNode: function(json, resourcePath) {
        var parser = this.parsers[this.getClass(json)];
        var widget = null;
        if (parser) {
            widget = parser.call(this, json, resourcePath);
        } else {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->122");
        }
        return widget;
    },
    registerParser: function(widget, parse) {
        this.parsers[widget] = parse;
    }
});
ccs.load = function(file) {
    var object = {
        node: null,
        action: null
    };
    object.node = ccs._load(file);
    object.action = ccs._load(file, "action");
    if (object.action && object.action.tag === -1 && object.node) {
        object.action.tag = object.node.tag;
    }
    return object;
};
ccs.actionTimelineCache = {
    createAction: function(file) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->144");
    }
};
ccs.csLoader = {
    createNode: function(file) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/load.js->149");
    }
};