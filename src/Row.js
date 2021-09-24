import React, { useState, useEffect } from 'react'
import axios from './axios';

const base_url = "http://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
//If[], run once when the row loads and dont run again
  async function fetchData() {
    const request = await axios.get(fetchUrl);
    console.log(request.data.results);
    setMovies(request.data.results);
    return request; 
 }
  fetchData();
}, [fetchUrl]);

console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2> 

      <div className="row__posters">

        {movies.map(movie => (
          <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
        ))}
      </div>
    </div>
  )
}

export default Row
