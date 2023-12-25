import React from 'react'

function SearchBar({titleFilter, setTitleFilter}) {

  return (
    <div className='searchbar-div'>
        <input type="text"
        className="search-bar" 
        value={titleFilter}
        onChange={(e) => {setTitleFilter(e.target.value)}}
        placeholder='Type to search'/>
        
    </div>
  )
}

export default SearchBar