const Sequelize = require("sequelize");

// Option 1: Passing a connection URI
const sequelize = new Sequelize("postgresql://postgres:Hlg@2021@172.16.6.35:5432/telemail_dev"); // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// })

module.exports = sequelize;

