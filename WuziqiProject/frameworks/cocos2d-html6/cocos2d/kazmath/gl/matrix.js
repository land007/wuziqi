cc.KM_GL_MODELVIEW = 5888;
cc.KM_GL_PROJECTION = 5889;
cc.KM_GL_TEXTURE = 5890;
cc.modelview_matrix_stack = new cc.km_mat4_stack;
cc.projection_matrix_stack = new cc.km_mat4_stack;
cc.texture_matrix_stack = new cc.km_mat4_stack;
cc.current_stack = null;
cc.initialized = false;
cc.lazyInitialize = function() {
    if (!cc.initialized) {
        var identity = new cc.kmMat4;
        cc.km_mat4_stack_initialize(cc.modelview_matrix_stack);
        cc.km_mat4_stack_initialize(cc.projection_matrix_stack);
        cc.km_mat4_stack_initialize(cc.texture_matrix_stack);
        cc.current_stack = cc.modelview_matrix_stack;
        cc.initialized = true;
        cc.kmMat4Identity(identity);
        cc.km_mat4_stack_push(cc.modelview_matrix_stack, identity);
        cc.km_mat4_stack_push(cc.projection_matrix_stack, identity);
        cc.km_mat4_stack_push(cc.texture_matrix_stack, identity);
    }
};
cc.lazyInitialize();
cc.kmGLFreeAll = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->29");
};
cc.kmGLPushMatrix = function() {
    cc.km_mat4_stack_push(cc.current_stack, cc.current_stack.top);
};
cc.kmGLPushMatrixWitMat4 = function(saveMat) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->35");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->36");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->37");
};
cc.kmGLPopMatrix = function() {
    cc.current_stack.top = cc.current_stack.stack.pop();
};
cc.kmGLMatrixMode = function(mode) {
    switch (mode) {
      case cc.KM_GL_MODELVIEW:
        cc.current_stack = cc.modelview_matrix_stack;
        break;
      case cc.KM_GL_PROJECTION:
        cc.current_stack = cc.projection_matrix_stack;
        break;
      case cc.KM_GL_TEXTURE:
        cc.current_stack = cc.texture_matrix_stack;
        break;
      default:
        throw "Invalid matrix mode specified";
        break;
    }
};
cc.kmGLLoadIdentity = function() {
    cc.kmMat4Identity(cc.current_stack.top);
};
cc.kmGLLoadMatrix = function(pIn) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->62");
};
cc.kmGLMultMatrix = function(pIn) {
    cc.kmMat4Multiply(cc.current_stack.top, cc.current_stack.top, pIn);
};
cc.kmGLTranslatef = function(x, y, z) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->70");
};
cc.kmGLRotatef = function(angle, x, y, z) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->76");
};
cc.kmGLScalef = function(x, y, z) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->79");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->80");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->81");
};
cc.kmGLGetMatrix = function(mode, pOut) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->90");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->91");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->92");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->93");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->94");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->95");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->96");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/matrix.js->97");
};