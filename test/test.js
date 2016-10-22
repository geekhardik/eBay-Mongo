var expect = require('chai').expect;

var request = require('request');

describe ('ebay_test',function(){

	it('validate signin',function(done){

		request({
			url : "http://localhost:3000/afterSignIn",
			method : "POST",
			json : true,
			body : {
				"inputUsername" : "hardik",
				"inputPassword" : "hardik"
			}
		},function(err,req,body){
			expect(body.statusCode).to.equal(200);
			done();
		});
	});
	
	it('invalidate signin',function(done){

		request({
			url : "http://localhost:3000/afterSignIn",
			method : "POST",
			json : true,
			body : {
				"inputUsername" : "h",
				"inputPassword" : "hardik"
			}
		},function(err,req,body){
			expect(body.statusCode).to.equal(401);
			done();
		});
	});
	
		
	it('invalidated signin',function(done){

		request({
			url : "http://localhost:3000/afterSignIn",
			method : "POST",
			json : true,
			body : {
				
			}
		},function(err,req,body){
			expect(body.statusCode).to.equal(401);
			done();
		});
	});
	
	it('validate signin',function(done){

		request({
			url : "http://localhost:3000/afterSignIn",
			method : "POST",
			json : true,
			body : {
				"inputUsername" : "ankit",
				"inputPassword" : "ankit"
			}
		},function(err,req,body){
			expect(body.statusCode).to.equal(200);
			done();
		});
	});
	
	it('invalidate signin',function(done){

		request({
			url : "http://localhost:3000/afterSignIn",
			method : "POST",
			json : true,
			body : {
				"inputUsername" : "ankit",
				"inputPassword" : "1=1"
			}
		},function(err,req,body){
			expect(body.statusCode).to.equal(401);
			done();
		});
	});
	
	

});