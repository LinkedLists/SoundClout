import React, {useState, useEffect} from 'react';


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
    let filteredTracks = []

    if (searchInput.length > 0) {
      filteredTracks = state.filter( track => {
        title = track.toLowerCase()
        return title.includes(searchInput)
      })
    }
    console.log(filteredTracks)
    return filteredTracks
  }

  function renderTracks() {
    if (state) {
      let tracks = sortBySearch()
      return tracks.map( track => {
        // renderTracks will render search items based on user input
        // SearchItem component will be a future component
        // SearchItem takes the whole track incase it needs title/author
        // return <SearchItem key={Math.random()} track={track} />
      })
    } else {
      return null
    }
  }

  return (
    <div className="searchbar-form">
      {sortBySearch()}
      <input 
        type="text" 
        placeholder="Search for artists, bands, tracks, podcasts (soon)"
        onChange={ e => setSearchInput(e.target.value.toLowerCase().trim()) } />
      <button type="submit" onClick={e => e.preventDefault()} className="search-btn"/>
    </div>
  )
}

export default SearchBar