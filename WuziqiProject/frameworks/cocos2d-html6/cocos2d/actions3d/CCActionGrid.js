cc.GridAction = cc.ActionInterval.extend({
    _gridSize: null,
    ctor: function(duration, gridSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->4");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->5");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->7");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->13");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->32");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->35");
    },
    initWithDuration: function(duration, gridSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->43");
    },
    getGrid: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->46");
    }
});
cc.gridAction = function(duration, gridSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->50");
};
cc.GridAction.create = cc.gridAction;
cc.Grid3DAction = cc.GridAction.extend({
    getGrid: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->55");
    },
    vertex: function(position) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->58");
    },
    originalVertex: function(position) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->61");
    },
    setVertex: function(position, vertex) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->64");
    }
});
cc.grid3DAction = function(duration, gridSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->68");
};
cc.Grid3DAction.create = cc.grid3DAction;
cc.TiledGrid3DAction = cc.GridAction.extend({
    tile: function(position) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->73");
    },
    originalTile: function(position) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->76");
    },
    setTile: function(position, coords) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->79");
    },
    getGrid: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->82");
    }
});
cc.tiledGrid3DAction = function(duration, gridSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->86");
};
cc.TiledGrid3DAction.create = cc.tiledGrid3DAction;
cc.StopGrid = cc.ActionInstant.extend({
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->96");
    }
});
cc.stopGrid = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->100");
};
cc.StopGrid.create = cc.stopGrid;
cc.ReuseGrid = cc.ActionInstant.extend({
    _times: null,
    ctor: function(times) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->107");
    },
    initWithTimes: function(times) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->111");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->118");
    }
});
cc.reuseGrid = function(times) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions3d/CCActionGrid.js->122");
};
cc.ReuseGrid.create = cc.reuseGrid;