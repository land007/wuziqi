cc.UIInterfaceOrientationLandscapeLeft = -90;
cc.UIInterfaceOrientationLandscapeRight = 90;
cc.UIInterfaceOrientationPortraitUpsideDown = 180;
cc.UIInterfaceOrientationPortrait = 0;
cc.inputManager = {
    _mousePressed: false,
    _isRegisterEvent: false,
    _preTouchPoint: cc.p(0, 0),
    _prevMousePoint: cc.p(0, 0),
    _preTouchPool: [],
    _preTouchPoolPointer: 0,
    _touches: [],
    _touchesIntegerDict: {},
    _indexBitsUsed: 0,
    _maxTouches: 5,
    _accelEnabled: false,
    _accelInterval: 1 / 30,
    _accelMinus: 1,
    _accelCurTime: 0,
    _acceleration: null,
    _accelDeviceEvent: null,
    _getUnUsedIndex: function() {
        var temp = this._indexBitsUsed;
        for (var i = 0; i < this._maxTouches; i++) {
            if (!(temp & 1)) {
                this._indexBitsUsed |= 1 << i;
                return i;
            }
            temp >>= 1;
        }
        return -1;
    },
    _removeUsedIndexBit: function(index) {
        if (index < 0 || index >= this._maxTouches) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->35");
        }
        var temp = 1 << index;
        temp = ~temp;
        this._indexBitsUsed &= temp;
    },
    _glView: null,
    handleTouchesBegin: function(touches) {
        var selTouch, index, curTouch, touchID, handleTouches = [], locTouchIntDict = this._touchesIntegerDict;
        for (var i = 0, len = touches.length; i < len; i++) {
            selTouch = touches[i];
            touchID = selTouch.getID();
            index = locTouchIntDict[touchID];
            if (index == null) {
                var unusedIndex = this._getUnUsedIndex();
                if (unusedIndex == -1) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->51");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->52");
                }
                curTouch = this._touches[unusedIndex] = new cc.Touch(selTouch._point.x, selTouch._point.y, selTouch.getID());
                curTouch._setPrevPoint(selTouch._prevPoint);
                locTouchIntDict[touchID] = unusedIndex;
                handleTouches.push(curTouch);
            }
        }
        if (handleTouches.length > 0) {
            this._glView._convertTouchesWithScale(handleTouches);
            var touchEvent = new cc.EventTouch(handleTouches);
            touchEvent._eventCode = cc.EventTouch.EventCode.BEGAN;
            cc.eventManager.dispatchEvent(touchEvent);
        }
    },
    handleTouchesMove: function(touches) {
        var selTouch, index, touchID, handleTouches = [], locTouches = this._touches;
        for (var i = 0, len = touches.length; i < len; i++) {
            selTouch = touches[i];
            touchID = selTouch.getID();
            index = this._touchesIntegerDict[touchID];
            if (index == null) {
                continue;
            }
            if (locTouches[index]) {
                locTouches[index]._setPoint(selTouch._point);
                locTouches[index]._setPrevPoint(selTouch._prevPoint);
                handleTouches.push(locTouches[index]);
            }
        }
        if (handleTouches.length > 0) {
            this._glView._convertTouchesWithScale(handleTouches);
            var touchEvent = new cc.EventTouch(handleTouches);
            touchEvent._eventCode = cc.EventTouch.EventCode.MOVED;
            cc.eventManager.dispatchEvent(touchEvent);
        }
    },
    handleTouchesEnd: function(touches) {
        var handleTouches = this.getSetOfTouchesEndOrCancel(touches);
        if (handleTouches.length > 0) {
            this._glView._convertTouchesWithScale(handleTouches);
            var touchEvent = new cc.EventTouch(handleTouches);
            touchEvent._eventCode = cc.EventTouch.EventCode.ENDED;
            cc.eventManager.dispatchEvent(touchEvent);
        }
    },
    handleTouchesCancel: function(touches) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->105");
    },
    getSetOfTouchesEndOrCancel: function(touches) {
        var selTouch, index, touchID, handleTouches = [], locTouches = this._touches, locTouchesIntDict = this._touchesIntegerDict;
        for (var i = 0, len = touches.length; i < len; i++) {
            selTouch = touches[i];
            touchID = selTouch.getID();
            index = locTouchesIntDict[touchID];
            if (index == null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->114");
            }
            if (locTouches[index]) {
                locTouches[index]._setPoint(selTouch._point);
                locTouches[index]._setPrevPoint(selTouch._prevPoint);
                handleTouches.push(locTouches[index]);
                this._removeUsedIndexBit(index);
                delete locTouchesIntDict[touchID];
            }
        }
        return handleTouches;
    },
    getHTMLElementPosition: function(element) {
        var docElem = document.documentElement;
        var win = window;
        var box = null;
        if (cc.isFunction(element.getBoundingClientRect)) {
            box = element.getBoundingClientRect();
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->147");
        }
        return {
            left: box.left + win.pageXOffset - docElem.clientLeft,
            top: box.top + win.pageYOffset - docElem.clientTop,
            width: box.width,
            height: box.height
        };
    },
    getPreTouch: function(touch) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->169");
    },
    setPreTouch: function(touch) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->189");
    },
    getTouchByXY: function(tx, ty, pos) {
        var locPreTouch = this._preTouchPoint;
        var location = this._glView.convertToLocationInView(tx, ty, pos);
        var touch = new cc.Touch(location.x, location.y);
        touch._setPrevPoint(locPreTouch.x, locPreTouch.y);
        locPreTouch.x = location.x;
        locPreTouch.y = location.y;
        return touch;
    },
    getMouseEvent: function(location, pos, eventType) {
        var locPreMouse = this._prevMousePoint;
        this._glView._convertMouseToLocationInView(location, pos);
        var mouseEvent = new cc.EventMouse(eventType);
        mouseEvent.setLocation(location.x, location.y);
        mouseEvent._setPrevCursor(locPreMouse.x, locPreMouse.y);
        locPreMouse.x = location.x;
        locPreMouse.y = location.y;
        return mouseEvent;
    },
    getPointByEvent: function(event, pos) {
        if (event.pageX != null) {
            return {
                x: event.pageX,
                y: event.pageY
            };
        }
        pos.left -= document.body.scrollLeft;
        pos.top -= document.body.scrollTop;
        return {
            x: event.clientX,
            y: event.clientY
        };
    },
    getTouchesByEvent: function(event, pos) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->252");
    },
    registerSystemEvent: function(element) {
        if (this._isRegisterEvent) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->256");
        }
        var locView = this._glView = cc.view;
        var selfPointer = this;
        var supportMouse = "mouse" in cc.sys.capabilities, supportTouches = "touches" in cc.sys.capabilities;
        var prohibition = false;
        if (cc.sys.isMobile) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->263");
        }
        if (supportMouse) {
            cc._addEventListener(window, "mousedown", function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->267");
            }, false);
            cc._addEventListener(window, "mouseup", function(event) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->285");
            }, false);
            cc._addEventListener(element, "mousedown", function(event) {
                if (prohibition) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->289");
                }
                selfPointer._mousePressed = true;
                var pos = selfPointer.getHTMLElementPosition(element);
                var location = selfPointer.getPointByEvent(event, pos);
                selfPointer.handleTouchesBegin([ selfPointer.getTouchByXY(location.x, location.y, pos) ]);
                var mouseEvent = selfPointer.getMouseEvent(location, pos, cc.EventMouse.DOWN);
                mouseEvent.setButton(event.button);
                cc.eventManager.dispatchEvent(mouseEvent);
                event.stopPropagation();
                event.preventDefault();
                element.focus();
            }, false);
            cc._addEventListener(element, "mouseup", function(event) {
                if (prohibition) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->304");
                }
                selfPointer._mousePressed = false;
                var pos = selfPointer.getHTMLElementPosition(element);
                var location = selfPointer.getPointByEvent(event, pos);
                selfPointer.handleTouchesEnd([ selfPointer.getTouchByXY(location.x, location.y, pos) ]);
                var mouseEvent = selfPointer.getMouseEvent(location, pos, cc.EventMouse.UP);
                mouseEvent.setButton(event.button);
                cc.eventManager.dispatchEvent(mouseEvent);
                event.stopPropagation();
                event.preventDefault();
            }, false);
            cc._addEventListener(element, "mousemove", function(event) {
                if (prohibition) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->318");
                }
                var pos = selfPointer.getHTMLElementPosition(element);
                var location = selfPointer.getPointByEvent(event, pos);
                selfPointer.handleTouchesMove([ selfPointer.getTouchByXY(location.x, location.y, pos) ]);
                var mouseEvent = selfPointer.getMouseEvent(location, pos, cc.EventMouse.MOVE);
                if (selfPointer._mousePressed) {
                    mouseEvent.setButton(event.button);
                } else {
                    mouseEvent.setButton(null);
                }
                cc.eventManager.dispatchEvent(mouseEvent);
                event.stopPropagation();
                event.preventDefault();
            }, false);
            cc._addEventListener(element, "mousewheel", function(event) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->337");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->341");
            }, false);
            cc._addEventListener(element, "DOMMouseScroll", function(event) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->351");
            }, false);
        }
        if (window.navigator.msPointerEnabled) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->355");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->356");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->357");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->358");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->363");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->369");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->371");
        }
        if (supportTouches) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->391");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->392");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->393");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->395");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->396");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->397");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->398");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->401");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->403");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->405");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->413");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->418");
        }
        this._registerKeyboardEvent();
        this._registerAccelerometerEvent();
        this._isRegisterEvent = true;
    },
    _registerKeyboardEvent: function() {},
    _registerAccelerometerEvent: function() {},
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->428");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->430");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCInputManager.js->431");
    }
};