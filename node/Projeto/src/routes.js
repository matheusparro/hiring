const express = require('express');
const StockController = require('./controllers/StockController.js');
const PriceController = require('./controllers/PriceController.js');

const routes = express.Router();

routes.get('/stocks', StockController.findAllStocks);
routes.post('/stocks', StockController.createStock);
routes.get('/stocks/:stock_name/quote', StockController.findByQuote);
routes.get('/stocks/:stock_name/history', StockController.findByInterval);
routes.get('/stocks/:stock_name/compare', StockController.compareStocks);
routes.get('/stocks/:stock_name/gains', StockController.obtainGains);
routes.post('/stocks/:stock_name/prices', PriceController.createPrice);
module.exports = routes;
