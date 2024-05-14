import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {actors.map(actor => <div>{actor.name} -> {actor.movies.map((movie,index) => <p>{index+1}: {movie}</p>)}</div>)}
    </div>
  );
};

export default Actors;
