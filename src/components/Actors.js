import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{/*{code here}*/}
  <h1>
    Actors
  </h1>

  <ul>
    {actors.map((actor, index)=>(
      <li key={index}>
        <h2>{actor.name}</h2>
        {actor.movies.map((star, index) => (
          <li key={index}>
            <h4>{star}</h4>
          </li>
        ))}
      </li>
    ))}
  </ul>
  
  </div>;
}

export default Actors;
