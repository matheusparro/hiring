module.exports = {
  username: 'postgres',
  password: '123',
  database: 'stockDataBase',
  port: '5432',
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamp: true,
    underscored: false,
    freezeTableName: false,
  },
};
