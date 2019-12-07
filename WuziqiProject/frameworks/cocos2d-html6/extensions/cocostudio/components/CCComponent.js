cc.Component = cc.Class.extend({
    _owner: null,
    _name: "",
    _enabled: true,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponent.js->6");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponent.js->7");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponent.js->8");
    },
    init: function() {
        return true;
    },
    onEnter: function() {},
    onExit: function() {},
    update: function(delta) {},
    serialize: function(reader) {},
    isEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponent.js->18");
    },
    setEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponent.js->21");
    },
    getName: function() {
        return this._name;
    },
    setName: function(name) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponent.js->27");
    },
    setOwner: function(owner) {
        this._owner = owner;
    },
    getOwner: function() {
        return this._owner;
    }
});
cc.Component.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponent.js->37");
};