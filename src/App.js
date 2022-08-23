import "./App.css";
import { movies } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ListMovie from "./Components/ListMovie";
import CostumNavbar from "./Components/CostumNavbar";
import AddFilm from "./Components/AddFilm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "./Components/Description";

function App() {
  const [films, setFilms] = useState(movies);
  const [caracter, setCaracter] = useState("");
  const [rate, setRate] = useState(0);
  const addMovie = (movie) => {
    setFilms([...films, movie]);
  };

  return (
    <BrowserRouter>
      <CostumNavbar setCaracter={setCaracter} setRate={setRate} />
      <Routes>
        <Route
          path="/"
          element={<ListMovie films={films} caracter={caracter} rate={rate} />}
        />
        <Route path="/add" element={<AddFilm addMovie={addMovie} />} />
        <Route path="/description/:id" element={<Description films={films} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
