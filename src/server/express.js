const express = require('express');
const config = require('../config');
const morgan = require('morgan');

class ExpressServer {
    constructor() {
        this.app = express();
        this.port = config.PORT;
        this.basepath = config.API.prefix;
        this._middlewares();
        this._routes();
    }
    
    _middlewares() {
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    _routes() {
        this.app.head('/status', (req, res) => {
            res.status(200).end();
        });
        this.app.use(`${this.basepath}/characters`, require('../routes/characters.routes'));
    }

    async listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        });
    }

}

module.exports = new ExpressServer();
