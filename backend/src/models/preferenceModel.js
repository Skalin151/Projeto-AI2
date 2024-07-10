const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');
const User = require('./userModel');
const Area = require('./areaModel');
const Subarea = require('./subareaModel');

const Preference = sequelize.define('Preference', {
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
    idArea: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Area',
            key: 'id'
        }
    },
    idSubarea: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Subarea',
            key: 'id'
        }
    },
}, {
    freezeTableName: true,
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['idUtilizador', 'idArea', 'idSubarea']
        }
    ]
});

Preference.belongsTo(User, { foreignKey: 'idUtilizador', as: 'utilizador' });
Preference.belongsTo(Area, { foreignKey: 'idArea', as: 'area' });
Preference.belongsTo(Subarea, { foreignKey: 'idSubarea', as: 'subarea' });

module.exports = Preference;