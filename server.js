// Import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Get Database Info
const {
    MONGODB_URI,
    COLLECTION,
    PORT
} = process.env;

// Import APIs
const heroController = require('./api/controllers/heroController.js');

// Setup server middlewares
app.use(express.static('static'));
app.use(bodyParser.json()); // Parse json body
app.use(bodyParser.urlencoded({ extended: true })); // Parse urlencoded body

MongoClient.connect(MONGODB_URI, (err, db) => {
    assert.equal(null, err);

    //Start APIs and connect to server
    heroController(app, db.collection(COLLECTION));
    app.listen(PORT, () => {
        console.log('Express server is running...');
    });
});