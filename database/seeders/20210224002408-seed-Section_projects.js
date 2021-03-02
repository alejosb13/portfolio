'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Section_Projects', [
      {
        title:    'title' ,
        commend:  'content',
        img:      'portfolio.jpeg',
        order:    1,
        status:   1 ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:    'title2' ,
        commend:  'content2',
        img:      'portfolio.jpg',
        order:    2,
        status:   1 ,
        createdAt: new Date(),
        updatedAt: new Date()
      }      
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Section_Project', null, {});
  }
};
