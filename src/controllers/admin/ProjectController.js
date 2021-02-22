'use strict'

/******************** Models ********************/
const ProjectModel = require('../../models/ProjectModel') 

/******************** Helpers ********************/
const AppHelper   = require('../../helpers/AppHelper') 
const path        = require('path');
const mime        = require('mime');
const fs            = require('fs');

class ProjectController {
    async index(req,res) { 
        let data = {}
        // console.log(req.session);
        // if(!req.session.loggedin){
        //     res.redirect('/admin');
        // }

        data.servicios = await ProjectModel.getprojects();
        data.username  = req.session.username;
        data.baseUrl   = AppHelper.getUrl(req,"baseUrl");
        
        // console.log(data.services);

        res.render('admin/landing/servicios_view', data);
    }

    async setService (req,res) { 
        let {title,texto,servicio,icono} = req.body
        let cantidad  = 0 
        let filevalue = req.files
        let data = {
            title,
            texto,
            servicio,
            icono,
        };

        if(filevalue){
            let file      = filevalue.file
            let extencion = mime.getExtension(file.mimetype);
            let nameFile  = "services"+servicio
            
            while (true) {
                if(cantidad !== 0) nameFile = `services${servicio}(${cantidad})`
                
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
            data.img_name= `${nameFile}.${extencion}`
        }

        try {
            let result = await ServicesModel.setService(data);
            console.log(result);
            return res.json({ status : true })
        } catch (err) {
            console.log(err);
            return res.json({ status : false })
        }

    }

  
}
 
module.exports = new ProjectController();