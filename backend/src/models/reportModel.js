const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');
const User = require('./userModel');
const EventReview = require('./eventReviewModel');

const Report = sequelize.define('Report', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idCriador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    idAvaliacaoEvento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'EventReview',
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
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    freezeTableName: true,
    timestamps: false
});

Report.belongsTo(User, { foreignKey: 'idCriador', as: 'criador' });
Report.belongsTo(EventReview, { foreignKey: 'idAvaliacaoEvento', as: 'avaliacaoEvento' });
Report.belongsTo(User, { foreignKey: 'idAdmin', as: 'admin' });

module.exports = Report;