'use strict'
// const path = require('path') 
const url = require('url');

class AppHelper{
//   constructor() {}


    /**
     * Esta funcion arma la url del dominio actual eliminando el path o no
     * @param {*} req - Parametros request recibidos mediante la peticion http 
     * @param {*} options - string para elegir el tipo de url 
     * @returns {string} - Una URL para utilizar en los redireccionamientos
     */
    getUrl(req,options = "") {
        let myUrl = new URL(req.url,url.format({protocol: req.protocol,host: req.get('host')},{unicode: true }));
        let newUrl = "";

        switch (options) {
            case "baseUrl":
                newUrl = myUrl.origin+"/";
            break;

            case "baseUrlPath":
                newUrl = myUrl.origin+myUrl.pathname+"/";
            break

            default:
                newUrl = myUrl.href;
            break;
        }
        return newUrl;

    }

    /**
     * Funcuin para direccionar si no esta logueado 
     * @param {*} session - Variable session del servidor
     * @param {*} res - Representa la respuesta HTTP que envía una aplicación Express cuando recibe una solicitud HTTP
     * @param {*} url - URL a donde redireccionar en caso de no estar logueado
     * 
     */
    ValidLogin( session, res, url = '/admin' ) {
        console.log(session);
        if(!session.loggedin){
            res.redirect(url);
        }

    }

}
 
module.exports = new AppHelper(); 