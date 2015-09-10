Syntec.controller('SyntectopPro21TA',['$scope','$http',function SyntectopPro21TA($scope,$http){
	$scope.bannerURL = "../images/topProduct/21TA/Banner.png";
	$scope.initBanner = function(){
		var picWidth = 2838;
		var picHeight = 824;

		var winW = document.body.offsetWidth;
 		if(winW < 1024){winW = 1024;}

 		$scope.fitHeight = (winW*picHeight)/picWidth;
 	}
}]);