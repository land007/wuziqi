cc._globalFontSize = cc.ITEM_SIZE;
cc._globalFontName = "Arial";
cc._globalFontNameRelease = false;
cc.MenuItem = cc.Node.extend({
    _enabled: false,
    _target: null,
    _callback: null,
    _isSelected: false,
    _className: "MenuItem",
    ctor: function(callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->22");
    },
    isSelected: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->25");
    },
    setOpacityModifyRGB: function(value) {},
    isOpacityModifyRGB: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->29");
    },
    setTarget: function(selector, rec) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->33");
    },
    isEnabled: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->36");
    },
    setEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->39");
    },
    initWithCallback: function(callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->48");
    },
    rect: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->52");
    },
    selected: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->55");
    },
    unselected: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->58");
    },
    setCallback: function(callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->62");
    },
    activate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->79");
    }
});
var _p = cc.MenuItem.prototype;
_p.enabled;
cc.defineGetterSetter(_p, "enabled", _p.isEnabled, _p.setEnabled);
cc.MenuItem.create = function(callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->86");
};
cc.MenuItemLabel = cc.MenuItem.extend({
    _disabledColor: null,
    _label: null,
    _originalScale: 0,
    _colorBackup: null,
    ctor: function(label, selector, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->105");
    },
    getDisabledColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->108");
    },
    setDisabledColor: function(color) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->111");
    },
    getLabel: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->114");
    },
    setLabel: function(label) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->127");
    },
    setEnabled: function(enabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->139");
    },
    setOpacity: function(opacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->142");
    },
    getOpacity: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->145");
    },
    setColor: function(color) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->148");
    },
    getColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->151");
    },
    initWithLabel: function(label, selector, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->161");
    },
    setString: function(label) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->166");
    },
    getString: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->169");
    },
    activate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->176");
    },
    selected: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->190");
    },
    unselected: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->199");
    }
});
var _p = cc.MenuItemLabel.prototype;
_p.string;
cc.defineGetterSetter(_p, "string", _p.getString, _p.setString);
_p.disabledColor;
cc.defineGetterSetter(_p, "disabledColor", _p.getDisabledColor, _p.setDisabledColor);
_p.label;
cc.defineGetterSetter(_p, "label", _p.getLabel, _p.setLabel);
cc.MenuItemLabel.create = function(label, selector, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->210");
};
cc.MenuItemAtlasFont = cc.MenuItemLabel.extend({
    ctor: function(value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->218");
    },
    initWithString: function(value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->227");
    }
});
cc.MenuItemAtlasFont.create = function(value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->231");
};
cc.MenuItemFont = cc.MenuItemLabel.extend({
    _fontSize: null,
    _fontName: null,
    ctor: function(value, callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->246");
    },
    initWithString: function(value, callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->256");
    },
    setFontSize: function(s) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->260");
    },
    getFontSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->263");
    },
    setFontName: function(name) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->267");
    },
    getFontName: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->270");
    },
    _recreateLabel: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->274");
    }
});
cc.MenuItemFont.setFontSize = function(fontSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->278");
};
cc.MenuItemFont.fontSize = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->281");
};
cc.MenuItemFont.setFontName = function(name) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->288");
};
var _p = cc.MenuItemFont.prototype;
_p.fontSize;
cc.defineGetterSetter(_p, "fontSize", _p.getFontSize, _p.setFontSize);
_p.fontName;
cc.defineGetterSetter(_p, "fontName", _p.getFontName, _p.setFontName);
cc.MenuItemFont.fontName = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->296");
};
cc.MenuItemFont.create = function(value, callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->299");
};
cc.MenuItemSprite = cc.MenuItem.extend({
    _normalImage: null,
    _selectedImage: null,
    _disabledImage: null,
    ctor: function(normalSprite, selectedSprite, three, four, five) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->319");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->320");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->321");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->324");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->325");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->335");
    },
    getNormalImage: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->338");
    },
    setNormalImage: function(normalImage) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->355");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->356");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->357");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->358");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->361");
    },
    getSelectedImage: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->364");
    },
    setSelectedImage: function(selectedImage) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->369");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->379");
    },
    getDisabledImage: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->382");
    },
    setDisabledImage: function(disabledImage) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->391");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->392");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->393");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->395");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->396");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->397");
    },
    initWithNormalSprite: function(normalSprite, selectedSprite, disabledSprite, callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->401");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->403");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->405");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->413");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->419");
    },
    setColor: function(color) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->428");
    },
    getColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->431");
    },
    setOpacity: function(opacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->440");
    },
    getOpacity: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->443");
    },
    selected: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->446");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->447");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->448");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->449");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->450");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->451");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->452");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->453");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->454");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->455");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->456");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->457");
    },
    unselected: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->460");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->461");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->462");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->463");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->464");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->465");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->466");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->467");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->468");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->469");
    },
    setEnabled: function(bEnabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->472");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->475");
    },
    _updateImagesVisibility: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->478");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->479");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->480");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->481");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->482");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->483");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->484");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->485");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->486");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->487");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->488");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->489");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->490");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->491");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->492");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->493");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->494");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->495");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->496");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->497");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->498");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->499");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->500");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->501");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->502");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->503");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->504");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->505");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->506");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->507");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->508");
    }
});
var _p = cc.MenuItemSprite.prototype;
_p.normalImage;
cc.defineGetterSetter(_p, "normalImage", _p.getNormalImage, _p.setNormalImage);
_p.selectedImage;
cc.defineGetterSetter(_p, "selectedImage", _p.getSelectedImage, _p.setSelectedImage);
_p.disabledImage;
cc.defineGetterSetter(_p, "disabledImage", _p.getDisabledImage, _p.setDisabledImage);
cc.MenuItemSprite.create = function(normalSprite, selectedSprite, three, four, five) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->519");
};
cc.MenuItemImage = cc.MenuItemSprite.extend({
    ctor: function(normalImage, selectedImage, three, four, five) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->523");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->524");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->525");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->526");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->527");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->528");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->529");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->530");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->531");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->532");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->533");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->534");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->535");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->536");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->537");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->538");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->539");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->540");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->541");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->542");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->543");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->544");
    },
    setNormalSpriteFrame: function(frame) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->547");
    },
    setSelectedSpriteFrame: function(frame) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->550");
    },
    setDisabledSpriteFrame: function(frame) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->553");
    },
    initWithNormalImage: function(normalImage, selectedImage, disabledImage, callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->556");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->557");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->558");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->559");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->560");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->561");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->562");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->563");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->564");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->565");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->566");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->567");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->568");
    }
});
cc.MenuItemImage.create = function(normalImage, selectedImage, three, four, five) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->572");
};
cc.MenuItemToggle = cc.MenuItem.extend({
    subItems: null,
    _selectedIndex: 0,
    _opacity: null,
    _color: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->580");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->581");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->582");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->583");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->584");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->585");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->586");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->587");
    },
    getOpacity: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->590");
    },
    setOpacity: function(opacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->593");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->594");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->595");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->596");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->597");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->598");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->599");
    },
    getColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->602");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->603");
    },
    setColor: function(color) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->606");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->607");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->608");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->609");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->610");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->611");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->612");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->613");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->614");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->615");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->616");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->617");
    },
    getSelectedIndex: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->620");
    },
    setSelectedIndex: function(SelectedIndex) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->623");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->624");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->625");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->626");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->627");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->628");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->629");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->630");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->631");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->632");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->633");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->634");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->635");
    },
    getSubItems: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->638");
    },
    setSubItems: function(subItems) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->641");
    },
    initWithItems: function(args) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->644");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->645");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->646");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->647");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->648");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->649");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->650");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->651");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->652");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->653");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->654");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->655");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->656");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->657");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->658");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->659");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->660");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->661");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->662");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->663");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->664");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->665");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->666");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->667");
    },
    addSubItem: function(item) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->670");
    },
    activate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->673");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->674");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->675");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->676");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->677");
    },
    selected: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->680");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->681");
    },
    unselected: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->684");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->685");
    },
    setEnabled: function(enabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->688");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->689");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->690");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->691");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->692");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->693");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->694");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->695");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->696");
    },
    selectedItem: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->699");
    },
    getSelectedItem: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->702");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->705");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->706");
    }
});
var _p = cc.MenuItemToggle.prototype;
_p.selectedIndex;
cc.defineGetterSetter(_p, "selectedIndex", _p.getSelectedIndex, _p.setSelectedIndex);
cc.MenuItemToggle.create = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->713");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->714");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->715");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->716");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->717");
console.log("/frameworks/cocos2d-html5/cocos2d/menus/CCMenuItem.js->718");
};