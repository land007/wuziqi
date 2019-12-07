cc._EventListenerVector = cc.Class.extend({
    _fixedListeners: null,
    _sceneGraphListeners: null,
    gt0Index: 0,
    ctor: function() {
        this._fixedListeners = [];
        this._sceneGraphListeners = [];
    },
    size: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->10");
    },
    empty: function() {
        return this._fixedListeners.length === 0 && this._sceneGraphListeners.length === 0;
    },
    push: function(listener) {
        if (listener._getFixedPriority() == 0) {
            this._sceneGraphListeners.push(listener);
        } else {
            this._fixedListeners.push(listener);
        }
    },
    clearSceneGraphListeners: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->23");
    },
    clearFixedListeners: function() {
        this._fixedListeners.length = 0;
    },
    clear: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->30");
    },
    getFixedPriorityListeners: function() {
        return this._fixedListeners;
    },
    getSceneGraphPriorityListeners: function() {
        return this._sceneGraphListeners;
    }
});
cc.__getListenerID = function(event) {
    var eventType = cc.Event, getType = event.getType();
    if (getType === eventType.ACCELERATION) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->42");
    }
    if (getType === eventType.CUSTOM) {
        return event.getEventName();
    }
    if (getType === eventType.KEYBOARD) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->48");
    }
    if (getType === eventType.MOUSE) {
        return cc._EventListenerMouse.LISTENER_ID;
    }
    if (getType === eventType.FOCUS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->54");
    }
    if (getType === eventType.TOUCH) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->57");
    }
    return "";
};
cc.eventManager = {
    DIRTY_NONE: 0,
    DIRTY_FIXED_PRIORITY: 1 << 0,
    DIRTY_SCENE_GRAPH_PRIORITY: 1 << 1,
    DIRTY_ALL: 3,
    _listenersMap: {},
    _priorityDirtyFlagMap: {},
    _nodeListenersMap: {},
    _nodePriorityMap: {},
    _globalZOrderNodeMap: {},
    _toAddedListeners: [],
    _dirtyNodes: [],
    _inDispatch: 0,
    _isEnabled: false,
    _nodePriorityIndex: 0,
    _internalCustomListenerIDs: [ cc.game.EVENT_HIDE, cc.game.EVENT_SHOW ],
    _setDirtyForNode: function(node) {
        if (this._nodeListenersMap[node.__instanceId] != null) {
            this._dirtyNodes.push(node);
        }
        var _children = node.getChildren();
        for (var i = 0, len = _children.length; i < len; i++) {
            this._setDirtyForNode(_children[i]);
        }
    },
    pauseTarget: function(node, recursive) {
        var listeners = this._nodeListenersMap[node.__instanceId], i, len;
        if (listeners) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->91");
        }
        if (recursive === true) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->97");
        }
    },
    resumeTarget: function(node, recursive) {
        var listeners = this._nodeListenersMap[node.__instanceId], i, len;
        if (listeners) {
            for (i = 0, len = listeners.length; i < len; i++) {
                listeners[i]._setPaused(false);
            }
        }
        this._setDirtyForNode(node);
        if (recursive === true) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->112");
        }
    },
    _addListener: function(listener) {
        if (this._inDispatch === 0) {
            this._forceAddEventListener(listener);
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->119");
        }
    },
    _forceAddEventListener: function(listener) {
        var listenerID = listener._getListenerID();
        var listeners = this._listenersMap[listenerID];
        if (!listeners) {
            listeners = new cc._EventListenerVector;
            this._listenersMap[listenerID] = listeners;
        }
        listeners.push(listener);
        if (listener._getFixedPriority() == 0) {
            this._setDirty(listenerID, this.DIRTY_SCENE_GRAPH_PRIORITY);
            var node = listener._getSceneGraphPriority();
            if (node == null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->134");
            }
            this._associateNodeAndEventListener(node, listener);
            if (node.isRunning()) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->138");
            }
        } else {
            this._setDirty(listenerID, this.DIRTY_FIXED_PRIORITY);
        }
    },
    _getListeners: function(listenerID) {
        return this._listenersMap[listenerID];
    },
    _updateDirtyFlagForSceneGraph: function() {
        if (this._dirtyNodes.length == 0) {
            return;
        }
        var locDirtyNodes = this._dirtyNodes, selListeners, selListener, locNodeListenersMap = this._nodeListenersMap;
        for (var i = 0, len = locDirtyNodes.length; i < len; i++) {
            selListeners = locNodeListenersMap[locDirtyNodes[i].__instanceId];
            if (selListeners) {
                for (var j = 0, listenersLen = selListeners.length; j < listenersLen; j++) {
                    selListener = selListeners[j];
                    if (selListener) {
                        this._setDirty(selListener._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY);
                    }
                }
            }
        }
        this._dirtyNodes.length = 0;
    },
    _removeAllListenersInVector: function(listenerVector) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->182");
    },
    _removeListenersForListenerID: function(listenerID) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->205");
    },
    _sortEventListeners: function(listenerID) {
        var dirtyFlag = this.DIRTY_NONE, locFlagMap = this._priorityDirtyFlagMap;
        if (locFlagMap[listenerID]) {
            dirtyFlag = locFlagMap[listenerID];
        }
        if (dirtyFlag != this.DIRTY_NONE) {
            locFlagMap[listenerID] = this.DIRTY_NONE;
            if (dirtyFlag & this.DIRTY_FIXED_PRIORITY) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->215");
            }
            if (dirtyFlag & this.DIRTY_SCENE_GRAPH_PRIORITY) {
                var rootNode = cc.director.getRunningScene();
                if (rootNode) {
                    this._sortListenersOfSceneGraphPriority(listenerID, rootNode);
                } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->222");
                }
            }
        }
    },
    _sortListenersOfSceneGraphPriority: function(listenerID, rootNode) {
        var listeners = this._getListeners(listenerID);
        if (!listeners) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->230");
        }
        var sceneGraphListener = listeners.getSceneGraphPriorityListeners();
        if (!sceneGraphListener || sceneGraphListener.length === 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->234");
        }
        this._nodePriorityIndex = 0;
        this._nodePriorityMap = {};
        this._visitTarget(rootNode, true);
        listeners.getSceneGraphPriorityListeners().sort(this._sortEventListenersOfSceneGraphPriorityDes);
    },
    _sortEventListenersOfSceneGraphPriorityDes: function(l1, l2) {
        var locNodePriorityMap = cc.eventManager._nodePriorityMap;
        if (!l1 || !l2 || !l1._getSceneGraphPriority() || !l2._getSceneGraphPriority()) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->244");
        }
        return locNodePriorityMap[l2._getSceneGraphPriority().__instanceId] - locNodePriorityMap[l1._getSceneGraphPriority().__instanceId];
    },
    _sortListenersOfFixedPriority: function(listenerID) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->265");
    },
    _sortListenersOfFixedPriorityAsc: function(l1, l2) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->268");
    },
    _onUpdateListeners: function(listenerID) {
        var listeners = this._listenersMap[listenerID];
        if (!listeners) {
            return;
        }
        var fixedPriorityListeners = listeners.getFixedPriorityListeners();
        var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
        var i, selListener;
        if (sceneGraphPriorityListeners) {
            for (i = 0; i < sceneGraphPriorityListeners.length; ) {
                selListener = sceneGraphPriorityListeners[i];
                if (!selListener._isRegistered()) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->282");
                } else {
                    ++i;
                }
            }
        }
        if (fixedPriorityListeners) {
            for (i = 0; i < fixedPriorityListeners.length; ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->295");
            }
        }
        if (sceneGraphPriorityListeners && sceneGraphPriorityListeners.length === 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->299");
        }
        if (fixedPriorityListeners && fixedPriorityListeners.length === 0) {
            listeners.clearFixedListeners();
        }
    },
    _updateListeners: function(event) {
        var locInDispatch = this._inDispatch;
        cc.assert(locInDispatch > 0, cc._LogInfos.EventManager__updateListeners);
        if (event.getType() == cc.Event.TOUCH) {
            this._onUpdateListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
            this._onUpdateListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        } else {
            this._onUpdateListeners(cc.__getListenerID(event));
        }
        if (locInDispatch > 1) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->315");
        }
        cc.assert(locInDispatch == 1, cc._LogInfos.EventManager__updateListeners_2);
        var locListenersMap = this._listenersMap, locPriorityDirtyFlagMap = this._priorityDirtyFlagMap;
        for (var selKey in locListenersMap) {
            if (locListenersMap[selKey].empty()) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->321");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->322");
            }
        }
        var locToAddedListeners = this._toAddedListeners;
        if (locToAddedListeners.length !== 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->330");
        }
    },
    _onTouchEventCallback: function(listener, argsObj) {
        if (!listener._isRegistered) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->335");
        }
        var event = argsObj.event, selTouch = argsObj.selTouch;
        event._setCurrentTarget(listener._node);
        var isClaimed = false, removedIdx;
        var getCode = event.getEventCode(), eventCode = cc.EventTouch.EventCode;
        if (getCode == eventCode.BEGAN) {
            if (listener.onTouchBegan) {
                isClaimed = listener.onTouchBegan(selTouch, event);
                if (isClaimed && listener._registered) {
                    listener._claimedTouches.push(selTouch);
                }
            }
        } else {
            if (listener._claimedTouches.length > 0 && (removedIdx = listener._claimedTouches.indexOf(selTouch)) != -1) {
                isClaimed = true;
                if (getCode === eventCode.MOVED && listener.onTouchMoved) {
                    listener.onTouchMoved(selTouch, event);
                } else {
                    if (getCode === eventCode.ENDED) {
                        if (listener.onTouchEnded) {
                            listener.onTouchEnded(selTouch, event);
                        }
                        if (listener._registered) {
                            listener._claimedTouches.splice(removedIdx, 1);
                        }
                    } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->363");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->369");
                    }
                }
            }
        }
        if (event.isStopped()) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->376");
        }
        if (isClaimed && listener._registered && listener.swallowTouches) {
            if (argsObj.needsMutableSet) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->380");
            }
            return true;
        }
        return false;
    },
    _dispatchTouchEvent: function(event) {
        this._sortEventListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
        this._sortEventListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        var oneByOneListeners = this._getListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
        var allAtOnceListeners = this._getListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        if (null == oneByOneListeners && null == allAtOnceListeners) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->392");
        }
        var originalTouches = event.getTouches(), mutableTouches = cc.copyArray(originalTouches);
        var oneByOneArgsObj = {
            event: event,
            needsMutableSet: oneByOneListeners && allAtOnceListeners,
            touches: mutableTouches,
            selTouch: null
        };
        if (oneByOneListeners) {
            for (var i = 0; i < originalTouches.length; i++) {
                oneByOneArgsObj.selTouch = originalTouches[i];
                this._dispatchEventToListeners(oneByOneListeners, this._onTouchEventCallback, oneByOneArgsObj);
                if (event.isStopped()) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->406");
                }
            }
        }
        if (allAtOnceListeners && mutableTouches.length > 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->413");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->417");
        }
        this._updateListeners(event);
    },
    _onTouchesEventCallback: function(listener, callbackParams) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->428");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->430");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->431");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->432");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->433");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->441");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->442");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->445");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->446");
    },
    _associateNodeAndEventListener: function(node, listener) {
        var listeners = this._nodeListenersMap[node.__instanceId];
        if (!listeners) {
            listeners = [];
            this._nodeListenersMap[node.__instanceId] = listeners;
        }
        listeners.push(listener);
    },
    _dissociateNodeAndEventListener: function(node, listener) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->457");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->458");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->459");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->460");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->461");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->462");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->463");
    },
    _dispatchEventToListeners: function(listeners, onEvent, eventOrArgs) {
        var shouldStopPropagation = false;
        var fixedPriorityListeners = listeners.getFixedPriorityListeners();
        var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
        var i = 0, j, selListener;
        if (fixedPriorityListeners) {
            if (fixedPriorityListeners.length !== 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->472");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->475");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->476");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->477");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->478");
            }
        }
        if (sceneGraphPriorityListeners && !shouldStopPropagation) {
            for (j = 0; j < sceneGraphPriorityListeners.length; j++) {
                selListener = sceneGraphPriorityListeners[j];
                if (selListener.isEnabled() && !selListener._isPaused() && selListener._isRegistered() && onEvent(selListener, eventOrArgs)) {
                    shouldStopPropagation = true;
                    break;
                }
            }
        }
        if (fixedPriorityListeners && !shouldStopPropagation) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->491");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->492");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->493");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->494");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->495");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->496");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->497");
        }
    },
    _setDirty: function(listenerID, flag) {
        var locDirtyFlagMap = this._priorityDirtyFlagMap;
        if (locDirtyFlagMap[listenerID] == null) {
            locDirtyFlagMap[listenerID] = flag;
        } else {
            locDirtyFlagMap[listenerID] = flag | locDirtyFlagMap[listenerID];
        }
    },
    _visitTarget: function(node, isRootNode) {
        var children = node.getChildren(), i = 0;
        var childrenCount = children.length, locGlobalZOrderNodeMap = this._globalZOrderNodeMap, locNodeListenersMap = this._nodeListenersMap;
        if (childrenCount > 0) {
            var child;
            for (; i < childrenCount; i++) {
                child = children[i];
                if (child && child.getLocalZOrder() < 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->516");
                } else {
                    break;
                }
            }
            if (locNodeListenersMap[node.__instanceId] != null) {
                if (!locGlobalZOrderNodeMap[node.getGlobalZOrder()]) {
                    locGlobalZOrderNodeMap[node.getGlobalZOrder()] = [];
                }
                locGlobalZOrderNodeMap[node.getGlobalZOrder()].push(node.__instanceId);
            }
            for (; i < childrenCount; i++) {
                child = children[i];
                if (child) {
                    this._visitTarget(child, false);
                }
            }
        } else {
            if (locNodeListenersMap[node.__instanceId] != null) {
                if (!locGlobalZOrderNodeMap[node.getGlobalZOrder()]) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->536");
                }
                locGlobalZOrderNodeMap[node.getGlobalZOrder()].push(node.__instanceId);
            }
        }
        if (isRootNode) {
            var globalZOrders = [];
            for (var selKey in locGlobalZOrderNodeMap) {
                globalZOrders.push(selKey);
            }
            globalZOrders.sort(this._sortNumberAsc);
            var zOrdersLen = globalZOrders.length, selZOrders, j, locNodePriorityMap = this._nodePriorityMap;
            for (i = 0; i < zOrdersLen; i++) {
                selZOrders = locGlobalZOrderNodeMap[globalZOrders[i]];
                for (j = 0; j < selZOrders.length; j++) {
                    locNodePriorityMap[selZOrders[j]] = ++this._nodePriorityIndex;
                }
            }
            this._globalZOrderNodeMap = {};
        }
    },
    _sortNumberAsc: function(a, b) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->558");
    },
    addListener: function(listener, nodeOrPriority) {
        cc.assert(listener && nodeOrPriority, cc._LogInfos.eventManager_addListener_2);
        if (!(listener instanceof cc.EventListener)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->563");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->564");
        } else {
            if (listener._isRegistered()) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->567");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->568");
            }
        }
        if (!listener.checkAvailable()) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->572");
        }
        if (cc.isNumber(nodeOrPriority)) {
            if (nodeOrPriority == 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->576");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->577");
            }
            listener._setSceneGraphPriority(null);
            listener._setFixedPriority(nodeOrPriority);
            listener._setRegistered(true);
            listener._setPaused(false);
            this._addListener(listener);
        } else {
            listener._setSceneGraphPriority(nodeOrPriority);
            listener._setFixedPriority(0);
            listener._setRegistered(true);
            this._addListener(listener);
        }
        return listener;
    },
    addCustomListener: function(eventName, callback) {
        var listener = new cc._EventListenerCustom(eventName, callback);
        this.addListener(listener, 1);
        return listener;
    },
    removeListener: function(listener) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->598");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->599");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->600");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->601");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->602");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->603");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->604");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->605");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->606");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->607");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->608");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->609");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->610");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->611");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->612");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->613");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->614");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->615");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->616");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->617");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->618");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->619");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->620");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->621");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->622");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->623");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->624");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->625");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->626");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->627");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->628");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->629");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->630");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->631");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->632");
    },
    _removeListenerInVector: function(listeners, listener) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->635");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->636");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->637");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->638");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->639");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->640");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->641");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->642");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->643");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->644");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->645");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->646");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->647");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->648");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->649");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->650");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->651");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->652");
    },
    removeListeners: function(listenerType, recursive) {
        var _t = this;
        if (listenerType instanceof cc.Node) {
            delete _t._nodePriorityMap[listenerType.__instanceId];
            cc.arrayRemoveObject(_t._dirtyNodes, listenerType);
            var listeners = _t._nodeListenersMap[listenerType.__instanceId], i;
            if (listeners) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->661");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->662");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->663");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->664");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->665");
            }
            var locToAddedListeners = _t._toAddedListeners;
            for (i = 0; i < locToAddedListeners.length; ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->669");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->670");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->671");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->672");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->673");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->674");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->675");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->676");
            }
            if (recursive === true) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->679");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->680");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->681");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->682");
            }
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->685");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->686");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->687");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->688");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->689");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->690");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->691");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->692");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->693");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->694");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->695");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->696");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->697");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->698");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->699");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->700");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->701");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->702");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->703");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->704");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->705");
        }
    },
    removeCustomListeners: function(customEventName) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->709");
    },
    removeAllListeners: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->712");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->713");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->714");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->715");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->716");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->717");
    },
    setPriority: function(listener, fixedPriority) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->720");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->721");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->722");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->723");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->724");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->725");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->726");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->727");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->728");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->729");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->730");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->731");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->732");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->733");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->734");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->735");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->736");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->737");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->738");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->739");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->740");
    },
    setEnabled: function(enabled) {
        this._isEnabled = enabled;
    },
    isEnabled: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->746");
    },
    dispatchEvent: function(event) {
        if (!this._isEnabled) {
            return;
        }
        this._updateDirtyFlagForSceneGraph();
        this._inDispatch++;
        if (!event || !event.getType) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->755");
        }
        if (event.getType() == cc.Event.TOUCH) {
            this._dispatchTouchEvent(event);
            this._inDispatch--;
            return;
        }
        var listenerID = cc.__getListenerID(event);
        this._sortEventListeners(listenerID);
        var selListeners = this._listenersMap[listenerID];
        if (selListeners != null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->766");
        }
        this._updateListeners(event);
        this._inDispatch--;
    },
    _onListenerCallback: function(listener, event) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->772");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->773");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->774");
    },
    dispatchCustomEvent: function(eventName, optionalUserData) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->777");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->778");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->779");
    }
};
cc.EventHelper = function() {};
cc.EventHelper.prototype = {
    constructor: cc.EventHelper,
    apply: function(object) {
        object.addEventListener = cc.EventHelper.prototype.addEventListener;
        object.hasEventListener = cc.EventHelper.prototype.hasEventListener;
        object.removeEventListener = cc.EventHelper.prototype.removeEventListener;
        object.dispatchEvent = cc.EventHelper.prototype.dispatchEvent;
    },
    addEventListener: function(type, listener, target) {
        if (type === "load" && this._textureLoaded) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->793");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->794");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->795");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->796");
        }
        if (this._listeners === undefined) {
            this._listeners = {};
        }
        var listeners = this._listeners;
        if (listeners[type] === undefined) {
            listeners[type] = [];
        }
        if (!this.hasEventListener(type, listener, target)) {
            listeners[type].push({
                callback: listener,
                eventTarget: target
            });
        }
    },
    hasEventListener: function(type, listener, target) {
        if (this._listeners === undefined) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->814");
        }
        var listeners = this._listeners;
        if (listeners[type] !== undefined) {
            for (var i = 0, len = listeners.length; i < len; i++) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->819");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->820");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->821");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->822");
            }
        }
        return false;
    },
    removeEventListener: function(type, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->828");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->829");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->830");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->831");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->832");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->833");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->834");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->835");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->836");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->837");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->838");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->839");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->840");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->841");
console.log("/frameworks/cocos2d-html5/cocos2d/core/event-manager/CCEventManager.js->842");
    },
    dispatchEvent: function(event, clearAfterDispatch) {
        if (this._listeners === undefined) {
            return;
        }
        if (clearAfterDispatch == null) {
            clearAfterDispatch = true;
        }
        var listeners = this._listeners;
        var listenerArray = listeners[event];
        if (listenerArray !== undefined) {
            var array = [];
            var length = listenerArray.length;
            for (var i = 0; i < length; i++) {
                array[i] = listenerArray[i];
            }
            for (i = 0; i < length; i++) {
                array[i].callback.call(array[i].eventTarget, this);
            }
            if (clearAfterDispatch) {
                listenerArray.length = 0;
            }
        }
    }
};