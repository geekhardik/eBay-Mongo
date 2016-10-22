
var app = angular.module('myApp',[]);

app.controller('signinCtrl',function($scope,$http){
	console.log("posted data to server");	
	
	$scope.gotosignup = function(){
		window.location.assign("/signup");
	}
	
	
	$scope.signin = function(){
		
		$http({			
			method: "POST",
			url : '/afterSignIn',
			data : {
				"inputUsername" : $scope.username,
				"inputPassword" : $scope.password
			}
					
		}).success(function(data){
			if (data.statusCode == 401) {
				alert("somthing's wrong in callback of signin.js");
				window.location.assign("/signin");
			}
			else{
				
				alert("You are successfully Looged in! Happy shopping..");
				window.location.assign("/home");
			}
			
		}).error(function(error){
			console.log(data.msg);
			$scope.result = data.msg;			
		});
	};
	
});