const UserInfo = require('./User.js');

module.exports = {
    DbConnectionUrl: `mongodb://${UserInfo.user}:${UserInfo.pass}@ds129402.mlab.com:29402/heroku_3s1k2171`,
    collectionName: 'speedsters',
    port: '4869'
};
