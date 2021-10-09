import express from 'express';
import routes from './routes.js';

const app = express();
app.use(express.json());

const port = process.env.PORT || '3333';

app.use(routes);

app.listen(port);

export default app;
