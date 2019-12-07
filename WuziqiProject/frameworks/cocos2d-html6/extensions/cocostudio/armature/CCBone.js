ccs.Bone = ccs.Node.extend({
    _boneData: null,
    _armature: null,
    _childArmature: null,
    _displayManager: null,
    ignoreMovementBoneData: false,
    _tween: null,
    _tweenData: null,
    _parentBone: null,
    _boneTransformDirty: false,
    _worldTransform: null,
    _blendFunc: null,
    blendDirty: false,
    _worldInfo: null,
    _armatureParentBone: null,
    _dataVersion: 0,
    _className: "Bone",
    ctor: function(name) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->19");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->20");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->21");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->24");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->25");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->27");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->28");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->29");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->35");
    },
    init: function(name) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->38");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->46");
    },
    setBoneData: function(boneData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->50");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->51");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->55");
    },
    getBoneData: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->58");
    },
    setArmature: function(armature) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->68");
    },
    getArmature: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->71");
    },
    update: function(delta) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->112");
    },
    _applyParentTransform: function(parent) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->125");
    },
    setBlendFunc: function(blendFunc, dst) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->140");
    },
    updateColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->148");
    },
    updateZOrder: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->151");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->152");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->155");
    },
    addChildBone: function(child) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->159");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->160");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->161");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->162");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->163");
    },
    removeChildBone: function(bone, recursion) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->166");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->167");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->169");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->170");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->171");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->172");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->173");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->174");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->175");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->176");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->177");
    },
    removeFromParent: function(recursion) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->180");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->181");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->182");
    },
    setParentBone: function(parent) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->185");
    },
    getParentBone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->188");
    },
    setChildArmature: function(armature) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->191");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->192");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->193");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->194");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->195");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->196");
    },
    getChildArmature: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->199");
    },
    getTween: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->202");
    },
    setLocalZOrder: function(zOrder) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->205");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->206");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->207");
    },
    getNodeToArmatureTransform: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->210");
    },
    getNodeToWorldTransform: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->213");
    },
    getDisplayRenderNode: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->216");
    },
    getDisplayRenderNodeType: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->219");
    },
    addDisplay: function(displayData, index) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->222");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->223");
    },
    removeDisplay: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->226");
    },
    changeDisplayByIndex: function(index, force) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->229");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->230");
    },
    changeDisplayByName: function(name, force) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->233");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->234");
    },
    changeDisplayWithIndex: function(index, force) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->237");
    },
    changeDisplayWithName: function(name, force) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->240");
    },
    getColliderDetector: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->243");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->244");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->245");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->246");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->247");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->248");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->249");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->250");
    },
    setColliderFilter: function(filter) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->253");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->254");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->255");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->256");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->257");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->258");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->259");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->260");
    },
    getColliderFilter: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->263");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->264");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->265");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->266");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->267");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->268");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->269");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->270");
    },
    setTransformDirty: function(dirty) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->273");
    },
    isTransformDirty: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->276");
    },
    getDisplayManager: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->279");
    },
    setIgnoreMovementBoneData: function(bool) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->282");
    },
    isIgnoreMovementBoneData: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->285");
    },
    getBlendFunc: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->288");
    },
    setBlendDirty: function(dirty) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->291");
    },
    isBlendDirty: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->294");
    },
    getTweenData: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->297");
    },
    getWorldInfo: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->300");
    },
    getChildrenBone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->303");
    },
    nodeToArmatureTransform: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->306");
    },
    nodeToWorldTransform: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->309");
    },
    getColliderBodyList: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->312");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->313");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->314");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->315");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->316");
    },
    getIgnoreMovementBoneData: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->319");
    },
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->322");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->323");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->324");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->325");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->326");
    }
});
var _p = ccs.Bone.prototype;
_p.boneData;
cc.defineGetterSetter(_p, "boneData", _p.getBoneData, _p.setBoneData);
_p.armature;
cc.defineGetterSetter(_p, "armature", _p.getArmature, _p.setArmature);
_p.childArmature;
cc.defineGetterSetter(_p, "childArmature", _p.getChildArmature, _p.setChildArmature);
_p.childrenBone;
cc.defineGetterSetter(_p, "childrenBone", _p.getChildrenBone);
_p.tween;
cc.defineGetterSetter(_p, "tween", _p.getTween);
_p.tweenData;
cc.defineGetterSetter(_p, "tweenData", _p.getTweenData);
_p.colliderFilter;
cc.defineGetterSetter(_p, "colliderFilter", _p.getColliderFilter, _p.setColliderFilter);
_p = null;
ccs.Bone.create = function(name) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->346");
};
ccs.Bone.RenderCmd = {
    _updateColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->350");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->351");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->352");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->353");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->354");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->355");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->356");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->357");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->358");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->359");
    }
};
(function() {
    ccs.Bone.CanvasRenderCmd = function(renderable) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->364");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->365");
    };
    var proto = ccs.Bone.CanvasRenderCmd.prototype = Object.create(cc.Node.CanvasRenderCmd.prototype);
    cc.inject(ccs.Bone.RenderCmd, proto);
    proto.constructor = ccs.Bone.CanvasRenderCmd;
})();
(function() {
    ccs.Bone.WebGLRenderCmd = function(renderable) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->373");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCBone.js->374");
    };
    var proto = ccs.Bone.WebGLRenderCmd.prototype = Object.create(cc.Node.WebGLRenderCmd.prototype);
    cc.inject(ccs.Bone.RenderCmd, proto);
    proto.constructor = ccs.Bone.WebGLRenderCmd;
})();