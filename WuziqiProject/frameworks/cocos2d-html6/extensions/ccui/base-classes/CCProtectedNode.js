cc.ProtectedNode = cc.Node.extend({
    _protectedChildren: null,
    _reorderProtectedChildDirty: false,
    _insertProtectedChild: function(child, z) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->5");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->6");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->7");
    },
    ctor: function() {
        cc.Node.prototype.ctor.call(this);
        this._protectedChildren = [];
    },
    addProtectedChild: function(child, localZOrder, tag) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->14");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->15");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->16");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->17");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->18");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->19");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->20");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->21");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->22");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->23");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->24");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->25");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->26");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->27");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->28");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->29");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->30");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->31");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->32");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->33");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->34");
    },
    getProtectedChildByTag: function(tag) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->37");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->38");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->39");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->40");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->41");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->42");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->43");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->44");
    },
    removeProtectedChild: function(child, cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->47");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->48");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->49");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->50");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->51");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->52");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->53");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->54");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->55");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->56");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->57");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->58");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->59");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->60");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->61");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->62");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->63");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->64");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->65");
    },
    removeProtectedChildByTag: function(tag, cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->68");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->69");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->70");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->71");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->72");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->73");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->74");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->75");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->76");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->77");
    },
    removeAllProtectedChildren: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->80");
    },
    removeAllProtectedChildrenWithCleanup: function(cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->83");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->84");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->85");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->86");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->87");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->88");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->89");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->90");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->91");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->92");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->93");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->94");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->95");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->96");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->97");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->98");
    },
    reorderProtectedChild: function(child, localZOrder) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->101");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->102");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->103");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->104");
    },
    sortAllProtectedChildren: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->107");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->108");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->109");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->110");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->111");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->112");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->113");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->114");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->116");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->117");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->118");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->119");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->120");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->121");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->124");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->125");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->126");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->127");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->128");
    },
    _changePosition: function() {},
    cleanup: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->132");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->133");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->134");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->135");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->136");
    },
    onEnter: function() {
        cc.Node.prototype.onEnter.call(this);
        var locChildren = this._protectedChildren;
        for (var i = 0, len = locChildren.length; i < len; i++) {
            locChildren[i].onEnter();
        }
    },
    onEnterTransitionDidFinish: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->146");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->147");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->148");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->149");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->150");
    },
    onExit: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->153");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->154");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->155");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->156");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->157");
    },
    onExitTransitionDidStart: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->160");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->161");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->162");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->163");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->164");
    },
    _createRenderCmd: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->167");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->168");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->169");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->170");
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->171");
    }
});
cc.ProtectedNode.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/base-classes/CCProtectedNode.js->175");
};