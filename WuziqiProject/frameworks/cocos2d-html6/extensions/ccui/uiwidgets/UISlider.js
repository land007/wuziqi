ccui.Slider = ccui.Widget.extend({
    _barRenderer: null,
    _progressBarRenderer: null,
    _barTextureSize: null,
    _progressBarTextureSize: null,
    _slidBallNormalRenderer: null,
    _slidBallPressedRenderer: null,
    _slidBallDisabledRenderer: null,
    _slidBallRenderer: null,
    _barLength: 0,
    _percent: 0,
    _scale9Enabled: false,
    _prevIgnoreSize: true,
    _textureFile: "",
    _progressBarTextureFile: "",
    _slidBallNormalTextureFile: "",
    _slidBallPressedTextureFile: "",
    _slidBallDisabledTextureFile: "",
    _capInsetsBarRenderer: null,
    _capInsetsProgressBarRenderer: null,
    _sliderEventListener: null,
    _sliderEventSelector: null,
    _barTexType: ccui.Widget.LOCAL_TEXTURE,
    _progressBarTexType: ccui.Widget.LOCAL_TEXTURE,
    _ballNTexType: ccui.Widget.LOCAL_TEXTURE,
    _ballPTexType: ccui.Widget.LOCAL_TEXTURE,
    _ballDTexType: ccui.Widget.LOCAL_TEXTURE,
    _isTextureLoaded: false,
    _className: "Slider",
    _barRendererAdaptDirty: true,
    _progressBarRendererDirty: true,
    _unifySize: false,
    _zoomScale: .1,
    _sliderBallNormalTextureScaleX: 1,
    _sliderBallNormalTextureScaleY: 1,
    ctor: function(barTextureName, normalBallTextureName, resType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->37");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->38");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->39");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->40");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->41");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->42");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->43");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->44");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->45");
    },
    init: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->48");
    },
    _initRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->51");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->52");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->53");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->54");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->55");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->56");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->57");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->58");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->59");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->60");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->61");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->62");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->63");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->64");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->65");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->66");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->67");
    },
    loadBarTexture: function(fileName, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->70");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->71");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->72");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->73");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->74");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->75");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->76");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->77");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->78");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->79");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->80");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->81");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->82");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->83");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->84");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->85");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->86");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->87");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->88");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->89");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->90");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->91");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->92");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->93");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->94");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->95");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->96");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->97");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->98");
    },
    loadProgressBarTexture: function(fileName, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->101");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->102");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->103");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->104");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->105");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->106");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->107");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->108");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->109");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->110");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->111");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->112");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->113");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->114");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->116");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->117");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->118");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->119");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->120");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->121");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->124");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->125");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->126");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->127");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->128");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->129");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->130");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->131");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->132");
    },
    setScale9Enabled: function(able) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->135");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->136");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->137");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->138");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->139");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->140");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->141");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->142");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->143");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->144");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->145");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->146");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->147");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->148");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->149");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->150");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->151");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->152");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->153");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->154");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->155");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->156");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->157");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->158");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->159");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->160");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->161");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->162");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->163");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->164");
    },
    isScale9Enabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->167");
    },
    ignoreContentAdaptWithSize: function(ignore) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->170");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->171");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->172");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->173");
    },
    setCapInsets: function(capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->176");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->177");
    },
    setCapInsetsBarRenderer: function(capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->180");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->181");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->182");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->183");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->184");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->185");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->186");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->187");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->188");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->189");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->190");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->191");
    },
    getCapInsetsBarRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->194");
    },
    setCapInsetProgressBarRenderer: function(capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->197");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->198");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->199");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->200");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->201");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->202");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->203");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->204");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->205");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->206");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->207");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->208");
    },
    getCapInsetsProgressBarRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->211");
    },
    loadSlidBallTextures: function(normal, pressed, disabled, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->214");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->215");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->216");
    },
    loadSlidBallTextureNormal: function(normal, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->219");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->220");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->221");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->222");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->223");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->224");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->225");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->226");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->227");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->228");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->229");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->230");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->231");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->232");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->233");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->234");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->235");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->236");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->237");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->238");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->239");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->240");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->241");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->242");
    },
    loadSlidBallTexturePressed: function(pressed, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->245");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->246");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->247");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->248");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->249");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->250");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->251");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->252");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->253");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->254");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->255");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->256");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->257");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->258");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->259");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->260");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->261");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->262");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->263");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->264");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->265");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->266");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->267");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->268");
    },
    loadSlidBallTextureDisabled: function(disabled, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->271");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->272");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->273");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->274");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->275");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->276");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->277");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->278");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->279");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->280");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->281");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->282");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->283");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->284");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->285");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->286");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->287");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->288");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->289");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->290");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->291");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->292");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->293");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->294");
    },
    setPercent: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->297");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->298");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->299");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->300");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->301");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->302");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->303");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->304");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->305");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->306");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->307");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->308");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->309");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->310");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->311");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->312");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->313");
    },
    hitTest: function(pt) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->316");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->317");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->318");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->319");
    },
    onTouchBegan: function(touch, event) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->322");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->323");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->324");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->325");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->326");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->327");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->328");
    },
    onTouchMoved: function(touch, event) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->331");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->332");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->333");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->334");
    },
    onTouchEnded: function(touch, event) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->337");
    },
    onTouchCancelled: function(touch, event) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->340");
    },
    _getPercentWithBallPos: function(px) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->343");
    },
    addEventListenerSlider: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->346");
    },
    addEventListener: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->349");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->350");
    },
    _percentChangedEvent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->353");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->354");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->355");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->356");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->357");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->358");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->359");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->360");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->361");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->362");
    },
    getPercent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->365");
    },
    _onSizeChanged: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->368");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->369");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->370");
    },
    _adaptRenderers: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->373");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->374");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->375");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->376");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->377");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->378");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->379");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->380");
    },
    getVirtualRendererSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->383");
    },
    getVirtualRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->386");
    },
    _barRendererScaleChangedWithSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->389");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->390");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->391");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->392");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->393");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->394");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->395");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->396");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->397");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->398");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->399");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->400");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->401");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->402");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->403");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->404");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->405");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->406");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->407");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->408");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->409");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->410");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->411");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->412");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->413");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->414");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->415");
    },
    _progressBarRendererScaleChangedWithSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->418");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->419");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->420");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->421");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->422");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->423");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->424");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->425");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->426");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->427");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->428");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->429");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->430");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->431");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->432");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->433");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->434");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->435");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->436");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->437");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->438");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->439");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->440");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->441");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->442");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->443");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->444");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->445");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->446");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->447");
    },
    _onPressStateChangedToNormal: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->450");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->451");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->452");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->453");
    },
    _onPressStateChangedToPressed: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->456");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->457");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->458");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->459");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->460");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->461");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->462");
    },
    _onPressStateChangedToDisabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->465");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->466");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->467");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->468");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->469");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->470");
    },
    setZoomScale: function(scale) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->473");
    },
    getZoomScale: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->476");
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->479");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->482");
    },
    _copySpecialProperties: function(slider) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->485");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->486");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->487");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->488");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->489");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->490");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->491");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->492");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->493");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->494");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->495");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->496");
    }
});
var _p = ccui.Slider.prototype;
_p.percent;
cc.defineGetterSetter(_p, "percent", _p.getPercent, _p.setPercent);
_p = null;
ccui.Slider.create = function(barTextureName, normalBallTextureName, resType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UISlider.js->504");
};
ccui.Slider.EVENT_PERCENT_CHANGED = 0;
ccui.Slider.BASEBAR_RENDERER_ZORDER = -3;
ccui.Slider.PROGRESSBAR_RENDERER_ZORDER = -2;
ccui.Slider.BALL_RENDERER_ZORDER = -1;