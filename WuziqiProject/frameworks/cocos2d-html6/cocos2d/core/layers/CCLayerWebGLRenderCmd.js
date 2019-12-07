(function() {
    cc.Layer.WebGLRenderCmd = function(renderable) {
        cc.Node.WebGLRenderCmd.call(this, renderable);
    };
    var proto = cc.Layer.WebGLRenderCmd.prototype = Object.create(cc.Node.WebGLRenderCmd.prototype);
    proto.constructor = cc.Layer.WebGLRenderCmd;
    proto.bake = function() {};
    proto.unbake = function() {};
    proto._bakeForAddChild = function() {};
})();
(function() {
    cc.LayerColor.WebGLRenderCmd = function(renderable) {
        cc.Layer.WebGLRenderCmd.call(this, renderable);
        this._needDraw = true;
        var _t = this;
        _t._squareVerticesAB = new ArrayBuffer(32);
        _t._squareColorsAB = new ArrayBuffer(16);
        var locSquareVerticesAB = _t._squareVerticesAB, locSquareColorsAB = _t._squareColorsAB;
        var locVertex2FLen = cc.Vertex2F.BYTES_PER_ELEMENT, locColorLen = cc.Color.BYTES_PER_ELEMENT;
        _t._squareVertices = [ new cc.Vertex2F(0, 0, locSquareVerticesAB, 0), new cc.Vertex2F(0, 0, locSquareVerticesAB, locVertex2FLen), new cc.Vertex2F(0, 0, locSquareVerticesAB, locVertex2FLen * 2), new cc.Vertex2F(0, 0, locSquareVerticesAB, locVertex2FLen * 3) ];
        _t._squareColors = [ cc.color(0, 0, 0, 255, locSquareColorsAB, 0), cc.color(0, 0, 0, 255, locSquareColorsAB, locColorLen), cc.color(0, 0, 0, 255, locSquareColorsAB, locColorLen * 2), cc.color(0, 0, 0, 255, locSquareColorsAB, locColorLen * 3) ];
        _t._verticesFloat32Buffer = cc._renderContext.createBuffer();
        _t._colorsUint8Buffer = cc._renderContext.createBuffer();
    };
    var proto = cc.LayerColor.WebGLRenderCmd.prototype = Object.create(cc.Layer.WebGLRenderCmd.prototype);
    proto.constructor = cc.LayerColor.WebGLRenderCmd;
    cc.LayerColor.WebGLRenderCmd.prototype.rendering = function(ctx) {
        var context = ctx || cc._renderContext;
        var node = this._node;
        this._shaderProgram.use();
        this._shaderProgram._setUniformForMVPMatrixWithMat4(this._stackMatrix);
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR);
        cc.glBlendFunc(node._blendFunc.src, node._blendFunc.dst);
        context.bindBuffer(context.ARRAY_BUFFER, this._verticesFloat32Buffer);
        context.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, context.FLOAT, false, 0, 0);
        context.bindBuffer(context.ARRAY_BUFFER, this._colorsUint8Buffer);
        context.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, context.UNSIGNED_BYTE, true, 0, 0);
        context.drawArrays(context.TRIANGLE_STRIP, 0, 4);
    };
    proto._updateSquareVertices = function(size, height) {
        var locSquareVertices = this._squareVertices;
        if (height === undefined) {
            locSquareVertices[1].x = size.width;
            locSquareVertices[2].y = size.height;
            locSquareVertices[3].x = size.width;
            locSquareVertices[3].y = size.height;
        } else {
            locSquareVertices[1].x = size;
            locSquareVertices[2].y = height;
            locSquareVertices[3].x = size;
            locSquareVertices[3].y = height;
        }
        this._bindLayerVerticesBufferData();
    };
    proto._updateSquareVerticesWidth = function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->57");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->59");
    };
    proto._updateSquareVerticesHeight = function(height) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->62");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->65");
    };
    proto._updateColor = function() {
        var locDisplayedColor = this._displayedColor, locDisplayedOpacity = this._displayedOpacity, locSquareColors = this._squareColors;
        for (var i = 0; i < 4; i++) {
            locSquareColors[i].r = locDisplayedColor.r;
            locSquareColors[i].g = locDisplayedColor.g;
            locSquareColors[i].b = locDisplayedColor.b;
            locSquareColors[i].a = locDisplayedOpacity;
        }
        this._bindLayerColorsBufferData();
    };
    proto._bindLayerVerticesBufferData = function() {
        var glContext = cc._renderContext;
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._verticesFloat32Buffer);
        glContext.bufferData(glContext.ARRAY_BUFFER, this._squareVerticesAB, glContext.STATIC_DRAW);
    };
    proto._bindLayerColorsBufferData = function() {
        var glContext = cc._renderContext;
        glContext.bindBuffer(glContext.ARRAY_BUFFER, this._colorsUint8Buffer);
        glContext.bufferData(glContext.ARRAY_BUFFER, this._squareColorsAB, glContext.STATIC_DRAW);
    };
    proto.updateBlendFunc = function(blendFunc) {};
})();
(function() {
    cc.LayerGradient.WebGLRenderCmd = function(renderable) {
        cc.LayerColor.WebGLRenderCmd.call(this, renderable);
        this._needDraw = true;
    };
    var proto = cc.LayerGradient.WebGLRenderCmd.prototype = Object.create(cc.LayerColor.WebGLRenderCmd.prototype);
    cc.inject(cc.LayerGradient.RenderCmd, proto);
    proto.constructor = cc.LayerGradient.WebGLRenderCmd;
    proto._syncStatus = function(parentCmd) {
        var flags = cc.Node._dirtyFlags, locFlag = this._dirtyFlag;
        var parentNode = parentCmd ? parentCmd._node : null;
        if (parentNode && parentNode._cascadeColorEnabled && parentCmd._dirtyFlag & flags.colorDirty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->101");
        }
        if (parentNode && parentNode._cascadeOpacityEnabled && parentCmd._dirtyFlag & flags.opacityDirty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->104");
        }
        if (parentCmd && parentCmd._dirtyFlag & flags.transformDirty) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->107");
        }
        var colorDirty = locFlag & flags.colorDirty, opacityDirty = locFlag & flags.opacityDirty;
        this._dirtyFlag = locFlag;
        if (colorDirty) {
            this._syncDisplayColor();
        }
        if (opacityDirty) {
            this._syncDisplayOpacity();
        }
        this.transform(parentCmd);
        if (colorDirty || opacityDirty || locFlag & flags.gradientDirty) {
            this._updateColor();
        }
    };
    proto._updateColor = function() {
        this._dirtyFlag = this._dirtyFlag & cc.Node._dirtyFlags.gradientDirty ^ this._dirtyFlag;
        var _t = this, node = this._node;
        var locAlongVector = node._alongVector;
        var h = cc.pLength(locAlongVector);
        if (h === 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/layers/CCLayerWebGLRenderCmd.js->128");
        }
        var c = Math.sqrt(2), u = cc.p(locAlongVector.x / h, locAlongVector.y / h);
        if (node._compressedInterpolation) {
            var h2 = 1 / (Math.abs(u.x) + Math.abs(u.y));
            u = cc.pMult(u, h2 * c);
        }
        var opacityf = _t._displayedOpacity / 255;
        var locDisplayedColor = _t._displayedColor, locEndColor = node._endColor;
        var S = {
            r: locDisplayedColor.r,
            g: locDisplayedColor.g,
            b: locDisplayedColor.b,
            a: node._startOpacity * opacityf
        };
        var E = {
            r: locEndColor.r,
            g: locEndColor.g,
            b: locEndColor.b,
            a: node._endOpacity * opacityf
        };
        var locSquareColors = _t._squareColors;
        var locSquareColor0 = locSquareColors[0], locSquareColor1 = locSquareColors[1], locSquareColor2 = locSquareColors[2], locSquareColor3 = locSquareColors[3];
        locSquareColor0.r = E.r + (S.r - E.r) * ((c + u.x + u.y) / (2 * c));
        locSquareColor0.g = E.g + (S.g - E.g) * ((c + u.x + u.y) / (2 * c));
        locSquareColor0.b = E.b + (S.b - E.b) * ((c + u.x + u.y) / (2 * c));
        locSquareColor0.a = E.a + (S.a - E.a) * ((c + u.x + u.y) / (2 * c));
        locSquareColor1.r = E.r + (S.r - E.r) * ((c - u.x + u.y) / (2 * c));
        locSquareColor1.g = E.g + (S.g - E.g) * ((c - u.x + u.y) / (2 * c));
        locSquareColor1.b = E.b + (S.b - E.b) * ((c - u.x + u.y) / (2 * c));
        locSquareColor1.a = E.a + (S.a - E.a) * ((c - u.x + u.y) / (2 * c));
        locSquareColor2.r = E.r + (S.r - E.r) * ((c + u.x - u.y) / (2 * c));
        locSquareColor2.g = E.g + (S.g - E.g) * ((c + u.x - u.y) / (2 * c));
        locSquareColor2.b = E.b + (S.b - E.b) * ((c + u.x - u.y) / (2 * c));
        locSquareColor2.a = E.a + (S.a - E.a) * ((c + u.x - u.y) / (2 * c));
        locSquareColor3.r = E.r + (S.r - E.r) * ((c - u.x - u.y) / (2 * c));
        locSquareColor3.g = E.g + (S.g - E.g) * ((c - u.x - u.y) / (2 * c));
        locSquareColor3.b = E.b + (S.b - E.b) * ((c - u.x - u.y) / (2 * c));
        locSquareColor3.a = E.a + (S.a - E.a) * ((c - u.x - u.y) / (2 * c));
        _t._bindLayerColorsBufferData();
    };
})();