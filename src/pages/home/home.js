import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Movies from "../../components/Intro/Intro";

// Home page 렌더링시에 아무 영화나 하나 렌더링시키기
// https://api.themoviedb.org/3/movie/latest

const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=bca6a436b3a5e8df17b445bb2150fdaf&language=en-US&page=1";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=bca6a436b3a5e8df17b445bb2150fdaf&query";

function Home() {
  return (
    <>
      <Header />
      <Movies />
    </>
  );
}

export default Home;
