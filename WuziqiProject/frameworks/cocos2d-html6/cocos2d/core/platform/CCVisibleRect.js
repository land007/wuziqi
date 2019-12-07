cc.visibleRect = {
    topLeft: cc.p(0, 0),
    topRight: cc.p(0, 0),
    top: cc.p(0, 0),
    bottomLeft: cc.p(0, 0),
    bottomRight: cc.p(0, 0),
    bottom: cc.p(0, 0),
    center: cc.p(0, 0),
    left: cc.p(0, 0),
    right: cc.p(0, 0),
    width: 0,
    height: 0,
    init: function(visibleRect) {
        var w = this.width = visibleRect.width;
        var h = this.height = visibleRect.height;
        var l = visibleRect.x, b = visibleRect.y, t = b + h, r = l + w;
        this.topLeft.x = l;
        this.topLeft.y = t;
        this.topRight.x = r;
        this.topRight.y = t;
        this.top.x = l + w / 2;
        this.top.y = t;
        this.bottomLeft.x = l;
        this.bottomLeft.y = b;
        this.bottomRight.x = r;
        this.bottomRight.y = b;
        this.bottom.x = l + w / 2;
        this.bottom.y = b;
        this.center.x = l + w / 2;
        this.center.y = b + h / 2;
        this.left.x = l;
        this.left.y = b + h / 2;
        this.right.x = r;
        this.right.y = b + h / 2;
    }
};