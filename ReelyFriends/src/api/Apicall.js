import { TMDB_BASE_URL, TMDB_IMAGE_BASE_URL, ENDPOINTS } from "./Private";
import axios from "axios";

const TMDB_HTTP_REQUEST = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: process.env.TMDB_API_KEY,
  },
  timeout: 5000,
});

const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;

const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
      },
    });

    if (response.status === 200) {
      const movieDetails = response.data;
      return movieDetails;
    } else {
      console.error("Error fetching movie details:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
};

const getMovieGenres = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
      },
    });
    const genres = response.data.genres;
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
          api_key: process.env.TMDB_API_KEY,
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
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=GB&with_original_language=en&with_watch_providers=${providerId}`
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
        api_key: process.env.TMDB_API_KEY,
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

const getLink = async (id) => {
  const streamLinks = [];
  const options = {
    method: "GET",
    url: "https://streaming-availability.p.rapidapi.com/get",
    params: {
      output_language: "en",
      tmdb_id: `movie/${id}`,
    },
    headers: {
      "X-RapidAPI-Key": process.env.MOTN_API_KEY,
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };
  try {
    const {
      data: { result },
    } = await axios.request(options);
    const {
      streamingInfo: { gb },
    } = result;
    if (gb) {
      await gb.filter((service) => {
        if (
          service.streamingType === "subscription" ||
          service.streamingType === "addon" ||
          service.streamingType === "free"
        ) {
          streamLinks.push({ [service.service]: service.link });
        }
      });
      return streamLinks;
    }
  } catch (error) {
    console.error(error);
  }
};

const getAllMoviesForUser = async (pageNo) => {
  const usersProviders = [8, 337, 38];
  try {
    const response = await TMDB_HTTP_REQUEST.get(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc&watch_region=GB&with_original_language=en&with_watch_providers=${usersProviders.join(
        "%7C%7C"
      )}`
    );
    const movies = response.data.results;
    return movies;
  } catch (error) {
    console.error("Error fetching movies by provider:", error);
    throw error;
  }
};

export {
  getMovieDetails,
  getPoster,
  getMovieGenres,
  getMoviesByGenre,
  getMoviesByProvider,
  getProviderLogo,
  getLink,
  getAllMoviesForUser,
};
