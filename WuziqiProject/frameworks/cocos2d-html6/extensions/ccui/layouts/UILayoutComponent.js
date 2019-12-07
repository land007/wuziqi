ccui.LayoutComponent_ReferencePoint = {
    BOTTOM_LEFT: 0,
    TOP_LEFT: 1,
    BOTTOM_RIGHT: 2,
    TOP_RIGHT: 3
};
ccui.LayoutComponent_PositionType = {
    Position: 0,
    RelativePosition: 1,
    PreRelativePosition: 2,
    PreRelativePositionEnable: 3
};
ccui.LayoutComponent_SizeType = {
    Size: 0,
    PreSize: 1,
    PreSizeEnable: 2
};
ccui.LayoutComponent = cc.Component.extend({
    _horizontalEdge: 0,
    _verticalEdge: 0,
    _leftMargin: 0,
    _rightMargin: 0,
    _bottomMargin: 0,
    _topMargin: 0,
    _usingPositionPercentX: false,
    _positionPercentX: 0,
    _usingPositionPercentY: false,
    _positionPercentY: 0,
    _usingStretchWidth: false,
    _usingStretchHeight: false,
    _percentWidth: 0,
    _usingPercentWidth: false,
    _percentHeight: 0,
    _usingPercentHeight: false,
    _actived: true,
    _isPercentOnly: false,
    ctor: function() {
        this._name = ccui.LayoutComponent.NAME;
    },
    init: function() {
        var ret = true;
        if (!cc.Component.prototype.init.call(this)) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->43");
        }
        return ret;
    },
    getPercentContentSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->48");
    },
    setPercentContentSize: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->51");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->52");
    },
    setUsingPercentContentSize: function(isUsed) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->55");
    },
    SetActiveEnable: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->58");
    },
    getUsingPercentContentSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->61");
    },
    getAnchorPosition: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->64");
    },
    setAnchorPosition: function(point, y) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->67");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->68");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->69");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->70");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->71");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->72");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->73");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->74");
    },
    getPosition: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->77");
    },
    setPosition: function(position, y) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->80");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->81");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->82");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->83");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->84");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->85");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->86");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->87");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->88");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->89");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->90");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->91");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->92");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->93");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->94");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->95");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->96");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->97");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->98");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->99");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->100");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->101");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->102");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->103");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->104");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->105");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->106");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->107");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->108");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->109");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->110");
    },
    isPositionPercentXEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->113");
    },
    setPositionPercentXEnabled: function(isUsed) {
        this._usingPositionPercentX = isUsed;
        if (this._usingPositionPercentX) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->118");
        }
    },
    getPositionPercentX: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->122");
    },
    setPositionPercentX: function(percentMargin) {
        this._positionPercentX = percentMargin;
        var parent = this._getOwnerParent();
        if (parent != null) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->128");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->129");
        }
    },
    isPositionPercentYEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->133");
    },
    setPositionPercentYEnabled: function(isUsed) {
        this._usingPositionPercentY = isUsed;
        if (this._usingPositionPercentY) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->138");
        }
    },
    getPositionPercentY: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->142");
    },
    setPositionPercentY: function(percentMargin) {
        this._positionPercentY = percentMargin;
        var parent = this._getOwnerParent();
        if (parent != null) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->148");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->149");
        }
    },
    getHorizontalEdge: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->153");
    },
    setHorizontalEdge: function(hEdge) {
        this._horizontalEdge = hEdge;
        if (this._horizontalEdge != ccui.LayoutComponent.horizontalEdge.NONE) {
            this._usingPositionPercentX = false;
        }
        var parent = this._getOwnerParent();
        if (parent != null) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->162");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->163");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->164");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->165");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->166");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->167");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->168");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->169");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->170");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->171");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->172");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->173");
        }
    },
    getVerticalEdge: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->177");
    },
    setVerticalEdge: function(vEdge) {
        this._verticalEdge = vEdge;
        if (this._verticalEdge != ccui.LayoutComponent.verticalEdge.NONE) {
            this._usingPositionPercentY = false;
        }
        var parent = this._getOwnerParent();
        if (parent != null) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->186");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->187");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->188");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->189");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->190");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->191");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->192");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->193");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->194");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->195");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->196");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->197");
        }
    },
    getLeftMargin: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->201");
    },
    setLeftMargin: function(margin) {
        this._leftMargin = margin;
    },
    getRightMargin: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->207");
    },
    setRightMargin: function(margin) {
        this._rightMargin = margin;
    },
    getTopMargin: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->213");
    },
    setTopMargin: function(margin) {
        this._topMargin = margin;
    },
    getBottomMargin: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->219");
    },
    setBottomMargin: function(margin) {
        this._bottomMargin = margin;
    },
    getSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->225");
    },
    setSize: function(size) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->228");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->229");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->230");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->231");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->232");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->233");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->234");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->235");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->236");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->237");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->238");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->239");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->240");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->241");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->242");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->243");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->244");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->245");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->246");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->247");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->248");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->249");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->250");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->251");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->252");
    },
    isPercentWidthEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->255");
    },
    setPercentWidthEnabled: function(isUsed) {
        this._usingPercentWidth = isUsed;
        if (this._usingPercentWidth) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->260");
        }
    },
    getSizeWidth: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->264");
    },
    setSizeWidth: function(width) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->267");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->268");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->269");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->270");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->271");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->272");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->273");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->274");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->275");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->276");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->277");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->278");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->279");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->280");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->281");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->282");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->283");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->284");
    },
    getPercentWidth: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->287");
    },
    setPercentWidth: function(percentWidth) {
        this._percentWidth = percentWidth;
        var parent = this._getOwnerParent();
        if (parent != null) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->293");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->294");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->295");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->296");
        }
    },
    isPercentHeightEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->300");
    },
    setPercentHeightEnabled: function(isUsed) {
        this._usingPercentHeight = isUsed;
        if (this._usingPercentHeight) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->305");
        }
    },
    getSizeHeight: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->309");
    },
    setSizeHeight: function(height) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->312");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->313");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->314");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->315");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->316");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->317");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->318");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->319");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->320");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->321");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->322");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->323");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->324");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->325");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->326");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->327");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->328");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->329");
    },
    getPercentHeight: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->332");
    },
    setPercentHeight: function(percentHeight) {
        this._percentHeight = percentHeight;
        var parent = this._getOwnerParent();
        if (parent != null) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->338");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->339");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->340");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->341");
        }
    },
    isStretchWidthEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->345");
    },
    setStretchWidthEnabled: function(isUsed) {
        this._usingStretchWidth = isUsed;
        if (this._usingStretchWidth) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->350");
        }
    },
    isStretchHeightEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->354");
    },
    setStretchHeightEnabled: function(isUsed) {
        this._usingStretchHeight = isUsed;
        if (this._usingStretchHeight) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->359");
        }
    },
    setPercentOnlyEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->363");
    },
    setActiveEnabled: function(enable) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->366");
    },
    refreshLayout: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->369");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->370");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->371");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->372");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->373");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->374");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->375");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->376");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->377");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->378");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->379");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->380");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->381");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->382");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->383");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->384");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->385");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->386");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->387");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->388");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->389");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->390");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->391");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->392");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->393");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->394");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->395");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->396");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->397");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->398");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->399");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->400");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->401");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->402");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->403");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->404");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->405");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->406");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->407");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->408");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->409");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->410");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->411");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->412");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->413");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->414");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->415");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->416");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->417");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->418");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->419");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->420");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->421");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->422");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->423");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->424");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->425");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->426");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->427");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->428");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->429");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->430");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->431");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->432");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->433");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->434");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->435");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->436");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->437");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->438");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->439");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->440");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->441");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->442");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->443");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->444");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->445");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->446");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->447");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->448");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->449");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->450");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->451");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->452");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->453");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->454");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->455");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->456");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->457");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->458");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->459");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->460");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->461");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->462");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->463");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->464");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->465");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->466");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->467");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->468");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->469");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->470");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->471");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->472");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->473");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->474");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->475");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->476");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->477");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->478");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->479");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->480");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->481");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->482");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->483");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->484");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->485");
    },
    _getOwnerParent: function() {
        return this._owner ? this._owner.getParent() : null;
    },
    _refreshHorizontalMargin: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->491");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->492");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->493");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->494");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->495");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->496");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->497");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->498");
    },
    _refreshVerticalMargin: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->501");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->502");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->503");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->504");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->505");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->506");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->507");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->508");
    }
});
ccui.LayoutComponent.horizontalEdge = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    CENTER: 3
};
ccui.LayoutComponent.verticalEdge = {
    NONE: 0,
    BOTTOM: 1,
    TOP: 2,
    CENTER: 3
};
ccui.LayoutComponent.NAME = "__ui_layout";
ccui.LayoutComponent.bindLayoutComponent = function(node) {
    var layout = node.getComponent(ccui.LayoutComponent.NAME);
    if (layout != null) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutComponent.js->527");
    }
    layout = new ccui.LayoutComponent;
    if (layout && layout.init()) {
        node.addComponent(layout);
        return layout;
    }
    return null;
};