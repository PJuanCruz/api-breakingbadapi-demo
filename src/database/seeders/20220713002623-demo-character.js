'use strict';

const data = require('../../utils/data');

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        await queryInterface.bulkInsert('Characters', data.characters, {});
        await queryInterface.bulkInsert('Quotes', data.quotes, {});
        await queryInterface.bulkInsert('Episodes', data.episodes, {});
        await queryInterface.bulkInsert('Characters_Episodes', data.characters_episodes, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Characters', null, {});
        await queryInterface.bulkDelete('Quotes', null, {});
        await queryInterface.bulkDelete('Episodes', null, {});
        await queryInterface.bulkDelete('Characters_Episodes', null, {});
    }
};
