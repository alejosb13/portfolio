'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Section_Project extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    Section_Project.init({
        title: DataTypes.STRING,
        commend: DataTypes.STRING,
        img: DataTypes.STRING,
        order: DataTypes.BOOLEAN,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Section_Project',
    });
    
    Section_Project.All = async () =>{
        const data = await Section_Project.findAll({
            where: {
                status: 1  // activo
            },
            raw : true 
        });
        // console.log(data);

        return data// colocar la posicion 0 solo cuando es un valor
    }
  
    return Section_Project;
};