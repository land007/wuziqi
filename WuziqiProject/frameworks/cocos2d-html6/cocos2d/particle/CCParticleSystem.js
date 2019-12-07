cc.Particle = function(pos, startPos, color, deltaColor, size, deltaSize, rotation, deltaRotation, timeToLive, atlasIndex, modeA, modeB) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->2");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->3");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->4");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->5");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->7");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->8");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->25");
};
cc.Particle.ModeA = function(dir, radialAccel, tangentialAccel) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->30");
};
cc.Particle.ModeB = function(angle, degreesPerSecond, radius, deltaRadius) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->36");
};
cc.Particle.TemporaryPoints = [ cc.p(), cc.p(), cc.p(), cc.p() ];
cc.ParticleSystem = cc.Node.extend({
    _className: "ParticleSystem",
    _plistFile: "",
    _elapsed: 0,
    _dontTint: false,
    modeA: null,
    modeB: null,
    _pointZeroForParticle: cc.p(0, 0),
    _particles: null,
    _emitCounter: 0,
    _particleIdx: 0,
    _batchNode: null,
    atlasIndex: 0,
    _transformSystemDirty: false,
    _allocatedParticles: 0,
    _isActive: false,
    particleCount: 0,
    duration: 0,
    _sourcePosition: null,
    _posVar: null,
    life: 0,
    lifeVar: 0,
    angle: 0,
    angleVar: 0,
    startSize: 0,
    startSizeVar: 0,
    endSize: 0,
    endSizeVar: 0,
    _startColor: null,
    _startColorVar: null,
    _endColor: null,
    _endColorVar: null,
    startSpin: 0,
    startSpinVar: 0,
    endSpin: 0,
    endSpinVar: 0,
    emissionRate: 0,
    _totalParticles: 0,
    _texture: null,
    _blendFunc: null,
    _opacityModifyRGB: false,
    positionType: null,
    autoRemoveOnFinish: false,
    emitterMode: 0,
    _textureLoaded: null,
    ctor: function(plistFile) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->140");
    },
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->147");
    },
    ignoreColor: function(ignore) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->150");
    },
    initTexCoordsWithRect: function(pointRect) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->153");
    },
    getBatchNode: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->156");
    },
    setBatchNode: function(batchNode) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->159");
    },
    getAtlasIndex: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->162");
    },
    setAtlasIndex: function(atlasIndex) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->165");
    },
    getDrawMode: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->168");
    },
    setDrawMode: function(drawMode) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->171");
    },
    getShapeType: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->174");
    },
    setShapeType: function(shapeType) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->177");
    },
    isActive: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->180");
    },
    getParticleCount: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->183");
    },
    setParticleCount: function(particleCount) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->186");
    },
    getDuration: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->189");
    },
    setDuration: function(duration) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->192");
    },
    getSourcePosition: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->198");
    },
    setSourcePosition: function(sourcePosition) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->201");
    },
    getPosVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->207");
    },
    setPosVar: function(posVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->210");
    },
    getLife: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->213");
    },
    setLife: function(life) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->216");
    },
    getLifeVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->219");
    },
    setLifeVar: function(lifeVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->222");
    },
    getAngle: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->225");
    },
    setAngle: function(angle) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->228");
    },
    getAngleVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->231");
    },
    setAngleVar: function(angleVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->234");
    },
    getGravity: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->241");
    },
    setGravity: function(gravity) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->247");
    },
    getSpeed: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->253");
    },
    setSpeed: function(speed) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->259");
    },
    getSpeedVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->265");
    },
    setSpeedVar: function(speedVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->271");
    },
    getTangentialAccel: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->277");
    },
    setTangentialAccel: function(tangentialAccel) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->283");
    },
    getTangentialAccelVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->289");
    },
    setTangentialAccelVar: function(tangentialAccelVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->295");
    },
    getRadialAccel: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->301");
    },
    setRadialAccel: function(radialAccel) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->307");
    },
    getRadialAccelVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->313");
    },
    setRadialAccelVar: function(radialAccelVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->319");
    },
    getRotationIsDir: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->324");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->325");
    },
    setRotationIsDir: function(t) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->331");
    },
    getStartRadius: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->337");
    },
    setStartRadius: function(startRadius) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->343");
    },
    getStartRadiusVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->349");
    },
    setStartRadiusVar: function(startRadiusVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->355");
    },
    getEndRadius: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->358");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->361");
    },
    setEndRadius: function(endRadius) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->367");
    },
    getEndRadiusVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->373");
    },
    setEndRadiusVar: function(endRadiusVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->379");
    },
    getRotatePerSecond: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->385");
    },
    setRotatePerSecond: function(degrees) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->391");
    },
    getRotatePerSecondVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->395");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->396");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->397");
    },
    setRotatePerSecondVar: function(degrees) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->401");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->403");
    },
    setScale: function(scale, scaleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->407");
    },
    setRotation: function(newRotation) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->411");
    },
    setScaleX: function(newScaleX) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->415");
    },
    setScaleY: function(newScaleY) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->419");
    },
    getStartSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->422");
    },
    setStartSize: function(startSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->425");
    },
    getStartSizeVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->428");
    },
    setStartSizeVar: function(startSizeVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->431");
    },
    getEndSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->434");
    },
    setEndSize: function(endSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->437");
    },
    getEndSizeVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->440");
    },
    setEndSizeVar: function(endSizeVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->443");
    },
    getStartColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->446");
    },
    setStartColor: function(startColor) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->449");
    },
    getStartColorVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->452");
    },
    setStartColorVar: function(startColorVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->455");
    },
    getEndColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->458");
    },
    setEndColor: function(endColor) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->461");
    },
    getEndColorVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->464");
    },
    setEndColorVar: function(endColorVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->467");
    },
    getStartSpin: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->470");
    },
    setStartSpin: function(startSpin) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->473");
    },
    getStartSpinVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->476");
    },
    setStartSpinVar: function(startSpinVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->479");
    },
    getEndSpin: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->482");
    },
    setEndSpin: function(endSpin) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->485");
    },
    getEndSpinVar: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->488");
    },
    setEndSpinVar: function(endSpinVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->491");
    },
    getEmissionRate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->494");
    },
    setEmissionRate: function(emissionRate) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->497");
    },
    getTotalParticles: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->500");
    },
    setTotalParticles: function(tp) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->503");
    },
    getTexture: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->506");
    },
    setTexture: function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->509");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->510");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->511");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->512");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->513");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->514");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->515");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->516");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->517");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->518");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->519");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->520");
    },
    getBlendFunc: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->523");
    },
    setBlendFunc: function(src, dst) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->526");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->527");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->528");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->529");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->530");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->531");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->532");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->533");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->534");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->535");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->536");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->537");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->538");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->539");
    },
    isOpacityModifyRGB: function() {
        return this._opacityModifyRGB;
    },
    setOpacityModifyRGB: function(newValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->545");
    },
    isBlendAdditive: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->548");
    },
    setBlendAdditive: function(isBlendAdditive) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->551");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->552");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->553");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->554");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->555");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->556");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->557");
    },
    getPositionType: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->560");
    },
    setPositionType: function(positionType) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->563");
    },
    isAutoRemoveOnFinish: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->566");
    },
    setAutoRemoveOnFinish: function(isAutoRemoveOnFinish) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->569");
    },
    getEmitterMode: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->572");
    },
    setEmitterMode: function(emitterMode) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->575");
    },
    init: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->578");
    },
    initWithFile: function(plistFile) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->581");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->582");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->583");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->584");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->585");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->586");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->587");
    },
    getBoundingBoxToWorld: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->590");
    },
    initWithDictionary: function(dictionary, dirname) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->593");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->594");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->595");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->596");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->597");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->598");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->599");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->600");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->601");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->602");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->603");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->604");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->605");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->606");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->607");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->608");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->609");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->610");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->611");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->612");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->613");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->614");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->615");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->616");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->617");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->618");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->619");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->620");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->621");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->622");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->623");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->624");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->625");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->626");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->627");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->628");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->629");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->630");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->631");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->632");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->633");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->634");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->635");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->636");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->637");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->638");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->639");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->640");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->641");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->642");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->643");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->644");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->645");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->646");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->647");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->648");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->649");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->650");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->651");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->652");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->653");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->654");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->655");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->656");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->657");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->658");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->659");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->660");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->661");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->662");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->663");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->664");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->665");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->666");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->667");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->668");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->669");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->670");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->671");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->672");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->673");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->674");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->675");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->676");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->677");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->678");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->679");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->680");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->681");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->682");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->683");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->684");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->685");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->686");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->687");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->688");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->689");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->690");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->691");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->692");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->693");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->694");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->695");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->696");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->697");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->698");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->699");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->700");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->701");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->702");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->703");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->704");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->705");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->706");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->707");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->708");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->709");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->710");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->711");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->712");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->713");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->714");
    },
    initWithTotalParticles: function(numberOfParticles) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->717");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->718");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->719");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->720");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->721");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->722");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->723");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->724");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->725");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->726");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->727");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->728");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->729");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->730");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->731");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->732");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->733");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->734");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->735");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->736");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->737");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->738");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->739");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->740");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->741");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->742");
    },
    destroyParticleSystem: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->745");
    },
    addParticle: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->748");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->749");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->750");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->751");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->752");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->753");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->754");
    },
    initParticle: function(particle) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->757");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->758");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->759");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->760");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->761");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->762");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->763");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->764");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->765");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->766");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->767");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->768");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->769");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->770");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->771");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->772");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->773");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->774");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->775");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->776");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->777");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->778");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->779");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->780");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->781");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->782");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->783");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->784");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->785");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->786");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->787");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->788");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->789");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->790");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->791");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->792");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->793");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->794");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->795");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->796");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->797");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->798");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->799");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->800");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->801");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->802");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->803");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->804");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->805");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->806");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->807");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->808");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->809");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->810");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->811");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->812");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->813");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->814");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->815");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->816");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->817");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->818");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->819");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->820");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->821");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->822");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->823");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->824");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->825");
    },
    stopSystem: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->828");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->829");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->830");
    },
    resetSystem: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->833");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->834");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->835");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->836");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->837");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->838");
    },
    isFull: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->841");
    },
    updateQuadWithParticle: function(particle, newPosition) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->844");
    },
    postStep: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->847");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->850");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->851");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->852");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->853");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->854");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->855");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->856");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->857");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->858");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->859");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->860");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->861");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->862");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->863");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->864");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->865");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->866");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->867");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->868");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->869");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->870");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->871");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->872");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->873");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->874");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->875");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->876");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->877");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->878");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->879");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->880");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->881");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->882");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->883");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->884");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->885");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->886");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->887");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->888");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->889");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->890");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->891");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->892");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->893");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->894");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->895");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->896");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->897");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->898");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->899");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->900");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->901");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->902");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->903");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->904");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->905");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->906");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->907");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->908");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->909");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->910");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->911");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->912");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->913");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->914");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->915");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->916");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->917");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->918");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->919");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->920");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->921");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->922");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->923");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->924");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->925");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->926");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->927");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->928");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->929");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->930");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->931");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->932");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->933");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->934");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->935");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->936");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->937");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->938");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->939");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->940");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->941");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->942");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->943");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->944");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->945");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->946");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->947");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->948");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->949");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->950");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->951");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->952");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->953");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->954");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->955");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->956");
    },
    updateWithNoTime: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->959");
    },
    _valueForKey: function(key, dict) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->962");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->963");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->964");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->965");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->966");
    },
    _updateBlendFunc: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->969");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->970");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->971");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->972");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->973");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->974");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->975");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->976");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->977");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->978");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->979");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->980");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->981");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->982");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->983");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->984");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->985");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->988");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->989");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->990");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->991");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->992");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->993");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->994");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->995");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->996");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->997");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->998");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->999");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1000");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1001");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1002");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1003");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1004");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1005");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1006");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1007");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1008");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1009");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1010");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1011");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1012");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1013");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1014");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1015");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1016");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1017");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1018");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1019");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1020");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1021");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1022");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1023");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1024");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1025");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1026");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1027");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1028");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1029");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1030");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1031");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1032");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1033");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1034");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1035");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1036");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1037");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1038");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1039");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1040");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1041");
    },
    setDisplayFrame: function(spriteFrame) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1044");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1045");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1046");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1047");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1048");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1049");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1050");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1051");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1052");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1053");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1054");
    },
    setTextureWithRect: function(texture, rect) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1057");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1058");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1059");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1060");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1061");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1062");
    },
    listenBackToForeground: function(obj) {}
});
var _p = cc.ParticleSystem.prototype;
_p.opacityModifyRGB;
cc.defineGetterSetter(_p, "opacityModifyRGB", _p.isOpacityModifyRGB, _p.setOpacityModifyRGB);
_p.batchNode;
cc.defineGetterSetter(_p, "batchNode", _p.getBatchNode, _p.setBatchNode);
_p.drawMode;
cc.defineGetterSetter(_p, "drawMode", _p.getDrawMode, _p.setDrawMode);
_p.shapeType;
cc.defineGetterSetter(_p, "shapeType", _p.getShapeType, _p.setShapeType);
_p.active;
cc.defineGetterSetter(_p, "active", _p.isActive);
_p.sourcePos;
cc.defineGetterSetter(_p, "sourcePos", _p.getSourcePosition, _p.setSourcePosition);
_p.posVar;
cc.defineGetterSetter(_p, "posVar", _p.getPosVar, _p.setPosVar);
_p.gravity;
cc.defineGetterSetter(_p, "gravity", _p.getGravity, _p.setGravity);
_p.speed;
cc.defineGetterSetter(_p, "speed", _p.getSpeed, _p.setSpeed);
_p.speedVar;
cc.defineGetterSetter(_p, "speedVar", _p.getSpeedVar, _p.setSpeedVar);
_p.tangentialAccel;
cc.defineGetterSetter(_p, "tangentialAccel", _p.getTangentialAccel, _p.setTangentialAccel);
_p.tangentialAccelVar;
cc.defineGetterSetter(_p, "tangentialAccelVar", _p.getTangentialAccelVar, _p.setTangentialAccelVar);
_p.radialAccel;
cc.defineGetterSetter(_p, "radialAccel", _p.getRadialAccel, _p.setRadialAccel);
_p.radialAccelVar;
cc.defineGetterSetter(_p, "radialAccelVar", _p.getRadialAccelVar, _p.setRadialAccelVar);
_p.rotationIsDir;
cc.defineGetterSetter(_p, "rotationIsDir", _p.getRotationIsDir, _p.setRotationIsDir);
_p.startRadius;
cc.defineGetterSetter(_p, "startRadius", _p.getStartRadius, _p.setStartRadius);
_p.startRadiusVar;
cc.defineGetterSetter(_p, "startRadiusVar", _p.getStartRadiusVar, _p.setStartRadiusVar);
_p.endRadius;
cc.defineGetterSetter(_p, "endRadius", _p.getEndRadius, _p.setEndRadius);
_p.endRadiusVar;
cc.defineGetterSetter(_p, "endRadiusVar", _p.getEndRadiusVar, _p.setEndRadiusVar);
_p.rotatePerS;
cc.defineGetterSetter(_p, "rotatePerS", _p.getRotatePerSecond, _p.setRotatePerSecond);
_p.rotatePerSVar;
cc.defineGetterSetter(_p, "rotatePerSVar", _p.getRotatePerSecondVar, _p.setRotatePerSecondVar);
_p.startColor;
cc.defineGetterSetter(_p, "startColor", _p.getStartColor, _p.setStartColor);
_p.startColorVar;
cc.defineGetterSetter(_p, "startColorVar", _p.getStartColorVar, _p.setStartColorVar);
_p.endColor;
cc.defineGetterSetter(_p, "endColor", _p.getEndColor, _p.setEndColor);
_p.endColorVar;
cc.defineGetterSetter(_p, "endColorVar", _p.getEndColorVar, _p.setEndColorVar);
_p.totalParticles;
cc.defineGetterSetter(_p, "totalParticles", _p.getTotalParticles, _p.setTotalParticles);
_p.texture;
cc.defineGetterSetter(_p, "texture", _p.getTexture, _p.setTexture);
cc.ParticleSystem.create = function(plistFile) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1122");
};
cc.ParticleSystem.createWithTotalParticles = cc.ParticleSystem.create;
cc.ParticleSystem.ModeA = function(gravity, speed, speedVar, tangentialAccel, tangentialAccelVar, radialAccel, radialAccelVar, rotationIsDir) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1126");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1127");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1128");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1129");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1130");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1131");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1132");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1133");
};
cc.ParticleSystem.ModeB = function(startRadius, startRadiusVar, endRadius, endRadiusVar, rotatePerSecond, rotatePerSecondVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1136");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1137");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1138");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1139");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1140");
console.log("/frameworks/cocos2d-html5/cocos2d/particle/CCParticleSystem.js->1141");
};
cc.ParticleSystem.SHAPE_MODE = 0;
cc.ParticleSystem.TEXTURE_MODE = 1;
cc.ParticleSystem.STAR_SHAPE = 0;
cc.ParticleSystem.BALL_SHAPE = 1;
cc.ParticleSystem.DURATION_INFINITY = -1;
cc.ParticleSystem.START_SIZE_EQUAL_TO_END_SIZE = -1;
cc.ParticleSystem.START_RADIUS_EQUAL_TO_END_RADIUS = -1;
cc.ParticleSystem.MODE_GRAVITY = 0;
cc.ParticleSystem.MODE_RADIUS = 1;
cc.ParticleSystem.TYPE_FREE = 0;
cc.ParticleSystem.TYPE_RELATIVE = 1;
cc.ParticleSystem.TYPE_GROUPED = 2;