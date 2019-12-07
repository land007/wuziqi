cc.shaderCache = {
    TYPE_POSITION_TEXTURECOLOR: 0,
    TYPE_POSITION_TEXTURECOLOR_ALPHATEST: 1,
    TYPE_POSITION_COLOR: 2,
    TYPE_POSITION_TEXTURE: 3,
    TYPE_POSITION_TEXTURE_UCOLOR: 4,
    TYPE_POSITION_TEXTURE_A8COLOR: 5,
    TYPE_POSITION_UCOLOR: 6,
    TYPE_POSITION_LENGTH_TEXTURECOLOR: 7,
    TYPE_MAX: 8,
    _programs: {},
    _init: function() {
        this.loadDefaultShaders();
        return true;
    },
    _loadDefaultShader: function(program, type) {
        switch (type) {
          case this.TYPE_POSITION_TEXTURECOLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_COLOR_VERT, cc.SHADER_POSITION_TEXTURE_COLOR_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;
          case this.TYPE_POSITION_TEXTURECOLOR_ALPHATEST:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_COLOR_VERT, cc.SHADER_POSITION_TEXTURE_COLOR_ALPHATEST_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;
          case this.TYPE_POSITION_COLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_COLOR_VERT, cc.SHADER_POSITION_COLOR_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
            break;
          case this.TYPE_POSITION_TEXTURE:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_VERT, cc.SHADER_POSITION_TEXTURE_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;
          case this.TYPE_POSITION_TEXTURE_UCOLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_UCOLOR_VERT, cc.SHADER_POSITION_TEXTURE_UCOLOR_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;
          case this.TYPE_POSITION_TEXTURE_A8COLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_A8COLOR_VERT, cc.SHADER_POSITION_TEXTURE_A8COLOR_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;
          case this.TYPE_POSITION_UCOLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_UCOLOR_VERT, cc.SHADER_POSITION_UCOLOR_FRAG);
            program.addAttribute("aVertex", cc.VERTEX_ATTRIB_POSITION);
            break;
          case this.TYPE_POSITION_LENGTH_TEXTURECOLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_VERT, cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            program.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
            break;
          default:
            cc.log("cocos2d: cc.shaderCache._loadDefaultShader, error shader type");
            return;
        }
        program.link();
        program.updateUniforms();
    },
    loadDefaultShaders: function() {
        var program = new cc.GLProgram;
        this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURECOLOR);
        this._programs[cc.SHADER_POSITION_TEXTURECOLOR] = program;
        this._programs["ShaderPositionTextureColor"] = program;
        program = new cc.GLProgram;
        this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURECOLOR_ALPHATEST);
        this._programs[cc.SHADER_POSITION_TEXTURECOLORALPHATEST] = program;
        this._programs["ShaderPositionTextureColorAlphaTest"] = program;
        program = new cc.GLProgram;
        this._loadDefaultShader(program, this.TYPE_POSITION_COLOR);
        this._programs[cc.SHADER_POSITION_COLOR] = program;
        this._programs["ShaderPositionColor"] = program;
        program = new cc.GLProgram;
        this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURE);
        this._programs[cc.SHADER_POSITION_TEXTURE] = program;
        this._programs["ShaderPositionTexture"] = program;
        program = new cc.GLProgram;
        this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURE_UCOLOR);
        this._programs[cc.SHADER_POSITION_TEXTURE_UCOLOR] = program;
        this._programs["ShaderPositionTextureUColor"] = program;
        program = new cc.GLProgram;
        this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURE_A8COLOR);
        this._programs[cc.SHADER_POSITION_TEXTUREA8COLOR] = program;
        this._programs["ShaderPositionTextureA8Color"] = program;
        program = new cc.GLProgram;
        this._loadDefaultShader(program, this.TYPE_POSITION_UCOLOR);
        this._programs[cc.SHADER_POSITION_UCOLOR] = program;
        this._programs["ShaderPositionUColor"] = program;
        program = new cc.GLProgram;
        this._loadDefaultShader(program, this.TYPE_POSITION_LENGTH_TEXTURECOLOR);
        this._programs[cc.SHADER_POSITION_LENGTHTEXTURECOLOR] = program;
        this._programs["ShaderPositionLengthTextureColor"] = program;
    },
    reloadDefaultShaders: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->123");
    },
    programForKey: function(key) {
        return this._programs[key];
    },
    getProgram: function(shaderName) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->129");
    },
    addProgram: function(program, key) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCShaderCache.js->132");
    }
};