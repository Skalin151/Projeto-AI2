const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, 
{
  freezeTableName: true,
  timestamps: false
});

module.exports = Post; 