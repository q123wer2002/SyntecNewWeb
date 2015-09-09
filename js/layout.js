var Syntec = angular.module('Syntec',['ngSanitize']);

Syntec.controller('SyntecLayout',['$scope','$http',function layout($scope,$http){
	$scope.menu=[
		{"id":"menu_1", "name":"關於新代", "showDetail":false},
		{"id":"menu_2", "name":"產品資訊", "showDetail":"isShowProduct"},
		{"id":"menu_3", "name":"客戶支援", "showDetail":false},
		{"id":"menu_4", "name":"人才招募", "showDetail":false},
		{"id":"menu_5", "name":"全球據點", "showDetail":false},
		{"id":"menu_6", "name":"登入", "showDetail":false},
		{"id":"menu_7", "name":"IMAGE","url":"images/earchIcon.png", "showDetail":false}
	];

	$scope.productMenuTitles=[
		{"id":"p6", "title":"其他產品"},
		{"id":"p5", "title":"操作介面"},
		{"id":"p3", "title":"控制器"},
		{"id":"p1", "title":"產品型錄"},
		{"id":"p2", "title":"伺服驅動器"},
		{"id":"p4", "title":"自動化"}			
	];

	$scope.productMenuSubNames=[
		//first
		{"pare_id":"p1", "name":"高速高精控制器", "linkURL":""},
		{"pare_id":"p1", "name":"SPD系列高性能驅動器", "linkURL":""},
		{"pare_id":"p1", "name":"泛用自動化控制器", "linkURL":""},
		{"pare_id":"p1", "name":"機械手臂控制器", "linkURL":""},
		{"pare_id":"p1", "name":"6CA磨床控制器型錄", "linkURL":""},
		//second
		{"pare_id":"p2", "name":"SP系列主軸電機", "linkURL":""},
		{"pare_id":"p2", "name":"7.5KW驅動器", "linkURL":""},
		{"pare_id":"p2", "name":"11KW驅動器", "linkURL":""},
		{"pare_id":"p2", "name":"18.5KW驅動器", "linkURL":""},
		//third
		{"pare_id":"p3", "name":"200系列", "linkURL":""},
		{"pare_id":"p3", "name":"21系列", "linkURL":""},
		{"pare_id":"p3", "name":"20系列", "linkURL":""},
		{"pare_id":"p3", "name":"11系列", "linkURL":""},
		{"pare_id":"p3", "name":"10系列", "linkURL":""},
		{"pare_id":"p3", "name":"6系列", "linkURL":""},
		{"pare_id":"p3", "name":"3A", "linkURL":""},
		{"pare_id":"p3", "name":"Super", "linkURL":""},
		//forth
		{"pare_id":"p4", "name":"eHMC", "linkURL":""},
		{"pare_id":"p4", "name":"21R", "linkURL":""},
		{"pare_id":"p4", "name":"FC", "linkURL":""},
		//fixth
		{"pare_id":"p5", "name":"ST4018", "linkURL":""},
		{"pare_id":"p5", "name":"ST4012", "linkURL":""},
		{"pare_id":"p5", "name":"ST2625", "linkURL":""},
		{"pare_id":"p5", "name":"ST3030", "linkURL":""},
		{"pare_id":"p5", "name":"ST104421", "linkURL":""},
		{"pare_id":"p5", "name":"ST104025", "linkURL":""},
		{"pare_id":"p5", "name":"ST3025", "linkURL":""},
		{"pare_id":"p5", "name":"ST4010", "linkURL":""},
		{"pare_id":"p5", "name":"ST1220", "linkURL":""},
		{"pare_id":"p5", "name":"ST1023", "linkURL":""},
		{"pare_id":"p5", "name":"雙程式操作面板", "linkURL":""},
		{"pare_id":"p5", "name":"ST4410", "linkURL":""},
		{"pare_id":"p5", "name":"ST4412", "linkURL":""},
		{"pare_id":"p5", "name":"ST1030", "linkURL":""},
		//sixth
		{"pare_id":"p6", "name":"輸出入端子台", "linkURL":""},
		{"pare_id":"p6", "name":"RIO模組", "linkURL":""},
		{"pare_id":"p6", "name":"鍵盤", "linkURL":""},
		{"pare_id":"p6", "name":"防水盒", "linkURL":""},
		{"pare_id":"p6", "name":"硬體板", "linkURL":""},
		{"pare_id":"p6", "name":"線材", "linkURL":""},
		{"pare_id":"p6", "name":"顯示器", "linkURL":""},
		{"pare_id":"p6", "name":"TOUCH", "linkURL":""}
	];

	$scope.showMyDetail = function(item){
		var totalLeft = 0;
		var myWidth = document.getElementById(item.id).offsetWidth;
		
		if(item.showDetail == "isShowProduct" && !$scope.isShowProductList){
			$scope.isShowProductList=true;
			for (var i=0; i<$scope.menu.length; i++){
				if($scope.menu[i].id != item.id){
					var thisWidth = document.getElementById($scope.menu[i].id).offsetWidth;
					totalLeft += thisWidth;
				}else{
					break;
				}
			}
			totalLeft += 2;
			$scope.myBarSlide={"width":myWidth,"margin-left":totalLeft};
			
			document.activeElement.blur();
			return;
		}
		else if(item.showDetail == "isShowProduct"){
			$scope.isShowProductList=false;
			$scope.myBarSlide={"width":"0px","margin-left":"42px"};
			document.activeElement.blur();
			return;
		}
		else{
			$scope.isShowProductList=false;
		}
		
		for (var i=0; i<$scope.menu.length; i++){
			if($scope.menu[i].id != item.id){
				var thisWidth = document.getElementById($scope.menu[i].id).offsetWidth;
				totalLeft += thisWidth;
			}else{
				break;
			}
		}
		totalLeft += 2;
		$scope.myBarSlide={"width":myWidth,"margin-left":totalLeft};
	}

	$scope.closeMyDetail = function(item){
		if(item.showDetail == "isShowProduct" && $scope.isShowProductList){
			return;
		}
		$scope.myBarSlide={"width":"0px","margin-left":"42px"};
	}

}]);