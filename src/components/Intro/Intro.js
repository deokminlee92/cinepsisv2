import React, { useEffect, useState } from "react";
import axios from "axios";

// const API_IMG = "https://image.tmdb.org/t/p/w500";
// https://api.themoviedb.org/3/movie/157336?api_key=bca6a436b3a5e8df17b445bb2150fdaf
// https://api.themoviedb.org/3/movie/157336/videos?api_key=bca6a436b3a5e8df17b445bb2150fdaf
// Promise 방식
// https://goddino.tistory.com/158
// https://korinkorin.tistory.com/72
const Movies = ({ title, poster_path }) => {
  const [movies, setMovies] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=bca6a436b3a5e8df17b445bb2150fdaf&language=en-US&page=1"
      )
      .then((res) => setMovies(res.data));
  }, []);
  console.log(movies, "movies");

  return (
    <div className="intro-container">
      <h3>{movies}</h3>
    </div>
  );
};

export default Movies;
