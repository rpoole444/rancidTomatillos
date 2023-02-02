import React from 'react'
import './Movies.css'

const Movies = ({id, key, poster_path, backdrop_path, 
  title, average_rating, release_date}) => {
    return (
      <section className=''>
      <h1>{title}</h1>
      <img src={poster_path} alt={`${title} movie poster`} />
      </section>
    )
  }

  export default Movies