
var app = angular.module('myApp',[]);

app.controller('profile',function($scope,$http){
	
	$http({			
		method: "POST",
		url : '/home',
					
	}).success(function(data){
		if (data.entry) {
			
			$scope.sign = data.entry;
//			$scope.username = data.name;	
			
		}else{
			alert("somthing's wrong in callback of profile.js");
		}
	});	
	
	
	
	
	
	$scope.getprofile = function(){
	$http({			
		method: "POST",
		url : '/getbought',
					
	}).success(function(data){
		if (data.bought) {
			$scope.bought = data.bought;
		}else{
			alert("somthing's wrong in callback of profile.js");
		}
	});	
}
	
	
		$http({			
			method: "POST",
			url : '/getSold',
						
		}).success(function(data){
			if (data.sold) {
				$scope.sold = data.sold;
			}else{
				alert("somthing's wrong in callback of profile.js");
			}
		});	
	
		$http({			
			method: "POST",
			url : '/getuserinfo',
						
		}).success(function(data){
			if (data.info) {
				$scope.username = data.info[0].firstname;
				$scope.handle = data.info[0].username;
				$scope.contact = data.info[0].contact;
				$scope.location = data.info[0].location;
				$scope.date = data.info[0].time;
				
			}else{
				alert("somthing's wrong in callback of profile.js");
			}
		});	
	
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



	
	