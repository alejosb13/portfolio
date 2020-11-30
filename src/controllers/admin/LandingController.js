'use strict'

/******************** Models ********************/
const LandingModel = require('../../models/LandingModel') 

/******************** Helpers ********************/
const AppHelper = require('../../helpers/AppHelper') 

class LandingController {
    async inicio(req,res) { 
        let data = {}
        // console.log(req.session);
        // if(!req.session.loggedin){
        //     res.redirect('/admin');
        // }

        let dataInicio          = await LandingModel.getDataInicio();
        let dataKeywordsInicio  = await LandingModel.getKeywordsInicio();

        res.render('admin/landing/inicio_view',{
            username: req.session.username,
            baseUrl: AppHelper.getUrl(req,"baseUrl"),
            dataInicio,
            dataKeywordsInicio
        });
    }

    async setKeyword (req,res) { 
        try {
            let request = {status:false}

            // console.log(req.session);
            // if(!req.session.loggedin){
            //     res.redirect('/admin');
            // }
            if(req.body.keytext && req.body.section){
                let data = {
                    keytext : req.body.keytext,
                    section : req.body.section
                }
    
                let result = await LandingModel.setKeywords(data);
                // console.log(result);
    
                if(result){
                    let datainsert = await LandingModel.getKeywords(result.insertId);
                    
                    request.data   = datainsert
                    request.status = true
                }
                // if(result) res.json(result)
            }
            
            console.log(request);
            res.json(request)
        } catch (err) {
            console.log(err);
        }
     
    }
}
 
module.exports = new LandingController();