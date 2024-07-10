const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');
const Area = require('./areaModel');
const Subarea = require('./subareaModel');
const User = require('./userModel');
const Post = require('./postModel');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
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
  idPosto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Post',
      key: 'id'
    }
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false
  },
  morada: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telemovel : {
    type: DataTypes.STRING,
    allowNull: true
  },
  email : {
    type: DataTypes.STRING,
    allowNull: true
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  foto : {
    type: DataTypes.STRING,
    allowNull: true
  },
  inscricaoAberta: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
},
{
  tableName: 'Event',
  freezeTableName: true,
  timestamps: false
});

Event.belongsTo(Area, { as: 'area', foreignKey: 'idArea' });
Event.belongsTo(Subarea, { as: 'subarea', foreignKey: 'idSubarea' });
Event.belongsTo(User, { as: 'criador', foreignKey: 'idCriador' });
Event.belongsTo(User, { as: 'admin', foreignKey: 'idAdmin' });
Event.belongsTo(Post, { as: 'posto', foreignKey: 'idPosto' });

module.exports = Event;