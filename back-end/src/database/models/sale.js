module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    userId: { type: DataTypes.INTEGER, field: 'user_id', foreignKey: true },
    sellerId: { type: DataTypes.INTEGER,  field: 'seller_id', foreignKey: true },
    totalPrice: { type: DataTypes.DECIMAL, field: 'total_price'},
    deliveryAddress: { type: DataTypes.STRING, field: 'delivery_address'},
    deliveryNumber: { type: DataTypes.STRING, field: 'delivery_number'},
    saleDate: { type: DataTypes.DATE, field: 'sale_date'},
    status: {type: DataTypes.STRING, defaultValue: 'Pendente'},
  }, {
    tableName: 'sales',
    createdAt: 'saleDate',
    updatedAt: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.hasOne(models.User, { sourceKey: "userId", as: 'buyer', foreignKey: 'id' });
    Sale.hasOne(models.User, { sourceKey: "sellerId", as: 'seller', foreignKey: 'id' });

    // Sale.belongsTo(models.SalesProduct, { as: 'sale', foreignKey: 'sale_id' });
  };

  return Sale;
};