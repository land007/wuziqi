(function(load, baseParser) {
    var loadedPlist = {};
    var Parser = baseParser.extend({
        getNodeJson: function(json) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->5");
        },
        addSpriteFrame: function(plists, pngs, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->8");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->9");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->10");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->11");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->12");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->13");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->14");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->15");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->16");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->17");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->18");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->19");
        },
        pretreatment: function(json, resourcePath, file) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->22");
        }
    });
    var parser = new Parser;
    parser.generalAttributes = function(node, options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->27");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->28");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->29");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->30");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->31");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->32");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->33");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->34");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->35");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->36");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->37");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->38");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->39");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->40");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->41");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->42");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->43");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->44");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->45");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->46");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->47");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->48");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->49");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->50");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->51");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->52");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->53");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->54");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->55");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->56");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->57");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->58");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->59");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->60");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->61");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->62");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->63");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->64");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->65");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->66");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->67");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->68");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->69");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->70");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->71");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->72");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->73");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->74");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->75");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->76");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->77");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->78");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->79");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->80");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->81");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->82");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->83");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->84");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->85");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->86");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->87");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->88");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->89");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->90");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->91");
    };
    parser.parseComponent = function(node, options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->94");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->95");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->96");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->97");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->98");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->99");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->100");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->101");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->102");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->103");
    };
    parser.parseChild = function(parse, widget, options, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->106");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->107");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->108");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->109");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->110");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->111");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->112");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->113");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->114");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->115");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->116");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->117");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->118");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->119");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->120");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->121");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->122");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->123");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->124");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->125");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->126");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->127");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->128");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->129");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->130");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->131");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->132");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->133");
    };
    parser.initNode = function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->136");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->137");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->138");
    };
    parser.initSubGraph = function(options) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->141");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->142");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->143");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->144");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->145");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->146");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->147");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->148");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->149");
    };
    parser.initSprite = function(options, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->152");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->153");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->154");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->155");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->156");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->157");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->158");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->159");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->160");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->161");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->162");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->163");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->164");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->165");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->166");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->167");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->168");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->169");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->170");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->171");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->172");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->173");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->174");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->175");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->176");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->177");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->178");
    };
    parser.initParticle = function(options, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->181");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->182");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->183");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->184");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->185");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->186");
    };
    parser.initTMXTiledMap = function(options, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->189");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->190");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->191");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->192");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->193");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->194");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->195");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->196");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->197");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->198");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->199");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->200");
    };
    var uiParser = load.getParser("ccui")["*"];
    parser.initWidget = function(options, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->204");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->205");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->206");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->207");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->208");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->209");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->210");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->211");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->212");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->213");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->214");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->215");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->216");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->217");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->218");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->219");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->220");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->221");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->222");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->223");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->224");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->225");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->226");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->227");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->228");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->229");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->230");
    };
    var register = [ {
        name: "Node",
        handle: parser.initNode
    }, {
        name: "SubGraph",
        handle: parser.initSubGraph
    }, {
        name: "Sprite",
        handle: parser.initSprite
    }, {
        name: "Particle",
        handle: parser.initParticle
    }, {
        name: "TMXTiledMap",
        handle: parser.initTMXTiledMap
    }, {
        name: "Widget",
        handle: parser.initWidget
    }, {
        name: "Panel",
        handle: parser.initWidget
    }, {
        name: "Button",
        handle: parser.initWidget
    }, {
        name: "CheckBox",
        handle: parser.initWidget
    }, {
        name: "ImageView",
        handle: parser.initWidget
    }, {
        name: "LabelAtlas",
        handle: parser.initWidget
    }, {
        name: "LabelBMFont",
        handle: parser.initWidget
    }, {
        name: "Label",
        handle: parser.initWidget
    }, {
        name: "ListView",
        handle: parser.initWidget
    }, {
        name: "LoadingBar",
        handle: parser.initWidget
    }, {
        name: "PageView",
        handle: parser.initWidget
    }, {
        name: "ScrollView",
        handle: parser.initWidget
    }, {
        name: "Slider",
        handle: parser.initWidget
    }, {
        name: "TextField",
        handle: parser.initWidget
    } ];
    register.forEach(function(item) {
        parser.registerParser(item.name, function(options, parse, resourcePath) {
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->292");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->293");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->294");
console.log("/frameworks/cocos2d-html5/extensions/cocostudio/loader/parsers/timelineParser-1.x.js->295");
        });
    });
    load.registerParser("timeline", "*", parser);
})(ccs._load, ccs._parser);