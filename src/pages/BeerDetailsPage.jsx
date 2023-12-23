import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom"; 
 
function ProjectDetailsPage (props) {
  const [beerDetails, setBeerDetails] = useState(null);

  const { beerId } = useParams();            

  const loadingGif = 'https://www.padisciplinaryboard.org/Themes/DisciplinaryBoard/Assets/images/loading.gif'
    
  useEffect(()=> {                  
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          setBeerDetails(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [] );
 
  
  return (
    <div className="beer-details">

    {!beerDetails && (
        <img 
          src={loadingGif} 
          alt="loading-gif" 
          style={{height: "15%", margin: "auto 0"}} />
      )}

      {beerDetails && (
        <>
          <br />
          <img 
          src={beerDetails.image_url} 
          alt={beerDetails.name}
          style={{height: "250px", width: "auto", marginBottom: "30px"}}
          className="beer-img"
          />
          <h3 className='beer-name'>{beerDetails.name}</h3>
          <p>{beerDetails.tagline}</p>
          <p>{beerDetails.first_brewed}</p>
          <p>{beerDetails.attenuation_level}</p>
          <p>{beerDetails.description}</p>
          <p>{beerDetails.contributed_by}</p>
        </>

      )}
      
      <br />
      <Link to='/beers'>
        <p className='all-beers'>Back to All Beers</p>
      </Link>
    </div>
  );
}
 
export default ProjectDetailsPage;