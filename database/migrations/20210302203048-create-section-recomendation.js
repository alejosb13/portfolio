'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Section_Recomendations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(120)
      },
      work: {
        type: Sequelize.STRING(120)
      },
      dateworkIni: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING(500)
      },
      img: {
        type: Sequelize.STRING(60)
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Section_Recomendations');
  }
};