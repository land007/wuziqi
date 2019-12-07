cc.INVALID_INDEX = -1;
cc.PI = Math.PI;
cc.FLT_MAX = parseFloat("3.402823466e+38F");
cc.FLT_MIN = parseFloat("1.175494351e-38F");
cc.RAD = cc.PI / 180;
cc.DEG = 180 / cc.PI;
cc.UINT_MAX = 4294967295;
cc.swap = function(x, y, ref) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->15");
};
cc.lerp = function(a, b, r) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->18");
};
cc.rand = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->21");
};
cc.randomMinus1To1 = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->24");
};
cc.random0To1 = Math.random;
cc.degreesToRadians = function(angle) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->28");
};
cc.radiansToDegrees = function(angle) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->31");
};
cc.radiansToDegress = function(angle) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->35");
};
cc.REPEAT_FOREVER = Number.MAX_VALUE - 1;
cc.BLEND_SRC = cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? 1 : 770;
cc.BLEND_DST = 771;
cc.nodeDrawSetup = function(node) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->44");
};
cc.enableDefaultGLStates = function() {};
cc.disableDefaultGLStates = function() {};
cc.incrementGLDraws = function(addNumber) {
    cc.g_NumberOfDraws += addNumber;
};
cc.FLT_EPSILON = 1.192092896e-7;
cc.contentScaleFactor = cc.IS_RETINA_DISPLAY_SUPPORTED ? function() {
    return cc.director.getContentScaleFactor();
} : function() {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->55");
};
cc.pointPointsToPixels = function(points) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->58");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->59");
};
cc.pointPixelsToPoints = function(pixels) {
    var scale = cc.contentScaleFactor();
    return cc.p(pixels.x / scale, pixels.y / scale);
};
cc._pointPixelsToPointsOut = function(pixels, outPoint) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->68");
};
cc.sizePointsToPixels = function(sizeInPoints) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->72");
};
cc.sizePixelsToPoints = function(sizeInPixels) {
    var scale = cc.contentScaleFactor();
    return cc.size(sizeInPixels.width / scale, sizeInPixels.height / scale);
};
cc._sizePixelsToPointsOut = function(sizeInPixels, outSize) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->81");
};
cc.rectPixelsToPoints = cc.IS_RETINA_DISPLAY_SUPPORTED ? function(pixel) {
    var scale = cc.contentScaleFactor();
    return cc.rect(pixel.x / scale, pixel.y / scale, pixel.width / scale, pixel.height / scale);
} : function(p) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->87");
};
cc.rectPointsToPixels = cc.IS_RETINA_DISPLAY_SUPPORTED ? function(point) {
    var scale = cc.contentScaleFactor();
    return cc.rect(point.x * scale, point.y * scale, point.width * scale, point.height * scale);
} : function(p) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->93");
};
cc.ONE = 1;
cc.ZERO = 0;
cc.SRC_ALPHA = 770;
cc.SRC_ALPHA_SATURATE = 776;
cc.SRC_COLOR = 768;
cc.DST_ALPHA = 772;
cc.DST_COLOR = 774;
cc.ONE_MINUS_SRC_ALPHA = 771;
cc.ONE_MINUS_SRC_COLOR = 769;
cc.ONE_MINUS_DST_ALPHA = 773;
cc.ONE_MINUS_DST_COLOR = 775;
cc.ONE_MINUS_CONSTANT_ALPHA = 32772;
cc.ONE_MINUS_CONSTANT_COLOR = 32770;
cc.LINEAR = 9729;
cc.REPEAT = 10497;
cc.CLAMP_TO_EDGE = 33071;
cc.MIRRORED_REPEAT = 33648;
cc.checkGLErrorDebug = function() {
    if (cc.renderMode == cc._RENDER_TYPE_WEBGL) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->117");
    }
};
cc.DEVICE_ORIENTATION_PORTRAIT = 0;
cc.DEVICE_ORIENTATION_LANDSCAPE_LEFT = 1;
cc.DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 2;
cc.DEVICE_ORIENTATION_LANDSCAPE_RIGHT = 3;
cc.DEVICE_MAX_ORIENTATIONS = 2;
cc.VERTEX_ATTRIB_FLAG_NONE = 0;
cc.VERTEX_ATTRIB_FLAG_POSITION = 1 << 0;
cc.VERTEX_ATTRIB_FLAG_COLOR = 1 << 1;
cc.VERTEX_ATTRIB_FLAG_TEX_COORDS = 1 << 2;
cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX = cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS;
cc.GL_ALL = 0;
cc.VERTEX_ATTRIB_POSITION = 0;
cc.VERTEX_ATTRIB_COLOR = 1;
cc.VERTEX_ATTRIB_TEX_COORDS = 2;
cc.VERTEX_ATTRIB_MAX = 3;
cc.UNIFORM_PMATRIX = 0;
cc.UNIFORM_MVMATRIX = 1;
cc.UNIFORM_MVPMATRIX = 2;
cc.UNIFORM_TIME = 3;
cc.UNIFORM_SINTIME = 4;
cc.UNIFORM_COSTIME = 5;
cc.UNIFORM_RANDOM01 = 6;
cc.UNIFORM_SAMPLER = 7;
cc.UNIFORM_MAX = 8;
cc.SHADER_POSITION_TEXTURECOLOR = "ShaderPositionTextureColor";
cc.SHADER_POSITION_TEXTURECOLORALPHATEST = "ShaderPositionTextureColorAlphaTest";
cc.SHADER_POSITION_COLOR = "ShaderPositionColor";
cc.SHADER_POSITION_TEXTURE = "ShaderPositionTexture";
cc.SHADER_POSITION_TEXTURE_UCOLOR = "ShaderPositionTexture_uColor";
cc.SHADER_POSITION_TEXTUREA8COLOR = "ShaderPositionTextureA8Color";
cc.SHADER_POSITION_UCOLOR = "ShaderPosition_uColor";
cc.SHADER_POSITION_LENGTHTEXTURECOLOR = "ShaderPositionLengthTextureColor";
cc.UNIFORM_PMATRIX_S = "CC_PMatrix";
cc.UNIFORM_MVMATRIX_S = "CC_MVMatrix";
cc.UNIFORM_MVPMATRIX_S = "CC_MVPMatrix";
cc.UNIFORM_TIME_S = "CC_Time";
cc.UNIFORM_SINTIME_S = "CC_SinTime";
cc.UNIFORM_COSTIME_S = "CC_CosTime";
cc.UNIFORM_RANDOM01_S = "CC_Random01";
cc.UNIFORM_SAMPLER_S = "CC_Texture0";
cc.UNIFORM_ALPHA_TEST_VALUE_S = "CC_alpha_value";
cc.ATTRIBUTE_NAME_COLOR = "a_color";
cc.ATTRIBUTE_NAME_POSITION = "a_position";
cc.ATTRIBUTE_NAME_TEX_COORD = "a_texCoord";
cc.ITEM_SIZE = 32;
cc.CURRENT_ITEM = 3233828865;
cc.ZOOM_ACTION_TAG = 3233828866;
cc.NORMAL_TAG = 8801;
cc.SELECTED_TAG = 8802;
cc.DISABLE_TAG = 8803;
cc.arrayVerifyType = function(arr, type) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->176");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->177");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->178");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->179");
};
cc.arrayRemoveObject = function(arr, delObj) {
    for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] == delObj) {
            arr.splice(i, 1);
            break;
        }
    }
};
cc.arrayRemoveArray = function(arr, minusArr) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->192");
};
cc.arrayAppendObjectsToIndex = function(arr, addObjs, index) {
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/core/platform/CCMacro.js->196");
};
cc.copyArray = function(arr) {
    var i, len = arr.length, arr_clone = new Array(len);
    for (i = 0; i < len; i += 1) {
        arr_clone[i] = arr[i];
    }
    return arr_clone;
};