var Sequelize = require("sequelize"),
    db = require("./../db.js");

module.exports = db.define("user", {
    firstname : Sequelize.STRING,
    lastname : Sequelize.STRING,
    username : Sequelize.STRING,
    password : Sequelize.STRING
});

 