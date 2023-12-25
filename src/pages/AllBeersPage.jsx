import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [beersFiltered, setBeersFiltered] = useState([...beers]);
  
  const loadingGif = 'https://www.padisciplinaryboard.org/Themes/DisciplinaryBoard/Assets/images/loading.gif'

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

  useEffect(() => {
    const newFilteredBeers = axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${titleFilter}`)
    .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
        setBeersFiltered(newFilteredBeers);
        // console.log(newFilteredBeers)
        }
    })
    .catch ((err) => {
        console.log('Error is:', err);
    })
}, [titleFilter, beers])

  return (
    <div className="align-self-center">
    <SearchBar titleFilter={titleFilter} setTitleFilter={setTitleFilter}/>
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

export default AllBeersPage