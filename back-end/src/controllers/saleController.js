const saleService = require('../services/saleService');

const createSale = async (req, res, _next) => {
  try {
    const { code, sale } = await saleService.createSale(req.body);
    return res.status(code).json(sale);
  } catch (error) {
    console.log(error);
    if (error.name.includes('Validation')) { return ({ code: 400, message: error.message }); }
    return res.status(500).json(error);
  }
};

const getSales = async (req, res) => {
  try {
    const { id } = req.tokenData;

    const { code, sales } = await saleService.getSales(id);
  
    return res.status(code).json(sales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSale,
  getSales,
};