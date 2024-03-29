cc.Codec.Base64 = {
    name: "Jacob__Codec__Base64"
};
cc.Codec.Base64._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
cc.Codec.Base64.decode = function Jacob__Codec__Base64__decode(input) {
    var output = [], chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output.push(String.fromCharCode(chr1));
        if (enc3 != 64) {
            output.push(String.fromCharCode(chr2));
        }
        if (enc4 != 64) {
            output.push(String.fromCharCode(chr3));
        }
    }
    output = output.join("");
    return output;
};
cc.Codec.Base64.decodeAsArray = function Jacob__Codec__Base64___decodeAsArray(input, bytes) {
    var dec = this.decode(input), ar = [], i, j, len;
    for (i = 0, len = dec.length / bytes; i < len; i++) {
        ar[i] = 0;
        for (j = bytes - 1; j >= 0; --j) {
            ar[i] += dec.charCodeAt(i * bytes + j) << j * 8;
        }
    }
    return ar;
};
cc.uint8ArrayToUint32Array = function(uint8Arr) {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/base64.js->38");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/base64.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/base64.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/base64.js->41");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/base64.js->42");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/base64.js->43");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/base64.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/base64.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/base64.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/base64.js->47");
};