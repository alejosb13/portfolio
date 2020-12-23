var dbConn = require('../../config/database')

let User = {};

User.getAll = (result) => {
    dbConn.query("SELECT * FROM accounts", (err, res) => {
        if (err) throw err;
        result(null, res);
    });
}

/**
 * 
 * @param {object} data is values for where
 * @param {object} result callback
 */
User.getUser = (data, result) => {
    dbConn.query("SELECT * FROM users WHERE username = ? AND password = ?",[data.username, data.password],(err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }else {
            result(null, res);
        }
    });


    // connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], (error, results) => {
    //     if (results.length > 0) {
            // request.session.loggedin = true;
            // request.session.username = username;
            // response.redirect('/home');
    //     } else {
    //         response.send('Incorrect Username and/or Password!');
    //     }			
    //     response.end();
    // });
};

// Employee.findById = function (id, result) {
//     dbConn.query("Select * from employees where id = ? ", id, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };

module.exports = User;