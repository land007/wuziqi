ccui.getLayoutManager = function(type) {
    switch (type) {
      case ccui.Layout.LINEAR_VERTICAL:
        return ccui.linearVerticalLayoutManager;
      case ccui.Layout.LINEAR_HORIZONTAL:
        return ccui.linearHorizontalLayoutManager;
      case ccui.Layout.RELATIVE:
        return ccui.relativeLayoutManager;
    }
    return null;
};
ccui.linearVerticalLayoutManager = {
    _doLayout: function(layout) {
        var layoutSize = layout._getLayoutContentSize();
        var container = layout._getLayoutElements();
        var topBoundary = layoutSize.height;
        for (var i = 0, len = container.length; i < len; i++) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->18");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->19");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->20");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->21");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->22");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->23");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->24");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->25");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->26");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->27");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->28");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->29");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->30");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->31");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->32");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->33");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->34");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->35");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->36");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->37");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->38");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->39");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->40");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->41");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->42");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->43");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->44");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->45");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->46");
        }
    }
};
ccui.linearHorizontalLayoutManager = {
    _doLayout: function(layout) {
        var layoutSize = layout._getLayoutContentSize();
        var container = layout._getLayoutElements();
        var leftBoundary = 0;
        for (var i = 0, len = container.length; i < len; i++) {
            var child = container[i];
            if (child) {
                var layoutParameter = child.getLayoutParameter();
                if (layoutParameter) {
                    var childGravity = layoutParameter.getGravity();
                    var ap = child.getAnchorPoint();
                    var cs = child.getContentSize();
                    var finalPosX = leftBoundary + ap.x * cs.width;
                    var finalPosY = layoutSize.height - (1 - ap.y) * cs.height;
                    switch (childGravity) {
                      case ccui.LinearLayoutParameter.NONE:
                      case ccui.LinearLayoutParameter.TOP:
                        break;
                      case ccui.LinearLayoutParameter.BOTTOM:
                        finalPosY = ap.y * cs.height;
                        break;
                      case ccui.LinearLayoutParameter.CENTER_VERTICAL:
                        finalPosY = layoutSize.height / 2 - cs.height * (.5 - ap.y);
                        break;
                      default:
                        break;
                    }
                    var mg = layoutParameter.getMargin();
                    finalPosX += mg.left;
                    finalPosY -= mg.top;
                    child.setPosition(finalPosX, finalPosY);
                    leftBoundary = child.getRightBoundary() + mg.right;
                }
            }
        }
    }
};
ccui.relativeLayoutManager = {
    _unlayoutChildCount: 0,
    _widgetChildren: [],
    _widget: null,
    _finalPositionX: 0,
    _finalPositionY: 0,
    _relativeWidgetLP: null,
    _doLayout: function(layout) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->96");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->97");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->98");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->99");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->100");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->101");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->102");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->103");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->104");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->105");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->106");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->107");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->108");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->109");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->110");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->111");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->112");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->113");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->114");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->116");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->117");
    },
    _getAllWidgets: function(layout) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->120");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->121");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->124");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->125");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->126");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->127");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->128");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->129");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->130");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->131");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->132");
    },
    _getRelativeWidget: function(widget) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->135");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->136");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->137");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->138");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->139");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->140");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->141");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->142");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->143");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->144");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->145");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->146");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->147");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->148");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->149");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->150");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->151");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->152");
    },
    _calculateFinalPositionWithRelativeWidget: function(layout) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->155");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->156");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->157");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->158");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->159");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->160");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->161");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->162");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->163");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->164");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->165");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->166");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->167");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->168");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->169");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->170");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->171");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->172");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->173");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->174");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->175");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->176");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->177");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->178");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->179");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->180");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->181");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->182");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->183");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->184");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->185");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->186");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->187");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->188");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->189");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->190");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->191");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->192");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->193");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->194");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->195");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->196");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->197");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->198");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->199");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->200");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->201");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->202");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->203");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->204");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->205");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->206");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->207");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->208");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->209");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->210");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->211");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->212");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->213");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->214");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->215");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->216");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->217");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->218");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->219");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->220");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->221");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->222");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->223");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->224");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->225");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->226");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->227");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->228");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->229");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->230");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->231");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->232");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->233");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->234");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->235");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->236");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->237");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->238");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->239");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->240");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->241");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->242");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->243");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->244");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->245");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->246");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->247");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->248");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->249");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->250");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->251");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->252");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->253");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->254");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->255");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->256");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->257");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->258");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->259");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->260");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->261");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->262");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->263");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->264");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->265");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->266");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->267");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->268");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->269");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->270");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->271");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->272");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->273");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->274");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->275");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->276");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->277");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->278");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->279");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->280");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->281");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->282");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->283");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->284");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->285");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->286");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->287");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->288");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->289");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->290");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->291");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->292");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->293");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->294");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->295");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->296");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->297");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->298");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->299");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->300");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->301");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->302");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->303");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->304");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->305");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->306");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->307");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->308");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->309");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->310");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->311");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->312");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->313");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->314");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->315");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->316");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->317");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->318");
    },
    _calculateFinalPositionWithRelativeAlign: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->321");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->322");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->323");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->324");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->325");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->326");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->327");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->328");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->329");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->330");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->331");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->332");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->333");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->334");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->335");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->336");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->337");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->338");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->339");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->340");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->341");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->342");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->343");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->344");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->345");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->346");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->347");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->348");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->349");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->350");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->351");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->352");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->353");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->354");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->355");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->356");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->357");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->358");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->359");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->360");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->361");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->362");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->363");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->364");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->365");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->366");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->367");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->368");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->369");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->370");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->371");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->372");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->373");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->374");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->375");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->376");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->377");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->378");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->379");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->380");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->381");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->382");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->383");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->384");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->385");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->386");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->387");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->388");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->389");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->390");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->391");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->392");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->393");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->394");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->395");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->396");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->397");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->398");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->399");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->400");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->401");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutManager.js->402");
    }
};