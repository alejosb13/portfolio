'use strict'

/******************** Helpers ********************/
const AppHelper = require('../../helpers/AppHelper') 

class AdminController {
    async index(req,res) { 
        let data = {}

        data.section     = "D-HOME"
        data.username = req.session.username,
        data.baseUrl  = AppHelper.getUrl(req,"baseUrl")

        res.render('admin/home_view', data);
    }


}
 
module.exports = new AdminController();