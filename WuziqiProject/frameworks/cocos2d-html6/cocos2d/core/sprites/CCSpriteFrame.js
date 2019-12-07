cc.SpriteFrame = cc.Class.extend({
    _offset: null,
    _originalSize: null,
    _rectInPixels: null,
    _rotated: false,
    _rect: null,
    _offsetInPixels: null,
    _originalSizeInPixels: null,
    _texture: null,
    _textureFilename: "",
    _textureLoaded: false,
    ctor: function(filename, rect, rotated, offset, originalSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->27");
    },
    textureLoaded: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->30");
    },
    addLoadedEventListener: function(callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->33");
    },
    getRectInPixels: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->37");
    },
    setRectInPixels: function(rectInPixels) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->47");
    },
    isRotated: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->50");
    },
    setRotated: function(bRotated) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->53");
    },
    getRect: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->57");
    },
    setRect: function(rect) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->67");
    },
    getOffsetInPixels: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->70");
    },
    setOffsetInPixels: function(offsetInPixels) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->75");
    },
    getOriginalSizeInPixels: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->78");
    },
    setOriginalSizeInPixels: function(sizeInPixels) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->82");
    },
    getOriginalSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->85");
    },
    setOriginalSize: function(sizeInPixels) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->89");
    },
    getTexture: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->102");
    },
    setTexture: function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->136");
    },
    getOffset: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->139");
    },
    setOffset: function(offsets) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->143");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->149");
    },
    copyWithZone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->155");
    },
    copy: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->158");
    },
    initWithTexture: function(texture, rect, rotated, offset, originalSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->201");
    }
});
cc.EventHelper.prototype.apply(cc.SpriteFrame.prototype);
cc.SpriteFrame.create = function(filename, rect, rotated, offset, originalSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->206");
};
cc.SpriteFrame.createWithTexture = cc.SpriteFrame.create;
cc.SpriteFrame._frameWithTextureForCanvas = function(texture, rect, rotated, offset, originalSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteFrame.js->221");
};