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
  }

  handleKeyPress(e) {
    if (e.key == "Escape") {
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

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
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

        </div>
        <span id="playlist-icon" onClick={this.handleOpen}>
          <i className="fas fa-bars fa-lg"></i>
          <i className="fas fa-play playlist"></i>
          </span>
      </div>
    )
  }
}

export default Playlist