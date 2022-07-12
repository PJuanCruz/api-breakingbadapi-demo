'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Quote extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Quote.belongsTo(models.Character, {as: 'author', foreignKey: 'char_id'});
        }
    }
    Quote.init({
        quote_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        quote: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Quote',
        timestamps: false
    });
    return Quote;
};