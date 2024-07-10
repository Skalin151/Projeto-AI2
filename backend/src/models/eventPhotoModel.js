const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');
const Event = require('./eventModel');
const User = require('./userModel');

const EventPhoto = sequelize.define('EventPhoto', {
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

EventPhoto.belongsTo(Event, { foreignKey: 'idEvento', as: 'evento' });
EventPhoto.belongsTo(User, { foreignKey: 'idCriador', as: 'criador' });
EventPhoto.belongsTo(User, { foreignKey: 'idAdmin', as: 'admin' });

module.exports = EventPhoto;