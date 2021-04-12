import React from 'react';
// import ContentIndexItem from '../content/content_index_item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: ''
    }

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.getTrackItems = this.getTrackItems.bind(this)
  }

  getTrackItems(genre) {
    const trackItems = this.props.tracks.slice().map( track => {
      
      if (track.genre === genre) return (
        <ContentIndexItem key={track.id} photoUrl={track.photoUrl} track={track}/>
      )
    })

    return trackItems
  }

  prevSlide() {

  }

  nextSlide() {

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Carousel