import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar';
import BeerList from '../components/BeerList';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [beersFiltered, setBeersFiltered] = useState([...beers]);

  useEffect(() => {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
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
    <div>
    <SearchBar titleFilter={titleFilter} setTitleFilter={setTitleFilter}/>
    <BeerList beers={beers} />

    </div>
  )
}

export default AllBeersPage