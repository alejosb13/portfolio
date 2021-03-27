let express = require('express');
let router  = express.Router();

/******************** Controllers ********************/
const HomeController            = require('../src/controllers/HomeController')
const LoginController           = require('../src/controllers/LoginController')
const AdminController           = require('../src/controllers/admin/AdminController')
const BannerController          = require('../src/controllers/admin/BannerController')
const ServiceController         = require('../src/controllers/admin/ServiceController')
const ProjectController         = require('../src/controllers/admin/ProjectController')
const RecomendationController   = require('../src/controllers/admin/RecomendationController')
const SocialMediaController     = require('../src/controllers/admin/SocialMediaController')
const KeywordController         = require('../src/controllers/admin/KeywordController')

/******************** middleware ********************/
const Middleware     = require('../src/middleware')


/******************** Routes ********************/

// Login
router.get('/admin', LoginController.index);
router.post('/admin/auth', LoginController.auth);
router.get('/admin/log-out', LoginController.logOut);

// Admin
router.get('/admin/home', Middleware.AuthValidation, AdminController.index);


// *** Landig Section ***

//  Banner 
router.get('/admin/landing/banner', Middleware.AuthValidation, BannerController.inicio);
router.put('/admin/landing/banner/:idBanner', Middleware.AuthValidation, BannerController.updateData);

// Servicios
router.get('/admin/landing/services', Middleware.AuthValidation, ServiceController.index);
router.put('/admin/landing/services/:idService', Middleware.AuthValidation, ServiceController.setService);

// Projects
router.get('/admin/landing/project', Middleware.AuthValidation, ProjectController.index);
router.put('/admin/landing/project/:idProject', Middleware.AuthValidation, ProjectController.setProject);

// Recomendation
router.get('/admin/landing/recomendations', Middleware.AuthValidation, RecomendationController.index);
router.put('/admin/landing/recomendations/:idRecomendation', Middleware.AuthValidation, RecomendationController.setRecomendation);

// *** End Landig Section ***


// *** Config *** 

// Social Media
router.get('/admin/config/socialmedia', Middleware.AuthValidation, SocialMediaController.index);
router.put('/admin/config/socialmedia/:idSocialMedia', Middleware.AuthValidation, SocialMediaController.setSocialMedia);
router.post('/admin/config/socialmedia', Middleware.AuthValidation, SocialMediaController.insertSocialMedia);

//  Keywords
router.get('/admin/config/keywords', Middleware.AuthValidation, KeywordController.index);
router.delete('/admin/config/keywords/:idKeyword', Middleware.AuthValidation, KeywordController.deleteKeyword);
router.post('/admin/config/keywords', Middleware.AuthValidation, KeywordController.setKeyword);

// *** End Config *** 

// Landing
router.get('/',HomeController.index);



// falta crsf token
// falta corregir pagina de Errores






module.exports = router;