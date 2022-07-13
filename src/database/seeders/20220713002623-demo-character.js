'use strict';

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
        await queryInterface.bulkInsert('Characters',
            [
                {
                    char_id: 1,
                    name: "Walter White",
                    birthday: "1958-07-09",
                    status: "Presumed dead"
                },
                {
                    char_id: 2,
                    name: "Jesse Pinkman",
                    birthday: "1984-09-24",
                    status: "Alive"
                },
                {
                    char_id: 3,
                    name: "Skyler White",
                    birthday: "1970-11-08",
                    status: "Alive"
                },
            ],
            {}
        );
        await queryInterface.bulkInsert('Quotes',
            [
                {
                    quote_id: 1,
                    quote: "I am not in danger, Skyler. I am the danger!",
                    char_id: 1
                },
                {
                    quote_id: 2,
                    quote: "Stay out of my territory.",
                    char_id: 1
                },
                {
                    quote_id: 3,
                    quote: "IFT",
                    char_id: 3
                },
                {
                    quote_id: 4,
                    quote: "I watched Jane die. I was there. And I watched her die. I watched her overdose and choke to death. I could have saved her. But I didn’t.",
                    char_id: 1
                },
            ],
            {}
        );
        await queryInterface.bulkInsert('Episodes',
            [
                {
                    episode_id: 1,
                    title: "Pilot",
                },
                {
                    episode_id: 2,
                    title: "Cat's in the Bag...",
                },
                {
                    episode_id: 3,
                    title: "...And the Bag's in the River",
                },
            ],
            {}
        );
        await queryInterface.bulkInsert('Characters_Episodes',
            [
                {
                    char_id: 1,
                    episode_id: 1,
                },
                {
                    char_id: 2,
                    episode_id: 1,
                },
                {
                    char_id: 3,
                    episode_id: 1,
                },
                {
                    char_id: 1,
                    episode_id: 2,
                },
                {
                    char_id: 2,
                    episode_id: 2,
                },
                {
                    char_id: 3,
                    episode_id: 2,
                },
                {
                    char_id: 1,
                    episode_id: 3,
                },
                {
                    char_id: 2,
                    episode_id: 3,
                },
                {
                    char_id: 3,
                    episode_id: 3,
                },
            ],
            {}
        );
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
