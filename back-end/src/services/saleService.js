const Sequelize = require('sequelize');

const { Sale, SalesProduct, Product } = require('../database/models');

const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const createSale = async (obj) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, cart } = obj;

  const result = await sequelize.transaction(async (t) => {
    const sale = await Sale.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber,
    }, { transaction: t });

    await Promise.all(cart.map((c) => SalesProduct.create(
      { saleId: sale.id, productId: c.id, quantity: c.quantity }, { transaction: t },
    )));

    return ({ code: 201, sale });
  });

  return result;
};

const getSales = async (id) => {
  const sales = await Sale.findAll({ 
    where: { userId: id },
    include: [{ 
      model: Product,
      as: 'products',
      attributes: { exclude: ['urlImage'] },
      through: { attributes: ['quantity'] }, 
    }],
  });

  return { code: 200, sales };
};

module.exports = {
  createSale,
  getSales,
};