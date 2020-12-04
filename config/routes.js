let express = require('express');
let router  = express.Router();
// let bcrypt  = require('bcrypt');

/******************** Controllers ********************/
const LoginController   = require('../src/controllers/LoginController')
const HomeController    = require('../src/controllers/HomeController')
const AdminController   = require('../src/controllers/admin/AdminController')
const LandingController = require('../src/controllers/admin/LandingController')

/******************** Routes ********************/
router.get('/admin', LoginController.index);
router.post('/admin/auth', LoginController.auth);
router.get('/admin/log-out', LoginController.logOut);

router.get('/admin/home', AdminController.index);

router.get('/admin/landing/inicio', LandingController.inicio);
router.post('/admin/landing/inicio/setkeywords', LandingController.setKeyword);
router.post('/admin/landing/inicio/deletekeywords', LandingController.deleteKeyword);

// router.post('/', LoginController.autentication);

router.get('/',HomeController.index);
module.exports = router;