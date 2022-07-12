const { Quote } = require('../models');

const getAllQuotes = async (req, res) => {
    const quotes = await Quote.findAll(
        {
            include: {
                association: 'author',
                attributes: ['name']
            }
        }
    );
    res.json(quotes);
}

module.exports = {
    getAllQuotes
};
