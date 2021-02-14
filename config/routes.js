let express = require('express');
let router  = express.Router();

/******************** Controllers ********************/
const LoginController       = require('../src/controllers/LoginController')
const HomeController        = require('../src/controllers/HomeController')
const AdminController       = require('../src/controllers/admin/AdminController')
const BannerController      = require('../src/controllers/admin/LandingController')
const ServiciosController   = require('../src/controllers/admin/ServiciosController')


/******************** Routes ********************/
router.get('/admin', LoginController.index);
router.post('/admin/auth', LoginController.auth);
router.get('/admin/log-out', LoginController.logOut);

router.get('/admin/home', AdminController.index);

//  Banner 
router.get('/admin/landing/inicio', BannerController.inicio);
router.post('/admin/landing/inicio/setkeywords', BannerController.setKeyword);
router.post('/admin/landing/inicio/deletekeywords', BannerController.deleteKeyword);
router.post('/admin/landing/inicio/updatedata', BannerController.updateData);

// Servicios
router.get('/admin/landing/servicios', ServiciosController.index);
router.post('/admin/landing/servicios/update', ServiciosController.setService);


// router.post('/', LoginController.autentication);

router.get('/',HomeController.index);
module.exports = router;