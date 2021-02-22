'use strict'

/******************** Config ********************/
const {recommendations} = require('../../config/config') 

/******************** Models ********************/
const BannerModel = require('../models/BannerModel') 
const ServicesModel    = require('../models/ServicesModel') 

/******************** Helpers ********************/
// const AppHelper = require('../helpers/appHelper') 


class HomeController {
//   constructor() {}

  async index(req, res) {
    let dataInicio  = await BannerModel.getDataInicio()
    let keywords    = await BannerModel.getKeywordsInicio()
    let servicios   = await ServicesModel.getServices()
    let keywordText = keywords.map( (val)=> val.keyword )

    res.render('home_view.twig',{
       recommendations,
       dataInicio,
       servicios,
       keywords: keywordText.join(),
    });
  }
}



module.exports = new HomeController();