ccui.LoadingBar = ccui.Widget.extend({
    _direction: null,
    _percent: 100,
    _totalLength: 0,
    _barRenderer: null,
    _renderBarTexType: ccui.Widget.LOCAL_TEXTURE,
    _barRendererTextureSize: null,
    _scale9Enabled: false,
    _prevIgnoreSize: true,
    _capInsets: null,
    _textureFile: "",
    _isTextureLoaded: false,
    _className: "LoadingBar",
    _barRendererAdaptDirty: true,
    ctor: function(textureName, percentage) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->16");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->17");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->18");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->19");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->20");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->21");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->22");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->23");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->24");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->25");
    },
    _initRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->28");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->29");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->30");
    },
    setDirection: function(dir) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->33");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->34");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->35");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->36");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->37");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->38");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->39");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->40");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->41");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->42");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->43");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->44");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->45");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->46");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->47");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->48");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->49");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->50");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->51");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->52");
    },
    getDirection: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->55");
    },
    loadTexture: function(texture, texType) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->58");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->59");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->60");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->61");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->62");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->63");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->64");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->65");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->66");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->67");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->68");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->69");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->70");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->71");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->72");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->73");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->74");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->75");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->76");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->77");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->78");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->79");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->80");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->81");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->82");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->83");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->84");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->85");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->86");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->87");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->88");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->89");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->90");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->91");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->92");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->93");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->94");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->95");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->96");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->97");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->98");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->99");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->100");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->101");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->102");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->103");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->104");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->105");
    },
    setScale9Enabled: function(enabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->108");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->109");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->110");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->111");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->112");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->113");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->114");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->116");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->117");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->118");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->119");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->120");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->121");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->124");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->125");
    },
    isScale9Enabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->128");
    },
    setCapInsets: function(capInsets) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->131");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->132");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->133");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->134");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->135");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->136");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->137");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->138");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->139");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->140");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->141");
    },
    getCapInsets: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->144");
    },
    setPercent: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->147");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->148");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->149");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->150");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->151");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->152");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->153");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->154");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->155");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->156");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->157");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->158");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->159");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->160");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->161");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->162");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->163");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->164");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->165");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->166");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->167");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->168");
    },
    setContentSize: function(contentSize, height) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->171");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->172");
    },
    getPercent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->175");
    },
    _onSizeChanged: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->178");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->179");
    },
    _adaptRenderers: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->182");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->183");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->184");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->185");
    },
    ignoreContentAdaptWithSize: function(ignore) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->188");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->189");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->190");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->191");
    },
    getVirtualRendererSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->194");
    },
    getVirtualRenderer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->197");
    },
    _barRendererScaleChangedWithSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->200");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->201");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->202");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->203");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->204");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->205");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->206");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->207");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->208");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->209");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->210");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->211");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->212");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->213");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->214");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->215");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->216");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->217");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->218");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->219");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->220");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->221");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->222");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->223");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->224");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->225");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->226");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->227");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->228");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->229");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->230");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->231");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->232");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->233");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->234");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->235");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->236");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->237");
    },
    _setScale9Scale: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->240");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->241");
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->244");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->247");
    },
    _copySpecialProperties: function(loadingBar) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->250");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->251");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->252");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->253");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->254");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->255");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->256");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->257");
    }
});
var _p = ccui.LoadingBar.prototype;
_p.direction;
cc.defineGetterSetter(_p, "direction", _p.getDirection, _p.setDirection);
_p.percent;
cc.defineGetterSetter(_p, "percent", _p.getPercent, _p.setPercent);
_p = null;
ccui.LoadingBar.create = function(textureName, percentage) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/UILoadingBar.js->267");
};
ccui.LoadingBar.TYPE_LEFT = 0;
ccui.LoadingBar.TYPE_RIGHT = 1;
ccui.LoadingBar.RENDERER_ZORDER = -1;