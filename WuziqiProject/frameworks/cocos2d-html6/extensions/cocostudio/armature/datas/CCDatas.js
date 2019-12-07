ccs.BLEND_TYPE_NORMAL = 0;
ccs.BLEND_TYPE_LAYER = 1;
ccs.BLEND_TYPE_DARKEN = 2;
ccs.BLEND_TYPE_MULTIPLY = 3;
ccs.BLEND_TYPE_LIGHTEN = 4;
ccs.BLEND_TYPE_SCREEN = 5;
ccs.BLEND_TYPE_OVERLAY = 6;
ccs.BLEND_TYPE_HIGHLIGHT = 7;
ccs.BLEND_TYPE_ADD = 8;
ccs.BLEND_TYPE_SUBTRACT = 9;
ccs.BLEND_TYPE_DIFFERENCE = 10;
ccs.BLEND_TYPE_INVERT = 11;
ccs.BLEND_TYPE_ALPHA = 12;
ccs.BLEND_TYPE_ERASE = 13;
ccs.DISPLAY_TYPE_SPRITE = 0;
ccs.DISPLAY_TYPE_ARMATURE = 1;
ccs.DISPLAY_TYPE_PARTICLE = 2;
ccs.DISPLAY_TYPE_MAX = 3;
ccs.BaseData = ccs.Class.extend({
    x: 0,
    y: 0,
    zOrder: 0,
    skewX: 0,
    skewY: 0,
    scaleX: 1,
    scaleY: 1,
    tweenRotate: 0,
    isUseColorInfo: false,
    r: 255,
    g: 255,
    b: 255,
    a: 255,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->35");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->36");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->37");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->38");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->46");
    },
    copy: function(node) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->50");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->51");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->55");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->56");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->57");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->61");
    },
    setColor: function(color) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->67");
    },
    getColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->70");
    },
    subtract: function(from, to, limit) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->106");
    }
});
ccs.DisplayData = ccs.Class.extend({
    displayType: ccs.DISPLAY_TYPE_MAX,
    displayName: "",
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->113");
    },
    changeDisplayToTexture: function(displayName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->121");
    },
    copy: function(displayData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->125");
    }
});
ccs.SpriteDisplayData = ccs.DisplayData.extend({
    skinData: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->132");
    },
    copy: function(displayData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->136");
    }
});
ccs.ArmatureDisplayData = ccs.DisplayData.extend({
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->142");
    }
});
ccs.ParticleDisplayData = ccs.DisplayData.extend({
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->147");
    }
});
ccs.BoneData = ccs.BaseData.extend({
    displayDataList: null,
    name: "",
    parentName: "",
    boneDataTransform: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->156");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->159");
    },
    init: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->162");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->163");
    },
    addDisplayData: function(displayData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->166");
    },
    getDisplayData: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->169");
    }
});
ccs.ArmatureData = ccs.Class.extend({
    boneDataDic: null,
    name: "",
    dataVersion: .1,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->177");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->178");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->179");
    },
    init: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->182");
    },
    addBoneData: function(boneData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->185");
    },
    getBoneDataDic: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->188");
    },
    getBoneData: function(boneName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->191");
    }
});
ccs.FrameData = ccs.BaseData.extend({
    duration: 0,
    tweenEasing: 0,
    easingParamNumber: 0,
    easingParams: null,
    displayIndex: -1,
    movement: "",
    event: "",
    sound: "",
    soundEffect: "",
    blendFunc: null,
    frameID: 0,
    isTween: true,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->208");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->209");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->210");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->211");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->212");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->213");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->214");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->215");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->216");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->217");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->218");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->219");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->220");
    },
    copy: function(frameData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->223");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->224");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->225");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->226");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->227");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->228");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->229");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->230");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->231");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->232");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->233");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->234");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->235");
    }
});
ccs.MovementBoneData = ccs.Class.extend({
    delay: 0,
    scale: 1,
    duration: 0,
    frameList: null,
    name: "",
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->245");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->246");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->247");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->248");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->249");
    },
    init: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->252");
    },
    addFrameData: function(frameData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->255");
    },
    getFrameData: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->258");
    }
});
ccs.MovementData = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->262");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->263");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->264");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->265");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->266");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->267");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->268");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->269");
};
ccs.MovementData.prototype.addMovementBoneData = function(movBoneData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->272");
};
ccs.MovementData.prototype.getMovementBoneData = function(boneName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->275");
};
ccs.AnimationData = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->278");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->279");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->280");
};
ccs.AnimationData.prototype.addMovement = function(moveData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->283");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->284");
};
ccs.AnimationData.prototype.getMovement = function(moveName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->287");
};
ccs.AnimationData.prototype.getMovementCount = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->290");
};
ccs.ContourVertex2 = function(x, y) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->293");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->294");
};
ccs.ContourData = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->297");
};
ccs.ContourData.prototype.init = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->300");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->301");
};
ccs.ContourData.prototype.addVertex = function(p) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->304");
};
ccs.TextureData = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->307");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->308");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->309");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->310");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->311");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->312");
};
ccs.TextureData.prototype.init = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->315");
};
ccs.TextureData.prototype.addContourData = function(contourData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->318");
};
ccs.TextureData.prototype.getContourData = function(index) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/datas/CCDatas.js->321");
};