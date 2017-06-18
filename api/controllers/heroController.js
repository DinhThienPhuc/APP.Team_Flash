// Import modules
const ObjectId = require('mongodb').ObjectId;
const heroModel = require('../models/heroModel.js');

const getAllData = async(res, collection) => {
    let heroes = await heroModel.findDoc({}, collection);
    res.status(200).send({
        data: heroes
    });
};

module.exports = (app, collection) => {
    app.get('/api/heroes', async(req, res) => {
        getAllData(res, collection);
    });

    app.get('/api/heroes/:id', async(req, res) => {
        let id = req.params.id;
        let result = await heroModel.findDoc({
            '_id': ObjectId(id)
        }, collection);
        res.status(200).send({
            data: result[0]
        });
    });
};
