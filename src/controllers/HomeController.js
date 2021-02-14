'use strict'

/******************** Config ********************/
const {recommendations} = require('../../config/config') 

/******************** Models ********************/
const BannerModel = require('../models/BannerModel') 

/******************** Helpers ********************/
// const AppHelper = require('../helpers/appHelper') 


class HomeController {
//   constructor() {}

  async index(req, res) {
    let dataInicio  = await BannerModel.getDataInicio()
    let keywords    = await BannerModel.getKeywordsInicio()
    let keywordText = keywords.map( (val)=> val.keyword )
// console.log(keywordText);
    res.render('home_view.twig',{
       recommendations,
       dataInicio,
       keywords: keywordText.join(),
    });
  }
}



module.exports = new HomeController();