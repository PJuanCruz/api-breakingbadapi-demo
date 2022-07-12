require('dotenv').config();

const DEVELOPMENT = require('./development');
const { NODE_ENV } = process.env;

let Env;

switch (NODE_ENV) {
    case "development": {
        Env = DEVELOPMENT;
        break;
    }
    default: {
        Env = DEVELOPMENT;
        break;
    }
}

module.exports = Env;
