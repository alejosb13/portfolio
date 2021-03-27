'use strict'

/* ******************* Models ******************* */
const { Section_Inicio, Keyword }  = require('../../models')

/* ******************* Helpers ******************* */
const AppHelper   = require('../../helpers/AppHelper') 
const path        = require('path');
const mime        = require('mime');
const fs          = require('fs');

class BannerController {
    async inicio(req,res) { 
        let data = {}
        let KeywordBannerSeccion = 1

        data.section     = "L-BANNER"
        data.baseUrl     = AppHelper.getUrl(req,"baseUrl")
        data.dataInicio  = await Section_Inicio.All();
        data.keywords    = await Keyword.getSection(KeywordBannerSeccion)
        data.username    = req.session.username;
        data.csrfToken   = req.csrfToken()

        res.render('admin/landing/banner_view', data );
    }


    async updateData (req,res) { 

        let { idBanner }       = req.params
        let { title,subtitle } = req.body
        let request            = {} 
        let cantidad           = 0 
        let filevalue          = req.files || false
        let data = {
            title,
            subtitle
        }
        
        if(filevalue){
            let file      = filevalue.file
            let extencion = mime.getExtension(file.mimetype);
            let nameFile  = "banner_inicio"
            
            while (true) {
                if(cantidad !== 0) nameFile = `banner_inicio(${cantidad})`
                
                let existFile = fs.existsSync(path.join(__dirname,`../../../public/img/uploads/${nameFile}.${extencion}`))
                
                if(existFile){
                    cantidad++
                }else{
                    file.mv(path.join(__dirname,`../../../public/img/uploads/${nameFile}.${extencion}`),err => {
                        if(err) return res.status(500).send({ message : err })
                        // return res.status(200).send({ message : 'File upload' })
                    })

                    break;
                }
            }
            
            data.img_name = `${nameFile}.${extencion}`
        }

        try {

            let result = await Section_Inicio.update(data, {
                where: {
                  id: idBanner
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
 
module.exports = new BannerController();