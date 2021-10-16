/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const { Op } = require('sequelize');
const Stock = require('../models/Stock.js');

async function createStock(req, res) {
  const { name, lastPrice } = req.body;
  const pricedAt = Date.now();
  const stockCreated = await Stock.create({ name, lastPrice, pricedAt });
  if (!stockCreated) {
    return res.status(404).json({ error: 'Stock not created' });
  }
  return res.status(201).json({ name, lastPrice, pricedAt });
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
  });
  return res.status(201).json(stockFind);
}

async function findByInterval(req, res) {
  const { stock_name } = req.params;
  const { from, to } = req.query;
  const stockFind = await Stock.findOne({
    where: {
      name: stock_name,
    },
    include: {
      association: 'prices',
      attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'stockId'] },
      where: {

        pricedAt: {
          [Op.between]: [from, to],
        },
      },
    },
  });
  const { name, prices } = stockFind;

  return res.status(201).json({ name, prices });
}

async function compareStocks(req, res) {
  const { stock_name } = req.params;
  // const { stocks } = req.body;
  const { stocks } = req.body;
  const lastPrices = [];
  const stockFind = await Stock.findOne({
    where: {
      name: stock_name,
    },
  });
  if (!stockFind) {
    return res.status(401).json({ error: `Stock ${stock_name} not found` });
  }
  lastPrices.push(stockFind);

  for (const stock of stocks) {
    const stockFindCompare = await Stock.findOne({
      where: {
        name: stock,
      },

    });
    if (!stockFindCompare) {
      return res.status(401).json({ error: `Stock: ${stock} not found` });
    }
    lastPrices.push(stockFindCompare);
  }

  return res.status(201).json({ lastPrices });
}
async function obtainGains(req, res) {
  const { stock_name } = req.params;
  const { purchasedAmount, purchasedAt } = req.query;
  const fromDate = new Date(purchasedAt);
  const toDate = new Date(purchasedAt);
  toDate.setHours(toDate.getHours() + 23);
  toDate.setMinutes(59);
  toDate.setSeconds(59);

  const stockFind = await Stock.findOne({
    where: {
      name: stock_name,
    },
    include: {
      association: 'prices',
      attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'stockId'] },
      where: {

        pricedAt: {
          [Op.between]: [fromDate, toDate],
        },
      },
    },
  });
  if (!stockFind) {
    return res.status(401).json({ error: `Stock ${stock_name} not found` });
  }
  const { lastPrice } = stockFind;
  const { closing } = stockFind.prices[0];
  const capitalGains = (lastPrice * purchasedAmount) - (closing * purchasedAmount);
  return res.status(201).json({
    stock_name, purchasedAmount, purchasedAt, priceAtDate: closing, lastPrice, capitalGains,
  });
}
module.exports = {
  createStock, findAllStocks, findByQuote, findByInterval, compareStocks, obtainGains,
};
