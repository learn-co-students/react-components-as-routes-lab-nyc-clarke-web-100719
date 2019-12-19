import React from 'react';
import { actors } from '../data';

let actorsDivs = actors.map(actor => 
  <div>
    <h3>{actor.name}</h3>
    <p>Movies:</p>
    {actor.movies.map(movie => <ul>{movie}</ul>)}
  </div>
)

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDivs}
    </div>
  );
};

export default Actors;
