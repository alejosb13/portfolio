'use strict'

// const path = require('path') 

/******************** Models ********************/
const { User }  = require('../models')


/******************** Helpers ********************/
const AppHelper = require('../helpers/AppHelper') 


class LoginController {
    index(req, res){

        res.render('admin/login_view',{
            csrfToken: req.csrfToken(),
            baseUrl: AppHelper.getUrl(req,"baseUrl"),
        });
    }

    async auth(req, res){
        let { username,password } = req.body
        let request = {
            status:false,
        };
        if(username && password){

            try {
                let user = await User.findAll({
                    where: {
                        username,
                        password,
                        status:1
                    },
                    raw: true 
                });

                if(user.length > 0){
                    req.session.loggedIn = true;
                    req.session.username = username;

                    request.status   = true;
                }else{
                    request.message  = "Usuario o Contraseña son incorrectos.";
                }

            } catch (error) {

                console.log(error);
                request.message  = "¡Error!";
            }

            
        }

        res.json(request)
    }

    logOut(req, res){
        req.session.destroy((err) => {
            res.redirect('/admin') // will always fire after session is destroyed
        })
    }

}



module.exports = new LoginController();