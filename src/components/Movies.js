import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
       <h1>Movies Page</h1>
       <ul>
          { movies.map(movie => <div key={movie.title}>
                                    <h4>{movie.title}</h4>
                                      <p>{ movie.time }</p>
                                      <p>Genres: </p>
                                      <ul>
                                        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
                                      </ul>
                                </div>)}
       </ul>
    </div>
  );
};

export default Movies;
