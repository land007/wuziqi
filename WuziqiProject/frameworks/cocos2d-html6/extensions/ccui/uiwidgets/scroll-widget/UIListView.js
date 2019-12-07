ccui.ListView = ccui.ScrollView.extend({
    _model: null,
    _items: null,
    _gravity: null,
    _itemsMargin: 0,
    _curSelectedIndex: 0,
    _refreshViewDirty: true,
    _listViewEventListener: null,
    _listViewEventSelector: null,
    ctor: function() {
        ccui.ScrollView.prototype.ctor.call(this);
        this._items = [];
        this._gravity = ccui.ListView.GRAVITY_CENTER_VERTICAL;
        this.setTouchEnabled(true);
        this.init();
    },
    init: function() {
        if (ccui.ScrollView.prototype.init.call(this)) {
            this.setLayoutType(ccui.Layout.LINEAR_VERTICAL);
            return true;
        }
        return false;
    },
    setItemModel: function(model) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->25");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->26");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->27");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->28");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->29");
    },
    _updateInnerContainerSize: function() {
        var locItems = this._items, length, i;
        switch (this.direction) {
          case ccui.ScrollView.DIR_VERTICAL:
            length = locItems.length;
            var totalHeight = (length - 1) * this._itemsMargin;
            for (i = 0; i < length; i++) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->38");
            }
            this.setInnerContainerSize(cc.size(this._contentSize.width, totalHeight));
            break;
          case ccui.ScrollView.DIR_HORIZONTAL:
            length = locItems.length;
            var totalWidth = (length - 1) * this._itemsMargin;
            for (i = 0; i < length; i++) {
                totalWidth += locItems[i].getContentSize().width;
            }
            this.setInnerContainerSize(cc.size(totalWidth, this._contentSize.height));
            break;
          default:
            break;
        }
    },
    _remedyLayoutParameter: function(item) {
        cc.assert(null != item, "ListView Item can't be nil!");
        var linearLayoutParameter = item.getLayoutParameter();
        var isLayoutParameterExists = true;
        if (!linearLayoutParameter) {
            linearLayoutParameter = new ccui.LinearLayoutParameter;
            isLayoutParameterExists = false;
        }
        var itemIndex = this.getIndex(item);
        switch (this.direction) {
          case ccui.ScrollView.DIR_VERTICAL:
            this._remedyVerticalLayoutParameter(linearLayoutParameter, itemIndex);
            break;
          case ccui.ScrollView.DIR_HORIZONTAL:
            this._remedyHorizontalLayoutParameter(linearLayoutParameter, itemIndex);
            break;
          default:
            break;
        }
        if (!isLayoutParameterExists) {
            item.setLayoutParameter(linearLayoutParameter);
        }
    },
    _remedyVerticalLayoutParameter: function(layoutParameter, itemIndex) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->78");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->79");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->80");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->81");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->82");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->83");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->84");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->85");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->86");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->87");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->88");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->89");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->90");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->91");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->92");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->93");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->94");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->95");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->96");
    },
    _remedyHorizontalLayoutParameter: function(layoutParameter, itemIndex) {
        cc.assert(null != layoutParameter, "Layout parameter can't be nil!");
        switch (this._gravity) {
          case ccui.ListView.GRAVITY_TOP:
            layoutParameter.setGravity(ccui.LinearLayoutParameter.TOP);
            break;
          case ccui.ListView.GRAVITY_BOTTOM:
            layoutParameter.setGravity(ccui.LinearLayoutParameter.BOTTOM);
            break;
          case ccui.ListView.GRAVITY_CENTER_VERTICAL:
            layoutParameter.setGravity(ccui.LinearLayoutParameter.CENTER_VERTICAL);
            break;
          default:
            break;
        }
        if (0 == itemIndex) {
            layoutParameter.setMargin(ccui.MarginZero());
        } else {
            layoutParameter.setMargin(new ccui.Margin(this._itemsMargin, 0, 0, 0));
        }
    },
    pushBackDefaultItem: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->120");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->121");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->124");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->125");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->126");
    },
    insertDefaultItem: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->129");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->130");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->131");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->132");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->133");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->134");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->135");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->136");
    },
    pushBackCustomItem: function(item) {
        this._remedyLayoutParameter(item);
        this.addChild(item);
        this._refreshViewDirty = true;
    },
    addChild: function(widget, zOrder, tag) {
        if (widget) {
            zOrder = zOrder || widget.getLocalZOrder();
            tag = tag || widget.getName();
            ccui.ScrollView.prototype.addChild.call(this, widget, zOrder, tag);
            if (widget instanceof ccui.Widget) {
                this._items.push(widget);
            }
        }
    },
    removeChild: function(widget, cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->154");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->155");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->156");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->157");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->158");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->159");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->160");
    },
    removeAllChildren: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->163");
    },
    removeAllChildrenWithCleanup: function(cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->166");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->167");
    },
    insertCustomItem: function(item, index) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->170");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->171");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->172");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->173");
    },
    removeItem: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->176");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->177");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->178");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->179");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->180");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->181");
    },
    removeLastItem: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->184");
    },
    removeAllItems: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->187");
    },
    getItem: function(index) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->190");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->191");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->192");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->193");
    },
    getItems: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->196");
    },
    getIndex: function(item) {
        if (item == null) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->200");
        }
        return this._items.indexOf(item);
    },
    setGravity: function(gravity) {
        if (this._gravity == gravity) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->206");
        }
        this._gravity = gravity;
        this._refreshViewDirty = true;
    },
    setItemsMargin: function(margin) {
        if (this._itemsMargin == margin) {
            return;
        }
        this._itemsMargin = margin;
        this._refreshViewDirty = true;
    },
    getItemsMargin: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->219");
    },
    setDirection: function(dir) {
        switch (dir) {
          case ccui.ScrollView.DIR_VERTICAL:
            this.setLayoutType(ccui.Layout.LINEAR_VERTICAL);
            break;
          case ccui.ScrollView.DIR_HORIZONTAL:
            this.setLayoutType(ccui.Layout.LINEAR_HORIZONTAL);
            break;
          case ccui.ScrollView.DIR_BOTH:
            return;
          default:
            return;
            break;
        }
        ccui.ScrollView.prototype.setDirection.call(this, dir);
    },
    requestRefreshView: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->238");
    },
    refreshView: function() {
        var locItems = this._items;
        for (var i = 0; i < locItems.length; i++) {
            var item = locItems[i];
            item.setLocalZOrder(i);
            this._remedyLayoutParameter(item);
        }
        this._updateInnerContainerSize();
    },
    doLayout: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->250");
    },
    _doLayout: function() {
        ccui.Layout.prototype._doLayout.call(this);
        if (this._refreshViewDirty) {
            this.refreshView();
            this._refreshViewDirty = false;
        }
    },
    addEventListenerListView: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->260");
    },
    addEventListener: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->263");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->264");
    },
    _selectedItemEvent: function(event) {
        var eventEnum = event == ccui.Widget.TOUCH_BEGAN ? ccui.ListView.ON_SELECTED_ITEM_START : ccui.ListView.ON_SELECTED_ITEM_END;
        if (this._listViewEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->269");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->270");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->271");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->272");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->273");
        }
        if (this._ccEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->276");
        }
    },
    interceptTouchEvent: function(eventType, sender, touch) {
        ccui.ScrollView.prototype.interceptTouchEvent.call(this, eventType, sender, touch);
        if (eventType != ccui.Widget.TOUCH_MOVED) {
            var parent = sender;
            while (parent) {
                if (parent && parent.getParent() == this._innerContainer) {
                    this._curSelectedIndex = this.getIndex(parent);
                    break;
                }
                parent = parent.getParent();
            }
            if (sender.isHighlighted()) {
                this._selectedItemEvent(eventType);
            }
        }
    },
    getCurSelectedIndex: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->296");
    },
    _onSizeChanged: function() {
        ccui.ScrollView.prototype._onSizeChanged.call(this);
        this._refreshViewDirty = true;
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->303");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->306");
    },
    _copyClonedWidgetChildren: function(model) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->309");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->310");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->311");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->312");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->313");
    },
    _copySpecialProperties: function(listView) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->316");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->317");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->318");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->319");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->320");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->321");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->322");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->323");
    },
    forceDoLayout: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->326");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->327");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->328");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->329");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->330");
    }
});
ccui.ListView.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIListView.js->334");
};
ccui.ListView.EVENT_SELECTED_ITEM = 0;
ccui.ListView.ON_SELECTED_ITEM_START = 0;
ccui.ListView.ON_SELECTED_ITEM_END = 1;
ccui.ListView.GRAVITY_LEFT = 0;
ccui.ListView.GRAVITY_RIGHT = 1;
ccui.ListView.GRAVITY_CENTER_HORIZONTAL = 2;
ccui.ListView.GRAVITY_TOP = 3;
ccui.ListView.GRAVITY_BOTTOM = 4;
ccui.ListView.GRAVITY_CENTER_VERTICAL = 5;