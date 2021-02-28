'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Section_Service extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Section_Service.init({
        titulo: DataTypes.STRING,
        texto: DataTypes.STRING,
        icono: DataTypes.STRING,
        img_name: DataTypes.STRING,
        orden: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Section_Service',
    });

    Section_Service.All = async() => {
        let data = await Section_Service.findAll({
            where: {
                status: 1  // activo
            },
            raw : true 
        });
        
        return data
    }

    return Section_Service;
};