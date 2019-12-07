cc.AnimationFrame = cc.Class.extend({
    _spriteFrame: null,
    _delayPerUnit: 0,
    _userInfo: null,
    ctor: function(spriteFrame, delayUnits, userInfo) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->7");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->8");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->13");
    },
    copyWithZone: function(pZone) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->16");
    },
    copy: function(pZone) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->21");
    },
    initWithSpriteFrame: function(spriteFrame, delayUnits, userInfo) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->27");
    },
    getSpriteFrame: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->30");
    },
    setSpriteFrame: function(spriteFrame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->33");
    },
    getDelayUnits: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->36");
    },
    setDelayUnits: function(delayUnits) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->39");
    },
    getUserInfo: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->42");
    },
    setUserInfo: function(userInfo) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->45");
    }
});
cc.AnimationFrame.create = function(spriteFrame, delayUnits, userInfo) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->49");
};
cc.Animation = cc.Class.extend({
    _frames: null,
    _loops: 0,
    _restoreOriginalFrame: false,
    _duration: 0,
    _delayPerUnit: 0,
    _totalDelayUnits: 0,
    ctor: function(frames, delay, loops) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->73");
    },
    getFrames: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->76");
    },
    setFrames: function(frames) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->79");
    },
    addSpriteFrame: function(frame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->85");
    },
    addSpriteFrameWithFile: function(fileName) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->93");
    },
    addSpriteFrameWithTexture: function(texture, rect) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->97");
    },
    initWithAnimationFrames: function(arrayOfAnimationFrames, delayPerUnit, loops) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->111");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->117");
    },
    copyWithZone: function(pZone) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->123");
    },
    _copyFrames: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->130");
    },
    copy: function(pZone) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->133");
    },
    getLoops: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->136");
    },
    setLoops: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->139");
    },
    setRestoreOriginalFrame: function(restOrigFrame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->142");
    },
    getRestoreOriginalFrame: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->145");
    },
    getDuration: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->148");
    },
    getDelayPerUnit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->151");
    },
    setDelayPerUnit: function(delayPerUnit) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->154");
    },
    getTotalDelayUnits: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->157");
    },
    initWithSpriteFrames: function(frames, delay, loops) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->175");
    },
    retain: function() {},
    release: function() {}
});
cc.Animation.create = function(frames, delay, loops) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCAnimation.js->181");
};
cc.Animation.createWithAnimationFrames = cc.Animation.create;