import React from 'react';
import ContentIndexItem from './content_index_item'
import History from '../history/history'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // if a user is on the main page then quickly leaves before the page fully loads
      // there could be an issue where there is an attempt to update the state of
      // an unmounted component.
      // loading: true
    }
    this.setHistory = this.setHistory.bind(this)
    this.enableCurrentUser = this.enableCurrentUser.bind(this)
    this.loading = true
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchTracks().then(() => this.setHistory())
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

  setHistory() {
    if (this.props.trackHistory.length !== 0) {
      window.localStorage.setItem("history", JSON.stringify(this.props.trackHistory))
      setTimeout(() => {
        let history = JSON.parse(window.localStorage.getItem("history"))
        if (history.length !== this.props.trackHistory.length) {
          window.localStorage.setItem("history", JSON.stringify(this.props.trackHistory))
        }
      }, 70)
    } else {
      let history 
      if (window.localStorage.getItem("history") && window.localStorage.getItem("history").length !== 0) {
        history = JSON.parse(window.localStorage.getItem("history"))
        this.props.receiveHistory(JSON.parse(window.localStorage.getItem("history")))
        // fail safe
        setTimeout(() => {
          if (window.localStorage.getItem("history").length !== 0) {
            history = JSON.parse(window.localStorage.getItem("history"))
            this.props.receiveHistory(JSON.parse(window.localStorage.getItem("history")))
          }
        }, 40)
      }
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
            <div className="playlist-wrapper">
              <div className="playlist-header">Charts: New and hot</div>
              {
                this.loading ?
                  <FontAwesomeIcon icon="spinner" spin size="3x" className="homepage-spinner" /> :
                  <ul className="content-list-ul">
                    {trackItems}
                  </ul>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content