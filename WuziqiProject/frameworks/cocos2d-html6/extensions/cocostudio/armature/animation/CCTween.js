ccs.Tween = ccs.ProcessBase.extend({
    _tweenData: null,
    _to: null,
    _from: null,
    _between: null,
    _movementBoneData: null,
    _bone: null,
    _frameTweenEasing: 0,
    _betweenDuration: 0,
    _totalDuration: 0,
    _toIndex: 0,
    _fromIndex: 0,
    _animation: null,
    _passLastFrame: false,
    ctor: function(bone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->16");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->17");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->18");
    },
    init: function(bone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->21");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->24");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->25");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->27");
    },
    play: function(movementBoneData, durationTo, durationTween, loop, tweenEasing) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->35");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->36");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->37");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->38");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->50");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->51");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->55");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->56");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->57");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->67");
    },
    gotoAndPlay: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->77");
    },
    gotoAndPause: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->81");
    },
    updateHandler: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->112");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->113");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->147");
    },
    setBetween: function(from, to, limit) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->150");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->151");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->152");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->156");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->159");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->160");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->161");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->162");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->163");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->164");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->165");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->166");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->167");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->169");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->170");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->171");
    },
    arriveKeyFrame: function(keyFrameData) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->174");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->175");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->176");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->177");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->178");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->179");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->180");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->181");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->182");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->183");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->184");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->185");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->186");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->187");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->188");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->189");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->190");
    },
    tweenNodeTo: function(percent, node) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->193");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->194");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->195");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->196");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->197");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->198");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->199");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->200");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->201");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->202");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->203");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->204");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->205");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->206");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->207");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->208");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->209");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->210");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->211");
    },
    tweenColorTo: function(percent, node) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->214");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->215");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->216");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->217");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->218");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->219");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->220");
    },
    updateFrameData: function(currentPercent) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->223");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->224");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->225");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->226");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->227");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->228");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->229");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->230");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->231");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->232");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->233");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->234");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->235");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->236");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->237");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->238");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->239");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->240");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->241");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->242");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->243");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->244");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->245");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->246");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->247");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->248");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->249");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->250");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->251");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->252");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->253");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->254");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->255");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->256");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->257");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->258");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->259");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->260");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->261");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->262");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->263");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->264");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->265");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->266");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->267");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->268");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->269");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->270");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->271");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->272");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->273");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->274");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->275");
    },
    setAnimation: function(animation) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->278");
    },
    getAnimation: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->281");
    },
    setMovementBoneData: function(data) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->284");
    }
});
var _p = ccs.Tween.prototype;
_p.animation;
cc.defineGetterSetter(_p, "animation", _p.getAnimation, _p.setAnimation);
_p = null;
ccs.Tween.create = function(bone) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCTween.js->292");
};