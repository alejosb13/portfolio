'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Section_Recomendation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    Section_Recomendation.init({
        name: DataTypes.STRING,
        work: DataTypes.STRING,
        dateworkIni: DataTypes.STRING,
        comment: DataTypes.STRING,
        img: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Section_Recomendation',
    });

    Section_Recomendation.All = async () =>{
        const data = await Section_Recomendation.findAll({
            where: {
                status: 1  // activo
            },
            raw : true 
        });
        // console.log(data);

        return data// colocar la posicion 0 solo cuando es un valor
    }

    return Section_Recomendation;
};