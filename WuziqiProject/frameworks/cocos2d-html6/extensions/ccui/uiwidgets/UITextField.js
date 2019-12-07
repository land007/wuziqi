ccui._TextFieldRenderer = cc.TextFieldTTF.extend({
    _maxLengthEnabled: false,
    _maxLength: 0,
    _passwordEnabled: false,
    _passwordStyleText: "",
    _attachWithIME: false,
    _detachWithIME: false,
    _insertText: false,
    _deleteBackward: false,
    _className: "_TextFieldRenderer",
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->12");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->13");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->14");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->15");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->16");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->17");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->18");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->19");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->20");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->23");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->24");
    },
    onTextFieldAttachWithIME: function(sender) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->27");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->28");
    },
    onTextFieldInsertText: function(sender, text, len) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->31");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->32");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->33");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->34");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->35");
    },
    onTextFieldDeleteBackward: function(sender, delText, nLen) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->38");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->39");
    },
    onTextFieldDetachWithIME: function(sender) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->42");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->43");
    },
    insertText: function(text, len) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->46");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->47");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->48");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->49");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->50");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->51");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->52");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->53");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->54");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->55");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->56");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->57");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->58");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->59");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->60");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->61");
    },
    deleteBackward: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->64");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->65");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->66");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->67");
    },
    openIME: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->70");
    },
    closeIME: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->73");
    },
    setMaxLengthEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->76");
    },
    isMaxLengthEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->79");
    },
    setMaxLength: function(length) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->82");
    },
    getMaxLength: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->85");
    },
    getCharCount: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->88");
    },
    setPasswordEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->91");
    },
    isPasswordEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->94");
    },
    setPasswordStyleText: function(styleText) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->97");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->98");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->99");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->100");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->101");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->102");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->103");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->104");
    },
    setPasswordText: function(text) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->107");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->108");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->109");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->110");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->111");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->112");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->113");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->114");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->116");
    },
    setAttachWithIME: function(attach) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->119");
    },
    getAttachWithIME: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->122");
    },
    setDetachWithIME: function(detach) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->125");
    },
    getDetachWithIME: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->128");
    },
    setInsertText: function(insert) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->131");
    },
    getInsertText: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->134");
    },
    setDeleteBackward: function(deleteBackward) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->137");
    },
    getDeleteBackward: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->140");
    },
    onDraw: function(sender) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->143");
    }
});
ccui._TextFieldRenderer.create = function(placeholder, fontName, fontSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->147");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->148");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->149");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->150");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->151");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->152");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->153");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->154");
};
ccui.TextField = ccui.Widget.extend({
    _textFieldRenderer: null,
    _touchWidth: 0,
    _touchHeight: 0,
    _useTouchArea: false,
    _textFieldEventListener: null,
    _textFieldEventSelector: null,
    _passwordStyleText: "",
    _textFieldRendererAdaptDirty: true,
    _fontName: "",
    _fontSize: 12,
    _ccEventCallback: null,
    ctor: function(placeholder, fontName, fontSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->169");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->170");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->171");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->172");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->173");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->174");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->175");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->176");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->177");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->178");
    },
    init: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->181");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->182");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->183");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->184");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->185");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->188");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->189");
    },
    _initRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->192");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->193");
    },
    setTouchSize: function(size) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->196");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->197");
    },
    setTouchAreaEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->200");
    },
    hitTest: function(pt) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->203");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->204");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->205");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->206");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->207");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->208");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->209");
    },
    getTouchSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->212");
    },
    setText: function(text) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->215");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->216");
    },
    setString: function(text) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->219");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->220");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->221");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->222");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->223");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->224");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->225");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->226");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->227");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->228");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->229");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->230");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->231");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->232");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->233");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->234");
    },
    setPlaceHolder: function(value) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->237");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->238");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->239");
    },
    getPlaceHolder: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->242");
    },
    getPlaceHolderColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->245");
    },
    setPlaceHolderColor: function(color) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->248");
    },
    setTextColor: function(textColor) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->251");
    },
    setFontSize: function(size) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->254");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->255");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->256");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->257");
    },
    getFontSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->260");
    },
    setFontName: function(name) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->263");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->264");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->265");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->266");
    },
    getFontName: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->269");
    },
    didNotSelectSelf: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->272");
    },
    getStringValue: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->275");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->276");
    },
    getString: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->279");
    },
    getStringLength: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->282");
    },
    onTouchBegan: function(touchPoint, unusedEvent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->285");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->286");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->287");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->288");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->289");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->290");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->291");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->292");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->293");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->294");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->295");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->296");
    },
    setMaxLengthEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->299");
    },
    isMaxLengthEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->302");
    },
    setMaxLength: function(length) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->305");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->306");
    },
    getMaxLength: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->309");
    },
    setPasswordEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->312");
    },
    isPasswordEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->315");
    },
    setPasswordStyleText: function(styleText) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->318");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->319");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->320");
    },
    getPasswordStyleText: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->323");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->326");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->327");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->328");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->329");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->330");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->331");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->332");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->333");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->334");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->335");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->336");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->337");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->338");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->339");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->340");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->341");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->342");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->343");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->344");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->345");
    },
    getAttachWithIME: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->348");
    },
    setAttachWithIME: function(attach) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->351");
    },
    getDetachWithIME: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->354");
    },
    setDetachWithIME: function(detach) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->357");
    },
    getInsertText: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->360");
    },
    setInsertText: function(insertText) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->363");
    },
    getDeleteBackward: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->366");
    },
    setDeleteBackward: function(deleteBackward) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->369");
    },
    _attachWithIMEEvent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->372");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->373");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->374");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->375");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->376");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->377");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->378");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->379");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->380");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->381");
    },
    _detachWithIMEEvent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->384");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->385");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->386");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->387");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->388");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->389");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->390");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->391");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->392");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->393");
    },
    _insertTextEvent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->396");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->397");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->398");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->399");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->400");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->401");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->402");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->403");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->404");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->405");
    },
    _deleteBackwardEvent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->408");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->409");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->410");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->411");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->412");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->413");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->414");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->415");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->416");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->417");
    },
    addEventListenerTextField: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->420");
    },
    addEventListener: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->423");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->424");
    },
    _onSizeChanged: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->427");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->428");
    },
    _adaptRenderers: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->431");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->432");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->433");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->434");
    },
    _textfieldRendererScaleChangedWithSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->437");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->438");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->439");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->440");
    },
    getAutoRenderSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->443");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->444");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->445");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->446");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->447");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->448");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->449");
    },
    getVirtualRendererSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->452");
    },
    getVirtualRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->455");
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->458");
    },
    attachWithIME: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->461");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->464");
    },
    _copySpecialProperties: function(textField) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->467");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->468");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->469");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->470");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->471");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->472");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->473");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->474");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->475");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->476");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->477");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->478");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->479");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->480");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->481");
    },
    setTextAreaSize: function(size) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->484");
    },
    setTextHorizontalAlignment: function(alignment) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->487");
    },
    setTextVerticalAlignment: function(alignment) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->490");
    },
    _setFont: function(font) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->493");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->494");
    },
    _getFont: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->497");
    },
    _changePosition: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->500");
    }
});
ccui.TextField.create = function(placeholder, fontName, fontSize) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UITextField.js->504");
};
var _p = ccui.TextField.prototype;
_p.string;
cc.defineGetterSetter(_p, "string", _p.getString, _p.setString);
_p.placeHolder;
cc.defineGetterSetter(_p, "placeHolder", _p.getPlaceHolder, _p.setPlaceHolder);
_p.font;
cc.defineGetterSetter(_p, "font", _p._getFont, _p._setFont);
_p.fontSize;
cc.defineGetterSetter(_p, "fontSize", _p.getFontSize, _p.setFontSize);
_p.fontName;
cc.defineGetterSetter(_p, "fontName", _p.getFontName, _p.setFontName);
_p.maxLengthEnabled;
cc.defineGetterSetter(_p, "maxLengthEnabled", _p.isMaxLengthEnabled, _p.setMaxLengthEnabled);
_p.maxLength;
cc.defineGetterSetter(_p, "maxLength", _p.getMaxLength, _p.setMaxLength);
_p.passwordEnabled;
cc.defineGetterSetter(_p, "passwordEnabled", _p.isPasswordEnabled, _p.setPasswordEnabled);
_p = null;
ccui.TextField.EVENT_ATTACH_WITH_IME = 0;
ccui.TextField.EVENT_DETACH_WITH_IME = 1;
ccui.TextField.EVENT_INSERT_TEXT = 2;
ccui.TextField.EVENT_DELETE_BACKWARD = 3;
ccui.TextField.RENDERER_ZORDER = -1;