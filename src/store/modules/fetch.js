import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL_BASE = process.env.REACT_APP_API_URL_BASE;
// const API_KEY = process.env.REACT_APP_API_KEY;
// const BASE_LANG = process.env.REACT_APP_BASE_LANG;
// const BASE_REGION = process.env.REACT_APP_BASE_REGION;
// const API_IMG = "https://image.tmdb.org/t/p/w500";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),

  endpoints: (builder) => ({
    GetLastestMovies: builder.query({
      query: (arg) => {
        const { api_key, BASE_LANG } = arg;
        return {
          url: `${API_URL_BASE}now_playing`,
          params: { api_key, BASE_LANG },
        };
      },
    }),

    GetRandomMovie: builder.query({
      query: (arg) => {
        const { api_key, language } = arg;
        return {
          url: `${API_URL_BASE}now_playing`,
          params: {
            api_key,
            language,
            page: Math.floor(Math.random() * 100) + 1,
          },
        };
      },
    }),
  }),
});

export const { useGetLastestMoviesQuery, useGetRandomMovieQuery } = movieApi;
