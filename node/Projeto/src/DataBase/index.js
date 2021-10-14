// CONEXAO COM BANCO
const Sequelize = require('sequelize');

const dbConfig = require('../Config/dataBase');
const Stock = require('../models/Stock');

const connection = new Sequelize(dbConfig);

Stock.init(connection);
module.exports = connection;
