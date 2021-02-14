'use strict'

/******************** Models ********************/
const ServicesModel = require('../../models/ServicesModel') 

/******************** Helpers ********************/
const AppHelper   = require('../../helpers/AppHelper') 
const path        = require('path');
const mime        = require('mime');
const fs            = require('fs');

class ServiciosController {
    async index(req,res) { 
        let data = {}
        // console.log(req.session);
        // if(!req.session.loggedin){
        //     res.redirect('/admin');
        // }

        data.servicios = await ServicesModel.getServices();
        data.username  = req.session.username;
        data.baseUrl   = AppHelper.getUrl(req,"baseUrl");
        
        // console.log(data.services);

        res.render('admin/landing/servicios_view', data);
    }

    async setService (req,res) { 
        // try {
            let {title,texto,servicio,icono} = req.body
            let cantidad  = 0 
            let filevalue = req.files
            let data = {
                title,
                texto,
                servicio,
                icono,
            };
console.log(filevalue);
            if(filevalue){
                let file      = filevalue.file
                let extencion = mime.getExtension(file.mimetype);
                let nameFile  = "services"+servicio
                
                while (true) {
                    // console.log("a");
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
            } catch (err) {
                console.log(err);
            }
    
            return res.status(200).send({ status : true })
     
    }

    async deleteKeyword (req,res) { 
        try {
            let request = {status:false}

            // console.log(req.session);
            // if(!req.session.loggedin){
            //     res.redirect('/admin');
            // }
            if(req.body.id){
                let data = {
                    id : req.body.id,
                }
    
                let result = await BannerModel.deleteKeywords(data);
                // console.log(result);
    
                // if(result){
                //     let datainsert = await BannerModel.getKeywords(result.insertId);
                    
                //     request.data   = datainsert
                //     request.status = true
                // }
                if(result) request.status = true
            }
            
            // console.log(request);
            res.json(request)
        } catch (err) {
            console.log(err);
        }
     
    }

    async updateData (req,res) { 
            // console.log(req.session);
            // if(!req.session.loggedin){
            //     res.redirect('/admin');
            // }
        // console.log(req.files);
        let cantidad  = 0 
        let filevalue      = req.files
        let data = {
            title: req.body.title,
            subtitle: req.body.subtitle,
        }
        // console.log(filevalue);
        if(filevalue){
            let file      = filevalue.file
            let extencion = mime.getExtension(file.mimetype);
            let nameFile  = "banner_inicio"
            
            while (true) {
                // console.log("a");
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
            
            data.img_name= `${nameFile}.${extencion}`
        }

        
        try {

            let result = await BannerModel.setinicio(data);
            console.log(result);
        } catch (err) {
            console.log(err);
        }

        return res.status(200).send({ status : true })
    }
}
 
module.exports = new ServiciosController();