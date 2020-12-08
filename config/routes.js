let express = require('express');
let router  = express.Router();
// let multer 		= require('multer');
let path        = require('path');
const fs = require('fs')
// const FileType = require('file-type');
// let bcrypt  = require('bcrypt');

/******************** Controllers ********************/
const LoginController   = require('../src/controllers/LoginController')
const HomeController    = require('../src/controllers/HomeController')
const AdminController   = require('../src/controllers/admin/AdminController')
const LandingController = require('../src/controllers/admin/LandingController')

// var storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 	  cb(null, 'public/img/uploads')
// 	},
//     filename: function (req, file, callback) {
//         callback(null, file.fieldname + '-' + Date.now());
//     }
//   })
   
//   var upload = multer({ storage })


/******************** Routes ********************/
router.get('/admin', LoginController.index);
router.post('/admin/auth', LoginController.auth);
router.get('/admin/log-out', LoginController.logOut);

router.get('/admin/home', AdminController.index);

router.get('/admin/landing/inicio', LandingController.inicio);
router.post('/admin/landing/inicio/setkeywords', LandingController.setKeyword);
router.post('/admin/landing/inicio/deletekeywords', LandingController.deleteKeyword);
router.post('/admin/landing/inicio/updatedata', LandingController.updateData);

// router.post('/', LoginController.autentication);

router.get('/',HomeController.index);
module.exports = router;