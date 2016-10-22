var ejs= require('ejs');
var mysql = require('mysql');
var logger = require('../logger/logger');


//var pool = require('mysql').createPool(opts);

//Put your mysql configuration settings - user, password, database and port
function getConnection(){
	var connection = mysql.createConnection({
	    host     : 'localhost',
	    user     : 'root',
	    password : 'welcome123#',
	    database : 'ebay',
	    port	 : 3306
	});
	return connection;
}

//connection pooling

function Pool(num_conns)
{
    this.pool = [];
    for(var i=0; i < num_conns; ++i)
        this.pool.push(getConnection()); // your new Client + auth
    this.last = 0;
}

Pool.prototype.get = function()
{
    var cli = this.pool[this.last];
    this.last++;
    if (this.last == this.pool.length) // cyclic increment
       this.last = 0;
    return cli;
}

var p = new Pool(10);

function fetchData(callback,sqlQuery,JSON_args){
	

	var connection=getConnection();
	
	var query = p.get().query(sqlQuery,JSON_args, function(err, rows, fields) {
		if(err){
			
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
//			console.log(rows);
			callback(err, rows);
		}
		
	});
	logger.log('info',query.sql);
//	connection.end();
}	

/*
//normal mysql connection
function fetchData(callback, sqlQuery,JSON_args) {
	
	var connection = getConnection();
	connection.query(sqlQuery,JSON_args, function(err, rows, fields) {
		if (err) {
			console.log("ERROR: " + err.message);
		} else { // return err or result
			console.log("DB Results:" + rows);
			callback(err, rows);
		}
	});
//	logger.log('info',query+JSON_args);
	console.log("\nConnection closed..");
	connection.end();
}*/






exports.fetchData=fetchData;