'use strict';
const { Callbacks } = require('jquery');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Section_Inicio extends Model {
        static associate(models) {
        // define association here
        }
    };

    Section_Inicio.init({
            title: DataTypes.STRING,
            subtitle: DataTypes.STRING,
            keyword_section: DataTypes.BOOLEAN,
            img_name: DataTypes.STRING,
            status: DataTypes.BOOLEAN
        }, {
        sequelize,
        modelName: 'Section_Inicio',
    });


    Section_Inicio.All = async () =>{
        const data = await Section_Inicio.findAll({
            where: {
                status: 1  // activo
            },
            raw : true 
        });
        // console.log(data);

        return data[0] // colocar la posicion 0 solo cuando es un valor

    }
        
        
  return Section_Inicio;
};
