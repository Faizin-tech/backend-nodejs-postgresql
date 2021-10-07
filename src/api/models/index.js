const config =  require('../../config/configDB');

const Seq = require('sequelize');
const sequelize = config.CLIENT;

const db = {}
db.Sequelize = Seq;
db.sequelize = sequelize;

db.user = require('./user.model')(sequelize,Seq);
db.logSeacrh = require('./log-model')(sequelize,Seq);

module.exports = db;