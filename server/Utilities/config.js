let environment = "dev";

let serverURLs = {
    "dev": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "3000",
        "MYSQL_HOST": process.env.MySql_privateIP,
        "MYSQL_USER": process.env.MySql_dbUserName,
        "MYSQL_PASSWORD": process.env.MySql_dbPassword,
        'MYSQL_DATABASE': process.env.MySql_dbName,
    },
    "sample": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "3000",
        "MYSQL_HOST": 'localhost',
        "MYSQL_USER": 'root',
        "MYSQL_PASSWORD": 'mysql123',
        'MYSQL_DATABASE': 'mean_crud',
    }
}

let config = {
    "DB_URL_MYSQL": {
        "host": `${serverURLs[environment].MYSQL_HOST}`,
        "user": `${serverURLs[environment].MYSQL_USER}`,
        "password": `${serverURLs[environment].MYSQL_PASSWORD}`,
        "database": `${serverURLs[environment].MYSQL_DATABASE}`
    },
    "NODE_SERVER_PORT": {
        "port": `${serverURLs[environment].NODE_SERVER_PORT}`
    },
    "NODE_SERVER_URL": {
        "url": `${serverURLs[environment].NODE_SERVER}`
    }    
};

module.exports = {
    config: config
};
