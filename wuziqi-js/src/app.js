var FirstLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function () {
        this._super();
//        var s = cc.Director.getInstance().getWinSize();
        var s = cc.director.getWinSize();

        var loadLayer = cc.Layer.create();
        this.addChild(loadLayer);

        var bg0=cc.Sprite.create(res.s_bg0);
        bg0.setAnchorPoint(0.25,0);
        bg0.setPosition(0,0);
        bg0.setScale(2.1*zoom);
        loadLayer.addChild(bg0,0);

        var bg1 = cc.Sprite.create(res.s_initbg2);
        bg1.setPosition(s.width/2,s.height/2);
        //bg1.setScale(1.3*zoom);
        loadLayer.addChild(bg1,1);

        var bg2 = cc.Sprite.create(res.s_initbg1);
        //bg2.setScale(zoom);
        bg2.x = s.width / 2;
        bg2.y = s.height-bg2.height/2*zoom-60;
        loadLayer.addChild(bg2,2);
//        bg2.setPosition(s.width/2,620);
//        var moveBg2=cc.MoveTo.create(1,cc.p(s.width/2,520));
//        bg2.runAction(moveBg2);
//        bg2.runAction(
//            cc.spawn(
//                cc.moveBy(2.5, cc.p(0, size.height - 40)),
//                cc.tintTo(2.5,255,125,0)
//            )
//        );

        // var menuLabel1 = cc.LabelTTF.create("开始游戏","arial",20);
        var menuItem1 = cc.MenuItemImage.create(res.s_btn2,res.s_btn2,this.repScene1,this);
        //menuItem1.setScale(zoom);
        var menuItem2 = cc.MenuItemImage.create(res.s_btn1,res.s_btn1,this.repScene,this);
        //menuItem2.setScale(zoom);
        var menu = cc.Menu.create(menuItem2,menuItem1);
        menu.alignItemsVerticallyWithPadding(30);

        loadLayer.addChild(menu,3);
    },
    repScene : function(){
        // alert(1);
//        cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1,new GameScene));
    	cc.director.runScene(new GameScene());
    },
    repScene1 : function(){
        // alert(1);
//        cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1,new GameScene1));
    	cc.director.runScene(new GameScene1());
    }
});

var FirstScene = cc.Scene.extend({
	onEnter : function() {
		this._super();
		var layer = new FirstLayer();
		this.addChild(layer);
//		var size = cc.director.getWinSize();
//		var sprite = cc.Sprite.create(res.HelloWorld_png);
//		sprite.setPosition(size.width / 2, size.height / 2);
//		sprite.setScale(0.8);
//		this.addChild(sprite, 0);
//
//		var label = cc.LabelTTF.create("Hello World", "Arial", 40);
//		label.setPosition(size.width / 2, size.height / 2);
//		this.addChild(label, 1);
	}
});


var GameScene= cc.Scene.extend({
	gameLayer:null,
	pointX:0,//点击点所在的行数
	pointY:0,
	startX:52,
	startY:158,
	spaceX:36/2,
	spaceY:36/2,
	my:1,//玩家阵营
	isPlay:false,
	Ai:null,
	heiMusic:"hei.wav",
	baiMusic:"bai.wav",
	pan:null,
	map:[],
	infoMenu : true,//选择先后手菜单
	menuBg : null,//先后手菜单背景
	AIfirsthand : null,//AI是否先手
	AIcolor : res.s_bai,//AI颜色，默认后手白
	PlayerColor : res.s_hei,//玩家颜色
////////////////////////////悔棋
	undoButton:null,
	history:[],//历史记录
	undoNum:0,//悔棋次数
	regret:3,
	ctor:function(){
		this._super();
//		cc.registerTargetedDelegate(this._touchPriority, true, this);
//		cc.registerTargettedDelegate(this._touchPriority, true, this);
		var eventListener = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onTouchBegan.bind(this)});
		cc.eventManager.addListener(eventListener, this);
	},
	onEnter:function(){
		this._super();

		this.initData();
		this.Ai=new AI();
		this.map=this.createMap();
	},
	initData:function(){
		this.gameLayer = cc.Layer.create();
		this.addChild(this.gameLayer);
		//
//		var size = cc.Director.getInstance().getWinSize();
		var size = cc.director.getWinSize();
		//先后手菜单
		var choseBlackSide = cc.MenuItemImage.create(res.s_hei,res.s_hei,this.firstHand,this);
		choseBlackSide.setScale(zoom);
		var choseWhiteSide = cc.MenuItemImage.create(res.s_bai,res.s_bai,this.secondHand,this);
		choseWhiteSide.setScale(zoom);
		var firstHand = cc.MenuItemFont.create("先手",this.firstHand,this);
		firstHand.setFontSize(15);
//		firstHand.setColor(cc.c4(0,0,0,255));
		firstHand.setColor(cc.color(0,0,0,255));
		var secondHand = cc.MenuItemFont.create("后手",this.secondHand,this);
		secondHand.setFontSize(15);
		choseBlackSide.setEnabled(true);
		choseWhiteSide.setEnabled(true);
		this.infoMenu1 = cc.Menu.create(choseBlackSide,firstHand);
		this.infoMenu2 = cc.Menu.create(choseWhiteSide,secondHand);
		this.menuBg = cc.Sprite.create(res.s_initBg);
		this.menuBg.setScale(zoom);
		this.menuBg.setAnchorPoint(0.5,0.5);
		this.menuBg.setPosition(size.width/2,size.height/2);

		this.infoMenu1.alignItemsHorizontally();
		this.infoMenu2.alignItemsHorizontallyWithPadding(10);
		this.infoMenu1.setAnchorPoint(0.5,0.5);
		this.infoMenu2.setAnchorPoint(0.5,0.5);
		this.infoMenu1.setPosition(size.width/2-40,size.height/2+5);
		this.infoMenu2.setPosition(size.width/2+35,size.height/2+5);
		this.gameLayer.addChild(this.menuBg,2);
		this.gameLayer.addChild(this.infoMenu1,100);
		this.gameLayer.addChild(this.infoMenu2,100);
		this.isPlay = false;
		//
		var bg0=cc.Sprite.create(res.s_bg0);
		bg0.setAnchorPoint(0.25,0);
		bg0.setPosition(0,0);
		bg0.setScale(2.1*zoom);
		this.gameLayer.addChild(bg0,0);
		//
		var bg=cc.Sprite.create(res.s_bg);
		//bg.setScale(zoom);
		bg.setPosition(size.width/2,size.height/2);
		this.gameLayer.addChild(bg,1);
		//////////////
		this.pan=cc.Sprite.create(res.s_pane);
		this.gameLayer.addChild(this.pan,1);
		this.pan.setPosition(-20,-20);
		///////////////////////////////////////悔棋按钮图片
		var menuImage=cc.Sprite.create(res.s_btn);
		menuImage.setScale(0.9*zoom);
		menuImage.setPosition(58,60);
		this.gameLayer.addChild(menuImage,2);
		////悔棋���钮
		var menuItem1=cc.MenuItemFont.create("悔棋"+"("+this.regret+")",this.undo,this);
		menuItem1.setFontSize(15);
//		menuItem1.setColor(cc.c4(0,0,0,255));
		menuItem1.setColor(cc.color(0,0,0,255));
		this.undoButton = cc.Menu.create(menuItem1);
		this.addChild( this.undoButton,2);
		this.undoButton.setPosition(58,65);
		//返回首页按钮//////////////////////////////////////////////////////////////////////////
		var menuItemImg2 = cc.MenuItemImage.create(res.s_back,res.s_back,this.repScene,this);
                //menuItemImg2.setScale(5);
		menuItemImg2.setAnchorPoint(0.5,0.5);
		if(zoom == 1){
			menuItemImg2.setPosition(-180,70);
		}else if(zoom == 2){
			menuItemImg2.setPosition(-425,-50);
		}
		var menu=cc.Menu.create(menuItemImg2);
		bg.addChild(menu);
		////////////////////////////////////////////////////////////////////////////////////////
	},
	/////////////悔棋调用的方法
	undo:function(){
		// ///////
		// console.log(this.undoButton.isEnabled());
		if(this.isPlay && this.history.length !== 0){
			if(this.undoNum == 3){
				alert('您已用完3次悔棋的机会！')
				// this.undoButton.isEnabled(false);

			}else{
				cc.log("undo");
				var p = this.history.pop();
				var r = this.history.pop();


				this.map[p.x][p.y] = 0;
				this.map[r.x][r.y] = 0;

				this.gameLayer.removeChild(p.sprite);
				this.gameLayer.removeChild(r.sprite);

				this.pan.setPosition(this.history[this.history.length-1].x*this.spaceX+this.startX,this.history[this.history.length-1].y*this.spaceY+this.startY);
				this.undoNum++;
				//变量显示表示悔棋次数
				this.regret--;
				this.removeChild(this.undoButton);
				var menuItem1=cc.MenuItemFont.create("悔棋"+"("+this.regret+")",this.undo,this);
				menuItem1.setFontSize(20);
//				menuItem1.setColor(cc.c4(0,0,0,255));
				menuItem1.setColor(cc.color(0,0,0,255));
				this.undoButton = cc.Menu.create(menuItem1);
				this.addChild( this.undoButton,2);
				this.undoButton.setPosition(58,65);
			}
		}

	},
	//返回首页函数
	repScene:function(){
		//cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, new FirstScene));
		cc.director.runScene(new FirstScene());
	},
	createMap:function(){
		var arr=[];
		for (var i=0; i<15; i++){
			arr[i]=[];
			for (var n=0; n<15; n++){
				arr[i][n]=0;
			}
		}
		return arr;
	},
	//先手
	firstHand :function(){
		this.gameLayer.removeChild(this.infoMenu1);
		this.gameLayer.removeChild(this.infoMenu2);
		this.gameLayer.removeChild(this.menuBg);
		this.isPlay = true;
	},
	//后手
	secondHand : function(){

		this.gameLayer.removeChild(this.infoMenu1);
		this.gameLayer.removeChild(this.infoMenu2);
		this.gameLayer.removeChild(this.menuBg);
		this.AIfirsthand = true;
		this.AIcolor = res.s_hei;
		this.PlayerColor = res.s_bai;
		this.AIPlay();
		this.isPlay = true;
	},
	//起点（96，56）终点（600，560）一个格子36*36，中间元心是（348，308）
	onTouchBegan:function(touch,event){
		if(this.isPlay==false) return false;//isPlay是不能下，锁定当前棋盘
		var getPoint = touch.getLocation();
		cc.log(getPoint.x+"!!"+getPoint.y);
		if(getPoint.x<310&&getPoint.x>50&&getPoint.y<413&&getPoint.y>153){//可点击范���
			this.pointX=Math.round((getPoint.x-this.startX)/this.spaceX);
			this.pointY=Math.round((getPoint.y-this.startY)/this.spaceY);
			if(this.pointX<0) this.pointX=0;
			if(this.pointX>14) this.pointX=14;
			if(this.pointY<0) this.pointY=0;
			if(this.pointY>14) this.pointY=14;
			//
			if(this.map[this.pointX][this.pointY]==0)
			{
				var cp=this.clickPoint(this.pointX,this.pointY,this.my);
				var blackSprite =cc.Sprite.create(this.PlayerColor);
				//blackSprite.setScale(zoom);
				blackSprite.setAnchorPoint(0.45,0.6);
				blackSprite.setPosition(this.pointX*this.spaceX+this.startX,this.pointY*this.spaceY+this.startY);
				this.gameLayer.addChild(blackSprite,2);
				///////////////压入历史记录栈
				this.history.push({x:this.pointX,y:this.pointY,sprite:blackSprite});
//				cc.AudioEngine.getInstance().playEffect(this.heiMusic, false);
				cc.audioEngine.playEffect(this.heiMusic, false);
				if(cp)
				{
					this.AIPlay();
				}
			}
		}
		return true;
	},
	//zhuodian
	clickPoint:function(x,y,my){
		//将棋子放入map
		this.map[x][y]=my;
		cc.log(x+","+y);
		//
		var k=0;
		var t=0;
		for(var i=0;i<15;i++)
		{
			for(var j=0;j<15;j++)
			{
				var m=this.map[i][j];
				if(m===-1)
				{
					k++;
				}
				if(m===0)
				{
					t++;
				}
			}
		}
		cc.log("bai"+k+" "+"kong"+t);
		//胜负判断
		cc.log("my"+my);
		if(this.isWin(x,y,my)){
			this.isPlay=false;
			setTimeout(function(){
				if (my==1){
					alert("恭喜你，你赢了！");
				}else{
					alert("很遗憾，你输了！");
				}
			}, 300);
			return false;
		}
		return true;
	},
	isWin:function(x,y,my){
		var map=this.map;
		//这里特殊说明一下，由于上面的得到xy的算法，从而使得正常的二维数组逆时针方向旋转了90度
		//横方向
		var arr=[];
		for(var i=0;i<map.length;i++)
		{
			arr.push(map[i][y]);
		}
		if(this.win(arr,my)) return true;
		//竖方向
		var arr=map[x];
		if(this.win(arr,my)) return true;
		//撇方向
		var arr=[];
		for(i=0;i<map.length;i++)
		{
			var temp=map[i][y-(x-i)];
			if(temp!==undefined)
			{
				arr.push(temp);
			}
		}
		if(this.win(arr,my)) return true;
		//捺方向
		var arr=[];
		for(i=0;i<map.length;i++)
		{
			var temp=map[i][y+(x-i)];
			if(temp!==undefined)
			{
				arr.push(temp);
			}
		}
		if(this.win(arr,my)) return true;
	},
	win:function(arr,my){
		var n=0;
		for(var i=0;i<arr.length;i++){
			if(arr[i]==my){
				n++;
				if(n==5) return true;
			}
			else{
				n=0;
			}
		}
		return false;
	},
	AIPlay:function(){
		this.isPlay=false;
		this.my=-1;
		if(this.AIfirsthand == true){
			this.Ai.setFirstHand();
			this.AIfirsthand = false;
		}else{
			this.Ai.setFirstHandFalse();
		}
		var pace=this.Ai.initData(this.map,this.my);

		//延时函数
		this.scheduleOnce(function(){
			var cp=this.clickPoint(pace.x,pace.y,this.my);
			var baiSprite =cc.Sprite.create(this.AIcolor);
			//baiSprite.setScale(zoom);
			//定位棋子和边框
			this.pan.setPosition(pace.x*this.spaceX+this.startX,pace.y*this.spaceY+this.startY);
			baiSprite.setAnchorPoint(0.45,0.6);
			baiSprite.setPosition(pace.x*this.spaceX+this.startX,pace.y*this.spaceY+this.startY);
			///////////////压入历史记录栈
			this.history.push({x:pace.x,y:pace.y,sprite:baiSprite});
			this.gameLayer.addChild(baiSprite,2);
//			cc.AudioEngine.getInstance().playEffect(this.baiMusic, false);
			cc.audioEngine.playEffect(this.baiMusic, false);
			if(cp)
			{
				this.isPlay=true;
				this.my=1;
			}

		},0.5)//单位是秒
	}

});

var GameScene1= cc.Scene.extend({
	gameLayer:null,
	pointX:0,//点击点所在的行数
	pointY:0,
	startX:52,
	startY:158,
	spaceX:36/2,
	spaceY:36/2,
	my:1,//玩家阵营
	isPlay:true,
	Ai:null,
	heiMusic:"hei.wav",
	baiMusic:"bai.wav",
	pan:null,
	map:[],
	count:0,//增加全局变量来计算点击的次数，奇数是白子，偶数出黑子
	////////////////////////////悔棋
	undoButton:null,//按钮
	history:[],//历史记录
	undoNum:0,//悔棋次数
	regret:3,
	ctor:function(){
		this._super();
//		cc.registerTargetedDelegate(this._touchPriority, true, this);
		var eventListener = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onTouchBegan.bind(this)});
		cc.eventManager.addListener(eventListener, this);
	},
	onEnter:function(){
		this._super();
		this.initData();
		this.Ai=new AI();
		this.map=this.createMap();
	},
	initData:function(){
		this.gameLayer = cc.Layer.create();
		this.addChild(this.gameLayer);
		//
		//
//		var size = cc.Director.getInstance().getWinSize();
		var size = cc.director.getWinSize();
		var bg0=cc.Sprite.create(res.s_bg0);
		bg0.setAnchorPoint(0.25,0);
		bg0.setPosition(0,0);
		bg0.setScale(2.1*zoom);
		this.gameLayer.addChild(bg0,0);
		//
		var bg=cc.Sprite.create(res.s_bg);
		bg.setScale(zoom);
		bg.setPosition(size.width/2,size.height/2);
		this.gameLayer.addChild(bg,1);
		//
		this.pan=cc.Sprite.create(res.s_pane);
		this.gameLayer.addChild(this.pan,1);
		this.pan.setPosition(-20,-20);

		///////////////////////////////////////悔棋按���图���
		var menuImage=cc.Sprite.create(res.s_btn);
		menuImage.setScale(0.9*zoom);
		menuImage.setPosition(58,60);
		this.gameLayer.addChild(menuImage,2);
		////悔棋按钮
		var menuItem1=cc.MenuItemFont.create("悔棋"+"("+this.regret+")",this.undo,this);
		menuItem1.setFontSize(15);
//		menuItem1.setColor(cc.c4(0,0,0,255));
		menuItem1.setColor(cc.color(0,0,0,255));
		this.undoButton = cc.Menu.create(menuItem1);
		this.addChild( this.undoButton,2);
		this.undoButton.setPosition(58,65);

		//返回首页按钮//////////////////////////////////////////////////////////////////////////
		var menuItemImg2 = cc.MenuItemImage.create(res.s_back,res.s_back,this.repScene,this);
		menuItemImg2.setAnchorPoint(0.5,0.5);
		if(zoom == 1){
			menuItemImg2.setPosition(-180,70);
		}else if(zoom == 2){
			menuItemImg2.setPosition(-425,-50);
		}
		var menu=cc.Menu.create(menuItemImg2);
		bg.addChild(menu);
		////////////////////////////////////////////////////////////////////////////////////////
	},
	/////////////悔棋调用的方法
	undo:function(){
		// ///////
		// console.log(this.undoButton.isEnabled());
		if(this.isPlay && this.history.length !== 0){
			if(this.undoNum == 3){
				alert('您已用完3次悔棋的机会！')
				// this.undoButton.isEnabled(false);

			}else{
				var p = this.history.pop();
				var r = this.history.pop();

				this.map[p.x][p.y] = 0;
				this.map[r.x][r.y] = 0;

				this.gameLayer.removeChild(p.sprite);
				this.gameLayer.removeChild(r.sprite);

				//找到最后一个数组元素
				var last=this.history[this.history.length-1];

				this.pan.setPosition(last.x*this.spaceX+this.startX,last.y*this.spaceY+this.startY);
				this.undoNum++;
				//变量显示表示悔棋次数
				this.regret--;
				this.removeChild(this.undoButton);
				var menuItem1=cc.MenuItemFont.create("悔棋"+"("+this.regret+")",this.undo,this);
				menuItem1.setFontSize(20);
//				menuItem1.setColor(cc.c4(0,0,0,255));
				menuItem1.setColor(cc.color(0,0,0,255));
				this.undoButton = cc.Menu.create(menuItem1);
				this.addChild( this.undoButton,2);
				this.undoButton.setPosition(58,65);
			}
		}

	},
	//返回首页函数
	repScene:function(){
//		cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, new FirstScene));
		cc.director.runScene(new FirstScene());
		this.isPlay=false;
	},
	createMap:function(){
		var arr=[];
		for (var i=0; i<15; i++){
			arr[i]=[];
			for (var n=0; n<15; n++){
				arr[i][n]=0;
			}
		}
		return arr;
	},

	//起点（96，56）终点（600，560）一个格子36*36，中间元心是（348，308）
	onTouchBegan:function(touch,event){
		if(this.count%2==0)
		{
			if(this.isPlay==false) return false;
			var getPoint = touch.getLocation();
			//增加点击范围
			if(getPoint.x<310&&getPoint.x>50&&getPoint.y<413&&getPoint.y>153){
				this.pointX=Math.round((getPoint.x-this.startX)/this.spaceX);
				this.pointY=Math.round((getPoint.y-this.startY)/this.spaceY);
				if(this.pointX<0) this.pointX=0;
				if(this.pointX>14) this.pointX=14;
				if(this.pointY<0) this.pointY=0;
				if(this.pointY>14) this.pointY=14;
				if(this.map[this.pointX][this.pointY]==0)
				{
					this.my=1;
					var cp=this.clickPoint(this.pointX,this.pointY,this.my);
					var blackSprite =cc.Sprite.create(res.s_hei);
					blackSprite.setScale(zoom);
					blackSprite.setAnchorPoint(0.45,0.6);
					blackSprite.setPosition(this.pointX*this.spaceX+this.startX,this.pointY*this.spaceY+this.startY);
					this.gameLayer.addChild(blackSprite,2);
					//定位棋子和边框
					this.pan.setPosition(this.pointX*this.spaceX+this.startX,this.pointY*this.spaceY+this.startY);
					///////////////压入历史记录栈
					this.history.push({x:this.pointX,y:this.pointY,sprite:blackSprite});
//					cc.AudioEngine.getInstance().playEffect(this.heiMusic, false);
					cc.audioEngine.playEffect(this.heiMusic, false);
					if(cp)
					{
						this.count++;
					}
				}
			}

		}
		else{
			if(this.isPlay==false) return false;
			var getPoint = touch.getLocation();
			if(getPoint.x<680&&getPoint.x>117&&getPoint.y<592&&getPoint.y>27){
				this.pointX=Math.round((getPoint.x-this.startX)/this.spaceX);
				this.pointY=Math.round((getPoint.y-this.startY)/this.spaceY);
				if(this.pointX<0) this.pointX=0;
				if(this.pointX>14) this.pointX=14;
				if(this.pointY<0) this.pointY=0;
				if(this.pointY>14) this.pointY=14;
				if(this.map[this.pointX][this.pointY]==0)
				{
					this.my=-1;
					var cp=this.clickPoint(this.pointX,this.pointY,this.my);
					var baiSprite =cc.Sprite.create(res.s_bai);
					baiSprite.setScale(zoom);
					baiSprite.setAnchorPoint(0.45,0.6);
					baiSprite.setPosition(this.pointX*this.spaceX+this.startX,this.pointY*this.spaceY+this.startY);
					this.gameLayer.addChild(baiSprite,2);
					//定位棋子和边框
					this.pan.setPosition(this.pointX*this.spaceX+this.startX,this.pointY*this.spaceY+this.startY);
					///////////////压入历史记录栈
					this.history.push({x:this.pointX,y:this.pointY,sprite:baiSprite});
//					cc.AudioEngine.getInstance().playEffect(this.baiMusic, false);
					cc.audioEngine.playEffect(this.baiMusic, false);
					if(cp)
					{
						this.count++;
					}
				}
			}
		}
		/*if(this.isPlay==false) return false;//isPlay是不能下，锁定当前棋盘
        var getPoint = touch.getLocation();
        this.pointX=Math.round((getPoint.x-this.startX)/this.spaceX);
        this.pointY=Math.round((getPoint.y-this.startY)/this.spaceY);
        if(this.pointX<0) this.pointX=0;
        if(this.pointX>14) this.pointX=14;
        if(this.pointY<0) this.pointY=0;
        if(this.pointY>14) this.pointY=14;
        //
        if(this.map[this.pointX][this.pointY]==0)
        {
        var cp=this.clickPoint(this.pointX,this.pointY,this.my);
        var blackSprite =cc.Sprite.create(s_hei);
        blackSprite.setAnchorPoint(0.45,0.6);
        blackSprite.setPosition(this.pointX*this.spaceX+this.startX,this.pointY*this.spaceY+this.startY);
        this.gameLayer.addChild(blackSprite,2);
        cc.AudioEngine.getInstance().playEffect(this.heiMusic, false);
        if(cp)
        {
            this.AIPlay();
        }
         }*/
		return true;
	},
	//zhuodian
	clickPoint:function(x,y,my){
		//将棋子放入map
		this.map[x][y]=my;
		cc.log(x+","+y);
		//
		var k=0;
		var t=0;
		for(var i=0;i<15;i++)
		{
			for(var j=0;j<15;j++)
			{
				var m=this.map[i][j];
				if(m===-1)
				{
					k++;
				}
				if(m===0)
				{
					t++;
				}
			}
		}
		cc.log("bai"+k+" "+"kong"+t);
		//胜负判断
		cc.log("my"+my);
		if(this.isWin(x,y,my)){
			this.isPlay=false;
			setTimeout(function(){
				if (my==1){
					alert("恭喜，黑方赢了！");
				}else{
					alert("恭喜，白方赢了！");
				}
			}, 300);
			return false;
		}
		return true;
	},
	isWin:function(x,y,my){
		var map=this.map;
		//这里特殊说明一下，由于上面的得到xy的算法，从而使得正常的二维数组逆时针方向旋转了90度
		//横方向
		var arr=[];
		for(var i=0;i<map.length;i++)
		{
			arr.push(map[i][y]);
		}
		if(this.win(arr,my)) return true;
		//竖方向
		var arr=map[x];
		if(this.win(arr,my)) return true;
		//撇方向
		var arr=[];
		for(i=0;i<map.length;i++)
		{
			var temp=map[i][y-(x-i)];
			if(temp!==undefined)
			{
				arr.push(temp);
			}
		}
		if(this.win(arr,my)) return true;
		//捺方向
		var arr=[];
		for(i=0;i<map.length;i++)
		{
			var temp=map[i][y+(x-i)];
			if(temp!==undefined)
			{
				arr.push(temp);
			}
		}
		if(this.win(arr,my)) return true;
	},
	win:function(arr,my){
		var n=0;
		for(var i=0;i<arr.length;i++){
			if(arr[i]==my){
				n++;
				if(n==5) return true;
			}
			else{
				n=0;
			}
		}
		return false;
	}/*,
    AIPlay:function(){
        this.isPlay=false;
        this.my=-1;
        var pace=this.Ai.initData(this.map,this.my);
        //延时函数
        this.scheduleOnce(function(){
            cc.AudioEngine.getInstance().playEffect(this.baiMusic, false);
            var cp=this.clickPoint(pace.x,pace.y,this.my);
            var baiSprite =cc.Sprite.create(s_bai);
            //定位棋子和边框
            this.pan.setPosition(pace.x*this.spaceX+this.startX,pace.y*this.spaceY+this.startY);
            baiSprite.setAnchorPoint(0.45,0.6);
            baiSprite.setPosition(pace.x*this.spaceX+this.startX,pace.y*this.spaceY+this.startY);
            this.gameLayer.addChild(baiSprite,2);
            if(cp)
            {
                this.isPlay=true;
                this.my=1;
            }

        },1)//单位是秒
    }*/
})
