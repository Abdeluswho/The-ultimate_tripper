var path = require('path');
var parser = require('xml2json');
var request = require("request");
var express = require("express");
var router = express.Router();
var db = require('../models');




// ===============================================================================
// ROUTING
// ===============================================================================

// Home
module.exports = function (app) {
	// body...



//**********************========Using Input data as paramaters for the API call====***************//
	//search object to save  both API results  
	var search ={};
	//Once the form is submitted
	app.get("/user/:destination", (req, res) => {
	    var destination = req.params.destination;
	    var startDate = req.params.dateStart;

	    console.log(res.body);
	    

	    console.log(destination);

	    var key = "d9p3q32cju7pyqrctz6h8t8p";
	    var hotqueryURL = "http://api.hotwire.com/v1/deal/hotel?apikey=" + key + "&dest=" + destination + "&startdate="+ startDate+"&distance=5~15&diversity=city";
	   

	        request(hotqueryURL, function(error, response, body){
	            var jsonBody = JSON.parse(parser.toJson(body));
	            // console.log("got it");
	            // console.log("Body > ", jsonBody.Hotwire.Result.HotelDeal[0]);
	            //********************** */
	            search.Hotel = jsonBody.Hotwire.Result;
	            // res.send();
	            var eventqueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&size=1&apikey=YxwPs1JETjjGeZ5DldVNzdgWDxSziGCo";

			    request(eventqueryURL, function(error, response, body){ 
			            if (error){ throw error;}
			            // console.log("-----------------");
			            // console.log("Body > ", body);
			    search.Event = JSON.parse(body)._embedded.events;

	          
	            res.json(search);
	       
	       	 })
	        })

	       

	    
	             
	});

//====================Managing User Input -DB/API/client result==================== 	

	// Here are the values collected from create-trip Form submition
	//to save it in the DB

	app.post("/user/trip-result", (req, res) => {
		console.log("results", req.body);
		
		// db.User.findOne({
		// 	where:{
		// 	 	username: req.body.username
		// 	}
		// }).then((results)=>{
		// 	var id = results.dataValues.id;

			db.Trip.create({
	          city: req.body.destination,
	          startDate: req.body.dateStart,
	          budget: req.body.budget
	        
	        }).then(function(results) {
	        // body...
	        	res.json(results);
	      });

		

		
	// DB	
	})


	

	//Pulling out data from DB that needs to be sent to the user
	app.get("/user/trip-result", (req, res) => {
		res.json("/user/results");
	//DB
	//render result to HTML ***check the ajax get in the js file

	})
//==================================================================================

//========================= *** Rgistration routes *** ======================================

	app.post("/user/account/registration", (req, res) => {
		console.log("results", req.body);

		var name = req.body.name
		var username = req.body.username
        var password = req.body.password
        var email = req.body.email
        

		db.User.create({
		  name: name,
          username: username,
          password: password,
          email: email
        }).then(function(results) {
        // body...
        	 console.log('The solution is: ', results);
			    res.send({
			      "code":200,
			      "success":"user registered sucessfully"
			     });
  			
      });
  
  			
	//DB	
	})

	app.get("/user/account/registration", (req, res) => {
		res.json("/user/registration");
	//DB
	//render result to HTML ***check the ajax get in the js file

	})


//==================================================================================
//*************************log in **********************************

app.post("/user/account/login", (req, res) => {
		console.log("results", req.body);

		var  username = req.body.username;
        var password = req.body.password;
// check if it exists in the database
		// db.user.create({
  //         username: username,
  //         password: password,
  //       }).then(function(results) {
  //       // body...
  //       	res.send(results);
  //     });
  		console.log(username);
  			
	//DB	
	})

app.get("/user/account/login", (req, res) => {
		res.json("/user/account/login");
	//DB
	//render result to HTML ***check the ajax get in the js file

	})





}// ModuleExports



 

