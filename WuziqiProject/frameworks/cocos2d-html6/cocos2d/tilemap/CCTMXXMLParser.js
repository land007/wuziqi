cc.TMX_PROPERTY_NONE = 0;
cc.TMX_PROPERTY_MAP = 1;
cc.TMX_PROPERTY_LAYER = 2;
cc.TMX_PROPERTY_OBJECTGROUP = 3;
cc.TMX_PROPERTY_OBJECT = 4;
cc.TMX_PROPERTY_TILE = 5;
cc.TMX_TILE_HORIZONTAL_FLAG = 2147483648;
cc.TMX_TILE_VERTICAL_FLAG = 1073741824;
cc.TMX_TILE_DIAGONAL_FLAG = 536870912;
cc.TMX_TILE_FLIPPED_ALL = (cc.TMX_TILE_HORIZONTAL_FLAG | cc.TMX_TILE_VERTICAL_FLAG | cc.TMX_TILE_DIAGONAL_FLAG) >>> 0;
cc.TMX_TILE_FLIPPED_MASK = ~cc.TMX_TILE_FLIPPED_ALL >>> 0;
cc.TMXLayerInfo = cc.Class.extend({
    properties: null,
    name: "",
    _layerSize: null,
    _tiles: null,
    visible: null,
    _opacity: null,
    ownTiles: true,
    _minGID: 1e5,
    _maxGID: 0,
    offset: null,
    ctor: function() {
        this.properties = [];
        this.name = "";
        this._layerSize = null;
        this._tiles = [];
        this.visible = true;
        this._opacity = 0;
        this.ownTiles = true;
        this._minGID = 1e5;
        this._maxGID = 0;
        this.offset = cc.p(0, 0);
    },
    getProperties: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->36");
    },
    setProperties: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->39");
    }
});
cc.TMXTilesetInfo = cc.Class.extend({
    name: "",
    firstGid: 0,
    _tileSize: null,
    spacing: 0,
    margin: 0,
    sourceImage: "",
    imageSize: null,
    ctor: function() {
        this._tileSize = cc.size(0, 0);
        this.imageSize = cc.size(0, 0);
    },
    rectForGID: function(gid) {
        var rect = cc.rect(0, 0, 0, 0);
        rect.width = this._tileSize.width;
        rect.height = this._tileSize.height;
        gid &= cc.TMX_TILE_FLIPPED_MASK;
        gid = gid - parseInt(this.firstGid, 10);
        var max_x = parseInt((this.imageSize.width - this.margin * 2 + this.spacing) / (this._tileSize.width + this.spacing), 10);
        rect.x = parseInt(gid % max_x * (this._tileSize.width + this.spacing) + this.margin, 10);
        rect.y = parseInt(parseInt(gid / max_x, 10) * (this._tileSize.height + this.spacing) + this.margin, 10);
        return rect;
    }
});
cc.TMXMapInfo = cc.SAXParser.extend({
    properties: null,
    orientation: null,
    parentElement: null,
    parentGID: null,
    layerAttrs: 0,
    storingCharacters: false,
    tmxFileName: null,
    currentString: null,
    _objectGroups: null,
    _mapSize: null,
    _tileSize: null,
    _layers: null,
    _tilesets: null,
    _tileProperties: null,
    _resources: "",
    _currentFirstGID: 0,
    ctor: function(tmxFile, resourcePath) {
        cc.SAXParser.prototype.ctor.apply(this);
        this._mapSize = cc.size(0, 0);
        this._tileSize = cc.size(0, 0);
        this._layers = [];
        this._tilesets = [];
        this._objectGroups = [];
        this.properties = [];
        this._tileProperties = {};
        this._currentFirstGID = 0;
        if (resourcePath !== undefined) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->94");
        } else {
            if (tmxFile !== undefined) {
                this.initWithTMXFile(tmxFile);
            }
        }
    },
    getOrientation: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->102");
    },
    setOrientation: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->105");
    },
    getMapSize: function() {
        return cc.size(this._mapSize.width, this._mapSize.height);
    },
    setMapSize: function(value) {
        this._mapSize.width = value.width;
        this._mapSize.height = value.height;
    },
    _getMapWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->115");
    },
    _setMapWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->118");
    },
    _getMapHeight: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->121");
    },
    _setMapHeight: function(height) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->124");
    },
    getTileSize: function() {
        return cc.size(this._tileSize.width, this._tileSize.height);
    },
    setTileSize: function(value) {
        this._tileSize.width = value.width;
        this._tileSize.height = value.height;
    },
    _getTileWidth: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->134");
    },
    _setTileWidth: function(width) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->137");
    },
    _getTileHeight: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->140");
    },
    _setTileHeight: function(height) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->143");
    },
    getLayers: function() {
        return this._layers;
    },
    setLayers: function(value) {
        this._layers.push(value);
    },
    getTilesets: function() {
        return this._tilesets;
    },
    setTilesets: function(value) {
        this._tilesets.push(value);
    },
    getObjectGroups: function() {
        return this._objectGroups;
    },
    setObjectGroups: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->161");
    },
    getParentElement: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->164");
    },
    setParentElement: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->167");
    },
    getParentGID: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->170");
    },
    setParentGID: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->173");
    },
    getLayerAttribs: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->176");
    },
    setLayerAttribs: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->179");
    },
    getStoringCharacters: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->182");
    },
    setStoringCharacters: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->185");
    },
    getProperties: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->188");
    },
    setProperties: function(value) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->191");
    },
    initWithTMXFile: function(tmxFile) {
        this._internalInit(tmxFile, null);
        return this.parseXMLFile(tmxFile);
    },
    initWithXML: function(tmxString, resourcePath) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->199");
    },
    parseXMLFile: function(tmxFile, isXmlString) {
        isXmlString = isXmlString || false;
        var xmlStr = isXmlString ? tmxFile : cc.loader.getRes(tmxFile);
        if (!xmlStr) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->205");
        }
        var mapXML = this._parseXML(xmlStr);
        var i, j;
        var map = mapXML.documentElement;
        var version = map.getAttribute("version");
        var orientationStr = map.getAttribute("orientation");
        if (map.nodeName == "map") {
            if (version != "1.0" && version !== null) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->214");
            }
            if (orientationStr == "orthogonal") {
                this.orientation = cc.TMX_ORIENTATION_ORTHO;
            } else {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->229");
            }
            var mapSize = cc.size(0, 0);
            mapSize.width = parseFloat(map.getAttribute("width"));
            mapSize.height = parseFloat(map.getAttribute("height"));
            this.setMapSize(mapSize);
            mapSize = cc.size(0, 0);
            mapSize.width = parseFloat(map.getAttribute("tilewidth"));
            mapSize.height = parseFloat(map.getAttribute("tileheight"));
            this.setTileSize(mapSize);
            var propertyArr = map.querySelectorAll("map > properties >  property");
            if (propertyArr) {
                var aPropertyDict = {};
                for (i = 0; i < propertyArr.length; i++) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->243");
                }
                this.properties = aPropertyDict;
            }
        }
        var tilesets = map.getElementsByTagName("tileset");
        if (map.nodeName !== "map") {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->251");
        }
        for (i = 0; i < tilesets.length; i++) {
            var selTileset = tilesets[i];
            var tsxName = selTileset.getAttribute("source");
            if (tsxName) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->258");
            } else {
                var tileset = new cc.TMXTilesetInfo;
                tileset.name = selTileset.getAttribute("name") || "";
                tileset.firstGid = parseInt(selTileset.getAttribute("firstgid")) || 0;
                tileset.spacing = parseInt(selTileset.getAttribute("spacing")) || 0;
                tileset.margin = parseInt(selTileset.getAttribute("margin")) || 0;
                var tilesetSize = cc.size(0, 0);
                tilesetSize.width = parseFloat(selTileset.getAttribute("tilewidth"));
                tilesetSize.height = parseFloat(selTileset.getAttribute("tileheight"));
                tileset._tileSize = tilesetSize;
                var image = selTileset.getElementsByTagName("image")[0];
                var imagename = image.getAttribute("source");
                var num = -1;
                if (this.tmxFileName) {
                    num = this.tmxFileName.lastIndexOf("/");
                }
                if (num !== -1) {
                    var dir = this.tmxFileName.substr(0, num + 1);
                    tileset.sourceImage = dir + imagename;
                } else {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->279");
                }
                this.setTilesets(tileset);
                var tiles = selTileset.getElementsByTagName("tile");
                if (tiles) {
                    for (var tIdx = 0; tIdx < tiles.length; tIdx++) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->295");
                    }
                }
            }
        }
        var layers = map.getElementsByTagName("layer");
        if (layers) {
            for (i = 0; i < layers.length; i++) {
                var selLayer = layers[i];
                var data = selLayer.getElementsByTagName("data")[0];
                var layer = new cc.TMXLayerInfo;
                layer.name = selLayer.getAttribute("name");
                var layerSize = cc.size(0, 0);
                layerSize.width = parseFloat(selLayer.getAttribute("width"));
                layerSize.height = parseFloat(selLayer.getAttribute("height"));
                layer._layerSize = layerSize;
                var visible = selLayer.getAttribute("visible");
                layer.visible = !(visible == "0");
                var opacity = selLayer.getAttribute("opacity") || 1;
                if (opacity) {
                    layer._opacity = parseInt(255 * parseFloat(opacity));
                } else {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->317");
                }
                layer.offset = cc.p(parseFloat(selLayer.getAttribute("x")) || 0, parseFloat(selLayer.getAttribute("y")) || 0);
                var nodeValue = "";
                for (j = 0; j < data.childNodes.length; j++) {
                    nodeValue += data.childNodes[j].nodeValue;
                }
                nodeValue = nodeValue.trim();
                var compression = data.getAttribute("compression");
                var encoding = data.getAttribute("encoding");
                if (compression && compression !== "gzip" && compression !== "zlib") {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->329");
                }
                switch (compression) {
                  case "gzip":
                    layer._tiles = cc.unzipBase64AsArray(nodeValue, 4);
                    break;
                  case "zlib":
                    var inflator = new Zlib.Inflate(cc.Codec.Base64.decodeAsArray(nodeValue, 1));
                    layer._tiles = cc.uint8ArrayToUint32Array(inflator.decompress());
                    break;
                  case null:
                  case "":
                    if (encoding == "base64") {
                        layer._tiles = cc.Codec.Base64.decodeAsArray(nodeValue, 4);
                    } else {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->349");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->350");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->351");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->355");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->356");
                    }
                    break;
                  default:
                    if (this.layerAttrs == cc.TMXLayerInfo.ATTRIB_NONE) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->361");
                    }
                    break;
                }
                var layerProps = selLayer.querySelectorAll("properties > property");
                if (layerProps) {
                    var layerProp = {};
                    for (j = 0; j < layerProps.length; j++) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->369");
                    }
                    layer.properties = layerProp;
                }
                this.setLayers(layer);
            }
        }
        var objectGroups = map.getElementsByTagName("objectgroup");
        if (objectGroups) {
            for (i = 0; i < objectGroups.length; i++) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->391");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->392");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->393");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->395");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->396");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->397");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->398");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->401");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->403");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->405");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->413");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->427");
            }
        }
        return map;
    },
    _parsePointsString: function(pointsString) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->433");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->441");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->442");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->445");
    },
    parseXMLString: function(xmlString) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->448");
    },
    getTileProperties: function() {
        return this._tileProperties;
    },
    setTileProperties: function(tileProperties) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->454");
    },
    getCurrentString: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->457");
    },
    setCurrentString: function(currentString) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->460");
    },
    getTMXFileName: function() {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->463");
    },
    setTMXFileName: function(fileName) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->466");
    },
    _internalInit: function(tmxFileName, resourcePath) {
        this._tilesets.length = 0;
        this._layers.length = 0;
        this.tmxFileName = tmxFileName;
        if (resourcePath) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->473");
        }
        this._objectGroups.length = 0;
        this.properties.length = 0;
        this._tileProperties.length = 0;
        this.currentString = "";
        this.storingCharacters = false;
        this.layerAttrs = cc.TMXLayerInfo.ATTRIB_NONE;
        this.parentElement = cc.TMX_PROPERTY_NONE;
        this._currentFirstGID = 0;
    }
});
var _p = cc.TMXMapInfo.prototype;
_p.mapWidth;
cc.defineGetterSetter(_p, "mapWidth", _p._getMapWidth, _p._setMapWidth);
_p.mapHeight;
cc.defineGetterSetter(_p, "mapHeight", _p._getMapHeight, _p._setMapHeight);
_p.tileWidth;
cc.defineGetterSetter(_p, "tileWidth", _p._getTileWidth, _p._setTileWidth);
_p.tileHeight;
cc.defineGetterSetter(_p, "tileHeight", _p._getTileHeight, _p._setTileHeight);
cc.TMXMapInfo.create = function(tmxFile, resourcePath) {
console.log("/frameworks/cocos2d-html5/cocos2d/tilemap/CCTMXXMLParser.js->495");
};
cc.loader.register([ "tmx", "tsx" ], cc._txtLoader);
cc.TMXLayerInfo.ATTRIB_NONE = 1 << 0;
cc.TMXLayerInfo.ATTRIB_BASE64 = 1 << 1;
cc.TMXLayerInfo.ATTRIB_GZIP = 1 << 2;
cc.TMXLayerInfo.ATTRIB_ZLIB = 1 << 3;