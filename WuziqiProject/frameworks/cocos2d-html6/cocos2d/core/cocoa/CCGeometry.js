cc.Point = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
};
cc.p = function(x, y) {
    if (x == undefined) {
        return {
            x: 0,
            y: 0
        };
    }
    if (y == undefined) {
        return {
            x: x.x,
            y: x.y
        };
    }
    return {
        x: x,
        y: y
    };
};
cc.pointEqualToPoint = function(point1, point2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->24");
};
cc.Size = function(width, height) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->28");
};
cc.size = function(w, h) {
    if (w === undefined) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->35");
    }
    if (h === undefined) {
        return {
            width: w.width,
            height: w.height
        };
    }
    return {
        width: w,
        height: h
    };
};
cc.sizeEqualToSize = function(size1, size2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->49");
};
cc.Rect = function(x, y, width, height) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->55");
};
cc.rect = function(x, y, w, h) {
    if (x === undefined) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->64");
    }
    if (y === undefined) {
        return {
            x: x.x,
            y: x.y,
            width: x.width,
            height: x.height
        };
    }
    return {
        x: x,
        y: y,
        width: w,
        height: h
    };
};
cc.rectEqualToRect = function(rect1, rect2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->82");
};
cc._rectEqualToZero = function(rect) {
    return rect && rect.x === 0 && rect.y === 0 && rect.width === 0 && rect.height === 0;
};
cc.rectContainsRect = function(rect1, rect2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->91");
};
cc.rectGetMaxX = function(rect) {
    return rect.x + rect.width;
};
cc.rectGetMidX = function(rect) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->97");
};
cc.rectGetMinX = function(rect) {
    return rect.x;
};
cc.rectGetMaxY = function(rect) {
    return rect.y + rect.height;
};
cc.rectGetMidY = function(rect) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->106");
};
cc.rectGetMinY = function(rect) {
    return rect.y;
};
cc.rectContainsPoint = function(rect, point) {
    return point.x >= cc.rectGetMinX(rect) && point.x <= cc.rectGetMaxX(rect) && point.y >= cc.rectGetMinY(rect) && point.y <= cc.rectGetMaxY(rect);
};
cc.rectIntersectsRect = function(ra, rb) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->116");
};
cc.rectOverlapsRect = function(rectA, rectB) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->119");
};
cc.rectUnion = function(rectA, rectB) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->127");
};
cc.rectIntersection = function(rectA, rectB) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/cocoa/CCGeometry.js->133");
};