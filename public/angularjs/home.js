
var app = angular.module('myApp',['ngAnimate']);

app.controller('home',function($scope,$http,$timeout){

	$scope.time = true;
	
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

	//check last_login time and display it to user

	$http({			
		method: "POST",
		url : '/login_time',
					
	}).success(function(data){
		if (data.time !=null) {			
			// $scope.time = data.time;
			var time = data.time;
			$scope.login_time = data.time;
			$scope.time = false;
			$timeout(function () { $scope.time = true; }, 5000);
			// alert("you have last visited to eBay : "+time.toLocaleString());		
		}else{
			alert("somthing's wrong in getting last_login time from system");
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

//for catalouge display

var list=[];

app.controller('cataLouge',function($scope,$http){
	//check catalouge from server
	$http({			
		method: "POST",
		url : '/catalouge',
					
	}).success(function(data){
		if(data.list.length){
			$scope.list= data.list;
			
		}else{
			alert("somthing's wrong in callback of catalouge.js");
		}
	});
	

});



	
	