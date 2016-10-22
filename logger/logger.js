var winston = require('winston');

var logger = new winston.Logger({
	transports : [	              
	              new winston.transports.File({
	            	  level : 'debug',
	            	  colorize : true,
	            	  json : true,
	            	  timestamp : true,
	            	  filename : './logger/log.txt',
	            	  maxsize : 10000,
	            	  maxFiles : 5,
	            	  
	            	  
	              }),
	              new winston.transports.Console({
	            	  level : 'debug',
	            	  json : true,
	            	  colorize : true,
	            	  timestamp : true,	            	  
	              })           
	              
	              ],exitOnError : false
	
});


module.exports = logger;