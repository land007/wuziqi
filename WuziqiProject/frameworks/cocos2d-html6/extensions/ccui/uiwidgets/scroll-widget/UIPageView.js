ccui.PageView = ccui.Layout.extend({
    _curPageIdx: 0,
    _pages: null,
    _touchMoveDirection: null,
    _touchStartLocation: 0,
    _touchMoveStartLocation: 0,
    _movePagePoint: null,
    _leftBoundaryChild: null,
    _rightBoundaryChild: null,
    _leftBoundary: 0,
    _rightBoundary: 0,
    _isAutoScrolling: false,
    _autoScrollDistance: 0,
    _autoScrollSpeed: 0,
    _autoScrollDirection: 0,
    _childFocusCancelOffset: 0,
    _pageViewEventListener: null,
    _pageViewEventSelector: null,
    _className: "PageView",
    _customScrollThreshold: 0,
    _usingCustomScrollThreshold: false,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->23");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->24");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->25");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->26");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->27");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->28");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->29");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->30");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->31");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->32");
    },
    init: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->35");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->36");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->37");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->38");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->39");
    },
    onEnter: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->42");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->43");
    },
    addWidgetToPage: function(widget, pageIdx, forceCreate) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->46");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->47");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->48");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->49");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->50");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->51");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->52");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->53");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->54");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->55");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->56");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->57");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->58");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->59");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->60");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->61");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->62");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->63");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->64");
    },
    _createPage: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->67");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->68");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->69");
    },
    addPage: function(page) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->72");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->73");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->74");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->75");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->76");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->77");
    },
    insertPage: function(page, idx) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->80");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->81");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->82");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->83");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->84");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->85");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->86");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->87");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->88");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->89");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->90");
    },
    removePage: function(page) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->93");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->94");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->95");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->96");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->97");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->98");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->99");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->100");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->101");
    },
    removePageAtIndex: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->104");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->105");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->106");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->107");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->108");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->109");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->110");
    },
    removeAllPages: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->113");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->114");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->115");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->116");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->117");
    },
    _updateBoundaryPages: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->120");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->121");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->124");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->125");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->126");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->127");
    },
    _getPageCount: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->130");
    },
    _getPositionXByIndex: function(idx) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->133");
    },
    _onSizeChanged: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->136");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->137");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->138");
    },
    _updateAllPagesSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->141");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->142");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->143");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->144");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->145");
    },
    _updateAllPagesPosition: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->148");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->149");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->150");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->151");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->152");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->153");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->154");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->155");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->156");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->157");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->158");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->159");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->160");
    },
    scrollToPage: function(idx) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->163");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->164");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->165");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->166");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->167");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->168");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->169");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->170");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->171");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->174");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->175");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->176");
    },
    setLayoutType: function(type) {},
    getLayoutType: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->180");
    },
    _autoScroll: function(dt) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->183");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->184");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->185");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->186");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->187");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->188");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->189");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->190");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->191");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->192");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->193");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->194");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->195");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->196");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->197");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->198");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->199");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->200");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->201");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->202");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->203");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->204");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->205");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->206");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->207");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->208");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->209");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->210");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->211");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->212");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->213");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->214");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->215");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->216");
    },
    onTouchMoved: function(touch, event) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->219");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->220");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->221");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->222");
    },
    onTouchEnded: function(touch, event) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->225");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->226");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->227");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->228");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->229");
    },
    onTouchCancelled: function(touch, event) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->232");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->233");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->234");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->235");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->236");
    },
    _doLayout: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->239");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->240");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->241");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->242");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->243");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->244");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->245");
    },
    _movePages: function(offset) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->248");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->249");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->250");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->251");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->252");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->253");
    },
    _scrollPages: function(touchOffset) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->256");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->257");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->258");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->259");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->260");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->261");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->262");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->263");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->264");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->265");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->266");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->267");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->268");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->269");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->270");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->271");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->272");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->273");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->274");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->275");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->276");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->277");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->278");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->279");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->280");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->281");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->282");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->283");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->284");
    },
    _handleMoveLogic: function(touch) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->287");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->288");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->289");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->290");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->291");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->292");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->293");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->294");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->295");
    },
    setCustomScrollThreshold: function(threshold) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->298");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->299");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->300");
    },
    getCustomScrollThreshold: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->303");
    },
    setUsingCustomScrollThreshold: function(flag) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->306");
    },
    isUsingCustomScrollThreshold: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->309");
    },
    _handleReleaseLogic: function(touchPoint) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->312");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->313");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->314");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->315");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->316");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->317");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->318");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->319");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->320");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->321");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->322");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->323");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->324");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->325");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->326");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->327");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->328");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->329");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->330");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->331");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->332");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->333");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->334");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->335");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->336");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->337");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->338");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->339");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->340");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->341");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->342");
    },
    interceptTouchEvent: function(eventType, sender, touch) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->345");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->346");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->347");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->348");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->349");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->350");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->351");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->352");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->353");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->354");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->355");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->356");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->357");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->358");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->359");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->360");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->361");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->362");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->363");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->364");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->365");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->366");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->367");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->368");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->369");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->370");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->371");
    },
    _pageTurningEvent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->374");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->375");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->376");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->377");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->378");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->379");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->380");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->381");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->382");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->383");
    },
    addEventListenerPageView: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->386");
    },
    addEventListener: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->389");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->390");
    },
    getCurPageIndex: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->393");
    },
    getPages: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->396");
    },
    getPage: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->399");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->400");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->401");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->402");
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->405");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->408");
    },
    _copyClonedWidgetChildren: function(model) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->411");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->412");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->413");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->414");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->415");
    },
    _copySpecialProperties: function(pageView) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->418");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->419");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->420");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->421");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->422");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->423");
    }
});
ccui.PageView.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIPageView.js->427");
};
ccui.PageView.EVENT_TURNING = 0;
ccui.PageView.TOUCH_DIR_LEFT = 0;
ccui.PageView.TOUCH_DIR_RIGHT = 1;
ccui.PageView.DIRECTION_LEFT = 0;
ccui.PageView.DIRECTION_RIGHT = 1;