import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}
  <h1>Directors</h1>
  <ul>
  {directors.map((director, index)=> (
   <li key={index}>
    <h2>{director.name}</h2>
    <ul>
    {director.movies.map((production, index) => (
      <li key={index}>
        {production}
      </li>
    ))}
    </ul>
   </li>
))}
  </ul>
 
  </div>;
}

export default Directors;
