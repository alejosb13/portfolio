'use strict'

/******************** Config ********************/
// const { recommendations } = require('../../config/config') 

/******************** Models ********************/
const { 
    Section_Inicio, 
    Section_Service, 
    Keyword, 
    Section_Project, 
    Section_Recomendation,
    SocialMedia,

}  = require('../models')

class HomeController {

    async index(req, res) {
        let data = {};
        let KeywordBanner = 1

        data.BannerInicio           = await Section_Inicio.All()
        data.keywords               = await Keyword.findSection(KeywordBanner)
        data.Servicios              = await Section_Service.All();
        data.Recommendations        = await Section_Recomendation.All();
        data.Projects               = await Section_Project.All();
        data.SocialMedia               = await SocialMedia.All();
        
        res.render('home_view.twig', data );
    }
}



module.exports = new HomeController();