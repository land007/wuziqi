cc._currentProjectionMatrix = -1;
cc._vertexAttribPosition = false;
cc._vertexAttribColor = false;
cc._vertexAttribTexCoords = false;
if (cc.ENABLE_GL_STATE_CACHE) {
    cc.MAX_ACTIVETEXTURE = 16;
    cc._currentShaderProgram = -1;
    cc._currentBoundTexture = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
    cc._blendingSource = -1;
    cc._blendingDest = -1;
    cc._GLServerState = 0;
    if (cc.TEXTURE_ATLAS_USE_VAO) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->13");
    }
}
cc.glInvalidateStateCache = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->17");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->18");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->19");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->20");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->21");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->22");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->23");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->24");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->25");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->26");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->27");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->28");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->29");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->30");
};
cc.glUseProgram = function(program) {
    if (program !== cc._currentShaderProgram) {
        cc._currentShaderProgram = program;
        cc._renderContext.useProgram(program);
    }
};
if (!cc.ENABLE_GL_STATE_CACHE) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->39");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->40");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->41");
}
cc.glDeleteProgram = function(program) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->44");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->45");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->46");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->47");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->48");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->49");
};
cc.glBlendFunc = function(sfactor, dfactor) {
    if (sfactor !== cc._blendingSource || dfactor !== cc._blendingDest) {
        cc._blendingSource = sfactor;
        cc._blendingDest = dfactor;
        cc.setBlending(sfactor, dfactor);
    }
};
cc.setBlending = function(sfactor, dfactor) {
    var ctx = cc._renderContext;
    if (sfactor === ctx.ONE && dfactor === ctx.ZERO) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->61");
    } else {
        ctx.enable(ctx.BLEND);
        cc._renderContext.blendFunc(sfactor, dfactor);
    }
};
cc.glBlendFuncForParticle = function(sfactor, dfactor) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->68");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->69");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->70");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->71");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->72");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->73");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->74");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->75");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->76");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->77");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->78");
};
if (!cc.ENABLE_GL_STATE_CACHE) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->81");
}
cc.glBlendResetToCache = function() {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->84");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->85");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->86");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->87");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->88");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->89");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->90");
};
cc.setProjectionMatrixDirty = function() {
    cc._currentProjectionMatrix = -1;
};
cc.glEnableVertexAttribs = function(flags) {
    var ctx = cc._renderContext;
    var enablePosition = flags & cc.VERTEX_ATTRIB_FLAG_POSITION;
    if (enablePosition !== cc._vertexAttribPosition) {
        if (enablePosition) {
            ctx.enableVertexAttribArray(cc.VERTEX_ATTRIB_POSITION);
        } else {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->102");
        }
        cc._vertexAttribPosition = enablePosition;
    }
    var enableColor = flags & cc.VERTEX_ATTRIB_FLAG_COLOR;
    if (enableColor !== cc._vertexAttribColor) {
        if (enableColor) {
            ctx.enableVertexAttribArray(cc.VERTEX_ATTRIB_COLOR);
        } else {
            ctx.disableVertexAttribArray(cc.VERTEX_ATTRIB_COLOR);
        }
        cc._vertexAttribColor = enableColor;
    }
    var enableTexCoords = flags & cc.VERTEX_ATTRIB_FLAG_TEX_COORDS;
    if (enableTexCoords !== cc._vertexAttribTexCoords) {
        if (enableTexCoords) {
            ctx.enableVertexAttribArray(cc.VERTEX_ATTRIB_TEX_COORDS);
        } else {
            ctx.disableVertexAttribArray(cc.VERTEX_ATTRIB_TEX_COORDS);
        }
        cc._vertexAttribTexCoords = enableTexCoords;
    }
};
cc.glBindTexture2D = function(textureId) {
    cc.glBindTexture2DN(0, textureId);
};
cc.glBindTexture2DN = function(textureUnit, textureId) {
    if (cc._currentBoundTexture[textureUnit] == textureId) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->130");
    }
    cc._currentBoundTexture[textureUnit] = textureId;
    var ctx = cc._renderContext;
    ctx.activeTexture(ctx.TEXTURE0 + textureUnit);
    if (textureId) {
        ctx.bindTexture(ctx.TEXTURE_2D, textureId._webTextureObj);
    } else {
        ctx.bindTexture(ctx.TEXTURE_2D, null);
    }
};
if (!cc.ENABLE_GL_STATE_CACHE) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->142");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->143");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->144");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->145");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->146");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->147");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->148");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->149");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->150");
}
cc.glDeleteTexture = function(textureId) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->153");
};
cc.glDeleteTextureN = function(textureUnit, textureId) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->156");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->157");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->158");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->159");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->160");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->161");
};
cc.glBindVAO = function(vaoId) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->164");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->165");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->166");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->167");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->168");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->169");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->170");
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->171");
};
cc.glEnable = function(flags) {
console.log("/frameworks/cocos2d-html5/cocos2d/shaders/CCGLStateCache.js->174");
};