const { Episode } = require('../models');

const getAllEpisodes = async (req, res) => {
    const episodes = await Episode.findAll(
        {
            include: {
                association: 'characters',
                attributes: ['name', 'char_id'],
                through: {
                    attributes: []
                }
            }
        }
    );
    res.json(episodes);
}

module.exports = {
    getAllEpisodes
};
