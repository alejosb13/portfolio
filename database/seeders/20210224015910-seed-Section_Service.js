'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Section_Services', [
      {
			  "titulo": "Web Development",
		  	"texto": "Modern and mobile-ready website that will help of your marketing.",
		  	"icono": "<i class='bx bx-code-curly'></i>",
		  	"img_name": "services1.jpeg",
		  	"orden": 1,
       status: 1,
       createdAt: new Date(),
       updatedAt: new Date()
    },
    {
			"titulo": "Servicio 2 ale2 ",
			"texto": "Ale imsup 2 Lorem imsup 2 Lorem imsup 2 Lorem imsup 2 Lorem imsup 2 Lorem imsup 2 Lorem imsup 2 Lorem imsup 2 Lorem im",
			"icono": "<i class='bx bx-code-curly'></i>",
			"img_name": "services2.jpeg",
			"orden": 2,
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "titulo": "Servicio 3 tes2",
			"texto": "Lorem imsup 3 Lorem imsup 3 Lorem imsup 3 Lorem imsup 2 Lorem imsup 2 Lorem imsup 3 Lorem imsup 3  Lorem imsup 3 Lorem i",
			"icono": "<i class='bx bx-code-curly'></i>",
			"img_name": "services3.jpeg",
			"orden": 3,
			"status": 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Section_Services', null, {});
  }
};
