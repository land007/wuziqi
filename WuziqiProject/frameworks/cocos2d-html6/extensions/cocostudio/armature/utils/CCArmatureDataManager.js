ccs.RelativeData = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->2");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->3");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->4");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->5");
};
ccs.armatureDataManager = {
    _animationDatas: {},
    _armatureDatas: {},
    _textureDatas: {},
    _autoLoadSpriteFile: false,
    _relativeDatas: {},
    s_sharedArmatureDataManager: null,
    removeArmatureFileInfo: function(configFilePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->15");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->16");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->17");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->18");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->19");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->20");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->21");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->24");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->25");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->27");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->28");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->29");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->35");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->36");
    },
    addArmatureData: function(id, armatureData, configFilePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->43");
    },
    getArmatureData: function(id) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->50");
    },
    removeArmatureData: function(id) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->55");
    },
    addAnimationData: function(id, animationData, configFilePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->62");
    },
    getAnimationData: function(id) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->69");
    },
    removeAnimationData: function(id) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->74");
    },
    addTextureData: function(id, textureData, configFilePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->81");
    },
    getTextureData: function(id) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->88");
    },
    removeTextureData: function(id) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->93");
    },
    addArmatureFileInfo: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->112");
    },
    addArmatureFileInfoAsync: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->135");
    },
    addSpriteFrameFromFile: function(plistPath, imagePath, configFilePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->142");
    },
    isAutoLoadSpriteFile: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->145");
    },
    getArmatureDatas: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->148");
    },
    getAnimationDatas: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->151");
    },
    getTextureDatas: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->154");
    },
    addRelativeData: function(configFilePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->159");
    },
    getRelativeData: function(configFilePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->162");
    },
    clear: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->165");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->166");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->167");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/utils/CCArmatureDataManager.js->169");
    }
};