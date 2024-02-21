import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>{/*{code here}*/}
  <h1>Movies</h1>
  <ul>
  {movies.map((movie, index)=> (
    <li key={index}>
      <h1>{movie.title}</h1>
      <h3>Time: {movie.time}</h3>
      {movie.genres.map((genre, index)=> (
        <li key={index}>
          {genre}
        </li>
      ))}
    </li>
  ))}

  </ul>
  </div>;
}

export default Movies;
