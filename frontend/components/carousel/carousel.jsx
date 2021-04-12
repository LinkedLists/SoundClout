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
        <ContentIndexItem key={trackItems.length} photoUrl={track.photoUrl} track={track}/>
      )}
    })
    this.setState( {tracks: trackItems} )
    // this.tracks = trackItems
    return trackItems
  }

  prevSlide() {
    if (this.state.currentSlide !== 0) {
      this.setState( {currentSlide: this.state.currentSlide -= 1} )
    }
  }

  nextSlide() {
    if (this.state.currentSlide !== this.state.tracks.length - 1) {
      this.setState( {currentSlide: this.state.currentSlide += 1} )
    }
  }

  render() {
    return (
      <>
        <div className="content-playlist-header-wrapper">
          <h3 className="content-playlist-header">Carousel component</h3>
          <h6 className="content-playlist-header-description">cookies</h6>
        </div>
        <button onClick={this.prevSlide}>prev</button>
        <div className="carousel-wrapper">
          <ul className="content-list-ul carousel"
          // each item has a size of 15%
            style={
              {transform: `translateX(-${15 * this.state.currentSlide}%)`}
            }
          >
            {this.state.tracks}
          </ul>
        </div>
        <button onClick={this.nextSlide}>next</button>
      </> 
    )
  }
}

export default Carousel