'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Episode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Episode.belongsToMany(models.Character, { as: 'characters', through: 'Characters_Episodes', foreignKey: 'episode_id' });
        }
    }
    Episode.init({
        episode_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Episode',
        timestamps: false
    });
    return Episode;
};