const BASE_URL = 'https://api.themoviedb.org/3';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchData = async(path,{query = ""} = {}) => {
    await delay(500);
      try {
        const res = await fetch(
          `${BASE_URL}${path}?api_key=${process.env.THE_MOVIE_DB_API_KEY}&${query}`
        );
        return res.json();
      } catch (error) {
        throw new Error(error);
      }
}

export const fetchGenres = async() => {
    try {
        const res = await fetchData("/genre/movie/list");
        return res.genres;
    }
    catch (error) {
        throw new Error(error);
    }

}
export const fetchPopularMovies = async() => {
    try {
        const res = await fetchData("/movie/popular");
        return res.results;
    }
    catch (error) {
        throw new Error(error);
    }

} 
export const fetchTopRatedMovies = async() => {
    try {
        const res = await fetchData("/movie/top_rated");
        return res.results;
    }
    catch (error) {
        throw new Error(error);
    }

}
export const fetchSingleMovie = async(id) => {
    try {
        const res = await fetchData(`/movie/${id}`);
        return res;
    }
    catch (error) {
        throw new Error(error);
    }

}
export const fetchMovieByGenre = async(genreId) => {
     try {
       const res = await fetchData(`/discover/movie`, {
         query: `with_genres=${genreId}`,
       });
       return res.results;
     } catch (error) {
       throw new Error('Error happened while fetching top rated movies', error);
     }
}