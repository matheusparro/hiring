const express = require('express');
const StockController = require('./controllers/StockController.js');
const PriceController = require('./controllers/PriceController.js');

const routes = express.Router();

routes.get('/stocks', StockController.findAllStocks);
routes.get('/stocks/:stock_name/quote', StockController.findByQuote);
routes.post('/stocks', StockController.createStock);
routes.post('/stocks/:stockId/prices', PriceController.createPrice);
module.exports = routes;
