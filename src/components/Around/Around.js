import React from "react";
import { useGetLastestMoviesQuery } from "../../store/modules/fetch";
import Loader from "../Loader/Loader";
import * as S from "./Around.styled";
import { Wrapper } from "../../style/variables";

const API_IMG = "https://image.tmdb.org/t/p/original/";

const Around = ({ arg }) => {
  const { data, isError, isLoading } = useGetLastestMoviesQuery(arg);
  console.log(data, isError, isLoading, "data, isError, isLoading");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <S.Grid>
        {data.map((movie) => {
          const backdropUrl = `${API_IMG}${movie.backdrop_path}`;
          return (
            <S.ImageCard key={movie.id}>
              <img src={backdropUrl} alt="Backdrop" />
            </S.ImageCard>
          );
        })}
      </S.Grid>
    </Wrapper>
  );
};

export default Around;
