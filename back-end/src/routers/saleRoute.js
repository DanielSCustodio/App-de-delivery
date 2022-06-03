const express = require('express');
const saleController = require('../controllers/saleController');

const saleRouter = express.Router();

saleRouter.post('/sale', saleController.createSale);

module.exports = saleRouter;