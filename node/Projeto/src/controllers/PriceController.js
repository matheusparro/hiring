const Stock = require('../models/Stock.js');
const Price = require('../models/Price.js');

async function createPrice(req, res) {
  const { stockId } = req.params;

  const {
    opening,
    low,
    high,
    closing,
    pricedAt,
  } = req.body;

  const stockCreated = await Stock.findByPk(stockId);
  if (!stockCreated) {
    return res.status(401).json({ error: 'Stock not found' });
  }
  const priceCreated = await Price.create({
    opening,
    low,
    high,
    closing,
    pricedAt,
    stockId,
  });
  return res.status(201).json(priceCreated);
}

module.exports = { createPrice };
