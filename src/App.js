import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeIntro from "./pages/Home/HomeIntro";
import Search from "./pages/search/search";
import Favoris from "./pages/favoris/favoris";
import About from "./pages/about/about";
import GlobalStyle from "./style/global";
import Films from "./pages/films/films";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeIntro />} />
        <Route path="/search" element={<Search />} />
        <Route path="/films" element={<Films />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
