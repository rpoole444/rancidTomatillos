import React from 'react'
import './Movies.css'


const Movies = ({id, key, poster_path, backdrop_path, 
  title, average_rating, release_date}) => {
    return (
      <section className='movie-poster-container'>
        <img src={poster_path} alt={`${title} movie poster`} />
        <section className='movie-title'>
          <h2>{title}</h2>
          <img className='star-image' src='star.png' alt='star logo' />
          <h2>{`${average_rating.toFixed(0)}`}</h2>
        </section>
      </section>
    )
  }

  export default Movies