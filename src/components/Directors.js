import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {directors.map(director => <div>{director.name} -> {director.movies.map((movie,index) => <p>{index+1}: {movie}</p>)}</div>)}
    </div>
  );
}

export default Directors
