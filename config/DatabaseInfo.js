const UserInfo = require('./User.js');

module.exports = {
    DbConnectionUrl: `mongodb://${UserInfo.user}:${UserInfo.pass}@ds127962.mlab.com:27962/heroku_cjj51h6`,
    collectionName: 'speedsters',
    port: '4869'
};
