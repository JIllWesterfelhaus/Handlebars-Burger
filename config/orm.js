//from ORM Example, Exercise 12
var connection = require("./connection.js");

//per ORM Example, Exercise 12:
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
//select all from table
var orm = {
  selectAll: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  //insert one into table
  insertOne: function(whatToSelect, table, orderCol) {
      //update query string to reflect insertOne
    var queryString = "INSERT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  //update one in table
  updateOne: function(tableOneCol, tableOne, ) {
    var queryString =
    //update query string to reflect updateOne
      "UPDATE ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;

