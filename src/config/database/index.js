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
