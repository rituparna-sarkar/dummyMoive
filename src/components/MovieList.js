import React from 'react'
import MoiveCard from './MoiveCard'

const MovieList = ({movies}) => {
  return (
    <div className='movie-list'>
    {
        movies.map((movie)=>(
            <MoiveCard key={movie.id} movie={movie}/>
        ))
    }

    </div>
  )
}

export default MovieList