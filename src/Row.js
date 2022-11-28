import React, {useState, useEffect } from 'react';
import "./Row.css";
import axios from "./axios";

function Row({title, fetchUrl, isLargeRow = false}) {

const [movies, setMovies] = useState([]);


const base_url = "https://image.tmdb.org/t/p/original"

useEffect(()=>{

    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
        
    }

    fetchData()
}, [fetchUrl])



  return (
    <div className='row'>
        
        <h1>{title}</h1>

        <div className='row__posters'>
        {movies.map(movie =>
       // to prevent to see movie without image

       // if the row container has "isLargeRow" and value of posterPath go on
            ((isLargeRow && movie.poster_path) || 
        //if the row container doesn't have "isLargeRow" and value of backdropPath go on
            (!isLargeRow && movie.backdrop_path)) &&(
                <img
                // we give two different class the row container  ....without isLargeRow and with isLargeRow
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
                alt={movie.name} 
                />
            )
                
          
         
            
        )}

        </div>

       
    </div>
  )
}

export default Row