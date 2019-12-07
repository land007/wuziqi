cc.ComponentContainer = cc.Class.extend({
    _components: null,
    _owner: null,
    ctor: function(node) {
        this._components = null;
        this._owner = node;
    },
    getComponent: function(name) {
        if (!name) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->10");
        }
        name = name.trim();
        if (!this._components) {
            this._components = {};
        }
        return this._components[name];
    },
    add: function(component) {
        if (!component) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->20");
        }
        if (component.getOwner()) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->24");
        }
        if (this._components == null) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->27");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->28");
        }
        var oldComponent = this._components[component.getName()];
        if (oldComponent) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->33");
        }
        component.setOwner(this._owner);
        this._components[component.getName()] = component;
        component.onEnter();
        return true;
    },
    remove: function(name) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->50");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->51");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->52");
    },
    _removeByComponent: function(component) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->55");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->56");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->57");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->61");
    },
    removeAll: function() {
        if (!this._components) {
            return;
        }
        var locComponents = this._components;
        for (var selKey in locComponents) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->72");
        }
        this._owner.unscheduleUpdate();
        this._components = null;
    },
    _alloc: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->78");
    },
    visit: function(delta) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->87");
    },
    isEmpty: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/components/CCComponentContainer.js->93");
    }
});