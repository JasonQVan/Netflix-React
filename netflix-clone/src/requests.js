const API_KEY = '3e795641355d5d65a24c8f864af17dea';

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US&include_adult=false`,
    fetchNetflixOriginals: `discover/movie?api_key=${API_KEY}&language=en-US&certification_country=U&include_adult=false&year=2021&watch_region=US`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
    fetchMusicMovies:`discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10402`,
    fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=true&page=1&with_genres=10749`,

}
export default requests;