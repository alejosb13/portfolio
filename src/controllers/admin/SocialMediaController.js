'use strict'

/* ******************* Models ******************* */
const { SocialMedia }  = require('../../models')

/******************** Helpers ********************/
const AppHelper = require('../../helpers/AppHelper') 

class SocialMediaController {
    async index(req,res) { 
        let data = {}

        data.section     = "C-SOCIALMEDIA"
        data.baseUrl     = AppHelper.getUrl(req,"baseUrl")
        data.SocialMedia = await SocialMedia.All();

        res.render('admin/config/socialmedia_view', data);
    }

    async setSocialMedia (req,res) { 
        let { idSocialMedia }   = req.params
        let request= {}
        let { name,url,tag,html } = req.body
        let data = {
            name,
            url,
            tag,
            html,
        };

        try {

            let result = await SocialMedia.update(data, {
                where: {
                  id: idSocialMedia
                }
            });

            if(result) request.status = true
        
        } catch (err) {
        
            console.log(err);
            request.status = false

        }

        return res.json(request)
    }
}
 
module.exports = new SocialMediaController();