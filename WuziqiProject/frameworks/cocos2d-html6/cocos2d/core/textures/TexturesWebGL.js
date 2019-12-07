cc._tmp.WebGLTexture2D = function() {
    cc.Texture2D = cc.Class.extend({
        _pVRHaveAlphaPremultiplied: true,
        _pixelFormat: null,
        _pixelsWide: 0,
        _pixelsHigh: 0,
        _name: "",
        _contentSize: null,
        maxS: 0,
        maxT: 0,
        _hasPremultipliedAlpha: false,
        _hasMipmaps: false,
        shaderProgram: null,
        _textureLoaded: false,
        _htmlElementObj: null,
        _webTextureObj: null,
        url: null,
        ctor: function() {
            this._contentSize = cc.size(0, 0);
            this._pixelFormat = cc.Texture2D.defaultPixelFormat;
        },
        releaseTexture: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->26");
        },
        getPixelFormat: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->29");
        },
        getPixelsWide: function() {
            return this._pixelsWide;
        },
        getPixelsHigh: function() {
            return this._pixelsHigh;
        },
        getName: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->38");
        },
        getContentSize: function() {
            return cc.size(this._contentSize.width / cc.contentScaleFactor(), this._contentSize.height / cc.contentScaleFactor());
        },
        _getWidth: function() {
            return this._contentSize.width / cc.contentScaleFactor();
        },
        _getHeight: function() {
            return this._contentSize.height / cc.contentScaleFactor();
        },
        getContentSizeInPixels: function() {
            return this._contentSize;
        },
        getMaxS: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->53");
        },
        setMaxS: function(maxS) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->56");
        },
        getMaxT: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->59");
        },
        setMaxT: function(maxT) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->62");
        },
        getShaderProgram: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->65");
        },
        setShaderProgram: function(shaderProgram) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->68");
        },
        hasPremultipliedAlpha: function() {
            return this._hasPremultipliedAlpha;
        },
        hasMipmaps: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->74");
        },
        description: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->78");
        },
        releaseData: function(data) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->81");
        },
        keepData: function(data, length) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->84");
        },
        initWithData: function(data, pixelFormat, pixelsWide, pixelsHigh, contentSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->151");
        },
        drawAtPoint: function(point) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->165");
        },
        drawInRect: function(rect) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->178");
        },
        initWithImage: function(uiImage) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->193");
        },
        initWithElement: function(element) {
            if (!element) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->197");
            }
            this._webTextureObj = cc._renderContext.createTexture();
            this._htmlElementObj = element;
            this._textureLoaded = true;
        },
        getHtmlElementObj: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->204");
        },
        isLoaded: function() {
            return this._textureLoaded;
        },
        handleLoadedTexture: function() {
            var self = this;
            if (!cc._rendererInitialized) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->212");
            }
            if (!self._htmlElementObj) {
                var img = cc.loader.getRes(self.url);
                if (!img) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->217");
                }
                self.initWithElement(img);
            }
            if (!self._htmlElementObj.width || !self._htmlElementObj.height) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->222");
            }
            var gl = cc._renderContext;
            cc.glBindTexture2D(self);
            gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self._htmlElementObj);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            self.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURE);
            cc.glBindTexture2D(null);
            var pixelsWide = self._htmlElementObj.width;
            var pixelsHigh = self._htmlElementObj.height;
            self._pixelsWide = self._contentSize.width = pixelsWide;
            self._pixelsHigh = self._contentSize.height = pixelsHigh;
            self._pixelFormat = cc.Texture2D.PIXEL_FORMAT_RGBA8888;
            self.maxS = 1;
            self.maxT = 1;
            self._hasPremultipliedAlpha = false;
            self._hasMipmaps = false;
            self.dispatchEvent("load");
        },
        initWithString: function(text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->247");
        },
        initWithETCFile: function(file) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->251");
        },
        initWithPVRFile: function(file) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->255");
        },
        initWithPVRTCData: function(data, level, bpp, hasAlpha, length, pixelFormat) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->259");
        },
        setTexParameters: function(texParams, magFilter, wrapS, wrapT) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->277");
        },
        setAntiAliasTexParameters: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->287");
        },
        setAliasTexParameters: function() {
            var gl = cc._renderContext;
            cc.glBindTexture2D(this);
            if (!this._hasMipmaps) {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            } else {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->295");
            }
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        },
        generateMipmap: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->303");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->304");
        },
        stringForFormat: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->307");
        },
        bitsPerPixelForFormat: function(format) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->316");
        },
        _initPremultipliedATextureWithImage: function(uiImage, width, height) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->319");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->320");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->321");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->324");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->325");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->337");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->355");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->356");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->357");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->358");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->363");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->369");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->391");
        },
        addLoadedEventListener: function(callback, target) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->394");
        },
        removeLoadedEventListener: function(target) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->397");
        }
    });
};
cc._tmp.WebGLTextureAtlas = function() {
    var _p = cc.TextureAtlas.prototype;
    _p._setupVBO = function() {
        var _t = this;
        var gl = cc._renderContext;
        _t._buffersVBO[0] = gl.createBuffer();
        _t._buffersVBO[1] = gl.createBuffer();
        _t._quadsWebBuffer = gl.createBuffer();
        _t._mapBuffers();
    };
    _p._mapBuffers = function() {
        var _t = this;
        var gl = cc._renderContext;
        gl.bindBuffer(gl.ARRAY_BUFFER, _t._quadsWebBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, _t._quadsArrayBuffer, gl.DYNAMIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _t._buffersVBO[1]);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, _t._indices, gl.STATIC_DRAW);
    };
    _p.drawNumberOfQuads = function(n, start) {
        var _t = this;
        start = start || 0;
        if (0 === n || !_t.texture || !_t.texture.isLoaded()) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->423");
        }
        var gl = cc._renderContext;
        cc.glBindTexture2D(_t.texture);
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX);
        gl.bindBuffer(gl.ARRAY_BUFFER, _t._quadsWebBuffer);
        if (_t.dirty) {
            gl.bufferData(gl.ARRAY_BUFFER, _t._quadsArrayBuffer, gl.DYNAMIC_DRAW);
            _t.dirty = false;
        }
        gl.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, gl.FLOAT, false, 24, 0);
        gl.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, gl.UNSIGNED_BYTE, true, 24, 12);
        gl.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, gl.FLOAT, false, 24, 16);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _t._buffersVBO[1]);
        if (cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->438");
        } else {
            gl.drawElements(gl.TRIANGLES, n * 6, gl.UNSIGNED_SHORT, start * 6 * _t._indices.BYTES_PER_ELEMENT);
        }
        cc.g_NumberOfDraws++;
    };
};
cc._tmp.WebGLTextureCache = function() {
    var _p = cc.textureCache;
    _p.handleLoadedTexture = function(url) {
        var locTexs = this._textures;
        if (!cc._rendererInitialized) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->450");
        }
        var tex = locTexs[url];
        if (!tex) {
            tex = locTexs[url] = new cc.Texture2D;
            tex.url = url;
        }
        tex.handleLoadedTexture();
    };
    _p.addImage = function(url, cb, target) {
        cc.assert(url, cc._LogInfos.Texture2D_addImage_2);
        var locTexs = this._textures;
        if (!cc._rendererInitialized) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->463");
        }
        var tex = locTexs[url] || locTexs[cc.loader._aliases[url]];
        if (tex) {
            cb && cb.call(target, tex);
            return tex;
        }
        tex = locTexs[url] = new cc.Texture2D;
        tex.url = url;
        var loadFunc = cc.loader._checkIsImageURL(url) ? cc.loader.load : cc.loader.loadImg;
        loadFunc.call(cc.loader, url, function(err, img) {
            if (err) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/textures/TexturesWebGL.js->475");
            }
            cc.textureCache.handleLoadedTexture(url);
            var texResult = locTexs[url];
            cb && cb.call(target, texResult);
        });
        return tex;
    };
    _p = null;
};