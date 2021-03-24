'use strict'

/******************** Models ********************/
const { Section_Service }  = require('../../models')


/******************** Helpers ********************/
const AppHelper   = require('../../helpers/AppHelper') 
const path        = require('path');
const mime        = require('mime');
const fs          = require('fs');

class ServiceController {
    async index(req,res) { 

        let data = {}
        
        data.section   = "L-SERVICE"
        data.baseUrl   = AppHelper.getUrl(req,"baseUrl");
        data.username  = req.session.username;
        data.servicios = await Section_Service.All();

        res.render('admin/landing/service_view', data);
    }

    async setService (req,res) { 
        let { idService }   = req.params
        let request= {}
        let { title,texto,icono } = req.body
        let cantidad  = 0 
        let filevalue = req.files
        let data = {
            titulo : title,
            texto,
            icono,
        };

        if(filevalue){
            let file      = filevalue.file
            let extencion = mime.getExtension(file.mimetype);
            let nameFile  = "services"+idService
            
            while (true) {
                if(cantidad !== 0) nameFile = `services${idService}(${cantidad})`
                
                let existFile = fs.existsSync(path.join(__dirname,`../../../public/img/uploads/servicios/${nameFile}.${extencion}`))

                if(existFile){
                    cantidad++
                }else{
                    file.mv(path.join(__dirname,`../../../public/img/uploads/servicios/${nameFile}.${extencion}`),err => {
                        if(err) return res.status(500).send({ message : err })
                        // return res.status(200).send({ message : 'File upload' })
                    })
                    break;
                }
            }
            data.img_name = `${nameFile}.${extencion}`
        }

        try {

            let result = await Section_Service.update(data, {
                where: {
                  id: idService
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
 
module.exports = new ServiceController();