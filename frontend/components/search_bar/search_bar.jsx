import React, {useState, useEffect} from 'react';
import SearchItem from './search_index_item';

function SearchBar(props) {
  const [state, setState] = useState(null)
  const [searchInput, setSearchInput] = useState("")

  useEffect( () => {
    setState(setTracks())
  }, [])

  function setTracks() {
    let trackTitles = []
    for (let keys in props['tracks']) {
      trackTitles.push(props['tracks'][keys].title)
    }

    return trackTitles
  }

  function sortBySearch() {
    let title = ""
    let filteredTrackTitles = []

    if (searchInput.length > 0) {
      filteredTrackTitles = state.filter( track => {
        title = track.toLowerCase()
        return title.includes(searchInput)
      })
    }
    console.log(filteredTrackTitles)
    return filteredTrackTitles
  }

  function renderTracks() {
    if (state) {
      let titles = sortBySearch()
      let displayedTitles = titles.map( title => {
        return <SearchItem key={Math.random()} title={title} />
      })
      return <ul className="search-item-ul">{displayedTitles}</ul>

    } else {
      return null
    }
  }

  return (
    <div className="searchbar-form">
      <input 
        type="text" 
        placeholder="Search for artists, bands, tracks, podcasts (soon)"
        onChange={ e => setSearchInput(e.target.value.toLowerCase().trim()) } />
        {renderTracks()}
      <button type="submit" onClick={e => e.preventDefault()} className="search-btn"/>
    </div>
  )
}

export default SearchBar