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
    this.dontSpam = false;
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

    let maxIndex = Math.floor(trackItems.length / 9) + 1
    this.setState( {
      tracks: trackItems,
      maxIndex: maxIndex
    } )
    // this.tracks = trackItems
    return trackItems
  }

  prevSlide() {
    if (!this.dontSpam) {
      if (this.state.index !== 0) {
        this.setState( {index: this.state.index -= 1} )
      } else {
        let carouselWrapper = document.getElementById(this.props.genre)
        carouselWrapper.classList.add("peekaboo")
        this.dontSpam = true
        setTimeout(() => {
          carouselWrapper.classList.remove("peekaboo")
          this.dontSpam = false
        }, 300)
      }
    }
  }

  nextSlide() {
    if (this.state.index !== this.state.maxIndex) {
      this.setState( {index: this.state.index += 1} )
    } else {
      this.setState( {index: 0} )
    }
  }

  render() {
    return (
      <div className="carousel-container">
          <div className="carousel-prev-btn-wrapper" onClick={this.prevSlide}>
            <div className="carousel-prev-btn-shadow">
              <button className="carousel-prev-btn" />
            </div>
          </div>
        <div className="carousel-wrapper">
          <ul 
            className="content-list-ul carousel"
            id={`${this.props.genre}`}
            style={
              {transform: `translateX(-${this.state.index * 380 / this.state.tracks.length}%)`}
            }
          >
            {this.state.tracks}
          </ul>
        </div>
          <div className="carousel-next-btn-wrapper" onClick={this.nextSlide}>
            <div className="carousel-next-btn-shadow">
              <button className="carousel-next-btn"/>
            </div>
          </div>
      </div>
    )
  }
}

export default Carousel