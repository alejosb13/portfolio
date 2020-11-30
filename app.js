let express     = require('express');
let session     = require('express-session');
let bodyParser  = require('body-parser');
let path        = require('path');
let app 		= express();

require('dotenv').config() // leer datos de archivo .env
require('./config/database') // Conexion con base de datos 


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

/********** Session **********/
app.use(session({
    secret: 'secret',
	resave: true,
	saveUninitialized: true,
})); // configuracion para el uso de sessiones

/********** Middleware **********/
app.use(bodyParser.urlencoded({extended : true})); // permito el envio de parametros 
app.use(bodyParser.json()); // declaro en el proyecto el uso de interfaces json



/********** Routes **********/
let router = require('./config/routes');  // llamo el archivo de rutas
// const { domainToUnicode } = require('url');
app.use('/', router); 	// declaro el uso de mis rutas

const PORT = process.env.APP_PORT || 3000; // puerto declarado en archivo .env
app.listen(PORT, () => console.log(`http://localhost:${PORT}/`)); // retorno url con puerto
// app.listen(3001);