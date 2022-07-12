const { Character } = require('../models');

const getAllCharacters = async (req, res) => {
    const characters = await Character.findAll(
        {
            include: [
                {
                    association: 'quotes',
                    attributes: ['quote']
                },
                {
                    association: 'appearance',
                    attributes: ['title'],
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
