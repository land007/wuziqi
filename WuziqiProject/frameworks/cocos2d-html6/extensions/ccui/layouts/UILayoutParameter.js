ccui.Margin = ccui.Class.extend({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    ctor: function(margin, top, right, bottom) {
        if (margin !== undefined && top === undefined) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->8");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->9");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->10");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->11");
        }
        if (bottom !== undefined) {
            this.left = margin;
            this.top = top;
            this.right = right;
            this.bottom = bottom;
        }
    },
    setMargin: function(l, t, r, b) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->21");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->22");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->23");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->24");
    },
    equals: function(target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->27");
    }
});
ccui.MarginZero = function() {
    return new ccui.Margin(0, 0, 0, 0);
};
ccui.LayoutParameter = ccui.Class.extend({
    _margin: null,
    _layoutParameterType: null,
    ctor: function() {
        this._margin = new ccui.Margin;
        this._layoutParameterType = ccui.LayoutParameter.NONE;
    },
    setMargin: function(margin) {
        if (cc.isObject(margin)) {
            this._margin.left = margin.left;
            this._margin.top = margin.top;
            this._margin.right = margin.right;
            this._margin.bottom = margin.bottom;
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->47");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->48");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->49");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->50");
        }
    },
    getMargin: function() {
        return this._margin;
    },
    getLayoutType: function() {
        return this._layoutParameterType;
    },
    clone: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->60");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->61");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->62");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->65");
    },
    _copyProperties: function(model) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->68");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->69");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->70");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->71");
    }
});
ccui.LayoutParameter.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->75");
};
ccui.LayoutParameter.NONE = 0;
ccui.LayoutParameter.LINEAR = 1;
ccui.LayoutParameter.RELATIVE = 2;
ccui.LinearLayoutParameter = ccui.LayoutParameter.extend({
    _linearGravity: null,
    ctor: function() {
        ccui.LayoutParameter.prototype.ctor.call(this);
        this._linearGravity = ccui.LinearLayoutParameter.NONE;
        this._layoutParameterType = ccui.LayoutParameter.LINEAR;
    },
    setGravity: function(gravity) {
        this._linearGravity = gravity;
    },
    getGravity: function() {
        return this._linearGravity;
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->94");
    },
    _copyProperties: function(model) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->97");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->98");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->99");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->100");
    }
});
ccui.LinearLayoutParameter.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->104");
};
ccui.LinearLayoutParameter.NONE = 0;
ccui.LinearLayoutParameter.LEFT = 1;
ccui.LinearLayoutParameter.TOP = 2;
ccui.LinearLayoutParameter.RIGHT = 3;
ccui.LinearLayoutParameter.BOTTOM = 4;
ccui.LinearLayoutParameter.CENTER_VERTICAL = 5;
ccui.LinearLayoutParameter.CENTER_HORIZONTAL = 6;
ccui.RelativeLayoutParameter = ccui.LayoutParameter.extend({
    _relativeAlign: null,
    _relativeWidgetName: "",
    _relativeLayoutName: "",
    _put: false,
    ctor: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->119");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->120");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->121");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->122");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->123");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->124");
    },
    setAlign: function(align) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->127");
    },
    getAlign: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->130");
    },
    setRelativeToWidgetName: function(name) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->133");
    },
    getRelativeToWidgetName: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->136");
    },
    setRelativeName: function(name) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->139");
    },
    getRelativeName: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->142");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->145");
    },
    _copyProperties: function(model) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->148");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->149");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->150");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->151");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->152");
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->153");
    }
});
ccui.RelativeLayoutParameter.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/layouts/UILayoutParameter.js->157");
};
ccui.RelativeLayoutParameter.NONE = 0;
ccui.RelativeLayoutParameter.PARENT_TOP_LEFT = 1;
ccui.RelativeLayoutParameter.PARENT_TOP_CENTER_HORIZONTAL = 2;
ccui.RelativeLayoutParameter.PARENT_TOP_RIGHT = 3;
ccui.RelativeLayoutParameter.PARENT_LEFT_CENTER_VERTICAL = 4;
ccui.RelativeLayoutParameter.CENTER_IN_PARENT = 5;
ccui.RelativeLayoutParameter.PARENT_RIGHT_CENTER_VERTICAL = 6;
ccui.RelativeLayoutParameter.PARENT_LEFT_BOTTOM = 7;
ccui.RelativeLayoutParameter.PARENT_BOTTOM_CENTER_HORIZONTAL = 8;
ccui.RelativeLayoutParameter.PARENT_RIGHT_BOTTOM = 9;
ccui.RelativeLayoutParameter.LOCATION_ABOVE_LEFTALIGN = 10;
ccui.RelativeLayoutParameter.LOCATION_ABOVE_CENTER = 11;
ccui.RelativeLayoutParameter.LOCATION_ABOVE_RIGHTALIGN = 12;
ccui.RelativeLayoutParameter.LOCATION_LEFT_OF_TOPALIGN = 13;
ccui.RelativeLayoutParameter.LOCATION_LEFT_OF_CENTER = 14;
ccui.RelativeLayoutParameter.LOCATION_LEFT_OF_BOTTOMALIGN = 15;
ccui.RelativeLayoutParameter.LOCATION_RIGHT_OF_TOPALIGN = 16;
ccui.RelativeLayoutParameter.LOCATION_RIGHT_OF_CENTER = 17;
ccui.RelativeLayoutParameter.LOCATION_RIGHT_OF_BOTTOMALIGN = 18;
ccui.RelativeLayoutParameter.LOCATION_BELOW_LEFTALIGN = 19;
ccui.RelativeLayoutParameter.LOCATION_BELOW_CENTER = 20;
ccui.RelativeLayoutParameter.LOCATION_BELOW_RIGHTALIGN = 21;
ccui.LINEAR_GRAVITY_NONE = 0;
ccui.LINEAR_GRAVITY_LEFT = 1;
ccui.LINEAR_GRAVITY_TOP = 2;
ccui.LINEAR_GRAVITY_RIGHT = 3;
ccui.LINEAR_GRAVITY_BOTTOM = 4;
ccui.LINEAR_GRAVITY_CENTER_VERTICAL = 5;
ccui.LINEAR_GRAVITY_CENTER_HORIZONTAL = 6;
ccui.RELATIVE_ALIGN_NONE = 0;
ccui.RELATIVE_ALIGN_PARENT_TOP_LEFT = 1;
ccui.RELATIVE_ALIGN_PARENT_TOP_CENTER_HORIZONTAL = 2;
ccui.RELATIVE_ALIGN_PARENT_TOP_RIGHT = 3;
ccui.RELATIVE_ALIGN_PARENT_LEFT_CENTER_VERTICAL = 4;
ccui.RELATIVE_ALIGN_PARENT_CENTER = 5;
ccui.RELATIVE_ALIGN_PARENT_RIGHT_CENTER_VERTICAL = 6;
ccui.RELATIVE_ALIGN_PARENT_LEFT_BOTTOM = 7;
ccui.RELATIVE_ALIGN_PARENT_BOTTOM_CENTER_HORIZONTAL = 8;
ccui.RELATIVE_ALIGN_PARENT_RIGHT_BOTTOM = 9;
ccui.RELATIVE_ALIGN_LOCATION_ABOVE_LEFT = 10;
ccui.RELATIVE_ALIGN_LOCATION_ABOVE_CENTER = 11;
ccui.RELATIVE_ALIGN_LOCATION_ABOVE_RIGHT = 12;
ccui.RELATIVE_ALIGN_LOCATION_LEFT_TOP = 13;
ccui.RELATIVE_ALIGN_LOCATION_LEFT_CENTER = 14;
ccui.RELATIVE_ALIGN_LOCATION_LEFT_BOTTOM = 15;
ccui.RELATIVE_ALIGN_LOCATION_RIGHT_TOP = 16;
ccui.RELATIVE_ALIGN_LOCATION_RIGHT_CENTER = 17;
ccui.RELATIVE_ALIGN_LOCATION_RIGHT_BOTTOM = 18;
ccui.RELATIVE_ALIGN_LOCATION_BELOW_TOP = 19;
ccui.RELATIVE_ALIGN_LOCATION_BELOW_CENTER = 20;
ccui.RELATIVE_ALIGN_LOCATION_BELOW_BOTTOM = 21;