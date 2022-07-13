'use strict';

const { Model } = require('sequelize');
const formatDate = require('../utils/formatDate');

module.exports = (sequelize, DataTypes) => {
    class Character extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Character.hasMany(models.Quote, { as: 'quotes', foreignKey: 'char_id' });
            Character.belongsToMany(models.Episode, { as: 'appearance', through: 'Characters_Episodes', foreignKey: 'char_id' });
        }
    }
    Character.init({
        char_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATEONLY,
            set(value) {
                this.setDataValue('birthday', formatDate(value));
            }
        },
        status: {
            type: DataTypes.ENUM(['Presumed dead', 'Alive', 'Deceased', 'Unknown'])
        }
    }, {
        sequelize,
        modelName: 'Character',
        timestamps: false
    });
    return Character;
};
