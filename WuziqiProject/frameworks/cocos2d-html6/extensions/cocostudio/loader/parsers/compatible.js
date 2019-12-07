(function() {
    ccs.uiReader = {
        _fileDesignSizes: {},
        widgetFromJsonFile: function(file) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->5");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->6");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->7");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->8");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->9");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->10");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->11");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->12");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->13");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->14");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->15");
        },
        registerTypeAndCallBack: function(classType, ins, object, callback) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->18");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->19");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->20");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->21");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->24");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->25");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->27");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->28");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->29");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->35");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->36");
        },
        getVersionInteger: function(version) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->50");
        },
        storeFileDesignSize: function(fileName, size) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->53");
        },
        getFileDesignSize: function(fileName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->56");
        },
        getFilePath: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->59");
        },
        setFilePath: function(path) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->62");
        },
        getParseObjectMap: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->65");
        },
        getParseCallBackMap: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->68");
        },
        clear: function() {}
    };
    var parser = ccs._load.getParser("ccui")["*"];
    ccs.imageViewReader = {
        setPropsFromJsonDictionary: parser.ImageViewAttributes
    };
    ccs.buttonReader = {
        setPropsFromJsonDictionary: parser.ButtonAttributes
    };
    ccs.checkBoxReader = {
        setPropsFromJsonDictionary: parser.CheckBoxAttributes
    };
    ccs.labelAtlasReader = {
        setPropsFromJsonDictionary: parser.TextAtlasAttributes
    };
    ccs.labelBMFontReader = {
        setPropsFromJsonDictionary: parser.TextBMFontAttributes
    };
    ccs.labelReader = {
        setPropsFromJsonDictionary: parser.TextAttributes
    };
    ccs.layoutReader = {
        setPropsFromJsonDictionary: parser.LayoutAttributes
    };
    ccs.listViewReader = {
        setPropsFromJsonDictionary: parser.ListViewAttributes
    };
    ccs.loadingBarReader = {
        setPropsFromJsonDictionary: parser.LoadingBarAttributes
    };
    ccs.pageViewReader = {
        setPropsFromJsonDictionary: parser.PageViewAttributes
    };
    ccs.scrollViewReader = {
        setPropsFromJsonDictionary: parser.ScrollViewAttributes
    };
    ccs.sliderReader = {
        setPropsFromJsonDictionary: parser.SliderAttributes
    };
    ccs.textFieldReader = {
        setPropsFromJsonDictionary: parser.TextFieldAttributes
    };
})();
(function() {
    ccs.sceneReader = {
        _node: null,
        createNodeWithSceneFile: function(file) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->119");
        },
        getNodeByTag: function(tag) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->128");
        },
        _nodeByTag: function(parent, tag) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->148");
        },
        version: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->151");
        },
        setTarget: function() {},
        clear: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/compatible.js->156");
        }
    };
})();