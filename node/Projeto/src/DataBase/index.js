// CONEXAO COM BANCO
const Sequelize = require('sequelize');

const dbConfig = require('../Config/dataBase.js');
const Stock = require('../models/Stock.js');
const Price = require('../models/Price.js');

const connection = new Sequelize(dbConfig);

Stock.init(connection);
Price.init(connection);
Price.associate(connection.models);
Stock.associate(connection.models);
module.exports = connection;
