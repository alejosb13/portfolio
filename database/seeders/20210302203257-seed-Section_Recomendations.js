'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Section_Recomendations', [
        {
            "name":        'Ruben Ortega',
            "work":        'Programador en Xyclon',
            "dateWorkIni": '3 de noviembre de 2020, Alejandro trabajó con Ruben en el mismo grupo',
            "comment":     'Muy buen profesional, autodidacta y responsable. curioso en nuevas tecnologías consiguiendo así muy buenos resultados dentro de una empresa.',
            "img":         'user-circle-solid.png',
            "status":      1,
            createdAt:     new Date(),
            updatedAt:     new Date()
        },
        {
            "name":         'Jose Alejandro Prado',
            "work":         'Especialista en Mercadeo Digital y Tradicional',
            "dateWorkIni":  '28 de junio de 2018. Jose Alejandro supervisó a Alejandro',
            "comment":      'Excelente Profesional, siempre competitivo y con deseos de aprender... 100% Pro activo y con superación de objetivos en cuanto a los requerimientos que se les asignaba. Amplios conocimientos en Programación demostrando creatividad y disciplina en todo lo que hace. Responsable y con gran sentido de pertenencia en la organización.',
            "img":         'user-circle-solid.png',
            "status":       1,
            createdAt:      new Date(),
            updatedAt:      new Date()
        },
        {
            "name":         'Andrés O. Cordero Butrón',
            "work":         'Digital Lead at Metis #OtraInteligencia',
            "dateWorkIni":  '15 de junio de 2018, Alejandro trabajó con Andrés O. en el mismo grupo',
            "comment":      'Tuve la oportunidad de trabajar con Alejandro y lo recomiendo como programador y persona. Siempre fue capaz de resolver cualquier problema que se le presentó y entregar al cliente un diseño web funcional y de calidad. Es una persona cordial, diligente y trabaja bien en equipo.',
            "img":         'user-circle-solid.png',
            "status":       1,
            createdAt:      new Date(),
            updatedAt:      new Date()
        },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Section_Recomendations', null, {});

  }
};
