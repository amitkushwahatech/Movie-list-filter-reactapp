import React from 'react';

function GenreFilter({genres, onGenreSelect }) {
  return (
    <div className="GenreFilter">
      <h3>Filter by Genre</h3>
      {genres.map((genre) => (
        <button className='btnFltr' key={genre} onClick={() => onGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;