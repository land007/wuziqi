ccs.Timeline = ccs.Class.extend({
    _frames: null,
    _currentKeyFrame: null,
    _currentKeyFrameIndex: null,
    _fromIndex: null,
    _toIndex: null,
    _betweenDuration: null,
    _actionTag: null,
    _ActionTimeline: null,
    _node: null,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->12");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->13");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->14");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->15");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->16");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->17");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->18");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->19");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->20");
    },
    _gotoFrame: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->23");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->24");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->25");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->26");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->27");
    },
    _stepToFrame: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->34");
    },
    getFrames: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->37");
    },
    addFrame: function(frame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->41");
    },
    insertFrame: function(frame, index) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->45");
    },
    removeFrame: function(frame) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->49");
    },
    setActionTag: function(tag) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->52");
    },
    getActionTag: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->55");
    },
    setNode: function(node) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->61");
    },
    getNode: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->64");
    },
    setActionTimeline: function(action) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->67");
    },
    getActionTimeline: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->70");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->80");
    },
    _apply: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->86");
    },
    _binarySearchKeyFrame: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->112");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->113");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->135");
    },
    _updateCurrentKeyFrame: function(frameIndex) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->148");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->149");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->150");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->151");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->152");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->156");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->159");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->160");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->161");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->162");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->163");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->164");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->165");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->166");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->167");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->169");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->170");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->171");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->172");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->173");
    }
});
ccs.Timeline.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/timeline/Timeline.js->177");
};