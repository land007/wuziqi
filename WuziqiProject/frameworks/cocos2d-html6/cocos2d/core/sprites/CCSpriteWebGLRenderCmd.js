(function() {
    cc.Sprite.WebGLRenderCmd = function(renderable) {
        cc.Node.WebGLRenderCmd.call(this, renderable);
        this._needDraw = true;
        this._quad = new cc.V3F_C4B_T2F_Quad;
        this._quadWebBuffer = cc._renderContext.createBuffer();
        this._quadDirty = true;
        this._dirty = false;
        this._recursiveDirty = false;
    };
    var proto = cc.Sprite.WebGLRenderCmd.prototype = Object.create(cc.Node.WebGLRenderCmd.prototype);
    proto.constructor = cc.Sprite.WebGLRenderCmd;
    proto.updateBlendFunc = function(blendFunc) {};
    proto.setDirtyFlag = function(dirtyFlag) {
        cc.Node.WebGLRenderCmd.prototype.setDirtyFlag.call(this, dirtyFlag);
        this._dirty = true;
    };
    proto.setDirtyRecursively = function(value) {
        this._recursiveDirty = value;
        this._dirty = value;
        var locChildren = this._node._children, child, l = locChildren ? locChildren.length : 0;
        for (var i = 0; i < l; i++) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->24");
        }
    };
    proto._setBatchNodeForAddChild = function(child) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->30");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->31");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->32");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->37");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->42");
    };
    proto._handleTextureForRotatedTexture = function(texture) {
        return texture;
    };
    proto.isFrameDisplayed = function(frame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->49");
    };
    proto._init = function() {
        var tempColor = {
            r: 255,
            g: 255,
            b: 255,
            a: 255
        }, quad = this._quad;
        quad.bl.colors = tempColor;
        quad.br.colors = tempColor;
        quad.tl.colors = tempColor;
        quad.tr.colors = tempColor;
        this._quadDirty = true;
    };
    proto._resetForBatchNode = function() {
        var node = this._node;
        var x1 = node._offsetPosition.x;
        var y1 = node._offsetPosition.y;
        var x2 = x1 + node._rect.width;
        var y2 = y1 + node._rect.height;
        var locQuad = this._quad;
        locQuad.bl.vertices = {
            x: x1,
            y: y1,
            z: 0
        };
        locQuad.br.vertices = {
            x: x2,
            y: y1,
            z: 0
        };
        locQuad.tl.vertices = {
            x: x1,
            y: y2,
            z: 0
        };
        locQuad.tr.vertices = {
            x: x2,
            y: y2,
            z: 0
        };
        this._quadDirty = true;
    };
    proto.getQuad = function() {
        return this._quad;
    };
    proto._updateForSetSpriteFrame = function() {};
    proto._spriteFrameLoadedCallback = function(spriteFrame) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->99");
    };
    proto._textureLoadedCallback = function(sender) {
        var renderCmd = this._renderCmd;
        if (this._textureLoaded) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->104");
        }
        this._textureLoaded = true;
        var locRect = this._rect;
        if (!locRect) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->109");
        } else {
            if (cc._rectEqualToZero(locRect)) {
                locRect.width = sender.width;
                locRect.height = sender.height;
            }
        }
        this.texture = sender;
        this.setTextureRect(locRect, this._rectRotated);
        this.setBatchNode(this._batchNode);
        renderCmd._quadDirty = true;
        this.dispatchEvent("load");
    };
    proto._setTextureCoords = function(rect, needConvert) {
        if (needConvert === undefined) {
            needConvert = true;
        }
        if (needConvert) {
            rect = cc.rectPointsToPixels(rect);
        }
        var node = this._node;
        var tex = node._batchNode ? node.textureAtlas.texture : node._texture;
        if (!tex) {
            return;
        }
        var atlasWidth = tex.pixelsWidth;
        var atlasHeight = tex.pixelsHeight;
        var left, right, top, bottom, tempSwap, locQuad = this._quad;
        if (node._rectRotated) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->166");
        } else {
            if (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->172");
            } else {
                left = rect.x / atlasWidth;
                right = (rect.x + rect.width) / atlasWidth;
                top = rect.y / atlasHeight;
                bottom = (rect.y + rect.height) / atlasHeight;
            }
            if (node._flippedX) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->182");
            }
            if (node._flippedY) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->187");
            }
            locQuad.bl.texCoords.u = left;
            locQuad.bl.texCoords.v = bottom;
            locQuad.br.texCoords.u = right;
            locQuad.br.texCoords.v = bottom;
            locQuad.tl.texCoords.u = left;
            locQuad.tl.texCoords.v = top;
            locQuad.tr.texCoords.u = right;
            locQuad.tr.texCoords.v = top;
        }
        this._quadDirty = true;
    };
    proto.transform = function(parentCmd, recursive) {
        cc.Node.WebGLRenderCmd.prototype.transform.call(this, parentCmd, recursive);
        this._dirty = true;
    };
    proto._setColorDirty = function() {};
    proto._updateColor = function() {
        var locDisplayedColor = this._displayedColor, locDisplayedOpacity = this._displayedOpacity, node = this._node;
        var color4 = {
            r: locDisplayedColor.r,
            g: locDisplayedColor.g,
            b: locDisplayedColor.b,
            a: locDisplayedOpacity
        };
        if (node._opacityModifyRGB) {
            color4.r *= locDisplayedOpacity / 255;
            color4.g *= locDisplayedOpacity / 255;
            color4.b *= locDisplayedOpacity / 255;
        }
        var locQuad = this._quad;
        locQuad.bl.colors = color4;
        locQuad.br.colors = color4;
        locQuad.tl.colors = color4;
        locQuad.tr.colors = color4;
        if (node._batchNode) {
            if (node.atlasIndex != cc.Sprite.INDEX_NOT_INITIALIZED) {
                node.textureAtlas.updateQuad(locQuad, node.atlasIndex);
            } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->227");
            }
        }
        this._quadDirty = true;
    };
    proto._updateBlendFunc = function() {
        if (this._batchNode) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->235");
        }
        var node = this._node;
        if (!node._texture || !node._texture.hasPremultipliedAlpha()) {
            node._blendFunc.src = cc.SRC_ALPHA;
            node._blendFunc.dst = cc.ONE_MINUS_SRC_ALPHA;
            node.opacityModifyRGB = false;
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->245");
        }
    };
    proto._setTexture = function(texture) {
        var node = this._node;
        if (node._batchNode) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->254");
        } else {
            if (node._texture != texture) {
                node._textureLoaded = texture ? texture._textureLoaded : false;
                node._texture = texture;
                this._updateBlendFunc();
            }
        }
        if (texture) {
            this._shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR);
        } else {
            this._shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_COLOR);
        }
    };
    proto.updateTransform = function() {
        var _t = this, node = this._node;
        if (this._dirty) {
            var locQuad = _t._quad, locParent = node._parent;
            if (!node._visible || locParent && locParent != node._batchNode && locParent._shouldBeHidden) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->278");
            } else {
                node._shouldBeHidden = false;
                if (this._dirtyFlag !== 0) {
                    this.updateStatus();
                    this._dirtyFlag = 0;
                }
                if (!locParent || locParent == node._batchNode) {
                    node._transformToBatch = _t.getNodeToParentTransform();
                } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->288");
                }
                var locTransformToBatch = node._transformToBatch;
                var rect = node._rect;
                var x1 = node._offsetPosition.x;
                var y1 = node._offsetPosition.y;
                var x2 = x1 + rect.width;
                var y2 = y1 + rect.height;
                var x = locTransformToBatch.tx;
                var y = locTransformToBatch.ty;
                var cr = locTransformToBatch.a;
                var sr = locTransformToBatch.b;
                var cr2 = locTransformToBatch.d;
                var sr2 = -locTransformToBatch.c;
                var ax = x1 * cr - y1 * sr2 + x;
                var ay = x1 * sr + y1 * cr2 + y;
                var bx = x2 * cr - y1 * sr2 + x;
                var by = x2 * sr + y1 * cr2 + y;
                var cx = x2 * cr - y2 * sr2 + x;
                var cy = x2 * sr + y2 * cr2 + y;
                var dx = x1 * cr - y2 * sr2 + x;
                var dy = x1 * sr + y2 * cr2 + y;
                var locVertexZ = node._vertexZ;
                if (!cc.SPRITEBATCHNODE_RENDER_SUBPIXEL) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->319");
                }
                locQuad.bl.vertices = {
                    x: ax,
                    y: ay,
                    z: locVertexZ
                };
                locQuad.br.vertices = {
                    x: bx,
                    y: by,
                    z: locVertexZ
                };
                locQuad.tl.vertices = {
                    x: dx,
                    y: dy,
                    z: locVertexZ
                };
                locQuad.tr.vertices = {
                    x: cx,
                    y: cy,
                    z: locVertexZ
                };
            }
            node.textureAtlas.updateQuad(locQuad, node.atlasIndex);
            node._recursiveDirty = false;
            this._dirty = false;
        }
        if (node._hasChildren) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->347");
        }
    };
    proto._checkTextureBoundary = function(texture, rect, rotated) {
        if (texture && texture.url) {
            var _x, _y;
            if (rotated) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->355");
            } else {
                _x = rect.x + rect.width;
                _y = rect.y + rect.height;
            }
            if (_x > texture.width) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->361");
            }
            if (_y > texture.height) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->364");
            }
        }
    };
    proto.rendering = function(ctx) {
        var node = this._node, locTexture = node._texture;
        if (locTexture && !locTexture._textureLoaded || this._displayedOpacity === 0) {
            return;
        }
        var gl = ctx || cc._renderContext;
        if (locTexture) {
            if (locTexture._textureLoaded) {
                this._shaderProgram.use();
                this._shaderProgram._setUniformForMVPMatrixWithMat4(this._stackMatrix);
                cc.glBlendFunc(node._blendFunc.src, node._blendFunc.dst);
                cc.glBindTexture2DN(0, locTexture);
                cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX);
                gl.bindBuffer(gl.ARRAY_BUFFER, this._quadWebBuffer);
                if (this._quadDirty) {
                    gl.bufferData(gl.ARRAY_BUFFER, this._quad.arrayBuffer, gl.DYNAMIC_DRAW);
                    this._quadDirty = false;
                }
                gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 0);
                gl.vertexAttribPointer(1, 4, gl.UNSIGNED_BYTE, true, 24, 12);
                gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 24, 16);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            }
        } else {
            this._shaderProgram.use();
            this._shaderProgram._setUniformForMVPMatrixWithMat4(this._stackMatrix);
            cc.glBlendFunc(node._blendFunc.src, node._blendFunc.dst);
            cc.glBindTexture2D(null);
            cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR);
            gl.bindBuffer(gl.ARRAY_BUFFER, this._quadWebBuffer);
            if (this._quadDirty) {
                gl.bufferData(gl.ARRAY_BUFFER, this._quad.arrayBuffer, gl.STATIC_DRAW);
                this._quadDirty = false;
            }
            gl.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, gl.FLOAT, false, 24, 0);
            gl.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, gl.UNSIGNED_BYTE, true, 24, 12);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
        cc.g_NumberOfDraws++;
        if (cc.SPRITE_DEBUG_DRAW === 0 && !node._showNode) {
            return;
        }
        cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW);
        cc.current_stack.stack.push(cc.current_stack.top);
        cc.current_stack.top = this._stackMatrix;
        if (cc.SPRITE_DEBUG_DRAW === 1 || node._showNode) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->416");
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/core/sprites/CCSpriteWebGLRenderCmd.js->423");
        }
        cc.current_stack.top = cc.current_stack.stack.pop();
    };
})();