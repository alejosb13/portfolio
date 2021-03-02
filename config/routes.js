let express = require('express');
let router  = express.Router();

/******************** Controllers ********************/
const HomeController        = require('../src/controllers/HomeController')
const LoginController       = require('../src/controllers/LoginController')
const AdminController       = require('../src/controllers/admin/AdminController')
const BannerController      = require('../src/controllers/admin/LandingController')
const ServiciosController   = require('../src/controllers/admin/ServiciosController')
const ProjectController     = require('../src/controllers/admin/ProjectController')


/******************** Routes ********************/

// Login
router.get('/admin', LoginController.index);
router.post('/admin/auth', LoginController.auth);
router.get('/admin/log-out', LoginController.logOut);

// Admin
router.get('/admin/home', AdminController.index);

//  Banner 
router.get('/admin/landing/inicio', BannerController.inicio);
router.post('/admin/landing/inicio/setkeywords', BannerController.setKeyword);
router.post('/admin/landing/inicio/deletekeywords', BannerController.deleteKeyword);
router.post('/admin/landing/inicio/updatedata', BannerController.updateData);

// Servicios
router.get('/admin/landing/servicios', ServiciosController.index);
router.post('/admin/landing/servicios/update', ServiciosController.setService);

// Projects
router.get('/admin/landing/project', ProjectController.index);
router.post('/admin/landing/project/update', ProjectController.setProject);

// Landing
router.get('/',HomeController.index);


// falta midelware oauth
// falta crsf token
// falta corregir url
// falta corregir idioma de proyecto
// falta corregir pagina de Errores






module.exports = router;