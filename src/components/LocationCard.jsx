import React from 'react'

const LocationCard = ({location}) => {
  return (
    <article className='location'>
        <h2 className='location__name'>{location?.name}</h2>
        <ul className='location__info'>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimension: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationCard