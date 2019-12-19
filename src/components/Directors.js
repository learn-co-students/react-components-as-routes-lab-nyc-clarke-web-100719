import React from 'react';
import { directors } from '../data';

let directorsDivs = directors.map(director => 
    <div>
      <h3>{director.name}</h3>
      <p>Movies:</p>
      {director.movies.map(movie => <ul>{movie}</ul>)}
    </div>
  )

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDivs}
    </div>
  );
}

export default Directors
