if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
    (function() {
        cc.DirectorDelegate = cc.Class.extend({
            updateProjection: function() {}
        });
        var _p = cc.Director.prototype;
        _p.setProjection = function(projection) {
            var _t = this;
            var size = _t._winSizeInPoints;
            _t.setViewport();
            var view = _t._openGLView, ox = view._viewPortRect.x / view._scaleX, oy = view._viewPortRect.y / view._scaleY;
            switch (projection) {
              case cc.Director.PROJECTION_2D:
                cc.kmGLMatrixMode(cc.KM_GL_PROJECTION);
                cc.kmGLLoadIdentity();
                var orthoMatrix = new cc.kmMat4;
                cc.kmMat4OrthographicProjection(orthoMatrix, -ox, size.width - ox, -oy, size.height - oy, -1024, 1024);
                cc.kmGLMultMatrix(orthoMatrix);
                cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW);
                cc.kmGLLoadIdentity();
                break;
              case cc.Director.PROJECTION_3D:
                var zeye = _t.getZEye();
                var matrixPerspective = new cc.kmMat4, matrixLookup = new cc.kmMat4;
                cc.kmGLMatrixMode(cc.KM_GL_PROJECTION);
                cc.kmGLLoadIdentity();
                cc.kmMat4PerspectiveProjection(matrixPerspective, 60, size.width / size.height, .1, zeye * 2);
                cc.kmGLMultMatrix(matrixPerspective);
                cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW);
                cc.kmGLLoadIdentity();
                var eye = cc.kmVec3Fill(null, -ox + size.width / 2, -oy + size.height / 2, zeye);
                var center = cc.kmVec3Fill(null, -ox + size.width / 2, -oy + size.height / 2, 0);
                var up = cc.kmVec3Fill(null, 0, 1, 0);
                cc.kmMat4LookAt(matrixLookup, eye, center, up);
                cc.kmGLMultMatrix(matrixLookup);
                break;
              case cc.Director.PROJECTION_CUSTOM:
                if (_t._projectionDelegate) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->39");
                }
                break;
              default:
                cc.log(cc._LogInfos.Director_setProjection);
                break;
            }
            _t._projection = projection;
            cc.eventManager.dispatchEvent(_t._eventProjectionChanged);
            cc.setProjectionMatrixDirty();
            cc.renderer.childrenOrderDirty = true;
        };
        _p.setDepthTest = function(on) {
            var loc_gl = cc._renderContext;
            if (on) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->56");
            } else {
                loc_gl.disable(loc_gl.DEPTH_TEST);
            }
        };
        _p.setOpenGLView = function(openGLView) {
            var _t = this;
            _t._winSizeInPoints.width = cc._canvas.width;
            _t._winSizeInPoints.height = cc._canvas.height;
            _t._openGLView = openGLView || cc.view;
            var conf = cc.configuration;
            conf.gatherGPUInfo();
            conf.dumpInfo();
            _t._createStatsLabel();
            _t.setGLDefaultValues();
            if (cc.eventManager) {
                cc.eventManager.setEnabled(true);
            }
        };
        _p._clear = function() {
            var gl = cc._renderContext;
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        };
        _p._beforeVisitScene = function() {
            cc.kmGLPushMatrix();
        };
        _p._afterVisitScene = function() {
            cc.kmGLPopMatrix();
        };
        _p._createStatsLabel = function() {
            var _t = this;
            if (!cc.LabelAtlas) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->89");
            }
            if (cc.Director._fpsImageLoaded == null || cc.Director._fpsImageLoaded == false) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->92");
            }
            var texture = new cc.Texture2D;
            texture.initWithElement(cc.Director._fpsImage);
            texture.handleLoadedTexture();
            var factor = cc.view.getDesignResolutionSize().height / 320;
            if (factor === 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->99");
            }
            var tmpLabel = new cc.LabelAtlas;
            tmpLabel._setIgnoreContentScaleFactor(true);
            tmpLabel.initWithString("00.0", texture, 12, 32, ".");
            tmpLabel.scale = factor;
            _t._FPSLabel = tmpLabel;
            tmpLabel = new cc.LabelAtlas;
            tmpLabel._setIgnoreContentScaleFactor(true);
            tmpLabel.initWithString("0.000", texture, 12, 32, ".");
            tmpLabel.scale = factor;
            _t._SPFLabel = tmpLabel;
            tmpLabel = new cc.LabelAtlas;
            tmpLabel._setIgnoreContentScaleFactor(true);
            tmpLabel.initWithString("000", texture, 12, 32, ".");
            tmpLabel.scale = factor;
            _t._drawsLabel = tmpLabel;
            var locStatsPosition = cc.DIRECTOR_STATS_POSITION;
            _t._drawsLabel.setPosition(locStatsPosition.x, 34 * factor + locStatsPosition.y);
            _t._SPFLabel.setPosition(locStatsPosition.x, 17 * factor + locStatsPosition.y);
            _t._FPSLabel.setPosition(locStatsPosition);
        };
        _p._createStatsLabelForCanvas = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->135");
        };
        _p.convertToGL = function(uiPoint) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->147");
        };
        _p.convertToUI = function(glPoint) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->156");
        };
        _p.getVisibleSize = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->159");
        };
        _p.getVisibleOrigin = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->162");
        };
        _p.getZEye = function() {
            return this._winSizeInPoints.height / 1.1566;
        };
        _p.setViewport = function() {
            var view = this._openGLView;
            if (view) {
                var locWinSizeInPoints = this._winSizeInPoints;
                view.setViewPortInPoints(-view._viewPortRect.x / view._scaleX, -view._viewPortRect.y / view._scaleY, locWinSizeInPoints.width, locWinSizeInPoints.height);
            }
        };
        _p.getOpenGLView = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->175");
        };
        _p.getProjection = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->178");
        };
        _p.setAlphaBlending = function(on) {
            if (on) {
                cc.glBlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
            } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/CCDirectorWebGL.js->184");
            }
        };
        _p.setGLDefaultValues = function() {
            var _t = this;
            _t.setAlphaBlending(true);
            _t.setDepthTest(false);
            _t.setProjection(_t._projection);
            cc._renderContext.clearColor(0, 0, 0, 1);
        };
    })();
}