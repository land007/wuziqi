cc.ActionInstant = cc.FiniteTimeAction.extend({
    isDone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->3");
    },
    step: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->6");
    },
    update: function(dt) {},
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->10");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->13");
    }
});
cc.Show = cc.ActionInstant.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->18");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->21");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->24");
    }
});
cc.show = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->28");
};
cc.Show.create = cc.show;
cc.Hide = cc.ActionInstant.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->33");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->36");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->39");
    }
});
cc.hide = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->43");
};
cc.Hide.create = cc.hide;
cc.ToggleVisibility = cc.ActionInstant.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->48");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->51");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->54");
    }
});
cc.toggleVisibility = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->58");
};
cc.ToggleVisibility.create = cc.toggleVisibility;
cc.RemoveSelf = cc.ActionInstant.extend({
    _isNeedCleanUp: true,
    ctor: function(isNeedCleanUp) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->65");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->68");
    },
    init: function(isNeedCleanUp) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->72");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->75");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->78");
    }
});
cc.removeSelf = function(isNeedCleanUp) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->82");
};
cc.RemoveSelf.create = cc.removeSelf;
cc.FlipX = cc.ActionInstant.extend({
    _flippedX: false,
    ctor: function(flip) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->90");
    },
    initWithFlipX: function(flip) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->94");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->97");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->100");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->105");
    }
});
cc.flipX = function(flip) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->109");
};
cc.FlipX.create = cc.flipX;
cc.FlipY = cc.ActionInstant.extend({
    _flippedY: false,
    ctor: function(flip) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->117");
    },
    initWithFlipY: function(flip) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->121");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->124");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->127");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->132");
    }
});
cc.flipY = function(flip) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->136");
};
cc.FlipY.create = cc.flipY;
cc.Place = cc.ActionInstant.extend({
    _x: 0,
    _y: 0,
    ctor: function(pos, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->152");
    },
    initWithPosition: function(x, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->157");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->160");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->165");
    }
});
cc.place = function(pos, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->169");
};
cc.Place.create = cc.place;
cc.CallFunc = cc.ActionInstant.extend({
    _selectorTarget: null,
    _callFunc: null,
    _function: null,
    _data: null,
    ctor: function(selector, selectorTarget, data) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->185");
    },
    initWithFunction: function(selector, selectorTarget, data) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->197");
    },
    execute: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->206");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->209");
    },
    getTargetCallback: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->212");
    },
    setTargetCallback: function(sel) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->220");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->231");
    }
});
cc.callFunc = function(selector, selectorTarget, data) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionInstant.js->235");
};
cc.CallFunc.create = cc.callFunc;