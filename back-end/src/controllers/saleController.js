const saleService = require('../services/saleService');

const createSale = async (req, res, _next) => {
  try {
    const { code, sale } = await saleService.createSale(req.body);
    return res.status(code).json(sale);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSale,
};