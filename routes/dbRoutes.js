var db = require ("../models");
var express = require("express");

module.exports = function (app) {
    app.get("/api/past-trips", (req, res) => {
        db.Trips.findAll({
            where: "" //inferior to today's date
        }).then ((dbTrip) => {
            
            res.json(dbTrip);
        });
    });

    app.get("/api/future-trips", (req, res) => {
        db.Trips.findAll({
            where: ""
        }).then ((dbTrip) => {
            
            res.json(dbTrip);
        });
    });

    
}