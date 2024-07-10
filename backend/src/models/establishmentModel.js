const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');
const Area = require('./areaModel');
const Subarea = require('./subareaModel');
const Post = require('./postModel');
const User = require('./userModel');

const Establishment = sequelize.define('Establishment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Area',
      key: 'id'
    }
  },
  idSubarea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Subarea',
      key: 'id'
    }
  },
  idPosto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Post',
      key: 'id'
    }
  },
  morada: {
    type: DataTypes.STRING,
    allowNull: true
  },
  descricao: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  foto: { 
    type: DataTypes.STRING,
    allowNull: true
  },
  telemovel : {
    type: DataTypes.STRING,
    allowNull: true
  },
  email : {
    type: DataTypes.STRING,
    allowNull: true
  },
  idAdmin: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'User',
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
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
},
{
  freezeTableName: true,
  timestamps: false
});

Establishment.belongsTo(Area, {foreignKey: 'idArea'});
Establishment.belongsTo(Subarea, {foreignKey: 'idSubarea'});
Establishment.belongsTo(Post, {foreignKey: 'idPosto'});
Establishment.belongsTo(User, { as: 'admin', foreignKey: 'idAdmin' });
Establishment.belongsTo(User, { as: 'criador', foreignKey: 'idCriador' });

module.exports = Establishment;