'use strict'
// const path = require('path') 


class Middleware{

    /**
     * Funcion para direccionar si no esta logueado 
     * @param {*} req - representa la solicitud HTTP 
     * @param {*} res - Representa la respuesta HTTP que envía una aplicación Express cuando recibe una solicitud HTTP
     * @param {*} next - permite continuar la aplicacion, de lo contrario quedara colgada
     * 
     */
//    AppHelper.ValidLogin(req.session,res)
    AuthValidation( req, res, next) {
        let session = req.session || false
        let URLAuth = '/admin'

        // console.log(session);
        if(!session.loggedin){
            res.redirect(URLAuth);
        }

        next();
    }

}
 
module.exports = new Middleware(); 