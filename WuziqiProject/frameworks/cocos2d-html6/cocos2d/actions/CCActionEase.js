cc.ActionEase = cc.ActionInterval.extend({
    _inner: null,
    ctor: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->4");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->5");
    },
    initWithAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->8");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->15");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->20");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->24");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->28");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->31");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->34");
    },
    getInnerAction: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->37");
    }
});
cc.actionEase = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->41");
};
cc.ActionEase.create = cc.actionEase;
cc.EaseRateAction = cc.ActionEase.extend({
    _rate: 0,
    ctor: function(action, rate) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->48");
    },
    setRate: function(rate) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->51");
    },
    getRate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->54");
    },
    initWithAction: function(action, rate) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->61");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->66");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->69");
    }
});
cc.easeRateAction = function(action, rate) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->73");
};
cc.EaseRateAction.create = cc.easeRateAction;
cc.EaseIn = cc.EaseRateAction.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->78");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->81");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->86");
    }
});
cc.EaseIn.create = function(action, rate) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->90");
};
cc.easeIn = function(rate) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->101");
};
cc.EaseOut = cc.EaseRateAction.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->105");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->108");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->113");
    }
});
cc.EaseOut.create = function(action, rate) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->117");
};
cc.easeOut = function(rate) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->128");
};
cc.EaseInOut = cc.EaseRateAction.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->137");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->142");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->145");
    }
});
cc.EaseInOut.create = function(action, rate) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->149");
};
cc.easeInOut = function(rate) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->165");
};
cc.EaseExponentialIn = cc.ActionEase.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->169");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->172");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->177");
    }
});
cc.EaseExponentialIn.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->181");
};
cc._easeExponentialInObj = {
    easing: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->185");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->188");
    }
};
cc.easeExponentialIn = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->192");
};
cc.EaseExponentialOut = cc.ActionEase.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->196");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->199");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->204");
    }
});
cc.EaseExponentialOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->208");
};
cc._easeExponentialOutObj = {
    easing: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->212");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->215");
    }
};
cc.easeExponentialOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->219");
};
cc.EaseExponentialInOut = cc.ActionEase.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->231");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->234");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->239");
    }
});
cc.EaseExponentialInOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->243");
};
cc._easeExponentialInOutObj = {
    easing: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->255");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->258");
    }
};
cc.easeExponentialInOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->262");
};
cc.EaseSineIn = cc.ActionEase.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->267");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->270");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->275");
    }
});
cc.EaseSineIn.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->279");
};
cc._easeSineInObj = {
    easing: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->283");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->286");
    }
};
cc.easeSineIn = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->290");
};
cc.EaseSineOut = cc.ActionEase.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->295");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->298");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->303");
    }
});
cc.EaseSineOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->307");
};
cc._easeSineOutObj = {
    easing: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->311");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->314");
    }
};
cc.easeSineOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->318");
};
cc.EaseSineInOut = cc.ActionEase.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->323");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->328");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->331");
    }
});
cc.EaseSineInOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->335");
};
cc._easeSineInOutObj = {
    easing: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->339");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->342");
    }
};
cc.easeSineInOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->346");
};
cc.EaseElastic = cc.ActionEase.extend({
    _period: .3,
    ctor: function(action, period) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->352");
    },
    getPeriod: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->355");
    },
    setPeriod: function(period) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->358");
    },
    initWithAction: function(action, period) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->363");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->367");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->372");
    }
});
cc.EaseElastic.create = function(action, period) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->376");
};
cc.EaseElasticIn = cc.EaseElastic.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->388");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->391");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->395");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->396");
    }
});
cc.EaseElasticIn.create = function(action, period) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->400");
};
cc._easeElasticInObj = {
    easing: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->405");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->408");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->411");
    }
};
cc.easeElasticIn = function(period) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->428");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->430");
};
cc.EaseElasticOut = cc.EaseElastic.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->441");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->444");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->447");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->448");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->449");
    }
});
cc.EaseElasticOut.create = function(action, period) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->453");
};
cc._easeElasticOutObj = {
    easing: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->457");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->460");
    }
};
cc.easeElasticOut = function(period) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->464");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->465");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->466");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->467");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->468");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->469");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->470");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->471");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->472");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->475");
};
cc.EaseElasticInOut = cc.EaseElastic.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->479");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->480");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->481");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->482");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->483");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->484");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->485");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->486");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->487");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->488");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->489");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->490");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->491");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->492");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->493");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->494");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->495");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->496");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->499");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->502");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->503");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->504");
    }
});
cc.EaseElasticInOut.create = function(action, period) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->508");
};
cc.easeElasticInOut = function(period) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->511");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->512");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->513");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->514");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->515");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->516");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->517");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->518");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->519");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->520");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->521");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->522");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->523");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->524");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->525");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->526");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->527");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->528");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->529");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->530");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->531");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->532");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->533");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->534");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->535");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->536");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->537");
};
cc.EaseBounce = cc.ActionEase.extend({
    bounceTime: function(time1) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->541");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->542");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->543");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->544");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->545");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->546");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->547");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->548");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->549");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->550");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->551");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->552");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->553");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->554");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->555");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->558");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->559");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->560");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->563");
    }
});
cc.EaseBounce.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->567");
};
cc.EaseBounceIn = cc.EaseBounce.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->571");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->572");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->575");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->578");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->579");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->580");
    }
});
cc.EaseBounceIn.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->584");
};
cc._bounceTime = function(time1) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->587");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->588");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->589");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->590");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->591");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->592");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->593");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->594");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->595");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->596");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->597");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->598");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->599");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->600");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->601");
};
cc._easeBounceInObj = {
    easing: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->605");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->608");
    }
};
cc.easeBounceIn = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->612");
};
cc.EaseBounceOut = cc.EaseBounce.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->616");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->617");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->620");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->623");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->624");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->625");
    }
});
cc.EaseBounceOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->629");
};
cc._easeBounceOutObj = {
    easing: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->633");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->636");
    }
};
cc.easeBounceOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->640");
};
cc.EaseBounceInOut = cc.EaseBounce.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->644");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->645");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->646");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->647");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->648");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->649");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->650");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->651");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->654");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->655");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->656");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->659");
    }
});
cc.EaseBounceInOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->663");
};
cc._easeBounceInOutObj = {
    easing: function(time1) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->667");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->668");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->669");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->670");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->671");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->672");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->673");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->674");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->677");
    }
};
cc.easeBounceInOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->681");
};
cc.EaseBackIn = cc.ActionEase.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->685");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->686");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->687");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->690");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->693");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->694");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->695");
    }
});
cc.EaseBackIn.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->699");
};
cc._easeBackInObj = {
    easing: function(time1) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->703");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->704");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->707");
    }
};
cc.easeBackIn = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->711");
};
cc.EaseBackOut = cc.ActionEase.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->715");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->716");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->717");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->720");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->723");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->724");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->725");
    }
});
cc.EaseBackOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->729");
};
cc._easeBackOutObj = {
    easing: function(time1) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->733");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->734");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->735");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->738");
    }
};
cc.easeBackOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->742");
};
cc.EaseBackInOut = cc.ActionEase.extend({
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->746");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->747");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->748");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->749");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->750");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->751");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->752");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->753");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->756");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->757");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->758");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->761");
    }
});
cc.EaseBackInOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->765");
};
cc._easeBackInOutObj = {
    easing: function(time1) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->769");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->770");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->771");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->772");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->773");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->774");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->775");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->776");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->779");
    }
};
cc.easeBackInOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->783");
};
cc.EaseBezierAction = cc.ActionEase.extend({
    _p0: null,
    _p1: null,
    _p2: null,
    _p3: null,
    ctor: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->791");
    },
    _updateTime: function(a, b, c, d, t) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->794");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->797");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->798");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->801");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->802");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->803");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->804");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->807");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->808");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->809");
    },
    setBezierParamer: function(p0, p1, p2, p3) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->812");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->813");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->814");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->815");
    }
});
cc.EaseBezierAction.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->819");
};
cc.easeBezierAction = function(p0, p1, p2, p3) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->822");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->823");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->824");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->825");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->826");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->827");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->828");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->829");
};
cc.EaseQuadraticActionIn = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->833");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->836");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->839");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->840");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->841");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->844");
    }
});
cc.EaseQuadraticActionIn.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->848");
};
cc._easeQuadraticActionIn = {
    easing: cc.EaseQuadraticActionIn.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->853");
    }
};
cc.easeQuadraticActionIn = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->857");
};
cc.EaseQuadraticActionOut = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->861");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->864");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->867");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->868");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->869");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->872");
    }
});
cc.EaseQuadraticActionOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->876");
};
cc._easeQuadraticActionOut = {
    easing: cc.EaseQuadraticActionOut.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->881");
    }
};
cc.easeQuadraticActionOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->885");
};
cc.EaseQuadraticActionInOut = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->889");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->890");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->891");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->892");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->893");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->894");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->895");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->896");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->897");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->900");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->903");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->904");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->905");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->908");
    }
});
cc.EaseQuadraticActionInOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->912");
};
cc._easeQuadraticActionInOut = {
    easing: cc.EaseQuadraticActionInOut.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->917");
    }
};
cc.easeQuadraticActionInOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->921");
};
cc.EaseQuarticActionIn = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->925");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->928");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->931");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->932");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->933");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->936");
    }
});
cc.EaseQuarticActionIn.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->940");
};
cc._easeQuarticActionIn = {
    easing: cc.EaseQuarticActionIn.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->945");
    }
};
cc.easeQuarticActionIn = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->949");
};
cc.EaseQuarticActionOut = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->953");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->954");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->957");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->960");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->961");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->962");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->965");
    }
});
cc.EaseQuarticActionOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->969");
};
cc._easeQuarticActionOut = {
    easing: cc.EaseQuarticActionOut.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->974");
    }
};
cc.easeQuarticActionOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->978");
};
cc.EaseQuarticActionInOut = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->982");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->983");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->984");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->985");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->986");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->987");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->990");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->993");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->994");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->995");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->998");
    }
});
cc.EaseQuarticActionInOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1002");
};
cc._easeQuarticActionInOut = {
    easing: cc.EaseQuarticActionInOut.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1007");
    }
};
cc.easeQuarticActionInOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1011");
};
cc.EaseQuinticActionIn = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1015");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1018");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1021");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1022");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1023");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1026");
    }
});
cc.EaseQuinticActionIn.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1030");
};
cc._easeQuinticActionIn = {
    easing: cc.EaseQuinticActionIn.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1035");
    }
};
cc.easeQuinticActionIn = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1039");
};
cc.EaseQuinticActionOut = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1043");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1044");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1047");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1050");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1051");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1052");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1055");
    }
});
cc.EaseQuinticActionOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1059");
};
cc._easeQuinticActionOut = {
    easing: cc.EaseQuinticActionOut.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1064");
    }
};
cc.easeQuinticActionOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1068");
};
cc.EaseQuinticActionInOut = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1072");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1073");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1074");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1075");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1076");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1077");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1080");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1083");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1084");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1085");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1088");
    }
});
cc.EaseQuinticActionInOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1092");
};
cc._easeQuinticActionInOut = {
    easing: cc.EaseQuinticActionInOut.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1097");
    }
};
cc.easeQuinticActionInOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1101");
};
cc.EaseCircleActionIn = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1105");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1108");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1111");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1112");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1113");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1116");
    }
});
cc.EaseCircleActionIn.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1120");
};
cc._easeCircleActionIn = {
    easing: cc.EaseCircleActionIn.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1125");
    }
};
cc.easeCircleActionIn = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1129");
};
cc.EaseCircleActionOut = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1133");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1134");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1137");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1140");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1141");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1142");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1145");
    }
});
cc.EaseCircleActionOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1149");
};
cc._easeCircleActionOut = {
    easing: cc.EaseCircleActionOut.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1154");
    }
};
cc.easeCircleActionOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1158");
};
cc.EaseCircleActionInOut = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1162");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1163");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1164");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1165");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1166");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1167");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1170");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1173");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1174");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1175");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1178");
    }
});
cc.EaseCircleActionInOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1182");
};
cc._easeCircleActionInOut = {
    easing: cc.EaseCircleActionInOut.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1187");
    }
};
cc.easeCircleActionInOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1191");
};
cc.EaseCubicActionIn = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1195");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1198");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1201");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1202");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1203");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1206");
    }
});
cc.EaseCubicActionIn.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1210");
};
cc._easeCubicActionIn = {
    easing: cc.EaseCubicActionIn.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1215");
    }
};
cc.easeCubicActionIn = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1219");
};
cc.EaseCubicActionOut = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1223");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1224");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1227");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1230");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1231");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1232");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1235");
    }
});
cc.EaseCubicActionOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1239");
};
cc._easeCubicActionOut = {
    easing: cc.EaseCubicActionOut.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1244");
    }
};
cc.easeCubicActionOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1248");
};
cc.EaseCubicActionInOut = cc.ActionEase.extend({
    _updateTime: function(time) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1252");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1253");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1254");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1255");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1256");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1257");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1260");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1263");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1264");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1265");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1268");
    }
});
cc.EaseCubicActionInOut.create = function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1272");
};
cc._easeCubicActionInOut = {
    easing: cc.EaseCubicActionInOut.prototype._updateTime,
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1277");
    }
};
cc.easeCubicActionInOut = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionEase.js->1281");
};