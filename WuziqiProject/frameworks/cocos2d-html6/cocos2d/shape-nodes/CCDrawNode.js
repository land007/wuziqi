cc.v2fzero = function() {
    return {
        x: 0,
        y: 0
    };
};
cc.v2f = function(x, y) {
    return {
        x: x,
        y: y
    };
};
cc.v2fadd = function(v0, v1) {
    return cc.v2f(v0.x + v1.x, v0.y + v1.y);
};
cc.v2fsub = function(v0, v1) {
    return cc.v2f(v0.x - v1.x, v0.y - v1.y);
};
cc.v2fmult = function(v, s) {
    return cc.v2f(v.x * s, v.y * s);
};
cc.v2fperp = function(p0) {
    return cc.v2f(-p0.y, p0.x);
};
cc.v2fneg = function(p0) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->26");
};
cc.v2fdot = function(p0, p1) {
    return p0.x * p1.x + p0.y * p1.y;
};
cc.v2fforangle = function(_a_) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->32");
};
cc.v2fnormalize = function(p) {
    var r = cc.pNormalize(cc.p(p.x, p.y));
    return cc.v2f(r.x, r.y);
};
cc.__v2f = function(v) {
    return cc.v2f(v.x, v.y);
};
cc.__t = function(v) {
    return {
        u: v.x,
        v: v.y
    };
};
cc.DrawNodeCanvas = cc.Node.extend({
    _buffer: null,
    _blendFunc: null,
    _lineWidth: 1,
    _drawColor: null,
    _className: "DrawNodeCanvas",
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->59");
    },
    getBlendFunc: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->62");
    },
    setBlendFunc: function(blendFunc, dst) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->71");
    },
    setLineWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->74");
    },
    getLineWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->77");
    },
    setDrawColor: function(color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->84");
    },
    getDrawColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->87");
    },
    drawRect: function(origin, destination, fillColor, lineWidth, lineColor) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->110");
    },
    drawCircle: function(center, radius, angle, segments, drawLineToCenter, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->135");
    },
    drawQuadBezier: function(origin, control, destination, segments, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->157");
    },
    drawCubicBezier: function(origin, control1, control2, destination, segments, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->179");
    },
    drawCatmullRom: function(points, segments, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->182");
    },
    drawCardinalSpline: function(config, tension, segments, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->209");
    },
    drawDot: function(pos, radius, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->220");
    },
    drawDots: function(points, radius, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->232");
    },
    drawSegment: function(from, to, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->246");
    },
    drawPoly_: function(verts, fillColor, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->265");
    },
    drawPoly: function(verts, fillColor, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->272");
    },
    clear: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->275");
    },
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->278");
    }
});
cc.DrawNodeWebGL = cc.Node.extend({
    _bufferCapacity: 0,
    _buffer: null,
    _trianglesArrayBuffer: null,
    _trianglesWebBuffer: null,
    _trianglesReader: null,
    _lineWidth: 1,
    _drawColor: null,
    _blendFunc: null,
    _dirty: false,
    _className: "DrawNodeWebGL",
    getBlendFunc: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->293");
    },
    setBlendFunc: function(blendFunc, dst) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->302");
    },
    ctor: function() {
        cc.Node.prototype.ctor.call(this);
        this._buffer = [];
        this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
        this._drawColor = cc.color(255, 255, 255, 255);
        this.init();
    },
    init: function() {
        if (cc.Node.prototype.init.call(this)) {
            this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_LENGTHTEXTURECOLOR);
            this._ensureCapacity(64);
            this._trianglesWebBuffer = cc._renderContext.createBuffer();
            this._dirty = true;
            return true;
        }
        return false;
    },
    setLineWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->322");
    },
    getLineWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->325");
    },
    setDrawColor: function(color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->332");
    },
    getDrawColor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->335");
    },
    drawRect: function(origin, destination, fillColor, lineWidth, lineColor) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->348");
    },
    drawCircle: function(center, radius, angle, segments, drawLineToCenter, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->355");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->356");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->357");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->358");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->363");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->369");
    },
    drawQuadBezier: function(origin, control, destination, segments, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->385");
    },
    drawCubicBezier: function(origin, control1, control2, destination, segments, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->391");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->392");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->393");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->395");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->396");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->397");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->398");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->401");
    },
    drawCatmullRom: function(points, segments, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->404");
    },
    drawCardinalSpline: function(config, tension, segments, lineWidth, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->413");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->428");
    },
    _render: function() {
        var gl = cc._renderContext;
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX);
        gl.bindBuffer(gl.ARRAY_BUFFER, this._trianglesWebBuffer);
        if (this._dirty) {
            gl.bufferData(gl.ARRAY_BUFFER, this._trianglesArrayBuffer, gl.STREAM_DRAW);
            this._dirty = false;
        }
        var triangleSize = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;
        gl.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, gl.FLOAT, false, triangleSize, 0);
        gl.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, gl.UNSIGNED_BYTE, true, triangleSize, 8);
        gl.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, gl.FLOAT, false, triangleSize, 12);
        gl.drawArrays(gl.TRIANGLES, 0, this._buffer.length * 3);
        cc.incrementGLDraws(1);
    },
    _ensureCapacity: function(count) {
        var _t = this;
        var locBuffer = _t._buffer;
        if (locBuffer.length + count > _t._bufferCapacity) {
            var TriangleLength = cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT;
            _t._bufferCapacity += Math.max(_t._bufferCapacity, count);
            if (locBuffer == null || locBuffer.length === 0) {
                _t._buffer = [];
                _t._trianglesArrayBuffer = new ArrayBuffer(TriangleLength * _t._bufferCapacity);
                _t._trianglesReader = new Uint8Array(_t._trianglesArrayBuffer);
            } else {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->456");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->457");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->458");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->459");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->460");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->461");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->462");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->463");
            }
        }
    },
    drawDot: function(pos, radius, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->468");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->469");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->470");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->471");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->472");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->475");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->476");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->477");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->478");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->479");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->480");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->481");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->482");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->483");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->484");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->485");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->486");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->487");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->488");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->489");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->490");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->491");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->492");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->493");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->494");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->495");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->496");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->497");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->498");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->499");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->500");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->501");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->502");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->503");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->504");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->505");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->506");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->507");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->508");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->509");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->510");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->511");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->512");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->513");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->514");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->515");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->516");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->517");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->518");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->519");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->520");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->521");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->522");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->523");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->524");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->525");
    },
    drawDots: function(points, radius, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->528");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->529");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->530");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->531");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->532");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->533");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->534");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->535");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->536");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->537");
    },
    drawSegment: function(from, to, radius, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->540");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->541");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->542");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->543");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->544");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->545");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->546");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->547");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->548");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->549");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->550");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->551");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->552");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->553");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->554");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->555");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->556");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->557");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->558");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->559");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->560");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->561");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->562");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->563");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->564");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->565");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->566");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->567");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->568");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->569");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->570");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->571");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->572");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->573");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->574");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->575");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->576");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->577");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->578");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->579");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->580");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->581");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->582");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->583");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->584");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->585");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->586");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->587");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->588");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->589");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->590");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->591");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->592");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->593");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->594");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->595");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->596");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->597");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->598");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->599");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->600");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->601");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->602");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->603");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->604");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->605");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->606");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->607");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->608");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->609");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->610");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->611");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->612");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->613");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->614");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->615");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->616");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->617");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->618");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->619");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->620");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->621");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->622");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->623");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->624");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->625");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->626");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->627");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->628");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->629");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->630");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->631");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->632");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->633");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->634");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->635");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->636");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->637");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->638");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->639");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->640");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->641");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->642");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->643");
    },
    drawPoly: function(verts, fillColor, borderWidth, borderColor) {
        if (fillColor == null) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->647");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->648");
        }
        if (fillColor.a == null) {
            fillColor.a = 255;
        }
        if (borderColor.a == null) {
            borderColor.a = 255;
        }
        borderWidth = borderWidth || this._lineWidth;
        borderWidth *= .5;
        var c4bFillColor = {
            r: 0 | fillColor.r,
            g: 0 | fillColor.g,
            b: 0 | fillColor.b,
            a: 0 | fillColor.a
        };
        var c4bBorderColor = {
            r: 0 | borderColor.r,
            g: 0 | borderColor.g,
            b: 0 | borderColor.b,
            a: 0 | borderColor.a
        };
        var extrude = [], i, v0, v1, v2, count = verts.length;
        for (i = 0; i < count; i++) {
            v0 = cc.__v2f(verts[(i - 1 + count) % count]);
            v1 = cc.__v2f(verts[i]);
            v2 = cc.__v2f(verts[(i + 1) % count]);
            var n1 = cc.v2fnormalize(cc.v2fperp(cc.v2fsub(v1, v0)));
            var n2 = cc.v2fnormalize(cc.v2fperp(cc.v2fsub(v2, v1)));
            var offset = cc.v2fmult(cc.v2fadd(n1, n2), 1 / (cc.v2fdot(n1, n2) + 1));
            extrude[i] = {
                offset: offset,
                n: n2
            };
        }
        var outline = borderWidth > 0, triangleCount = 3 * count - 2, vertexCount = 3 * triangleCount;
        this._ensureCapacity(vertexCount);
        var triangleBytesLen = cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT, trianglesBuffer = this._trianglesArrayBuffer;
        var locBuffer = this._buffer;
        var inset = outline == false ? .5 : 0;
        for (i = 0; i < count - 2; i++) {
            v0 = cc.v2fsub(cc.__v2f(verts[0]), cc.v2fmult(extrude[0].offset, inset));
            v1 = cc.v2fsub(cc.__v2f(verts[i + 1]), cc.v2fmult(extrude[i + 1].offset, inset));
            v2 = cc.v2fsub(cc.__v2f(verts[i + 2]), cc.v2fmult(extrude[i + 2].offset, inset));
            locBuffer.push(new cc.V2F_C4B_T2F_Triangle({
                vertices: v0,
                colors: c4bFillColor,
                texCoords: cc.__t(cc.v2fzero())
            }, {
                vertices: v1,
                colors: c4bFillColor,
                texCoords: cc.__t(cc.v2fzero())
            }, {
                vertices: v2,
                colors: c4bFillColor,
                texCoords: cc.__t(cc.v2fzero())
            }, trianglesBuffer, locBuffer.length * triangleBytesLen));
        }
        for (i = 0; i < count; i++) {
            var j = (i + 1) % count;
            v0 = cc.__v2f(verts[i]);
            v1 = cc.__v2f(verts[j]);
            var n0 = extrude[i].n;
            var offset0 = extrude[i].offset;
            var offset1 = extrude[j].offset;
            var inner0 = outline ? cc.v2fsub(v0, cc.v2fmult(offset0, borderWidth)) : cc.v2fsub(v0, cc.v2fmult(offset0, .5));
            var inner1 = outline ? cc.v2fsub(v1, cc.v2fmult(offset1, borderWidth)) : cc.v2fsub(v1, cc.v2fmult(offset1, .5));
            var outer0 = outline ? cc.v2fadd(v0, cc.v2fmult(offset0, borderWidth)) : cc.v2fadd(v0, cc.v2fmult(offset0, .5));
            var outer1 = outline ? cc.v2fadd(v1, cc.v2fmult(offset1, borderWidth)) : cc.v2fadd(v1, cc.v2fmult(offset1, .5));
            if (outline) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->718");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->719");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->720");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->721");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->722");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->723");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->724");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->725");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->726");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->727");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->728");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->729");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->730");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->731");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->732");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->733");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->734");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->735");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->736");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->737");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->738");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->739");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->740");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->741");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->742");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->743");
            } else {
                locBuffer.push(new cc.V2F_C4B_T2F_Triangle({
                    vertices: inner0,
                    colors: c4bFillColor,
                    texCoords: cc.__t(cc.v2fzero())
                }, {
                    vertices: inner1,
                    colors: c4bFillColor,
                    texCoords: cc.__t(cc.v2fzero())
                }, {
                    vertices: outer1,
                    colors: c4bFillColor,
                    texCoords: cc.__t(n0)
                }, trianglesBuffer, locBuffer.length * triangleBytesLen));
                locBuffer.push(new cc.V2F_C4B_T2F_Triangle({
                    vertices: inner0,
                    colors: c4bFillColor,
                    texCoords: cc.__t(cc.v2fzero())
                }, {
                    vertices: outer0,
                    colors: c4bFillColor,
                    texCoords: cc.__t(n0)
                }, {
                    vertices: outer1,
                    colors: c4bFillColor,
                    texCoords: cc.__t(n0)
                }, trianglesBuffer, locBuffer.length * triangleBytesLen));
            }
        }
        extrude = null;
        this._dirty = true;
    },
    _drawSegments: function(verts, borderWidth, borderColor, closePoly) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->777");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->778");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->779");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->780");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->781");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->782");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->783");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->784");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->785");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->786");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->787");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->788");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->789");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->790");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->791");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->792");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->793");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->794");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->795");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->796");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->797");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->798");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->799");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->800");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->801");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->802");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->803");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->804");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->805");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->806");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->807");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->808");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->809");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->810");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->811");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->812");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->813");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->814");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->815");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->816");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->817");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->818");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->819");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->820");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->821");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->822");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->823");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->824");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->825");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->826");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->827");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->828");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->829");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->830");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->831");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->832");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->833");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->834");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->835");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->836");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->837");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->838");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->839");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->840");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->841");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->842");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->843");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->844");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->845");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->846");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->847");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->848");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->849");
    },
    clear: function() {
        this._buffer.length = 0;
        this._dirty = true;
    },
    _createRenderCmd: function() {
        return new cc.DrawNode.WebGLRenderCmd(this);
    }
});
cc.DrawNode = cc._renderType == cc._RENDER_TYPE_WEBGL ? cc.DrawNodeWebGL : cc.DrawNodeCanvas;
cc.DrawNode.create = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->861");
};
cc._DrawNodeElement = function(type, verts, fillColor, lineWidth, lineColor, lineCap, isClosePolygon, isFill, isStroke) {
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->864");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->865");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->866");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->867");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->868");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->869");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->870");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->871");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->872");
console.log("/frameworks/cocos2d-html5/cocos2d/shape-nodes/CCDrawNode.js->873");
};
cc.DrawNode.TYPE_DOT = 0;
cc.DrawNode.TYPE_SEGMENT = 1;
cc.DrawNode.TYPE_POLY = 2;