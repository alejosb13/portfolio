'use strict'
// const path = require('path') 
const url = require('url');

class AppHelper{
//   constructor() {}


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

}
 
module.exports = new AppHelper(); 