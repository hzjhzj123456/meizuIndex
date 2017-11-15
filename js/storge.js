			var mySwiper = new Swiper ('.lunbo', {
			      loop: true,
			      autoplay: 5000,
			      pagination: '.swiper-pagination',
			      paginationClickable :true,
			    });
			var mySwiper = new Swiper ('.findPhone', {
			      loop: true,
			      //autoplay: 5000,
			      pagination: '.swiper-pagination',
			      nextButton: '.swiper-button-next',
    			  prevButton: '.swiper-button-prev',
    			  paginationClickable :true,
			    });
			var app=angular.module('meizu',[]);
			app.controller('nav',function($scope){
				$scope.classname='nav';
				$scope.xiaoshi=true;
				$scope.denglu = false;
				$scope.before=true;
				$scope.after=true;
				$scope.left=false;
				$scope.right=false;
				//$scope.aa=true;
				$scope.navlist=['魅族商城','魅族手机','魅蓝手机','魅族声学','智能配件','服务','专卖店','Flyme','社区'];
				$scope.meizu=[{imgsrc:'images/pro7_486382d.png',content:'魅族 pro7'},
							  {imgsrc:'images/pro6plus_e6bf23a.png',content:'魅族 pro6 Plus'},
							  {imgsrc:'images/pro6s_e769573.png',content:'魅族 pro 6s'},
							  {imgsrc:'images/mx6_23e5fc6.png',content:'魅族 MX6'},
							  {imgsrc:'images/pro6_d31bab6.png',content:'魅族 pro 6'},
				       		];
				$scope.meilan=[{imgsrc:'images/m5a_1c3d55b.png',content:'魅蓝 A5'},
							   {imgsrc:'images/m5a_1c3d55b.png',content:'魅蓝 E2'},
							   {imgsrc:'images/m5s_357ada5.png',content:'魅蓝 5S'},
							   {imgsrc:'images/m5note_77497bf.png',content:'魅蓝 NOTE 5'},
							   {imgsrc:'images/m3x_9846898.png',content:'魅蓝 x'},
							   {imgsrc:'images/m5_45957e3.png',content:'魅蓝 5'},
							   {imgsrc:'images/m3max_d7883c0.png',content:'魅蓝 Max'},
							   {imgsrc:'images/m3e_a922cdc.png',content:'魅蓝 E'},
							];
				$scope.shengxue=[{imgsrc:'images/flow_5074873.png',content:'魅族 Flow'},
				                 {imgsrc:'images/a20_f381ebd.png',content:'魅族蓝牙小音箱'},
				                 {imgsrc:'images/ep2x_d112722.png',content:'魅族 EP2X'},
				                 {imgsrc:'images/ep51_7b728d8.png',content:'魅族 EP51'},
				                 {imgsrc:'images/hd50_0ef1eab.png',content:'魅族 HD50'},
				            ];
				$scope.peijian=[{imgsrc:'images/travellingbag_08eef7c.png',content:'魅族旅行包'},
								{imgsrc:'images/band_7b3ed26.png',content:'魅族手环'},
								{imgsrc:'images/mix_3e3cebd.png',content:'智能手表 Mix'},
								{imgsrc:'images/musiccard_77b8fdf.png',content:'音乐智能保护套'},
								{imgsrc:'images/tvbox_cd026fb.png',content:'魅族盒子'},
								{imgsrc:'images/backpack_b762aa8.png',content:'魅族双肩包'},
								{imgsrc:'images/loopjacket_003383b.png',content:'环窗智能保护套'},
								{imgsrc:'images/router_s_82d6bf4.png',content:'路由器极速版'},
							];
				$scope.bricklist=[
								{img:'images/indexBrick0.jpg',title:'魅友福利',content:'各种惊喜等你开启'},
								{img:'images/indexBrick1.jpg',title:'魅蓝 Note5',content:'6期免息 64G赠送199元耳机'},
								{img:'images/indexBrick2.jpg',title:'PRO 6 Plus',content:'12期免息 夏季特惠300元'},
								{img:'images/indexBrick3.jpg',title:'魅蓝E2',content:'三色现货 享3期免息'},
							];
				$scope.accessorylist=[
								{img:'picture/icon-accessory_09_6672e22.png',content:'手机'},
								{img:'picture/icon-accessory_03_b711b7b.png',content:'壳膜套'},
								{img:'picture/icon-accessory_07_e9ae0f8.png',content:'数据线'},
								{img:'picture/icon-accessory_09_6672e22.png',content:'电源适配器'},
								{img:'picture/icon-accessory_12_3fef751.png',content:'数码影音'},
								{img:'picture/icon-accessory_04_101ba8c.png',content:'智能硬件'},
								{img:'picture/icon-accessory_08_1c070e9.png',content:'生活周边'},
								{img:'picture/icon-accessory_10_7469bbb.png',content:'所有分类'},
							];
				$scope.staticlist=[
								   {img1:'images/Cgbj0Vl5vaaAX_-uAABNj0-DMBI604.png',img2:'images/Cgbj0VlHm8iAf_gwAACzl5INl6w813.png',title:'魅族 PRO 6S',content:'直降200元 购机仅需2299',money:'￥2299'},
								   {img1:'images/Cgbj0VlHm8eAJkgyAADuMyvobrw424.png',img2:'images/Cgbj0VlHm8iAf_gwAACzl5INl6w813.png',title:'魅族 PRO 6plus',content:'12期免息 夏季特惠200元',money:'￥2699起'},
								   {img1:'images/Cgbj0VlHm8qAOPw1AABBj3wBaPE921.png',img2:'images/Cgbj0VlHm8iAf_gwAACzl5INl6w813.png',title:'魅蓝 E2',content:'三色现货 享3期免息',money:'￥1299起'},
								   {img1:'images/Cgbj0VlHqnCAT3oDAABrnh5859s655.png',img2:'images/Cgbj0VlHm8iAf_gwAACzl5INl6w813.png',title:'魅蓝 Note5',content:'6期免息 64G赠199元耳机',money:'￥899起'},
							]
				$scope.findphone1=[
								   {img:'images/smallPhoneF0.png',title:'魅蓝 E',content:'特惠100元 享3期免息',money:'限时特惠 ￥999'},
								   {img:'images/smallPhoneF1.png',title:'魅蓝 5S',content:'32G限量赠保护盒壳+膜',money:'￥799起'},
								   {img:'images/smallPhoneF2.png',title:'魅族 MX6',content:'全金属拍照旗舰 享6期免息',money:'￥1599起'},
								   {img:'images/smallPhoneF3.png',title:'魅族 5',content:'购机享3期免息 高清屏长续航',money:'￥699起'},		   
								];
				$scope.staticAccessorylist=[
											{imgbefore:'images/accessory0.png',imgafter:'images/accessory1.png',title:'魅族HD50 头戴式耳机',content:'清新简洁，有音质更有颜值',money:'￥ 399'},
											{imgbefore:'images/accessory3.png',imgafter:'images/accessory2.png',title:'魅族手环',content:'腕间流动的心率专家',money:'￥ 299'},
											{imgbefore:'images/accessory5.png',imgafter:'images/accessory4.png',title:'魅族 EP51 蓝牙运动耳机',content:'丛林绿/云雾蓝新品开售',money:'￥ 269'},
											{imgbefore:'images/accessory7.png',imgafter:'images/accessory6.png',title:'魅族 悠闲旅行双肩包',content:'极简与线条之美',money:'￥ 199'},
											{imgbefore:'images/accessory8.png',imgafter:'images/accessory9.png',title:'魅族 Ep2X耳机',content:'契合声音的流动之美',money:'￥ 129'},
											{imgbefore:'images/accessory10.png',imgafter:'images/accessory11.png',title:'魅族移动电源（标准版）',content:'素雅百搭，颜值典范',money:'￥ 99'},
											{imgbefore:'images/accessory12.png',imgafter:'images/accessory13.png',title:'魅族HD50 头戴式耳机',content:'清新简洁，有音质更有颜值',money:'￥ 399'},
											{imgbefore:'images/accessory14.png',imgafter:'images/accessory15.png',title:'魅族盒子一键找回遥控器',content:'一键找回遥控器',money:'￥ 399'},
											{imgbefore:'images/accessory16.png',imgafter:'images/accessory17.png',title:'魅族蓝牙小音箱',content:'好音感 直达心灵',money:'￥ 169'},
											{imgbefore:'images/accessory18.png',imgafter:'images/accessory19.png',title:'魅族路由器 极速版',content:'天生不凡 快狠稳',money:'￥ 199'},
											{imgbefore:'images/accessory20.png',imgafter:'images/accessory21.png',title:'Hi Case趣闪亮壳',content:'专为魅蓝E2量身打造',money:'￥ 79'},
											{imgbefore:'images/accessory22.png',imgafter:'images/accessory23.png',title:'魅族 蓝牙通话耳机',content:'经典小圆点 一键集大成',money:'￥ 89'},						
										];
				$scope.servicelist=[
									{img:'images/icon-server_01_2456be2.png',content:'真伪查询'},
									{img:'images/icon-server_07_302a6a8.png',content:'以旧换新'},
									{img:'images/icon-server_02_5ccb3fa.png',content:'系统下载'},
									{img:'images/icon-server_03_dd9f418.png',content:'注册产品'},
									{img:'images/icon-server_04_3098394.png',content:'查找手机'},
									{img:'images/icon-server_10_54cdec5.png',content:'云服务'},
									{img:'images/icon-server_08_1e67123.png',content:'M码通道'},
								];
				$scope.topnavlist=['手机','智能设备','智能穿戴','游戏设备','数码影音','手机配件/移动电源','移动存储/办公设备','生活周边'];
				$scope.bbslist=[{bigimg:'images/Cgbj0VmJca6AEj1VAAFhmdKA9-k843.jpg',smallimg:'images/w100h100.jpg',title:'Dimiphanton',watch:'39288',common:'1861',content:'海外媒体眼中的 PRO7'},
								{bigimg:'images/Cgbj0VmJca6AfAM2AAFeV-eUhGk940.jpg',smallimg:'images/w100h100 (1).jpg',title:'笔戈科技',watch:'17643',common:'1009',content:'pro7 延时摄影|看尽西藏之美'},
								{bigimg:'images/Cgbj0FmJca6AWdilAABHyxS313g217.jpg',smallimg:'images/w100h100 (2).jpg',title:'王员外可爱多',watch:'31563',common:'2788',content:'PRO7 双摄成像的秘密'},
								{bigimg:'images/Cgbj0FmJca6AMu9dAADIpp_Lrzg117.jpg',smallimg:'images/w100h100.jpg',title:'Dimiphanton',watch:'33206',common:'1559',content:'魅族Flow 耳机最昂贵的配件'},
							];
				$scope.footerlist=[
								{img:'images/SF.png',title:'全场包邮'},
								{img:'images/SF.png',title:'百城速达'},
								{img:'images/SF.png',title:'7天无理由退货'},
								{img:'images/SF.png',title:'15天换货保障'},
								{img:'images/SF.png',title:'1年免费保修'},
								{img:'images/SF.png',title:'2300+线下体验店'},
								{img:'images/SF.png',title:'远程支持服务'},
								{img:'images/SF.png',title:'上门快修'},
							];
				$scope.infolist=['了解魅族','加入我们','联系我们','Flyme','魅族社区','天猫旗舰店','问题反馈','线上销售授权名单公示'];
				$scope.changebg=function($event,$index){
					if($index===1||$index===2||$index===3||$index===4){
						angular.element(document.querySelector('.nav')).addClass('active');
						angular.element(document.querySelector('.right')).addClass('active');
					}
					if($index===0||$index===5||$index===6||$index===7||$index===8){
						angular.element(document.querySelector('.nav')).removeClass('active');
						angular.element(document.querySelector('.meizu')).removeClass('active');
						angular.element(document.querySelector('.meilan')).removeClass('active');
						angular.element(document.querySelector('.shengxue')).removeClass('active');
						angular.element(document.querySelector('.peijian')).removeClass('active');
					}
					if($index===1){
						angular.element(document.querySelector('.meizu')).addClass('active');
						angular.element(document.querySelector('.meilan')).removeClass('active');
						angular.element(document.querySelector('.shengxue')).removeClass('active');
						angular.element(document.querySelector('.peijian')).removeClass('active');
					}
					if($index===2){
						angular.element(document.querySelector('.meizu')).removeClass('active');
						angular.element(document.querySelector('.meilan')).addClass('active');
						angular.element(document.querySelector('.shengxue')).removeClass('active');
						angular.element(document.querySelector('.peijian')).removeClass('active');	
					}
					if($index===3){
						angular.element(document.querySelector('.meizu')).removeClass('active');
						angular.element(document.querySelector('.meilan')).removeClass('active');
						angular.element(document.querySelector('.shengxue')).addClass('active');
						angular.element(document.querySelector('.peijian')).removeClass('active');
					}
					if($index===4){
						angular.element(document.querySelector('.meizu')).removeClass('active');
						angular.element(document.querySelector('.meilan')).removeClass('active');
						angular.element(document.querySelector('.shengxue')).removeClass('active');
						angular.element(document.querySelector('.peijian')).addClass('active');
					}	
				}
//				$scope.leavebg=function($event,$index){
//					if($index===1){
//						angular.element(document.querySelector('.meizu')).removeClass('active');
//					}
//					if($index===2){
//						angular.element(document.querySelector('.meilan')).removeClass('active');
//					}
//					if($index===3){
//						angular.element(document.querySelector('.shengxue')).removeClass('active');
//					}
//					if($index===4){
//						angular.element(document.querySelector('.peijian')).removeClass('active');
//					}
//				}
				$scope.denglus=function(){
					$scope.denglu=true;
					$scope.xiaoshi=false;
				}
				$scope.dengluleave=function(){
					$scope.denglu=false;
					$scope.xiaoshi=true;
					console.log(123);
				}
				$scope.navleave=function(){
					angular.element(document.querySelector('.nav')).removeClass('active');
					angular.element(document.querySelector('.meizu')).removeClass('active');
					angular.element(document.querySelector('.meilan')).removeClass('active');
					angular.element(document.querySelector('.shengxue')).removeClass('active');
					angular.element(document.querySelector('.peijian')).removeClass('active');
				}
//				$scope.phonetrans=function($event,$index){
//					$scope.before=false;
//					$scope.after=false;
//					$scope.left=true;
//					$scope.right=true;
//				}
//				$scope.phoneleave=function($event,$index){
//					$scope.before=true;
//					$scope.after=true;
//					$scope.left=false;
//					$scope.right=false;
//				}
				
			});
			var topNav=document.querySelector('.top-nav');
			var rightNav=document.querySelectorAll('.right-nav ul li');
//			console.log(rightNav);
//			console.log(topNav);
			rightNav=Array.from(rightNav);
			window.addEventListener('scroll',function(event){
				if(scrollY>340){
					topNav.classList.add('active');
					//rightNav.classList.add('active');
					for (var i=0;i<rightNav.length;i++) {
						rightNav[i].classList.add('active');
					}
				}else{
					topNav.classList.remove('active');
					for (var i=0;i<rightNav.length;i++) {
						rightNav[i].classList.remove('active');
					}
				}
			});
