ccs.MovementEventType = {
    start: 0,
    complete: 1,
    loopComplete: 2
};
ccs.AnimationEvent = ccs.Class.extend({
    _arguments: null,
    _callFunc: null,
    _selectorTarget: null,
    ctor: function(callFunc, target, data) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->11");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->12");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->13");
    },
    call: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->16");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->17");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->18");
    },
    setArguments: function(args) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->21");
    }
});
ccs.MovementEvent = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->25");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->27");
};
ccs.FrameEvent = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->33");
};
ccs.ArmatureAnimation = ccs.ProcessBase.extend({
    _animationData: null,
    _movementData: null,
    _armature: null,
    _movementID: "",
    _toIndex: 0,
    _tweenList: null,
    _speedScale: 1,
    _ignoreFrameEvent: false,
    _frameEventQueue: null,
    _movementEventQueue: null,
    _movementList: null,
    _onMovementList: false,
    _movementListLoop: false,
    _movementIndex: 0,
    _movementListDurationTo: -1,
    _movementEventCallFunc: null,
    _frameEventCallFunc: null,
    _movementEventTarget: null,
    _frameEventTarget: null,
    _movementEventListener: null,
    _frameEventListener: null,
    ctor: function(armature) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->64");
    },
    init: function(armature) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->69");
    },
    pause: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->76");
    },
    resume: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->83");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->91");
    },
    setAnimationScale: function(animationScale) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->94");
    },
    getAnimationScale: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->97");
    },
    setSpeedScale: function(speedScale) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->112");
    },
    getSpeedScale: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->115");
    },
    play: function(animationName, durationTo, loop) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->148");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->149");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->150");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->151");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->152");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->156");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->159");
    },
    playByIndex: function(animationIndex, durationTo, durationTween, loop, tweenEasing) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->162");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->163");
    },
    playWithIndex: function(animationIndex, durationTo, loop) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->166");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->167");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->169");
    },
    playWithNames: function(movementNames, durationTo, loop) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->172");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->173");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->174");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->175");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->176");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->177");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->178");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->179");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->180");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->181");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->182");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->183");
    },
    playWithIndexes: function(movementIndexes, durationTo, loop) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->186");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->187");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->188");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->189");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->190");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->191");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->192");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->193");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->194");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->195");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->196");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->197");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->198");
    },
    gotoAndPlay: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->201");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->202");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->203");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->204");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->205");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->206");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->207");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->208");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->209");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->210");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->211");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->212");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->213");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->214");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->215");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->216");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->217");
    },
    gotoAndPause: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->220");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->221");
    },
    getMovementCount: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->224");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->227");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->228");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->229");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->230");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->231");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->232");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->233");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->234");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->235");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->236");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->237");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->238");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->239");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->240");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->241");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->242");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->243");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->244");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->245");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->246");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->247");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->248");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->249");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->250");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->251");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->252");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->253");
    },
    updateHandler: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->256");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->257");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->258");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->259");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->260");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->261");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->262");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->263");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->264");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->265");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->266");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->267");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->268");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->269");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->270");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->271");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->272");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->273");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->274");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->275");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->276");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->277");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->278");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->279");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->280");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->281");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->282");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->283");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->284");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->285");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->286");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->287");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->288");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->289");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->290");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->291");
    },
    getCurrentMovementID: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->294");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->295");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->296");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->297");
    },
    setMovementEventCallFunc: function(callFunc, target) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->300");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->301");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->302");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->303");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->304");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->305");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->306");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->307");
    },
    setFrameEventCallFunc: function(callFunc, target) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->310");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->311");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->312");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->313");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->314");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->315");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->316");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->317");
    },
    setUserObject: function(userObject) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->320");
    },
    frameEvent: function(bone, frameEventName, originFrameIndex, currentFrameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->323");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->324");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->325");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->326");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->327");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->328");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->329");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->330");
    },
    movementEvent: function(armature, movementType, movementID) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->333");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->334");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->335");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->336");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->337");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->338");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->339");
    },
    updateMovementList: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->342");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->343");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->344");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->345");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->346");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->347");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->348");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->349");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->350");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->351");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->352");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->353");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->354");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->355");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->356");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->357");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->358");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->359");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->360");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->361");
    },
    setAnimationData: function(data) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->364");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->365");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->366");
    },
    getAnimationData: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->369");
    },
    getUserObject: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->372");
    },
    isIgnoreFrameEvent: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->375");
    }
});
var _p = ccs.ArmatureAnimation.prototype;
_p.speedScale;
cc.defineGetterSetter(_p, "speedScale", _p.getSpeedScale, _p.setSpeedScale);
_p.animationScale;
cc.defineGetterSetter(_p, "animationScale", _p.getAnimationScale, _p.setAnimationScale);
_p = null;
ccs.ArmatureAnimation.create = function(armature) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/animation/CCArmatureAnimation.js->385");
};