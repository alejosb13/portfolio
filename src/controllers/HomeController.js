'use strict'

/******************** Config ********************/
// const { recommendations } = require('../../config/config') 

/******************** Models ********************/
const { Section_Inicio, Section_Service, Keyword, Section_Project, Section_Recomendation }  = require('../models')

class HomeController {

    async index(req, res) {
        let data = {};
        
        // data.recommendations = recommendations
        data.BannerInicio           = await Section_Inicio.All()
        // data.keywords        = await Section_Inicio.BannerKeywords()
        data.keywords               = await Keyword.findSection(1)
        data.Servicios              = await Section_Service.All();
        data.Recommendations        = await Section_Recomendation.All();
        data.Projects               = await Section_Project.All();
        
        res.render('home_view.twig', data );
    }
}



module.exports = new HomeController();