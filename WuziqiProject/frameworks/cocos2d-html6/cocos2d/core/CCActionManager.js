cc.HashElement = cc.Class.extend({
    actions: null,
    target: null,
    actionIndex: 0,
    currentAction: null,
    currentActionSalvaged: false,
    paused: false,
    hh: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->16");
    }
});
cc.ActionManager = cc.Class.extend({
    _hashTargets: null,
    _arrayTargets: null,
    _currentTarget: null,
    _currentTargetSalvaged: false,
    _searchElementByTarget: function(arr, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->30");
    },
    ctor: function() {
        this._hashTargets = {};
        this._arrayTargets = [];
        this._currentTarget = null;
        this._currentTargetSalvaged = false;
    },
    addAction: function(action, target, paused) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->55");
    },
    removeAllActions: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->64");
    },
    removeAllActionsFromTarget: function(target, forceDelete) {
        if (target == null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->68");
        }
        var element = this._hashTargets[target.__instanceId];
        if (element) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->80");
        }
    },
    removeAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->98");
    },
    removeActionByTag: function(tag, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->115");
    },
    getActionByTag: function(tag, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->133");
    },
    numberOfRunningActionsInTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->140");
    },
    pauseTarget: function(target) {
        var element = this._hashTargets[target.__instanceId];
        if (element) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->145");
        }
    },
    resumeTarget: function(target) {
        var element = this._hashTargets[target.__instanceId];
        if (element) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->151");
        }
    },
    pauseAllRunningActions: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->164");
    },
    resumeTargets: function(targetsToResume) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->174");
    },
    purgeSharedManager: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->177");
    },
    _removeActionAtIndex: function(index, element) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->194");
    },
    _deleteHashElement: function(element) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->202");
    },
    _actionAllocWithHashElement: function(element) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->207");
    },
    update: function(dt) {
        var locTargets = this._arrayTargets, locCurrTarget;
        for (var elt = 0; elt < locTargets.length; elt++) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCActionManager.js->237");
        }
    }
});