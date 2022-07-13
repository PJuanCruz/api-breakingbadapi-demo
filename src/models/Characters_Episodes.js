'use strict';

const { Character, Episode } = require('../models');

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Characters_Episodes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Characters_Episodes.init({
        char_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Character,
                key: 'char_id'
            }
        },
        episode_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Episode,
                key: 'episode_id'
            }
        }
    }, {
        sequelize,
        modelName: 'Characters_Episodes',
        timestamps: false
    });
    return Characters_Episodes;
};