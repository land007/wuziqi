cc.HashUniformEntry = function(value, location, hh) {
    this.value = value;
    this.location = location;
    this.hh = hh || {};
};
cc.GLProgram = cc.Class.extend({
    _glContext: null,
    _programObj: null,
    _vertShader: null,
    _fragShader: null,
    _uniforms: null,
    _hashForUniforms: null,
    _usesTime: false,
    _updateUniformLocation: function(location, data, bytes) {
        if (location == null) {
            return false;
        }
        var updated = true;
        var element = null;
        for (var i = 0; i < this._hashForUniforms.length; i++) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->23");
        }
        if (!element) {
            element = new cc.HashUniformEntry;
            element.location = location;
            element.value = data;
            this._hashForUniforms.push(element);
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->35");
        }
        return updated;
    },
    _description: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->40");
    },
    _compileShader: function(shader, type, source) {
        if (!source || !shader) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->44");
        }
        var preStr = cc.GLProgram._isHighpSupported() ? "precision highp float;\n" : "precision mediump float;\n";
        source = preStr + "uniform mat4 CC_PMatrix;         \n" + "uniform mat4 CC_MVMatrix;        \n" + "uniform mat4 CC_MVPMatrix;       \n" + "uniform vec4 CC_Time;            \n" + "uniform vec4 CC_SinTime;         \n" + "uniform vec4 CC_CosTime;         \n" + "uniform vec4 CC_Random01;        \n" + "uniform sampler2D CC_Texture0;   \n" + "//CC INCLUDES END                \n" + source;
        this._glContext.shaderSource(shader, source);
        this._glContext.compileShader(shader);
        var status = this._glContext.getShaderParameter(shader, this._glContext.COMPILE_STATUS);
        if (!status) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->57");
        }
        return status == 1;
    },
    ctor: function(vShaderFileName, fShaderFileName, glContext) {
        this._uniforms = [];
        this._hashForUniforms = [];
        this._glContext = glContext || cc._renderContext;
        vShaderFileName && fShaderFileName && this.init(vShaderFileName, fShaderFileName);
    },
    destroyProgram: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->72");
    },
    initWithVertexShaderByteArray: function(vertShaderStr, fragShaderStr) {
        var locGL = this._glContext;
        this._programObj = locGL.createProgram();
        this._vertShader = null;
        this._fragShader = null;
        if (vertShaderStr) {
            this._vertShader = locGL.createShader(locGL.VERTEX_SHADER);
            if (!this._compileShader(this._vertShader, locGL.VERTEX_SHADER, vertShaderStr)) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->82");
            }
        }
        if (fragShaderStr) {
            this._fragShader = locGL.createShader(locGL.FRAGMENT_SHADER);
            if (!this._compileShader(this._fragShader, locGL.FRAGMENT_SHADER, fragShaderStr)) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->88");
            }
        }
        if (this._vertShader) {
            locGL.attachShader(this._programObj, this._vertShader);
        }
        cc.checkGLErrorDebug();
        if (this._fragShader) {
            locGL.attachShader(this._programObj, this._fragShader);
        }
        this._hashForUniforms.length = 0;
        cc.checkGLErrorDebug();
        return true;
    },
    initWithString: function(vertShaderStr, fragShaderStr) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->103");
    },
    initWithVertexShaderFilename: function(vShaderFilename, fShaderFileName) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->114");
    },
    init: function(vShaderFilename, fShaderFileName) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->117");
    },
    addAttribute: function(attributeName, index) {
        this._glContext.bindAttribLocation(this._programObj, index, attributeName);
    },
    link: function() {
        if (!this._programObj) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->125");
        }
        this._glContext.linkProgram(this._programObj);
        if (this._vertShader) {
            this._glContext.deleteShader(this._vertShader);
        }
        if (this._fragShader) {
            this._glContext.deleteShader(this._fragShader);
        }
        this._vertShader = null;
        this._fragShader = null;
        if (cc.game.config[cc.game.CONFIG_KEY.debugMode]) {
            var status = this._glContext.getProgramParameter(this._programObj, this._glContext.LINK_STATUS);
            if (!status) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->142");
            }
        }
        return true;
    },
    use: function() {
        cc.glUseProgram(this._programObj);
    },
    updateUniforms: function() {
        this._uniforms[cc.UNIFORM_PMATRIX] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_PMATRIX_S);
        this._uniforms[cc.UNIFORM_MVMATRIX] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_MVMATRIX_S);
        this._uniforms[cc.UNIFORM_MVPMATRIX] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_MVPMATRIX_S);
        this._uniforms[cc.UNIFORM_TIME] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_TIME_S);
        this._uniforms[cc.UNIFORM_SINTIME] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_SINTIME_S);
        this._uniforms[cc.UNIFORM_COSTIME] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_COSTIME_S);
        this._usesTime = this._uniforms[cc.UNIFORM_TIME] != null || this._uniforms[cc.UNIFORM_SINTIME] != null || this._uniforms[cc.UNIFORM_COSTIME] != null;
        this._uniforms[cc.UNIFORM_RANDOM01] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_RANDOM01_S);
        this._uniforms[cc.UNIFORM_SAMPLER] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_SAMPLER_S);
        this.use();
        this.setUniformLocationWith1i(this._uniforms[cc.UNIFORM_SAMPLER], 0);
    },
    getUniformLocationForName: function(name) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->170");
    },
    getUniformMVPMatrix: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->173");
    },
    getUniformSampler: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->176");
    },
    setUniformLocationWith1i: function(location, i1) {
        var updated = this._updateUniformLocation(location, i1);
        if (updated) {
            this._glContext.uniform1i(location, i1);
        }
    },
    setUniformLocationWith2i: function(location, i1, i2) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->189");
    },
    setUniformLocationWith3i: function(location, i1, i2, i3) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->196");
    },
    setUniformLocationWith4i: function(location, i1, i2, i3, i4) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->203");
    },
    setUniformLocationWith2iv: function(location, intArray, numberOfArrays) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->209");
    },
    setUniformLocationWith3iv: function(location, intArray, numberOfArrays) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->215");
    },
    setUniformLocationWith4iv: function(location, intArray, numberOfArrays) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->221");
    },
    setUniformLocationI32: function(location, i1) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->224");
    },
    setUniformLocationWith1f: function(location, f1) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->230");
    },
    setUniformLocationWith2f: function(location, f1, f2) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->237");
    },
    setUniformLocationWith3f: function(location, f1, f2, f3) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->244");
    },
    setUniformLocationWith4f: function(location, f1, f2, f3, f4) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->251");
    },
    setUniformLocationWith2fv: function(location, floatArray, numberOfArrays) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->257");
    },
    setUniformLocationWith3fv: function(location, floatArray, numberOfArrays) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->263");
    },
    setUniformLocationWith4fv: function(location, floatArray, numberOfArrays) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->269");
    },
    setUniformLocationWithMatrix4fv: function(location, matrixArray, numberOfMatrices) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->275");
    },
    setUniformLocationF32: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->294");
    },
    setUniformsForBuiltins: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->303");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->315");
    },
    _setUniformsForBuiltinsForRenderer: function(node) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->319");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->320");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->321");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->324");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->325");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->337");
    },
    setUniformForModelViewProjectionMatrix: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->340");
    },
    setUniformForModelViewProjectionMatrixWithMat4: function(swapMat4) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->344");
    },
    setUniformForModelViewAndProjectionMatrixWithMat4: function() {
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVMATRIX], false, cc.modelview_matrix_stack.top.mat);
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_PMATRIX], false, cc.projection_matrix_stack.top.mat);
    },
    _setUniformForMVPMatrixWithMat4: function(modelViewMatrix) {
        if (!modelViewMatrix) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->352");
        }
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVMATRIX], false, modelViewMatrix.mat);
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_PMATRIX], false, cc.projection_matrix_stack.top.mat);
    },
    vertexShaderLog: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->358");
    },
    getVertexShaderLog: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->361");
    },
    getFragmentShaderLog: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->364");
    },
    fragmentShaderLog: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->367");
    },
    programLog: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->370");
    },
    getProgramLog: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->373");
    },
    reset: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->385");
    },
    getProgram: function() {
        return this._programObj;
    },
    retain: function() {},
    release: function() {}
});
cc.GLProgram.create = function(vShaderFileName, fShaderFileName) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->394");
};
cc.GLProgram._highpSupported = null;
cc.GLProgram._isHighpSupported = function() {
    if (cc.GLProgram._highpSupported == null) {
        var ctx = cc._renderContext;
        var highp = ctx.getShaderPrecisionFormat(ctx.FRAGMENT_SHADER, ctx.HIGH_FLOAT);
        cc.GLProgram._highpSupported = highp.precision != 0;
    }
    return cc.GLProgram._highpSupported;
};
cc.setProgram = function(node, program) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLProgram.js->413");
};