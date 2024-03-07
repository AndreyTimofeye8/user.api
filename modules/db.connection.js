const mysql = require("mysql");
const { DATABASE_URL } = require("../config/config");

const connection = mysql.createConnection(DATABASE_URL);

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
});

connection.end();

module.exports = connection;
