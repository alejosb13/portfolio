'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Section_Inicios', [{
			"title": "Alejandro Sanchez",
			"subtitle": "I'm",
			"keyword_section": 1,
			"img_name": "banner_inicio.jpeg",
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Section_Inicios', null, {});
  }
};
