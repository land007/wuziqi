cc.AffineTransform = function(a, b, c, d, tx, ty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->2");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->3");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->4");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->5");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->7");
};
cc.affineTransformMake = function(a, b, c, d, tx, ty) {
    return {
        a: a,
        b: b,
        c: c,
        d: d,
        tx: tx,
        ty: ty
    };
};
cc.pointApplyAffineTransform = function(point, t) {
    return {
        x: t.a * point.x + t.c * point.y + t.tx,
        y: t.b * point.x + t.d * point.y + t.ty
    };
};
cc._pointApplyAffineTransform = function(x, y, t) {
    return {
        x: t.a * x + t.c * y + t.tx,
        y: t.b * x + t.d * y + t.ty
    };
};
cc.sizeApplyAffineTransform = function(size, t) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->35");
};
cc.affineTransformMakeIdentity = function() {
    return {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    };
};
cc.affineTransformIdentity = function() {
    return {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    };
};
cc.rectApplyAffineTransform = function(rect, anAffineTransform) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->70");
};
cc._rectApplyAffineTransformIn = function(rect, anAffineTransform) {
    var top = cc.rectGetMinY(rect);
    var left = cc.rectGetMinX(rect);
    var right = cc.rectGetMaxX(rect);
    var bottom = cc.rectGetMaxY(rect);
    var topLeft = cc._pointApplyAffineTransform(left, top, anAffineTransform);
    var topRight = cc._pointApplyAffineTransform(right, top, anAffineTransform);
    var bottomLeft = cc._pointApplyAffineTransform(left, bottom, anAffineTransform);
    var bottomRight = cc._pointApplyAffineTransform(right, bottom, anAffineTransform);
    var minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    var maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    rect.x = minX;
    rect.y = minY;
    rect.width = maxX - minX;
    rect.height = maxY - minY;
    return rect;
};
cc.affineTransformTranslate = function(t, tx, ty) {
    return {
        a: t.a,
        b: t.b,
        c: t.c,
        d: t.d,
        tx: t.tx + t.a * tx + t.c * ty,
        ty: t.ty + t.b * tx + t.d * ty
    };
};
cc.affineTransformScale = function(t, sx, sy) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->109");
};
cc.affineTransformRotate = function(aTransform, anAngle) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->121");
};
cc.affineTransformConcat = function(t1, t2) {
    return {
        a: t1.a * t2.a + t1.b * t2.c,
        b: t1.a * t2.b + t1.b * t2.d,
        c: t1.c * t2.a + t1.d * t2.c,
        d: t1.c * t2.b + t1.d * t2.d,
        tx: t1.tx * t2.a + t1.ty * t2.c + t2.tx,
        ty: t1.tx * t2.b + t1.ty * t2.d + t2.ty
    };
};
cc.affineTransformEqualToTransform = function(t1, t2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCAffineTransform.js->134");
};
cc.affineTransformInvert = function(t) {
    var determinant = 1 / (t.a * t.d - t.b * t.c);
    return {
        a: determinant * t.d,
        b: -determinant * t.b,
        c: -determinant * t.c,
        d: determinant * t.a,
        tx: determinant * (t.c * t.ty - t.d * t.tx),
        ty: determinant * (t.b * t.tx - t.a * t.ty)
    };
};