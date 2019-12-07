cc.SAXParser = cc.Class.extend({
    _parser: null,
    _isSupportDOMParser: null,
    ctor: function() {
        if (window.DOMParser) {
            this._isSupportDOMParser = true;
            this._parser = new DOMParser;
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->9");
        }
    },
    parse: function(xmlTxt) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->13");
    },
    _parseXML: function(textxml) {
        var xmlDoc;
        if (this._isSupportDOMParser) {
            xmlDoc = this._parser.parseFromString(textxml, "text/xml");
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->22");
        }
        return xmlDoc;
    }
});
cc.PlistParser = cc.SAXParser.extend({
    parse: function(xmlTxt) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->42");
    },
    _parseNode: function(node) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->80");
    },
    _parseArray: function(node) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->91");
    },
    _parseDict: function(node) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCSAXParser.js->107");
    }
});