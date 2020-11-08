const mysql 	= require ('mysql');
const {db} 		= require ('./config');

let dbConn = mysql.createConnection({
	host     : db.DB_HOST    ,
	user     : db.DB_USER    ,
	password : db.DB_PASSWORD,
	database : db.DB_NAME    
});


dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;