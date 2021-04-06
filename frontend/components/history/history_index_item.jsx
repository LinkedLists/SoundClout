import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HistoryIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // numComments: 0
    }
    this.flag = false
    this.handleRoute = this.handleRoute.bind(this)
    // this.numComments = 0
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    // console.log("history index updated")
  }

  componentWillUnmount() {
    // console.log("unmount")
    // this.setState( {numComments: this.numComments} )
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  cuteColors() {
    // Cannot use cuteColors() from props as it carries a redundant flag from the parent state
    // Should not be using setState as it can cause a state update on an umounted component
    // which will render an error. Instead use instance variable as a flag
    if (!this.flag) {
      this.flag = true
      const background = document.getElementsByClassName("track-show-header-container")[0];
      if (background) {
        const r1 = this.getRandomInt(160, 200)
        const g1 = this.getRandomInt(160, 200)
        const b1 = this.getRandomInt(170, 250)
        const r2 = r1 + this.getRandomInt(5, 30)
        const g2 = g1 + this.getRandomInt(5, 30)
        const b2 = b1 - this.getRandomInt(5, 30)
        const r3 = r2 + this.getRandomInt(5, 30)
        const g3 = g2 + this.getRandomInt(5, 30)
        const b3 = b2 - this.getRandomInt(5, 30)
        background.style.background = `linear-gradient(to left, 
            rgb(${r1}, ${g1}, ${b1}), 
            rgb(${r2}, ${g2}, ${b2}), 
            rgb(${r3}, ${g3}, ${b3}))`
      }
    }
  }
  
  handleRoute() {
    // Make sure you only fetch a track if you are inside the track show page
    // and make sure you dont change the backdrop color if you are trying to
    // go to the same history track as the show track
    if (this.props.fetchTrack && this.props.currentTrack.id !== this.props.track.id) {
      this.props.fetchTrack(this.props.track.id)
        .then(() => this.cuteColors()) 
    }
  }

  render() {
    // // we are in the track show page
    // if (this.props.track && this.props.currentTrack) {
    //   // history and track are matched
    //   if (this.props.track.id === this.props.currentTrack.id) {
    //     // a track might not have comments yet
    //     if (this.props.currentTrack.comments) {
    //       // this.numComments = Object.keys(this.props.currentTrack.comments).length
    //       this.numComments = this.props.currentTrack.numComments
    //     }
    //   }
    // } 
    // else if (this.props.comments) {
    //   this.numComments = this.props.comments
    // }
    return (
      <li className="history-track-item" onClick={this.handleRoute}>
        {/* <Link className="history-track-item-link" to={`/tracks/${this.props.track.id}`}> */}
        <div className="history-track-item-link">
          <Link to={`/tracks/${this.props.track.id}`} className="history-track-icon-link">
            <img src={this.props.track.photoUrl} className="history-track-icon"/>
          </Link>
          <div className="history-track-details">
            <span>
              <Link to={`/users/${this.props.track.uploader_id}`} className="comment-item-username-link"> 
                {this.props.track.username} 
              </Link>
            </span>
            <span>
              <Link to={`/tracks/${this.props.track.id}`} className="comment-item-username-link"> 
                {this.props.track.title}
              </Link>
            </span> 
            <div>
              <FontAwesomeIcon icon="comment-alt" color="#999" id="history-comment-icon"/>
              <span style={{fontSize: 11}}>
                {this.props.track.numComments}
              </span>
            </div>  
          </div>
        </div>
      </li>
    )
  }
}

export default HistoryIndexItem;