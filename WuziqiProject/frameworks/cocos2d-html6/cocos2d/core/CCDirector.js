cc.g_NumberOfDraws = 0;
cc.GLToClipTransform = function(transformOut) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->3");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->4");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->5");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->7");
};
cc.Director = cc.Class.extend({
    _landscape: false,
    _nextDeltaTimeZero: false,
    _paused: false,
    _purgeDirectorInNextLoop: false,
    _sendCleanupToScene: false,
    _animationInterval: 0,
    _oldAnimationInterval: 0,
    _projection: 0,
    _accumDt: 0,
    _contentScaleFactor: 1,
    _displayStats: false,
    _deltaTime: 0,
    _frameRate: 0,
    _FPSLabel: null,
    _SPFLabel: null,
    _drawsLabel: null,
    _winSizeInPoints: null,
    _lastUpdate: null,
    _nextScene: null,
    _notificationNode: null,
    _openGLView: null,
    _scenesStack: null,
    _projectionDelegate: null,
    _runningScene: null,
    _frames: 0,
    _totalFrames: 0,
    _secondsPerFrame: 0,
    _dirtyRegion: null,
    _scheduler: null,
    _actionManager: null,
    _eventProjectionChanged: null,
    _eventAfterDraw: null,
    _eventAfterVisit: null,
    _eventAfterUpdate: null,
    ctor: function() {
        var self = this;
        self._lastUpdate = Date.now();
        cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->48");
        });
    },
    init: function() {
        this._oldAnimationInterval = this._animationInterval = 1 / cc.defaultFPS;
        this._scenesStack = [];
        this._projection = cc.Director.PROJECTION_DEFAULT;
        this._projectionDelegate = null;
        this._accumDt = 0;
        this._frameRate = 0;
        this._displayStats = false;
        this._totalFrames = this._frames = 0;
        this._lastUpdate = Date.now();
        this._paused = false;
        this._purgeDirectorInNextLoop = false;
        this._winSizeInPoints = cc.size(0, 0);
        this._openGLView = null;
        this._contentScaleFactor = 1;
        this._scheduler = new cc.Scheduler;
        this._actionManager = cc.ActionManager ? new cc.ActionManager : null;
        this._scheduler.scheduleUpdateForTarget(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
        this._eventAfterDraw = new cc.EventCustom(cc.Director.EVENT_AFTER_DRAW);
        this._eventAfterDraw.setUserData(this);
        this._eventAfterVisit = new cc.EventCustom(cc.Director.EVENT_AFTER_VISIT);
        this._eventAfterVisit.setUserData(this);
        this._eventAfterUpdate = new cc.EventCustom(cc.Director.EVENT_AFTER_UPDATE);
        this._eventAfterUpdate.setUserData(this);
        this._eventProjectionChanged = new cc.EventCustom(cc.Director.EVENT_PROJECTION_CHANGED);
        this._eventProjectionChanged.setUserData(this);
        return true;
    },
    calculateDeltaTime: function() {
        var now = Date.now();
        if (this._nextDeltaTimeZero) {
            this._deltaTime = 0;
            this._nextDeltaTimeZero = false;
        } else {
            this._deltaTime = (now - this._lastUpdate) / 1e3;
        }
        if (cc.game.config[cc.game.CONFIG_KEY.debugMode] > 0 && this._deltaTime > .2) {
            this._deltaTime = 1 / 60;
        }
        this._lastUpdate = now;
    },
    convertToGL: null,
    convertToUI: null,
    drawScene: function() {
        var renderer = cc.renderer;
        this.calculateDeltaTime();
        if (!this._paused) {
            this._scheduler.update(this._deltaTime);
            cc.eventManager.dispatchEvent(this._eventAfterUpdate);
        }
        this._clear();
        if (this._nextScene) {
            this.setNextScene();
        }
        if (this._beforeVisitScene) {
            this._beforeVisitScene();
        }
        if (this._runningScene) {
            if (renderer.childrenOrderDirty === true) {
                cc.renderer.clearRenderCommands();
                this._runningScene._renderCmd._curLevel = 0;
                this._runningScene.visit();
                renderer.resetFlag();
            } else {
                if (renderer.transformDirty() === true) {
                    renderer.transform();
                }
            }
            cc.eventManager.dispatchEvent(this._eventAfterVisit);
        }
        if (this._notificationNode) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->122");
        }
        if (this._displayStats) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->125");
        }
        if (this._afterVisitScene) {
            this._afterVisitScene();
        }
        renderer.rendering(cc._renderContext);
        cc.eventManager.dispatchEvent(this._eventAfterDraw);
        this._totalFrames++;
        if (this._displayStats) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->134");
        }
    },
    _beforeVisitScene: null,
    _afterVisitScene: null,
    end: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->140");
    },
    getContentScaleFactor: function() {
        return this._contentScaleFactor;
    },
    getNotificationNode: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->146");
    },
    getWinSize: function() {
        return cc.size(this._winSizeInPoints);
    },
    getWinSizeInPixels: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->152");
    },
    getVisibleSize: null,
    getVisibleOrigin: null,
    getZEye: null,
    pause: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->163");
    },
    popScene: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->174");
    },
    purgeCachedData: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->179");
    },
    purgeDirector: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->196");
    },
    pushScene: function(scene) {
        cc.assert(scene, cc._LogInfos.Director_pushScene);
        this._sendCleanupToScene = false;
        this._scenesStack.push(scene);
        this._nextScene = scene;
    },
    runScene: function(scene) {
        cc.assert(scene, cc._LogInfos.Director_pushScene);
        if (!this._runningScene) {
            this.pushScene(scene);
            this.startAnimation();
        } else {
            var i = this._scenesStack.length;
            if (i === 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->214");
            } else {
                this._sendCleanupToScene = true;
                this._scenesStack[i - 1] = scene;
                this._nextScene = scene;
            }
        }
    },
    resume: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->232");
    },
    setContentScaleFactor: function(scaleFactor) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->238");
    },
    setDepthTest: null,
    setDefaultValues: function() {},
    setNextDeltaTimeZero: function(nextDeltaTimeZero) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->243");
    },
    setNextScene: function() {
        var runningIsTransition = false, newIsTransition = false;
        if (cc.TransitionScene) {
            runningIsTransition = this._runningScene ? this._runningScene instanceof cc.TransitionScene : false;
            newIsTransition = this._nextScene ? this._nextScene instanceof cc.TransitionScene : false;
        }
        if (!newIsTransition) {
            var locRunningScene = this._runningScene;
            if (locRunningScene) {
                locRunningScene.onExitTransitionDidStart();
                locRunningScene.onExit();
            }
            if (this._sendCleanupToScene && locRunningScene) {
                locRunningScene.cleanup();
            }
        }
        this._runningScene = this._nextScene;
        cc.renderer.childrenOrderDirty = true;
        this._nextScene = null;
        if (!runningIsTransition && this._runningScene != null) {
            this._runningScene.onEnter();
            this._runningScene.onEnterTransitionDidFinish();
        }
    },
    setNotificationNode: function(node) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->270");
    },
    getDelegate: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->273");
    },
    setDelegate: function(delegate) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->276");
    },
    setOpenGLView: null,
    setProjection: null,
    setViewport: null,
    getOpenGLView: null,
    getProjection: null,
    setAlphaBlending: null,
    _showStats: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->295");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->302");
    },
    isSendCleanupToScene: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->305");
    },
    getRunningScene: function() {
        return this._runningScene;
    },
    getAnimationInterval: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->311");
    },
    isDisplayStats: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->314");
    },
    setDisplayStats: function(displayStats) {
        this._displayStats = displayStats;
    },
    getSecondsPerFrame: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->320");
    },
    isNextDeltaTimeZero: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->323");
    },
    isPaused: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->326");
    },
    getTotalFrames: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->329");
    },
    popToRootScene: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->332");
    },
    popToSceneStackLevel: function(level) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->337");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->355");
    },
    getScheduler: function() {
        return this._scheduler;
    },
    setScheduler: function(scheduler) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->363");
    },
    getActionManager: function() {
        return this._actionManager;
    },
    setActionManager: function(actionManager) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->369");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->371");
    },
    getDeltaTime: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->374");
    },
    _createStatsLabel: null,
    _calculateMPF: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->379");
    }
});
cc.Director.EVENT_PROJECTION_CHANGED = "director_projection_changed";
cc.Director.EVENT_AFTER_DRAW = "director_after_draw";
cc.Director.EVENT_AFTER_VISIT = "director_after_visit";
cc.Director.EVENT_AFTER_UPDATE = "director_after_update";
cc.DisplayLinkDirector = cc.Director.extend({
    invalid: false,
    startAnimation: function() {
        this._nextDeltaTimeZero = true;
        this.invalid = false;
    },
    mainLoop: function() {
        if (this._purgeDirectorInNextLoop) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->395");
        } else {
            if (!this.invalid) {
                this.drawScene();
            }
        }
    },
    stopAnimation: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->403");
    },
    setAnimationInterval: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->410");
    }
});
cc.Director.sharedDirector = null;
cc.Director.firstUseDirector = true;
cc.Director._getInstance = function() {
    if (cc.Director.firstUseDirector) {
        cc.Director.firstUseDirector = false;
        cc.Director.sharedDirector = new cc.DisplayLinkDirector;
        cc.Director.sharedDirector.init();
    }
    return cc.Director.sharedDirector;
};
cc.defaultFPS = 60;
cc.Director.PROJECTION_2D = 0;
cc.Director.PROJECTION_3D = 1;
cc.Director.PROJECTION_CUSTOM = 3;
cc.Director.PROJECTION_DEFAULT = cc.Director.PROJECTION_3D;
if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->430");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->431");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->432");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->433");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->441");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->442");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->445");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->446");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->447");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->448");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->449");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->450");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->451");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->452");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->453");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->454");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->455");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->456");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->457");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->458");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->459");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->460");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->461");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->462");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->463");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->464");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->465");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->466");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->467");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->468");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->469");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirector.js->470");
} else {
    cc.Director._fpsImage = new Image;
    cc._addEventListener(cc.Director._fpsImage, "load", function() {
        cc.Director._fpsImageLoaded = true;
    });
    if (cc._fpsImage) {
        cc.Director._fpsImage.src = cc._fpsImage;
    }
}