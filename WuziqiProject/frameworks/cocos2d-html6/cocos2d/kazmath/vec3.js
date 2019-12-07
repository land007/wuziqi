cc.kmVec3 = function(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
};
cc.kmVec3Fill = function(pOut, x, y, z) {
    if (!pOut) {
        return new cc.kmVec3(x, y, z);
    }
    pOut.x = x;
    pOut.y = y;
    pOut.z = z;
    return pOut;
};
cc.kmVec3Length = function(pIn) {
    return Math.sqrt(cc.kmSQR(pIn.x) + cc.kmSQR(pIn.y) + cc.kmSQR(pIn.z));
};
cc.kmVec3LengthSq = function(pIn) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->19");
};
cc.kmVec3Normalize = function(pOut, pIn) {
    var l = 1 / cc.kmVec3Length(pIn);
    pOut.x = pIn.x * l;
    pOut.y = pIn.y * l;
    pOut.z = pIn.z * l;
    return pOut;
};
cc.kmVec3Cross = function(pOut, pV1, pV2) {
    pOut.x = pV1.y * pV2.z - pV1.z * pV2.y;
    pOut.y = pV1.z * pV2.x - pV1.x * pV2.z;
    pOut.z = pV1.x * pV2.y - pV1.y * pV2.x;
    return pOut;
};
cc.kmVec3Dot = function(pV1, pV2) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->35");
};
cc.kmVec3Add = function(pOut, pV1, pV2) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->41");
};
cc.kmVec3Subtract = function(pOut, pV1, pV2) {
    pOut.x = pV1.x - pV2.x;
    pOut.y = pV1.y - pV2.y;
    pOut.z = pV1.z - pV2.z;
    return pOut;
};
cc.kmVec3Transform = function(pOut, pV, pM) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->53");
};
cc.kmVec3TransformNormal = function(pOut, pV, pM) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->59");
};
cc.kmVec3TransformCoord = function(pOut, pV, pM) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->69");
};
cc.kmVec3Scale = function(pOut, pIn, s) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->75");
};
cc.kmVec3AreEqual = function(p1, p2) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->81");
};
cc.kmVec3InverseTransform = function(pOut, pVect, pM) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->88");
};
cc.kmVec3InverseTransformNormal = function(pOut, pVect, pM) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->94");
};
cc.kmVec3Assign = function(pOut, pIn) {
    if (pOut == pIn) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->98");
    }
    pOut.x = pIn.x;
    pOut.y = pIn.y;
    pOut.z = pIn.z;
    return pOut;
};
cc.kmVec3Zero = function(pOut) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->109");
};
cc.kmVec3ToTypeArray = function(vecValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/vec3.js->119");
};