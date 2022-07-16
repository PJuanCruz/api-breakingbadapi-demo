require('dotenv').config();

const DEVELOPMENT = require('./development');
// const PRODUCTION = require('./production');
const { NODE_ENV } = process.env;

let Env;

switch (NODE_ENV) {
    case 'development':
        Env = DEVELOPMENT;
        break;
    // case 'production':
    //     Env = PRODUCTION
    //     break;
    default:
        Env = DEVELOPMENT;
        break;
}

module.exports = Env;
