let express     = require('express');
let fileUpload  = require ('express-fileupload') ; 
let session     = require('express-session');
var csrf 		= require('csurf')
let bodyParser  = require('body-parser');
let path        = require('path');
let app 		= express();

require('dotenv').config() // leer datos de archivo .env
const { connection } = require('./database/db') // Conexion con base de datos 


/********** View Config Twig **********/
app.set('views', path.join(__dirname,'src', 'views'));  // defino la ubicacion de los archivos de vista
app.set('view engine', 'twig'); // integro el uso del motor de plantilla twig con el proyecto

//declaro las carpetas de archivos staticos
app.use(express.static('public')); 
app.use('/normalize', express.static(__dirname + '/node_modules/normalize.css'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/umd'));
app.use('/velocity', express.static(__dirname + '/node_modules/velocity-animate'));
app.use('/typed', express.static(__dirname + '/node_modules/typed.js/lib'));
app.use('/boxicons', express.static(__dirname + '/node_modules/boxicons'));
app.use('/scrollbar', express.static(__dirname + '/node_modules/malihu-custom-scrollbar-plugin'));
app.use('/sweetalert', express.static(__dirname + '/node_modules/sweetalert/dist'));

/********** Session **********/
app.use(session({
    secret: process.env.APP_KEY || 'secret',
	resave: true,
	saveUninitialized: true,
})); // configuracion para el uso de sessiones

/********** Middleware **********/
app.use(bodyParser.urlencoded({extended : true})); // permito el envio de parametros 
app.use(bodyParser.json()); // declaro en el proyecto el uso de interfaces json

// configuro la carga de archivos de manera global
app.use(fileUpload());

/********** CSRF TOKEN **********/
app.use(csrf())

app.use(function (err, req, res, next) { // valido csrf Token

	if (err.code !== 'EBADCSRFTOKEN') return next(err)

	// handle CSRF token errors here
	res.status(403)
	res.json({status:false, message:"Error al Validar CSRF TOKEN"})
})

/********** Routes **********/
let router = require('./config/routes');  // llamo el archivo de rutas
app.use('/', router); 	// declaro el uso de mis rutas

const PORT = process.env.APP_PORT || 3000; // puerto declarado en archivo .env

app.listen(PORT, ()=> {
	
	console.log(`http://localhost:${PORT}/`)// retorno url con puerto

	// conexion a base de datos
	let dbConnection = connection.sync().then(()=>{ 
		console.log("conexion Exitosa nueva");
	})

	dbConnection.catch(function(e) {
		console.log("revisar conexion con la base de datos o encenderla");
		// console.log(e); // Nunca será llamado
	 });

}); 
