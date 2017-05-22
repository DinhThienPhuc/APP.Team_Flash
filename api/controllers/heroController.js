const heroModel = require('../models/heroModel.js');

const getData = async (res, collection) => {
    let heroes = await heroModel.findDoc({}, collection);
    res.status(200).send({ data: heroes });
}

module.exports = (app, collection) => {
    app.get('/heroes', async (req, res) => {
        getData(res, collection);
    });

    app.post('/heroes', async (req, res) => {
        let newHero = req.body;
        let result = await heroModel.insertDoc([newHero], collection);
        res.status(200).send({ data: newHero });
    });

    app.delete('/heroes', async (req, res) => {
        let deletedHero = req.body;
        let result = await heroModel.removeDoc(deletedHero, collection);
        res.status(200).send(result);
    });
}