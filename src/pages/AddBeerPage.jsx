import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tips, setBrewers_tips] = useState('');
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState('');
  
  const navigate = useNavigate();

  const loadingGif = 'https://www.padisciplinaryboard.org/Themes/DisciplinaryBoard/Assets/images/loading.gif'

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    }
    axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    .then((response) => {
      {!response.data && (
        <img 
          src={loadingGif} 
          alt="loading-gif" 
          style={{height: "15%"}} />
      )}
      console.log(response.data);
      if (response.status === 200) {
        navigate('/beers')
      } else {
        console.log(err);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    }
  
  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label hmtlFor="name">Name</label>
    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Enter beer name" />
  </div>
  <div className="form-group">
    <label hmtlFor="tagline">Tagline</label>
    <input type="text" className="form-control" onChange={(e) => setTagline(e.target.value)}/>
  </div>
  <div className="form-group">
    <label hmtlFor="description">Description</label>
    <textarea type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} />
  </div>
  <div className="form-group">
    <label hmtlFor="first_brewed">First Brewed</label>
    <input type="text" className="form-control" onChange={(e) => setFirst_brewed(e.target.value)} />
  </div>
  <div className="form-group">
    <label hmtlFor="brewers_tips">Brewer's Tips</label>
    <input type="text" className="form-control" onChange={(e) => setBrewers_tips(e.target.value)} />
  </div>
  <div className="form-group">
    <label hmtlFor="attenuation_level">Attenuation Level</label>
    <input type="number" className="form-control" onChange={(e) => setAttenuation_level(e.target.value)}/>
  </div>
  <div className="form-group">
    <label hmtlFor="contributed_by">Contributed By</label>
    <input type="text" className="form-control" onChange={(e) => setContributed_by(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Create New Beer</button>
     </form>
     <br />
    </div>
  )
}

export default AddBeerPage