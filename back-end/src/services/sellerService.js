const { User } = require('../database/models');

const getSellers = async () => {
  const [sellers] = await User.findAll({ where: { role: 'seller' } });
  console.log(sellers);
  const { id, name } = sellers;
  const seller = {
    id,
    name,
  };
  return ({ code: 200, seller });
};

module.exports = {
  getSellers,
};