module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    urlImage: { type: DataTypes.STRING(200), field: 'url_image' }
  }, {
    tableName: 'products',
    timestamps: false,
  });

  Product.associate = (models) =>
    Product.hasMany(models.SalesProduct, { as: 'product', foreignKey: 'product_id' });

  return Product;
};