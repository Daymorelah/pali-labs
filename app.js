import express from 'express';

const PORT = process.env.PORT || 2323;
const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'our node app runs!' });
});

app.listen(PORT, (error) => {
  if (error) return console.error('Could not start the server!, Error that occurred is: ', error);
  return console.info(`Server is up and running on port ${PORT}`);
});