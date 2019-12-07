cc.configuration = {
    ERROR: 0,
    STRING: 1,
    INT: 2,
    DOUBLE: 3,
    BOOLEAN: 4,
    _maxTextureSize: 0,
    _maxModelviewStackDepth: 0,
    _supportsPVRTC: false,
    _supportsNPOT: false,
    _supportsBGRA8888: false,
    _supportsDiscardFramebuffer: false,
    _supportsShareableVAO: false,
    _maxSamplesAllowed: 0,
    _maxTextureUnits: 0,
    _GlExtensions: "",
    _valueDict: {},
    _inited: false,
    _init: function() {
        var locValueDict = this._valueDict;
        locValueDict["cocos2d.x.version"] = cc.ENGINE_VERSION;
        locValueDict["cocos2d.x.compiled_with_profiler"] = false;
        locValueDict["cocos2d.x.compiled_with_gl_state_cache"] = cc.ENABLE_GL_STATE_CACHE;
        this._inited = true;
    },
    getMaxTextureSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->27");
    },
    getMaxModelviewStackDepth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->30");
    },
    getMaxTextureUnits: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->33");
    },
    supportsNPOT: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->36");
    },
    supportsPVRTC: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->39");
    },
    supportsETC: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->42");
    },
    supportsS3TC: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->45");
    },
    supportsATITC: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->48");
    },
    supportsBGRA8888: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->51");
    },
    supportsDiscardFramebuffer: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->54");
    },
    supportsShareableVAO: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->57");
    },
    checkForGLExtension: function(searchName) {
        return this._GlExtensions.indexOf(searchName) > -1;
    },
    getValue: function(key, default_value) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->70");
    },
    setValue: function(key, value) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->73");
    },
    dumpInfo: function() {
        if (cc.ENABLE_GL_STATE_CACHE === 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->79");
        }
    },
    gatherGPUInfo: function() {
        if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->84");
        }
        if (!this._inited) {
            this._init();
        }
        var gl = cc._renderContext;
        var locValueDict = this._valueDict;
        locValueDict["gl.vendor"] = gl.getParameter(gl.VENDOR);
        locValueDict["gl.renderer"] = gl.getParameter(gl.RENDERER);
        locValueDict["gl.version"] = gl.getParameter(gl.VERSION);
        this._GlExtensions = "";
        var extArr = gl.getSupportedExtensions();
        for (var i = 0; i < extArr.length; i++) {
            this._GlExtensions += extArr[i] + " ";
        }
        this._maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
        locValueDict["gl.max_texture_size"] = this._maxTextureSize;
        this._maxTextureUnits = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        locValueDict["gl.max_texture_units"] = this._maxTextureUnits;
        this._supportsPVRTC = this.checkForGLExtension("GL_IMG_texture_compression_pvrtc");
        locValueDict["gl.supports_PVRTC"] = this._supportsPVRTC;
        this._supportsNPOT = false;
        locValueDict["gl.supports_NPOT"] = this._supportsNPOT;
        this._supportsBGRA8888 = this.checkForGLExtension("GL_IMG_texture_format_BGRA888");
        locValueDict["gl.supports_BGRA8888"] = this._supportsBGRA8888;
        this._supportsDiscardFramebuffer = this.checkForGLExtension("GL_EXT_discard_framebuffer");
        locValueDict["gl.supports_discard_framebuffer"] = this._supportsDiscardFramebuffer;
        this._supportsShareableVAO = this.checkForGLExtension("vertex_array_object");
        locValueDict["gl.supports_vertex_array_object"] = this._supportsShareableVAO;
        cc.checkGLErrorDebug();
    },
    loadConfigFile: function(url) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCConfiguration.js->131");
    }
};