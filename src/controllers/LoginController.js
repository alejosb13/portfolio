'use strict'

// const path = require('path') 

/******************** Models ********************/
const UserModel = require('../models/UserModel') 

/******************** Helpers ********************/
const AppHelper = require('../helpers/AppHelper') 


class LoginController {
    index(req, res){
        console.log("asd : "+ AppHelper.getUrl(req,"baseUrlPath"));
        res.render('admin/login_view',{
            baseUrl: AppHelper.getUrl(req,"baseUrlPath"),
        });
    }

    auth(req, res){
        let data = {
            username : req.body.username,
            password : req.body.password
        }

        if(data.username && data.password){
            UserModel.getUser(data,(err,result)=>{
                let json = {}

                if(result.length > 0){
                    req.session.loggedin = true;
                    req.session.username = data.username;
                    
                    json.error  = false;
                    // json.data   = result;
                    json.valid   = true;
                }else{
                    json.error    = false;
                    json.valid    = false;
                    json.message  = "Usuario o Contraseña son incorrectos.";

                    // json.data   = {};
                }
                res.json(json)
            })
        }
    }

    logOut(req, res){
        req.session.destroy((err) => {
            res.redirect('/admin') // will always fire after session is destroyed
        })
    }

}



module.exports = new LoginController();