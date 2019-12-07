var cc = cc || {};
var ClassManager = {
    id: 0 | Math.random() * 998,
    instanceId: 0 | Math.random() * 998,
    compileSuper: function(func, name, id) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->7");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->8");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->21");
    },
    getNewID: function() {
        return this.id++;
    },
    getNewInstanceId: function() {
        return this.instanceId++;
    }
};
ClassManager.compileSuper.ClassManager = ClassManager;
(function() {
    var fnTest = /\b_super\b/;
    var config = cc.game.config;
    var releaseMode = config[cc.game.CONFIG_KEY.classReleaseMode];
    if (releaseMode) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->36");
    }
    cc.Class = function() {};
    cc.Class.extend = function(props) {
        var _super = this.prototype;
        var prototype = Object.create(_super);
        var classId = ClassManager.getNewID();
        ClassManager[classId] = _super;
        var desc = {
            writable: true,
            enumerable: false,
            configurable: true
        };
        prototype.__instanceId = null;
        function Class() {
            this.__instanceId = ClassManager.getNewInstanceId();
            if (this.ctor) {
                this.ctor.apply(this, arguments);
            }
        }
        Class.id = classId;
        desc.value = classId;
        Object.defineProperty(prototype, "__pid", desc);
        Class.prototype = prototype;
        desc.value = Class;
        Object.defineProperty(Class.prototype, "constructor", desc);
        this.__getters__ && (Class.__getters__ = cc.clone(this.__getters__));
        this.__setters__ && (Class.__setters__ = cc.clone(this.__setters__));
        for (var idx = 0, li = arguments.length; idx < li; ++idx) {
            var prop = arguments[idx];
            for (var name in prop) {
                var isFunc = typeof prop[name] === "function";
                var override = typeof _super[name] === "function";
                var hasSuperCall = fnTest.test(prop[name]);
                if (releaseMode && isFunc && override && hasSuperCall) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->72");
                } else {
                    if (isFunc && override && hasSuperCall) {
                        desc.value = function(name, fn) {
                            return function() {
                                var tmp = this._super;
                                this._super = _super[name];
                                var ret = fn.apply(this, arguments);
                                this._super = tmp;
                                return ret;
                            };
                        }(name, prop[name]);
                        Object.defineProperty(prototype, name, desc);
                    } else {
                        if (isFunc) {
                            desc.value = prop[name];
                            Object.defineProperty(prototype, name, desc);
                        } else {
                            prototype[name] = prop[name];
                        }
                    }
                }
                if (isFunc) {
                    var getter, setter, propertyName;
                    if (this.__getters__ && this.__getters__[name]) {
                        propertyName = this.__getters__[name];
                        for (var i in this.__setters__) {
                            if (this.__setters__[i] == propertyName) {
                                setter = i;
                                break;
                            }
                        }
                        cc.defineGetterSetter(prototype, propertyName, prop[name], prop[setter] ? prop[setter] : prototype[setter], name, setter);
                    }
                    if (this.__setters__ && this.__setters__[name]) {
                        propertyName = this.__setters__[name];
                        for (var i in this.__getters__) {
                            if (this.__getters__[i] == propertyName) {
                                getter = i;
                                break;
                            }
                        }
                        cc.defineGetterSetter(prototype, propertyName, prop[getter] ? prop[getter] : prototype[getter], prop[name], getter, name);
                    }
                }
            }
        }
        Class.extend = cc.Class.extend;
        Class.implement = function(prop) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->123");
        };
        return Class;
    };
})();
cc.defineGetterSetter = function(proto, prop, getter, setter, getterName, setterName) {
    if (proto.__defineGetter__) {
        getter && proto.__defineGetter__(prop, getter);
        setter && proto.__defineSetter__(prop, setter);
    } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->143");
    }
    if (!getterName && !setterName) {
        var hasGetter = getter != null, hasSetter = setter != undefined, props = Object.getOwnPropertyNames(proto);
        for (var i = 0; i < props.length; i++) {
            var name = props[i];
            if ((proto.__lookupGetter__ ? proto.__lookupGetter__(name) : Object.getOwnPropertyDescriptor(proto, name)) || typeof proto[name] !== "function") {
                continue;
            }
            var func = proto[name];
            if (hasGetter && func === getter) {
                getterName = name;
                if (!hasSetter || setterName) {
                    break;
                }
            }
            if (hasSetter && func === setter) {
                setterName = name;
                if (!hasGetter || getterName) {
                    break;
                }
            }
        }
    }
    var ctor = proto.constructor;
    if (getterName) {
        if (!ctor.__getters__) {
            ctor.__getters__ = {};
        }
        ctor.__getters__[getterName] = prop;
    }
    if (setterName) {
        if (!ctor.__setters__) {
            ctor.__setters__ = {};
        }
        ctor.__setters__[setterName] = prop;
    }
};
cc.clone = function(obj) {
    var newObj = obj.constructor ? new obj.constructor : {};
    for (var key in obj) {
        var copy = obj[key];
        if (typeof copy == "object" && copy && !(copy instanceof cc.Node) && !(copy instanceof HTMLElement)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCClass.js->186");
        } else {
            newObj[key] = copy;
        }
    }
    return newObj;
};
cc.inject = function(srcPrototype, destPrototype) {
    for (var key in srcPrototype) {
        destPrototype[key] = srcPrototype[key];
    }
};