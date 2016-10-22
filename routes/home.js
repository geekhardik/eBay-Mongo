var ejs = require("ejs");
var mysql = require('./mysql');


/*function signin(req,res) {

	ejs.renderFile('./views/signin.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}*/

/*function signup(req,res) {

	ejs.renderFile('./views/signup.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}*/

/*function afterSignIn(req,res)
{
	// check user already exists
//	var getUser="select * from users where username='"+req.param("inputUsername")+"' and password='" + req.param("inputPassword") +"'";
	
	var getUser="select * from users where username=? and password = ?";
	
		
			var username =  req.body.inputUsername;
			var password = req.body.inputPassword;			
		
//		
//	console.log("Query is:"+getUser);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				console.log("valid Login");
				ejs.renderFile('./views/successLogin.ejs', { data: results } , function(err, result) {
			        // render on success
			        if (!err) {
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
			else {    
				
				console.log("Invalid Login");
				ejs.renderFile('./views/failLogin.ejs',function(err, result) {
			        // render on success
			        if (!err) {
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
		}  
	},getUser,[usernmae,password]);
}*/

function getAllUsers(req,res)
{
	var getAllUsers = "select * from users";
	console.log("Query is:"+getAllUsers);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				
				var rows = results;
				var jsonString = JSON.stringify(results);
				var jsonParse = JSON.parse(jsonString);
				
				console.log("Results Type: "+(typeof results));
				console.log("Result Element Type:"+(typeof rows[0].emailid));
				console.log("Results Stringify Type:"+(typeof jsonString));
				console.log("Results Parse Type:"+(typeof jsString));
				
				console.log("Results: "+(results));
				console.log("Result Element:"+(rows[0].emailid));
				console.log("Results Stringify:"+(jsonString));
				console.log("Results Parse:"+(jsonParse));
				
				ejs.renderFile('./views/successLogin.ejs',{data:jsonParse},function(err, result) {
			        // render on success
			        if (!err) {
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
			else {    
				
				console.log("No users found in database");
				ejs.renderFile('./views/failLogin.ejs',function(err, result) {
			        // render on success
			        if (!err) {
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
		}  
	},getAllUsers);
}

//exports.signin=signin;
//exports.signin=signup;
//exports.afterSignIn=afterSignIn;
exports.getAllUsers=getAllUsers;