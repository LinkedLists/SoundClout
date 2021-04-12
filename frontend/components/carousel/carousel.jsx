import React from 'react';
import ContentIndexItem from '../content/content_index_item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      genre: this.props.genre,
      tracks: '',
      maxIndex: 0
    }

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.getTrackItems = this.getTrackItems.bind(this)
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

    let maxIndex = Math.floor(trackItems.length / 8) + 1
    this.setState( {
      tracks: trackItems,
      maxIndex: maxIndex
    } )
    // this.tracks = trackItems
    return trackItems
  }

  prevSlide() {
    if (this.state.index !== 0) {
      this.setState( {index: this.state.index -= 1} )
    }
  }

  nextSlide() {
    if (this.state.index !== this.state.maxIndex) {
      this.setState( {index: this.state.index += 1} )
    }
  }

  render() {
    return (
      <>
        <div className="content-playlist-header-wrapper">
          <h3 className="content-playlist-header">Carousel component</h3>
          <h6 className="content-playlist-header-description">cookies</h6>
        </div>
        <div className="carousel-wrapper">
        <button onClick={this.prevSlide}>prev</button>
          <ul className="content-list-ul carousel"
          // each item has a size of 15%
            style={
              {transform: `translateX(-${this.state.index * 380 / this.state.tracks.length}%)`}
            }
          >
            {this.state.tracks}
          </ul>
        <button onClick={this.nextSlide}>next</button>
        </div>
      </> 
    )
  }
}

export default Carousel