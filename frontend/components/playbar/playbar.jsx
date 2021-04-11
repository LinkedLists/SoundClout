import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Playlist from '../playlist/playlist_container'
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
      mounted: false,
      shuffle: false,
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
    this.getNextTrackAuto = this.getNextTrackAuto.bind(this)
    this.getNextTrackManual = this.getNextTrackManual.bind(this)
    this.getPrevTrackManual = this.getPrevTrackManual.bind(this)
    this.setShuffle = this.setShuffle.bind(this)
    this.setHistory = this.setHistory.bind(this)
    this.prevVolume;

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
      if (track && Object.keys(track).length > 0 && !this.props.currentTrack.id) {
        this.props.refreshTrack(JSON.parse(window.localStorage.getItem("currentTrack")));
      }
    }
    // let history 
    // if (window.localStorage.getItem("history") && window.localStorage.getItem("history").length !== 0) {
    //   history = JSON.parse(window.localStorage.getItem("history"))
    //   this.props.receiveHistory(JSON.parse(window.localStorage.getItem("history")))
    //   // fail safe
    //   setTimeout(() => {
    //     if (window.localStorage.getItem("history").length !== 0) {
    //       history = JSON.parse(window.localStorage.getItem("history"))
    //       this.props.receiveHistory(JSON.parse(window.localStorage.getItem("history")))
    //     }
    //   }, 40)
    // }
  }

  componentWillUnmount() {
    this.props.clearPlaybarState();
    clearInterval(this.timeIncrementerInstance)
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
    this.timeIncrementerInstance = setInterval(() => {
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
    let audio = this.props.audio
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
    // There is no solution that I know of that allows for thumb only hover via css
    playbar.addEventListener("click", (e) => {
      // slider ball has a radius of 4
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

    if (this.props.currentSessionId) {
      document.getElementById("logout").addEventListener("click", () => {
        clearInterval(this.timeIncrementerInstance)
        this.props.pauseTrack()
        this.clearState()
      })
    }

    // NOTE: looping is continous play and does not end or pause a track
    audio.addEventListener("ended", () => {
      console.log("audio has ended")
      // loop does not trigger on end event so this is redundant 
      if (!this.props.audio.loop) {
        let numTracks = Object.keys(this.props.track).length
        if (this.props.currentTrack.id + 1 in this.props.track) {
          let nextTrack = this.props.track[this.props.currentTrack.id + 1]
          this.props.sendTrack(nextTrack)
          window.localStorage.setItem('currentTrack', JSON.stringify(nextTrack))
          this.setHistory()
        } else {
          // idk what else to do if ur at the end
          clearInterval(this.timeIncrementerInstance)
          this.props.pauseTrack()
          playbtn ? playbtn.classList.remove("playing") : null
          this.clearState()
          
          // failsafe
          setTimeout(() => {
            audio.ended ? () => {
              clearInterval(this.timeIncrementerInstance)
              this.props.pauseTrack()
              playbtn ? playbtn.classList.remove("playing") : null
              this.clearState()
            } : null
          }, 10)
        }
      }
      // this.getNextTrackAuto()
    })

    audio.addEventListener("play", () => {
      this.props.playTrack()
    })

    audio.addEventListener("pause", () => {
      this.props.pauseTrack()
    })
  }

  setHistory() {
    window.localStorage.setItem("history", JSON.stringify(this.props.trackHistory))
    setTimeout(() => {
      let history = JSON.parse(window.localStorage.getItem("history"))
      if (history.length !== this.props.trackHistory.length) {
        window.localStorage.setItem("history", JSON.stringify(this.props.trackHistory))
      }
    }, 70)
  }

  getNextTrackAuto() {
    if (!this.props.audio.loop) {
      let numTracks = Object.keys(this.props.track).length
      if (this.props.currentTrack.id + 1 in this.props.track) {
        this.props.sendTrack(this.props.track[this.props.currentTrack.id + 1])
      } else {
        // idk what to do if ur at the end
      }
    }
  }

  getNextTrackManual() {
    let numTracks = Object.keys(this.props.track).length
    if (this.props.currentTrack.id + 1 in this.props.track) {
      let nextTrack = this.props.track[this.props.currentTrack.id + 1]
      this.props.sendTrack(nextTrack)
      window.localStorage.setItem('currentTrack', JSON.stringify(nextTrack))
      this.setHistory()
    }
  }

  getPrevTrackManual() {
    let numTracks = Object.keys(this.props.track).length
    if (this.props.currentTrack.id - 1 in this.props.track) {
      let prevTrack = this.props.track[this.props.currentTrack.id - 1]
      this.props.sendTrack(prevTrack)
      window.localStorage.setItem('currentTrack', JSON.stringify(prevTrack))
      this.setHistory()
    }
  }

  setShuffle() {
    if (this.state.shuffle) {
      this.setState( {shuffle: false} )
    } else {
      this.setState( {shuffle: true} )
    }
  }

  getRandInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // volume swells to gradually change volume on pause/play
  // so that user does not experience abrupt volume changes
  bringBackVolume(playbtn) {
    // Only change the track show play button if its the same as current track.
    // playbtn ternary maybe redundant but Heroku is very slow to load DOM
    if (this.props.track.id === this.props.currentTrack.id) {
      playbtn ? playbtn.classList.add("playing") : null
    }

    // This ternary is NECESSARY for the volume/mute icon.
    // If volume was set to mute or 0 by user then do not allow the audio
    // volume to deviate from 0; otherwise, the mute icon will have
    // a sudden jitter. 
    this.props.audio.volume === 0 ? 
      null : this.props.audio.volume = 0.01

    this.props.audio.play()
    this.intervalUp = setInterval(() => {
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


    // from event listener
    if (this.timeIncrementerInstance) {
      clearInterval(this.timeIncrementerInstance)
      this.timeIncrementer()
    } else {
      this.timeIncrementer()
    }
    playbtn ? playbtn.classList.add("playing") : null
    
    // failsafe
    setTimeout(() => {
      playbtn ? playbtn.classList.add("playing") : null
      audio.paused ? audio.play() : null
    }, 20)

  }

  bringDownVolume(playbtn) {
    playbtn ? playbtn.classList.remove("playing") : null
    this.intervalDown = setInterval(() => {
      if (this.props.audio.volume >= this.state.volume/60 ) {
        if (this.state.volume/60 === 0 ) {
          this.props.audio.pause()
          clearInterval(this.intervalDown)
        }
        this.props.audio.volume -= this.state.volume/60 
      } else {
        this.props.audio.pause()
        clearInterval(this.intervalDown)
      }
    }, 3)

    // from event listener
    clearInterval(this.timeIncrementerInstance)
      playbtn ? playbtn.classList.remove("playing") : null

      // failsafe
      setTimeout(() => {
        clearInterval(this.timeIncrementerInstance)
        playbtn ? playbtn.classList.remove("playing") : null
      }, 20)

  }


  handlePlay() {
    let playbtn = document.getElementsByClassName("track-show-list-item-playbtn")[0]
    let audio = this.props.audio
    if (!this.props.paused) {
      this.bringDownVolume(playbtn);
      clearInterval(this.intervalUp)
      clearInterval(this.timeIncrementerInstance)
      audio.removeAttribute("autoPlay")
      this.props.pauseTrack();
    } else {
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
    let volume = document.getElementsByClassName("slider-background")[0]
    if (e.target.className === "thumb" ||
    e.target.className === "volume-control-wrapper") {
      if (this.props.audio.volume !== 0) {
        this.prevVolume = this.props.audio.volume
        this.props.audio.volume = 0
        volume.value = 0
      } 
      else if (this.props.audio.volume === 0) {
        volume.value = this.prevVolume
        this.props.audio.volume = this.state.volume
      }
      else {
        volume.value = 0
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
    let volume = document.getElementsByClassName("slider-background")[0]

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
    if (volume) {
      if (volume.value === 0 || audio.volume === 0) {
        volumeIcon = <FontAwesomeIcon icon="volume-mute" />
      }
      else if(volume.value < 0.35){
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
              <button onClick={this.getPrevTrackManual}> <FontAwesomeIcon icon="step-backward"/> </button>
              <button 
                onClick={this.handlePlay}>
                  {
                  // this.props.paused || audio.ended ? 
                  this.props.paused ? 
                    <FontAwesomeIcon icon="play"/> : 
                    <FontAwesomeIcon icon="pause"/>}
              </button>
              <button onClick={this.getNextTrackManual}> <FontAwesomeIcon icon="step-forward" /> </button>
              {/* <button onClick={e => e.preventDefault()}> <FontAwesomeIcon icon="random" color="red"/> </button> */}
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
                    defaultValue={0.6}
                    />
                </div>
              </div>
            </div>

            <div className="current-track-info-container">
              <div className="current-track">
                { 
                  Object.keys(this.props.currentTrack).length > 0 ? 
                  <Link to={`/users/${this.props.currentTrack.uploader_id}`}>
                    <img src={this.props.currentTrack.photoUrl} className="current-track-img" /> 
                  </Link> : 
                  <></>
                }
                <div className="current-track-description">
                  <div className="description-wrapper" > 
                    <Link to={`/users/${this.props.currentTrack.uploader_id}`} className="current-track-username noselect">
                      {this.props.currentTrack.username}
                    </Link>
                    <Link to={`/tracks/${this.props.currentTrack.id}`} className="current-track-title noselect">
                      {this.props.currentTrack.title}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Playlist />

            {/* <span id="playlist-icon">
              <i className="fas fa-bars fa-lg"></i>
              <i className="fas fa-play playlist"></i>
            </span> */}
          </div>
      </div>
    )
  }
}

export default Playbar