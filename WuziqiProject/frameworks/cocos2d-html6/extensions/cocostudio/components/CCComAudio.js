ccs.ComAudio = ccs.Component.extend({
    _filePath: "",
    _loop: false,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->5");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->6");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->7");
    },
    init: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->10");
    },
    onExit: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->13");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->14");
    },
    end: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->17");
    },
    preloadBackgroundMusic: function(pszFilePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->20");
    },
    playBackgroundMusic: function(pszFilePath, loop) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->24");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->25");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->27");
    },
    stopBackgroundMusic: function(releaseData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->30");
    },
    pauseBackgroundMusic: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->33");
    },
    resumeBackgroundMusic: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->36");
    },
    rewindBackgroundMusic: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->39");
    },
    willPlayBackgroundMusic: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->42");
    },
    isBackgroundMusicPlaying: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->45");
    },
    getBackgroundMusicVolume: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->48");
    },
    setBackgroundMusicVolume: function(volume) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->51");
    },
    getEffectsVolume: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->54");
    },
    setEffectsVolume: function(volume) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->57");
    },
    playEffect: function(pszFilePath, loop) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->64");
    },
    pauseEffect: function(soundId) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->67");
    },
    pauseAllEffects: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->70");
    },
    resumeEffect: function(soundId) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->73");
    },
    resumeAllEffects: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->76");
    },
    stopEffect: function(soundId) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->79");
    },
    stopAllEffects: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->82");
    },
    preloadEffect: function(pszFilePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->87");
    },
    unloadEffect: function(pszFilePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->90");
    },
    setFile: function(pszFilePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->93");
    },
    setLoop: function(loop) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->96");
    },
    getFile: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->99");
    },
    isLoop: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->102");
    }
});
ccs.ComAudio.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComAudio.js->106");
};