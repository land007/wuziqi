cc.Codec.GZip = function Jacob__GZip(data) {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->2");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->3");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->4");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->5");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->6");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->7");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->8");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->9");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->10");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->11");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->12");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->13");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->14");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->15");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->16");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->23");
};
cc.Codec.GZip.gunzip = function(string) {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->30");
};
cc.Codec.GZip.HufNode = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->33");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->34");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->36");
};
cc.Codec.GZip.LITERALS = 288;
cc.Codec.GZip.NAMEMAX = 256;
cc.Codec.GZip.bitReverse = [ 0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255 ];
cc.Codec.GZip.cplens = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0 ];
cc.Codec.GZip.cplext = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99 ];
cc.Codec.GZip.cpdist = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577 ];
cc.Codec.GZip.cpdext = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ];
cc.Codec.GZip.border = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];
cc.Codec.GZip.prototype.gunzip = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->49");
};
cc.Codec.GZip.prototype.readByte = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->52");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->53");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->54");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->55");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->56");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->57");
};
cc.Codec.GZip.prototype.byteAlign = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->60");
};
cc.Codec.GZip.prototype.readBit = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->63");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->64");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->65");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->66");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->67");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->72");
};
cc.Codec.GZip.prototype.readBits = function(a) {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->78");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->81");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->82");
};
cc.Codec.GZip.prototype.flushBuffer = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->85");
};
cc.Codec.GZip.prototype.addBuffer = function(a) {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->92");
};
cc.Codec.GZip.prototype.IsPat = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->97");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->98");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->99");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->100");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->101");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->102");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->103");
};
cc.Codec.GZip.prototype.Rec = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->106");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->107");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->108");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->109");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->110");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->111");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->112");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->113");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->114");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->115");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->116");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->117");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->118");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->119");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->120");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->121");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->122");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->123");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->124");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->125");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->126");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->127");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->128");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->129");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->130");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->131");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->132");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->133");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->134");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->135");
};
cc.Codec.GZip.prototype.CreateTree = function(currentTree, numval, lengths, show) {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->138");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->139");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->140");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->141");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->150");
};
cc.Codec.GZip.prototype.DecodeValue = function(currentTree) {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->153");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->154");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->155");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->161");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->162");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->163");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->171");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->172");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->173");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->174");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->175");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->176");
};
cc.Codec.GZip.prototype.DeflateLoop = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->179");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->180");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->181");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->182");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->183");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->184");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->185");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->186");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->187");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->188");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->189");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->190");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->191");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->192");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->193");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->194");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->195");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->196");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->197");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->198");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->199");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->200");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->201");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->202");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->203");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->204");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->205");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->206");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->207");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->208");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->209");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->210");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->211");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->212");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->213");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->214");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->215");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->216");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->217");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->218");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->219");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->220");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->221");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->222");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->223");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->224");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->225");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->226");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->227");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->228");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->229");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->230");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->231");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->232");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->233");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->234");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->235");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->236");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->237");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->238");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->239");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->240");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->241");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->242");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->243");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->244");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->245");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->246");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->247");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->248");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->249");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->250");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->251");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->252");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->253");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->254");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->255");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->256");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->257");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->258");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->259");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->260");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->261");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->262");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->263");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->264");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->265");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->266");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->267");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->268");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->269");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->270");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->271");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->272");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->273");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->274");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->275");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->276");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->277");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->278");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->279");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->280");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->281");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->282");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->283");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->284");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->285");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->286");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->287");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->288");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->289");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->290");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->291");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->292");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->293");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->294");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->295");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->296");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->297");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->298");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->299");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->300");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->301");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->302");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->303");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->304");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->305");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->306");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->307");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->308");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->309");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->310");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->311");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->312");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->313");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->314");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->315");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->316");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->317");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->318");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->319");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->320");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->321");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->322");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->323");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->324");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->325");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->326");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->327");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->328");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->329");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->330");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->331");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->332");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->333");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->334");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->335");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->336");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->337");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->338");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->339");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->340");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->341");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->342");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->343");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->344");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->345");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->346");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->347");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->348");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->349");
};
cc.Codec.GZip.prototype.unzipFile = function(name) {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->352");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->353");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->354");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->355");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->356");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->357");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->358");
};
cc.Codec.GZip.prototype.nextFile = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->361");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->362");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->363");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->364");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->365");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->366");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->367");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->368");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->369");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->370");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->371");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->372");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->373");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->374");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->375");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->376");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->377");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->378");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->379");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->380");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->381");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->382");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->383");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->384");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->385");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->386");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->387");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->388");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->389");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->390");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->391");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->392");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->393");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->394");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->395");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->396");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->397");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->398");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->399");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->400");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->401");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->402");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->403");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->404");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->405");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->406");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->407");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->408");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->409");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->410");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->411");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->412");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->413");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->414");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->415");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->416");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->417");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->418");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->419");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->420");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->421");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->422");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->423");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->424");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->425");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->426");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->427");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->428");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->429");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->430");
};
cc.Codec.GZip.prototype.skipdir = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->433");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->434");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->435");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->436");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->437");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->438");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->439");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->440");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->441");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->442");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->443");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->444");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->445");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->446");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->447");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->448");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->449");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->450");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->451");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->452");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->453");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->454");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->455");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->456");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->457");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->458");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->459");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->460");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->461");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->462");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->463");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->464");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->465");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->466");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->467");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->468");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->469");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->470");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->471");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->472");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->473");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->474");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->475");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->476");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->477");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->478");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->479");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->480");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->481");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->482");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->483");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->484");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->485");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->486");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->487");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->488");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->489");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->490");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->491");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->492");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->493");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->494");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->495");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->496");
console.log("/frameworks/cocos2d-html5/cocos2d/compression/gzip.js->497");
};