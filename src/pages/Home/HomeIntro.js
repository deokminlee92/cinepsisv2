import React from "react";
import Header from "../../components/Header/header";
import IntroMovies from "../../components/Intro/Intro";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";
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
  console.log(backdropUrl, "backdropUrl");
  return (
    <>
      <Layout>
        <Header color="white" />
        <S.Main>
          <IntroMovies />
        </S.Main>
        <Footer />
        <S.Background style={{ backgroundImage: `url(${backdropUrl})` }} />
      </Layout>
    </>
  );
};

export default HomeIntro;
