import React from "react";
import Header from "../../components/Header/header";
import Around from "../../components/Around/Around";
import Loader from "../../components/Loader/Loader";
import { useGetLastestMoviesQuery } from "../../store/modules/fetch";
import * as S from "./Films.style";
const API_IMG = "https://image.tmdb.org/t/p/original";

function Films({ ran }) {
  const { data, isError, isLoading } = useGetLastestMoviesQuery(ran);
  console.log(data, isError, isLoading, "data,isError,isLoading");
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
    <div>
      <Header />
      <Around />
      <S.Background style={{ backgroundImage: `url(${backdropUrl})` }} />
    </div>
  );
}

export default Films;
