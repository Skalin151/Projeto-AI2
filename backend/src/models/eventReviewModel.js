const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');
const User = require('./userModel');
const Event = require('./eventModel');

const EventReview = sequelize.define('EventReview', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
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
  idEvento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Event',
      key: 'id'
    }
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  classificacao: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  upvotes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  downvotes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  idPai: {
  type: DataTypes.INTEGER,
  allowNull: true, // Permitir null para comentários iniciais
  references: {
    model: 'EventReview',
    key: 'id'
  }
},
  comentario: DataTypes.TEXT
}, 
{
  freezeTableName: true,
  timestamps: false
});

EventReview.belongsTo(Event, { foreignKey: 'idEvento', as: 'evento' });
EventReview.belongsTo(User, { foreignKey: 'idUtilizador', as: 'utilizador' });
EventReview.belongsTo(User, { foreignKey: 'idAdmin', as: 'admin' });

module.exports = EventReview;