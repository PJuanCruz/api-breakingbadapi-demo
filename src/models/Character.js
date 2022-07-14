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
            Character.belongsToMany(models.Category, { as: 'categories', through: 'Characters_Categories', foreignKey: 'char_id' });
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
        nickname: {
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            get() {
                const value = this.getDataValue('birthday');
                return value ? value : 'Unknown';
            },
            set(value) {
                this.setDataValue('birthday', formatDate(value));
            }
        },
        status: {
            type: DataTypes.ENUM(['Presumed dead', 'Alive', 'Deceased', 'Unknown'])
        },
        occupation: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        img: {
            type: DataTypes.STRING(500),
            validate: {
                isUrl: true
            }
        },
        portrayed: {
            type: DataTypes.STRING
        },
        // category: {
        //     // type: DataTypes.ARRAY(DataTypes.ENUM(['Breaking Bad', 'Better Call Saul'])),
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        //     set(value) {
        //         this.setDataValue('category', value.split(', '));
        //     }
        // }
    }, {
        sequelize,
        modelName: 'Character',
        timestamps: false
    });
    return Character;
};
