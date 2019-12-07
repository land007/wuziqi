cc.textureCache = {
    _textures: {},
    _textureColorsCache: {},
    _textureKeySeq: 0 | Math.random() * 1e3,
    _loadedTexturesBefore: {},
    _initializingRenderer: function() {
        var selPath;
        var locLoadedTexturesBefore = this._loadedTexturesBefore, locTextures = this._textures;
        for (selPath in locLoadedTexturesBefore) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->12");
        }
        this._loadedTexturesBefore = {};
    },
    addPVRTCImage: function(filename) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->17");
    },
    addETCImage: function(filename) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->20");
    },
    description: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->23");
    },
    textureForKey: function(textureKeyName) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->27");
    },
    getTextureForKey: function(textureKeyName) {
        return this._textures[textureKeyName] || this._textures[cc.loader._aliases[textureKeyName]];
    },
    getKeyByTexture: function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->38");
    },
    _generalTextureKey: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->42");
    },
    getTextureColors: function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->56");
    },
    addPVRImage: function(path) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->59");
    },
    removeAllTextures: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->68");
    },
    removeTexture: function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->80");
    },
    removeTextureForKey: function(textureKeyName) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->88");
    },
    cacheImage: function(path, texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->98");
    },
    addUIImage: function(image, key) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->114");
    },
    dumpCachedTextureInfo: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->139");
    },
    _clear: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->145");
    }
};
if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureCache.js->180");
} else {
    cc.assert(cc.isFunction(cc._tmp.WebGLTextureCache), cc._LogInfos.MissingFile, "TexturesWebGL.js");
    cc._tmp.WebGLTextureCache();
    delete cc._tmp.WebGLTextureCache;
}