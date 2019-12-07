cc.km_mat4_stack = function(capacity, item_count, top, stack) {
    this.top = top;
    this.stack = stack;
};
cc.km_mat4_stack.INITIAL_SIZE = 30;
cc.km_mat4_stack_initialize = function(stack) {
    stack.stack = [];
    stack.top = null;
};
cc.km_mat4_stack_push = function(stack, item) {
    stack.stack.push(stack.top);
    stack.top = new cc.kmMat4;
    cc.kmMat4Assign(stack.top, item);
};
cc.km_mat4_stack_pop = function(stack, pOut) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/mat4stack.js->16");
};
cc.km_mat4_stack_release = function(stack) {
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/mat4stack.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/mat4stack.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/kazmath/gl/mat4stack.js->21");
};