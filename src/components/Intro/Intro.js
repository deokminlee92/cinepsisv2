// IntroMovies 컴포넌트
import { useGetRandomMovieQuery } from "../../store/modules/fetch";
import { Link } from "react-router-dom";
import * as S from "./Intro.style";
import { Wrapper } from "../../style/variables";

const IntroMovies = ({ ran }) => {
  const { data } = useGetRandomMovieQuery(ran);

  return (
    <>
      <S.HomeIntro>
        <Wrapper>
          <S.Container>
            {/* <S.Title>Today Movie</S.Title> */}
            {/* <S.Description>{data.overview}</S.Description> */}
            <S.Name>{data.title}</S.Name>
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
