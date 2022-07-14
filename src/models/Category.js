'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Category.belongsToMany(models.Character, { as: 'characters', through: 'Characters_Categories', foreignKey: 'category_id' });
        }
    }
    Category.init({
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        serie: {
            type: DataTypes.ENUM(['Breaking Bad', 'Better Call Saul']),
            unique: true,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Category',
        timestamps: false
    });
    return Category;
};
