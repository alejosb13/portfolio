'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Keywords', [
      {
        "keyword": "Web Developer",
        "keyword_section": 1,
        "status": 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "keyword": "Front-End Developer",
        "keyword_section": 1,
        status:   1 ,
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        "keyword": "Back-End Developer",
        "keyword_section": 1,
        status:   1 ,
        createdAt: new Date(),
        updatedAt: new Date()
      }      
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Keywords', null, {});
  }
};
