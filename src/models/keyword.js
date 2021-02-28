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
    return Keyword;
};