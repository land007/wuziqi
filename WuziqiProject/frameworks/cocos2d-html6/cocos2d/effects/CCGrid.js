cc.GridBase = cc.Class.extend({
    _active: false,
    _reuseGrid: 0,
    _gridSize: null,
    _texture: null,
    _step: null,
    _grabber: null,
    _isTextureFlipped: false,
    _shaderProgram: null,
    _directorProjection: 0,
    _dirty: false,
    ctor: function(gridSize, texture, flipped) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->26");
    },
    isActive: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->29");
    },
    setActive: function(active) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->37");
    },
    getReuseGrid: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->40");
    },
    setReuseGrid: function(reuseGrid) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->43");
    },
    getGridSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->46");
    },
    setGridSize: function(gridSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->50");
    },
    getStep: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->53");
    },
    setStep: function(step) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->57");
    },
    isTextureFlipped: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->60");
    },
    setTextureFlipped: function(flipped) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->66");
    },
    initWithSize: function(gridSize, texture, flipped) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->101");
    },
    beforeDraw: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->105");
    },
    afterDraw: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->120");
    },
    blit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->123");
    },
    reuse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->126");
    },
    calculateVertexPoints: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->129");
    },
    set2DProjection: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->142");
    }
});
cc.GridBase.create = function(gridSize, texture, flipped) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->146");
};
cc.Grid3D = cc.GridBase.extend({
    _texCoordinates: null,
    _vertices: null,
    _originalVertices: null,
    _indices: null,
    _texCoordinateBuffer: null,
    _verticesBuffer: null,
    _indicesBuffer: null,
    ctor: function(gridSize, texture, flipped) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->167");
    },
    vertex: function(pos) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->175");
    },
    originalVertex: function(pos) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->183");
    },
    setVertex: function(pos, vertex) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->194");
    },
    blit: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->220");
    },
    reuse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->229");
    },
    calculateVertexPoints: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->295");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->303");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->316");
    }
});
cc.Grid3D.create = function(gridSize, texture, flipped) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->320");
};
cc.TiledGrid3D = cc.GridBase.extend({
    _texCoordinates: null,
    _vertices: null,
    _originalVertices: null,
    _indices: null,
    _texCoordinateBuffer: null,
    _verticesBuffer: null,
    _indicesBuffer: null,
    ctor: function(gridSize, texture, flipped) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->337");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->341");
    },
    tile: function(pos) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->349");
    },
    originalTile: function(pos) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->355");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->356");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->357");
    },
    setTile: function(pos, coords) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->363");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->369");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->377");
    },
    blit: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->391");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->392");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->393");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->395");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->396");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->397");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->398");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->401");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->403");
    },
    reuse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->412");
    },
    calculateVertexPoints: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->428");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->430");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->431");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->432");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->433");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->441");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->442");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->445");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->446");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->447");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->448");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->449");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->450");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->451");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->452");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->453");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->454");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->455");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->456");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->457");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->458");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->459");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->460");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->461");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->462");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->463");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->464");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->465");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->466");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->467");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->468");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->469");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->470");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->471");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->472");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->475");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->476");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->477");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->478");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->479");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->480");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->481");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->482");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->483");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->484");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->485");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->486");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->487");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->488");
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->489");
    }
});
cc.TiledGrid3D.create = function(gridSize, texture, flipped) {
console.log("/frameworks/cocos2d-html5/cocos2d/effects/CCGrid.js->493");
};