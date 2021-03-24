'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class SocialMedia extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    SocialMedia.init({
        name: DataTypes.STRING,
        url: DataTypes.STRING,
        tags: DataTypes.STRING,
        html: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'SocialMedia',
    });

    SocialMedia.All = async() => {
        let data = await SocialMedia.findAll({
            where: {
                status: 1  // activo
            },
            raw : true 
        });
        
        return data
    }

    return SocialMedia;
};