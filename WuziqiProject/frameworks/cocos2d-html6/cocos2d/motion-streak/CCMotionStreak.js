cc.MotionStreak = cc.Node.extend({
    texture: null,
    fastMode: false,
    startingPositionInitialized: false,
    _blendFunc: null,
    _stroke: 0,
    _fadeDelta: 0,
    _minSeg: 0,
    _maxPoints: 0,
    _nuPoints: 0,
    _previousNuPoints: 0,
    _pointVertexes: null,
    _pointState: null,
    _vertices: null,
    _colorPointer: null,
    _texCoords: null,
    _verticesBuffer: null,
    _colorPointerBuffer: null,
    _texCoordsBuffer: null,
    _className: "MotionStreak",
    ctor: function(fade, minSeg, stroke, color, texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->44");
    },
    getTexture: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->47");
    },
    setTexture: function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->52");
    },
    getBlendFunc: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->55");
    },
    setBlendFunc: function(src, dst) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->63");
    },
    getOpacity: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->67");
    },
    setOpacity: function(opacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->70");
    },
    setOpacityModifyRGB: function(value) {},
    isOpacityModifyRGB: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->74");
    },
    isFastMode: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->77");
    },
    setFastMode: function(fastMode) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->80");
    },
    isStartingPositionInitialized: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->83");
    },
    setStartingPositionInitialized: function(startingPositionInitialized) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->86");
    },
    initWithFade: function(fade, minSeg, stroke, color, texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->127");
    },
    tintWithColor: function(color) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->136");
    },
    reset: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->139");
    },
    setPosition: function(position, yValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->149");
    },
    getPositionX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->152");
    },
    setPositionX: function(x) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->158");
    },
    getPositionY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->161");
    },
    setPositionY: function(y) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->167");
    },
    update: function(delta) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->262");
    },
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->269");
    }
});
cc.MotionStreak.create = function(fade, minSeg, stroke, color, texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/motion-streak/CCMotionStreak.js->273");
};