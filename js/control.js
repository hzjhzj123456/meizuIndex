			app.controller('nav',function($scope){
//				$scope.classname='nav';
//				$scope.xiaoshi=true;
//				$scope.denglu = false;
//				//$scope.aa=true;
//				$scope.navlist=['魅族商城','魅族手机','魅蓝手机','魅族声学','智能配件','服务','专卖店','Flyme','社区'];
//				$scope.meizu=[{imgsrc:'images/pro7_486382d.png',content:'魅族 pro7'},
//							  {imgsrc:'images/pro7_486382d.png',content:'魅族 pro6 Plus'},
//							  {imgsrc:'images/pro7_486382d.png',content:'魅族 pro 6s'},
//							  {imgsrc:'images/pro7_486382d.png',content:'魅族 MX6'},
//							  {imgsrc:'images/pro7_486382d.png',content:'魅族 pro 6'},
//				       		];
//				$scope.meilan=[{imgsrc:'images/m5a_1c3d55b.png',content:'魅蓝 A5'},
//							   {imgsrc:'images/m5a_1c3d55b.png',content:'魅蓝 E2'},
//							   {imgsrc:'images/m5a_1c3d55b.png',content:'魅蓝 5S'},
//							   {imgsrc:'images/m5a_1c3d55b.png',content:'魅蓝 NOTE 5'},
//							   {imgsrc:'images/m5a_1c3d55b.png',content:'魅蓝 x'},
//							   {imgsrc:'images/m5a_1c3d55b.png',content:'魅蓝 5'},
//							   {imgsrc:'images/m5a_1c3d55b.png',content:'魅蓝 Max'},
//							   {imgsrc:'images/m5a_1c3d55b.png',content:'魅蓝 E'},
//							];
//				$scope.shengxue=[{imgsrc:'images/m5a_1c3d55b.png',content:'魅族 Flow'},
//				                 {imgsrc:'images/m5a_1c3d55b.png',content:'魅族蓝牙小音箱'},
//				                 {imgsrc:'images/m5a_1c3d55b.png',content:'魅族 EP2X'},
//				                 {imgsrc:'images/m5a_1c3d55b.png',content:'魅族 EP51'},
//				                 {imgsrc:'images/m5a_1c3d55b.png',content:'魅族 HD50'},
//				            ];
//				$scope.peijian=[{imgsrc:'images/m5a_1c3d55b.png',content:'魅族旅行包'},
//								{imgsrc:'images/m5a_1c3d55b.png',content:'魅族手环'},
//								{imgsrc:'images/m5a_1c3d55b.png',content:'智能手表 Mix'},
//								{imgsrc:'images/m5a_1c3d55b.png',content:'音乐智能保护套'},
//								{imgsrc:'images/m5a_1c3d55b.png',content:'魅族盒子'},
//								{imgsrc:'images/m5a_1c3d55b.png',content:'魅族双肩包'},
//								{imgsrc:'images/m5a_1c3d55b.png',content:'环窗智能保护套'},
//								{imgsrc:'images/m5a_1c3d55b.png',content:'路由器极速版'},
//							];
//				$scope.bricklist=[
//								{img:'images/m5a_1c3d55b.png',title:'魅友福利',content:'各种惊喜等你开启'},
//								{img:'images/m5a_1c3d55b.png',title:'魅蓝 Note5',content:'6期免息 64G赠送199元耳机'},
//								{img:'images/m5a_1c3d55b.png',title:'PRO 6 Plus',content:'12期免息 夏季特惠300元'},
//								{img:'images/m5a_1c3d55b.png',title:'魅蓝E2',content:'三色现货 享3期免息'},
//							];
//				$scope.accessorylist=[
//								{img:'picture/icon-accessory_09_6672e22.png',content:'手机'},
//								{img:'picture/icon-accessory_09_6672e22.png',content:'壳膜套'},
//								{img:'picture/icon-accessory_09_6672e22.png',content:'数据线'},
//								{img:'picture/icon-accessory_09_6672e22.png',content:'电源适配器'},
//								{img:'picture/icon-accessory_09_6672e22.png',content:'数码影音'},
//								{img:'picture/icon-accessory_09_6672e22.png',content:'智能硬件'},
//								{img:'picture/icon-accessory_09_6672e22.png',content:'生活周边'},
//								{img:'picture/icon-accessory_09_6672e22.png',content:'所有分类'},
//							];
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
			});