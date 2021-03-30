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
      mounted: false
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
    this.bringBackVolume = this.bringBackVolume.bind(this)
    this.bringDownVolume = this.bringDownVolume.bind(this)

    // Set instance variable that will get assigned to a setInterval ID
    // during volume swelling. Prevent a play/pause async error
    // when a user spam clicks play/pause by clearing the other asyc process
    this.intervalUp;
    this.intervalDown;
  }

  componentDidMount() {
    clearInterval(this.timeIncrementerInstance)
    if (this.props.currentSessionId) {
      let track = JSON.parse(window.localStorage.getItem("currentTrack"))
      if (track && Object.keys(track).length > 0) {
        this.props.receiveNewTrack(JSON.parse(window.localStorage.getItem("currentTrack")));
      }
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
    clearInterval(this.timeIncrementerInstance)
    this.setState({
      muted: false,
      repeat: false,
      currentTime: '0:00',
      duration: this.prettifyTime(this.props.audio.duration),
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
    let progressBar2 = document.getElementsByClassName('progress-bar2')[0];
    console.log("in time")
    this.timeIncrementerInstance = setInterval(() => {
      // console.log("f")
      let percentPlayed = 100 * (audio.currentTime / audio.duration)
      progressBar.style.width = `${percentPlayed}%`;
      if (progressBar2) {
        progressBar2.value = percentPlayed
      } else {
        progressBar2.value = 0
      }
      this.setState({
        currentTime: this.prettifyTime(audio.currentTime),
        percentPlayed: percentPlayed
      })
    }, 40)
  }

  setDuration() {
    console.log("meta loaded")
    let audio = this.props.audio
    // bandaid fix. Some reason when page intially loads there is 
    // an error where the state does not exist yet
    if (audio) {
      audio ? audio.volume = this.state.volume : null
      if (!this.timeIncrementerInstance && !audio.paused) {
        this.timeIncrementer();
      }
  
      this.setState({
        duration: this.prettifyTime(audio.duration),
        percentPlayed: 0
      })
  
      // EVENT LISTENERS ARE ALL UNIQUE!!!
      // I need to make sure that event listeners will
      // only ever be called once
      if (!this.state.mounted) {
        this.addBarListener()
        this.setState( {mounted: true} )
      }
    }
  }
  
  addBarListener() {
    let playbtn = document.getElementsByClassName("track-show-list-item-playbtn")[0]
    let playbar = document.getElementsByClassName("progress-timeline-wrapper")[0]
    let progressBar = document.getElementsByClassName("progress-bar")[0]
    let width = playbar.getBoundingClientRect().width
    let audio = this.props.audio
    let currentTime
    let percentPlayed
    let x

    // Although there is an input type range that handles play timeline,
    // this is still necessary because it makes the pseudo hover effect possible.
    // There is no solution that I know of that allows for thumb only hover
    playbar.addEventListener("click", (e) => {
      x = e.offsetX + 4;
      percentPlayed = (x / width)
      currentTime = this.props.audio.duration * percentPlayed
      progressBar.style.width = `${percentPlayed * 100}%`
      this.setState({
        currentTime: this.prettifyTime(currentTime),
        percentPlayed: percentPlayed * 100
      })
      audio.currentTime = currentTime
    })

    // playbtn.addEventListener("click", (e) => {
    // })
    if (this.props.currentSessionId) {
      document.getElementById("logout").addEventListener("click", () => {
        clearInterval(this.timeIncrementerInstance)
        this.props.pauseTrack()
        this.clearState()
      })
    }

    // NOTE: looping is continous play and does not end or pause a track
    audio.addEventListener("ended", () => {
      console.log("track ended")
      clearInterval(this.timeIncrementerInstance)
      this.props.pauseTrack()
      
      playbtn ? playbtn.classList.remove("playing") : null
      this.clearState()
    })

    audio.addEventListener("play", () => {
      console.log("track is played")
      if (this.timeIncrementerInstance) {
        clearInterval(this.timeIncrementerInstance)
        this.timeIncrementer()
      } else {
        this.timeIncrementer()
      }
      
    })

    audio.addEventListener("pause", () => {
      console.log("track is paused")
      clearInterval(this.timeIncrementerInstance)
      
    })
  }

  // volume swells to gradually change volume on pause/play
  // so that user does not experience abrupt volume changes
  bringBackVolume(playbtn) {
    playbtn ? playbtn.classList.add("playing") : null

    // This ternary is NECESSARY for the volume/mute icon.
    // If volume was set to mute or 0 by user then do not allow the audio
    // volume to deviate from 0; otherwise, the mute icon will have
    // a sudden jitter. 
    this.props.audio.volume === 0 ? 
      null : this.props.audio.volume = 0.01

    this.props.audio.play()
    this.intervalUp = setInterval(() => {
      console.log("up")
      if (this.props.audio.volume <= (this.state.volume - this.state.volume/60 )) {
        if (this.state.volume/60 === 0 ) {
          this.props.audio.volume = this.state.volume
          clearInterval(this.intervalUp)
        }
        this.props.audio.volume += this.state.volume/60 
      } else {
        this.props.audio.volume = this.state.volume
        clearInterval(this.intervalUp)
      }
    }, 3)
  }

  bringDownVolume(playbtn) {
    playbtn ? playbtn.classList.remove("playing") : null
    this.intervalDown = setInterval(() => {
      // console.log("down")
      if (this.props.audio.volume >= this.state.volume/60 ) {
        if (this.state.volume/60 === 0 ) {
          // this.props.audio.volume = 0
          this.props.audio.pause()
          clearInterval(this.intervalDown)
        }
        this.props.audio.volume -= this.state.volume/60 
      } else {
        // this.props.audio.volume = 0
        this.props.audio.pause()
        clearInterval(this.intervalDown)
      }
    }, 3)
  }


  handlePlay() {
    let playbtn = document.getElementsByClassName("track-show-list-item-playbtn")[0]
    let audio = this.props.audio
    if (!this.props.paused) {
      // audio.pause()
      this.bringDownVolume(playbtn);
      clearInterval(this.intervalUp)
      clearInterval(this.timeIncrementerInstance)

      audio.removeAttribute("autoPlay")
      this.props.pauseTrack();
    } else {
      // audio.play()
      this.bringBackVolume(playbtn)

      clearInterval(this.intervalDown)
      this.props.playTrack();
      audio.setAttribute("autoPlay", true)
      if (this.timeIncrementerInstance) {
        clearInterval(this.timeIncrementerInstance)
        this.timeIncrementer()
      } else {
        this.timeIncrementer()
      }
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
    this.props.audio.volume = e.target.value
    this.setState( {volume: e.target.value} )
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

    // Workaround to styling the input type range:
    // Color only up to the progress value and fill
    // remaining play time with white
    let progress_bar2 = document.getElementsByClassName("progress-bar2")[0]
    if (progress_bar2) {
      progress_bar2.style.background = `linear-gradient(to right, 
        #f50 0%, 
        #f50 ${progress_bar2.value}%,
        #ccc ${progress_bar2.value}%,
        #ccc 100%`
    }

    let volumeIcon;
    if (audio) {
      if (this.state.muted || audio.volume === 0) {
        volumeIcon = <FontAwesomeIcon icon="volume-mute" />
      }
      else if(!this.state.muted && this.state.volume < 0.35){
        volumeIcon = <FontAwesomeIcon icon="volume-down" />
      }
      else{
        volumeIcon = <FontAwesomeIcon icon="volume-up" />
      }
    }

    return (
      <div className={this.props.currentTrack.id ? "playbar-footer-open" : "playbar-footer-close"}>
          <div className="playbar-footer-wrapper">
            <div className="media-container">
              {/* Autoplay should not be included or else the 
              user will have music on autoplay on refresh. */}
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
                    defaultValue={0}
                    onChange={this.handleChange} />
                  <div className="progress-bar"> <div className="progress-bar-slider"/></div>
                </div>
              </div>
              <div className="progress-duration">{this.state.duration}</div>
            </div>

            <div className="volume-control-container">
              <button 
                onClick={this.handleMute} 
                id="volume-btn">{volumeIcon}
                </button>
              <div className="thumb" onClick={this.handleMute}>
                <div className="volume-control-wrapper">
                  <div className="slider-container" />
                  <input 
                    type="range" 
                    className="slider-background" 
                    min={0} max={1} step="0.01" 
                    onChange={this.handleVolume} 
                    value={ audio ? this.state.volume : 0.6}/>
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
                      {this.props.currentTrack.username}
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