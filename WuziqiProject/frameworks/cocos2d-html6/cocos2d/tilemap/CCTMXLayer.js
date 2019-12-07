cc.TMXLayer = cc.SpriteBatchNode.extend({
    tiles: null,
    tileset: null,
    layerOrientation: null,
    properties: null,
    layerName: "",
    _layerSize: null,
    _mapTileSize: null,
    _opacity: 255,
    _minGID: null,
    _maxGID: null,
    _vertexZvalue: null,
    _useAutomaticVertexZ: null,
    _reusedTile: null,
    _atlasIndexArray: null,
    _contentScaleFactor: null,
    _className: "TMXLayer",
    ctor: function(tilesetInfo, layerInfo, mapInfo) {
        cc.SpriteBatchNode.prototype.ctor.call(this);
        this._descendants = [];
        this._layerSize = cc.size(0, 0);
        this._mapTileSize = cc.size(0, 0);
        if (mapInfo !== undefined) {
            this.initWithTilesetInfo(tilesetInfo, layerInfo, mapInfo);
        }
    },
    _createRenderCmd: function() {
        if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->29");
        } else {
            return new cc.TMXLayer.WebGLRenderCmd(this);
        }
    },
    setContentSize: function(size, height) {
        cc.Node.prototype.setContentSize.call(this, size, height);
        this._renderCmd._updateCacheContext(size, height);
    },
    getTexture: function() {
        return this._renderCmd.getTexture();
    },
    getLayerSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->42");
    },
    setLayerSize: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->46");
    },
    _getLayerWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->49");
    },
    _setLayerWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->52");
    },
    _getLayerHeight: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->55");
    },
    _setLayerHeight: function(height) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->58");
    },
    getMapTileSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->61");
    },
    setMapTileSize: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->65");
    },
    _getTileWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->68");
    },
    _setTileWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->71");
    },
    _getTileHeight: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->74");
    },
    _setTileHeight: function(height) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->77");
    },
    getTiles: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->80");
    },
    setTiles: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->83");
    },
    getTileset: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->86");
    },
    setTileset: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->89");
    },
    getLayerOrientation: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->92");
    },
    setLayerOrientation: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->95");
    },
    getProperties: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->98");
    },
    setProperties: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->101");
    },
    initWithTilesetInfo: function(tilesetInfo, layerInfo, mapInfo) {
        var size = layerInfo._layerSize;
        var totalNumberOfTiles = parseInt(size.width * size.height);
        var capacity = totalNumberOfTiles * .35 + 1;
        var texture;
        if (tilesetInfo) {
            texture = cc.textureCache.addImage(tilesetInfo.sourceImage);
        }
        if (this.initWithTexture(texture, capacity)) {
            this.layerName = layerInfo.name;
            this._layerSize = size;
            this.tiles = layerInfo._tiles;
            this._minGID = layerInfo._minGID;
            this._maxGID = layerInfo._maxGID;
            this._opacity = layerInfo._opacity;
            this.properties = layerInfo.properties;
            this._contentScaleFactor = cc.director.getContentScaleFactor();
            this.tileset = tilesetInfo;
            this._mapTileSize = mapInfo.getTileSize();
            this.layerOrientation = mapInfo.orientation;
            var offset = this._calculateLayerOffset(layerInfo.offset);
            this.setPosition(cc.pointPixelsToPoints(offset));
            this._atlasIndexArray = [];
            this.setContentSize(cc.sizePixelsToPoints(cc.size(this._layerSize.width * this._mapTileSize.width, this._layerSize.height * this._mapTileSize.height)));
            this._useAutomaticVertexZ = false;
            this._vertexZvalue = 0;
            return true;
        }
        return false;
    },
    releaseMap: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->139");
    },
    getTileAt: function(pos, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->152");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->175");
    },
    getTileGIDAt: function(pos, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->193");
    },
    getTileFlagsAt: function(pos, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->211");
    },
    setTileGID: function(gid, posOrX, flagsOrY, flags) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->262");
    },
    removeTileAt: function(pos, y) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->295");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->303");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->307");
    },
    getPositionAt: function(pos, y) {
        if (y !== undefined) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->311");
        }
        var ret = cc.p(0, 0);
        switch (this.layerOrientation) {
          case cc.TMX_ORIENTATION_ORTHO:
            ret = this._positionForOrthoAt(pos);
            break;
          case cc.TMX_ORIENTATION_ISO:
            ret = this._positionForIsoAt(pos);
            break;
          case cc.TMX_ORIENTATION_HEX:
            ret = this._positionForHexAt(pos);
            break;
        }
        return cc.pointPixelsToPoints(ret);
    },
    getProperty: function(propertyName) {
        return this.properties[propertyName];
    },
    setupTiles: function() {
        this._renderCmd.initImageSize();
        this._parseInternalProperties();
        if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->334");
        }
        var locLayerHeight = this._layerSize.height, locLayerWidth = this._layerSize.width;
        for (var y = 0; y < locLayerHeight; y++) {
            for (var x = 0; x < locLayerWidth; x++) {
                var pos = x + locLayerWidth * y;
                var gid = this.tiles[pos];
                if (gid !== 0) {
                    this._appendTileForGID(gid, cc.p(x, y));
                    this._minGID = Math.min(gid, this._minGID);
                    this._maxGID = Math.max(gid, this._maxGID);
                }
            }
        }
        if (!(this._maxGID >= this.tileset.firstGid && this._minGID >= this.tileset.firstGid)) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->349");
        }
    },
    addChild: function(child, zOrder, tag) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->353");
    },
    removeChild: function(sprite, cleanup) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->356");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->357");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->358");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->359");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->360");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->363");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->369");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->371");
    },
    getLayerName: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->374");
    },
    setLayerName: function(layerName) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->377");
    },
    _positionForIsoAt: function(pos) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->380");
    },
    _positionForOrthoAt: function(pos) {
        return cc.p(pos.x * this._mapTileSize.width, (this._layerSize.height - pos.y - 1) * this._mapTileSize.height);
    },
    _positionForHexAt: function(pos) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->387");
    },
    _calculateLayerOffset: function(pos) {
        var ret = cc.p(0, 0);
        switch (this.layerOrientation) {
          case cc.TMX_ORIENTATION_ORTHO:
            ret = cc.p(pos.x * this._mapTileSize.width, -pos.y * this._mapTileSize.height);
            break;
          case cc.TMX_ORIENTATION_ISO:
            ret = cc.p(this._mapTileSize.width / 2 * (pos.x - pos.y), this._mapTileSize.height / 2 * (-pos.x - pos.y));
            break;
          case cc.TMX_ORIENTATION_HEX:
            if (pos.x !== 0 || pos.y !== 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->400");
            }
            break;
        }
        return ret;
    },
    _appendTileForGID: function(gid, pos) {
        var rect = this.tileset.rectForGID(gid);
        rect = cc.rectPixelsToPoints(rect);
        var z = 0 | pos.x + pos.y * this._layerSize.width;
        var tile = this._renderCmd._reusedTileWithRect(rect);
        this._setupTileSprite(tile, pos, gid);
        var indexForZ = this._atlasIndexArray.length;
        this.insertQuadFromSprite(tile, indexForZ);
        this._atlasIndexArray.splice(indexForZ, 0, z);
        return tile;
    },
    _insertTileForGID: function(gid, pos) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->428");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->430");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->431");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->432");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->433");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->439");
    },
    _updateTileForGID: function(gid, pos) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->442");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->445");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->446");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->447");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->448");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->449");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->450");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->451");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->452");
    },
    _parseInternalProperties: function() {
        var vertexz = this.getProperty("cc_vertexz");
        if (vertexz) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->457");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->458");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->459");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->460");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->461");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->462");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->463");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->464");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->465");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->466");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->467");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->468");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->469");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->470");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->471");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->472");
        }
    },
    _setupTileSprite: function(sprite, pos, gid) {
        var z = pos.x + pos.y * this._layerSize.width;
        sprite.setPosition(this.getPositionAt(pos));
        if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
            sprite.vertexZ = this._vertexZForPos(pos);
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->481");
        }
        sprite.anchorX = 0;
        sprite.anchorY = 0;
        sprite.opacity = this._opacity;
        if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
            sprite.rotation = 0;
        }
        sprite.setFlippedX(false);
        sprite.setFlippedY(false);
        if ((gid & cc.TMX_TILE_DIAGONAL_FLAG) >>> 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->492");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->493");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->494");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->495");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->496");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->497");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->498");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->499");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->500");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->501");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->502");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->503");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->504");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->505");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->506");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->507");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->508");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->509");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->510");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->511");
        } else {
            if ((gid & cc.TMX_TILE_HORIZONTAL_FLAG) >>> 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->514");
            }
            if ((gid & cc.TMX_TILE_VERTICAL_FLAG) >>> 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->517");
            }
        }
    },
    _vertexZForPos: function(pos) {
        var ret = 0;
        var maxVal = 0;
        if (this._useAutomaticVertexZ) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->525");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->526");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->527");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->528");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->529");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->530");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->531");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->532");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->533");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->534");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->535");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->536");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->537");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->538");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->539");
        } else {
            ret = this._vertexZvalue;
        }
        return ret;
    },
    _atlasIndexForExistantZ: function(z) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->546");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->547");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->548");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->549");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->550");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->551");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->552");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->553");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->554");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->555");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->556");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->557");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->558");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->559");
    },
    _atlasIndexForNewZ: function(z) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->562");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->563");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->564");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->565");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->566");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->567");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->568");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->569");
    }
});
var _p = cc.TMXLayer.prototype;
cc.defineGetterSetter(_p, "texture", _p.getTexture, _p.setTexture);
_p.layerWidth;
cc.defineGetterSetter(_p, "layerWidth", _p._getLayerWidth, _p._setLayerWidth);
_p.layerHeight;
cc.defineGetterSetter(_p, "layerHeight", _p._getLayerHeight, _p._setLayerHeight);
_p.tileWidth;
cc.defineGetterSetter(_p, "tileWidth", _p._getTileWidth, _p._setTileWidth);
_p.tileHeight;
cc.defineGetterSetter(_p, "tileHeight", _p._getTileHeight, _p._setTileHeight);
cc.TMXLayer.create = function(tilesetInfo, layerInfo, mapInfo) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXLayer.js->583");
};