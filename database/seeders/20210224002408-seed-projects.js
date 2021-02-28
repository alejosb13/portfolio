'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      {
        title:    'title' ,
        comments: 'content',
        img:      'portfolio.jpg',
        order:    1,
        status:   1 ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:    'title2' ,
        comments: 'content2',
        img:      'portfolio.jpg',
        order:    2,
        status:   1 ,
        createdAt: new Date(),
        updatedAt: new Date()
      }      
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
