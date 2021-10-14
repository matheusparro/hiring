const express = require('express');
const routes = require('./routes.js');

require('./DataBase/index.js');

const app = express();
app.use(express.json());

const port = '3333';

app.use(routes);

app.listen(port);

module.exports = app;
