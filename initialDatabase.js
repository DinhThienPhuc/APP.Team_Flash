const MongoClient = require('mongodb').MongoClient;
const Promise = require('bluebird');
const assert = require('assert');

//Connection URL
const url = 'mongodb://localhost:27017/theflash';
const collectionName = 'speedsters';

const avatarShow = {
    theFlash: 'https://maxcdn.icons8.com/Share/icon/Cinema//the_flash_sign1600.png',
    greenArrow: 'https://s-media-cache-ak0.pinimg.com/originals/cc/ec/12/ccec12f2ab02551b6207da5c3e0171b6.png',
    batman: 'http://www.clipartbest.com/cliparts/niB/BpX/niBBpX8xT.svg',
    spiderman: 'https://d30y9cdsu7xlg0.cloudfront.net/png/52601-200.png',
    deadpool: 'http://icanbecreative.com/resources/files/articles/deadpool-movie-photoshop-tutorial/deadpool-movie-logo-photoshop-tutorial.jpg',
    ironman: 'http://goldwallpapers.com/uploads/posts/iron-man-logo-wallpaper/iron_man_logo_wallpaper_010.jpg',
}

const data = [
    {
        image: 'https://s-media-cache-ak0.pinimg.com/564x/fa/ba/af/fabaaff573814b63825cf0fe4dc659ad.jpg',
        show: 'Batman',
        subtitle: 'Arkham Knight',
        avatar: avatarShow.batman
    },
    {
        image: 'https://s-media-cache-ak0.pinimg.com/564x/bb/56/a7/bb56a783cd8bac588c39d23b8199bcd3.jpg',
        show: 'The Flash',
        subtitle: 'Zoom',
        avatar: avatarShow.theFlash
    },
    {
        image: 'https://s-media-cache-ak0.pinimg.com/564x/f1/d6/8b/f1d68b758465483675ca5ee24696555b.jpg',
        show: 'Deadpool',
        subtitle: 'High-five',
        avatar: avatarShow.deadpool
    },
    {
        image: 'https://s-media-cache-ak0.pinimg.com/564x/64/b6/d0/64b6d09e898ec056c7e6f26723332aab.jpg',
        show: 'Green Arrow',
        subtitle: 'Oliver Queen',
        avatar: avatarShow.greenArrow
    },
    {
        image: 'https://s-media-cache-ak0.pinimg.com/236x/2c/ae/2d/2cae2d8218035963a4927702f1ed2122.jpg',
        show: 'Deadpool',
        subtitle: 'Wade Wilson',
        avatar: avatarShow.deadpool
    },
    {
        image: 'https://s-media-cache-ak0.pinimg.com/originals/fe/79/90/fe79903cc2106aa8b44a72b5f18bf543.jpg',
        show: 'Batman',
        subtitle: 'Bruce Wayne',
        avatar: avatarShow.batman
    },
    {
        image: 'https://s-media-cache-ak0.pinimg.com/236x/73/68/f9/7368f96933e5ac8ca383e237b58f446b.jpg',
        show: 'Ironman',
        subtitle: 'Tony Stark',
        avatar: avatarShow.ironman
    },
    {
        image: 'https://s-media-cache-ak0.pinimg.com/564x/70/16/22/70162283f2f549be580d0587ed493417.jpg',
        show: 'The Flash',
        subtitle: 'Barry Allen',
        avatar: avatarShow.theFlash
    },
    {
        image: 'https://s-media-cache-ak0.pinimg.com/564x/31/b9/b8/31b9b8abbbb78509c73cd157bdc4d709.jpg',
        show: 'Ironman',
        subtitle: 'Ultron',
        avatar: avatarShow.ironman
    },
    {
        image: 'https://s-media-cache-ak0.pinimg.com/564x/34/7d/17/347d172b25e83fb767e9f516a2ab089a.jpg',
        show: 'Ironman',
        subtitle: 'Mark-45',
        avatar: avatarShow.ironman
    },
    {
        image: 'https://s-media-cache-ak0.pinimg.com/564x/96/fd/3b/96fd3b669322f4f4db1af835b8a097cf.jpg',
        show: 'Green Arrow',
        subtitle: 'Team Arrow',
        avatar: avatarShow.greenArrow
    }
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