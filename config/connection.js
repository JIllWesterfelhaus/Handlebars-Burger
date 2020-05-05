//require mysql
var mysql = require("mysql");

//connection for mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "mySQL1234!",
  database: "burgers_db"
});
//make connection, throw error if needed
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//export connection
module.exports = connection;