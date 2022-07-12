// {
//     "development": {
//       "username": "root",
//       "password": null,
//       "database": "database_development",
//       "host": "127.0.0.1",
//       "dialect": "mysql"
//     },
//     "test": {
//       "username": "root",
//       "password": null,
//       "database": "database_test",
//       "host": "127.0.0.1",
//       "dialect": "mysql"
//     },
//     "production": {
//       "username": "root",
//       "password": null,
//       "database": "database_production",
//       "host": "127.0.0.1",
//       "dialect": "mysql"
//     }
//   }

const { DB } = require('../environments');

module.exports = {
    username: DB.username,
    password: DB.password,
    database: DB.database,
    host: DB.host,
    dialect: DB.dialect,
    define: {
        timestamps: false,
        underscored: true
    }
};
