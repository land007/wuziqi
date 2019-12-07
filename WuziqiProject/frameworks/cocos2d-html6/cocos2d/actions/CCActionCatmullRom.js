cc.cardinalSplineAt = function(p0, p1, p2, p3, tension, t) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->2");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->3");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->4");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->5");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->7");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->8");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->11");
};
cc.reverseControlPoints = function(controlPoints) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->18");
};
cc.cloneControlPoints = function(controlPoints) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->25");
};
cc.copyControlPoints = cc.cloneControlPoints;
cc.getControlPointAt = function(controlPoints, pos) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->30");
};
cc.reverseControlPointsInline = function(controlPoints) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->39");
};
cc.CardinalSplineTo = cc.ActionInterval.extend({
    _points: null,
    _deltaT: 0,
    _tension: 0,
    _previousPosition: null,
    _accumulatedDiff: null,
    ctor: function(duration, points, tension) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->50");
    },
    initWithDuration: function(duration, points, tension) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->61");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->66");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->72");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->101");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->105");
    },
    updatePosition: function(newPos) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->109");
    },
    getPoints: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->112");
    },
    setPoints: function(points) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->115");
    }
});
cc.cardinalSplineTo = function(duration, points, tension) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->119");
};
cc.CardinalSplineTo.create = cc.cardinalSplineTo;
cc.CardinalSplineBy = cc.CardinalSplineTo.extend({
    _startPosition: null,
    ctor: function(duration, points, tension) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->127");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->132");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->158");
    },
    updatePosition: function(newPos) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->166");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->171");
    }
});
cc.cardinalSplineBy = function(duration, points, tension) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->175");
};
cc.CardinalSplineBy.create = cc.cardinalSplineBy;
cc.CatmullRomTo = cc.CardinalSplineTo.extend({
    ctor: function(dt, points) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->180");
    },
    initWithDuration: function(dt, points) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->183");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->188");
    }
});
cc.catmullRomTo = function(dt, points) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->192");
};
cc.CatmullRomTo.create = cc.catmullRomTo;
cc.CatmullRomBy = cc.CardinalSplineBy.extend({
    ctor: function(dt, points) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->198");
    },
    initWithDuration: function(dt, points) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->201");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->206");
    }
});
cc.catmullRomBy = function(dt, points) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCatmullRom.js->210");
};
cc.CatmullRomBy.create = cc.catmullRomBy;