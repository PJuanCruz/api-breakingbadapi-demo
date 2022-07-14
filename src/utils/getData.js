const axios = require('axios');
const breakingbBadApiRepository = require('../repositories/breakingbadapi.repositories');
const formatDate = require('./formatDate');

getCharacters = async () => {
    const characters = await breakingbBadApiRepository.getAllCharacters();
    return characters.map(e => {
        return {
            char_id: e.char_id,
            name: e.name,
            nickname: e.nickname,
            birthday: formatDate(e.birthday),
            status: e.status,
            occupation: e.occupation,
            img: e.img,
            portrayed: e.portrayed,
            // category: e.category.split(', ')
        }
    });
}

getCharacters().then(res => console.log(res));

getQuotes = async () => {
    const quotes = await breakingbBadApiRepository.getAllQuotes();
    const characters = await breakingbBadApiRepository.getAllCharacters();

    return quotes.map(e => {
        return {
            quote_id: e.quote_id,
            quote: e.quote,
            char_id: characters.find(char => char.name === e.author || char.nickname === e.author)?.char_id
        }
    });
}

// getQuotes().then(res => console.log(res));

getEpisodes = async () => {
    const episodes = await breakingbBadApiRepository.getAllEpisodes();
    return episodes.map(e => {
        return {
            episode_id: e.episode_id,
            title: e.title,
            season: e.season,
            episode: e.episode,
            // characters: e.characters
        }
    });
}

// getEpisodes().then(res => console.log(res));

getCharactersEpisodes = async () => {
    // const episodes = await breakingbBadApiRepository.getAllEpisodes();
    const episodes = (await breakingbBadApiRepository.getAllEpisodes()).slice(57);
    const characters = await breakingbBadApiRepository.getAllCharacters();
    let characters_episodes = [];
    for (let episode of episodes) {
        episode.characters.forEach(character => {
            characters_episodes.push(
                {
                    episode_id: episode.episode_id,
                    char_id: character === 'Hank Schrader' ? 5 :
                        character === 'Elliott Schwarts' ? 27 :
                        character === 'Gretchen Swartz' ? 26 :
                        character === 'Ted Beneke' ? 21 :
                        character === 'The cousins' ? 13 :
                        character === 'White White Jr.' ? 4 :
                        character === 'Steve Gomez' ? 20 :
                        character === 'Eliott Schwartz' ? 27 :
                        characters.find(char => char.name === character || char.nickname === character)?.char_id
                }
            )
        })
    }
    return characters_episodes;
}

// getCharactersEpisodes().then(res => console.log(res));

getBBCharacters = async () => {
    const BBCharacters = (await axios.get('https://breakingbadapi.com/api/characters?category=Breaking+Bad')).data;
    return BBCharacters.map(e => {
        return {
            category_id: 1,
            char_id: e.char_id

        }
    })
}

// getBBCharacters().then(res => console.log(res));

getBCSCharacters = async () => {
    const BCSCharacters = (await axios.get('https://breakingbadapi.com/api/characters?category=Better+Call+Saul')).data;
    return BCSCharacters.map(e => {
        return {
            category_id: 2,
            char_id: e.char_id

        }
    })
}

// getBCSCharacters().then(res => console.log(res));
