ccs.Armature = ccs.Node.extend({
    animation: null,
    armatureData: null,
    batchNode: null,
    _textureAtlas: null,
    _parentBone: null,
    _boneDic: null,
    _topBoneList: null,
    _armatureIndexDic: null,
    _offsetPoint: null,
    version: 0,
    _armatureTransformDirty: true,
    _body: null,
    _blendFunc: null,
    _className: "Armature",
    ctor: function(name, parentBone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->17");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->18");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->19");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->20");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->21");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->24");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->25");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->27");
    },
    init: function(name, parentBone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->35");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->36");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->37");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->38");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->50");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->51");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->55");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->56");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->57");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->84");
    },
    addChild: function(child, localZOrder, tag) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->91");
    },
    createBone: function(boneName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->111");
    },
    addBone: function(bone, parentName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->131");
    },
    removeBone: function(bone, recursion) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->139");
    },
    getBone: function(name) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->142");
    },
    changeBoneParent: function(bone, parentName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->148");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->149");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->150");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->151");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->152");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->156");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->159");
    },
    getBoneDic: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->162");
    },
    updateOffsetPoint: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->165");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->166");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->167");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->169");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->170");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->171");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->172");
    },
    getOffsetPoints: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->175");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->176");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->177");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->178");
    },
    setAnimation: function(animation) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->181");
    },
    getAnimation: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->184");
    },
    getArmatureTransformDirty: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->187");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->190");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->191");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->192");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->193");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->194");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->195");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->198");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->199");
    },
    onExit: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->202");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->203");
    },
    getBoundingBox: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->206");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->207");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->208");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->209");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->210");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->211");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->212");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->213");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->214");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->215");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->216");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->217");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->218");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->219");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->220");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->221");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->222");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->223");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->224");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->225");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->226");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->227");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->228");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->229");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->230");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->231");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->232");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->233");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->234");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->235");
    },
    getBoneAtPoint: function(x, y) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->238");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->239");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->240");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->241");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->242");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->243");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->244");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->245");
    },
    setParentBone: function(parentBone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->248");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->249");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->250");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->251");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->252");
    },
    getParentBone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->255");
    },
    drawContour: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->258");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->259");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->260");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->261");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->262");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->263");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->264");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->265");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->266");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->267");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->268");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->269");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->270");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->271");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->272");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->273");
    },
    setBody: function(body) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->276");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->277");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->278");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->279");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->280");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->281");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->282");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->283");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->284");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->285");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->286");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->287");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->288");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->289");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->290");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->291");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->292");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->293");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->294");
    },
    getShapeList: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->297");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->298");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->299");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->300");
    },
    getBody: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->303");
    },
    setBlendFunc: function(blendFunc, dst) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->306");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->307");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->308");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->309");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->310");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->311");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->312");
    },
    getBlendFunc: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->315");
    },
    setColliderFilter: function(filter) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->318");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->319");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->320");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->321");
    },
    getArmatureData: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->324");
    },
    setArmatureData: function(armatureData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->327");
    },
    getBatchNode: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->330");
    },
    setBatchNode: function(batchNode) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->333");
    },
    getVersion: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->336");
    },
    setVersion: function(version) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->339");
    },
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->342");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->343");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->344");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->345");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->346");
    }
});
var _p = ccs.Armature.prototype;
_p.parentBone;
cc.defineGetterSetter(_p, "parentBone", _p.getParentBone, _p.setParentBone);
_p.body;
cc.defineGetterSetter(_p, "body", _p.getBody, _p.setBody);
_p.colliderFilter;
cc.defineGetterSetter(_p, "colliderFilter", null, _p.setColliderFilter);
_p = null;
ccs.Armature.create = function(name, parentBone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmature.js->358");
};