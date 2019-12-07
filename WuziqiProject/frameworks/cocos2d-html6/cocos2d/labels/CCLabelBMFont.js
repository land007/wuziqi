cc.LABEL_AUTOMATIC_WIDTH = -1;
cc.LabelBMFont = cc.SpriteBatchNode.extend({
    _opacityModifyRGB: false,
    _string: "",
    _config: null,
    _fntFile: "",
    _initialString: "",
    _alignment: cc.TEXT_ALIGNMENT_CENTER,
    _width: -1,
    _lineBreakWithoutSpaces: false,
    _imageOffset: null,
    _reusedChar: null,
    _textureLoaded: false,
    _className: "LabelBMFont",
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->20");
    },
    _setString: function(newString, needUpdateLabel) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->42");
    },
    ctor: function(str, fntFile, width, alignment, imageOffset) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->50");
    },
    textureLoaded: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->53");
    },
    addLoadedEventListener: function(callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->56");
    },
    isOpacityModifyRGB: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->59");
    },
    setOpacityModifyRGB: function(opacityModifyRGB) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->71");
    },
    _changeTextureColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->74");
    },
    init: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->77");
    },
    initWithString: function(str, fntFile, width, alignment, imageOffset) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->125");
    },
    createFontChars: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->195");
    },
    updateString: function(fromUpdate) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->213");
    },
    getString: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->216");
    },
    setString: function(newString, needUpdateLabel) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->227");
    },
    _setStringForSetter: function(newString) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->230");
    },
    setCString: function(label) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->233");
    },
    _getCharsWidth: function(startIndex, endIndex) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->241");
    },
    _checkWarp: function(strArr, i, maxWidth, initStringWrapNum) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->295");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->303");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->311");
    },
    updateLabel: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->319");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->320");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->321");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->324");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->325");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->337");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->355");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->356");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->357");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->358");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->363");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->369");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->387");
    },
    setAlignment: function(alignment) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->391");
    },
    _getAlignment: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->394");
    },
    setBoundingWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->397");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->398");
    },
    _getBoundingWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->401");
    },
    setLineBreakWithoutSpace: function(breakWithoutSpace) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->405");
    },
    setScale: function(scale, scaleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->409");
    },
    setScaleX: function(scaleX) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->413");
    },
    setScaleY: function(scaleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->417");
    },
    setFntFile: function(fntFile) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->428");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->430");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->431");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->432");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->433");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->441");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->442");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->445");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->446");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->447");
    },
    getFntFile: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->450");
    },
    setTexture: function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->453");
    },
    setAnchorPoint: function(point, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->456");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->457");
    },
    _setAnchorX: function(x) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->460");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->461");
    },
    _setAnchorY: function(y) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->464");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->465");
    },
    _atlasNameFromFntFile: function(fntFile) {},
    _kerningAmountForFirst: function(first, second) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->469");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->470");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->471");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->472");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->475");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->476");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->477");
    },
    _getLetterPosXLeft: function(sp) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->480");
    },
    _getLetterPosXRight: function(sp) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->483");
    },
    _isspace_unicode: function(ch) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->486");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->487");
    },
    _utf8_trim_ws: function(str) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->490");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->491");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->492");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->493");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->494");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->495");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->496");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->497");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->498");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->499");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->500");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->501");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->502");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->503");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->504");
    },
    _utf8_trim_from: function(str, index) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->507");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->508");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->509");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->510");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->511");
    }
});
(function() {
    var p = cc.LabelBMFont.prototype;
    cc.EventHelper.prototype.apply(p);
    p.string;
    cc.defineGetterSetter(p, "string", p.getString, p._setStringForSetter);
    p.boundingWidth;
    cc.defineGetterSetter(p, "boundingWidth", p._getBoundingWidth, p.setBoundingWidth);
    p.textAlign;
    cc.defineGetterSetter(p, "textAlign", p._getAlignment, p.setAlignment);
})();
cc.LabelBMFont.create = function(str, fntFile, width, alignment, imageOffset) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->525");
};
cc._fntLoader = {
    INFO_EXP: /info [^\n]*(\n|$)/gi,
    COMMON_EXP: /common [^\n]*(\n|$)/gi,
    PAGE_EXP: /page [^\n]*(\n|$)/gi,
    CHAR_EXP: /char [^\n]*(\n|$)/gi,
    KERNING_EXP: /kerning [^\n]*(\n|$)/gi,
    ITEM_EXP: /\w+=[^ \r\n]+/gi,
    INT_EXP: /^[\-]?\d+$/,
    _parseStrToObj: function(str) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->536");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->537");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->538");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->539");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->540");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->541");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->542");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->543");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->544");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->545");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->546");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->547");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->548");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->549");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->550");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->551");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->552");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->553");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->554");
    },
    parseFnt: function(fntStr, url) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->557");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->558");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->559");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->560");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->561");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->562");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->563");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->564");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->565");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->566");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->567");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->568");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->569");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->570");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->571");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->572");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->573");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->574");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->575");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->576");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->577");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->578");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->579");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->580");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->581");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->582");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->583");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->584");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->585");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->586");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->587");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->588");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->589");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->590");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->591");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->592");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->593");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->594");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->595");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->596");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->597");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->598");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->599");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->600");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->601");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->602");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->603");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->604");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->605");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->606");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->607");
    },
    load: function(realUrl, url, res, cb) {
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->610");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->611");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->612");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->613");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->614");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->615");
console.log("/frameworks/cocos2d-html5/cocos2d/labels/CCLabelBMFont.js->616");
    }
};
cc.loader.register([ "fnt" ], cc._fntLoader);