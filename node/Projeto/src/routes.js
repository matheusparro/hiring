import express from 'express';

const routes = express.Router();

routes.get('/nfsnotafiscal', (req, res) => {
  res.send({ message: 'Server ON' });
});

export default routes;
