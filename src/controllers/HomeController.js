'use strict'

/******************** Config ********************/
const { recommendations } = require('../../config/config') 

/******************** Models ********************/
const { Section_Inicio, Section_Service }  = require('../models')

class HomeController {

    async index(req, res) {
        let data = {};
        
        data.recommendations = recommendations
        data.BannerInicio    = await Section_Inicio.All()
        data.keywords        = await Section_Inicio.BannerKeywords()
        data.Servicios       = await Section_Service.All();
        
        res.render('home_view.twig', data );
    }
}



module.exports = new HomeController();