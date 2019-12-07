(function(load, baseParser) {
    var cache = {};
    var Parser = baseParser.extend({
        getNodeJson: function(json) {
            return json["Content"]["Content"]["Animation"];
        },
        parseNode: function(json, resourcePath, file) {
            if (!json) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->9");
            }
            if (cache[file]) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->12");
            }
            var self = this, action = new ccs.ActionTimeline;
            action.setDuration(json["Duration"]);
            action.setTimeSpeed(json["Speed"] || 1);
            var timelines = json["Timelines"];
            timelines.forEach(function(timeline) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->19");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->20");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->21");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->24");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->25");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->27");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->28");
            });
            cache[file] = action;
            cache[file].retain();
            return action.clone();
        },
        deferred: function(json, resourcePath, action, file) {
            if (cc.sys.isNative) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->36");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->37");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->38");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->49");
            }
        }
    });
    var parser = new Parser;
    var frameList = [ {
        name: "Position",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->57");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->61");
        }
    }, {
        name: "VisibleForFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->69");
        }
    }, {
        name: "Scale",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->79");
        }
    }, {
        name: "Rotation",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->87");
        }
    }, {
        name: "Skew",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->97");
        }
    }, {
        name: "RotationSkew",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->107");
        }
    }, {
        name: "Anchor",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->112");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->113");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->116");
        }
    }, {
        name: "InnerAction",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->126");
        }
    }, {
        name: "CColor",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->140");
        }
    }, {
        name: "Alpha",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->148");
        }
    }, {
        name: "FileData",
        handle: function(options, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->156");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->159");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->160");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->161");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->162");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->163");
        }
    }, {
        name: "FrameEvent",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->169");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->170");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->171");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->172");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->173");
        }
    }, {
        name: "ZOrder",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->178");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->179");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->180");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->181");
        }
    }, {
        name: "ActionValue",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->186");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->187");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->188");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->189");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->190");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->191");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->192");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->193");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->194");
        }
    } ];
    frameList.forEach(function(item) {
        parser.registerParser(item.name, function(options, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->199");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->200");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->201");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->202");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->203");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->204");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->205");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->206");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->207");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->208");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->209");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->210");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-2.x.js->211");
        });
    });
    load.registerParser("action", "2.*", parser);
})(ccs._load, ccs._parser);