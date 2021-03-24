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

/******************** middleware ********************/
const Middleware     = require('../src/middleware')


/******************** Routes ********************/

// Login
router.get('/admin', LoginController.index);
router.post('/admin/auth', LoginController.auth);
router.get('/admin/log-out', LoginController.logOut);

// Admin
router.get('/admin/home',Middleware.AuthValidation, AdminController.index);

// *** Landig Section ***
//  Banner 
router.get('/admin/landing/banner', BannerController.inicio);
router.put('/admin/landing/banner/:idBanner', BannerController.updateData);

router.delete('/admin/landing/banner/keywords/:idKeyword', BannerController.deleteKeyword);
router.post('/admin/landing/banner/keywords', BannerController.setKeyword);

// Servicios
router.get('/admin/landing/services', ServiceController.index);
router.put('/admin/landing/services/:idService', ServiceController.setService);

// Projects
router.get('/admin/landing/project', ProjectController.index);
router.put('/admin/landing/project/:idProject', ProjectController.setProject);

// Recomendation
router.get('/admin/landing/recomendations', RecomendationController.index);
router.put('/admin/landing/recomendations/:idRecomendation', RecomendationController.setRecomendation);

// *** End Landig Section ***

// *** Config *** 
// Social Media
router.get('/admin/config/socialmedia', SocialMediaController.index);
router.put('/admin/config/socialmedia/:idSocialMedia', SocialMediaController.setSocialMedia);
router.post('/admin/config/socialmedia', SocialMediaController.insertSocialMedia);

// admin/config/socialmedia/4
// admin/config/socialmedia
// admin/config/keywords
// admin/config/head
// admin/config/footer
// *** End Config *** 

// Landing
router.get('/',HomeController.index);


// falta midelware oauth
// falta corregir url
/* GET    /api/book/1/authors     -- returns list of all authors for /book/1
    POST   /api/book/1/authors     -- create a new author, returns the new author uri, e.g. /api/author/1
    GET    /api/author/1           -- get /author/1 info according to MIME type etc.
    PUT    /api/author/1           -- update /author/1
    DELETE /api/author/1           -- delete the /author/1 resource
    DELETE /api/book/1/author/1    -- delete author/1 from /book/ */
    /* /events:id' */
// falta crsf token
// falta corregir idioma de proyecto
// falta corregir pagina de Errores






module.exports = router;