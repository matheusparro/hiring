const Stock = require('../models/Stock.js');

async function createStock(req, res) {
  const stockCreated = await Stock.create(req.body);
  return res.status(201).json(stockCreated);
}

module.exports = { createStock };
