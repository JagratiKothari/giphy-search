import axios from 'axios';

const GIF_API_KEY = process.env.REACT_APP_GIPHY_KEY;

export const getGifs = (searchInput, offset = 100) => {
    return  axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&offset=${offset}&api_key=${GIF_API_KEY}`)
}