(function(load, baseParser) {
    var cache = {};
    var Parser = baseParser.extend({
        getNodeJson: function(json) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->5");
        },
        parseNode: function(json, resourcePath, file) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->8");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->9");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->10");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->11");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->12");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->13");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->14");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->15");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->16");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->17");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->18");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->19");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->20");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->21");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->24");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->25");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->27");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->28");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->29");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->35");
        }
    });
    var parser = new Parser;
    var frameList = [ {
        name: "PositionFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->46");
        }
    }, {
        name: "VisibleFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->51");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->54");
        }
    }, {
        name: "ScaleFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->64");
        }
    }, {
        name: "RotationFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->72");
        }
    }, {
        name: "SkewFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->82");
        }
    }, {
        name: "RotationSkewFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->92");
        }
    }, {
        name: "AnchorFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->101");
        }
    }, {
        name: "InnerActionFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->111");
        }
    }, {
        name: "ColorFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->124");
        }
    }, {
        name: "AlphaFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->132");
        }
    }, {
        name: "TextureFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->148");
        }
    }, {
        name: "EventFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->156");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->158");
        }
    }, {
        name: "ZOrderFrame",
        handle: function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->163");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->164");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->165");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->166");
        }
    } ];
    frameList.forEach(function(item) {
        parser.registerParser(item.name, function(options, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->171");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->172");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->173");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->174");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->175");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->176");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->177");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->178");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->179");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->180");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->181");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/action-1.x.js->182");
        });
    });
    load.registerParser("action", "*", parser);
})(ccs._load, ccs._parser);