(function() {
    ccs.Armature.RenderCmd = {
        _updateAnchorPointInPoint: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->4");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->5");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->6");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->7");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->8");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->9");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->10");
        },
        getAnchorPointInPoints: function() {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->13");
        }
    };
})();
(function() {
    ccs.Armature.CanvasRenderCmd = function(renderableObject) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->19");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->20");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->21");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->22");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->23");
    };
    var proto = ccs.Armature.CanvasRenderCmd.prototype = Object.create(cc.Node.CanvasRenderCmd.prototype);
    cc.inject(ccs.Armature.RenderCmd, proto);
    proto.constructor = ccs.Armature.CanvasRenderCmd;
    proto._startCmdCallback = function(ctx, scaleX, scaleY) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->29");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->33");
    };
    proto.transform = function(parentCmd, recursive) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->36");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->37");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->38");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->50");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->51");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->55");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->56");
    };
    proto._RestoreCmdCallback = function(wrapper) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->61");
    };
    proto.initShaderCache = function() {};
    proto.setShaderProgram = function() {};
    proto.updateChildPosition = function(ctx, dis) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->66");
    };
    proto.rendering = function(ctx, scaleX, scaleY) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->91");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->92");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->93");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->97");
    };
    proto._visitNormalChild = function(childNode) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->103");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->104");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->105");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->112");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->113");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->129");
    };
    proto.visit = function(parentCmd) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->133");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->134");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->135");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->138");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->139");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->140");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/armature/CCArmatureCanvasRenderCmd.js->141");
    };
})();