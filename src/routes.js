const express = require('express');
const routes = express.Router();

const ObraController = require('./controllers/ObraController')

routes.get('/obras', ObraController.findAll);
routes.post('/obras', ObraController.create);
routes.put('/obras/:id', ObraController.update);
routes.delete('/obras/:id', ObraController.delete);

module.exports = routes;