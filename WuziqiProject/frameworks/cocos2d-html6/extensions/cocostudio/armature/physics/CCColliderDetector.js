ccs.PT_RATIO = 32;
ccs.ColliderFilter = ccs.Class.extend({
    _collisionType: 0,
    _group: 0,
    _categoryBits: 0,
    _groupIndex: 0,
    _maskBits: 0,
    ctor: function(collisionType, group) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->9");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->10");
    },
    updateShape: function(shape) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->13");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->14");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->15");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->16");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->17");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->18");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->19");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->20");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->21");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->24");
    }
});
ccs.ColliderBody = ccs.Class.extend({
    shape: null,
    coutourData: null,
    colliderFilter: null,
    _calculatedVertexList: null,
    ctor: function(contourData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->35");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->36");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->37");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->38");
    },
    getContourData: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->41");
    },
    setColliderFilter: function(colliderFilter) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->44");
    },
    getCalculatedVertexList: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->47");
    },
    setB2Fixture: function(fixture) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->50");
    },
    getB2Fixture: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->53");
    },
    setShape: function(shape) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->56");
    },
    getShape: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->59");
    },
    setContourData: function(contourData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->62");
    },
    getColliderFilter: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->65");
    }
});
ccs.ColliderDetector = ccs.Class.extend({
    _colliderBodyList: null,
    _bone: null,
    _body: null,
    _active: false,
    _filter: null,
    helpPoint: cc.p(0, 0),
    ctor: function(bone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->81");
    },
    init: function(bone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->89");
    },
    addContourData: function(contourData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->101");
    },
    addContourDataList: function(contourDataList) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->106");
    },
    removeContourData: function(contourData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->112");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->113");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->118");
    },
    removeAll: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->121");
    },
    setActive: function(active) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->145");
    },
    getActive: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->148");
    },
    getColliderBodyList: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->151");
    },
    setColliderFilter: function(filter) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->156");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->159");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->160");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->161");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->162");
    },
    getColliderFilter: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->165");
    },
    updateTransform: function(t) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->169");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->170");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->171");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->172");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->173");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->174");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->175");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->176");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->177");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->178");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->179");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->180");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->181");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->182");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->183");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->184");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->185");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->186");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->187");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->188");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->189");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->190");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->191");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->192");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->193");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->194");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->195");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->196");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->197");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->198");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->199");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->200");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->201");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->202");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->203");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->204");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->205");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->206");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->207");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->208");
    },
    setBody: function(body) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->211");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->212");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->213");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->214");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->215");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->216");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->217");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->218");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->219");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->220");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->221");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->222");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->223");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->224");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->225");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->226");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->227");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->228");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->229");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->230");
    },
    getBody: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->233");
    }
});
var _p = ccs.ColliderDetector.prototype;
_p.colliderFilter;
cc.defineGetterSetter(_p, "colliderFilter", _p.getColliderFilter, _p.setColliderFilter);
_p.active;
cc.defineGetterSetter(_p, "active", _p.getActive, _p.setActive);
_p.body;
cc.defineGetterSetter(_p, "body", _p.getBody, _p.setBody);
_p = null;
ccs.ColliderDetector.create = function(bone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/physics/CCColliderDetector.js->245");
};