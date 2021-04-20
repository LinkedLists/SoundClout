import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PlaylistIndexItem from './playlist_index_item'

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      open: 'close'
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.getTrackList = this.getTrackList.bind(this)
    this.spamBlocker = false
  }
  
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
  
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }

  handleKeyPress(e) {
    if (e.key == "Escape") {
      this.handleClose()
    }
  }

  handleMouseDown(e) {
    if (!this.spamBlocker) {
      if (e.target.className === "playlist-header noselect" ||
        e.target.className === "playlist-close-x") {
          this.handleClose()
      }
    }
  }

  handleClose() {
    let playlist = document.getElementsByClassName("playlist-container-open")[0]
    if (playlist) {
      this.setState({open: "close"})
      this.spamBlocker = true
      setTimeout(() => {
        playlist.style.display = "none"
        this.spamBlocker = false
      }, 380)
    }
  }  

  handleOpen() {
    if (!this.spamBlocker) {
      let playlist = document.getElementsByClassName(`playlist-container-${this.state.open}`)[0]
      if (playlist) {
        if (this.state.open === "open") {
          this.handleClose()
        } else if(this.state.open === "close"){
          playlist.style.display = "block"
          this.setState({open: "open"})
        }
      }
    }
  }

  getTrackList() {
    let historyItems = this.props.nextTrack.map( (trackId, i) => {
      return (
        <PlaylistIndexItem 
          key={i} 
          track={this.props.tracks[trackId]}
          currentTrack={this.props.currentTrack}
          fetchUser={this.props.fetchUser}
          clearNextTrack={this.props.clearNextTrack}
          sourceMessage={"From your recent history"}
          />
      )
    })

    let playlistItems = []
    if (this.props.playlist.length > 0) {
      let genre
      if (!(this.props.playlist[0] in this.props.tracks)) {
        this.props.playlist.shift()
      } else {
        genre = this.props.tracks[this.props.playlist[0]].genre
      }
        playlistItems = this.props.playlist.map( (trackId, i) => {
        return (
          <PlaylistIndexItem 
            key={i + 3584684} 
            track={this.props.tracks[trackId]}
            currentTrack={this.props.currentTrack}
            fetchUser={this.props.fetchUser}
            clearNextTrack={this.props.clearNextTrack}
            sourceMessage={`Suggested from ${genre}`}
            />
        )
      })
    }

    return playlistItems.reverse().concat(historyItems).reverse()
  }

  render() {
    return (
      <div>
        <div className={`playlist-container-${this.state.open}`}>
          <div className="playlist-header noselect" onMouseDown={this.handleMouseDown}>
            <h3>Next up</h3>
            <button className="playlist-clear-btn" onClick={this.props.clearPlaylist}>Clear</button>
            <button type="button" className="playlist-close-x noselect" onClick={this.handleClose}>X</button>
          </div>

          <div className="playlist-ul-container">

            <div className={`playlist-shuffle-background-${this.props.shuffle}`}>
              <h3 className={`playlist-shuffle-message-${this.props.shuffle}`}>
                Your playlist will be paused while you shuffle around
              </h3>
            </div>

            <div className="playlist-ul-wrapper">
              <ul className="playlist-ul">
                <PlaylistIndexItem 
                  key={this.props.currentTrack.id + 10000} 
                  track={this.props.currentTrack}
                  currentTrack={this.props.currentTrack}
                  fetchUser={this.props.fetchUser}
                  clearNextTrack={this.props.clearNextTrack}
                  sourceMessage={"Currently listening to"}
                  />
                {this.getTrackList()}
              </ul>
            </div>
          </div>

        </div>
        <span id="playlist-icon" onClick={this.handleOpen}>
          {/* <i className={`fas fa-bars fa-lg icon-${this.state.open}`} ></i> */}
          {/* <i className="fas fa-play playlist " ></i> */}
          <FontAwesomeIcon icon="bars" size="lg" className={`icon-${this.state.open} w`} />
          <FontAwesomeIcon icon="play" className={`playlist icon-${this.state.open}`}/>
        </span>
        {/* <div className={`playlist-background-${this.state.open}`}></div> */}
      </div>
    )
  }
}

export default Playlist