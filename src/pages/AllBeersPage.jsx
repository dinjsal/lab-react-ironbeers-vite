import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      console.log(response.data)
      if(response.status === 200) {
        setBeers(response.data)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div key={beers._id} className="align-self-center">
    {beers.map((oneBeer) => {
      if (!oneBeer) {
        return <p>Loading...</p>
      }
      return (
        <div className="mapped-beers align-self">
          <img 
          src={oneBeer.image_url} 
          alt={oneBeer.name}
          style={{maxHeight: "200px"}} />
          <Link to={`/beers/${oneBeer._id}`}>
          <p className="homepage-text"><h2>{oneBeer.name}</h2></p>
          </Link>
          <p style={{fontSize: "18px", color: 'purple'}}>{oneBeer.tagline}</p>
          <p style={{fontSize: "14px"}}><span style={{fontWeight: "bold"}}>Created by:</span> {oneBeer.contributed_by}</p>
        </div>
      )
    })}
    </div>
  )
}

export default AllBeersPage