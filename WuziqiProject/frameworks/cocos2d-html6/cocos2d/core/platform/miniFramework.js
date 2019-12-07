cc.$ = function(x) {
    var parent = this == cc ? document : this;
    var el = x instanceof HTMLElement ? x : parent.querySelector(x);
    if (el) {
        el.find = el.find || cc.$;
        el.hasClass = el.hasClass || function(cls) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->7");
        };
        el.addClass = el.addClass || function(cls) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->16");
        };
        el.removeClass = el.removeClass || function(cls) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->22");
        };
        el.remove = el.remove || function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->28");
        };
        el.appendTo = el.appendTo || function(x) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->32");
        };
        el.prependTo = el.prependTo || function(x) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->36");
        };
        el.transforms = el.transforms || function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->40");
        };
        el.position = el.position || {
            x: 0,
            y: 0
        };
        el.rotation = el.rotation || 0;
        el.scale = el.scale || {
            x: 1,
            y: 1
        };
        el.skew = el.skew || {
            x: 0,
            y: 0
        };
        el.translates = function(x, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->59");
        };
        el.rotate = function(x) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->64");
        };
        el.resize = function(x, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->70");
        };
        el.setSkew = function(x, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->76");
        };
    }
    return el;
};
switch (cc.sys.browserType) {
  case cc.sys.BROWSER_TYPE_FIREFOX:
    cc.$.pfx = "Moz";
    cc.$.hd = true;
    break;
  case cc.sys.BROWSER_TYPE_CHROME:
  case cc.sys.BROWSER_TYPE_SAFARI:
    cc.$.pfx = "webkit";
    cc.$.hd = true;
    break;
  case cc.sys.BROWSER_TYPE_OPERA:
    cc.$.pfx = "O";
    cc.$.hd = false;
    break;
  case cc.sys.BROWSER_TYPE_IE:
    cc.$.pfx = "ms";
    cc.$.hd = false;
    break;
  default:
    cc.$.pfx = "webkit";
    cc.$.hd = true;
}
cc.$.trans = cc.$.pfx + "Transform";
cc.$.translate = cc.$.hd ? function(a) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->105");
} : function(a) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->107");
};
cc.$.rotate = cc.$.hd ? function(a) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->110");
} : function(a) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->112");
};
cc.$.scale = function(a) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->115");
};
cc.$.skew = function(a) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->118");
};
cc.$new = function(x) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->121");
};
cc.$.findpos = function(obj) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/miniFramework.js->133");
};