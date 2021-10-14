const Stock = require('../models/Stock.js');

async function createStock(req, res) {
  const stockCreated = await Stock.create(req.body);
  return res.status(201).json(stockCreated);
}

async function findAllStocks(req, res) {
  const stockFind = await Stock.findAll({
    include: { association: 'prices' },
  });
  return res.status(201).json(stockFind);
}

async function findByQuote(req, res) {
  const { stock_name } = req.params;
  const stockFind = await Stock.findOne({
    where: {
      name: stock_name,
    },
    include: {
      association: 'prices', limit: 1, order: [['pricedAt', 'DESC']],
    },
  });
  return res.status(201).json(stockFind);
}

module.exports = { createStock, findAllStocks, findByQuote };
