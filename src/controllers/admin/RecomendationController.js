'use strict'

/* ******************* Models ******************* */
const { Section_Recomendation }  = require('../../models')

/* ******************* Helpers ******************* */
const AppHelper   = require('../../helpers/AppHelper') 
const path        = require('path');
const mime        = require('mime');
const fs          = require('fs');

class RecomendationController {
    async index(req,res) { 
        // AppHelper.ValidLogin(req.session,res)
        
        let data = {}

        data.recomendations = await Section_Recomendation.All();
        data.username       = req.session.username;
        data.baseUrl        = AppHelper.getUrl(req,"baseUrl");
        
        // console.log(data.services);

        res.render('admin/landing/recomendation_view', data);
    }

    async setProject(req,res) { 
        // AppHelper.ValidLogin(req.session,res)
        let { idRecomendation} = req.params
        let request      = {}
        let cantidad     = 0 
        let filevalue    = req.files
        let { name,work,dateworkIni,comment} = req.body
        let data = {
            name,
            work,
            dateworkIni,
            comment,
        };

        if(filevalue){
            let file      = filevalue.file
            let extencion = mime.getExtension(file.mimetype);
            let nameFile  = name;
            
            while (true) {
                if(cantidad !== 0) nameFile = name+`(${cantidad})` 

                nameFile  = nameFile.replace(/\s+/g,'-').toLowerCase()

                let existFile = fs.existsSync(path.join(__dirname,`../../../public/img/uploads/recomendations/${nameFile}.${extencion}`))

                if(existFile){
                    cantidad++
                }else{
                    file.mv(path.join(__dirname,`../../../public/img/uploads/recomendations/${nameFile}.${extencion}`),err => {
                        if(err) return res.status(500).send({ message : err })
                        // return res.status(200).send({ message : 'File upload' })
                    })
                    break;
                }
            }

            data.img = `${nameFile}.${extencion}`
        }


        try {

            let result = await Section_Recomendation.update(data, {
                where: {
                  id: idRecomendation
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
 
module.exports = new RecomendationController();