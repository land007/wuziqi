cc.PI2 = Math.PI * 2;
cc.DrawingPrimitiveCanvas = cc.Class.extend({
    _cacheArray: [],
    _renderContext: null,
    ctor: function(renderContext) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->6");
    },
    drawPoint: function(point, size) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->18");
    },
    drawPoints: function(points, numberOfPoints, size) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->33");
    },
    drawLine: function(origin, destination) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->41");
    },
    drawRect: function(origin, destination) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->47");
    },
    drawSolidRect: function(origin, destination, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->51");
    },
    drawPoly: function(vertices, numOfVertices, closePolygon, fill) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->75");
    },
    drawSolidPoly: function(polygons, numberOfPoints, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->79");
    },
    drawCircle: function(center, radius, angle, segments, drawLineToCenter) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->91");
    },
    drawQuadBezier: function(origin, control, destination, segments) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->104");
    },
    drawCubicBezier: function(origin, control1, control2, destination, segments) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->117");
    },
    drawCatmullRom: function(points, segments) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->120");
    },
    drawCardinalSpline: function(config, tension, segments) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->140");
    },
    drawImage: function(image, sourcePoint, sourceSize, destPoint, destSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->159");
    },
    drawStar: function(ctx, radius, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->190");
    },
    drawColorBall: function(ctx, radius, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->209");
    },
    fillText: function(strText, x, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->212");
    },
    setDrawColor: function(r, g, b, a) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->216");
    },
    setPointSize: function(pointSize) {},
    setLineWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDrawingPrimitivesCanvas.js->220");
    }
});