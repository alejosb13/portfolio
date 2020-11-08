'use strict'

/******************** Models ********************/
const UserModel = require('../models/UserModel') 


/******************** Helpers ********************/
// const AppHelper = require('../helpers/appHelper') 


class LoginController {
//   constructor() {}

    index = (req, res)=>{
        UserModel.getAll((error,result)=>{
            res.render('admin/login_view');
        })
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
            res.redirect('/') // will always fire after session is destroyed
        })
    }

    home(req, res){
        let data = {}
        if(!req.session.loggedin){
            res.redirect('admin/');
        }

        res.render('admin/home_view',{
            username: req.session.username,
        });

    }

}



module.exports = new LoginController();