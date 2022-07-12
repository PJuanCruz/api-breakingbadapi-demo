const express = require('express');
const morgan = require('morgan');
const { sequelize } = require('../models');
const config = require('../config/environments');

class ExpressServer {
    constructor() {
        this.app = express();
        this.port = config.PORT;
        this.basepath = config.API.prefix;
        this._middlewares();
        this._routes();
        this._notFound();
        this._errorHandler();
    }

    _middlewares() {
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    _routes() {
        this.app.head(`${this.basepath}/status`, (req, res) => {
            res.status(200).end();
        });
        this.app.use(`${this.basepath}/characters`, require('../routes/characters.routes'));
        this.app.use(`${this.basepath}/quotes`, require('../routes/quotes.routes'));
    }

    _notFound() {
        this.app.use((req, res, next) => {
            const error = new Error('Not Found');
            error.code = 404;
            next(error);
        });
    }

    _errorHandler() {
        this.app.use((err, req, res, next) => {
            const code = err.code || 500;
            const body = {
                error: {
                    code: code,
                    message: err.message
                }
            }
            res.status(code).json(body)
        });
    }

    async listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        });
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            await sequelize.sync({ force: false });
            console.log("All models were synchronized successfully.");
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

}

module.exports = new ExpressServer();
