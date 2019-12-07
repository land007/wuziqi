cc.Scene = cc.Node.extend({
    _className: "Scene",
    ctor: function() {
        cc.Node.prototype.ctor.call(this);
        this._ignoreAnchorPointForPosition = true;
        this.setAnchorPoint(.5, .5);
        this.setContentSize(cc.director.getWinSize());
    }
});
cc.Scene.create = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/scenes/CCScene.js->11");
};