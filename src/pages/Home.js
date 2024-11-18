import React, { useEffect, useState } from 'react'
import { fetch_movie } from '../data/data';

import MovieList from '../components/MovieList';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
    const [movies,setMovies]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        const getMoive= async()=>{
            const data=await fetch_movie()
            setMovies(data);
            setLoading(false)
        }
        getMoive();
    },[])
  return (
    <div>
    {
        loading? (<LoadingSpinner/>):( <MovieList movies={movies}/>)
    }
        
    </div>
  )
}

export default Home