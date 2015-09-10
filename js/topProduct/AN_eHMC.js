Syntec.controller('SyntectopProeHMC',['$scope','$http',function SyntectopProeHMC($scope,$http){
	$scope.bannerURL = "../images/topProduct/eHMC/Banner.png";
	
	$scope.initBanner = function(){
		var picWidth = 2838;
		var picHeight = 824;

		var winW = document.body.offsetWidth;
 		if(winW < 1024){winW = 1024;}

 		$scope.fitHeight = (winW*picHeight)/picWidth;
 	}

 	$scope.products_21TAs=[
 		{"no":1, 
 		"title":"開發工具", 
 		"description":"新代提供畫面開發工具eHMI及階梯圖編輯軟體PLCEditor，<br>以圖形拖拉式元件為主，易學易用。<br>畫面與PLC及系統的暫存器、參數等資訊緊密配合，<br>可直接顯示與畫面上或由畫面控制系統。<br>提供模擬環境，免安裝下載即用，<br>可完整測試畫面、PLC、MACRO的開發狀況。", 
 		"pictureURL":"../images/topProduct/eHMC/pic (1).png",
 		"bgColor":"#ffffff"},
 		{"no":2, 
 		"title":"點到點 vs 多軸差補", 
 		"description":"(串列系列特有功能)<br>不需多軸差補時，可使用串列點到點功能，<br>使用PLC即可進行控制，與差補軸可觸立規劃，增加彈性。<br>點到點功能於多軸使用下，不佔太多系統效能，<br>M2 最高支援 30 軸，M3 可支援 62 軸。", 
 		"pictureURL":"../images/topProduct/eHMC/pic (2).png",
 		"bgColor":"#e7e7e7"},
 		{"no":3, 
 		"title":"電子凸輪", 
 		"description":"電子凸輪功能可於控制器中，匯入凸輪機構的位置關係式，<br>設計較傳統簡單。使用控制器內建的PLC自行決定觸發時機，<br>提供8組共32條位置關係式，<br>可達成自動化應用中飛剪及追剪相關功能。", 
 		"pictureURL":"../images/topProduct/eHMC/pic (3).png",
 		"bgColor":"#ffffff"},
 		{"no":4,
 		"title":"檔案管理", 
 		"description":"程式或是配方的管理，內建管理介面，<br>避免人員輸入錯誤。", 
 		"pictureURL":"../images/topProduct/eHMC/pic (4).png",
 		"bgColor":"#e7e7e7"},
 		{"no":5,
 		"title":"視覺應用", 
 		"description":"最大支援 4 組相機，控制器上 HMI 直接顯示視覺影像，<br>省下外掛螢幕顯示器。高度整合視覺與軸向、PLC，<br>二次開發容易且不需具備高階語言的能力，<br>使用 G code 就可以輕鬆使用視覺功能。", 
 		"pictureURL":"../images/topProduct/eHMC/pic (5).png",
 		"bgColor":"#ffffff"},
 		{"no":6,
 		"title":"遠端監控功能", 
 		"description":"提供機械廠及終端整廠應用，可遠端診斷機台問題，<br>遠端更新、備份，生產線管理，並可客制專屬監控畫面，<br>並可輸出成 excel 報表做二次報表分析處理。", 
 		"pictureURL":"../images/topProduct/eHMC/pic (6).png",
 		"bgColor":"#e7e7e7"},
 		{"no":7,
 		"title":"客製資料安全性提升", 
 		"description":"eHMC系列控制器使用memory on board設計，<br>搭配權限管理功能與加密保護功能，<br>您在的新代系統上使用Macro、人機<br>以及PLC自行開發的客製資料安全無虞，<br>保證您的差異化競爭優勢。", 
 		"pictureURL":"../images/topProduct/eHMC/pic (7).png",
 		"bgColor":"#ffffff"},
 		{"no":8,
 		"title":"權限管理功能", 
 		"description":"提供機械廠，設定終端客戶操作權限，<br>防止操作錯誤或誤改重要參數等導致機台故障，<br>也避免PLC和MACRO等相關機密被竊取。<br>提供終端客戶管理者，對於不同類型的操作人員，<br>設定對應的操作權限，可避免選檔錯誤、擅自編輯加工檔等。", 
 		"pictureURL":"../images/topProduct/eHMC/pic (8).png",
 		"bgColor":"#e7e7e7"},
 		{"no":9,
 		"title":"控制器整合驅動器介面", 
 		"description":"(串列系列特有功能)<br>控制器上直接閱讀、修改驅動器參數；<br>驅動器警報也會在控制器上直接顯示。<br>從此再也不需要打開電控箱去了解驅動器的情況，<br>控制器上就有所有的資訊。<br>同時也可以在控制器上完成軸向驅動自動調機，<br>只需在控制器上簡單設定然後啟動，機台就可以完成調適。<br>您不再需要抱著筆電並安裝PC軟件來調機，<br>聰明的控制器與驅動器合力幫您完成這個任務。", 
 		"pictureURL":"../images/topProduct/eHMC/pic (9).png",
 		"bgColor":"#ffffff"},
 		{"no":10,
 		"title":"系統資訊頁面提供軸向資訊", 
 		"description":"(串列系列特有功能)<br>從控制器可以看到驅動器與電機之型號與規格，<br>伺服系統資訊一目了然，客戶需要維修服務時，<br>透過畫面知道所有的資訊再出門，節省維修溝通時間。", 
 		"pictureURL":"../images/topProduct/eHMC/pic (10).png",
 		"bgColor":"#e7e7e7"}
 	];
}]);