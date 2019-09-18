import express from 'express';
import routes from './routes';

const app = express();
app.use('/', routes.endpoints);
app.use('/api/v1/:email', routes.endpoints);

export default app;
