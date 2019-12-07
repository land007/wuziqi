cc.ActionCamera = cc.ActionInterval.extend({
    _centerXOrig: 0,
    _centerYOrig: 0,
    _centerZOrig: 0,
    _eyeXOrig: 0,
    _eyeYOrig: 0,
    _eyeZOrig: 0,
    _upXOrig: 0,
    _upYOrig: 0,
    _upZOrig: 0,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->22");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->39");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->42");
    },
    reverse: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->45");
    }
});
cc.OrbitCamera = cc.ActionCamera.extend({
    _radius: 0,
    _deltaRadius: 0,
    _angleZ: 0,
    _deltaAngleZ: 0,
    _angleX: 0,
    _deltaAngleX: 0,
    _radZ: 0,
    _radDeltaZ: 0,
    _radX: 0,
    _radDeltaX: 0,
    ctor: function(t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->60");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->61");
    },
    initWithDuration: function(t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->76");
    },
    sphericalRadius: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->103");
    },
    startWithTarget: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->119");
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->124");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->135");
    }
});
cc.orbitCamera = function(t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
console.log("/frameworks/cocos2d-html5/cocos2d/actions/CCActionCamera.js->139");
};
cc.OrbitCamera.create = cc.orbitCamera;