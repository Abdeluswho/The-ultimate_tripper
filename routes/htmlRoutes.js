var path = require('path');
var express = require("express");




module.exports = function(app){

		app.get("/", (req, res) => {
	        res.sendFile(path.join(__dirname, "../public/index.html"));
	    });
	
        app.get("/user/trips", (req, res) => {
        	res.sendFile(path.join(__dirname, "../public/create-trip.html"));
   		 })

        //need to create the file after the HTML fixes============
        app.get("/result", (req, res) => {
	        res.sendFile(path.join(__dirname, "../public/result.html"));
	    });

	    

}
