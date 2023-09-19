import {
  TMDB_BASE_URL,
  TMDB_API_KEY,
  TMDB_IMAGE_BASE_URL,
  ENDPOINTS,
} from "./Private";
import axios from "axios";

const TMDB_HTTP_REQUEST = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

const getNewMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.TRENDING);

const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;

const getMovieGenres = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });

    
    const genres = response.data.genres;
    console.log(genres);
    return genres;
  } catch (error) {
    console.error("Error fetching movie genres:", error);
    throw error;
  }
};

const getMoviesByGenre = async (genre) => {
  try {
    const response = await axios.get(
      `${TMDB_BASE_URL}${ENDPOINTS.DISCOVER_MOVIES}`,
      {
        params: {
          api_key: TMDB_API_KEY,
          with_genres: genre,
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    throw error;
  }
};

export { getNewMovies, getPoster, getMovieGenres, getMoviesByGenre };
