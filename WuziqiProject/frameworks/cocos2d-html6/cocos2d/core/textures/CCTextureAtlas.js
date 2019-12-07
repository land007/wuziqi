cc.TextureAtlas = cc.Class.extend({
    dirty: false,
    texture: null,
    _indices: null,
    _buffersVBO: null,
    _capacity: 0,
    _quads: null,
    _quadsArrayBuffer: null,
    _quadsWebBuffer: null,
    _quadsReader: null,
    ctor: function(fileName, capacity) {
        this._buffersVBO = [];
        if (cc.isString(fileName)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->14");
        } else {
            if (fileName instanceof cc.Texture2D) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->17");
            }
        }
    },
    getTotalQuads: function() {
        return this._totalQuads;
    },
    getCapacity: function() {
        return this._capacity;
    },
    getTexture: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->28");
    },
    setTexture: function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->31");
    },
    setDirty: function(dirty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->34");
    },
    isDirty: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->37");
    },
    getQuads: function() {
        return this._quads;
    },
    setQuads: function(quads) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->43");
    },
    _copyQuadsToTextureAtlas: function(quads, index) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->49");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->50");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->51");
    },
    _setQuadToArray: function(quad, index) {
        var locQuads = this._quads;
        if (!locQuads[index]) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->57");
        }
        locQuads[index].bl = quad.bl;
        locQuads[index].br = quad.br;
        locQuads[index].tl = quad.tl;
        locQuads[index].tr = quad.tr;
    },
    description: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->65");
    },
    _setupIndices: function() {
        if (this._capacity === 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->69");
        }
        var locIndices = this._indices, locCapacity = this._capacity;
        for (var i = 0; i < locCapacity; i++) {
            if (cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->79");
            } else {
                locIndices[i * 6 + 0] = i * 4 + 0;
                locIndices[i * 6 + 1] = i * 4 + 1;
                locIndices[i * 6 + 2] = i * 4 + 2;
                locIndices[i * 6 + 3] = i * 4 + 3;
                locIndices[i * 6 + 4] = i * 4 + 2;
                locIndices[i * 6 + 5] = i * 4 + 1;
            }
        }
    },
    _setupVBO: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->95");
    },
    _mapBuffers: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->102");
    },
    initWithFile: function(file, capacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->111");
    },
    initWithTexture: function(texture, capacity) {
        cc.assert(texture, cc._LogInfos.TextureAtlas_initWithTexture);
        capacity = 0 | capacity;
        this._capacity = capacity;
        this._totalQuads = 0;
        this.texture = texture;
        this._quads = [];
        this._indices = new Uint16Array(capacity * 6);
        var quadSize = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
        this._quadsArrayBuffer = new ArrayBuffer(quadSize * capacity);
        this._quadsReader = new Uint8Array(this._quadsArrayBuffer);
        if (!(this._quads && this._indices) && capacity > 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->125");
        }
        var locQuads = this._quads;
        for (var i = 0; i < capacity; i++) {
            locQuads[i] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, i * quadSize);
        }
        this._setupIndices();
        this._setupVBO();
        this.dirty = true;
        return true;
    },
    updateQuad: function(quad, index) {
        cc.assert(quad, cc._LogInfos.TextureAtlas_updateQuad);
        cc.assert(index >= 0 && index < this._capacity, cc._LogInfos.TextureAtlas_updateQuad_2);
        this._totalQuads = Math.max(index + 1, this._totalQuads);
        this._setQuadToArray(quad, index);
        this.dirty = true;
    },
    insertQuad: function(quad, index) {
        cc.assert(index < this._capacity, cc._LogInfos.TextureAtlas_insertQuad_2);
        this._totalQuads++;
        if (this._totalQuads > this._capacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->148");
        }
        var quadSize = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
        var remaining = this._totalQuads - 1 - index;
        var startOffset = index * quadSize;
        var moveLength = remaining * quadSize;
        this._quads[this._totalQuads - 1] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, (this._totalQuads - 1) * quadSize);
        this._quadsReader.set(this._quadsReader.subarray(startOffset, startOffset + moveLength), startOffset + quadSize);
        this._setQuadToArray(quad, index);
        this.dirty = true;
    },
    insertQuads: function(quads, index, amount) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->180");
    },
    insertQuadFromIndex: function(fromIndex, newIndex) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->203");
    },
    removeQuadAtIndex: function(index) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->215");
    },
    removeQuadsAtIndex: function(index, amount) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->227");
    },
    removeAllQuads: function() {
        this._quads.length = 0;
        this._totalQuads = 0;
    },
    _setDirty: function(dirty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->234");
    },
    resizeCapacity: function(newCapacity) {
        if (newCapacity == this._capacity) {
            return true;
        }
        var quadSize = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
        var oldCapacity = this._capacity;
        this._totalQuads = Math.min(this._totalQuads, newCapacity);
        this._capacity = 0 | newCapacity;
        var i, capacity = this._capacity, locTotalQuads = this._totalQuads;
        if (this._quads == null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->251");
        } else {
            var newQuads, newArrayBuffer, quads = this._quads;
            if (capacity > oldCapacity) {
                newQuads = [];
                newArrayBuffer = new ArrayBuffer(quadSize * capacity);
                for (i = 0; i < locTotalQuads; i++) {
                    newQuads[i] = new cc.V3F_C4B_T2F_Quad(quads[i].tl, quads[i].bl, quads[i].tr, quads[i].br, newArrayBuffer, i * quadSize);
                }
                for (; i < capacity; i++) {
                    newQuads[i] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, newArrayBuffer, i * quadSize);
                }
                this._quadsReader = new Uint8Array(newArrayBuffer);
                this._quads = newQuads;
                this._quadsArrayBuffer = newArrayBuffer;
            } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->275");
            }
        }
        if (this._indices == null) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->279");
        } else {
            if (capacity > oldCapacity) {
                var tempIndices = new Uint16Array(capacity * 6);
                tempIndices.set(this._indices, 0);
                this._indices = tempIndices;
            } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->286");
            }
        }
        this._setupIndices();
        this._mapBuffers();
        this.dirty = true;
        return true;
    },
    increaseTotalQuadsWith: function(amount) {
        this._totalQuads += amount;
    },
    moveQuadsFromIndex: function(oldIndex, amount, newIndex) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->303");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->319");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->320");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->321");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->324");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->325");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->329");
    },
    fillWithEmptyQuadsFromIndex: function(index, amount) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->336");
    },
    drawQuads: function() {
        this.drawNumberOfQuads(this._totalQuads, 0);
    },
    _releaseBuffer: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->353");
    }
});
var _p = cc.TextureAtlas.prototype;
_p.totalQuads;
cc.defineGetterSetter(_p, "totalQuads", _p.getTotalQuads);
_p.capacity;
cc.defineGetterSetter(_p, "capacity", _p.getCapacity);
_p.quads;
cc.defineGetterSetter(_p, "quads", _p.getQuads, _p.setQuads);
cc.TextureAtlas.create = function(fileName, capacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/CCTextureAtlas.js->364");
};
cc.TextureAtlas.createWithTexture = cc.TextureAtlas.create;
if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
    cc.assert(cc.isFunction(cc._tmp.WebGLTextureAtlas), cc._LogInfos.MissingFile, "TexturesWebGL.js");
    cc._tmp.WebGLTextureAtlas();
    delete cc._tmp.WebGLTextureAtlas;
}
cc.assert(cc.isFunction(cc._tmp.PrototypeTextureAtlas), cc._LogInfos.MissingFile, "TexturesPropertyDefine.js");
cc._tmp.PrototypeTextureAtlas();
delete cc._tmp.PrototypeTextureAtlas;