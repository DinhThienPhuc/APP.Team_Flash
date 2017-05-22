const heroModel = require('../models/heroModel.js');

const getData = async (res, collection) => {
    let heroes = await heroModel.findDoc({}, collection);
    res.status(200).send({ data: heroes });
}

module.exports = (app, collection) => {
    app.get('/api/heroes', async (req, res) => {
        getData(res, collection);
    });

    app.post('/api/heroes', async (req, res) => {
        let newHero = req.body;
        let result = await heroModel.insertDoc([newHero], collection);
        res.status(200).send({ data: newHero });
    });
}