import axios from 'axios';

const API_KEY = '5e8d1285d45d2f3ac11834ca8f1680cd';

export const getTrendMovies = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`);
        return response.data.results;
    } catch (err) {
        console.log(err);
        return err;
    };
};

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1`);
        return response.data.results;
    } catch (err) {
        console.log(err);
        return err;
    };
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    };
};

export const getMovieCredits = async (movieId) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
        return response.data.cast;
    } catch (err) {
        console.log(err);
        return err;
    };
};

export const getMovieReviews = async (movieId) => { 
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
        return response.data.results;
    } catch (err) {
        console.log(err);
        return err;
    };
}