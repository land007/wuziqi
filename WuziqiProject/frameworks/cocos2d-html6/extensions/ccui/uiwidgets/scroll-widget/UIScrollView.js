ccui.ScrollView = ccui.Layout.extend({
    _innerContainer: null,
    direction: null,
    _autoScrollDir: null,
    _topBoundary: 0,
    _bottomBoundary: 0,
    _leftBoundary: 0,
    _rightBoundary: 0,
    _bounceTopBoundary: 0,
    _bounceBottomBoundary: 0,
    _bounceLeftBoundary: 0,
    _bounceRightBoundary: 0,
    _autoScroll: false,
    _autoScrollAddUpTime: 0,
    _autoScrollOriginalSpeed: 0,
    _autoScrollAcceleration: 0,
    _isAutoScrollSpeedAttenuated: false,
    _needCheckAutoScrollDestination: false,
    _autoScrollDestination: null,
    _bePressed: false,
    _slidTime: 0,
    _moveChildPoint: null,
    _childFocusCancelOffset: 0,
    _leftBounceNeeded: false,
    _topBounceNeeded: false,
    _rightBounceNeeded: false,
    _bottomBounceNeeded: false,
    bounceEnabled: false,
    _bouncing: false,
    _bounceDir: null,
    _bounceOriginalSpeed: 0,
    inertiaScrollEnabled: false,
    _scrollViewEventListener: null,
    _scrollViewEventSelector: null,
    _className: "ScrollView",
    ctor: function() {
        ccui.Layout.prototype.ctor.call(this);
        this.direction = ccui.ScrollView.DIR_NONE;
        this._autoScrollDir = cc.p(0, 0);
        this._autoScrollAcceleration = -1e3;
        this._autoScrollDestination = cc.p(0, 0);
        this._slidTime = 0;
        this._moveChildPoint = cc.p(0, 0);
        this._childFocusCancelOffset = 5;
        this._bounceDir = cc.p(0, 0);
        this._bounceOriginalSpeed = 0;
        this.inertiaScrollEnabled = true;
        this.setTouchEnabled(true);
    },
    init: function() {
        if (ccui.Layout.prototype.init.call(this)) {
            this.setClippingEnabled(true);
            this._innerContainer.setTouchEnabled(false);
            return true;
        }
        return false;
    },
    onEnter: function() {
        ccui.Layout.prototype.onEnter.call(this);
        this.scheduleUpdate(true);
    },
    findNextFocusedWidget: function(direction, current) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->63");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->64");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->65");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->66");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->67");
    },
    _initRenderer: function() {
        ccui.Layout.prototype._initRenderer.call(this);
        this._innerContainer = new ccui.Layout;
        this._innerContainer.setColor(cc.color(255, 255, 255));
        this._innerContainer.setOpacity(255);
        this._innerContainer.setCascadeColorEnabled(true);
        this._innerContainer.setCascadeOpacityEnabled(true);
        this.addProtectedChild(this._innerContainer, 1, 1);
    },
    _onSizeChanged: function() {
        ccui.Layout.prototype._onSizeChanged.call(this);
        var locSize = this._contentSize;
        this._topBoundary = locSize.height;
        this._rightBoundary = locSize.width;
        var bounceBoundaryParameterX = locSize.width / 3;
        var bounceBoundaryParameterY = locSize.height / 3;
        this._bounceTopBoundary = locSize.height - bounceBoundaryParameterY;
        this._bounceBottomBoundary = bounceBoundaryParameterY;
        this._bounceLeftBoundary = bounceBoundaryParameterX;
        this._bounceRightBoundary = locSize.width - bounceBoundaryParameterX;
        var innerSize = this._innerContainer.getContentSize();
        this._innerContainer.setContentSize(cc.size(Math.max(innerSize.width, locSize.width), Math.max(innerSize.height, locSize.height)));
        this._innerContainer.setPosition(0, locSize.height - this._innerContainer.getContentSize().height);
    },
    setInnerContainerSize: function(size) {
        var innerContainer = this._innerContainer;
        var locSize = this._contentSize;
        var innerSizeWidth = locSize.width, innerSizeHeight = locSize.height;
        var originalInnerSize = innerContainer.getContentSize();
        if (size.width < locSize.width) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->99");
        } else {
            innerSizeWidth = size.width;
        }
        if (size.height < locSize.height) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->104");
        } else {
            innerSizeHeight = size.height;
        }
        innerContainer.setContentSize(cc.size(innerSizeWidth, innerSizeHeight));
        var newInnerSize, offset;
        switch (this.direction) {
          case ccui.ScrollView.DIR_VERTICAL:
            newInnerSize = innerContainer.getContentSize();
            offset = originalInnerSize.height - newInnerSize.height;
            this._scrollChildren(0, offset);
            break;
          case ccui.ScrollView.DIR_HORIZONTAL:
            if (innerContainer.getRightBoundary() <= locSize.width) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->118");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->119");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->120");
            }
            break;
          case ccui.ScrollView.DIR_BOTH:
            newInnerSize = innerContainer.getContentSize();
            var offsetY = originalInnerSize.height - newInnerSize.height;
            var offsetX = innerContainer.getRightBoundary() <= locSize.width ? originalInnerSize.width - newInnerSize.width : 0;
            this._scrollChildren(offsetX, offsetY);
            break;
          default:
            break;
        }
        var innerSize = innerContainer.getContentSize();
        var innerPos = innerContainer.getPosition();
        var innerAP = innerContainer.getAnchorPoint();
        if (innerContainer.getLeftBoundary() > 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->136");
        }
        if (innerContainer.getRightBoundary() < locSize.width) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->139");
        }
        if (innerPos.y > 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->142");
        }
        if (innerContainer.getTopBoundary() < locSize.height) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->145");
        }
    },
    _setInnerWidth: function(width) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->149");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->150");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->151");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->152");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->153");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->154");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->155");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->156");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->157");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->158");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->159");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->160");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->161");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->162");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->163");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->164");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->165");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->166");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->167");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->168");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->169");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->170");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->171");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->172");
    },
    _setInnerHeight: function(height) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->175");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->176");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->177");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->178");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->179");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->180");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->181");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->182");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->183");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->184");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->185");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->186");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->187");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->188");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->189");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->190");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->191");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->192");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->193");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->194");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->195");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->196");
    },
    getInnerContainerSize: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->199");
    },
    _getInnerWidth: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->202");
    },
    _getInnerHeight: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->205");
    },
    addChild: function(widget, zOrder, tag) {
        if (!widget) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->209");
        }
        zOrder = zOrder || widget.getLocalZOrder();
        tag = tag || widget.getTag();
        return this._innerContainer.addChild(widget, zOrder, tag);
    },
    removeAllChildren: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->216");
    },
    removeAllChildrenWithCleanup: function(cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->219");
    },
    removeChild: function(child, cleanup) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->222");
    },
    getChildren: function() {
        return this._innerContainer.getChildren();
    },
    getChildrenCount: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->228");
    },
    getChildByTag: function(tag) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->231");
    },
    getChildByName: function(name) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->234");
    },
    _moveChildren: function(offsetX, offsetY) {
        var locContainer = this._innerContainer;
        this._moveChildPoint.x = locContainer.x + offsetX;
        this._moveChildPoint.y = locContainer.y + offsetY;
        this._innerContainer.setPosition(this._moveChildPoint);
    },
    _autoScrollChildren: function(dt) {
        var lastTime = this._autoScrollAddUpTime;
        this._autoScrollAddUpTime += dt;
        if (this._isAutoScrollSpeedAttenuated) {
            var nowSpeed = this._autoScrollOriginalSpeed + this._autoScrollAcceleration * this._autoScrollAddUpTime;
            if (nowSpeed <= 0) {
                this._stopAutoScrollChildren();
                this._checkNeedBounce();
            } else {
                var timeParam = lastTime * 2 + dt;
                var offset = (this._autoScrollOriginalSpeed + this._autoScrollAcceleration * timeParam * .5) * dt;
                var offsetX = offset * this._autoScrollDir.x;
                var offsetY = offset * this._autoScrollDir.y;
                if (!this._scrollChildren(offsetX, offsetY)) {
                    this._stopAutoScrollChildren();
                    this._checkNeedBounce();
                }
            }
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->261");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->262");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->263");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->264");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->265");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->266");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->267");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->268");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->269");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->270");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->271");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->272");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->273");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->274");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->275");
        }
    },
    _bounceChildren: function(dt) {
        var locSpeed = this._bounceOriginalSpeed;
        var locBounceDir = this._bounceDir;
        if (locSpeed <= 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->282");
        }
        if (!this._bounceScrollChildren(locBounceDir.x * dt * locSpeed, locBounceDir.y * dt * locSpeed)) {
            this._stopBounceChildren();
        }
    },
    _checkNeedBounce: function() {
        if (!this.bounceEnabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->290");
        }
        this._checkBounceBoundary();
        var locTopBounceNeeded = this._topBounceNeeded, locBottomBounceNeeded = this._bottomBounceNeeded, locLeftBounceNeeded = this._leftBounceNeeded, locRightBounceNeeded = this._rightBounceNeeded;
        if (locTopBounceNeeded || locBottomBounceNeeded || locLeftBounceNeeded || locRightBounceNeeded) {
            var scrollVector, orSpeed;
            var locContentSize = this._contentSize, locInnerContainer = this._innerContainer;
            if (locTopBounceNeeded && locLeftBounceNeeded) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->298");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->299");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->300");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->301");
            } else {
                if (locTopBounceNeeded && locRightBounceNeeded) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->304");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->305");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->306");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->307");
                } else {
                    if (locBottomBounceNeeded && locLeftBounceNeeded) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->310");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->311");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->312");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->313");
                    } else {
                        if (locBottomBounceNeeded && locRightBounceNeeded) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->316");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->317");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->318");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->319");
                        } else {
                            if (locTopBounceNeeded) {
                                scrollVector = cc.pSub(cc.p(0, locContentSize.height), cc.p(0, locInnerContainer.getTopBoundary()));
                                orSpeed = cc.pLength(scrollVector) / .2;
                                this._bounceDir = cc.pNormalize(scrollVector);
                                this._startBounceChildren(orSpeed);
                            } else {
                                if (locBottomBounceNeeded) {
                                    scrollVector = cc.pSub(cc.p(0, 0), cc.p(0, locInnerContainer.getBottomBoundary()));
                                    orSpeed = cc.pLength(scrollVector) / .2;
                                    this._bounceDir = cc.pNormalize(scrollVector);
                                    this._startBounceChildren(orSpeed);
                                } else {
                                    if (locLeftBounceNeeded) {
                                        scrollVector = cc.pSub(cc.p(0, 0), cc.p(locInnerContainer.getLeftBoundary(), 0));
                                        orSpeed = cc.pLength(scrollVector) / .2;
                                        this._bounceDir = cc.pNormalize(scrollVector);
                                        this._startBounceChildren(orSpeed);
                                    } else {
                                        if (locRightBounceNeeded) {
                                            scrollVector = cc.pSub(cc.p(locContentSize.width, 0), cc.p(locInnerContainer.getRightBoundary(), 0));
                                            orSpeed = cc.pLength(scrollVector) / .2;
                                            this._bounceDir = cc.pNormalize(scrollVector);
                                            this._startBounceChildren(orSpeed);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return true;
        }
        return false;
    },
    _checkBounceBoundary: function() {
        var locContainer = this._innerContainer;
        var icBottomPos = locContainer.getBottomBoundary();
        if (icBottomPos > this._bottomBoundary) {
            this._scrollToBottomEvent();
            this._bottomBounceNeeded = true;
        } else {
            this._bottomBounceNeeded = false;
        }
        var icTopPos = locContainer.getTopBoundary();
        if (icTopPos < this._topBoundary) {
            this._scrollToTopEvent();
            this._topBounceNeeded = true;
        } else {
            this._topBounceNeeded = false;
        }
        var icRightPos = locContainer.getRightBoundary();
        if (icRightPos < this._rightBoundary) {
            this._scrollToRightEvent();
            this._rightBounceNeeded = true;
        } else {
            this._rightBounceNeeded = false;
        }
        var icLeftPos = locContainer.getLeftBoundary();
        if (icLeftPos > this._leftBoundary) {
            this._scrollToLeftEvent();
            this._leftBounceNeeded = true;
        } else {
            this._leftBounceNeeded = false;
        }
    },
    _startBounceChildren: function(v) {
        this._bounceOriginalSpeed = v;
        this._bouncing = true;
    },
    _stopBounceChildren: function() {
        this._bouncing = false;
        this._bounceOriginalSpeed = 0;
        this._leftBounceNeeded = false;
        this._rightBounceNeeded = false;
        this._topBounceNeeded = false;
        this._bottomBounceNeeded = false;
    },
    _startAutoScrollChildrenWithOriginalSpeed: function(dir, v, attenuated, acceleration) {
        this._stopAutoScrollChildren();
        this._autoScrollDir.x = dir.x;
        this._autoScrollDir.y = dir.y;
        this._isAutoScrollSpeedAttenuated = attenuated;
        this._autoScrollOriginalSpeed = v;
        this._autoScroll = true;
        this._autoScrollAcceleration = acceleration;
    },
    _startAutoScrollChildrenWithDestination: function(des, time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->409");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->410");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->411");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->412");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->413");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->414");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->415");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->416");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->417");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->418");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->419");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->420");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->421");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->422");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->423");
    },
    _jumpToDestination: function(dstX, dstY) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->426");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->427");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->428");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->429");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->430");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->431");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->432");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->433");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->434");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->435");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->436");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->437");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->438");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->439");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->440");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->441");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->442");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->443");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->444");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->445");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->446");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->447");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->448");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->449");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->450");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->451");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->452");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->453");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->454");
    },
    _stopAutoScrollChildren: function() {
        this._autoScroll = false;
        this._autoScrollOriginalSpeed = 0;
        this._autoScrollAddUpTime = 0;
    },
    _bounceScrollChildren: function(touchOffsetX, touchOffsetY) {
        var scrollEnabled = true;
        var realOffsetX, realOffsetY, icRightPos, icTopPos, icBottomPos;
        var locContainer = this._innerContainer;
        if (touchOffsetX > 0 && touchOffsetY > 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->466");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->467");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->468");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->469");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->470");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->471");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->472");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->473");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->474");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->475");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->476");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->477");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->478");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->479");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->480");
        } else {
            if (touchOffsetX < 0 && touchOffsetY > 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->483");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->484");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->485");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->486");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->487");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->488");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->489");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->490");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->491");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->492");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->493");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->494");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->495");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->496");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->497");
            } else {
                if (touchOffsetX < 0 && touchOffsetY < 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->500");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->501");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->502");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->503");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->504");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->505");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->506");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->507");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->508");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->509");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->510");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->511");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->512");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->513");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->514");
                } else {
                    if (touchOffsetX > 0 && touchOffsetY < 0) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->517");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->518");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->519");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->520");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->521");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->522");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->523");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->524");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->525");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->526");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->527");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->528");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->529");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->530");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->531");
                    } else {
                        if (touchOffsetX == 0 && touchOffsetY > 0) {
                            realOffsetY = touchOffsetY;
                            icTopPos = locContainer.getTopBoundary();
                            if (icTopPos + touchOffsetY >= this._topBoundary) {
                                realOffsetY = this._topBoundary - icTopPos;
                                this._bounceTopEvent();
                                scrollEnabled = false;
                            }
                            this._moveChildren(0, realOffsetY);
                        } else {
                            if (touchOffsetX == 0 && touchOffsetY < 0) {
                                realOffsetY = touchOffsetY;
                                icBottomPos = locContainer.getBottomBoundary();
                                if (icBottomPos + touchOffsetY <= this._bottomBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->547");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->548");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->549");
                                }
                                this._moveChildren(0, realOffsetY);
                            } else {
                                if (touchOffsetX > 0 && touchOffsetY == 0) {
                                    realOffsetX = touchOffsetX;
                                    icRightPos = locContainer.getRightBoundary();
                                    if (icRightPos + realOffsetX >= this._rightBoundary) {
                                        realOffsetX = this._rightBoundary - icRightPos;
                                        this._bounceRightEvent();
                                        scrollEnabled = false;
                                    }
                                    this._moveChildren(realOffsetX, 0);
                                } else {
                                    if (touchOffsetX < 0 && touchOffsetY == 0) {
                                        realOffsetX = touchOffsetX;
                                        var icLeftPos = locContainer.getLeftBoundary();
                                        if (icLeftPos + realOffsetX <= this._leftBoundary) {
                                            realOffsetX = this._leftBoundary - icLeftPos;
                                            this._bounceLeftEvent();
                                            scrollEnabled = false;
                                        }
                                        this._moveChildren(realOffsetX, 0);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return scrollEnabled;
    },
    _checkCustomScrollDestination: function(touchOffsetX, touchOffsetY) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->583");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->584");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->585");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->586");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->587");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->588");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->589");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->590");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->591");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->592");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->593");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->594");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->595");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->596");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->597");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->598");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->599");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->600");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->601");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->602");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->603");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->604");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->605");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->606");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->607");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->608");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->609");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->610");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->611");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->612");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->613");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->614");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->615");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->616");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->617");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->618");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->619");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->620");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->621");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->622");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->623");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->624");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->625");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->626");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->627");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->628");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->629");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->630");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->631");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->632");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->633");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->634");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->635");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->636");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->637");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->638");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->639");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->640");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->641");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->642");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->643");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->644");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->645");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->646");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->647");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->648");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->649");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->650");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->651");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->652");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->653");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->654");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->655");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->656");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->657");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->658");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->659");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->660");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->661");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->662");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->663");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->664");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->665");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->666");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->667");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->668");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->669");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->670");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->671");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->672");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->673");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->674");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->675");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->676");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->677");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->678");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->679");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->680");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->681");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->682");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->683");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->684");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->685");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->686");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->687");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->688");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->689");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->690");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->691");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->692");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->693");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->694");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->695");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->696");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->697");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->698");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->699");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->700");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->701");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->702");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->703");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->704");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->705");
    },
    _scrollChildren: function(touchOffsetX, touchOffsetY) {
        var scrollEnabled = true;
        this._scrollingEvent();
        switch (this.direction) {
          case ccui.ScrollView.DIR_VERTICAL:
            scrollEnabled = this._scrollChildrenVertical(touchOffsetX, touchOffsetY);
            break;
          case ccui.ScrollView.DIR_HORIZONTAL:
            scrollEnabled = this._scrollChildrenHorizontal(touchOffsetX, touchOffsetY);
            break;
          case ccui.ScrollView.DIR_BOTH:
            scrollEnabled = this._scrollChildrenBoth(touchOffsetX, touchOffsetY);
            break;
          default:
            break;
        }
        return scrollEnabled;
    },
    _scrollChildrenVertical: function(touchOffsetX, touchOffsetY) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->726");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->727");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->728");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->729");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->730");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->731");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->732");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->733");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->734");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->735");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->736");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->737");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->738");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->739");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->740");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->741");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->742");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->743");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->744");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->745");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->746");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->747");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->748");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->749");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->750");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->751");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->752");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->753");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->754");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->755");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->756");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->757");
    },
    _scrollChildrenHorizontal: function(touchOffsetX, touchOffestY) {
        var scrollEnabled = true;
        var realOffset = touchOffsetX;
        var icRightPos, icLeftPos, locContainer = this._innerContainer;
        if (this.bounceEnabled) {
            icRightPos = locContainer.getRightBoundary();
            if (icRightPos + touchOffsetX <= this._bounceRightBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->766");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->767");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->768");
            }
            icLeftPos = locContainer.getLeftBoundary();
            if (icLeftPos + touchOffsetX >= this._bounceLeftBoundary) {
                realOffset = this._bounceLeftBoundary - icLeftPos;
                this._scrollToLeftEvent();
                scrollEnabled = false;
            }
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->777");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->778");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->779");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->780");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->781");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->782");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->783");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->784");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->785");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->786");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->787");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->788");
        }
        this._moveChildren(realOffset, 0);
        return scrollEnabled;
    },
    _scrollChildrenBoth: function(touchOffsetX, touchOffsetY) {
        var scrollEnabled = true;
        var realOffsetX = touchOffsetX;
        var realOffsetY = touchOffsetY;
        var icLeftPos, icBottomPos, icRightPos, icTopPos;
        var locContainer = this._innerContainer;
        if (this.bounceEnabled) {
            if (touchOffsetX > 0 && touchOffsetY > 0) {
                icLeftPos = locContainer.getLeftBoundary();
                if (icLeftPos + touchOffsetX >= this._bounceLeftBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->803");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->804");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->805");
                }
                icBottomPos = locContainer.getBottomBoundary();
                if (icBottomPos + touchOffsetY >= this._bounceBottomBoundary) {
                    realOffsetY = this._bounceBottomBoundary - icBottomPos;
                    this._scrollToBottomEvent();
                    scrollEnabled = false;
                }
            } else {
                if (touchOffsetX < 0 && touchOffsetY > 0) {
                    icRightPos = locContainer.getRightBoundary();
                    if (icRightPos + touchOffsetX <= this._bounceRightBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->817");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->818");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->819");
                    }
                    icBottomPos = locContainer.getBottomBoundary();
                    if (icBottomPos + touchOffsetY >= this._bounceBottomBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->823");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->824");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->825");
                    }
                } else {
                    if (touchOffsetX < 0 && touchOffsetY < 0) {
                        icRightPos = locContainer.getRightBoundary();
                        if (icRightPos + touchOffsetX <= this._bounceRightBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->831");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->832");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->833");
                        }
                        icTopPos = locContainer.getTopBoundary();
                        if (icTopPos + touchOffsetY <= this._bounceTopBoundary) {
                            realOffsetY = this._bounceTopBoundary - icTopPos;
                            this._scrollToTopEvent();
                            scrollEnabled = false;
                        }
                    } else {
                        if (touchOffsetX > 0 && touchOffsetY < 0) {
                            icLeftPos = locContainer.getLeftBoundary();
                            if (icLeftPos + touchOffsetX >= this._bounceLeftBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->845");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->846");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->847");
                            }
                            icTopPos = locContainer.getTopBoundary();
                            if (icTopPos + touchOffsetY <= this._bounceTopBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->851");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->852");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->853");
                            }
                        } else {
                            if (touchOffsetX == 0 && touchOffsetY > 0) {
                                icBottomPos = locContainer.getBottomBoundary();
                                if (icBottomPos + touchOffsetY >= this._bounceBottomBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->859");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->860");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->861");
                                }
                            } else {
                                if (touchOffsetX < 0 && touchOffsetY == 0) {
                                    icRightPos = locContainer.getRightBoundary();
                                    if (icRightPos + touchOffsetX <= this._bounceRightBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->867");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->868");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->869");
                                    }
                                } else {
                                    if (touchOffsetX == 0 && touchOffsetY < 0) {
                                        icTopPos = locContainer.getTopBoundary();
                                        if (icTopPos + touchOffsetY <= this._bounceTopBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->875");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->876");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->877");
                                        }
                                    } else {
                                        if (touchOffsetX > 0 && touchOffsetY == 0) {
                                            icLeftPos = locContainer.getLeftBoundary();
                                            if (icLeftPos + touchOffsetX >= this._bounceLeftBoundary) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->883");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->884");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->885");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->896");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->897");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->898");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->899");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->900");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->901");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->902");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->903");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->904");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->905");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->906");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->907");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->908");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->909");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->910");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->911");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->912");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->913");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->914");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->915");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->916");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->917");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->918");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->919");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->920");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->921");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->922");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->923");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->924");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->925");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->926");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->927");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->928");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->929");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->930");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->931");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->932");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->933");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->934");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->935");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->936");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->937");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->938");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->939");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->940");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->941");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->942");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->943");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->944");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->945");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->946");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->947");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->948");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->949");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->950");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->951");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->952");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->953");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->954");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->955");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->956");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->957");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->958");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->959");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->960");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->961");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->962");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->963");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->964");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->965");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->966");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->967");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->968");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->969");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->970");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->971");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->972");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->973");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->974");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->975");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->976");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->977");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->978");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->979");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->980");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->981");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->982");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->983");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->984");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->985");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->986");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->987");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->988");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->989");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->990");
        }
        this._moveChildren(realOffsetX, realOffsetY);
        return scrollEnabled;
    },
    scrollToBottom: function(time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->996");
    },
    scrollToTop: function(time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->999");
    },
    scrollToLeft: function(time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1002");
    },
    scrollToRight: function(time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1005");
    },
    scrollToTopLeft: function(time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1008");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1009");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1010");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1011");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1012");
    },
    scrollToTopRight: function(time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1015");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1016");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1017");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1018");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1019");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1020");
    },
    scrollToBottomLeft: function(time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1023");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1024");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1025");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1026");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1027");
    },
    scrollToBottomRight: function(time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1030");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1031");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1032");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1033");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1034");
    },
    scrollToPercentVertical: function(percent, time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1037");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1038");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1039");
    },
    scrollToPercentHorizontal: function(percent, time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1042");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1043");
    },
    scrollToPercentBothDirection: function(percent, time, attenuated) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1046");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1047");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1048");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1049");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1050");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1051");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1052");
    },
    jumpToBottom: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1055");
    },
    jumpToTop: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1058");
    },
    jumpToLeft: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1061");
    },
    jumpToRight: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1064");
    },
    jumpToTopLeft: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1067");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1068");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1069");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1070");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1071");
    },
    jumpToTopRight: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1074");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1075");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1076");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1077");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1078");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1079");
    },
    jumpToBottomLeft: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1082");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1083");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1084");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1085");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1086");
    },
    jumpToBottomRight: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1089");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1090");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1091");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1092");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1093");
    },
    jumpToPercentVertical: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1096");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1097");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1098");
    },
    jumpToPercentHorizontal: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1101");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1102");
    },
    jumpToPercentBothDirection: function(percent) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1105");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1106");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1107");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1108");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1109");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1110");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1111");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1112");
    },
    _startRecordSlidAction: function() {
        if (this._autoScroll) {
            this._stopAutoScrollChildren();
        }
        if (this._bouncing) {
            this._stopBounceChildren();
        }
        this._slidTime = 0;
    },
    _endRecordSlidAction: function() {
        if (!this._checkNeedBounce() && this.inertiaScrollEnabled) {
            if (this._slidTime <= .016) {
                return;
            }
            var totalDis = 0, dir;
            var touchEndPositionInNodeSpace = this.convertToNodeSpace(this._touchEndPosition);
            var touchBeganPositionInNodeSpace = this.convertToNodeSpace(this._touchBeganPosition);
            switch (this.direction) {
              case ccui.ScrollView.DIR_VERTICAL:
                totalDis = touchEndPositionInNodeSpace.y - touchBeganPositionInNodeSpace.y;
                dir = totalDis < 0 ? ccui.ScrollView.SCROLLDIR_DOWN : ccui.ScrollView.SCROLLDIR_UP;
                break;
              case ccui.ScrollView.DIR_HORIZONTAL:
                totalDis = touchEndPositionInNodeSpace.x - touchBeganPositionInNodeSpace.x;
                dir = totalDis < 0 ? ccui.ScrollView.SCROLLDIR_LEFT : ccui.ScrollView.SCROLLDIR_RIGHT;
                break;
              case ccui.ScrollView.DIR_BOTH:
                var subVector = cc.pSub(touchEndPositionInNodeSpace, touchBeganPositionInNodeSpace);
                totalDis = cc.pLength(subVector);
                dir = cc.pNormalize(subVector);
                break;
              default:
                dir = cc.p(0, 0);
                break;
            }
            var orSpeed = Math.min(Math.abs(totalDis) / this._slidTime, ccui.ScrollView.AUTO_SCROLL_MAX_SPEED);
            this._startAutoScrollChildrenWithOriginalSpeed(dir, orSpeed, true, -1e3);
            this._slidTime = 0;
        }
    },
    _handlePressLogic: function(touch) {
        this._startRecordSlidAction();
        this._bePressed = true;
    },
    _handleMoveLogic: function(touch) {
        var touchPositionInNodeSpace = this.convertToNodeSpace(touch.getLocation()), previousTouchPositionInNodeSpace = this.convertToNodeSpace(touch.getPreviousLocation());
        var delta = cc.pSub(touchPositionInNodeSpace, previousTouchPositionInNodeSpace);
        switch (this.direction) {
          case ccui.ScrollView.DIR_VERTICAL:
            this._scrollChildren(0, delta.y);
            break;
          case ccui.ScrollView.DIR_HORIZONTAL:
            this._scrollChildren(delta.x, 0);
            break;
          case ccui.ScrollView.DIR_BOTH:
            this._scrollChildren(delta.x, delta.y);
            break;
          default:
            break;
        }
    },
    _handleReleaseLogic: function(touch) {
        this._endRecordSlidAction();
        this._bePressed = false;
    },
    onTouchBegan: function(touch, event) {
        var pass = ccui.Layout.prototype.onTouchBegan.call(this, touch, event);
        if (!this._isInterceptTouch) {
            if (this._hit) {
                this._handlePressLogic(touch);
            }
        }
        return pass;
    },
    onTouchMoved: function(touch, event) {
        ccui.Layout.prototype.onTouchMoved.call(this, touch, event);
        if (!this._isInterceptTouch) {
            this._handleMoveLogic(touch);
        }
    },
    onTouchEnded: function(touch, event) {
        ccui.Layout.prototype.onTouchEnded.call(this, touch, event);
        if (!this._isInterceptTouch) {
            this._handleReleaseLogic(touch);
        }
        this._isInterceptTouch = false;
    },
    onTouchCancelled: function(touch, event) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1202");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1203");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1204");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1205");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1206");
    },
    update: function(dt) {
        if (this._autoScroll) {
            this._autoScrollChildren(dt);
        }
        if (this._bouncing) {
            this._bounceChildren(dt);
        }
        this._recordSlidTime(dt);
    },
    _recordSlidTime: function(dt) {
        if (this._bePressed) {
            this._slidTime += dt;
        }
    },
    interceptTouchEvent: function(event, sender, touch) {
        var touchPoint = touch.getLocation();
        switch (event) {
          case ccui.Widget.TOUCH_BEGAN:
            this._isInterceptTouch = true;
            this._touchBeganPosition.x = touchPoint.x;
            this._touchBeganPosition.y = touchPoint.y;
            this._handlePressLogic(touch);
            break;
          case ccui.Widget.TOUCH_MOVED:
            var offset = cc.pLength(cc.pSub(sender.getTouchBeganPosition(), touchPoint));
            this._touchMovePosition.x = touchPoint.x;
            this._touchMovePosition.y = touchPoint.y;
            if (offset > this._childFocusCancelOffset) {
                sender.setHighlighted(false);
                this._handleMoveLogic(touch);
            }
            break;
          case ccui.Widget.TOUCH_CANCELED:
          case ccui.Widget.TOUCH_ENDED:
            this._touchEndPosition.x = touchPoint.x;
            this._touchEndPosition.y = touchPoint.y;
            this._handleReleaseLogic(touch);
            if (sender.isSwallowTouches()) {
                this._isInterceptTouch = false;
            }
            break;
        }
    },
    _scrollToTopEvent: function() {
        if (this._scrollViewEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1253");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1254");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1255");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1256");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1257");
        }
        if (this._ccEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1260");
        }
    },
    _scrollToBottomEvent: function() {
        if (this._scrollViewEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1265");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1266");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1267");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1268");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1269");
        }
        if (this._ccEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1272");
        }
    },
    _scrollToLeftEvent: function() {
        if (this._scrollViewEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1277");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1278");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1279");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1280");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1281");
        }
        if (this._ccEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1284");
        }
    },
    _scrollToRightEvent: function() {
        if (this._scrollViewEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1289");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1290");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1291");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1292");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1293");
        }
        if (this._ccEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1296");
        }
    },
    _scrollingEvent: function() {
        if (this._scrollViewEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1301");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1302");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1303");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1304");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1305");
        }
        if (this._ccEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1308");
        }
    },
    _bounceTopEvent: function() {
        if (this._scrollViewEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1313");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1314");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1315");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1316");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1317");
        }
        if (this._ccEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1320");
        }
    },
    _bounceBottomEvent: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1324");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1325");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1326");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1327");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1328");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1329");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1330");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1331");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1332");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1333");
    },
    _bounceLeftEvent: function() {
        if (this._scrollViewEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1337");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1338");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1339");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1340");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1341");
        }
        if (this._ccEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1344");
        }
    },
    _bounceRightEvent: function() {
        if (this._scrollViewEventSelector) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1349");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1350");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1351");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1352");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1353");
        }
        if (this._ccEventCallback) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1356");
        }
    },
    addEventListenerScrollView: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1360");
    },
    addEventListener: function(selector, target) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1363");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1364");
    },
    setDirection: function(dir) {
        this.direction = dir;
    },
    getDirection: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1370");
    },
    setBounceEnabled: function(enabled) {
        this.bounceEnabled = enabled;
    },
    isBounceEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1376");
    },
    setInertiaScrollEnabled: function(enabled) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1379");
    },
    isInertiaScrollEnabled: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1382");
    },
    getInnerContainer: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1385");
    },
    setLayoutType: function(type) {
        this._innerContainer.setLayoutType(type);
    },
    getLayoutType: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1391");
    },
    _doLayout: function() {
        if (!this._doLayoutDirty) {
            return;
        }
        this._doLayoutDirty = false;
    },
    getDescription: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1400");
    },
    _createCloneInstance: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1403");
    },
    _copyClonedWidgetChildren: function(model) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1406");
    },
    _copySpecialProperties: function(scrollView) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1409");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1410");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1411");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1412");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1413");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1414");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1415");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1416");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1417");
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1418");
    },
    getNodeByTag: function(tag) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1421");
    },
    getNodes: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1424");
    },
    removeNode: function(node) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1427");
    },
    removeNodeByTag: function(tag) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1430");
    },
    removeAllNodes: function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1433");
    },
    addNode: function(node, zOrder, tag) {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1436");
    }
});
var _p = ccui.ScrollView.prototype;
_p.innerWidth;
cc.defineGetterSetter(_p, "innerWidth", _p._getInnerWidth, _p._setInnerWidth);
_p.innerHeight;
cc.defineGetterSetter(_p, "innerHeight", _p._getInnerHeight, _p._setInnerHeight);
_p = null;
ccui.ScrollView.create = function() {
console.log("/frameworks/cocos2d-html5/extensions/ccui/uiwidgets/scroll-widget/UIScrollView.js->1446");
};
ccui.ScrollView.DIR_NONE = 0;
ccui.ScrollView.DIR_VERTICAL = 1;
ccui.ScrollView.DIR_HORIZONTAL = 2;
ccui.ScrollView.DIR_BOTH = 3;
ccui.ScrollView.EVENT_SCROLL_TO_TOP = 0;
ccui.ScrollView.EVENT_SCROLL_TO_BOTTOM = 1;
ccui.ScrollView.EVENT_SCROLL_TO_LEFT = 2;
ccui.ScrollView.EVENT_SCROLL_TO_RIGHT = 3;
ccui.ScrollView.EVENT_SCROLLING = 4;
ccui.ScrollView.EVENT_BOUNCE_TOP = 5;
ccui.ScrollView.EVENT_BOUNCE_BOTTOM = 6;
ccui.ScrollView.EVENT_BOUNCE_LEFT = 7;
ccui.ScrollView.EVENT_BOUNCE_RIGHT = 8;
ccui.ScrollView.AUTO_SCROLL_MAX_SPEED = 1e3;
ccui.ScrollView.SCROLLDIR_UP = cc.p(0, 1);
ccui.ScrollView.SCROLLDIR_DOWN = cc.p(0, -1);
ccui.ScrollView.SCROLLDIR_LEFT = cc.p(-1, 0);
ccui.ScrollView.SCROLLDIR_RIGHT = cc.p(1, 0);