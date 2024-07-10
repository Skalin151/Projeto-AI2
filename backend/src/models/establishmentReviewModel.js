  const { DataTypes } = require('sequelize');
  const {sequelize} = require('../utils/database');
  const Establishment = require('./establishmentModel');
  const User = require('./userModel');

  const EstablishmentReview = sequelize.define('EstablishmentReview', {
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
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    idEstabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Establishment',
        key: 'id'
      }
    },
    classificacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comentario: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
  allowNull: true, 
  references: {
    model: 'EstablishmentReview',
    key: 'id'
  }
}
  }, {
    freezeTableName: true,
    timestamps: false
  });

  EstablishmentReview.belongsTo(User, { foreignKey: 'idUtilizador', as: 'utilizador' });
  EstablishmentReview.belongsTo(User, { foreignKey: 'idAdmin', as: 'admin' });
  EstablishmentReview.belongsTo(Establishment, { foreignKey: 'idEstabelecimento', as: 'estabelecimento' });

  module.exports = EstablishmentReview;