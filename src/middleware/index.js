'use strict'


class Middleware{

    /**
     * Funcion para direccionar si no esta logueado 
     * @param {*} req - representa la solicitud HTTP 
     * @param {*} res - Representa la respuesta HTTP que envía una aplicación Express cuando recibe una solicitud HTTP
     * @param {*} next - permite continuar la aplicacion, de lo contrario quedara colgada
     * 
     */
    AuthValidation( req, res, next) {
        let loggedIn = req.session.loggedIn|| false
        let URLAuth = '/admin'

        if(loggedIn) return next();
        
        res.redirect(URLAuth);
        
    }

}
 
module.exports = new Middleware(); 