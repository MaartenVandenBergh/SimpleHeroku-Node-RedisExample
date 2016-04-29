var Sequelize = require("sequelize");

module.exports = new Sequelize("Simple-node-example", "username1", "password1", {
    host: "localhost",
    dialect: "mssql"
});