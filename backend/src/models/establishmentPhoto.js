const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');
const User = require('./userModel');
const Establishment = require('./establishmentModel');

const EstablishmentPhoto = sequelize.define('EstablishmentPhoto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idEstabelecimento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'Establishment',
        key: 'id'
        }
    },
    idCriador: {
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
    foto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

EstablishmentPhoto.belongsTo(Establishment, { foreignKey: 'idEstabelecimento', as: 'estabelecimento' });
EstablishmentPhoto.belongsTo(User, { foreignKey: 'idCriador', as: 'criador' });
EstablishmentPhoto.belongsTo(User, { foreignKey: 'idAdmin', as: 'admin' });

module.exports = EstablishmentPhoto;