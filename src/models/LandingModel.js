'use strict'

var dbConn = require('../../config/database')

/******************** Helpers ********************/
// const AppHelper = require('../helpers/appHelper') 


class LandingModel {

    getDataInicio(){
        return new Promise(function(resolve, reject) {
            dbConn.query("SELECT * FROM landing_inicio li WHERE li.status = 1", function (err, result) {
                if (err) reject(err);

                resolve(JSON.parse(JSON.stringify(result[0])));
            });
        });
    }
    
    getKeywordsInicio(){
        return new Promise(function(resolve, reject) {
            dbConn.query("SELECT kw.id,kw.keyword FROM landing_inicio li INNER JOIN keywords kw ON li.keyword_section = kw.keyword_section WHERE li.`status` = 1 AND kw.`status` = 1", function (err, result) {
                if (err) reject(err);

                resolve(JSON.parse(JSON.stringify(result)));
            });
        });
    }

    setKeywords(data){
        return new Promise(function(resolve, reject) {
            dbConn.query("INSERT INTO keywords VALUES (NULL,?,?,1)",[data.keytext,data.section],(err, result) => {
                // console.log(result);
                if (err){
                    // console.log(err);
                    // response(false);
                    reject(false);
                }else{
                    // response({ status:true })
                    resolve(JSON.parse(JSON.stringify(result)))
                }
            });

        });
    }

    deleteKeywords(data){
        return new Promise(function(resolve, reject) {
            dbConn.query("DELETE FROM keywords WHERE id = ? AND status = 1 ",[data.id],(err, result) => {
                console.log(result);
                if (err){
                    // console.log(err);
                    // response(false);
                    reject(false);
                }else{
                    // response({ status:true })
                    resolve(JSON.parse(JSON.stringify(result)))
                }
            });

        });
    }
    
    getKeywords(id){
        return new Promise(function(resolve, reject) {
            dbConn.query("SELECT * FROM keywords kw WHERE kw.status = 1 AND kw.id = ?",[id], function (err, result) {
                if (err) reject(err);

                resolve(JSON.parse(JSON.stringify(result)));
            });
        });
    }

}



module.exports = new LandingModel();