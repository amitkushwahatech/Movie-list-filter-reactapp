import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import './App.css'
import GenreFilter from './Components/GenreFilterKey';
import movies from './Components/movies';



function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const genres =[
    "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation"]

  const handleGenreSelect = (genre) => {
    console.log(`Selected genre: ${genre}`);
    setSelectedGenre(genre);
  };

  const filteredMovies = selectedGenre ? movies.filter((movie) => movie.genre === selectedGenre) : movies;

  return (
    <div className="App">
      <h1>Top 15 Movies of All Time</h1>
      <GenreFilter genres={genres} onGenreSelect={handleGenreSelect} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;