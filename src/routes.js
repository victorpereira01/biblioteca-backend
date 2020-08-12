const express = require('express');
const routes = express.Router();

const ObraController = require('./controllers/ObraController')

routes.get('/obras', ObraController.findAll);
routes.post('/obras', ObraController.create);

module.exports = routes;