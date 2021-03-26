import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Playbar extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      muted: false,
      repeat: false,
      currentTime: 0,
      duration: 0,
      percentPlayed: 0
    }

    this.handlePlay = this.handlePlay.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleRepeat = this.handleRepeat.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.timeIncrementer = this.timeIncrementer.bind(this);
    this.prettifyTime = this.prettifyTime.bind(this);
    this.timeIncrementerInstance
  }

  // componentDidMount() {
  //   let audio = document.getElementById('audio')
  //   this.setState( {playing: audio.paused} )
  // }

  // componentDidUpdate() {
  //   let audio = document.getElementById('audio')
  //   this.setState( {playing: audio.paused} )
  // }

  componentWillUnmount() {
    this.props.clearPlaybarState();
  }

  componentDidUpdate() {
    // console.log("i")
  }

  prettifyTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60));
    if (seconds < 10) seconds = '0' + seconds;
    time = minutes + ':' + seconds;
    return time;
  }

  timeIncrementer() {
    let audio = document.getElementById('audio')
    let progressBar = document.getElementsByClassName('progress-bar')[0];
    return setInterval(() => {
      let percentPlayed = 100 * (audio.currentTime / audio.duration)
      progressBar.style.width = `${percentPlayed}%`;
      this.setState({
        currentTime: this.prettifyTime(audio.currentTime),
        percentPlayed: percentPlayed
      })
    }, 40)
  }

  setDuration() {
    let audio = document.getElementById('audio')
    this.setState({
      duration: this.prettifyTime(audio.duration),
      percentPlayed: 0
    })
    this.timeIncrementerInstance = this.timeIncrementer()
  }

  handlePlay() {
    let audio = document.getElementById('audio')
    if (!this.props.paused) {
      audio.pause()
      clearInterval(this.timeIncrementerInstance)
      this.props.pauseTrack();
    } else {
      this.props.playTrack();
      audio.play()
      this.timeIncrementerInstance = this.timeIncrementer()
    }
  }

  handleMute() {
    let audio = document.getElementById('audio')
    if (this.state.muted) {
      audio.muted = false;
      this.setState( {muted: false} )
    } else {
      audio.muted = true;
      this.setState( {muted: true} )
    }
  }

  handleRepeat() {
    let audio = document.getElementById('audio')
    if (this.state.repeat) {
      audio.removeAttribute("loop")
      this.setState( {repeat: false} )
    } else {
      audio.setAttribute("loop", true)
      this.setState( {repeat: true} )
    }
  }

  render() {
    if (this.props.currentSessionId === null) return <></>
    let audio = document.getElementById('audio')
    
    return (
      <div className={this.props.currentTrack.id ? "playbar-footer-open" : "playbar-footer-close"}>
        {/* <div className="playbar-footer"> */}
          <div className="playbar-footer-wrapper">
            <div className="media-container">
              <audio 
                id='audio' 
                autoPlay 
                onLoadedMetadata={this.setDuration}
                src={this.props.currentTrack.audioUrl} 
              />
              <button onClick={e => e.preventDefault()}> <FontAwesomeIcon icon="step-backward" color="red"/> </button>
              <button onClick={this.handlePlay}>{this.props.paused || audio.ended ? <FontAwesomeIcon icon="play"/> : <FontAwesomeIcon icon="pause"/>}</button>
              <button onClick={e => e.preventDefault()}> <FontAwesomeIcon icon="step-forward" color="red"/> </button>
              <button onClick={e => e.preventDefault()}> <FontAwesomeIcon icon="random" color="red"/> </button>
              <button onClick={this.handleRepeat}>{this.state.repeat ? <FontAwesomeIcon icon="redo" color="#f50" /> : <FontAwesomeIcon icon="redo" /> }</button>
            </div>
            <div className="progress-bar-container">
              <div className="progress-current-time">{this.state.currentTime}</div>
              <div className="progress-background">
                <div className="progress-bar"/>
              </div>
              <div className="progress-duration">{this.state.duration}</div>
            </div>


            <div className="test-wrapper">
              <button onClick={this.handleMute} id="volume-btn">{this.state.muted ? <FontAwesomeIcon icon="volume-mute" /> : <FontAwesomeIcon icon="volume-up" />}</button>
              <div className="thumb" onClick={this.handleMute}>
                <div className="volume-control-wrapper">
                  <div className="slider-container" />
                  <div className="slider-background"></div>
                  <div className="slider-ball" />
                </div>
              </div>
            </div>

            <div className="current-track-info-container">
              <div className="current-track">
                { 
                  // this ternary is not working
                  this.props.currentTrack !== undefined ? 
                  <img src={this.props.currentTrack.photoUrl} className="current-track-img" /> : <></>
                }
                <div className="current-track-description">
                  <div className="description-wrapper" > 
                    <div>
                      {this.props.currentUser.username}
                    </div>
                    <div className="current-track-title">
                      {this.props.currentTrack.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    )
  }
}

export default Playbar