const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');
const User = require('./userModel');
const Event = require('./eventModel');


const SignUp = sequelize.define('SignUp', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  idEvento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Event',
      key: 'id'
    }
  },
  idUtilizador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  idAdmin: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  data: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
}, 
{
  freezeTableName: true,
  timestamps: false
});

SignUp.belongsTo(Event, { foreignKey: 'idEvento', as: 'evento' });
SignUp.belongsTo(User, { foreignKey: 'idUtilizador', as: 'utilizador' });
SignUp.belongsTo(User, { foreignKey: 'idAdmin', as: 'admin' });

module.exports = SignUp;