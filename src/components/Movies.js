import React from 'react';
import { movies } from '../data';

let movieDivs = movies.map(movie =>
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.time}</p>
      <p>Genres:</p>
      {movie.genres.map(genre => <ul>{genre}</ul>)}
    </div>
)

const Movies = () => {
  
  return (
    <div>
        <h1>Movies Page</h1>
        {movieDivs}
    </div>
  );
};

export default Movies;
