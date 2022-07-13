const { Quote } = require('../models');

const getAllQuotes = async (req, res) => {
    const quotes = await Quote.findAll(
        {
            attributes: ['quote_id', 'quote'],
            include: {
                association: 'author',
                attributes: ['name', 'char_id']
            }
        }
    );
    res.json(quotes);
}

module.exports = {
    getAllQuotes
};
