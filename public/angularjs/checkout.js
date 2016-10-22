
var app = angular.module('myApp',[]);

app.controller('checkout',function($scope,$http){
		
	$scope.getcart = function(){	
	$http({			
		method: "POST",
		url : '/getCart',						
	}).success(function(data){
		if(data.cart){
			$scope.cart_check = data.cart;
			$scope.price = data.price;	
		}else{
			alert("somthing's wrong in callback of cart.js");
		}
	});	
};

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


	$scope.buy = function(){	
	console.log("in buy!");
	$http({			
		method: "POST",
		url : '/boughtPage',
		data : {
			"cart" : $scope.cart_check,
			"total" : $scope.price,
			"cc": $scope.cc ,
			"cvv": $scope.cvv,
			"exp_month": $scope.exp_month,
			"exp_year": $scope.exp_year
		}
					
	}).success(function(data){
		if (data.message == 200) {
			alert("Thank you for placing the order. your product will be delivered to you shortly.");
			window.location.assign('home');
						
		}else{
			alert(data.message);
		}
	});
};

$scope.signcheck = function(){
	
	if($scope.sign == "signout"){
		$http({			
			method: "POST",
			url : '/logout',
						
		}).success(function(data){
			if (data.statusCode == 401) {
				alert("somthing's wrong in callback of home.js");
			}
			else
				//Making a get call to the '/redirectToHomepage' API
				alert("You are successfully logged out from eBay! Happy shopping..");
				window.location.assign("/signin");
			
		}).error(function(error){
			console.log(data.msg);
			$scope.result = data.msg;			
		});
	}
else{
	window.location.assign("/signin");
}
}	
	
});
	

	