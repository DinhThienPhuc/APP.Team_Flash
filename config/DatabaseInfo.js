// Import modules
const UserInfo = require('./User.js');

module.exports = {
    DbConnectionUrl: `mongodb://${UserInfo.user}:${UserInfo.pass}@ds129422.mlab.com:29422/heroku_tb5hrt9h`,
    collectionName: 'speedsters'
};