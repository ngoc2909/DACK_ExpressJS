var express = require('express');
var users = express.Router();
var database = require('../Database/database');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var token;
users.use(cors());

process.env.SECRET_KEY = "devesh";

users.post('/register', function(req, res) {

    var today = new Date();
    var appData = {
        "error": 1,
        "data": ""
    };
    var userData = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "create_at": today,
        "updated_at": today
    }

    database.connection.getConnection(function(err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('INSERT INTO users SET ?', userData, function(err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "User registered successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = "Error Occured!";
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
});
module.exports = users;
