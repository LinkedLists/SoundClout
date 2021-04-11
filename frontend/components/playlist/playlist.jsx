import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    if (e.target.className === "playlist-header noselect" ||
      e.target.className === "playlist-close-x") {
        this.handleClose()
    }
  }

  handleClose() {
    let playlist = document.getElementsByClassName("playlist-container-open")[0]
    if (playlist) {
      this.setState({open: "close"})
      setTimeout(() => {
        playlist.style.display = "none"
      }, 200)
    }
  }  

  handleOpen() {
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

  render() {
    return (
      <div>
        <div className={`playlist-container-${this.state.open}`}>
          <div className="playlist-header noselect" onClick={this.handleMouseDown}>
            <h3>Next up</h3>
            <button className="playlist-clear-btn">Clear</button>
            <button type="button" className="playlist-close-x noselect" onClick={this.handleClose}>X</button>
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