
var app = angular.module('myApp',[]);

app.controller('sell',function($scope,$http){
	

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
	
	
	$scope.sell = function(){
		console.log("now in function!");
		$http({			
			method: "POST",
			url : '/sell',
			data : {
				
				"item" : $scope.item,
				"desc" : $scope.desc,
				"price_option" : $scope.price_option,
				"price":$scope.price,
				"qty":$scope.qty,
				"duration":$scope.duration,
				"location":$scope.location
			}				
		}).success(function(data){
			if (data.statusCode === 401) {
				alert("Pelase signin first");
				window.location.assign("/signin");
			}
			else
				//Making a get call to the '/redirectToHomepage' API
				alert("Item listing on sell is successful!");
				window.location.assign("/home");
			
		}).error(function(error){
			console.log(data.msg);
			$scope.result = data.msg;			
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