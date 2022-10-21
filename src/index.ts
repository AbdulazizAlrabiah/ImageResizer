import express from 'express';
import routes from './routes/router';

const app = express();

app.use('/api', routes);

app.listen(3000, () => {
  console.log('Running server');
});
