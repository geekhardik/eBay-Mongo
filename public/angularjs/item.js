
var app = angular.module('myApp',[]);

app.controller('item',function($scope,$http,$window){
	
	$scope.bid_tab = true;
	$scope.bid_desc = true;
	$scope.bid_btn = true;
	$scope.cart_btn = true;
	$scope.qty_field = true;
	
//	$scope.validlogin = true;
	
	
	$scope.id = $window.id;
	$scope.getitem = function(x){	
	console.log("Item : "+$scope.id);
	$http({			
		method: "POST",
		url : '/item',
		data : {
			"id" : $scope.id
		}
					
	}).success(function(data){
		if (data.list) {			
			
			if(data.list == "redirect"){
				window.location.assign('home');
			}else{			
			$scope.x = data.list[0];
			
			//check if the item is in auction!
		
			if(data.list[0].price_option == "auction"){
				$scope.bid_tab = false;
				$scope.bid_desc = false;
				$scope.bid_btn = false;
				$scope.cart_btn = true;				
			}else{
				$scope.bid_tab = true;
				$scope.bid_desc = true;
				$scope.bid_btn = true;
				$scope.cart_btn = false;	
				$scope.qty_field = false;
			}
			}
		}else{
			alert("somthing's wrong in callback of item.js");
		}
	});	
};
	
	/*if($scope.qty > $scope.x.qty){
		alert("You have exceeded qty that seller has listed for sale!");
	}*/
	

	
	$scope.cart = function(x){	
		var a = Number($scope.qty);
		var b = Number(x.qty);
		if(a > b){
			alert("You have exceeded qty that seller has listed for sale!");
			
		}else{	
		
			$http({			
				method: "POST",
				url : '/cart',
				data : {
					"obj" : x,
					"qty" : $scope.qty,
					"check" : "cart"
				}
							
			}).success(function(data){
				if (data.success == 200) {
					console.log("done");
					window.location.assign('cart');
								
				}else{
					alert("Please sign-in first!");
					window.location.assign('signin');
					
				}
			});
		}
	}
	
	$scope.bid = function(x){	
		
		
				
		
			$http({			
				method: "POST",
				url : '/bid',
				data : {
					"obj" : x,
					"bid_price" : $scope.bid_amount,
					"check" : "bid"
				}
							
			}).success(function(data){
				if (data.success == 200) {
					console.log("done");
					alert("you have successfully place your bid! Best Luck!");
					window.location.assign('home');
								
				}else{
					alert("Please sign-in first!");
					window.location.assign('signin');
					
				}
			});
		}
	
	
	
	$http({			
		method: "POST",
		url : '/home',
					
	}).success(function(data){
		if (data.entry) {
			
			$scope.sign = data.entry;
			$scope.username = data.name;	
			
		}else{
			alert("somthing's wrong in callback of home.js");
		}
	});	
	
	
	
	
	
});
	

	