const MongoClient = require('mongodb').MongoClient;
const Promise = require('bluebird');
const assert = require('assert');

//Connection URL
const url = 'mongodb://localhost:27017/theflash';
const collectionName = 'speedsters';

const data = [
    { heroName: 'Scarlet Speedster', realName: 'Barry Allen', avata: 'http://media.esports.vn/images/images_news/images/PC%20-%20Console/the-flash-trong-se-the-nao-trong-justice-league-6.jpg' },
    { heroName: 'Zoom', realName: 'Hunter Zolomon', avata: 'http://img0.reactor.cc/pics/post/DC-Gif-DC-Comics-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-%D0%A1%D0%9F%D0%9E%D0%99%D0%9B%D0%95%D0%A0-3124412.jpeg' },
    { heroName: 'The Flash Earth-3', realName: 'Jay Garrick', avata: 'http://img0.reactor.cc/pics/post/DC-Gif-DC-Comics-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-%D0%A1%D0%9F%D0%9E%D0%99%D0%9B%D0%95%D0%A0-3124414.jpeg' },
    { heroName: 'Black Flash', realName: 'Hunter Zolomon', avata: 'http://img1.reactor.cc/pics/post/full/The-Flash-%28%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%29-Arrowverse-DC-Comics-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-3121877.jpeg' },
    { heroName: 'Trajectory', realName: 'Eliza Harmon', avata: 'http://img1.reactor.cc/pics/post/DC-Gif-DC-Comics-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-%D0%A1%D0%9F%D0%9E%D0%99%D0%9B%D0%95%D0%A0-3124413.jpeg' },
    { heroName: 'Scarlet Speedster', realName: 'Barry Allen', avata: 'http://img0.reactor.cc/pics/post/The-Flash-%28%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%29-Arrowverse-DC-Comics-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-3133992.jpeg' },
    { heroName: 'Reverse Flash', realName: 'Eobard Thawne', avata: 'http://img1.reactor.cc/pics/post/DC-Gif-DC-Comics-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-%D0%A1%D0%9F%D0%9E%D0%99%D0%9B%D0%95%D0%A0-3124411.jpeg' },
    { heroName: 'Scarlet Speedster', realName: 'Barry Allen', avata: 'http://img0.reactor.cc/pics/post/DC-Gif-DC-Comics-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-%D0%A1%D0%9F%D0%9E%D0%99%D0%9B%D0%95%D0%A0-3124410.jpeg' },
    { heroName: 'Zoom', realName: 'Hunter Zolomon', avata: 'http://media.esports.vn/images/images_news/images/quanghuy/CmiIdVsVIAEA_o7.jpg' },
    { heroName: 'Godspeed', realName: 'Unknown', avata: 'http://media.esports.vn/images/images_news/images/quanghuy/CmiEEj4UMAExKDh.jpg' },
    { heroName: 'Reverse Flash', realName: 'Eobard Thawne', avata: 'http://media.esports.vn/images/images_news/images/PC%20-%20Console/the-flash-trong-se-the-nao-trong-justice-league-8.jpg' },
];

MongoClient.connect(url, function (err, db) {

    console.log('Connect successfully to server!!!');
    // Get the document collection
    let collection = db.collection(collectionName);

    // Initial data to collection
    // (async () => {
    //     let result = await insertDoc(data, collection);
    //     console.log('result: ', result);
    //     db.close();
    // })();

    // data.map(async flash => {
    //     let doc = await findDoc(flash, collection);
    //     if (!doc[0]) {
    //         let result = await insertDoc([flash], collection);
    //         console.log('response: ', result);
    //     }
    // });

    // Remove some data
    // (async () => {
    //     let filter = {};
    //     let result = await removeDoc(filter, collection);
    //     console.log('result ne', result);
    //     db.close();
    // })();

    // Check data in collection
    // (async () => {
    //     let result = await findDoc({}, collection);
    //     console.log('RESULT: ', result);
    //     db.close();
    // })();
});

const insertDoc = async (data, collection) => {
    return await collection.insertMany(data, collection);
}

const findDoc = async (filter, collection) => {
    return await collection.find(filter).toArray();
}

const updateDoc = async (filter, set, collection) => {
    return await collection.updateOne(filter, set);
}

const removeDoc = async (filter, collection) => {
    return await collection.deleteMany(filter);
}