const { Sale } = require('../database/models');

const createSale = async ({ 
  userId,
  sellerId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  saleDate,
}) => {
 const sale = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status: 'Pendente',
  });
  
  console.log(sale);

  return ({ code: 201, sale });
};

module.exports = {

  createSale,
};