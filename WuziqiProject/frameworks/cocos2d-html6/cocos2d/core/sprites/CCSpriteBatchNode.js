cc.SpriteBatchNode = cc.Node.extend({
    _blendFunc: null,
    _descendants: null,
    _className: "SpriteBatchNode",
    ctor: function(fileImage, capacity) {
        cc.Node.prototype.ctor.call(this);
        this._descendants = [];
        this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
        var texture2D;
        capacity = capacity || cc.SpriteBatchNode.DEFAULT_CAPACITY;
        if (cc.isString(fileImage)) {
            texture2D = cc.textureCache.getTextureForKey(fileImage);
            if (!texture2D) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->14");
            }
        } else {
            if (fileImage instanceof cc.Texture2D) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->18");
            }
        }
        texture2D && this.initWithTexture(texture2D, capacity);
    },
    addSpriteWithoutQuad: function(child, z, aTag) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->42");
    },
    getTextureAtlas: function() {
        return this._renderCmd.getTextureAtlas();
    },
    setTextureAtlas: function(textureAtlas) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->48");
    },
    getDescendants: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->51");
    },
    initWithFile: function(fileImage, capacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->58");
    },
    _setNodeDirtyForCache: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->61");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->63");
    },
    init: function(fileImage, capacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->70");
    },
    increaseAtlasCapacity: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->73");
    },
    removeChildAtIndex: function(index, doCleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->76");
    },
    rebuildIndexInOrder: function(pobParent, index) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->82");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->83");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->100");
    },
    highestAtlasIndexInChild: function(sprite) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->108");
    },
    lowestAtlasIndexInChild: function(sprite) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->116");
    },
    atlasIndexForChild: function(sprite, nZ) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->144");
    },
    reorderBatch: function(reorder) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->147");
    },
    setBlendFunc: function(src, dst) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->157");
    },
    getBlendFunc: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->160");
    },
    reorderChild: function(child, zOrder) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->171");
    },
    removeChild: function(child, cleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->182");
    },
    updateQuadFromSprite: function(sprite, index) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->194");
    },
    insertQuadFromSprite: function(sprite, index) {
        cc.assert(sprite, cc._LogInfos.CCSpriteBatchNode_insertQuadFromSprite_2);
        if (!(sprite instanceof cc.Sprite)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->200");
        }
        this._renderCmd.insertQuad(sprite, index);
        sprite.batchNode = this;
        sprite.atlasIndex = index;
        sprite.dirty = true;
        sprite.updateTransform();
        this._renderCmd.cutting(sprite, index);
    },
    initWithTexture: function(tex, capacity) {
        this._children.length = 0;
        this._descendants.length = 0;
        capacity = capacity || cc.SpriteBatchNode.DEFAULT_CAPACITY;
        this._renderCmd.initWithTexture(tex, capacity);
        return true;
    },
    insertChild: function(sprite, index) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->237");
    },
    appendChild: function(sprite) {
        this._reorderChildDirty = true;
        sprite.batchNode = this;
        sprite.dirty = true;
        this._descendants.push(sprite);
        var index = this._descendants.length - 1;
        sprite.atlasIndex = index;
        this._renderCmd.insertQuad(sprite, index);
        var children = sprite.children;
        for (var i = 0, l = children.length || 0; i < l; i++) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->249");
        }
    },
    removeSpriteFromAtlas: function(sprite) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->270");
    },
    getTexture: function() {
        return this._renderCmd.getTexture();
    },
    setTexture: function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->276");
    },
    addChild: function(child, zOrder, tag) {
        cc.assert(child != null, cc._LogInfos.CCSpriteBatchNode_addChild_3);
        if (!this._renderCmd.isValidChild(child)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->281");
        }
        zOrder = zOrder == null ? child.zIndex : zOrder;
        tag = tag == null ? child.tag : tag;
        cc.Node.prototype.addChild.call(this, child, zOrder, tag);
        this.appendChild(child);
    },
    removeAllChildren: function(cleanup) {
        var locDescendants = this._descendants;
        if (locDescendants && locDescendants.length > 0) {
            for (var i = 0, len = locDescendants.length; i < len; i++) {
                if (locDescendants[i]) {
                    locDescendants[i].batchNode = null;
                }
            }
        }
        cc.Node.prototype.removeAllChildren.call(this, cleanup);
        this._descendants.length = 0;
        this._renderCmd.removeAllQuads();
    },
    sortAllChildren: function() {
        if (this._reorderChildDirty) {
            var childrenArr = this._children;
            var i, j = 0, length = childrenArr.length, tempChild;
            for (i = 1; i < length; i++) {
                var tempItem = childrenArr[i];
                j = i - 1;
                tempChild = childrenArr[j];
                while (j >= 0 && (tempItem._localZOrder < tempChild._localZOrder || tempItem._localZOrder == tempChild._localZOrder && tempItem.arrivalOrder < tempChild.arrivalOrder)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->312");
                }
                childrenArr[j + 1] = tempItem;
            }
            if (childrenArr.length > 0) {
                this._arrayMakeObjectsPerformSelector(childrenArr, cc.Node._stateCallbackType.sortAllChildren);
                this._renderCmd.updateChildrenAtlasIndex(childrenArr);
            }
            this._reorderChildDirty = false;
        }
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->325");
        } else {
            return new cc.SpriteBatchNode.WebGLRenderCmd(this);
        }
    }
});
var _p = cc.SpriteBatchNode.prototype;
cc.defineGetterSetter(_p, "texture", _p.getTexture, _p.setTexture);
cc.defineGetterSetter(_p, "textureAtlas", _p.getTextureAtlas, _p.setTextureAtlas);
_p.descendants;
cc.defineGetterSetter(_p, "descendants", _p.getDescendants);
cc.SpriteBatchNode.DEFAULT_CAPACITY = 29;
cc.SpriteBatchNode.create = function(fileImage, capacity) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNode.js->338");
};
cc.SpriteBatchNode.createWithTexture = cc.SpriteBatchNode.create;