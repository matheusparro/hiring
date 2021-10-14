const express = require('express');
const StockController = require('./controllers/StockController.js');

const routes = express.Router();

routes.get('/a', (req, res) => {
  res.send({ message: 'Server ONadsadsaaaa' });
});
routes.post('/stock', StockController.createStock);
module.exports = routes;
