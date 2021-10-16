const Stock = require('../models/Stock.js');
const Price = require('../models/Price.js');

async function createPrice(req, res) {
  const { stock_name } = req.params;

  const {
    opening,
    low,
    high,
    closing,
  } = req.body;

  const stockFind = await Stock.findOne({
    where: {
      name: stock_name,
    },
  });
  if (!stockFind) {
    return res.status(401).json({ error: 'Stock not found' });
  }
  const priceCreated = await Price.create({
    opening,
    low,
    high,
    closing,
    pricedAt: Date.now(),
    stockId: stockFind.id,
  });
  stockFind.lastPrice = closing;
  stockFind.pricedAt = Date.now();
  await stockFind.save();
  return res.status(201).json(priceCreated);
}

module.exports = { createPrice };
