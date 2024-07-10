const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');
const User = require('./userModel');
const EstablishmentReview = require('./establishmentReviewModel');
const EventReview = require('./eventReviewModel');

const Vote = sequelize.define('Vote', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  idUtilizador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  idEstabelecimento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: EstablishmentReview,
      key: 'id'
    }
  },
  idEvento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: EventReview,
      key: 'id'
    }
  },
  tipo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Vote.belongsTo(User, { foreignKey: 'idUtilizador' });

module.exports = Vote;
