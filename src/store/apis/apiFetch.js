import axios from "axios";
// import {
//   BASE_LANG,
//   API_URL_BASE,
//   API_KEY,
//   API_IMG,
//   BASE_REGION,
// } from "./constants";
import { useEffect, useState } from "react";

const API_URL_BASE = process.env.REACT_APP_API_URL_BASE;
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_LANG = process.env.REACT_APP_BASE_LANG;
const BASE_REGION = process.env.REACT_APP_BASE_REGION;
const API_IMG = "https://image.tmdb.org/t/p/w500";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(
        `${API_URL_BASE}now_playing?api_key=${API_KEY}&language=${BASE_LANG}-${BASE_REGION}`
      )
      .then((res) => {
        const fetchedMovies = res.data.results;
        setMovies(fetchedMovies);
        console.log(res.data, "res.data");
        console.log(fetchedMovies, "fetchedMovies");

        // Randomly select one movie from the movies array
        const randomMovie =
          fetchedMovies[Math.floor(Math.random() * fetchedMovies.length)];
        setBackgroundImageUrl(`${API_IMG}${randomMovie.poster_path}`);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return { movies, backgroundImageUrl };
}
