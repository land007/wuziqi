(function() {
    cc.SpriteBatchNode.WebGLRenderCmd = function(renderable) {
        cc.Node.WebGLRenderCmd.call(this, renderable);
        this._needDraw = true;
        this._textureAtlas = null;
    };
    var proto = cc.SpriteBatchNode.WebGLRenderCmd.prototype = Object.create(cc.Node.WebGLRenderCmd.prototype);
    proto.constructor = cc.SpriteBatchNode.WebGLRenderCmd;
    proto.isValidChild = function(child) {
        if (!(child instanceof cc.Sprite)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->12");
        }
        if (child.texture != this.getTexture()) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->16");
        }
        return true;
    };
    proto.rendering = function() {
        var node = this._node;
        if (this._textureAtlas.totalQuads === 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->23");
        }
        this._shaderProgram.use();
        this._shaderProgram._setUniformForMVPMatrixWithMat4(this._stackMatrix);
        node._arrayMakeObjectsPerformSelector(node._children, cc.Node._stateCallbackType.updateTransform);
        cc.glBlendFunc(node._blendFunc.src, node._blendFunc.dst);
        this._textureAtlas.drawQuads();
    };
    proto.visit = function(parentCmd) {
        var node = this._node;
        if (!node._visible) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->34");
        }
        if (node._parent && node._parent._renderCmd) {
            this._curLevel = node._parent._renderCmd._curLevel + 1;
        }
        var currentStack = cc.current_stack;
        currentStack.stack.push(currentStack.top);
        if (!(this._dirtyFlag & cc.Node._dirtyFlags.transformDirty)) {
            this.transform(parentCmd);
        }
        this.updateStatus(parentCmd);
        currentStack.top = this._stackMatrix;
        node.sortAllChildren();
        cc.renderer.pushRenderCommand(this);
        this._dirtyFlag = 0;
        currentStack.top = currentStack.stack.pop();
    };
    proto.checkAtlasCapacity = function(index) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->55");
    };
    proto.increaseAtlasCapacity = function() {
        var locCapacity = this._textureAtlas.capacity;
        var quantity = Math.floor((locCapacity + 1) * 4 / 3);
        cc.log(cc._LogInfos.SpriteBatchNode_increaseAtlasCapacity, locCapacity, quantity);
        if (!this._textureAtlas.resizeCapacity(quantity)) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->62");
        }
    };
    proto.initWithTexture = function(texture, capacity) {
        this._textureAtlas = new cc.TextureAtlas;
        this._textureAtlas.initWithTexture(texture, capacity);
        this._updateBlendFunc();
        this._shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR);
    };
    proto.insertQuad = function(sprite, index) {
        var locTextureAtlas = this._textureAtlas;
        if (locTextureAtlas.totalQuads >= locTextureAtlas.capacity) {
            this.increaseAtlasCapacity();
        }
        locTextureAtlas.insertQuad(sprite.quad, index);
    };
    proto.removeQuadAtIndex = function(index) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->79");
    };
    proto.getTexture = function() {
        return this._textureAtlas.texture;
    };
    proto.setTexture = function(texture) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->88");
    };
    proto.removeAllQuads = function() {
        this._textureAtlas.removeAllQuads();
    };
    proto._swap = function(oldIndex, newIndex) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->103");
    };
    proto._updateAtlasIndex = function(sprite, curIndex) {
        var count = 0;
        var pArray = sprite.children;
        if (pArray) {
            count = pArray.length;
        }
        var oldIndex = 0;
        if (count === 0) {
            oldIndex = sprite.atlasIndex;
            sprite.atlasIndex = curIndex;
            sprite.arrivalOrder = 0;
            if (oldIndex != curIndex) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->117");
            }
            curIndex++;
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->154");
        }
        return curIndex;
    };
    proto.updateChildrenAtlasIndex = function(children) {
        var index = 0;
        for (var i = 0; i < children.length; i++) {
            index = this._updateAtlasIndex(children[i], index);
        }
    };
    proto._updateBlendFunc = function() {
        if (!this._textureAtlas.texture.hasPremultipliedAlpha()) {
            var blendFunc = this._node._blendFunc;
            blendFunc.src = cc.SRC_ALPHA;
            blendFunc.dst = cc.ONE_MINUS_SRC_ALPHA;
        }
    };
    proto.getTextureAtlas = function() {
        return this._textureAtlas;
    };
    proto.setTextureAtlas = function(textureAtlas) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteBatchNodeWebGLRenderCmd.js->177");
    };
    proto.cutting = function() {};
})();