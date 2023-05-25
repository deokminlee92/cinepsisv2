import React, { useEffect, useState } from "react";
import axios from "axios";
import { Wrapper } from "../../style/variables";
import * as S from "./Intro.style";

const API_URL_BASE = process.env.REACT_APP_API_URL_BASE;
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_LANG = process.env.REACT_APP_BASE_LANG;
const BASE_REGION = process.env.REACT_APP_BASE_REGION;
const API_IMG = "https://image.tmdb.org/t/p/w500";

function Movies() {
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
        console.log("fetchedMovies", fetchedMovies);

        // Randomly select one movie from the movies array
        const randomMovie =
          fetchedMovies[Math.floor(Math.random() * fetchedMovies.length)];
        setBackgroundImageUrl(`${API_IMG}${randomMovie.poster_path}`);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <>
      <S.HomeIntro
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          // backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <Wrapper>
          <S.Container>
            {movies.length > 0 ? (
              <div>
                <S.Title>Today Movie</S.Title>
                <S.Description>{movies[0].tagline}</S.Description>
                <S.Name>{movies[0].original_title}</S.Name>
                {/* <S.MoreButton>
                  <Link to={`/detail/${movies[0].id}`}>More</Link>
                </S.MoreButton> */}
              </div>
            ) : (
              <p>Loading movies...</p>
            )}
          </S.Container>
        </Wrapper>
      </S.HomeIntro>
    </>
  );
}

export default Movies;
