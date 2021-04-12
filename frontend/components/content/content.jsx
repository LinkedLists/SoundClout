import React from 'react';
import ContentIndexItem from './content_index_item'
import Carousel from '../carousel/carousel_container'
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
    this.getTrackItems = this.getTrackItems.bind(this)
    this.loading = true
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchTracks()
        //.then(() => this.setHistory())
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

  // Setting history here because a user can delete a track and would 
  // get redirected to the index page, so history needs to be set or else
  // a ghost track would appear on history in refresh
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

  render() {
    // const trackItems = this.props.tracks.slice().reverse().map( track => {
    //   return (
    //     <ContentIndexItem key={track.id} photoUrl={track.photoUrl} track={track}/>
    //   )
    // })
    return (
      <div className="content-container">
        <History />
        <div className="content-wrapper">
          <div className="content-playlist-main-wrapper">
            <div className="content-playlist-wrapper">
            {
              this.loading ?
                <FontAwesomeIcon icon="spinner" spin size="3x" className="homepage-spinner" /> 
                  :
                  <ul>

                    <li className="content-playlist-li">
                      <Carousel genre={"Dance"} />
                    </li>


                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Charts: New and hot</h3>
                        <h6 className="content-playlist-header-description">The most played tracks on SoundCloud this week</h6>
                      </div>
                      <ul className="content-list-ul">
                        {this.getTrackItems("Top 100")}
                      </ul>
                    </li>
                      
                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Polyphia</h3>
                        <h6 className="content-playlist-header-description">Hottest guitar essentials</h6>
                      </div>
                      <ul className="content-list-ul">
                        {this.getTrackItems("Instrumental")}
                      </ul>
                    </li>

                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Kpop</h3>
                        <h6 className="content-playlist-header-description">Latest and hottest kpop</h6>
                      </div>
                      <ul className="content-list-ul">
                        {this.getTrackItems("Kpop")}
                      </ul>
                    </li>

                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Lofi</h3>
                        <h6 className="content-playlist-header-description">Music for relaxation and focus</h6>
                      </div>
                      <ul className="content-list-ul">
                        {this.getTrackItems("Lofi")}
                      </ul>
                    </li>

                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Vibes</h3>
                        <h6 className="content-playlist-header-description">Fresh pressed vibes</h6>
                      </div>
                      <ul className="content-list-ul">
                        {this.getTrackItems("House")}
                      </ul>
                    </li>

                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Dance</h3>
                        <h6 className="content-playlist-header-description">Stay at home dance party</h6>
                      </div>
                      <ul className="content-list-ul">
                        {this.getTrackItems("Dance")}
                      </ul>
                    </li>


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