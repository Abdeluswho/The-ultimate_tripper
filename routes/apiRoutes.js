var path = require('path');
var parser = require('xml2json');
var request = require("request");
var express = require("express");
var router = express.Router()




// ===============================================================================
// ROUTING
// ===============================================================================

// Home
module.exports = function (app) {
	// body...

//********************** */
	var search ={};
	//Once the form is submitted
	app.get("/user/:destination", (req, res) => {
	    var destination = req.params.destination;
	    var hwDate = req.params.datehw;

	    var key = "d9p3q32cju7pyqrctz6h8t8p";
	    var hotqueryURL = "http://api.hotwire.com/v1/deal/hotel?apikey=" + key + "&dest=" + destination + "&distance=5~15&diversity=city";
	   

	        request(hotqueryURL, function(error, response, body){
	            var jsonBody = JSON.parse(parser.toJson(body));
	            // console.log("got it");
	            // console.log("Body > ", jsonBody.Hotwire.Result.HotelDeal[0]);
	            //********************** */
	            search.Hotel = jsonBody.Hotwire.Result.HotelDeal[0];
	            // res.send();
	            var eventqueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&size=1&apikey=YxwPs1JETjjGeZ5DldVNzdgWDxSziGCo";

			        request(eventqueryURL, function(error, response, body){ 
			            if (error){ throw error;}
			            // console.log("-----------------");
			            // console.log("Body > ", body);
			            //********************** */
			           search.Event = JSON.parse(body)._embedded.events;

	            res.json(search);
	       	 })
	        })

	    //==================== Managing User Input -DB/API/client result ================
	             
	});

	app.post("/api/results", (req, res) => {
		console.log("results", req.body);

	})
	app.get("/api/results", (req, res) => {
		res.json("/api/results");
	//DB
	//rsnder result to HTML js file
	})
}


//===================== *** Rerouting *** ===========================

//missing

//==================================================================


//ModuleExports