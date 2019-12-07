(function() {
    var DEBUG = false;
    var sys = cc.sys;
    var supportTable = {
        common: {
            multichannel: true,
            webAudio: cc.sys._supportWebAudio,
            auto: true
        }
    };
    supportTable[sys.BROWSER_TYPE_IE] = {
        multichannel: true,
        webAudio: cc.sys._supportWebAudio,
        auto: true,
        emptied: true
    };
    supportTable[sys.BROWSER_TYPE_ANDROID] = {
        multichannel: false,
        webAudio: false,
        auto: false
    };
    supportTable[sys.BROWSER_TYPE_CHROME] = {
        multichannel: true,
        webAudio: true,
        auto: false
    };
    supportTable[sys.BROWSER_TYPE_FIREFOX] = {
        multichannel: true,
        webAudio: true,
        auto: true
    };
    supportTable[sys.BROWSER_TYPE_UC] = {
        multichannel: true,
        webAudio: false,
        auto: false
    };
    supportTable[sys.BROWSER_TYPE_QQ] = {
        multichannel: false,
        webAudio: false,
        auto: true
    };
    supportTable[sys.BROWSER_TYPE_OUPENG] = {
        multichannel: false,
        webAudio: false,
        auto: false,
        replay: true,
        emptied: true
    };
    supportTable[sys.BROWSER_TYPE_WECHAT] = {
        multichannel: false,
        webAudio: false,
        auto: false,
        replay: true,
        emptied: true
    };
    supportTable[sys.BROWSER_TYPE_360] = {
        multichannel: false,
        webAudio: false,
        auto: true
    };
    supportTable[sys.BROWSER_TYPE_MIUI] = {
        multichannel: false,
        webAudio: false,
        auto: true
    };
    supportTable[sys.BROWSER_TYPE_LIEBAO] = {
        multichannel: false,
        webAudio: false,
        auto: false,
        replay: true,
        emptied: true
    };
    supportTable[sys.BROWSER_TYPE_SOUGOU] = {
        multichannel: false,
        webAudio: false,
        auto: false,
        replay: true,
        emptied: true
    };
    supportTable[sys.BROWSER_TYPE_BAIDU] = {
        multichannel: false,
        webAudio: false,
        auto: false,
        replay: true,
        emptied: true
    };
    supportTable[sys.BROWSER_TYPE_BAIDU_APP] = {
        multichannel: false,
        webAudio: false,
        auto: false,
        replay: true,
        emptied: true
    };
    supportTable[sys.BROWSER_TYPE_SAFARI] = {
        multichannel: true,
        webAudio: true,
        auto: false,
        webAudioCallback: function(realUrl) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->99");
        }
    };
    var version, tmp;
    try {
        var ua = navigator.userAgent.toLowerCase();
        switch (sys.browserType) {
          case sys.BROWSER_TYPE_IE:
            tmp = ua.match(/(msie |rv:)([\d.]+)/);
            break;
          case sys.BROWSER_TYPE_FIREFOX:
            tmp = ua.match(/(firefox\/|rv:)([\d.]+)/);
            break;
          case sys.BROWSER_TYPE_CHROME:
            tmp = ua.match(/chrome\/([\d.]+)/);
            break;
          case sys.BROWSER_TYPE_BAIDU:
            tmp = ua.match(/baidubrowser\/([\d.]+)/);
            break;
          case sys.BROWSER_TYPE_UC:
            tmp = ua.match(/ucbrowser\/([\d.]+)/);
            break;
          case sys.BROWSER_TYPE_QQ:
            tmp = ua.match(/qqbrowser\/([\d.]+)/);
            break;
          case sys.BROWSER_TYPE_OUPENG:
            tmp = ua.match(/oupeng\/([\d.]+)/);
            break;
          case sys.BROWSER_TYPE_WECHAT:
            tmp = ua.match(/micromessenger\/([\d.]+)/);
            break;
          case sys.BROWSER_TYPE_SAFARI:
            tmp = ua.match(/safari\/([\d.]+)/);
            break;
          case sys.BROWSER_TYPE_MIUI:
            tmp = ua.match(/miuibrowser\/([\d.]+)/);
            break;
        }
        version = tmp ? tmp[1] : "";
    } catch (e) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->139");
    }
    if (version) {
        switch (sys.browserType) {
          case sys.BROWSER_TYPE_CHROME:
            if (parseInt(version) < 30) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->149");
            }
            break;
          case sys.BROWSER_TYPE_MIUI:
            version = version.match(/\d+/g);
            if (version[0] < 2 || version[0] == 2 && version[1] == 0 && version[2] <= 1) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->155");
            }
            break;
        }
    }
    if (cc.sys.isMobile) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->165");
    } else {
        if (cc.sys.browserType != cc.sys.BROWSER_TYPE_IE) {
            cc.__audioSupport = supportTable["common"];
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->170");
        }
    }
    if (DEBUG) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->180");
    }
})();
cc.Audio = cc.Class.extend({
    volume: 1,
    loop: false,
    src: null,
    _touch: false,
    _playing: false,
    _AUDIO_TYPE: "AUDIO",
    _pause: false,
    _buffer: null,
    _currentSource: null,
    _startTime: null,
    _currentTime: null,
    _context: null,
    _volume: null,
    _ignoreEnded: false,
    _element: null,
    ctor: function(context, volume, url) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->205");
    },
    _setBufferCallback: null,
    setBuffer: function(buffer) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->222");
    },
    _setElementCallback: null,
    setElement: function(element) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->240");
    },
    play: function(offset, loop) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->249");
    },
    getPlaying: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->278");
    },
    _playOfWebAudio: function(offset) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->295");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->303");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->319");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->320");
    },
    _playOfAudio: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->324");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->325");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->327");
    },
    stop: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->335");
    },
    _stopOfWebAudio: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->343");
    },
    _stopOfAudio: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->352");
    },
    pause: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->355");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->356");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->357");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->358");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->361");
    },
    _pauseOfWebAudio: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->368");
    },
    _pauseOfAudio: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->374");
    },
    resume: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->385");
    },
    _resumeOfWebAudio: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->391");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->392");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->393");
    },
    _resumeOfAudio: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->396");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->397");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->398");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->399");
    },
    setVolume: function(volume) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->403");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->405");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->413");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->417");
    },
    getVolume: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->420");
    },
    cloneNode: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->428");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->430");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->431");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->432");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->433");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->441");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->442");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->445");
    }
});
(function(polyfill) {
    var SWA = polyfill.webAudio, SWB = polyfill.multichannel, SWC = polyfill.auto;
    var support = [];
    (function() {
        var audio = document.createElement("audio");
        if (audio.canPlayType) {
            var ogg = audio.canPlayType('audio/ogg; codecs="vorbis"');
            if (ogg && ogg !== "") {
                support.push(".ogg");
            }
            var mp3 = audio.canPlayType("audio/mpeg");
            if (mp3 && mp3 !== "") {
                support.push(".mp3");
            }
            var wav = audio.canPlayType('audio/wav; codecs="1"');
            if (wav && wav !== "") {
                support.push(".wav");
            }
            var mp4 = audio.canPlayType("audio/mp4");
            if (mp4 && mp4 !== "") {
                support.push(".mp4");
            }
            var m4a = audio.canPlayType("audio/x-m4a");
            if (m4a && m4a !== "") {
                support.push(".m4a");
            }
        }
    })();
    try {
        if (SWA) {
            var context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
        }
    } catch (error) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->481");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->482");
    }
    var loader = {
        cache: {},
        load: function(realUrl, url, res, cb) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->487");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->488");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->489");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->490");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->491");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->492");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->493");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->494");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->495");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->496");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->497");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->498");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->499");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->500");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->501");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->502");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->503");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->504");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->505");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->506");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->507");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->508");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->509");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->510");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->511");
        },
        loadAudioFromExtList: function(realUrl, typeList, audio, cb) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->514");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->515");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->516");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->517");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->518");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->519");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->520");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->521");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->522");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->523");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->524");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->525");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->526");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->527");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->528");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->529");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->530");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->531");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->532");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->533");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->534");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->535");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->536");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->537");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->538");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->539");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->540");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->541");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->542");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->543");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->544");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->545");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->546");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->547");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->548");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->549");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->550");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->551");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->552");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->553");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->554");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->555");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->556");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->557");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->558");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->559");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->560");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->561");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->562");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->563");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->564");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->565");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->566");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->567");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->568");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->569");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->570");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->571");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->572");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->573");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->574");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->575");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->576");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->577");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->578");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->579");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->580");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->581");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->582");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->583");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->584");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->585");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->586");
        }
    };
    cc.loader.register([ "mp3", "ogg", "wav", "mp4", "m4a" ], loader);
    cc.audioEngine = {
        _currMusic: null,
        _musicVolume: 1,
        willPlayMusic: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->594");
        },
        playMusic: function(url, loop) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->597");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->598");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->599");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->600");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->601");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->602");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->603");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->604");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->605");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->606");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->607");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->608");
        },
        stopMusic: function(releaseData) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->611");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->612");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->613");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->614");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->615");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->616");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->617");
        },
        pauseMusic: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->620");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->621");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->622");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->623");
        },
        resumeMusic: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->626");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->627");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->628");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->629");
        },
        rewindMusic: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->632");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->633");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->634");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->635");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->636");
        },
        getMusicVolume: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->639");
        },
        setMusicVolume: function(volume) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->642");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->643");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->644");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->645");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->646");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->647");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->648");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->649");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->650");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->651");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->652");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->653");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->654");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->655");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->656");
        },
        isMusicPlaying: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->659");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->660");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->661");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->662");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->663");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->664");
        },
        _audioPool: {},
        _maxAudioInstance: 5,
        _effectVolume: 1,
        playEffect: function(url, loop) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->670");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->671");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->672");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->673");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->674");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->675");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->676");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->677");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->678");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->679");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->680");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->681");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->682");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->683");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->684");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->685");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->686");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->687");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->688");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->689");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->690");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->691");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->692");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->693");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->694");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->695");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->696");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->697");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->698");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->699");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->700");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->701");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->702");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->703");
        },
        setEffectsVolume: function(volume) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->706");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->707");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->708");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->709");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->710");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->711");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->712");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->713");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->714");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->715");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->716");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->717");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->718");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->719");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->720");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->721");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->722");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->723");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->724");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->725");
        },
        getEffectsVolume: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->728");
        },
        pauseEffect: function(audio) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->731");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->732");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->733");
        },
        pauseAllEffects: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->736");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->737");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->738");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->739");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->740");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->741");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->742");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->743");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->744");
        },
        resumeEffect: function(audio) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->747");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->748");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->749");
        },
        resumeAllEffects: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->752");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->753");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->754");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->755");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->756");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->757");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->758");
        },
        stopEffect: function(audio) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->761");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->762");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->763");
        },
        stopAllEffects: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->766");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->767");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->768");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->769");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->770");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->771");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->772");
        },
        unloadEffect: function(url) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->775");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->776");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->777");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->778");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->779");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->780");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->781");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->782");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->783");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->784");
        },
        end: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->787");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->788");
        },
        _pauseCache: [],
        _pausePlaying: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->792");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->793");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->794");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->795");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->796");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->797");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->798");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->799");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->800");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->801");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->802");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->803");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->804");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->805");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->806");
        },
        _resumePlaying: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->809");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->810");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->811");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->812");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->813");
        }
    };
    if (!SWC) {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->817");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->818");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->819");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->820");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->821");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->822");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->823");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->824");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->825");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->826");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->827");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->828");
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->829");
    }
    cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->832");
    });
    cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function() {
console.log("/frameworks/cocos2d-html5/cocos2d/audio/CCAudio.js->835");
    });
})(cc.__audioSupport);