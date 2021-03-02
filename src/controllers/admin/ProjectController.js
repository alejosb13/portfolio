'use strict'

/* ******************* Models ******************* */
const { Section_Project }  = require('../../models')

/* ******************* Helpers ******************* */
const AppHelper   = require('../../helpers/AppHelper') 
const path        = require('path');
const mime        = require('mime');
const fs          = require('fs');

class ProjectController {
    async index(req,res) { 
        // AppHelper.ValidLogin(req.session,res)
        
        let data = {}

        data.projects = await Section_Project.All();
        data.username  = req.session.username;
        data.baseUrl   = AppHelper.getUrl(req,"baseUrl");
        
        // console.log(data.services);

        res.render('admin/landing/project_view', data);
    }

    async setProject(req,res) { 
        // AppHelper.ValidLogin(req.session,res)

        let request= {}
        let { title,texto,project } = req.body
        let cantidad  = 0 
        let filevalue = req.files
        let data = {
            title,
            commend:texto,
        };

        if(filevalue){
            let file      = filevalue.file
            let extencion = mime.getExtension(file.mimetype);
            let nameFile  = "portfolio"+project
            
            while (true) {
                if(cantidad !== 0) nameFile = `portfolio${project}(${cantidad})`
                
                let existFile = fs.existsSync(path.join(__dirname,`../../../public/img/uploads/projects/${nameFile}.${extencion}`))

                if(existFile){
                    cantidad++
                }else{
                    file.mv(path.join(__dirname,`../../../public/img/uploads/projects/${nameFile}.${extencion}`),err => {
                        if(err) return res.status(500).send({ message : err })
                        // return res.status(200).send({ message : 'File upload' })
                    })
                    break;
                }
            }

            data.img = `${nameFile}.${extencion}`
        }

        try {

            let result = await Section_Project.update(data, {
                where: {
                  id: project
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
 
module.exports = new ProjectController();