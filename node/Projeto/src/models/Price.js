const { Model, DataTypes } = require('sequelize');

class Price extends Model {
  static init(connection) {
    super.init({
      opening: DataTypes.NUMBER,
      low: DataTypes.NUMBER,
      high: DataTypes.NUMBER,
      closing: DataTypes.NUMBER,
      pricedAt: DataTypes.DATE,
    }, {
      sequelize: connection,
    });
  }

  static associate(models) {
    this.belongsTo(models.Stock, { foreignKey: 'stockId', as: 'stock' });
  }
}
module.exports = Price;
