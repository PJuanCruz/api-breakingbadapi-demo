const { Character } = require('../models');

const getAllCharacters = async (req, res) => {
    const characters = await Character.findAll(
        {
            include: [
                {
                    association: 'quotes',
                    attributes: ['quote', 'quote_id']
                },
                {
                    association: 'appearance',
                    attributes: ['title', 'episode_id'],
                    through: {
                        attributes: []
                    }
                }
            ]
        }
    );
    res.json(characters);
}

module.exports = {
    getAllCharacters
};
