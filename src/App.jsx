import React, { useState } from "react";
import { categories, initialMovies } from "./data/movies";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import AddMovie from "./components/AddMovie";
import "./styles.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState(initialMovies);

  const filteredMovies = movies.filter((movie) => {
    const matchCategory =
      selectedCategory === "Todos" || movie.category === selectedCategory;
    const matchSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleReset = () => {
    setMovies(initialMovies);
  };

  return (
    <div className="app">
      <Sidebar
        categories={["Todos", ...categories]}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <main className="main">
        <SearchBar search={searchTerm} onChange={setSearchTerm} />
        <AddMovie setMovies={setMovies} />
        <button className="reset-button" onClick={handleReset}>
          🔁 Resetar Filmes
        </button>
        <MovieList movies={filteredMovies} />
      </main>
    </div>
  );
};

export default App;
