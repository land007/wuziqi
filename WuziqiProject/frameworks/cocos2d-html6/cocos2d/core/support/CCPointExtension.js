cc.POINT_EPSILON = parseFloat("1.192092896e-07F");
cc.pNeg = function(point) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->3");
};
cc.pAdd = function(v1, v2) {
    return cc.p(v1.x + v2.x, v1.y + v2.y);
};
cc.pSub = function(v1, v2) {
    return cc.p(v1.x - v2.x, v1.y - v2.y);
};
cc.pMult = function(point, floatVar) {
    return cc.p(point.x * floatVar, point.y * floatVar);
};
cc.pMidpoint = function(v1, v2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->15");
};
cc.pDot = function(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
};
cc.pCross = function(v1, v2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->21");
};
cc.pPerp = function(point) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->24");
};
cc.pRPerp = function(point) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->27");
};
cc.pProject = function(v1, v2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->30");
};
cc.pRotate = function(v1, v2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->33");
};
cc.pUnrotate = function(v1, v2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->36");
};
cc.pLengthSQ = function(v) {
    return cc.pDot(v, v);
};
cc.pDistanceSQ = function(point1, point2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->42");
};
cc.pLength = function(v) {
    return Math.sqrt(cc.pLengthSQ(v));
};
cc.pDistance = function(v1, v2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->48");
};
cc.pNormalize = function(v) {
    var n = cc.pLength(v);
    return n === 0 ? cc.p(v) : cc.pMult(v, 1 / n);
};
cc.pForAngle = function(a) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->55");
};
cc.pToAngle = function(v) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->58");
};
cc.clampf = function(value, min_inclusive, max_inclusive) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->66");
};
cc.pClamp = function(p, min_inclusive, max_inclusive) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->69");
};
cc.pFromSize = function(s) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->72");
};
cc.pCompOp = function(p, opFunc) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->75");
};
cc.pLerp = function(a, b, alpha) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->78");
};
cc.pFuzzyEqual = function(a, b, variance) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->86");
};
cc.pCompMult = function(a, b) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->89");
};
cc.pAngleSigned = function(a, b) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->98");
};
cc.pAngle = function(a, b) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->105");
};
cc.pRotateByAngle = function(v, pivot, angle) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->113");
};
cc.pLineIntersect = function(A, B, C, D, retP) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->136");
};
cc.pSegmentIntersect = function(A, B, C, D) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->145");
};
cc.pIntersectPoint = function(A, B, C, D) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->155");
};
cc.pSameAs = function(A, B) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->161");
};
cc.pZeroIn = function(v) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->165");
};
cc.pIn = function(v1, v2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->169");
};
cc.pMultIn = function(point, floatVar) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->173");
};
cc.pSubIn = function(v1, v2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->177");
};
cc.pAddIn = function(v1, v2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->181");
};
cc.pNormalizeIn = function(v) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/support/CCPointExtension.js->184");
};