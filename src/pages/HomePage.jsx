import React from 'react'
import AllBeersPage from '/src/pages/AllBeersPage'
import RandomBeerPage from '/src/pages/RandomBeerPage'
import AddBeerPage from '/src/pages/AddBeerPage'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage-img">
      <img src='/src/assets/beers.png' />
      <Link to='/beers'>
        <h2>All Beers</h2>
      </Link>
        {<AllBeersPage />}
      
      <img src='/src/assets/random-beer.png' />
      <Link to='/random-beer'>
        <h2>Random Beer</h2>
      </Link>
        {<RandomBeerPage />}
      <img src='/src/assets/new-beer.png' />
      <Link to='/new-beer'>
        <h2>Add Beer</h2>
      </Link>
        {<AddBeerPage />}
    </div>
  )
}

export default HomePage