import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL_BASE = process.env.REACT_APP_API_URL_BASE;
const api_key = process.env.REACT_APP_API_KEY;
const BASE_LANG = process.env.REACT_APP_BASE_LANG;
// const BASE_REGION = process.env.REACT_APP_BASE_REGION;
// const API_IMG = "https://image.tmdb.org/t/p/w500";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),

  endpoints(builder) {
    return {
      GetLastestMovies: builder.query({
        query: (arg) => {
          return {
            url: `${API_URL_BASE}now_playing`,
            params: { api_key, BASE_LANG },
          };
        },
        transformResponse: (response) => {
          const movies = response.results;
          console.log(movies, "movies");
          return Array.isArray(movies) ? movies : [];
        },
      }),
      GetRandomMovie: builder.query({
        query: (ran) => {
          return {
            url: `${API_URL_BASE}now_playing`,
            params: { api_key, BASE_LANG, page: 1 },
          };
        },
        transformResponse: (response) => {
          const movies = response.results;
          const randomIndex = Math.floor(Math.random() * movies.length);
          const randomMovie = movies[randomIndex];
          return randomMovie;
        },
      }),
    };
  },
});

export const { useGetLastestMoviesQuery, useGetRandomMovieQuery } = movieApi;
