const express = require('express');
const saleController = require('../controllers/saleController');
const saleMiddleware = require('../middlewares/saleMiddleware');

const saleRouter = express.Router();

saleRouter.post('/sale', saleMiddleware, saleController.createSale);

module.exports = saleRouter;