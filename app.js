import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './routes';

const PORT = process.env.PORT || 2323;
const app = express();

if (app.get('env') !== 'test') {
  app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

// Catch all invalid routes
app.all('*', (req, res) => {
  res.status(404).json({
    code: 404,
    message: 'End-point not found',
  });
});

app.listen(PORT, (error) => {
  if (error) return console.error('Could not start the server!, Error that occurred is: ', error);
  return console.info(`Server is up and running on port ${PORT}`);
});

export default app;
