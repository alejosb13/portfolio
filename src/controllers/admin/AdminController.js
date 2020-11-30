'use strict'

/******************** Config ********************/
// const {recommendations} = require('../../config/config') 

/******************** Models ********************/
// const UserModel = require('../models/UserModel') 

/******************** Helpers ********************/
const AppHelper = require('../../helpers/AppHelper') 

class AdminController {
    async index(req,res) { 
        let data = {}
        // console.log(req.session);
        // if(!req.session.loggedin){
        //     res.redirect('/admin');
        // }
        await console.log("test");
        res.render('admin/home_view',{
            username: req.session.username,
            baseUrl: AppHelper.getUrl(req,"baseUrl"),
        });
    }


}
 
module.exports = new AdminController();