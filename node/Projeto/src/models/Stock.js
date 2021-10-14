const { Model, DataTypes } = require('sequelize');

class Stock extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      lastPrice: DataTypes.NUMBER,
      pricedAt: DataTypes.DATE,
    }, {
      sequelize: connection,
    });
  }

  static associate(models) {
    this.hasMany(models.Price, { foreignKey: 'stockId', as: 'prices' });
  }
}
module.exports = Stock;
