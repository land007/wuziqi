cc.TextFieldDelegate = cc.Class.extend({
    onTextFieldAttachWithIME: function(sender) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->3");
    },
    onTextFieldDetachWithIME: function(sender) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->6");
    },
    onTextFieldInsertText: function(sender, text, len) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->9");
    },
    onTextFieldDeleteBackward: function(sender, delText, len) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->12");
    },
    onDraw: function(sender) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->15");
    }
});
cc.TextFieldTTF = cc.LabelTTF.extend({
    delegate: null,
    colorSpaceHolder: null,
    _colorText: null,
    _lens: null,
    _inputText: "",
    _placeHolder: "",
    _charCount: 0,
    _className: "TextFieldTTF",
    ctor: function(placeholder, dimensions, alignment, fontName, fontSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->44");
    },
    getDelegate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->47");
    },
    setDelegate: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->50");
    },
    getCharCount: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->53");
    },
    getColorSpaceHolder: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->56");
    },
    setColorSpaceHolder: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->65");
    },
    setTextColor: function(textColor) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->74");
    },
    initWithPlaceHolder: function(placeholder, dimensions, alignment, fontName, fontSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->93");
    },
    setString: function(text) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->108");
    },
    getString: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->111");
    },
    setPlaceHolder: function(text) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->118");
    },
    getPlaceHolder: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->121");
    },
    draw: function(ctx) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->128");
    },
    visit: function(ctx) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->131");
    },
    attachWithIME: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->134");
    },
    detachWithIME: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->137");
    },
    canAttachWithIME: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->140");
    },
    didAttachWithIME: function() {},
    canDetachWithIME: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->144");
    },
    didDetachWithIME: function() {},
    deleteBackward: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->163");
    },
    removeDelegate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->166");
    },
    insertText: function(text, len) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->188");
    },
    getContentText: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->191");
    },
    keyboardWillShow: function(info) {},
    keyboardDidShow: function(info) {},
    keyboardWillHide: function(info) {},
    keyboardDidHide: function(info) {}
});
var _p = cc.TextFieldTTF.prototype;
_p.charCount;
cc.defineGetterSetter(_p, "charCount", _p.getCharCount);
_p.placeHolder;
cc.defineGetterSetter(_p, "placeHolder", _p.getPlaceHolder, _p.setPlaceHolder);
cc.TextFieldTTF.create = function(placeholder, dimensions, alignment, fontName, fontSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCTextFieldTTF.js->204");
};