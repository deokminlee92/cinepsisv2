import React from "react";
import { useGetLastestMoviesQuery } from "../../store/modules/fetch";
import Loader from "../Loader/Loader";
import * as S from "./Around.styled";
import { Wrapper } from "../../style/variables";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
const API_IMG = "https://image.tmdb.org/t/p/original/";

const Around = ({ arg }) => {
  const { data, isError, isLoading } = useGetLastestMoviesQuery(arg);
  console.log(data, isError, isLoading, "data, isError, isLoading");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <div></div>
      <S.Grid>
        {data.map((movie) => {
          const backdropUrl = `${API_IMG}${movie.backdrop_path}`;
          return (
            <S.ImageCard key={movie.id}>
              <img src={backdropUrl} alt="Backdrop" />
              <S.Content>
                <Link data-testid="item-link" to={`/detail/${movie.id}`}>
                  <S.Title>{movie.title}</S.Title>
                  <S.Container>
                    <StarRatings
                      rating={movie.vote_average / 2}
                      starRatedColor="#ffda33"
                      changeRating={movie.changeRating}
                      numberOfStars={5}
                      name="rating"
                      starDimension="30px"
                      starSpacing="2px"
                    />
                  </S.Container>
                </Link>
              </S.Content>
            </S.ImageCard>
          );
        })}
      </S.Grid>
    </Wrapper>
  );
};

export default Around;
