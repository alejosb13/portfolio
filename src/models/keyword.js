'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Keyword extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    
    Keyword.init({
        keyword: DataTypes.STRING,
        keyword_section: DataTypes.BOOLEAN,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Keyword',
    });

    Keyword.findSection = async (section) =>{
        const data = await Keyword.findAll({
            where: {
                keyword_section: section,  // 1 = banner, 2 = meta 
                status: 1  // activo
            },
            raw : true 
        });
        
        return (data.length > 0)? data.map( (val)=> val.keyword ) : [];
    }
  
    /**
     *  returns a array of objects with all keyword 
     * @param {number} section - Section the keyword
     * @returns {Array} data - all keywords
     * 
     */
    Keyword.getSection = async (section) =>{
        const data = await Keyword.findAll({
            where: {
                keyword_section: section,  // 1 = banner, 2 = meta 
                status: 1  // activo
            },
            raw : true 
        });
        
        return data;
    }


    return Keyword;
};