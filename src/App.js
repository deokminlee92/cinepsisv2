import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeIntro from "./pages/Home/HomeIntro";
import Search from "./pages/search/search";
import Films from "./pages/films/films";
import Favoris from "./pages/favoris/favoris";
import About from "./pages/about/about";

function App() {
  return (
    <div className="App">
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
