'use strict';

const { Character, Category } = require('../models');

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Characters_Categories extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Characters_Categories.init({
        char_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Character,
                key: 'char_id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Category,
                key: 'category_id'
            }
        }
    }, {
        sequelize,
        modelName: 'Characters_Categories',
        timestamps: false
    });
    return Characters_Categories;
};