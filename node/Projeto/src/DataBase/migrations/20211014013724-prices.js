/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Prices', {
      id: {
        type: Sequelize.INTEGER,
        primarayKey: true,
        autoIncrement: true,
        allownull: false,
        unique: true,
      },
      idStocks: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Stocks',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      opening: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      low: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      high: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      closing: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      pricedAt: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Prices'),
};
