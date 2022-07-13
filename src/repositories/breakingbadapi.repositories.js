const axios = require('axios');

class BreakingbBadApiRepository {
    constructor() {
        // Base Url
        this.baseURL = 'https://breakingbadapi.com/api';
    }

    async getAllCharacters() {
        try {
            const { data } = await axios.get(`${this.baseURL}/characters`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllEpisodes() {
        try {
            const { data } = await axios.get(`${this.baseURL}/episodes?series=Breaking+Bad`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllQuotes() {
        try {
            const { data } = await axios.get(`${this.baseURL}/quotes`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = new BreakingbBadApiRepository();
