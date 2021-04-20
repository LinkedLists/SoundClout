import React from 'react';
import ContentIndexItem from './content_index_item'
import Carousel from '../carousel/carousel_container'
import History from '../history/history'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Content extends React.Component {
  constructor(props) {
    super(props)

    this.enableCurrentUser = this.enableCurrentUser.bind(this)
    this.loading = true
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchTracks()
    this.enableCurrentUser()
    let track = {}
    if (window.localStorage.getItem("currentTrack") !== 'undefined') {
      track = JSON.parse(window.localStorage.getItem("currentTrack"))
    } else {
      window.localStorage.setItem("currentTrack", JSON.stringify({}))
    }
    let history 

    if (window.localStorage.getItem("history") && window.localStorage.getItem("history").length !== 0) {
      history = JSON.parse(window.localStorage.getItem("history"))
    }
    this.props.receiveHistory(history)

    if (track && Object.keys(track).length > 0) {
      if (!this.props.currentTrack.id && window.localStorage.getItem("currentTrack"))
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
                  <ul className="content-playlist-ul">
                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Charts: New and hot</h3>
                        <h6 className="content-playlist-header-description">The most played tracks on SoundCloud this week</h6>
                      </div>
                      <Carousel genre={"Top 100"} />
                    </li>
                      
                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Polyphia</h3>
                        <h6 className="content-playlist-header-description">Hottest guitar essentials</h6>
                      </div>
                      <Carousel genre={"Instrumental"} />
                    </li>

                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Kpop</h3>
                        <h6 className="content-playlist-header-description">Latest and hottest kpop</h6>
                      </div>
                      <Carousel genre={"Kpop"} />
                    </li>

                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Lofi</h3>
                        <h6 className="content-playlist-header-description">Music for relaxation and focus</h6>
                      </div>
                      <Carousel genre={"Lofi"} />
                    </li>

                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Vibes</h3>
                        <h6 className="content-playlist-header-description">Fresh pressed vibes</h6>
                      </div>
                      <Carousel genre={"House"} />
                    </li>

                    <li className="content-playlist-li">
                      <div className="content-playlist-header-wrapper">
                        <h3 className="content-playlist-header">Dance</h3>
                        <h6 className="content-playlist-header-description">Stay at home dance party</h6>
                      </div>
                      <Carousel genre={"Dance"} />
                    </li>
                  </ul>
              }
            </div>

            <div className="library-social-links-footer-container">
              <div className="history-social-links-footer-wrapper">
                <a href="https://angel.co/u/kenny-zeng" target="_blank">AngelList</a>
                &nbsp;⁃&nbsp;
                <a href="https://github.com/LinkedLists/SoundClout" target="_blank">Github</a>
                &nbsp;⁃&nbsp;
                <a href="https://linkedin.com/in/k-z-96a742208" target="_blank">Linkedin</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Content