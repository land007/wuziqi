cc.PRIORITY_NON_SYSTEM = cc.PRIORITY_SYSTEM + 1;
cc.ListEntry = function(prev, next, target, priority, paused, markedForDeletion) {
    this.prev = prev;
    this.next = next;
    this.target = target;
    this.priority = priority;
    this.paused = paused;
    this.markedForDeletion = markedForDeletion;
};
cc.HashUpdateEntry = function(list, entry, target, hh) {
    this.list = list;
    this.entry = entry;
    this.target = target;
    this.hh = hh;
};
cc.HashTimerEntry = function(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused, hh) {
    var _t = this;
    _t.timers = timers;
    _t.target = target;
    _t.timerIndex = timerIndex;
    _t.currentTimer = currentTimer;
    _t.currentTimerSalvaged = currentTimerSalvaged;
    _t.paused = paused;
    _t.hh = hh;
};
cc.Timer = cc.Class.extend({
    _interval: 0,
    _callback: null,
    _target: null,
    _elapsed: 0,
    _runForever: false,
    _useDelay: false,
    _timesExecuted: 0,
    _repeat: 0,
    _delay: 0,
    getInterval: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->37");
    },
    setInterval: function(interval) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->40");
    },
    getCallback: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->43");
    },
    ctor: function(target, callback, interval, repeat, delay) {
        var self = this;
        self._target = target;
        self._callback = callback;
        self._elapsed = -1;
        self._interval = interval || 0;
        self._delay = delay || 0;
        self._useDelay = self._delay > 0;
        self._repeat = repeat == null ? cc.REPEAT_FOREVER : repeat;
        self._runForever = self._repeat == cc.REPEAT_FOREVER;
    },
    _doCallback: function() {
        var self = this;
        if (cc.isString(self._callback)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->59");
        } else {
            self._callback.call(self._target, self._elapsed);
        }
    },
    update: function(dt) {
        var self = this;
        if (self._elapsed == -1) {
            self._elapsed = 0;
            self._timesExecuted = 0;
        } else {
            var locTarget = self._target, locCallback = self._callback;
            self._elapsed += dt;
            if (self._runForever && !self._useDelay) {
                if (self._elapsed >= self._interval) {
                    if (locTarget && locCallback) {
                        self._doCallback();
                    }
                    self._elapsed = 0;
                }
            } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->100");
            }
        }
    }
});
cc.Scheduler = cc.Class.extend({
    _timeScale: 1,
    _updates: null,
    _hashForUpdates: null,
    _arrayForUpdates: null,
    _hashForTimers: null,
    _arrayForTimes: null,
    _currentTarget: null,
    _currentTargetSalvaged: false,
    _updateHashLocked: false,
    ctor: function() {
        var self = this;
        self._timeScale = 1;
        self._updates = [ [], [], [] ];
        self._hashForUpdates = {};
        self._arrayForUpdates = [];
        self._hashForTimers = {};
        self._arrayForTimers = [];
        self._currentTarget = null;
        self._currentTargetSalvaged = false;
        self._updateHashLocked = false;
    },
    _removeHashElement: function(element) {
        delete this._hashForTimers[element.target.__instanceId];
        cc.arrayRemoveObject(this._arrayForTimers, element);
        element.Timer = null;
        element.target = null;
        element = null;
    },
    _removeUpdateFromHash: function(entry) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->142");
    },
    _priorityIn: function(ppList, target, priority, paused) {
        var self = this, listElement = new cc.ListEntry(null, null, target, priority, paused, false);
        if (!ppList) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->148");
        } else {
            var index2Insert = ppList.length - 1;
            for (var i = 0; i <= index2Insert; i++) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->155");
            }
            ppList.splice(i, 0, listElement);
        }
        var hashElement = new cc.HashUpdateEntry(ppList, listElement, target, null);
        self._arrayForUpdates.push(hashElement);
        self._hashForUpdates[target.__instanceId] = hashElement;
        return ppList;
    },
    _appendIn: function(ppList, target, paused) {
        var self = this, listElement = new cc.ListEntry(null, null, target, 0, paused, false);
        ppList.push(listElement);
        var hashElement = new cc.HashUpdateEntry(ppList, listElement, target, null);
        self._arrayForUpdates.push(hashElement);
        self._hashForUpdates[target.__instanceId] = hashElement;
    },
    setTimeScale: function(timeScale) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->172");
    },
    getTimeScale: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->175");
    },
    update: function(dt) {
        var self = this;
        var locUpdates = self._updates, locArrayForTimers = self._arrayForTimers;
        var tmpEntry, elt, i, li;
        self._updateHashLocked = true;
        if (this._timeScale != 1) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->183");
        }
        for (i = 0, li = locUpdates.length; i < li && i >= 0; i++) {
            var update = self._updates[i];
            for (var j = 0, lj = update.length; j < lj; j++) {
                tmpEntry = update[j];
                if (!tmpEntry.paused && !tmpEntry.markedForDeletion) {
                    tmpEntry.target.update(dt);
                }
            }
        }
        for (i = 0, li = locArrayForTimers.length; i < li; i++) {
            elt = locArrayForTimers[i];
            if (!elt) {
                break;
            }
            self._currentTarget = elt;
            self._currentTargetSalvaged = false;
            if (!elt.paused) {
                for (elt.timerIndex = 0; elt.timerIndex < elt.timers.length; elt.timerIndex++) {
                    elt.currentTimer = elt.timers[elt.timerIndex];
                    elt.currentTimerSalvaged = false;
                    elt.currentTimer.update(dt);
                    elt.currentTimer = null;
                }
            }
            if (self._currentTargetSalvaged && elt.timers.length == 0) {
                self._removeHashElement(elt);
                i--;
            }
        }
        for (i = 0, li = locUpdates.length; i < li; i++) {
            var update = self._updates[i];
            for (var j = 0, lj = update.length; j < lj; ) {
                tmpEntry = update[j];
                if (!tmpEntry) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->219");
                }
                if (tmpEntry.markedForDeletion) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->222");
                } else {
                    j++;
                }
            }
        }
        self._updateHashLocked = false;
        self._currentTarget = null;
    },
    scheduleCallbackForTarget: function(target, callback_fn, interval, repeat, delay, paused) {
        cc.assert(callback_fn, cc._LogInfos.Scheduler_scheduleCallbackForTarget_2);
        cc.assert(target, cc._LogInfos.Scheduler_scheduleCallbackForTarget_3);
        interval = interval || 0;
        repeat = repeat == null ? cc.REPEAT_FOREVER : repeat;
        delay = delay || 0;
        paused = paused || false;
        var self = this, timer;
        var element = self._hashForTimers[target.__instanceId];
        if (!element) {
            element = new cc.HashTimerEntry(null, target, 0, null, null, paused, null);
            self._arrayForTimers.push(element);
            self._hashForTimers[target.__instanceId] = element;
        }
        if (element.timers == null) {
            element.timers = [];
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->255");
        }
        timer = new cc.Timer(target, callback_fn, interval, repeat, delay);
        element.timers.push(timer);
    },
    scheduleUpdateForTarget: function(target, priority, paused) {
        if (target === null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->262");
        }
        var self = this, locUpdates = self._updates;
        var hashElement = self._hashForUpdates[target.__instanceId];
        if (hashElement) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->268");
        }
        if (priority == 0) {
            self._appendIn(locUpdates[1], target, paused);
        } else {
            if (priority < 0) {
                locUpdates[0] = self._priorityIn(locUpdates[0], target, priority, paused);
            } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->276");
            }
        }
    },
    unscheduleCallbackForTarget: function(target, callback_fn) {
        if (target == null || callback_fn == null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->282");
        }
        var self = this, element = self._hashForTimers[target.__instanceId];
        if (element) {
            var timers = element.timers;
            for (var i = 0, li = timers.length; i < li; i++) {
                var timer = timers[i];
                if (callback_fn == timer._callback) {
                    if (timer == element.currentTimer && !element.currentTimerSalvaged) {
                        element.currentTimerSalvaged = true;
                    }
                    timers.splice(i, 1);
                    if (element.timerIndex >= i) {
                        element.timerIndex--;
                    }
                    if (timers.length == 0) {
                        if (self._currentTarget == element) {
                            self._currentTargetSalvaged = true;
                        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->301");
                        }
                    }
                    return;
                }
            }
        }
    },
    unscheduleUpdateForTarget: function(target) {
        if (target == null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->311");
        }
        var self = this, element = self._hashForUpdates[target.__instanceId];
        if (element != null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->319");
        }
    },
    unscheduleAllCallbacksForTarget: function(target) {
        if (target == null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->324");
        }
        var self = this, element = self._hashForTimers[target.__instanceId];
        if (element) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->337");
        }
        self.unscheduleUpdateForTarget(target);
    },
    unscheduleAllCallbacks: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->342");
    },
    unscheduleAllCallbacksWithMinPriority: function(minPriority) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->355");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->356");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->357");
    },
    pauseAllTargets: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->360");
    },
    pauseAllTargetsWithMinPriority: function(minPriority) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->363");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->369");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->382");
    },
    resumeTargets: function(targetsToResume) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->390");
    },
    pauseTarget: function(target) {
        cc.assert(target, cc._LogInfos.Scheduler_pauseTarget);
        var self = this, element = self._hashForTimers[target.__instanceId];
        if (element) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->396");
        }
        var elementUpdate = self._hashForUpdates[target.__instanceId];
        if (elementUpdate) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->400");
        }
    },
    resumeTarget: function(target) {
        cc.assert(target, cc._LogInfos.Scheduler_resumeTarget);
        var self = this, element = self._hashForTimers[target.__instanceId];
        if (element) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->407");
        }
        var elementUpdate = self._hashForUpdates[target.__instanceId];
        if (elementUpdate) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->411");
        }
    },
    isTargetPaused: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCScheduler.js->420");
    }
});
cc.Scheduler.PRIORITY_SYSTEM = -2147483647 - 1;