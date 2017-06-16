// Import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Import database info
const DatabaseInfo = require('./config/DatabaseInfo.js');
const {
    DbConnectionUrl,
    collectionName,
    port
} = DatabaseInfo;

// Import APIs
const heroController = require('./api/controllers/heroController.js');

// Setup server middlewares
app.use(express.static('static'));
app.use(bodyParser.json()); // Parse json body
app.use(bodyParser.urlencoded({ extended: true })); // Parse urlencoded body

MongoClient.connect(DbConnectionUrl, (err, db) => {
    assert.equal(null, err);

    //Start APIs and connect to server
    heroController(app, db.collection(collectionName));
    app.listen(port, () => {
        console.log(`Express server is running on port ${port}`);
    });
});