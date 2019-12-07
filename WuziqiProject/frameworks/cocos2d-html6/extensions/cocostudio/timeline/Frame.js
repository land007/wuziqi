ccs.Frame = ccs.Class.extend({
    _frameIndex: null,
    _tween: null,
    _timeline: null,
    _node: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->7");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->8");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->9");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->10");
    },
    _emitEvent: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->13");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->14");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->15");
    },
    _cloneProperty: function(frame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->18");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->19");
    },
    setFrameIndex: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->22");
    },
    getFrameIndex: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->25");
    },
    setTimeline: function(timeline) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->28");
    },
    getTimeline: function(timeline) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->31");
    },
    setNode: function(node) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->34");
    },
    getNode: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->37");
    },
    setTween: function(tween) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->40");
    },
    isTween: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->43");
    },
    onEnter: function(nextFrame) {},
    apply: function(percent) {},
    clone: function() {}
});
ccs.VisibleFrame = ccs.Frame.extend({
    _visible: true,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->53");
    },
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->56");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->62");
    },
    setVisible: function(visible) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->65");
    },
    isVisible: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->68");
    }
});
ccs.VisibleFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->72");
};
ccs.TextureFrame = ccs.Frame.extend({
    _sprite: null,
    _textureName: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->79");
    },
    setNode: function(node) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->83");
    },
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->93");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->99");
    },
    setTextureName: function(textureName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->102");
    },
    getTextureName: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->105");
    }
});
ccs.TextureFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->109");
};
ccs.RotationFrame = ccs.Frame.extend({
    _rotation: null,
    _betwennRotation: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->116");
    },
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->122");
    },
    apply: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->128");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->134");
    },
    setRotation: function(rotation) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->137");
    },
    getRotation: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->140");
    }
});
ccs.RotationFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->144");
};
ccs.SkewFrame = ccs.Frame.extend({
    _skewX: null,
    _skewY: null,
    _betweenSkewX: null,
    _betweenSkewY: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->152");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->154");
    },
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->159");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->160");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->161");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->162");
    },
    apply: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->165");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->166");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->167");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->169");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->170");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->173");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->174");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->175");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->176");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->177");
    },
    setSkewX: function(skewx) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->180");
    },
    getSkewX: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->183");
    },
    setSkewY: function(skewy) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->186");
    },
    getSkewY: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->189");
    }
});
ccs.SkewFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->193");
};
ccs.RotationSkewFrame = ccs.SkewFrame.extend({
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->197");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->198");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->199");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->200");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->201");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->202");
    },
    apply: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->205");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->206");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->207");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->208");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->209");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->210");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->213");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->214");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->215");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->216");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->217");
    }
});
ccs.RotationSkewFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->221");
};
ccs.PositionFrame = ccs.Frame.extend({
    _position: null,
    _betweenX: null,
    _betweenY: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->228");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->229");
    },
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->232");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->233");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->234");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->235");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->236");
    },
    apply: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->239");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->240");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->241");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->242");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->243");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->244");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->247");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->248");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->249");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->250");
    },
    setPosition: function(position) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->253");
    },
    getPosition: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->256");
    },
    setX: function(x) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->259");
    },
    getX: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->262");
    },
    setY: function(y) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->265");
    },
    getY: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->268");
    }
});
ccs.PositionFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->272");
};
ccs.ScaleFrame = ccs.Frame.extend({
    _scaleX: null,
    _scaleY: null,
    _betweenScaleX: null,
    _betweenScaleY: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->280");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->281");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->282");
    },
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->285");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->286");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->287");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->288");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->289");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->290");
    },
    apply: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->293");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->294");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->295");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->296");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->297");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->298");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->301");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->302");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->303");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->304");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->305");
    },
    setScale: function(scale) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->308");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->309");
    },
    setScaleX: function(scaleX) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->312");
    },
    getScaleX: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->315");
    },
    setScaleY: function(scaleY) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->318");
    },
    getScaleY: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->321");
    }
});
ccs.ScaleFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->325");
};
ccs.AnchorPointFrame = ccs.Frame.extend({
    _anchorPoint: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->330");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->331");
    },
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->334");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->337");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->338");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->339");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->340");
    },
    setAnchorPoint: function(point) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->343");
    },
    getAnchorPoint: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->346");
    }
});
ccs.AnchorPointFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->350");
};
ccs.InnerActionType = {
    LoopAction: 0,
    NoLoopAction: 1,
    SingleFrame: 2
};
ccs.InnerActionFrame = ccs.Frame.extend({
    _innerActionType: null,
    _startFrameIndex: null,
    _endFrameIndex: 0,
    _singleFrameIndex: 0,
    _enterWithName: false,
    _animationName: "",
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->365");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->366");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->367");
    },
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->370");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->371");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->372");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->373");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->374");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->375");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->376");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->377");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->378");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->379");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->380");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->381");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->382");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->383");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->384");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->385");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->386");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->387");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->388");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->389");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->390");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->391");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->392");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->393");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->394");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->395");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->396");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->397");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->398");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->399");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->400");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->401");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->402");
    },
    setAnimationName: function(animationName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->405");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->406");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->407");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->408");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->409");
    },
    setSingleFrameIndex: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->412");
    },
    getSingleFrameIndex: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->415");
    },
    setEnterWithName: function(isEnterWithName) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->418");
    },
    getEnterWithName: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->421");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->424");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->425");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->426");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->427");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->428");
    },
    setInnerActionType: function(type) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->431");
    },
    getInnerActionType: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->434");
    },
    setStartFrameIndex: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->437");
    },
    getStartFrameIndex: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->440");
    }
});
ccs.InnerActionFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->444");
};
ccs.ColorFrame = ccs.Frame.extend({
    _alpha: null,
    _color: null,
    _betweenAlpha: null,
    _betweenRed: null,
    _betweenGreen: null,
    _betweenBlue: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->454");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->455");
    },
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->458");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->459");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->460");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->461");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->462");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->463");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->464");
    },
    apply: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->467");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->468");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->469");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->470");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->471");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->472");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->473");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->474");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->475");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->476");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->477");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->480");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->481");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->482");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->483");
    },
    setColor: function(color) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->486");
    },
    getColor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->489");
    }
});
ccs.ColorFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->493");
};
ccs.AlphaFrame = ccs.Frame.extend({
    _alpha: null,
    _betweenAlpha: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->499");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->500");
    },
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->503");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->504");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->505");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->506");
    },
    apply: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->509");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->510");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->511");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->512");
    },
    setAlpha: function(alpha) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->515");
    },
    getAlpha: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->518");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->521");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->522");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->523");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->524");
    }
});
ccs.EventFrame = ccs.Frame.extend({
    _event: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->530");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->531");
    },
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->534");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->537");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->538");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->539");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->540");
    },
    setEvent: function(event) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->543");
    },
    getEvent: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->546");
    }
});
ccs.EventFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->550");
};
ccs.ZOrderFrame = ccs.Frame.extend({
    _zorder: null,
    onEnter: function(nextFrame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->555");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->556");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->557");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->560");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->561");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->562");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->563");
    },
    setZOrder: function(zorder) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->566");
    },
    getZOrder: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->569");
    }
});
ccs.ZOrderFrame.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Frame.js->573");
};