const express = require('express');
const saleController = require('../controllers/saleController');
const saleMiddleware = require('../middlewares/saleMiddleware');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

const saleRouter = express.Router();

saleRouter.post('/sale', tokenMiddleware, saleMiddleware, saleController.createSale);
saleRouter.get('/sale', tokenMiddleware, saleController.getSales);

module.exports = saleRouter;