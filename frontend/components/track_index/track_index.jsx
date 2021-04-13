import React from 'react';
import ContentIndexItem from '../content/content_index_item'
import Carousel from '../carousel/carousel_container'
import History from '../history/history'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TrackIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // if a user is on the main page then quickly leaves before the page fully loads
      // there could be an issue where there is an attempt to update the state of
      // an unmounted component.
      // loading: true
    }
    this.enableCurrentUser = this.enableCurrentUser.bind(this)
    this.loading = true
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    // this.props.fetchTracks()
    this.enableCurrentUser()
    let track = JSON.parse(window.localStorage.getItem("currentTrack"))
    if (track && Object.keys(track).length > 0) {
      if (!this.props.currentTrack.id)
      this.props.refreshTrack(JSON.parse(window.localStorage.getItem("currentTrack")));
    }
    setTimeout(() => {
      this.loading = false
    }, 350)
  }

  enableCurrentUser() {
    let userLink = document.getElementById("nav-currentUser");
    if (userLink) {
      userLink.classList.remove("disable")
    }
  }

  render() {
    const trackItems = this.props.tracks.slice().reverse().map( track => {
      return (
        <ContentIndexItem key={track.id} photoUrl={track.photoUrl} track={track}/>
      )
    })
    return (
      <div className="content-container">
        <History />
        <div className="content-wrapper">
          <div className="content-playlist-main-wrapper">
            <div className="library-main-content-wrapper">
              <div className="content-playlist-header-wrapper">
                <h3 className="content-playlist-header">Library</h3>
                <h6 className="content-playlist-header-description">All tracks from SoundClout users</h6>
              </div>
              {
                // this.loading ?
                  // <FontAwesomeIcon icon="spinner" spin size="3x" className="homepage-spinner" /> :
                  <ul className="library-tracks-ul">
                    {trackItems}
                  </ul>
              }
            </div>
          </div>
          <div className="history-social-links-footer-container">
            <div className="history-social-links-footer-wrapper">
              <a href="https://angel.co/u/kenny-zeng" target="_blank">AngelList</a>
              &nbsp;⁃
              <a href="https://github.com/LinkedLists/fsp" target="_blank"> Github</a>
              &nbsp;⁃
              <a href="https://linkedin.com/in/k-z-96a742208" target="_blank"> Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default TrackIndex