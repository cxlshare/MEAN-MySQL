let mysqlConfig = require("../Utilities/mysqlConfig");

let initialize = () => {
    mysqlConfig.getDB().query("create table IF NOT EXISTS article (id INT auto_increment primary key, title VARCHAR(255), category VARCHAR(100), created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP)");

}

module.exports = {
    initialize: initialize
}