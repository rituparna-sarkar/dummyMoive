import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetch_movie_data } from '../data/data';
import LoadingSpinner from '../components/LoadingSpinner';

const MoiveDetails = () => {
    const{id}=useParams();
    const[movie,setMovie]=useState(null);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        const moiveDetails=async()=>{
            const data=await fetch_movie_data(id);
            setMovie(data);
            setLoading(false);
        }
        moiveDetails();
    },[id])

    if(loading){
        return <LoadingSpinner/>

    }

    if(!movie){
        <p>Movie not found</p>
    }

  return (
    <div>
    <h1>{movie.movie}</h1>
    <img src={movie.image} alt={movie.movie} />
    <p>Rating:{movie.rating}</p>
    
    <a href={movie.imdb_url} >
    View on IMDb
    </a>


    </div>
  )
}

export default MoiveDetails