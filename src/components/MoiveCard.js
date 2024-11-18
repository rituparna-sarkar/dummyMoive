import React from 'react'
import { Link } from 'react-router-dom'

const MoiveCard = ({movie}) => {
  return (
    <div className='movie-card'>
        <img src={movie.image} alt={movie.movie}/>
        <h2>{movie.movie}</h2>
        <p>Rating:{movie.rating}</p>
        <Link to={`/movie/${movie.id}`} >Veiw Details</Link>
    </div>
  )
}

export default MoiveCard