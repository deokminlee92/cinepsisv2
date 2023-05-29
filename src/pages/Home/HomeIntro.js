import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Intro from "../../components/Intro/Intro";
import { Layout } from "../../style/variables";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./HomeIntro.style";

//Reducer
import { REQUEST, SUCCESS, FAILURE } from "../../store/modules/fetch";
import { introSlice } from "../../store/modules/fetch";

const HomeIntro = () => {
  // const { result } = useSelector((state) => state.intro);
  // console.log(result, "result");
  return (
    <>
      <Layout>
        <Header />
        <Intro />
        {/* <S.Background backdrop_path={result.backdrop_path} /> */}
      </Layout>
    </>
  );
};

export default HomeIntro;

// ------------------- OG -------------------
// import React, { useEffect, useState } from "react";
// import Header from "../../components/header/header";
// import Movies from "../../components/Intro/Intro";

// // Home page 렌더링시에 아무 영화나 하나 렌더링시키기

// const API_SEARCH =
//   "https://api.themoviedb.org/3/search/movie?api_key=bca6a436b3a5e8df17b445bb2150fdaf&query";

// function Home({}) {
//   return (
//     <>
//       <Header />
//       <Movies />
//     </>
//   );
// }

// export default Home;
