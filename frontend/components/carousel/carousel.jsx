import React from 'react';
import ContentIndexItem from '../content/content_index_item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 0,
      genre: this.props.genre,
      tracks: ''
    }

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.getTrackItems = this.getTrackItems.bind(this)
    this.tracks
  }

  componentDidMount() {
    this.getTrackItems(this.props.genre)
    // this.setState( {tracks: trackItems} )
  }
  
  getTrackItems(genre) {
    let trackItems = []
    this.props.tracks.slice().map( track => {
      if (track.genre === genre) {
        trackItems.push(
        <ContentIndexItem key={track.id} photoUrl={track.photoUrl} track={track}/>
      )}
    })
    return trackItems
  }

  prevSlide() {
    this.setState( {currentSlide: currentSlide -= 1} )
  }

  nextSlide() {
    this.setState( {currentSlide: currentSlide += 1} )
  }

  render() {
    return (
      // this.tracks && this.tracks.length > 0 ? 
      <>
        <div className="content-playlist-header-wrapper">
          <h3 className="content-playlist-header">Carousel component</h3>
          <h6 className="content-playlist-header-description">cookies</h6>
        </div>
        <button>prev</button>
          {/* {this.tracks[this.state.currentSlide]} */}
        <ul className="content-list-ul">
          {this.getTrackItems(this.props.genre)}
        </ul>
        <button onClick={this.nextSlide}>next</button>
      </> 
      // : <></>
    )
  }
}

export default Carousel