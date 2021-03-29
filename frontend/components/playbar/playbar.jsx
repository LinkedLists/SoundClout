import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Playbar extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      muted: false,
      repeat: false,
      currentTime: '0:00',
      duration: 0,
      percentPlayed: 0,
      volume: 0.6,
    }

    this.handlePlay = this.handlePlay.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleRepeat = this.handleRepeat.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.timeIncrementer = this.timeIncrementer.bind(this);
    this.prettifyTime = this.prettifyTime.bind(this);
    this.timeIncrementerInstance
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this)
    this.addBarListener = this.addBarListener.bind(this)
    this.handleVolume = this.handleVolume.bind(this)
  }

  componentDidMount() {
    clearInterval(this.timeIncrementerInstance)
    let track = JSON.parse(window.localStorage.getItem("currentTrack"))
    if (track && Object.keys(track).length > 0) {
      this.props.receiveNewTrack(JSON.parse(window.localStorage.getItem("currentTrack")));
    }
  }

  componentWillUnmount() {
    this.props.clearPlaybarState();
    clearInterval(this.timeIncrementerInstance)
  }

  componentDidUpdate() {
    // console.log("i")
  }

  handleChange(e) {
    let audio = this.props.audio
    this.setState( {percentPlayed: e.target.value} )
    audio.currentTime = e.target.value / 100 * audio.duration
  }

  clearState() {
    this.setState({
      muted: false,
      repeat: false,
      currentTime: '0:00',
      duration: 0,
      percentPlayed: 0
    })
  }

  prettifyTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60));
    if (seconds < 10) seconds = '0' + seconds;
    time = minutes + ':' + seconds;
    return time;
  }

  timeIncrementer() {
    let audio = this.props.audio
    let progressBar = document.getElementsByClassName('progress-bar')[0];
    console.log("in time")
    return setInterval(() => {
      console.log("f")
      let percentPlayed = 100 * (audio.currentTime / audio.duration)
      progressBar.style.width = `${percentPlayed}%`;
      this.setState({
        currentTime: this.prettifyTime(audio.currentTime),
        percentPlayed: percentPlayed
      })
    }, 40)
  }

  setDuration() {
    let audio = this.props.audio
    this.setState({
      duration: this.prettifyTime(audio.duration),
      percentPlayed: 0
    })
    this.addBarListener()
    // this.timeIncrementerInstance = this.timeIncrementer()
  }
  
  addBarListener() {
    let playbar = document.getElementsByClassName("progress-timeline-wrapper")[0]
    let width = playbar.getBoundingClientRect().width
    let audio = this.props.audio
    let currentTime
    let percentPlayed
    let x

    // playbar.addEventListener("click", (e) => {
    //   x = e.offsetX + 4;
    //   percentPlayed = (x / width)
    //   currentTime = this.props.audio.duration * percentPlayed

    //   this.setState({
    //     currentTime: this.prettifyTime(currentTime),
    //     percentPlayed: percentPlayed * 100
    //   })
    //   audio.currentTime = currentTime
    // })

    // playbtn.addEventListener("click", (e) => {
    // })

    document.getElementById("logout").addEventListener("click", () => {
      clearInterval(this.timeIncrementerInstance)
      this.props.pauseTrack()
      this.clearState()
    })

    audio.addEventListener("ended", () => {
      clearInterval(this.timeIncrementerInstance)
      this.props.pauseTrack()
      let playbtn = document.getElementsByClassName("track-show-list-item-playbtn")[0]
      playbtn ? playbtn.classList.remove("playing") : null
    })

    audio.addEventListener("play", () => {
      this.timeIncrementerInstance = this.timeIncrementer()
    })

    audio.addEventListener("pause", () => {
      clearInterval(this.timeIncrementerInstance)
    })


    // attempt at media scrubbing by dragging the play ball

    // slider.addEventListener("drag", (e) => {
    //   x = e.offsetX;
      
    //   percentPlayed = ( (x + 8) / width)
    //   currentTime = this.props.audio.duration * percentPlayed

    //   console.log("X Position: " + x);
    //   console.log("percent played " + percentPlayed * 100)
    //   this.setState({
    //     currentTime: this.prettifyTime(currentTime),
    //     percentPlayed: percentPlayed * 100
    //   })
    //   audio.currentTime = currentTime
    //   console.log(this.state.currentTime)

    //   progressBar.style.width = `${percentPlayed * 100}%`
    // })
  }


  handlePlay() {
    let audio = this.props.audio
    if (!this.props.paused) {
      audio.pause()
      audio.removeAttribute("autoPlay")
      clearInterval(this.timeIncrementerInstance)
      this.props.pauseTrack();
    } else {
      this.props.playTrack();
      audio.setAttribute("autoPlay", true)
      audio.play()
      this.timeIncrementerInstance = this.timeIncrementer()
    }
  }

  handleMute(e) {
    if (e.target.className === "thumb" ||
      e.target.className === "volume-control-wrapper") {
        let audio = this.props.audio
        if (this.state.muted) {
          audio.muted = false;
          this.setState( {muted: false} )
        } else {
          audio.muted = true;
          this.setState( {muted: true} )
        }
    }
  }

  handleVolume(e) {
    this.setState( {volume: e.target.value} )
    this.props.audio.volume = this.state.volume;
  }

  handleRepeat() {
    let audio = this.props.audio
    if (this.state.repeat) {
      audio.removeAttribute("loop")
      this.setState( {repeat: false} )
    } else {
      audio.setAttribute("loop", true)
      this.setState( {repeat: true} )
    }
  }

  revealSlider() {
    document.getElementsByClassName('progress-bar2')[0].style.opacity = "1"
  }

  hideSlider() {
    document.getElementsByClassName('progress-bar2')[0].style.opacity = "0"
  }

  render() {
    if (this.props.currentSessionId === null) return <></>
    let audio = this.props.audio
    audio ? audio.volume = this.state.volume : null

    // workaround to styling the input type range
    // color only up to the progress value and fill
    // remaining play time with white
    let progress_bar2 = document.getElementsByClassName("progress-bar2")[0]
    if (progress_bar2) {
      progress_bar2.style.background = `linear-gradient(to right, 
        #f50 0%, 
        #f50 ${progress_bar2.value}%,
        #ccc ${progress_bar2.value}%,
        #ccc 100%`
    }

    return (
      <div className={this.props.currentTrack.id ? "playbar-footer-open" : "playbar-footer-close"}>
          <div className="playbar-footer-wrapper">
            <div className="media-container">
              <audio 
                id='audio' 
                // autoPlay
                onLoadedMetadata={this.setDuration}
                src={this.props.currentTrack.audioUrl} 
              />
              {/* {audio ? audio.volume = this.state.volume : null} */}
              <button onClick={e => e.preventDefault()}> <FontAwesomeIcon icon="step-backward" color="red"/> </button>
              <button 
                onClick={this.handlePlay}>
                  {this.props.paused || audio.ended ? 
                    <FontAwesomeIcon icon="play"/> : 
                    <FontAwesomeIcon icon="pause"/>}
              </button>
              <button onClick={e => e.preventDefault()}> <FontAwesomeIcon icon="step-forward" color="red"/> </button>
              <button onClick={e => e.preventDefault()}> <FontAwesomeIcon icon="random" color="red"/> </button>
              <button 
                onClick={this.handleRepeat}>
                  {this.state.repeat ? 
                    <FontAwesomeIcon icon="redo" color="#f50" /> : 
                    <FontAwesomeIcon icon="redo" /> }
              </button>
            </div>
            <div className="progress-bar-container">
              <div className="progress-current-time">{this.state.currentTime}</div>
              <div className="progress-timeline-wrapper" onMouseEnter={this.revealSlider} onMouseLeave={this.hideSlider}>
                <div className="progress-background">
                  <input 
                    type="range" 
                    className="progress-bar2" 
                    min={0} max={100} step="0.01" 
                    value={audio ? this.state.percentPlayed: this.state.currentTime} 
                    onChange={this.handleChange} />
                  <div className="progress-bar"> <div className="progress-bar-slider"/></div>
                </div>
              </div>
              <div className="progress-duration">{this.state.duration}</div>
            </div>

            <div className="volume-control-container">
              <button 
                onClick={this.handleMute} 
                id="volume-btn">{this.state.muted || (audio && audio.volume === 0) ? 
                  <FontAwesomeIcon icon="volume-mute" /> : <FontAwesomeIcon icon="volume-up" />}
                </button>
              <div className="thumb" onClick={this.handleMute}>
                <div className="volume-control-wrapper">
                  <div className="slider-container" />
                  <input 
                    type="range" 
                    className="slider-background" 
                    min={0} max={1} step="0.01" 
                    onChange={this.handleVolume} 
                    value={this.state.volume}/>
                  {/* <div className="slider-background" /> */}
                  {/* <div className="volume-slider-ball" /> */}
                </div>
              </div>
            </div>

            <div className="current-track-info-container">
              <div className="current-track">
                { 
                  Object.keys(this.props.currentTrack).length > 0 ? 
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
      </div>
    )
  }
}

export default Playbar