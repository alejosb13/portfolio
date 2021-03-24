'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('SocialMedia', [
            {
                "name": "Facebook",
                "url":  "https://www.facebook.com/alej.sanchez.3/",
                "tags": "alej.sanchez.3",
                "html": "",
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "name": "LinkedIn",
                "url":  "https://www.linkedin.com/in/alejo-sanchez/",
                "tags": "alejo-sanchez",
                "html": "",
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "name": "Instagram",
                "url":  "https://www.instagram.com/alejosb13/",
                "tags": "alejosb13",
                "html": "",
                "status": 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);

    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('SocialMedia', null, {});
    }
};
