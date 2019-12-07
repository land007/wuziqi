ccui.RichElement = ccui.Class.extend({
    _type: 0,
    _tag: 0,
    _color: null,
    _opacity: 0,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->7");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->8");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->9");
    },
    init: function(tag, color, opacity) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->12");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->13");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->14");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->15");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->16");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->17");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->18");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->19");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->20");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->21");
    }
});
ccui.RichElementText = ccui.RichElement.extend({
    _text: "",
    _fontName: "",
    _fontSize: 0,
    ctor: function(tag, color, opacity, text, fontName, fontSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->29");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->30");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->31");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->32");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->33");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->34");
    },
    init: function(tag, color, opacity, text, fontName, fontSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->37");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->38");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->39");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->40");
    }
});
ccui.RichElementText.create = function(tag, color, opacity, text, fontName, fontSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->44");
};
ccui.RichElementImage = ccui.RichElement.extend({
    _filePath: "",
    _textureRect: null,
    _textureType: 0,
    ctor: function(tag, color, opacity, filePath) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->51");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->52");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->53");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->54");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->55");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->56");
    },
    init: function(tag, color, opacity, filePath) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->59");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->60");
    }
});
ccui.RichElementImage.create = function(tag, color, opacity, filePath) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->64");
};
ccui.RichElementCustomNode = ccui.RichElement.extend({
    _customNode: null,
    ctor: function(tag, color, opacity, customNode) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->69");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->70");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->71");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->72");
    },
    init: function(tag, color, opacity, customNode) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->75");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->76");
    }
});
ccui.RichElementCustomNode.create = function(tag, color, opacity, customNode) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->80");
};
ccui.RichText = ccui.Widget.extend({
    _formatTextDirty: false,
    _richElements: null,
    _elementRenders: null,
    _leftSpaceWidth: 0,
    _verticalSpace: 0,
    _elementRenderersContainer: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->90");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->91");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->92");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->93");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->94");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->95");
    },
    _initRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->98");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->99");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->100");
    },
    insertElement: function(element, index) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->103");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->104");
    },
    pushBackElement: function(element) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->107");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->108");
    },
    removeElement: function(element) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->111");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->112");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->113");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->114");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->116");
    },
    formatText: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->119");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->120");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->121");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->124");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->125");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->126");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->127");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->128");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->129");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->130");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->131");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->132");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->133");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->134");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->135");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->136");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->137");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->138");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->139");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->140");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->141");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->142");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->143");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->144");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->145");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->146");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->147");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->148");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->149");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->150");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->151");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->152");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->153");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->154");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->155");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->156");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->157");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->158");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->159");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->160");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->161");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->162");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->163");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->164");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->165");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->166");
    },
    _handleTextRenderer: function(text, fontName, fontSize, color) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->169");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->170");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->171");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->172");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->173");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->174");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->175");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->176");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->177");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->178");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->179");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->180");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->181");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->182");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->183");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->184");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->185");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->186");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->187");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->188");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->189");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->190");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->191");
    },
    _handleImageRenderer: function(filePath, color, opacity) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->194");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->195");
    },
    _handleCustomRenderer: function(renderer) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->198");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->199");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->200");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->201");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->202");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->203");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->204");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->205");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->206");
    },
    _addNewLine: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->209");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->210");
    },
    formatRenderers: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->213");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->214");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->215");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->216");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->217");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->218");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->219");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->220");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->221");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->222");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->223");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->224");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->225");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->226");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->227");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->228");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->229");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->230");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->231");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->232");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->233");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->234");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->235");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->236");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->237");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->238");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->239");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->240");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->241");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->242");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->243");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->244");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->245");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->246");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->247");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->248");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->249");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->250");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->251");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->252");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->253");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->254");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->255");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->256");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->257");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->258");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->259");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->260");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->261");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->262");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->263");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->264");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->265");
    },
    _pushToContainer: function(renderer) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->268");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->269");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->270");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->271");
    },
    _adaptRenderers: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->274");
    },
    setVerticalSpace: function(space) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->277");
    },
    setAnchorPoint: function(pt) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->280");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->281");
    },
    _setAnchorX: function(x) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->284");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->285");
    },
    _setAnchorY: function(y) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->288");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->289");
    },
    getVirtualRendererSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->292");
    },
    ignoreContentAdaptWithSize: function(ignore) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->295");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->296");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->297");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->298");
    },
    getContentSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->301");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->302");
    },
    _getWidth: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->305");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->306");
    },
    _getHeight: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->309");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->310");
    },
    setContentSize: function(contentSize, height) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->313");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->314");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->315");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->316");
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->319");
    }
});
ccui.RichText.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UIRichText.js->323");
};
ccui.RichElement.TEXT = 0;
ccui.RichElement.IMAGE = 1;
ccui.RichElement.CUSTOM = 2;