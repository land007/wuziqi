cc.kmMat4 = function() {
    this.mat = new Float32Array([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
};
cc.kmMat4Fill = function(pOut, pMat) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->5");
};
cc.kmMat4Identity = function(pOut) {
    pOut.mat[1] = pOut.mat[2] = pOut.mat[3] = pOut.mat[4] = pOut.mat[6] = pOut.mat[7] = pOut.mat[8] = pOut.mat[9] = pOut.mat[11] = pOut.mat[12] = pOut.mat[13] = pOut.mat[14] = 0;
    pOut.mat[0] = pOut.mat[5] = pOut.mat[10] = pOut.mat[15] = 1;
    return pOut;
};
cc.kmMat4._get = function(pIn, row, col) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->13");
};
cc.kmMat4._set = function(pIn, row, col, value) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->16");
};
cc.kmMat4._swap = function(pIn, r1, c1, r2, c2) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->21");
};
cc.kmMat4._gaussj = function(a, b) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->59");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->86");
};
cc.kmMat4._identity = new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);
cc.kmMat4Inverse = function(pOut, pM) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->98");
};
cc.kmMat4IsIdentity = function(pIn) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->106");
};
cc.kmMat4Transpose = function(pOut, pIn) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->115");
};
cc.kmMat4Multiply = function(pOut, pM1, pM2) {
    var outArray = pOut.mat;
    var a00 = pM1.mat[0], a01 = pM1.mat[1], a02 = pM1.mat[2], a03 = pM1.mat[3];
    var a10 = pM1.mat[4], a11 = pM1.mat[5], a12 = pM1.mat[6], a13 = pM1.mat[7];
    var a20 = pM1.mat[8], a21 = pM1.mat[9], a22 = pM1.mat[10], a23 = pM1.mat[11];
    var a30 = pM1.mat[12], a31 = pM1.mat[13], a32 = pM1.mat[14], a33 = pM1.mat[15];
    var b00 = pM2.mat[0], b01 = pM2.mat[1], b02 = pM2.mat[2], b03 = pM2.mat[3];
    var b10 = pM2.mat[4], b11 = pM2.mat[5], b12 = pM2.mat[6], b13 = pM2.mat[7];
    var b20 = pM2.mat[8], b21 = pM2.mat[9], b22 = pM2.mat[10], b23 = pM2.mat[11];
    var b30 = pM2.mat[12], b31 = pM2.mat[13], b32 = pM2.mat[14], b33 = pM2.mat[15];
    outArray[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
    outArray[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
    outArray[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
    outArray[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
    outArray[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
    outArray[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
    outArray[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
    outArray[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
    outArray[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
    outArray[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
    outArray[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
    outArray[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
    outArray[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
    outArray[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
    outArray[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
    outArray[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
    return pOut;
};
cc.getMat4MultiplyValue = function(pM1, pM2) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->164");
};
cc.getMat4MultiplyWithMat4 = function(pM1, pM2, swapMat) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->185");
};
cc.kmMat4Assign = function(pOut, pIn) {
    if (pOut == pIn) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->190");
    }
    var outArr = pOut.mat;
    var inArr = pIn.mat;
    outArr[0] = inArr[0];
    outArr[1] = inArr[1];
    outArr[2] = inArr[2];
    outArr[3] = inArr[3];
    outArr[4] = inArr[4];
    outArr[5] = inArr[5];
    outArr[6] = inArr[6];
    outArr[7] = inArr[7];
    outArr[8] = inArr[8];
    outArr[9] = inArr[9];
    outArr[10] = inArr[10];
    outArr[11] = inArr[11];
    outArr[12] = inArr[12];
    outArr[13] = inArr[13];
    outArr[14] = inArr[14];
    outArr[15] = inArr[15];
    return pOut;
};
cc.kmMat4AreEqual = function(pMat1, pMat2) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->222");
};
cc.kmMat4RotationX = function(pOut, radians) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->241");
};
cc.kmMat4RotationY = function(pOut, radians) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->260");
};
cc.kmMat4RotationZ = function(pOut, radians) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->279");
};
cc.kmMat4RotationPitchYawRoll = function(pOut, pitch, yaw, roll) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->295");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->301");
};
cc.kmMat4RotationQuaternion = function(pOut, pQ) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->319");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->320");
};
cc.kmMat4RotationTranslation = function(pOut, rotation, translation) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->324");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->325");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->337");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->339");
};
cc.kmMat4Scaling = function(pOut, x, y, z) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->347");
};
cc.kmMat4Translation = function(pOut, x, y, z) {
    pOut.mat[0] = pOut.mat[5] = pOut.mat[10] = pOut.mat[15] = 1;
    pOut.mat[1] = pOut.mat[2] = pOut.mat[3] = pOut.mat[4] = pOut.mat[6] = pOut.mat[7] = pOut.mat[8] = pOut.mat[9] = pOut.mat[11] = 0;
    pOut.mat[12] = x;
    pOut.mat[13] = y;
    pOut.mat[14] = z;
    return pOut;
};
cc.kmMat4GetUpVec3 = function(pOut, pIn) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->358");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->362");
};
cc.kmMat4GetRightVec3 = function(pOut, pIn) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->369");
};
cc.kmMat4GetForwardVec3 = function(pOut, pIn) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->376");
};
cc.kmMat4PerspectiveProjection = function(pOut, fovY, aspect, zNear, zFar) {
    var r = cc.kmDegreesToRadians(fovY / 2);
    var deltaZ = zFar - zNear;
    var s = Math.sin(r);
    if (deltaZ == 0 || s == 0 || aspect == 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->383");
    }
    var cotangent = Math.cos(r) / s;
    cc.kmMat4Identity(pOut);
    pOut.mat[0] = cotangent / aspect;
    pOut.mat[5] = cotangent;
    pOut.mat[10] = -(zFar + zNear) / deltaZ;
    pOut.mat[11] = -1;
    pOut.mat[14] = -2 * zNear * zFar / deltaZ;
    pOut.mat[15] = 0;
    return pOut;
};
cc.kmMat4OrthographicProjection = function(pOut, left, right, bottom, top, nearVal, farVal) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->396");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->397");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->398");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->401");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->403");
};
cc.kmMat4LookAt = function(pOut, pEye, pCenter, pUp) {
    var f = new cc.kmVec3, up = new cc.kmVec3, s = new cc.kmVec3, u = new cc.kmVec3;
    var translate = new cc.kmMat4;
    cc.kmVec3Subtract(f, pCenter, pEye);
    cc.kmVec3Normalize(f, f);
    cc.kmVec3Assign(up, pUp);
    cc.kmVec3Normalize(up, up);
    cc.kmVec3Cross(s, f, up);
    cc.kmVec3Normalize(s, s);
    cc.kmVec3Cross(u, s, f);
    cc.kmVec3Normalize(s, s);
    cc.kmMat4Identity(pOut);
    pOut.mat[0] = s.x;
    pOut.mat[4] = s.y;
    pOut.mat[8] = s.z;
    pOut.mat[1] = u.x;
    pOut.mat[5] = u.y;
    pOut.mat[9] = u.z;
    pOut.mat[2] = -f.x;
    pOut.mat[6] = -f.y;
    pOut.mat[10] = -f.z;
    cc.kmMat4Translation(translate, -pEye.x, -pEye.y, -pEye.z);
    cc.kmMat4Multiply(pOut, pOut, translate);
    return pOut;
};
cc.kmMat4RotationAxisAngle = function(pOut, axis, radians) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->431");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->432");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->433");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->441");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->442");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->445");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->446");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->447");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->448");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->449");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->450");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->451");
};
cc.kmMat4ExtractRotation = function(pOut, pIn) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->454");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->455");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->456");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->457");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->458");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->459");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->460");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->461");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->462");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->463");
};
cc.kmMat4ExtractPlane = function(pOut, pIn, plane) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->466");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->467");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->468");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->469");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->470");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->471");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->472");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->475");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->476");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->477");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->478");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->479");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->480");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->481");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->482");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->483");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->484");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->485");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->486");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->487");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->488");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->489");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->490");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->491");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->492");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->493");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->494");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->495");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->496");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->497");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->498");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->499");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->500");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->501");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->502");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->503");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->504");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->505");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->506");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->507");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->508");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->509");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->510");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->511");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->512");
};
cc.kmMat4RotationToAxisAngle = function(pAxis, radians, pIn) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->515");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->516");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->517");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->518");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->519");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/mat4.js->520");
};