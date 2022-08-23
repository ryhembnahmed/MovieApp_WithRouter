import React from "react";
import { Link, useParams } from "react-router-dom";

function Description({ films }) {
  const { id } = useParams();
  const foundFilm = films.find((elt) => elt.id == id);
  return (
    <div style={{textAlign:"center"}}>
      <h1>Details of {foundFilm.title}</h1>
      <p>{foundFilm.decription}</p>
      <Link to="/"><button>GO Back</button></Link> 
    </div>
  );
}

export default Description;
