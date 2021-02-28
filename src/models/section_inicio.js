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

    Section_Inicio.BannerKeywords = async () =>{
        const [ results, metadata ] = await sequelize.query("SELECT kw.id,kw.keyword FROM section_inicios si INNER JOIN keywords kw ON si.keyword_section = kw.keyword_section WHERE si.`status` = 1 AND kw.`status` = 1"); // Raw query - use array destructuring

        // devuelve un arreglo con keywors o array vacio
        return (results.length > 0)? results.map( (val)=> val.keyword ) : [];
    }

    Section_Inicio.BannerKeywordsArray = async () =>{
        const [ results, metadata ] = await sequelize.query("SELECT kw.id,kw.keyword FROM section_inicios si INNER JOIN keywords kw ON si.keyword_section = kw.keyword_section WHERE si.`status` = 1 AND kw.`status` = 1"); // Raw query - use array destructuring

        // devuelve un arreglo con keywors o array vacio
        return (results.length > 0)? results : [];
    }

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
