'use strict'

const { query } = require('express');
var dbConn = require('../../config/database')

/******************** Helpers ********************/
// const AppHelper = require('../helpers/appHelper') 

class ServicesModel {

    getServices(){
        return new Promise(function(resolve, reject) {
            dbConn.query("SELECT * FROM landing_services s WHERE s.`status`= 1 ORDER BY s.orden ASC", function (err, result) {
                if (err) reject(err);

                resolve(JSON.parse(JSON.stringify(result)));
            });
        });
    }

    setService(data){
        return new Promise(function(resolve, reject) {

            let query = "UPDATE `landing_services` SET titulo= ?, texto= ?, icono= ?";
            let values = [data.title,data.texto,data.icono]

            if(data.hasOwnProperty("img_name")){
                query += ", img=?  WHERE id_service = ?";
                values.push(data.img_name)
            }else{
                query += " WHERE id_service = ?";
            }

            values.push(data.servicio)

            dbConn.query(query,values, function (err, result) {
                if (err) reject(err);
console.log(err);
                resolve(JSON.parse(JSON.stringify(result)));
            });
        });
    }
}
    

module.exports = new ServicesModel();