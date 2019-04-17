import handleGetMenuIDs from './handleGetMenuIds';
import helpers from './helpers.js';

const routes = (app) => {
  app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the node app' });
  });

  app.post('/menu/ids', helpers.validateUserInput, handleGetMenuIDs.getMenuIDs);

};
export default routes;
