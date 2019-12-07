cc.SCENE_FADE = 4208917214;
cc.TRANSITION_ORIENTATION_LEFT_OVER = 0;
cc.TRANSITION_ORIENTATION_RIGHT_OVER = 1;
cc.TRANSITION_ORIENTATION_UP_OVER = 0;
cc.TRANSITION_ORIENTATION_DOWN_OVER = 1;
cc.TransitionScene = cc.Scene.extend({
    _inScene: null,
    _outScene: null,
    _duration: null,
    _isInSceneOnTop: false,
    _isSendCleanupToScene: false,
    _className: "TransitionScene",
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->17");
    },
    _setNewScene: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->25");
    },
    _sceneOrder: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->28");
    },
    visit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->38");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->44");
    },
    onExit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->50");
    },
    cleanup: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->56");
    },
    initWithDuration: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->83");
    },
    finish: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->106");
    },
    hideOutShowIn: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->110");
    }
});
cc.TransitionScene.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->114");
};
cc.TransitionSceneOriented = cc.TransitionScene.extend({
    _orientation: 0,
    ctor: function(t, scene, orientation) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->120");
    },
    initWithDuration: function(t, scene, orientation) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->126");
    }
});
cc.TransitionSceneOriented.create = function(t, scene, orientation) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->130");
};
cc.TransitionRotoZoom = cc.TransitionScene.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->135");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->151");
    }
});
cc.TransitionRotoZoom.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->155");
};
cc.TransitionJumpZoom = cc.TransitionScene.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->160");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->181");
    }
});
cc.TransitionJumpZoom.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->185");
};
cc.TransitionMoveInL = cc.TransitionScene.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->190");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->196");
    },
    initScenes: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->199");
    },
    action: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->202");
    },
    easeActionWithAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->205");
    }
});
cc.TransitionMoveInL.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->209");
};
cc.TransitionMoveInR = cc.TransitionMoveInL.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->214");
    },
    initScenes: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->217");
    }
});
cc.TransitionMoveInR.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->221");
};
cc.TransitionMoveInT = cc.TransitionMoveInL.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->226");
    },
    initScenes: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->229");
    }
});
cc.TransitionMoveInT.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->233");
};
cc.TransitionMoveInB = cc.TransitionMoveInL.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->238");
    },
    initScenes: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->241");
    }
});
cc.TransitionMoveInB.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->245");
};
cc.ADJUST_FACTOR = .5;
cc.TransitionSlideInL = cc.TransitionScene.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->251");
    },
    _sceneOrder: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->254");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->264");
    },
    initScenes: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->267");
    },
    action: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->270");
    },
    easeActionWithAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->273");
    }
});
cc.TransitionSlideInL.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->277");
};
cc.TransitionSlideInR = cc.TransitionSlideInL.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->282");
    },
    _sceneOrder: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->285");
    },
    initScenes: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->288");
    },
    action: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->291");
    }
});
cc.TransitionSlideInR.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->295");
};
cc.TransitionSlideInB = cc.TransitionSlideInL.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->300");
    },
    _sceneOrder: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->303");
    },
    initScenes: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->306");
    },
    action: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->309");
    }
});
cc.TransitionSlideInB.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->313");
};
cc.TransitionSlideInT = cc.TransitionSlideInL.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->318");
    },
    _sceneOrder: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->321");
    },
    initScenes: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->324");
    },
    action: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->327");
    }
});
cc.TransitionSlideInT.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->331");
};
cc.TransitionShrinkGrow = cc.TransitionScene.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->336");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->353");
    },
    easeActionWithAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->356");
    }
});
cc.TransitionShrinkGrow.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->360");
};
cc.TransitionFlipX = cc.TransitionSceneOriented.extend({
    ctor: function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->368");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->389");
    }
});
cc.TransitionFlipX.create = function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->393");
};
cc.TransitionFlipY = cc.TransitionSceneOriented.extend({
    ctor: function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->397");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->398");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->401");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->405");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->413");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->422");
    }
});
cc.TransitionFlipY.create = function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->426");
};
cc.TransitionFlipAngular = cc.TransitionSceneOriented.extend({
    ctor: function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->430");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->431");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->432");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->433");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->434");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->441");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->442");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->445");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->446");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->447");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->448");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->449");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->450");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->451");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->452");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->453");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->454");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->455");
    }
});
cc.TransitionFlipAngular.create = function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->459");
};
cc.TransitionZoomFlipX = cc.TransitionSceneOriented.extend({
    ctor: function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->463");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->464");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->465");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->466");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->467");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->470");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->471");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->472");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->475");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->476");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->477");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->478");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->479");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->480");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->481");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->482");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->483");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->484");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->485");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->486");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->487");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->488");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->489");
    }
});
cc.TransitionZoomFlipX.create = function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->493");
};
cc.TransitionZoomFlipY = cc.TransitionSceneOriented.extend({
    ctor: function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->497");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->498");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->499");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->500");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->501");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->504");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->505");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->506");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->507");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->508");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->509");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->510");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->511");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->512");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->513");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->514");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->515");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->516");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->517");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->518");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->519");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->520");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->521");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->522");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->523");
    }
});
cc.TransitionZoomFlipY.create = function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->527");
};
cc.TransitionZoomFlipAngular = cc.TransitionSceneOriented.extend({
    ctor: function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->531");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->532");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->533");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->534");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->535");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->538");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->539");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->540");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->541");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->542");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->543");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->544");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->545");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->546");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->547");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->548");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->549");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->550");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->551");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->552");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->553");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->554");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->555");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->556");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->557");
    }
});
cc.TransitionZoomFlipAngular.create = function(t, scene, o) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->561");
};
cc.TransitionFade = cc.TransitionScene.extend({
    _color: null,
    ctor: function(t, scene, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->566");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->567");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->568");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->571");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->572");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->573");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->574");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->575");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->576");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->577");
    },
    onExit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->580");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->581");
    },
    initWithDuration: function(t, scene, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->584");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->585");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->586");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->587");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->588");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->589");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->590");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->591");
    }
});
cc.TransitionFade.create = function(t, scene, color) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->595");
};
cc.TransitionCrossFade = cc.TransitionScene.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->599");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->600");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->603");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->604");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->605");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->606");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->607");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->608");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->609");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->610");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->611");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->612");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->613");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->614");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->615");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->616");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->617");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->618");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->619");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->620");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->621");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->622");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->623");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->624");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->625");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->626");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->627");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->628");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->629");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->630");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->631");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->632");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->633");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->634");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->635");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->636");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->637");
    },
    onExit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->640");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->641");
    },
    visit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->644");
    },
    draw: function() {}
});
cc.TransitionCrossFade.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->649");
};
cc.TransitionTurnOffTiles = cc.TransitionScene.extend({
    _gridProxy: null,
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->654");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->655");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->656");
    },
    _sceneOrder: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->659");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->662");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->663");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->664");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->665");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->666");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->667");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->668");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->669");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->670");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->671");
    },
    visit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->674");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->675");
    },
    easeActionWithAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->678");
    }
});
cc.TransitionTurnOffTiles.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->682");
};
cc.TransitionSplitCols = cc.TransitionScene.extend({
    _gridProxy: null,
    _switchTargetToInscene: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->687");
    },
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->690");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->691");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->692");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->695");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->696");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->697");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->698");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->699");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->700");
    },
    onExit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->703");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->704");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->705");
    },
    visit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->708");
    },
    easeActionWithAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->711");
    },
    action: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->714");
    }
});
cc.TransitionSplitCols.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->718");
};
cc.TransitionSplitRows = cc.TransitionSplitCols.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->722");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->723");
    },
    action: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->726");
    }
});
cc.TransitionSplitRows.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->730");
};
cc.TransitionFadeTR = cc.TransitionScene.extend({
    _gridProxy: null,
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->735");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->736");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->737");
    },
    _sceneOrder: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->740");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->743");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->744");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->745");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->746");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->747");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->748");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->749");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->750");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->751");
    },
    visit: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->754");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->755");
    },
    easeActionWithAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->758");
    },
    actionWithSize: function(size) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->761");
    }
});
cc.TransitionFadeTR.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->765");
};
cc.TransitionFadeBL = cc.TransitionFadeTR.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->769");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->770");
    },
    actionWithSize: function(size) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->773");
    }
});
cc.TransitionFadeBL.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->777");
};
cc.TransitionFadeUp = cc.TransitionFadeTR.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->781");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->782");
    },
    actionWithSize: function(size) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->785");
    }
});
cc.TransitionFadeUp.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->789");
};
cc.TransitionFadeDown = cc.TransitionFadeTR.extend({
    ctor: function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->793");
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->794");
    },
    actionWithSize: function(size) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->797");
    }
});
cc.TransitionFadeDown.create = function(t, scene) {
console.log("/frameworks/cocos2d-html5/cocos2d/transitions/CCTransition.js->801");
};