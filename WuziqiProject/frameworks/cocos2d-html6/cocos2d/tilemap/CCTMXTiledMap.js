cc.TMX_ORIENTATION_ORTHO = 0;
cc.TMX_ORIENTATION_HEX = 1;
cc.TMX_ORIENTATION_ISO = 2;
cc.TMXTiledMap = cc.Node.extend({
    properties: null,
    mapOrientation: null,
    objectGroups: null,
    _mapSize: null,
    _tileSize: null,
    _tileProperties: null,
    _className: "TMXTiledMap",
    ctor: function(tmxFile, resourcePath) {
        cc.Node.prototype.ctor.call(this);
        this._mapSize = cc.size(0, 0);
        this._tileSize = cc.size(0, 0);
        if (resourcePath !== undefined) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->17");
        } else {
            if (tmxFile !== undefined) {
                this.initWithTMXFile(tmxFile);
            }
        }
    },
    getMapSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->25");
    },
    setMapSize: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->29");
    },
    _getMapWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->32");
    },
    _setMapWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->35");
    },
    _getMapHeight: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->38");
    },
    _setMapHeight: function(height) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->41");
    },
    getTileSize: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->44");
    },
    setTileSize: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->48");
    },
    _getTileWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->51");
    },
    _setTileWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->54");
    },
    _getTileHeight: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->57");
    },
    _setTileHeight: function(height) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->60");
    },
    getMapOrientation: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->63");
    },
    setMapOrientation: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->66");
    },
    getObjectGroups: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->69");
    },
    setObjectGroups: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->72");
    },
    getProperties: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->75");
    },
    setProperties: function(Var) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->78");
    },
    initWithTMXFile: function(tmxFile) {
        if (!tmxFile || tmxFile.length == 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->82");
        }
        this.width = 0;
        this.height = 0;
        var mapInfo = new cc.TMXMapInfo(tmxFile);
        if (!mapInfo) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->88");
        }
        var locTilesets = mapInfo.getTilesets();
        if (!locTilesets || locTilesets.length === 0) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->92");
        }
        this._buildWithMapInfo(mapInfo);
        return true;
    },
    initWithXML: function(tmxString, resourcePath) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->103");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->104");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->105");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->106");
    },
    _buildWithMapInfo: function(mapInfo) {
        this._mapSize = mapInfo.getMapSize();
        this._tileSize = mapInfo.getTileSize();
        this.mapOrientation = mapInfo.orientation;
        this.objectGroups = mapInfo.getObjectGroups();
        this.properties = mapInfo.properties;
        this._tileProperties = mapInfo.getTileProperties();
        var idx = 0;
        var layers = mapInfo.getLayers();
        if (layers) {
            var layerInfo = null;
            for (var i = 0, len = layers.length; i < len; i++) {
                layerInfo = layers[i];
                if (layerInfo && layerInfo.visible) {
                    var child = this._parseLayer(layerInfo, mapInfo);
                    this.addChild(child, idx, idx);
                    this.width = Math.max(this.width, child.width);
                    this.height = Math.max(this.height, child.height);
                    idx++;
                }
            }
        }
    },
    allLayers: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->135");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->136");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->137");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->139");
    },
    getLayer: function(layerName) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->150");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->151");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->152");
    },
    getObjectGroup: function(groupName) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->166");
    },
    getProperty: function(propertyName) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->169");
    },
    propertiesForGID: function(GID) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->173");
    },
    getPropertiesForGID: function(GID) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->176");
    },
    _parseLayer: function(layerInfo, mapInfo) {
        var tileset = this._tilesetForLayer(layerInfo, mapInfo);
        var layer = new cc.TMXLayer(tileset, layerInfo, mapInfo);
        layerInfo.ownTiles = false;
        layer.setupTiles();
        return layer;
    },
    _tilesetForLayer: function(layerInfo, mapInfo) {
        var size = layerInfo._layerSize;
        var tilesets = mapInfo.getTilesets();
        if (tilesets) {
            for (var i = tilesets.length - 1; i >= 0; i--) {
                var tileset = tilesets[i];
                if (tileset) {
                    for (var y = 0; y < size.height; y++) {
                        for (var x = 0; x < size.width; x++) {
                            var pos = x + size.width * y;
                            var gid = layerInfo._tiles[pos];
                            if (gid != 0) {
                                if ((gid & cc.TMX_TILE_FLIPPED_MASK) >>> 0 >= tileset.firstGid) {
                                    return tileset;
                                }
                            }
                        }
                    }
                }
            }
        }
        cc.log("cocos2d: Warning: TMX Layer " + layerInfo.name + " has no tiles");
        return null;
    }
});
var _p = cc.TMXTiledMap.prototype;
_p.mapWidth;
cc.defineGetterSetter(_p, "mapWidth", _p._getMapWidth, _p._setMapWidth);
_p.mapHeight;
cc.defineGetterSetter(_p, "mapHeight", _p._getMapHeight, _p._setMapHeight);
_p.tileWidth;
cc.defineGetterSetter(_p, "tileWidth", _p._getTileWidth, _p._setTileWidth);
_p.tileHeight;
cc.defineGetterSetter(_p, "tileHeight", _p._getTileHeight, _p._setTileHeight);
cc.TMXTiledMap.create = function(tmxFile, resourcePath) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXTiledMap.js->220");
};