import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL_BASE = process.env.REACT_APP_API_URL_BASE;
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_LANG = process.env.REACT_APP_BASE_LANG;
const BASE_REGION = process.env.REACT_APP_BASE_REGION;
const API_IMG = "https://image.tmdb.org/t/p/w500";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_URL_BASE}now_playing?api_key=${API_KEY}&language=${BASE_LANG}-${BASE_REGION}`
      )
      .then((res) => {
        const fetchedMovies = res.data.results;
        setMovies(fetchedMovies);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  // Randomly select one movie from the movies array
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div>
      {movies.length > 0 ? (
        <div>
          <h2>Random Movie:</h2>
          <h3>Title: {randomMovie.title}</h3>
          <p>ID: {randomMovie.id}</p>
          <img
            src={`${API_IMG}${randomMovie.poster_path}`}
            alt={randomMovie.title}
          />
        </div>
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
}

export default Movies;
