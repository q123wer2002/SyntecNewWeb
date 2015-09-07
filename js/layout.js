var Syntec = angular.module('Syntec',[]);

Syntec.controller('SyntecLayout',['$scope','$http',function layout($scope,$http){
	$scope.menu=[
		{"id":"menu_1", "name":"關於新代", "showDetail":false},
		{"id":"menu_2", "name":"產品資訊", "showDetail":false},
		{"id":"menu_3", "name":"客戶支援", "showDetail":false},
		{"id":"menu_4", "name":"人才招募", "showDetail":false},
		{"id":"menu_5", "name":"全球據點", "showDetail":false},
		{"id":"menu_6", "name":"登入", "showDetail":false},
		{"id":"menu_7", "name":"IMAGE","url":"images/IconBlack.ico", "showDetail":false}
	];

	$scope.showMyDetail = function(item){
		var totalLeft = 0;
		var myWidth = document.getElementById(item.id).offsetWidth;
		
		for (var i=0; i<$scope.menu.length; i++){
			if($scope.menu[i].id != item.id){
				var thisWidth = document.getElementById($scope.menu[i].id).offsetWidth;
				totalLeft += thisWidth;
			}else{
				break;
			}
		}
		totalLeft += 2;
		console.log(totalLeft);
		$scope.myBarSlide={"width":myWidth,"margin-left":totalLeft};
	}
}]);