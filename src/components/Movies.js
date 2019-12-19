import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {movies.map(movie => <div>{movie.title}:{movie.time} {movie.genres.map(g => <p>{g}</p>)}</div>)}
    </div>
  );
};

export default Movies;
