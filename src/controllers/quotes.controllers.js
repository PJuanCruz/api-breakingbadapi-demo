const { Op } = require('sequelize');
const { Quote } = require('../models');
const isNumber = require('../utils/isNumber');

const getAllQuotes = async (req, res, next) => {
    try {

        // QUERY PARAMETERS
        let { limit, pag, author, column, direction } = req.query;

        // PAGINATION
        limit = limit ? parseInt(limit) : 20;
        pag = pag ? parseInt(pag) : 1;

        // FILTERS
        let where_author = {};

        if (author) {
            if (isNumber(author)) {
                where_author.char_id = {
                    [Op.eq]: author
                }
            } else {
                where_author.name = {
                    [Op.iLike]: `%${author}%`
                }
            }
        }

        // ORDER
        column = column || 'quote_id';
        direction = direction || 'ASC';
        let order = [[column, direction]];

        // QUERY
        const { count, rows } = await Quote.findAndCountAll(
            {
                attributes: ['quote_id', 'quote'],
                include: {
                    association: 'author',
                    attributes: ['name', 'char_id'],
                    where: where_author,
                },
                order: order,
                distinct: true,
                limit: limit,
                offset: (pag - 1) * limit
            }
        );

        // RESPONSE
        res.json(
            {
                count: count,
                pages: Math.ceil(count / limit),
                pag: pag,
                rows: rows
            }
        );

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllQuotes
};
