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

        // AppHelper.ValidLogin(req.session,res)


        data.baseUrl     = AppHelper.getUrl(req,"baseUrl")
        data.dataInicio  = await Section_Inicio.All();
        data.keywords    = await Section_Inicio.BannerKeywordsArray();
        data.username    = req.session.username;

        res.render('admin/landing/inicio_view', data );
    }

    async setKeyword (req,res) { 
    
        // AppHelper.ValidLogin(req.session,res)


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

        
        let request = { status : false }
        let { id } = req.body
        
        if(iid){
            
            try {
                await Keyword.destroy({
                    where: {
                        id
                    }
                });
                
                request.status = true
                
            } catch (err) {
                console.log(err);
            }
        }
        
        res.json(request)
     
    }

    async updateData (req,res) { 

        // AppHelper.ValidLogin(req.session,res)

        let { title,subtitle } = req.body
        let request   = {} 
        let cantidad  = 0 
        let filevalue = req.files || false
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
                  id: 1
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