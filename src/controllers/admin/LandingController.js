'use strict'

/******************** Models ********************/
const LandingModel = require('../../models/LandingModel') 

/******************** Helpers ********************/
const AppHelper   = require('../../helpers/AppHelper') 
const path        = require('path');
const mime        = require('mime');
const fs            = require('fs');

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
    
                let result = await LandingModel.deleteKeywords(data);
                // console.log(result);
    
                // if(result){
                //     let datainsert = await LandingModel.getKeywords(result.insertId);
                    
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

            let result = await LandingModel.setinicio(data);
            console.log(result);
        } catch (err) {
            console.log(err);
        }

        return res.status(200).send({ status : true })
    }
}
 
module.exports = new LandingController();