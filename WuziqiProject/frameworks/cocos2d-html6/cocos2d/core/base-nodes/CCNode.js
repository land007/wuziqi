cc.NODE_TAG_INVALID = -1;
cc.s_globalOrderOfArrival = 1;
cc.Node = cc.Class.extend({
    _localZOrder: 0,
    _globalZOrder: 0,
    _vertexZ: 0,
    _rotationX: 0,
    _rotationY: 0,
    _scaleX: 1,
    _scaleY: 1,
    _position: null,
    _normalizedPosition: null,
    _usingNormalizedPosition: false,
    _normalizedPositionDirty: false,
    _skewX: 0,
    _skewY: 0,
    _children: null,
    _visible: true,
    _anchorPoint: null,
    _contentSize: null,
    _running: false,
    _parent: null,
    _ignoreAnchorPointForPosition: false,
    tag: cc.NODE_TAG_INVALID,
    userData: null,
    userObject: null,
    _reorderChildDirty: false,
    _shaderProgram: null,
    arrivalOrder: 0,
    _actionManager: null,
    _scheduler: null,
    _eventDispatcher: null,
    _additionalTransformDirty: false,
    _additionalTransform: null,
    _componentContainer: null,
    _isTransitionFinished: false,
    _className: "Node",
    _showNode: false,
    _name: "",
    _realOpacity: 255,
    _realColor: null,
    _cascadeColorEnabled: false,
    _cascadeOpacityEnabled: false,
    _renderCmd: null,
    ctor: function() {
        this._initNode();
        this._initRendererCmd();
    },
    _initNode: function() {
        var _t = this;
        _t._anchorPoint = cc.p(0, 0);
        _t._contentSize = cc.size(0, 0);
        _t._position = cc.p(0, 0);
        _t._normalizedPosition = cc.p(0, 0);
        _t._children = [];
        var director = cc.director;
        _t._actionManager = director.getActionManager();
        _t._scheduler = director.getScheduler();
        _t._additionalTransform = cc.affineTransformMakeIdentity();
        if (cc.ComponentContainer) {
            _t._componentContainer = new cc.ComponentContainer(_t);
        }
        this._realOpacity = 255;
        this._realColor = cc.color(255, 255, 255, 255);
        this._cascadeColorEnabled = false;
        this._cascadeOpacityEnabled = false;
    },
    init: function() {
        return true;
    },
    _arrayMakeObjectsPerformSelector: function(array, callbackType) {
        if (!array || array.length === 0) {
            return;
        }
        var i, len = array.length, node;
        var nodeCallbackType = cc.Node._stateCallbackType;
        switch (callbackType) {
          case nodeCallbackType.onEnter:
            for (i = 0; i < len; i++) {
                node = array[i];
                if (node) {
                    node.onEnter();
                }
            }
            break;
          case nodeCallbackType.onExit:
            for (i = 0; i < len; i++) {
                node = array[i];
                if (node) {
                    node.onExit();
                }
            }
            break;
          case nodeCallbackType.onEnterTransitionDidFinish:
            for (i = 0; i < len; i++) {
                node = array[i];
                if (node) {
                    node.onEnterTransitionDidFinish();
                }
            }
            break;
          case nodeCallbackType.cleanup:
            for (i = 0; i < len; i++) {
                node = array[i];
                if (node) {
                    node.cleanup();
                }
            }
            break;
          case nodeCallbackType.updateTransform:
            for (i = 0; i < len; i++) {
                node = array[i];
                if (node) {
                    node.updateTransform();
                }
            }
            break;
          case nodeCallbackType.onExitTransitionDidStart:
            for (i = 0; i < len; i++) {
                node = array[i];
                if (node) {
                    node.onExitTransitionDidStart();
                }
            }
            break;
          case nodeCallbackType.sortAllChildren:
            for (i = 0; i < len; i++) {
                node = array[i];
                if (node) {
                    node.sortAllChildren();
                }
            }
            break;
          default:
            cc.assert(0, cc._LogInfos.Node__arrayMakeObjectsPerformSelector);
            break;
        }
    },
    attr: function(attrs) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->142");
    },
    getSkewX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->145");
    },
    setSkewX: function(newSkewX) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->149");
    },
    getSkewY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->152");
    },
    setSkewY: function(newSkewY) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->156");
    },
    setLocalZOrder: function(localZOrder) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->163");
    },
    _setLocalZOrder: function(localZOrder) {
        this._localZOrder = localZOrder;
    },
    getLocalZOrder: function() {
        return this._localZOrder;
    },
    getZOrder: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->173");
    },
    setZOrder: function(z) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->177");
    },
    setGlobalZOrder: function(globalZOrder) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->183");
    },
    getGlobalZOrder: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->186");
    },
    getVertexZ: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->189");
    },
    setVertexZ: function(Var) {
        this._vertexZ = Var;
    },
    getRotation: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->198");
    },
    setRotation: function(newRotation) {
        this._rotationX = this._rotationY = newRotation;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getRotationX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->205");
    },
    setRotationX: function(rotationX) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->209");
    },
    getRotationY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->212");
    },
    setRotationY: function(rotationY) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->216");
    },
    getScale: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->222");
    },
    setScale: function(scale, scaleY) {
        this._scaleX = scale;
        this._scaleY = scaleY || scaleY === 0 ? scaleY : scale;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getScaleX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->230");
    },
    setScaleX: function(newScaleX) {
        this._scaleX = newScaleX;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getScaleY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->237");
    },
    setScaleY: function(newScaleY) {
        this._scaleY = newScaleY;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    setPosition: function(newPosOrxValue, yValue) {
        var locPosition = this._position;
        if (yValue === undefined) {
            if (locPosition.x === newPosOrxValue.x && locPosition.y === newPosOrxValue.y) {
                return;
            }
            locPosition.x = newPosOrxValue.x;
            locPosition.y = newPosOrxValue.y;
        } else {
            if (locPosition.x === newPosOrxValue.x && locPosition.y === yValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->253");
            }
            locPosition.x = newPosOrxValue;
            locPosition.y = yValue;
        }
        this._usingNormalizedPosition = false;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    setNormalizedPosition: function(posOrX, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->271");
    },
    getPosition: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->274");
    },
    getNormalizedPosition: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->277");
    },
    getPositionX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->280");
    },
    setPositionX: function(x) {
        this._position.x = x;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getPositionY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->287");
    },
    setPositionY: function(y) {
        this._position.y = y;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getChildrenCount: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->294");
    },
    getChildren: function() {
        return this._children;
    },
    isVisible: function() {
        return this._visible;
    },
    setVisible: function(visible) {
        if (this._visible !== visible) {
            this._visible = visible;
            this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
            cc.renderer.childrenOrderDirty = true;
        }
    },
    getAnchorPoint: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->310");
    },
    setAnchorPoint: function(point, y) {
        var locAnchorPoint = this._anchorPoint;
        if (y === undefined) {
            if (point.x === locAnchorPoint.x && point.y === locAnchorPoint.y) {
                return;
            }
            locAnchorPoint.x = point.x;
            locAnchorPoint.y = point.y;
        } else {
            if (point === locAnchorPoint.x && y === locAnchorPoint.y) {
                return;
            }
            locAnchorPoint.x = point;
            locAnchorPoint.y = y;
        }
        this._renderCmd._updateAnchorPointInPoint();
    },
    _getAnchorX: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->330");
    },
    _setAnchorX: function(x) {
        if (this._anchorPoint.x === x) {
            return;
        }
        this._anchorPoint.x = x;
        this._renderCmd._updateAnchorPointInPoint();
    },
    _getAnchorY: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->340");
    },
    _setAnchorY: function(y) {
        if (this._anchorPoint.y === y) {
            return;
        }
        this._anchorPoint.y = y;
        this._renderCmd._updateAnchorPointInPoint();
    },
    getAnchorPointInPoints: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->350");
    },
    _getWidth: function() {
        return this._contentSize.width;
    },
    _setWidth: function(width) {
        this._contentSize.width = width;
        this._renderCmd._updateAnchorPointInPoint();
    },
    _getHeight: function() {
        return this._contentSize.height;
    },
    _setHeight: function(height) {
        this._contentSize.height = height;
        this._renderCmd._updateAnchorPointInPoint();
    },
    getContentSize: function() {
        return cc.size(this._contentSize);
    },
    setContentSize: function(size, height) {
        var locContentSize = this._contentSize;
        if (height === undefined) {
            if (size.width === locContentSize.width && size.height === locContentSize.height) {
                return;
            }
            locContentSize.width = size.width;
            locContentSize.height = size.height;
        } else {
            if (size === locContentSize.width && height === locContentSize.height) {
                return;
            }
            locContentSize.width = size;
            locContentSize.height = height;
        }
        this._renderCmd._updateAnchorPointInPoint();
    },
    isRunning: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->387");
    },
    getParent: function() {
        return this._parent;
    },
    setParent: function(parent) {
        this._parent = parent;
    },
    isIgnoreAnchorPointForPosition: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->396");
    },
    ignoreAnchorPointForPosition: function(newValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->401");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->402");
    },
    getTag: function() {
        return this.tag;
    },
    setTag: function(tag) {
        this.tag = tag;
    },
    setName: function(name) {
        this._name = name;
    },
    getName: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->414");
    },
    getUserData: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->417");
    },
    setUserData: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->420");
    },
    getUserObject: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->423");
    },
    setUserObject: function(newValue) {
        if (this.userObject != newValue) {
            this.userObject = newValue;
        }
    },
    getOrderOfArrival: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->431");
    },
    setOrderOfArrival: function(Var) {
        this.arrivalOrder = Var;
    },
    getActionManager: function() {
        if (!this._actionManager) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->438");
        }
        return this._actionManager;
    },
    setActionManager: function(actionManager) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->445");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->446");
    },
    getScheduler: function() {
        if (!this._scheduler) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->450");
        }
        return this._scheduler;
    },
    setScheduler: function(scheduler) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->455");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->456");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->457");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->458");
    },
    boundingBox: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->461");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->462");
    },
    getBoundingBox: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->465");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->466");
    },
    cleanup: function() {
        this.stopAllActions();
        this.unscheduleAllCallbacks();
        cc.eventManager.removeListeners(this);
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node._stateCallbackType.cleanup);
    },
    getChildByTag: function(aTag) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->475");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->476");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->477");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->478");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->479");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->480");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->481");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->482");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->483");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->484");
    },
    getChildByName: function(name) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->487");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->488");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->489");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->490");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->491");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->492");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->493");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->494");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->495");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->496");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->497");
    },
    addChild: function(child, localZOrder, tag) {
        localZOrder = localZOrder === undefined ? child._localZOrder : localZOrder;
        var name, setTag = false;
        if (cc.isUndefined(tag)) {
            tag = undefined;
            name = child._name;
        } else {
            if (cc.isString(tag)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->507");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->508");
            } else {
                if (cc.isNumber(tag)) {
                    setTag = true;
                    name = "";
                }
            }
        }
        cc.assert(child, cc._LogInfos.Node_addChild_3);
        cc.assert(child._parent === null, "child already added. It can't be added again");
        this._addChildHelper(child, localZOrder, tag, name, setTag);
    },
    _addChildHelper: function(child, localZOrder, tag, name, setTag) {
        if (!this._children) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->522");
        }
        this._insertChild(child, localZOrder);
        if (setTag) {
            child.setTag(tag);
        } else {
            child.setName(name);
        }
        child.setParent(this);
        child.setOrderOfArrival(cc.s_globalOrderOfArrival++);
        if (this._running) {
            child.onEnter();
            if (this._isTransitionFinished) {
                child.onEnterTransitionDidFinish();
            }
        }
        if (this._cascadeColorEnabled) {
            child._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty);
        }
        if (this._cascadeOpacityEnabled) {
            child._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.opacityDirty);
        }
    },
    removeFromParent: function(cleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->546");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->547");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->548");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->549");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->550");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->551");
    },
    removeFromParentAndCleanup: function(cleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->554");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->555");
    },
    removeChild: function(child, cleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->558");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->559");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->560");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->561");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->562");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->563");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->564");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->565");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->566");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->567");
    },
    removeChildByTag: function(tag, cleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->570");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->571");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->572");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->573");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->574");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->575");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->576");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->577");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->578");
    },
    removeAllChildrenWithCleanup: function(cleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->581");
    },
    removeAllChildren: function(cleanup) {
        var __children = this._children;
        if (__children != null) {
            if (cleanup == null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->587");
            }
            for (var i = 0; i < __children.length; i++) {
                var node = __children[i];
                if (node) {
                    if (this._running) {
                        node.onExitTransitionDidStart();
                        node.onExit();
                    }
                    if (cleanup) {
                        node.cleanup();
                    }
                    node.parent = null;
                }
            }
            this._children.length = 0;
        }
    },
    _detachChild: function(child, doCleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->606");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->607");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->608");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->609");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->610");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->611");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->612");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->613");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->614");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->615");
    },
    _insertChild: function(child, z) {
        cc.renderer.childrenOrderDirty = this._reorderChildDirty = true;
        this._children.push(child);
        child._setLocalZOrder(z);
    },
    setNodeDirty: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->623");
    },
    reorderChild: function(child, zOrder) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->626");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->627");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->628");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->629");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->630");
    },
    sortAllChildren: function() {
        if (this._reorderChildDirty) {
            var _children = this._children;
            var len = _children.length, i, j, tmp;
            for (i = 1; i < len; i++) {
                tmp = _children[i];
                j = i - 1;
                while (j >= 0) {
                    if (tmp._localZOrder < _children[j]._localZOrder) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->641");
                    } else {
                        if (tmp._localZOrder === _children[j]._localZOrder && tmp.arrivalOrder < _children[j].arrivalOrder) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->644");
                        } else {
                            break;
                        }
                    }
                    j--;
                }
                _children[j + 1] = tmp;
            }
            this._reorderChildDirty = false;
        }
    },
    draw: function(ctx) {},
    transformAncestors: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->658");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->659");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->660");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->661");
    },
    onEnter: function() {
        this._isTransitionFinished = false;
        this._running = true;
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node._stateCallbackType.onEnter);
        this.resume();
    },
    onEnterTransitionDidFinish: function() {
        this._isTransitionFinished = true;
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node._stateCallbackType.onEnterTransitionDidFinish);
    },
    onExitTransitionDidStart: function() {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node._stateCallbackType.onExitTransitionDidStart);
    },
    onExit: function() {
        this._running = false;
        this.pause();
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node._stateCallbackType.onExit);
        this.removeAllComponents();
    },
    runAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->683");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->684");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->685");
    },
    stopAllActions: function() {
        this.actionManager && this.actionManager.removeAllActionsFromTarget(this);
    },
    stopAction: function(action) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->691");
    },
    stopActionByTag: function(tag) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->694");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->695");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->696");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->697");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->698");
    },
    getActionByTag: function(tag) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->701");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->702");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->703");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->704");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->705");
    },
    getNumberOfRunningActions: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->708");
    },
    scheduleUpdate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->711");
    },
    scheduleUpdateWithPriority: function(priority) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->714");
    },
    unscheduleUpdate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->717");
    },
    schedule: function(callback_fn, interval, repeat, delay) {
        interval = interval || 0;
        cc.assert(callback_fn, cc._LogInfos.Node_schedule);
        cc.assert(interval >= 0, cc._LogInfos.Node_schedule_2);
        repeat = repeat == null ? cc.REPEAT_FOREVER : repeat;
        delay = delay || 0;
        this.scheduler.scheduleCallbackForTarget(this, callback_fn, interval, repeat, delay, !this._running);
    },
    scheduleOnce: function(callback_fn, delay) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->728");
    },
    unschedule: function(callback_fn) {
        if (!callback_fn) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->732");
        }
        this.scheduler.unscheduleCallbackForTarget(this, callback_fn);
    },
    unscheduleAllCallbacks: function() {
        this.scheduler.unscheduleAllCallbacksForTarget(this);
    },
    resumeSchedulerAndActions: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->740");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->741");
    },
    resume: function() {
        this.scheduler.resumeTarget(this);
        this.actionManager && this.actionManager.resumeTarget(this);
        cc.eventManager.resumeTarget(this);
    },
    pauseSchedulerAndActions: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->749");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->750");
    },
    pause: function() {
        this.scheduler.pauseTarget(this);
        this.actionManager && this.actionManager.pauseTarget(this);
        cc.eventManager.pauseTarget(this);
    },
    setAdditionalTransform: function(additionalTransform) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->758");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->759");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->760");
    },
    getParentToNodeTransform: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->763");
    },
    parentToNodeTransform: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->766");
    },
    getNodeToWorldTransform: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->769");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->770");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->771");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->772");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->773");
    },
    nodeToWorldTransform: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->776");
    },
    getWorldToNodeTransform: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->779");
    },
    worldToNodeTransform: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->782");
    },
    convertToNodeSpace: function(worldPoint) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->785");
    },
    convertToWorldSpace: function(nodePoint) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->788");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->789");
    },
    convertToNodeSpaceAR: function(worldPoint) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->792");
    },
    convertToWorldSpaceAR: function(nodePoint) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->795");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->796");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->797");
    },
    _convertToWindowSpace: function(nodePoint) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->800");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->801");
    },
    convertTouchToNodeSpace: function(touch) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->804");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->805");
    },
    convertTouchToNodeSpaceAR: function(touch) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->808");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->809");
    },
    update: function(dt) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->812");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->813");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->814");
    },
    updateTransform: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->817");
    },
    retain: function() {},
    release: function() {},
    getComponent: function(name) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->822");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->823");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->824");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->825");
    },
    addComponent: function(component) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->828");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->829");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->830");
    },
    removeComponent: function(component) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->833");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->834");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->835");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->836");
    },
    removeAllComponents: function() {
        if (this._componentContainer) {
            this._componentContainer.removeAll();
        }
    },
    grid: null,
    visit: function(parentCmd) {
        this._renderCmd.visit(parentCmd);
    },
    transform: function(parentCmd, recursive) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->848");
    },
    nodeToParentTransform: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->851");
    },
    getNodeToParentTransform: function() {
        return this._renderCmd.getNodeToParentTransform();
    },
    getCamera: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->857");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->858");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->859");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->860");
    },
    getGrid: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->863");
    },
    setGrid: function(grid) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->866");
    },
    getShaderProgram: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->869");
    },
    setShaderProgram: function(newShaderProgram) {
        this._renderCmd.setShaderProgram(newShaderProgram);
    },
    getGLServerState: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->875");
    },
    setGLServerState: function(state) {},
    getBoundingBoxToWorld: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->879");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->880");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->881");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->882");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->883");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->884");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->885");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->886");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->887");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->888");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->889");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->890");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->891");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->892");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->893");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->894");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->895");
    },
    _getBoundingBoxToCurrentNode: function(parentTransform) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->898");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->899");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->900");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->901");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->902");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->903");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->904");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->905");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->906");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->907");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->908");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->909");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->910");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->911");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->912");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->913");
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->914");
    },
    getOpacity: function() {
        return this._realOpacity;
    },
    getDisplayedOpacity: function() {
        return this._renderCmd.getDisplayedOpacity();
    },
    setOpacity: function(opacity) {
        this._realOpacity = opacity;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.opacityDirty);
    },
    updateDisplayedOpacity: function(parentOpacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->927");
    },
    isCascadeOpacityEnabled: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->930");
    },
    setCascadeOpacityEnabled: function(cascadeOpacityEnabled) {
        if (this._cascadeOpacityEnabled === cascadeOpacityEnabled) {
            return;
        }
        this._cascadeOpacityEnabled = cascadeOpacityEnabled;
        this._renderCmd.setCascadeOpacityEnabledDirty();
    },
    getColor: function() {
        var locRealColor = this._realColor;
        return cc.color(locRealColor.r, locRealColor.g, locRealColor.b, locRealColor.a);
    },
    getDisplayedColor: function() {
        return this._renderCmd.getDisplayedColor();
    },
    setColor: function(color) {
        var locRealColor = this._realColor;
        locRealColor.r = color.r;
        locRealColor.g = color.g;
        locRealColor.b = color.b;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty);
    },
    updateDisplayedColor: function(parentColor) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->954");
    },
    isCascadeColorEnabled: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->957");
    },
    setCascadeColorEnabled: function(cascadeColorEnabled) {
        if (this._cascadeColorEnabled === cascadeColorEnabled) {
            return;
        }
        this._cascadeColorEnabled = cascadeColorEnabled;
        this._renderCmd.setCascadeColorEnabledDirty();
    },
    setOpacityModifyRGB: function(opacityValue) {},
    isOpacityModifyRGB: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->968");
    },
    _initRendererCmd: function() {
        this._renderCmd = cc.renderer.getRenderCmd(this);
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->975");
        } else {
            return new cc.Node.WebGLRenderCmd(this);
        }
    }
});
cc.Node.create = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/base-nodes/CCNode.js->982");
};
cc.Node._stateCallbackType = {
    onEnter: 1,
    onExit: 2,
    cleanup: 3,
    onEnterTransitionDidFinish: 4,
    updateTransform: 5,
    onExitTransitionDidStart: 6,
    sortAllChildren: 7
};
cc.assert(cc.isFunction(cc._tmp.PrototypeCCNode), cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js");
cc._tmp.PrototypeCCNode();
delete cc._tmp.PrototypeCCNode;