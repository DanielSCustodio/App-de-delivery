const sellerService = require('../services/sellerService');

const getAllSellers = async (req, res, _next) => {
  try {
    const { code, seller } = await sellerService.getSellers();

    return res.status(code).json(seller);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSellers,
};
