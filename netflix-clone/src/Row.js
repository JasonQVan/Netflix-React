import React, { useState, useEffect} from 'react';
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    // a snippet of code which runs based on a specific condition/variable

    useEffect(() => {
        // if [], run once when the row loads, and don't run again
        // if [****], run once when the row loads, and changes when changed
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData()
    }, [fetchUrl]);


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {/*several row_posters*/}
                {movies.map(movie =>
                    <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} alt={movie.name}/>
                     )}
            </div>

            {/* container -> poster*/}


        </div>
    )
}

export default Row
