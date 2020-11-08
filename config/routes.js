let express = require('express');
let router  = express.Router();
// let bcrypt  = require('bcrypt');

/******************** Controllers ********************/
const LoginController = require('../src/controllers/LoginController')
const HomeController = require('../src/controllers/HomeController')

/******************** Routes ********************/
router.get('/admin', LoginController.index);
router.post('/admin/auth', LoginController.auth);
router.get('/admin/log-out', LoginController.logOut);

router.get('/admin/home', LoginController.home);
// router.post('/', LoginController.autentication);

router.get('/',HomeController.index);
module.exports = router;