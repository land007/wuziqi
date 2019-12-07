cc.IMEKeyboardNotificationInfo = function(begin, end, duration) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->2");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->3");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->4");
};
cc.IMEDelegate = cc.Class.extend({
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->8");
    },
    removeDelegate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->11");
    },
    attachWithIME: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->14");
    },
    detachWithIME: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->17");
    },
    canAttachWithIME: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->20");
    },
    didAttachWithIME: function() {},
    canDetachWithIME: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->24");
    },
    didDetachWithIME: function() {},
    insertText: function(text, len) {},
    deleteBackward: function() {},
    getContentText: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->30");
    },
    keyboardWillShow: function(info) {},
    keyboardDidShow: function(info) {},
    keyboardWillHide: function(info) {},
    keyboardDidHide: function(info) {}
});
cc.IMEDispatcher = cc.Class.extend({
    _domInputControl: null,
    impl: null,
    _currentInputString: "",
    _lastClickPosition: null,
    ctor: function() {
        this.impl = new cc.IMEDispatcher.Impl;
        this._lastClickPosition = cc.p(0, 0);
    },
    init: function() {
        if (cc.sys.isMobile) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->48");
        }
        this._domInputControl = cc.$("#imeDispatcherInput");
        if (!this._domInputControl) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->63");
        }
        var selfPointer = this;
        cc._addEventListener(this._domInputControl, "input", function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->67");
        }, false);
        cc._addEventListener(this._domInputControl, "keydown", function(e) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->79");
        }, false);
        if (/msie/i.test(navigator.userAgent)) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->86");
        }
        cc._addEventListener(window, "mousedown", function(event) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->92");
        }, false);
    },
    _processDomInputString: function(text) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->111");
    },
    dispatchInsertText: function(text, len) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->120");
    },
    dispatchDeleteBackward: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->129");
    },
    getContentText: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->136");
    },
    dispatchKeyboardWillShow: function(info) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->146");
    },
    dispatchKeyboardDidShow: function(info) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->156");
    },
    dispatchKeyboardWillHide: function(info) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->166");
    },
    dispatchKeyboardDidHide: function(info) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->176");
    },
    addDelegate: function(delegate) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->185");
    },
    attachDelegateWithIME: function(delegate) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->208");
    },
    _focusDomInput: function(delegate) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->227");
    },
    _domInputControlTranslate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->235");
    },
    detachDelegateWithIME: function(delegate) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->250");
    },
    removeDelegate: function(delegate) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->264");
    },
    processKeycode: function(keyCode) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->283");
    }
});
cc.IMEDispatcher.Impl = cc.Class.extend({
    _delegateWithIme: null,
    _delegateList: null,
    ctor: function() {
        this._delegateList = [];
    },
    findDelegate: function(delegate) {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->295");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->298");
    }
});
cc.imeDispatcher = new cc.IMEDispatcher;
document.body ? cc.imeDispatcher.init() : cc._addEventListener(window, "load", function() {
console.log("/frameworks/cocos2d-html5/cocos2d/text-input/CCIMEDispatcher.js->303");
}, false);