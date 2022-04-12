require("dotenv").config();
const sql = require("mysql2");

const connection = sql.createConnection({
    host: "127.0.0.1",
    user: process.env.User_Name,
    password: process.env.User_Password,
    database: process.env.DB_Name
});

connection.connect(err => {
    if (err) {
        throw err;
    }
})

module.exports = connection;
