cc.DrawingPrimitiveWebGL = cc.Class.extend({
    _renderContext: null,
    _initialized: false,
    _shader: null,
    _colorLocation: -1,
    _colorArray: null,
    _pointSizeLocation: -1,
    _pointSize: -1,
    ctor: function(ctx) {
        if (ctx == null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->11");
        }
        if (!ctx instanceof WebGLRenderingContext) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->14");
        }
        this._renderContext = ctx;
        this._colorArray = new Float32Array([ 1, 1, 1, 1 ]);
    },
    lazy_init: function() {
        var _t = this;
        if (!_t._initialized) {
            _t._shader = cc.shaderCache.programForKey(cc.SHADER_POSITION_UCOLOR);
            _t._colorLocation = _t._renderContext.getUniformLocation(_t._shader.getProgram(), "u_color");
            _t._pointSizeLocation = _t._renderContext.getUniformLocation(_t._shader.getProgram(), "u_pointSize");
            _t._initialized = true;
        }
    },
    drawInit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->29");
    },
    drawPoint: function(point) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->45");
    },
    drawPoints: function(points, numberOfPoints) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->64");
    },
    _pointsToTypeArray: function(points) {
        var typeArr = new Float32Array(points.length * 2);
        for (var i = 0; i < points.length; i++) {
            typeArr[i * 2] = points[i].x;
            typeArr[i * 2 + 1] = points[i].y;
        }
        return typeArr;
    },
    drawLine: function(origin, destination) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->87");
    },
    drawRect: function(origin, destination) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->93");
    },
    drawSolidRect: function(origin, destination, color) {
        var vertices = [ origin, cc.p(destination.x, origin.y), destination, cc.p(origin.x, destination.y) ];
        this.drawSolidPoly(vertices, 4, color);
    },
    drawPoly: function(vertices, numOfVertices, closePolygon) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->116");
    },
    drawSolidPoly: function(poli, numberOfPoints, color) {
        this.lazy_init();
        if (color) {
            this.setDrawColor(color.r, color.g, color.b, color.a);
        }
        var glContext = this._renderContext;
        this._shader.use();
        this._shader.setUniformForModelViewAndProjectionMatrixWithMat4();
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION);
        glContext.uniform4fv(this._colorLocation, this._colorArray);
        var pointBuffer = glContext.createBuffer();
        glContext.bindBuffer(glContext.ARRAY_BUFFER, pointBuffer);
        glContext.bufferData(glContext.ARRAY_BUFFER, this._pointsToTypeArray(poli), glContext.STATIC_DRAW);
        glContext.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, glContext.FLOAT, false, 0, 0);
        glContext.drawArrays(glContext.TRIANGLE_FAN, 0, poli.length);
        glContext.deleteBuffer(pointBuffer);
        cc.incrementGLDraws(1);
    },
    drawCircle: function(center, radius, angle, segments, drawLineToCenter) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->167");
    },
    drawQuadBezier: function(origin, control, destination, segments) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->191");
    },
    drawCubicBezier: function(origin, control1, control2, destination, segments) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->215");
    },
    drawCatmullRom: function(points, segments) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->218");
    },
    drawCardinalSpline: function(config, tension, segments) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->248");
    },
    setDrawColor: function(r, g, b, a) {
        this._colorArray[0] = r / 255;
        this._colorArray[1] = g / 255;
        this._colorArray[2] = b / 255;
        this._colorArray[3] = a / 255;
    },
    setPointSize: function(pointSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->257");
    },
    setLineWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesWebGL.js->262");
    }
});