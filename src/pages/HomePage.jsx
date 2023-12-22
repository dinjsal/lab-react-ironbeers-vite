import React from 'react'
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div>
      <img className="homepage-img" src='/src/assets/beers.png' />
      <Link to='/beers'>
        <h2 className="homepage-text">All Beers</h2>
      </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut egestas nunc. Nulla molestie viverra viverra. Phasellus vel ipsum sed ex suscipit dapibus. Proin bibendum volutpat aliquam.
      </p> 
      <img className="homepage-img" src='/src/assets/random-beer.png' />
      <Link to='/random-beer'>
        <h2 className="homepage-text">Random Beer</h2>
      </Link>
      <p>Proin ut diam lobortis, egestas eros ut, imperdiet leo. Nulla vulputate enim et odio varius feugiat. Etiam tellus nibh, vestibulum eget sapien id, ullamcorper porttitor lorem. Integer auctor consectetur laoreet. </p>
      <img className="homepage-img" src='/src/assets/new-beer.png' />
      <Link to='/new-beer'>
        <h2 className="homepage-text">Add Beer</h2>
      </Link>
      <p>
      Curabitur vel semper tortor, et semper ligula. Vivamus non ante elit. Curabitur sodales dui sed mauris volutpat rutrum. Donec libero neque, sollicitudin at hendrerit quis, euismod et massa. 
      </p>
    </div>
  )
}

export default HomePage