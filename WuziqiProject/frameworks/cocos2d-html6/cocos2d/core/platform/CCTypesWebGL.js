var cc = cc || {};
cc._tmp = cc._tmp || {};
cc._tmp.WebGLColor = function() {
    cc.color = function(r, g, b, a, arrayBuffer, offset) {
        if (r === undefined) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->6");
        }
        if (cc.isString(r)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->10");
        }
        if (cc.isObject(r)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->13");
        }
        return new cc.Color(r, g, b, a, arrayBuffer, offset);
    };
    cc.Color = function(r, g, b, a, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Color.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = Uint8Array.BYTES_PER_ELEMENT;
        this._rU8 = new Uint8Array(locArrayBuffer, locOffset, 1);
        this._gU8 = new Uint8Array(locArrayBuffer, locOffset + locElementLen, 1);
        this._bU8 = new Uint8Array(locArrayBuffer, locOffset + locElementLen * 2, 1);
        this._aU8 = new Uint8Array(locArrayBuffer, locOffset + locElementLen * 3, 1);
        this._rU8[0] = r || 0;
        this._gU8[0] = g || 0;
        this._bU8[0] = b || 0;
        this._aU8[0] = a == null ? 255 : a;
        if (a === undefined) {
            this.a_undefined = true;
        }
    };
    cc.Color.BYTES_PER_ELEMENT = 4;
    var _p = cc.Color.prototype;
    _p._getR = function() {
        return this._rU8[0];
    };
    _p._setR = function(value) {
        this._rU8[0] = value < 0 ? 0 : value;
    };
    _p._getG = function() {
        return this._gU8[0];
    };
    _p._setG = function(value) {
        this._gU8[0] = value < 0 ? 0 : value;
    };
    _p._getB = function() {
        return this._bU8[0];
    };
    _p._setB = function(value) {
        this._bU8[0] = value < 0 ? 0 : value;
    };
    _p._getA = function() {
        return this._aU8[0];
    };
    _p._setA = function(value) {
        this._aU8[0] = value < 0 ? 0 : value;
    };
    _p.r;
    cc.defineGetterSetter(_p, "r", _p._getR, _p._setR);
    _p.g;
    cc.defineGetterSetter(_p, "g", _p._getG, _p._setG);
    _p.b;
    cc.defineGetterSetter(_p, "b", _p._getB, _p._setB);
    _p.a;
    cc.defineGetterSetter(_p, "a", _p._getA, _p._setA);
    cc.Vertex2F = function(x, y, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Vertex2F.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        this._xF32 = new Float32Array(this._arrayBuffer, this._offset, 1);
        this._yF32 = new Float32Array(this._arrayBuffer, this._offset + 4, 1);
        this._xF32[0] = x || 0;
        this._yF32[0] = y || 0;
    };
    cc.Vertex2F.BYTES_PER_ELEMENT = 8;
    Object.defineProperties(cc.Vertex2F.prototype, {
        x: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->79");
            },
            set: function(xValue) {
                this._xF32[0] = xValue;
            },
            enumerable: true
        },
        y: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->88");
            },
            set: function(yValue) {
                this._yF32[0] = yValue;
            },
            enumerable: true
        }
    });
    cc.Vertex3F = function(x, y, z, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Vertex3F.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset;
        this._xF32 = new Float32Array(locArrayBuffer, locOffset, 1);
        this._xF32[0] = x || 0;
        this._yF32 = new Float32Array(locArrayBuffer, locOffset + Float32Array.BYTES_PER_ELEMENT, 1);
        this._yF32[0] = y || 0;
        this._zF32 = new Float32Array(locArrayBuffer, locOffset + Float32Array.BYTES_PER_ELEMENT * 2, 1);
        this._zF32[0] = z || 0;
    };
    cc.Vertex3F.BYTES_PER_ELEMENT = 12;
    Object.defineProperties(cc.Vertex3F.prototype, {
        x: {
            get: function() {
                return this._xF32[0];
            },
            set: function(xValue) {
                this._xF32[0] = xValue;
            },
            enumerable: true
        },
        y: {
            get: function() {
                return this._yF32[0];
            },
            set: function(yValue) {
                this._yF32[0] = yValue;
            },
            enumerable: true
        },
        z: {
            get: function() {
                return this._zF32[0];
            },
            set: function(zValue) {
                this._zF32[0] = zValue;
            },
            enumerable: true
        }
    });
    cc.Tex2F = function(u, v, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Tex2F.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        this._uF32 = new Float32Array(this._arrayBuffer, this._offset, 1);
        this._vF32 = new Float32Array(this._arrayBuffer, this._offset + 4, 1);
        this._uF32[0] = u || 0;
        this._vF32[0] = v || 0;
    };
    cc.Tex2F.BYTES_PER_ELEMENT = 8;
    Object.defineProperties(cc.Tex2F.prototype, {
        u: {
            get: function() {
                return this._uF32[0];
            },
            set: function(xValue) {
                this._uF32[0] = xValue;
            },
            enumerable: true
        },
        v: {
            get: function() {
                return this._vF32[0];
            },
            set: function(yValue) {
                this._vF32[0] = yValue;
            },
            enumerable: true
        }
    });
    cc.Quad2 = function(tl, tr, bl, br, arrayBuffer, offset) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->173");
    };
    cc.Quad2.BYTES_PER_ELEMENT = 32;
    cc.Quad3 = function(bl1, br1, tl1, tr1) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->180");
    };
    Object.defineProperties(cc.Quad2.prototype, {
        tl: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->185");
            },
            set: function(tlValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->189");
            },
            enumerable: true
        },
        tr: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->195");
            },
            set: function(trValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->199");
            },
            enumerable: true
        },
        bl: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->205");
            },
            set: function(blValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->209");
            },
            enumerable: true
        },
        br: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->215");
            },
            set: function(brValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->219");
            },
            enumerable: true
        }
    });
    cc.V3F_C4B_T2F = function(vertices, colors, texCoords, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V3F_C4B_T2F.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.Vertex3F.BYTES_PER_ELEMENT;
        this._vertices = vertices ? new cc.Vertex3F(vertices.x, vertices.y, vertices.z, locArrayBuffer, locOffset) : new cc.Vertex3F(0, 0, 0, locArrayBuffer, locOffset);
        this._colors = colors ? cc.color(colors.r, colors.g, colors.b, colors.a, locArrayBuffer, locOffset + locElementLen) : cc.color(0, 0, 0, 0, locArrayBuffer, locOffset + locElementLen);
        this._texCoords = texCoords ? new cc.Tex2F(texCoords.u, texCoords.v, locArrayBuffer, locOffset + locElementLen + cc.Color.BYTES_PER_ELEMENT) : new cc.Tex2F(0, 0, locArrayBuffer, locOffset + locElementLen + cc.Color.BYTES_PER_ELEMENT);
    };
    cc.V3F_C4B_T2F.BYTES_PER_ELEMENT = 24;
    Object.defineProperties(cc.V3F_C4B_T2F.prototype, {
        vertices: {
            get: function() {
                return this._vertices;
            },
            set: function(verticesValue) {
                var locVertices = this._vertices;
                locVertices.x = verticesValue.x;
                locVertices.y = verticesValue.y;
                locVertices.z = verticesValue.z;
            },
            enumerable: true
        },
        colors: {
            get: function() {
                return this._colors;
            },
            set: function(colorValue) {
                var locColors = this._colors;
                locColors.r = colorValue.r;
                locColors.g = colorValue.g;
                locColors.b = colorValue.b;
                locColors.a = colorValue.a;
            },
            enumerable: true
        },
        texCoords: {
            get: function() {
                return this._texCoords;
            },
            set: function(texValue) {
                this._texCoords.u = texValue.u;
                this._texCoords.v = texValue.v;
            },
            enumerable: true
        }
    });
    cc.V3F_C4B_T2F_Quad = function(tl, bl, tr, br, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.V3F_C4B_T2F.BYTES_PER_ELEMENT;
        this._tl = tl ? new cc.V3F_C4B_T2F(tl.vertices, tl.colors, tl.texCoords, locArrayBuffer, locOffset) : new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
        this._bl = bl ? new cc.V3F_C4B_T2F(bl.vertices, bl.colors, bl.texCoords, locArrayBuffer, locOffset + locElementLen) : new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset + locElementLen);
        this._tr = tr ? new cc.V3F_C4B_T2F(tr.vertices, tr.colors, tr.texCoords, locArrayBuffer, locOffset + locElementLen * 2) : new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset + locElementLen * 2);
        this._br = br ? new cc.V3F_C4B_T2F(br.vertices, br.colors, br.texCoords, locArrayBuffer, locOffset + locElementLen * 3) : new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset + locElementLen * 3);
    };
    cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT = 96;
    Object.defineProperties(cc.V3F_C4B_T2F_Quad.prototype, {
        tl: {
            get: function() {
                return this._tl;
            },
            set: function(tlValue) {
                var locTl = this._tl;
                locTl.vertices = tlValue.vertices;
                locTl.colors = tlValue.colors;
                locTl.texCoords = tlValue.texCoords;
            },
            enumerable: true
        },
        bl: {
            get: function() {
                return this._bl;
            },
            set: function(blValue) {
                var locBl = this._bl;
                locBl.vertices = blValue.vertices;
                locBl.colors = blValue.colors;
                locBl.texCoords = blValue.texCoords;
            },
            enumerable: true
        },
        tr: {
            get: function() {
                return this._tr;
            },
            set: function(trValue) {
                var locTr = this._tr;
                locTr.vertices = trValue.vertices;
                locTr.colors = trValue.colors;
                locTr.texCoords = trValue.texCoords;
            },
            enumerable: true
        },
        br: {
            get: function() {
                return this._br;
            },
            set: function(brValue) {
                var locBr = this._br;
                locBr.vertices = brValue.vertices;
                locBr.colors = brValue.colors;
                locBr.texCoords = brValue.texCoords;
            },
            enumerable: true
        },
        arrayBuffer: {
            get: function() {
                return this._arrayBuffer;
            },
            enumerable: true
        }
    });
    cc.V3F_C4B_T2F_QuadZero = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->337");
    };
    cc.V3F_C4B_T2F_QuadCopy = function(sourceQuad) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->355");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->356");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->357");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->358");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->363");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->369");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->391");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->392");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->393");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->395");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->396");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->397");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->398");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->401");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->403");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->405");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->413");
    };
    cc.V3F_C4B_T2F_QuadsCopy = function(sourceQuads) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->423");
    };
    cc.V2F_C4B_T2F = function(vertices, colors, texCoords, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V2F_C4B_T2F.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.Vertex2F.BYTES_PER_ELEMENT;
        this._vertices = vertices ? new cc.Vertex2F(vertices.x, vertices.y, locArrayBuffer, locOffset) : new cc.Vertex2F(0, 0, locArrayBuffer, locOffset);
        this._colors = colors ? cc.color(colors.r, colors.g, colors.b, colors.a, locArrayBuffer, locOffset + locElementLen) : cc.color(0, 0, 0, 0, locArrayBuffer, locOffset + locElementLen);
        this._texCoords = texCoords ? new cc.Tex2F(texCoords.u, texCoords.v, locArrayBuffer, locOffset + locElementLen + cc.Color.BYTES_PER_ELEMENT) : new cc.Tex2F(0, 0, locArrayBuffer, locOffset + locElementLen + cc.Color.BYTES_PER_ELEMENT);
    };
    cc.V2F_C4B_T2F.BYTES_PER_ELEMENT = 20;
    Object.defineProperties(cc.V2F_C4B_T2F.prototype, {
        vertices: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->437");
            },
            set: function(verticesValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->441");
            },
            enumerable: true
        },
        colors: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->447");
            },
            set: function(colorValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->450");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->451");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->452");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->453");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->454");
            },
            enumerable: true
        },
        texCoords: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->460");
            },
            set: function(texValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->463");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->464");
            },
            enumerable: true
        }
    });
    cc.V2F_C4B_T2F_Triangle = function(a, b, c, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;
        this._a = a ? new cc.V2F_C4B_T2F(a.vertices, a.colors, a.texCoords, locArrayBuffer, locOffset) : new cc.V2F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
        this._b = b ? new cc.V2F_C4B_T2F(b.vertices, b.colors, b.texCoords, locArrayBuffer, locOffset + locElementLen) : new cc.V2F_C4B_T2F(null, null, null, locArrayBuffer, locOffset + locElementLen);
        this._c = c ? new cc.V2F_C4B_T2F(c.vertices, c.colors, c.texCoords, locArrayBuffer, locOffset + locElementLen * 2) : new cc.V2F_C4B_T2F(null, null, null, locArrayBuffer, locOffset + locElementLen * 2);
    };
    cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT = 60;
    Object.defineProperties(cc.V2F_C4B_T2F_Triangle.prototype, {
        a: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->481");
            },
            set: function(aValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->484");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->485");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->486");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->487");
            },
            enumerable: true
        },
        b: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->493");
            },
            set: function(bValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->496");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->497");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->498");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->499");
            },
            enumerable: true
        },
        c: {
            get: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->505");
            },
            set: function(cValue) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->508");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->509");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->510");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCTypesWebGL.js->511");
            },
            enumerable: true
        }
    });
};