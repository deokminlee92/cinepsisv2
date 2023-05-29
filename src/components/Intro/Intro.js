// IntroMovies 컴포넌트
import { useEffect, useState } from "react";
import { useGetRandomMovieQuery } from "../../store/modules/fetch";
import { Link } from "react-router-dom";
import * as S from "./Intro.style";
import { Wrapper } from "../../style/variables";
const API_IMG = "https://image.tmdb.org/t/p/w500";

const IntroMovies = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const {
    data: movies,
    isLoading,
    isError,
  } = useGetRandomMovieQuery({
    api_key: API_KEY,
    language: "en-EN",
  });
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // 쉽게 보기 위하여 타이머를 설정
    const timeoutId = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (isLoading || showLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const randomIndex = Math.floor(Math.random() * movies.results.length);
  const randomMovie = movies.results[randomIndex];

  return (
    <>
      <S.HomeIntro>
        <Wrapper>
          <S.Container>
            <S.Title>Today Movie</S.Title>
            {randomMovie && (
              <div>
                <S.Name>{randomMovie.title}</S.Name>
                <S.Description>{randomMovie.tagline}</S.Description>
                <img
                  src={`${API_IMG}${randomMovie.poster_path}`}
                  alt={randomMovie.title}
                />
              </div>
            )}
            <S.MoreButton>
              <Link to={`/detail/$randomMovie.id}`}>More</Link>
            </S.MoreButton>
          </S.Container>
        </Wrapper>
      </S.HomeIntro>
    </>
  );
};

export default IntroMovies;
