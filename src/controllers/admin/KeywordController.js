'use strict'

/* ******************* Models ******************* */
const { Keyword }  = require('../../models')

/* ******************* Helpers ******************* */
const AppHelper   = require('../../helpers/AppHelper') 


class KeywordController {

    async index(req,res) { 
        let data = {}
        let KeywordBannerSeccion = 2

        data.section     = "C-KEYWORDS"
        data.baseUrl     = AppHelper.getUrl(req,"baseUrl")
        data.username    = req.session.username;
        data.keywords    = await Keyword.getSection(KeywordBannerSeccion)
        data.csrfToken   = req.csrfToken()
        
        res.render('admin/config/keywords_view', data );
    }

    async setKeyword (req,res) { 
        let request = {}
        let { keytext,section } = req.body
        

        if(keytext && section){
            try{
                await Keyword.create({
                    keyword: req.body.keytext,
                    keyword_section: req.body.section,
                    status: 1
                });

                request.status = true
                // request.data   =  dataIsert.toJSON();

            } catch (err) {    
                request.status = false
                console.log(err);
            }

        }

        res.json(request)     
    }

    async deleteKeyword (req,res) { 
        
        // AppHelper.ValidLogin(req.session,res)

        let { idKeyword }   = req.params
        let request         = { status : false }
        
        if(idKeyword){
            
            try {
                await Keyword.destroy({
                    where: {
                        id: idKeyword
                    }
                });
                
                request.status = true
                
            } catch (err) {
                console.log(err);
            }
        }
        
        res.json(request)
     
    }


}
 
module.exports = new KeywordController();