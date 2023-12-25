import React from 'react'
import { Link } from 'react-router-dom'

function BeerList({beers}) {

    const loadingGif = 'https://www.padisciplinaryboard.org/Themes/DisciplinaryBoard/Assets/images/loading.gif'

  return (
    <div className="align-self-center">
        {beers.map((oneBeer) => {
        {/* not working heehee */}
        {!beers && (
          <img 
            src={loadingGif} 
            alt="loading-gif" 
            style={{height: "15%"}} />
        )}
      return (
        <div className="mapped-beers align-self" key={oneBeer._id} >
          <img className="beer-img"
          src={oneBeer.image_url} 
          alt={oneBeer.name}
          style={{maxHeight: "200px"}} />
          <Link to={`/beers/${oneBeer._id}`}>
          <h2><p className="homepage-text">{oneBeer.name}</p></h2>
          </Link>
          <p style={{fontSize: "18px"}}>{oneBeer.tagline}</p>
          <p style={{fontSize: "14px"}}><span style={{fontWeight: "bold"}}>Created by:</span> {oneBeer.contributed_by}</p>
        </div>
      )
    })}
    </div>
  )
}

export default BeerList