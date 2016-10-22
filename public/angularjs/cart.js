
var app = angular.module('myApp',[]);

app.controller('cart',function($scope,$http){
		
	$scope.load = function(){	
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


	$scope.delet = function(x){	
	console.log(x);
		$http({			
		method: "POST",
		url : '/delet_cartitem',
		data :{
			"obj" : x,
		}
	}).success(function(data){
		if(data.success == "200"){
			window.location.assign('cart');		
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

	$scope.home = function(){
		window.location.assign('home');
	}
	$scope.checkout = function(){	
		
		$http({			
			method: "POST",
			url : '/gotoCheckout',
			/*data : {
				
			}*/
						
		})
		.success(function(data){
			if (data.success == 200) {
				window.location.assign('checkout');
							
			}else{
				alert("something is wrong in checking out!!");
						
			}
		});
	}
	
	
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
	

	