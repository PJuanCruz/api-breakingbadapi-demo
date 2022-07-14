const { Op } = require('sequelize');
const { Character, Category } = require('../models');

const getAllCharacters = async (req, res) => {

    // QUERY PARAMETERS
    let { limit, pag, status, category, season, column, direction } = req.query;

    // PAGINATION
    limit = limit ? parseInt(limit) : 20;
    pag = pag ? parseInt(pag) : 1;

    // FILTERS
    let where = {};

    if (status) {
        where.status = {
            [Op.eq]: status
        }
    }

    let where_categories = {};

    if (category) {
        where_categories.serie = {
            [Op.eq]: category
        }
    }

    let where_appearance = {};

    if (season) {
        where_appearance.season = {
            [Op.eq]: season
        }
    }

    // ORDER
    column = column || 'char_id';
    direction = direction || 'ASC';
    let order = [[column, direction]];

    // QUERY
    const { count, rows } = await Character.findAndCountAll(
        {
            include: [
                {
                    association: 'quotes',
                    attributes: ['quote', 'quote_id'],
                },
                {
                    association: 'categories',
                    attributes: ['serie'],
                    through: {
                        attributes: []
                    },
                    where: where_categories,
                },
                {
                    association: 'appearance',
                    attributes: [],
                    through: {
                        attributes: []
                    },
                    where: where_appearance,
                    required: !!Object.keys(where_appearance).length,
                }
            ],
            where: where,
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

}

module.exports = {
    getAllCharacters
};
