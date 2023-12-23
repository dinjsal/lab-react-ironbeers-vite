import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState('');

  const loadingGif = 'https://www.padisciplinaryboard.org/Themes/DisciplinaryBoard/Assets/images/loading.gif'

  useEffect(() => {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        setRandomBeer(response.data)
      }
    })
  }, [])

  return (
    <div className='beer-details'>
      {!randomBeer && (
        <img 
        src={loadingGif} 
        alt="loading-gif"
        style={{height: "15%"}} />
      )}
      <img 
        src={randomBeer.image_url} 
        alt={randomBeer.name}
        style={{height: "250px", width: "auto", marginBottom: "30px"}}
        className="beer-img" />
      <h3 className='beer-name'>{randomBeer.name}</h3>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
      
      <br />
      <Link to='/beers'>
        <p className='all-beers'>Back to All Beers</p>
      </Link>
    </div>
  )
}

export default RandomBeerPage