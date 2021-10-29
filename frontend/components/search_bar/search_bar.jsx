import React, {useState, useEffect} from 'react';


function SearchBar(props) {

  return (

    <div className="searchbar-form">
      {console.log(props)}
      <input type="text" placeholder="Search for artists, bands, tracks, podcasts (soon)"></input>
      <button type="submit" onClick={e => e.preventDefault()} className="search-btn"/>
    </div>
  )
}

export default SearchBar