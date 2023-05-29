import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),

  endpoints: (builder) => ({
    getTopRatedMovies: builder.query({
      query: (arg) => {
        const { api_key, language } = arg;
        return {
          url: `movie/top_rated`,
          params: { api_key, language },
        };
      },
    }),
    getPopularMovies: builder.query({
      query: (arg) => {
        const { api_key, language } = arg;
        return {
          url: `movie/popular`,
          params: { api_key, language },
        };
      },
    }),
  }),
});

// 자동으로 생성되는 훅을 사용하기 위해서 export 합니다.
export const { useGetTopRatedMoviesQuery, useGetPopularMoviesQuery } = movieApi;

// import { createSlice } from "@reduxjs/toolkit";
// const introSlice = createSlice({
//   name: "intro",
//   initialState: {
//     introSuccess: false,
//     introError: "",
//     result: {
//       id: "",
//       backdrop_path: "",
//       title: "",
//       tagline: "",
//     },
//   },
//   reducers: {
//     REQUEST: (state) => state,
//     SUCCESS: (state, action) => {
//       state.introSuccess = true;
//       state.result = { ...action.payload.result };
//     },
//     FAILURE: (state, action) => {
//       state.introError = action.payload.error;
//     },
//   },
// });
// console.log(introSlice, "introSlice");

// export const { REQUEST, SUCCESS, FAILURE } = introSlice.actions;
// export default introSlice.reducer;
