const mysql = require("mysql2");
const connection = mysql.createConnection({
    user: "root",
    password: "root",
    database: "journal",
});

module.exports = connection;