import React from "react";
import Header from "../../components/header/header";
import IntroMovies from "../../components/Intro/Intro";
import Loader from "../../components/Loader/Loader";
import { Layout } from "../../style/variables";
import { useGetRandomMovieQuery } from "../../store/modules/fetch";
import * as S from "./HomeIntro.style";

const API_IMG = "https://image.tmdb.org/t/p/original";

const HomeIntro = ({ ran }) => {
  const { data, isError, isLoading } = useGetRandomMovieQuery(ran);

  console.log(data, isError, isLoading, "results");

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  const backdropUrl = `${API_IMG}${data.backdrop_path}`;
  return (
    <>
      <Layout>
        <Header />
        <S.Main>
          <IntroMovies />
        </S.Main>
        <S.Background style={{ backgroundImage: `url(${backdropUrl})` }} />
      </Layout>
    </>
  );
};

export default HomeIntro;
