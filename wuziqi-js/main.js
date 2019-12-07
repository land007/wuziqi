//window.onload = function() {
	var zoom;
	cc.game.onStart = function() {
		cc.view.adjustViewPort(true);
		cc.view.setDesignResolutionSize(360, 567, cc.ResolutionPolicy.SHOW_ALL);//360:567 800:610
	    cc.view.resizeWithBrowserSize(true);
            cc.screen.requestFullScreen();
            var s = cc.view.getFrameSize();
            cc.view.setResizeCallback(function() {
                alert(s.width + ':' + s.height);
            });
	    if (s.height >= 640) {// nokia=:1553 android=320:496
	    	cc.loader.resPath = "res/HD/";
	    	zoom = 1;
	    }
	    else {
	    	cc.loader.resPath = "res/HD/";//Normal
	    	zoom = 1;
	    }
	    cc.loader.audioPath = "res/Sound";
		// load resources
		cc.LoaderScene.preload(g_resources, function() {
//			cc.director.runScene(new HelloWorldScene());
			cc.director.runScene(new FirstScene());
			//cc.director.runScene(new GameScene());
			//cc.director.runScene(new GameScene1());
		}, this);
	};
	cc.game.run("gameCanvas");
//};