cc._tmp.PrototypeColor = function() {
    var _p = cc.color;
    _p._getWhite = function() {
        return _p(255, 255, 255);
    };
    _p._getYellow = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesPropertyDefine.js->7");
    };
    _p._getBlue = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesPropertyDefine.js->10");
    };
    _p._getGreen = function() {
        return _p(0, 255, 0);
    };
    _p._getRed = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesPropertyDefine.js->16");
    };
    _p._getMagenta = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesPropertyDefine.js->19");
    };
    _p._getBlack = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesPropertyDefine.js->22");
    };
    _p._getOrange = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesPropertyDefine.js->25");
    };
    _p._getGray = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesPropertyDefine.js->28");
    };
    _p.WHITE;
    cc.defineGetterSetter(_p, "WHITE", _p._getWhite);
    _p.YELLOW;
    cc.defineGetterSetter(_p, "YELLOW", _p._getYellow);
    _p.BLUE;
    cc.defineGetterSetter(_p, "BLUE", _p._getBlue);
    _p.GREEN;
    cc.defineGetterSetter(_p, "GREEN", _p._getGreen);
    _p.RED;
    cc.defineGetterSetter(_p, "RED", _p._getRed);
    _p.MAGENTA;
    cc.defineGetterSetter(_p, "MAGENTA", _p._getMagenta);
    _p.BLACK;
    cc.defineGetterSetter(_p, "BLACK", _p._getBlack);
    _p.ORANGE;
    cc.defineGetterSetter(_p, "ORANGE", _p._getOrange);
    _p.GRAY;
    cc.defineGetterSetter(_p, "GRAY", _p._getGray);
    cc.BlendFunc._disable = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesPropertyDefine.js->49");
    };
    cc.BlendFunc._alphaPremultiplied = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesPropertyDefine.js->52");
    };
    cc.BlendFunc._alphaNonPremultiplied = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesPropertyDefine.js->55");
    };
    cc.BlendFunc._additive = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesPropertyDefine.js->58");
    };
    cc.BlendFunc.DISABLE;
    cc.defineGetterSetter(cc.BlendFunc, "DISABLE", cc.BlendFunc._disable);
    cc.BlendFunc.ALPHA_PREMULTIPLIED;
    cc.defineGetterSetter(cc.BlendFunc, "ALPHA_PREMULTIPLIED", cc.BlendFunc._alphaPremultiplied);
    cc.BlendFunc.ALPHA_NON_PREMULTIPLIED;
    cc.defineGetterSetter(cc.BlendFunc, "ALPHA_NON_PREMULTIPLIED", cc.BlendFunc._alphaNonPremultiplied);
    cc.BlendFunc.ADDITIVE;
    cc.defineGetterSetter(cc.BlendFunc, "ADDITIVE", cc.BlendFunc._additive);
};