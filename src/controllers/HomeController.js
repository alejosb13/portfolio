'use strict'

/******************** Config ********************/
const {recommendations} = require('../../config/config') 

/******************** Models ********************/
// const UserModel = require('../models/UserModel') 

/******************** Helpers ********************/
// const AppHelper = require('../helpers/appHelper') 


class HomeController {
//   constructor() {}

  index(req, res) {
    res.render('home_view.twig',{
       recommendations,
    });
    console.log(recommendations);
  }
}



module.exports = new HomeController();