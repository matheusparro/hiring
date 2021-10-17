const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
require('./DataBase/index.js');

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  app.use(cors());
  next();
});
const port = '3333';

app.use(routes);

app.listen(port);

module.exports = app;
