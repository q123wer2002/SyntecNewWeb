Syntec.controller('SyntectopPro21TA',['$scope','$http',function SyntectopPro21TA($scope,$http){
	$scope.bannerURL = "../images/topProduct/21TA/Banner.png";
	
	$scope.initBanner = function(){
		var picWidth = 2838;
		var picHeight = 824;

		var winW = document.body.offsetWidth;
 		if(winW < 1024){winW = 1024;}

 		$scope.fitHeight = (winW*picHeight)/picWidth;
 	}

 	$scope.products_21TAs=[
 		{"no":1, 
 		"title":"控制器整合驅動介面", 
 		"description":"控制器上直接看閱讀、修改驅動器參數，<br>包含軸向驅動、主軸驅動；<br>驅動器的警報也會在控制器上直接顯示。<br>從此再也不需要打開電控箱去了解驅動器的情況，<br>控制器上就有所有的資訊。", 
 		"pictureURL":"../images/topProduct/21TA/pic(1).png",
 		"bgColor":"#ffffff"},
 		{"no":2, 
 		"title":"線上自動調機功能", 
 		"description":"現在，可以在控制器上完成主軸、軸向驅動的自動調機，<br>只需要在控制器上簡單設定然後啟動，機台就可以完成調適。<br>您不再需要抱著筆電並安裝PC軟件來調機，<br>聰明的控制器與驅動器合力幫您完成這個任務。", 
 		"pictureURL":"../images/topProduct/21TA/pic(2).png",
 		"bgColor":"#e7e7e7"},
 		{"no":3, 
 		"title":"多邊形加工、主軸同期支援性提升", 
 		"description":"多邊形加工與主軸同期是車銑複合機性能的指標之一，<br>受惠於強大的總線通訊與運動控制核心，<br>新的系統的性能比以前更強、整合度更高。<br>搭配新代主軸包套，<br>主軸同期角度誤差較原本泛用軸向與主軸時，縮小了一倍。<br>支援新代總線主軸搭配其他泛用軸向使用多邊形加工與主軸同期功能。", 
 		"pictureURL":"../images/topProduct/21TA/pic(3).png",
 		"bgColor":"#ffffff"},
 		{"no":4,
 		"title":"斜平面加工", 
 		"description":"撰寫加工程式在傾斜表面上，就像沒有旋轉一樣；<br>系統會自動的幫您旋轉座標。<br>傾斜平面上的銑削、鑽孔、攻牙，<br>都可以簡單手寫NC程式實現，不需要複雜的CAD/CAM處理，<br>有效率的實現複雜加工工藝。", 
 		"pictureURL":"../images/topProduct/21TA/pic(4).png",
 		"bgColor":"#e7e7e7"},
 		{"no":5,
 		"title":"高速車牙功能", 
 		"description":"新的車牙控制核心使用全新的動程規劃，<br>大幅改善車牙退尾加工問題，車出漂亮牙尾。<br>同時，新動程也改善車牙退尾振動問題，<br>機台震動減少，壽命增加。", 
 		"pictureURL":"../images/topProduct/21TA/pic(5).png",
 		"bgColor":"#ffffff"},
 		{"no":6,
 		"title":"客製資料安全性提升", 
 		"description":"21系列控制器使用memory on board設計，<br>搭配權限管理功能與加密保護功能，<br>您在的新代系統上使用Macro、<br>人機以及PLC自行開發的客製資料安全無虞，<br>保證您的差異化競爭優勢。", 
 		"pictureURL":"../images/topProduct/21TA/pic(6).png",
 		"bgColor":"#e7e7e7"},
 		{"no":7,
 		"title":"系統資訊頁面提供軸向與主軸資訊", 
 		"description":"從控制器可以看到驅動器與電機之型號與規格，<br>伺服系統資訊一目了然，客戶需要維修服務時，<br>透過畫面知道所有的資訊再出門，<br>節省維修溝通時間。", 
 		"pictureURL":"../images/topProduct/21TA/pic(7).png",
 		"bgColor":"#ffffff"}
 	];
}]);