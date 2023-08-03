import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopRated from "./components/TopRated";
import Anime from "./components/Anime";
import MovieDetails from "./components/MovieDetails";
import UpComing from "./components/UpComing";
import NowPlaying from "./components/NowPlaying";
import PopularSeries from "./components/PopularSeries";
import SeriDetail from "./components/SerieDetail";
import TopRatedSeries from "./components/TopRatedSeries";
import SeriesToday from "./components/SeriesToday";
import Popular from "./components/Popular";
import People from "./components/People";
import PopularPeople from "./components/PopularPeople";

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="movie_app" element={<Popular />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="/serie/:id" element={<SeriDetail />} />
        <Route path="top_rated" element={<TopRated />} />
        <Route path="anime" element={<Anime />} />
        <Route path="upcoming" element={<UpComing />} />
        <Route path="now_playing" element={<NowPlaying />} />
        <Route path="popularSeries" element={<PopularSeries />} />
        <Route path="topRated" element={<TopRatedSeries />} />
        <Route path="airtoday" element={<SeriesToday />} />
        <Route path="/people/popular" element={<PopularPeople />} />
        <Route path="/people/:id" element={<People />} />

      </Routes>


    </>
  );
}

export default App;
