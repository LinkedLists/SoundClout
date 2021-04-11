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

  }

  handleKeyPress(e) {
    if (e.key == "Escape") {
      this.setState({open: "close"})
    }
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleOpen() {
    if (this.state.open === "open") {
      this.setState({open: "close"})
    } else if(this.state.open === "close"){
      this.setState({open: "open"})
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