import React from 'react'
import AllBeersPage from '/src/pages/AllBeersPage'
import RandomBeerPage from '/src/pages/RandomBeerPage'
import AddBeerPage from '/src/pages/AddBeerPage'
import { Link } from 'react-router-dom';
import Navbar from '/src/components/Navbar'

function HomePage() {
  return (
    <div>
      <img className="homepage-img" src='/src/assets/beers.png' />
      <Link to='/beers'>
        <h2 className="homepage-text">All Beers</h2>
      </Link>
        {<AllBeersPage />}
      
      <img className="homepage-img" src='/src/assets/random-beer.png' />
      <Link to='/random-beer'>
        <h2 className="homepage-text">Random Beer</h2>
      </Link>
        {<RandomBeerPage />}
      <img className="homepage-img" src='/src/assets/new-beer.png' />
      <Link to='/new-beer'>
        <h2 className="homepage-text">Add Beer</h2>
      </Link>
        {<AddBeerPage />}
    </div>
  )
}

export default HomePage