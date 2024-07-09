const { Sequelize } = require('sequelize');


const dialectOptions = {};
if (process.env.DB_SSL === 'true') {
  dialectOptions.ssl = {
    require: true,
    rejectUnauthorized: false
  };
}

const sequelize = new Sequelize('ai2', 'postgres', '17268015', {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
  logging: false,
  dialectOptions: dialectOptions
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o PostgreSQL estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao PostgreSQL:', error);
  }
}

module.exports = { sequelize, connect };
