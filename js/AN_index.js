Syntec.controller('SyntecIndex',['$scope','$http',function index($scope,$http){
	$scope.Banner_slogon = "新代科技 -- 機床行業最值得信賴的電控夥伴";
	
	$scope.SyntecTop_title = "新代科技TOP關注";
	$scope.SyntecTop_hint = "你會發現最棒的熱門產品都在這裡，必且我們提供完整業務諮詢";
	$scope.hotProducts=[
		{"id":"product1", "title":"21TA", "description":"兩軸車 車铣複合", "pictureURL":"images/index/topProduct/21TA.jpg", "linkURL":""},
		{"id":"product2", "title":"21MA", "description":"雕铣機, Tapping", "pictureURL":"images/index/topProduct/21MA.jpg", "linkURL":""},
		{"id":"product3", "title":"", "description":"質感升級！全平面eHMC", "pictureURL":"images/index/topProduct/eHMC.jpg", "linkURL":""},
		{"id":"product4", "title":"21R", "description":"機器人控制器", "pictureURL":"images/index/topProduct/21R.jpg", "linkURL":""}
	];

	$scope.topOthers=[
		{"parent":"新代子公司", "name":"聯達自動化", "desID":"other_1", "description":"製造業最值得信賴的智能化夥伴<br>2015年，蘇州聯達自動化設備有限公司誕生了。", "pictureURL":"images/index/Leantec.png", "linkURL":""},
		{"parent":"產品型錄", "name":"", "desID":"other_2", "description":"我們提供最完整的產品型錄，並且不定期更新<br>目前官方提供繁體中文、簡體中文、英文三種版本<br>歡迎進入此區瞭解更多產品資訊", "pictureURL":"images/index/productInfo.png", "linkURL":""}
	];

	$scope.trustedHtml = function () {
		for(var i=0; i<$scope.topOthers.length; i++){
			document.getElementById($scope.topOthers[i].desID).innerHTML = $scope.topOthers[i].description;
		}
    }

}]);