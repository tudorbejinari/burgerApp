var dotenv = require("dotenv");
dotenv.config({path: ".env"});


var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user:"root",
    password: process.env.DB_PASS,
    database:"burgers_db"
});
}
 connection.connect();

 module.exports = connection;