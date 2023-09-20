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
  timeout: 5000,
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
    })
    const genres = response.data.genres;
    return genres;
  } catch (error) {
    
    le.error("Error fetching movie genres:", error);
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

    return response.data;
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    throw error;
  }
};

const getMoviesByProvider = async (providerId) => {
  try {
    const response = await TMDB_HTTP_REQUEST.get(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=GB&with_watch_providers=${providerId}`
    );
    const movies = response.data.results;
    return movies;
  } catch (error) {
    console.error("Error fetching movies by provider:", error);
    throw error;
  }
};

const getProviderLogo = async (providerId) => {
  try {
    const response = await TMDB_HTTP_REQUEST.get(`/watch/providers/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        watch_region: "GB",
      },
    });

    const providerData = response.data.results[providerId];

    if (providerData) {
      const logoUrl = providerData.logo_path
        ? `https://image.tmdb.org/t/p/original${providerData.logo_path}`
        : null;
      return logoUrl;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching provider logo:", error);
    throw error;
  }
};


export { getNewMovies, getPoster, getMovieGenres, getMoviesByGenre, getMoviesByProvider, getProviderLogo };
