const Sequelize = require('sequelize');

const { Sale, SalesProduct } = require('../database/models');

const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const createSale = async (obj) => {
  const { userId, sellerId, totalPrice: tPrice, deliveryAddress, deliveryNumber,
    status, carts } = obj;

  const totalPrice = Number(tPrice);

  const result = await sequelize.transaction(async (t) => {
 const sale = await Sale.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
    }, { transaction: t });

    await Promise.all(carts.map((cart) => SalesProduct.create(
      { saleId: sale.id, productId: cart.id, quantity: cart.quantity }, { transaction: t },
    )));

    return ({ code: 201, sale });
  });
  
  return result;
};

  return ({ code: 201, sale });
};

module.exports = {

  createSale,
};