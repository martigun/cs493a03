
//call and start the express module
var express = require('express');
var app = express();

//call and connect body parser
var bodyParser = require('body-parser'); 
app.use(bodyParser.json())

//http://stackoverflow.com/questions/24543847/req-body-empty-on-posts
app.use(bodyParser.urlencoded({extended: false}));

//GET for coach
app.get('/', function(req,res){
	
	//message console
	console.log("I received a GET request.");
	
});

//POST for coach
app.post('/', function(req,res){
	
	
	//message console
	console.log("I received a POST request.");

	
	
});


//listen on port
console.log("Listening on port 3100...");
app.listen(3100);