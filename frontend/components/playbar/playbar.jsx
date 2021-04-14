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
      duration: '0:00',
      percentPlayed: 0,
      volume: 0.6,
      mounted: false,
      shuffle: false,
    }

    this.handlePlay = this.handlePlay.bind(this);
    this.handleRepeat = this.handleRepeat.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.timeIncrementer = this.timeIncrementer.bind(this);
    this.prettifyTime = this.prettifyTime.bind(this);
    
    this.handleMute = this.handleMute.bind(this);
    this.handleVolume = this.handleVolume.bind(this)
    this.bringBackVolume = this.bringBackVolume.bind(this)
    this.bringDownVolume = this.bringDownVolume.bind(this)
    this.prevVolume;

    // Event listeners
    this.addBarListener = this.addBarListener.bind(this)
    this.addPlaybarClickListener = this.addPlaybarClickListener.bind(this)
    this.addAudioEndListener = this.addAudioEndListener.bind(this)
    this.handleEnd = this.handleEnd.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.timeIncrementerInstance
    
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this)
    this.getNextTrackAuto = this.getNextTrackAuto.bind(this)
    this.getNextTrackManual = this.getNextTrackManual.bind(this)
    this.getPrevTrackManual = this.getPrevTrackManual.bind(this)
    this.setShuffle = this.setShuffle.bind(this)
    this.setPlaylist = this.setPlaylist.bind(this)

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
  }

  componentWillUnmount() {
    this.props.clearPlaybarState();
    clearInterval(this.timeIncrementerInstance)
  }

  handleChange(e) {
    let audio = this.props.audio
    if (e.target.value <= 0) {
      this.setState( {percentPlayed: 0} )
      audio.currentTime = 0
    } else {
      this.setState( {percentPlayed: e.target.value} )
      audio.currentTime = e.target.value / 100 * audio.duration
    }
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
   let audio = this.props.audio

   this.addPlaybarClickListener(progressBar, playbar)
   this.addAudioEndListener(playbtn)

   audio.addEventListener("play", () => {
     this.props.playTrack()
   })

   audio.addEventListener("pause", () => {
     this.props.pauseTrack()
   })
 }

  addPlaybarClickListener(progressBar, playbar) {
    let currentTime
    let percentPlayed
    let width = playbar.getBoundingClientRect().width
    let x
    let audio = this.props.audio

    playbar.addEventListener("click", (e) => {
      x = e.offsetX + 4;
      percentPlayed = (x / width)
      currentTime = audio.duration * percentPlayed
      progressBar.style.width = `${percentPlayed * 100}%`
      this.setState({
        currentTime: this.prettifyTime(currentTime),
        percentPlayed: percentPlayed * 100
      })
      audio.currentTime = currentTime
    })
  }

  handleEnd(playbtn) {
    if (!this.getNextTrackAuto()) {
      clearInterval(this.timeIncrementerInstance)
      this.props.pauseTrack()
      playbtn ? playbtn.classList.remove("playing") : null
      this.clearState()
    }
  }
  
  addAudioEndListener(playbtn) {
    let audio = this.props.audio
    // NOTE: looping is continous play and does not end or pause a track
    audio.addEventListener("ended", () => {
      this.handleEnd(playbtn)

      setTimeout(() => {
        audio.ended ? () => {
         this.handleEnd(playbtn)
        } : null
      }, 30)
    })
  }
  
  handleLogout() {
    if (this.props.currentSessionId) {
      document.getElementById("logout").addEventListener("click", () => {
        clearInterval(this.timeIncrementerInstance)
        this.props.pauseTrack()
        this.clearState()
      })
    }
  }

  setPlaylist(next = this.props.nextTrack, prev = this.props.prevTracks) {
    window.localStorage.setItem("prevTracks", JSON.stringify(prev))
    window.localStorage.setItem("nextTrack", JSON.stringify(next))
  }

  getRandTrack(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  getNextTrackAuto() {
    if (!this.props.audio.loop) {
      let { nextTrack, track, currentTrack } = this.props
      if (nextTrack.length > 0) {
        let nextTrackKey = nextTrack[nextTrack.length - 1]
        this.props.sendNextTrack(track[nextTrackKey])
        window.localStorage.setItem("currentTrack", JSON.stringify(track[nextTrackKey]))
      }
      else if (this.state.shuffle) {
        let trackKeys = Object.keys(track)
        let randKey = this.getRandTrack(trackKeys[0], trackKeys[trackKeys.length - 1])
        this.props.sendTrack(track[randKey])
        window.localStorage.setItem("currentTrack", JSON.stringify(track[randKey]))
      }
      else if (this.props.playlist.length > 0) {
        let next = track[this.props.playlist[0]]
        this.props.sendTrack(next)
        this.props.shiftPlaylist()
        window.localStorage.setItem("currentTrack", JSON.stringify(next))
      }
      else if (currentTrack.id + 1 in track) {
        let nextTrack = track[currentTrack.id + 1]
        this.props.sendTrack(nextTrack)
        window.localStorage.setItem('currentTrack', JSON.stringify(nextTrack))
      } else {
        return false
      }
    }
    return true
  }

  getNextTrackManual() {
    let { nextTrack, track, currentTrack } = this.props
    if (nextTrack.length > 0) {
      let nextTrackKey = nextTrack[nextTrack.length - 1]
      this.props.sendNextTrack(track[nextTrackKey])
      window.localStorage.setItem("currentTrack", JSON.stringify(track[nextTrackKey]))
    }
    else if (this.state.shuffle) {
      let trackKeys = Object.keys(track)
      let randKey = this.getRandTrack(trackKeys[0], trackKeys[trackKeys.length - 1])
      this.props.sendTrack(track[randKey])
      window.localStorage.setItem("currentTrack", JSON.stringify(track[randKey]))
    }
    else if (this.props.playlist.length > 0) {
      let next = track[this.props.playlist[0]]
      this.props.sendTrack(next)
      this.props.shiftPlaylist()
      window.localStorage.setItem("currentTrack", JSON.stringify(next))
    }
    else if (currentTrack.id + 1 in track) {
      let nextTrack = track[currentTrack.id + 1]
      this.props.sendTrack(nextTrack)
      window.localStorage.setItem('currentTrack', JSON.stringify(nextTrack))
    }
  }

  getPrevTrackManual() {
    let prevTrackKey 
    let { prevTracks, track, currentTrack } = this.props
    if (prevTracks.length > 0) {
      let length = prevTracks.length
      prevTrackKey = prevTracks[length - 1]
      if (prevTrackKey === currentTrack.id && length > 1) {
        prevTrackKey = prevTracks[length - 2]
        this.props.burpPrevTrack(currentTrack)  
        this.props.sendPrevTrack(track[prevTrackKey])
      }
      window.localStorage.setItem("currentTrack", JSON.stringify(track[prevTrackKey]))
    }
  }

  setShuffle() {
    if (this.state.shuffle) {
      this.setState( {shuffle: false} )
    } else {
      this.setState( {shuffle: true} )
    }
  }

  // volume swells to gradually change volume on pause/play
  // so that user does not experience abrupt volume changes
  bringBackVolume(playbtn) {
    let {audio} = this.props
    // This ternary is NECESSARY for the volume/mute icon.
    // If volume was set to mute or 0 by user then do not allow the audio
    // volume to deviate from 0; otherwise, the mute icon will have
    // a sudden jitter. 
    audio.volume === 0 ? 
      null : audio.volume = 0.01

    audio.play()
    this.intervalUp = setInterval(() => {
      if (audio.volume <= (this.state.volume - this.state.volume/60 )) {
        if (this.state.volume/60 === 0 ) {
          audio.volume = this.state.volume
          clearInterval(this.intervalUp)
        }
        audio.volume += this.state.volume/60 
      } else {
        audio.volume = this.state.volume
        clearInterval(this.intervalUp)
      }
    }, 3)


    if (this.timeIncrementerInstance) {
      clearInterval(this.timeIncrementerInstance)
      this.timeIncrementer()
    } else {
      this.timeIncrementer()
    }
    playbtn ? playbtn.classList.add("playing") : null
    
    setTimeout(() => {
      playbtn ? playbtn.classList.add("playing") : null
      audio.paused ? audio.play() : null
    }, 20)

  }

  bringDownVolume(playbtn) {
    let {audio} = this.props
    playbtn ? playbtn.classList.remove("playing") : null
    this.intervalDown = setInterval(() => {
      if (audio.volume >= this.state.volume/60 ) {
        if (this.state.volume/60 === 0 ) {
          audio.pause()
          clearInterval(this.intervalDown)
        }
        audio.volume -= this.state.volume/60 
      } else {
        audio.pause()
        clearInterval(this.intervalDown)
      }
    }, 3)

    clearInterval(this.timeIncrementerInstance)
      playbtn ? playbtn.classList.remove("playing") : null

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
    let {audio} = this.props
    let volume = document.getElementsByClassName("slider-background")[0]
    if (e.target.className === "thumb" ||
    e.target.className === "volume-control-wrapper") {
      if (audio.volume !== 0) {
        this.prevVolume = audio.volume
        audio.volume = 0
        volume.value = 0
      } 
      else if (audio.volume === 0) {
        volume.value = this.prevVolume
        audio.volume = this.state.volume
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

    let progress_bar2 = document.getElementsByClassName("progress-bar2")[0]
    if (progress_bar2) {
      progress_bar2.style.background = `linear-gradient(to right, 
        #f50 0%, 
        #f50 ${progress_bar2.value}%,
        #ccc ${progress_bar2.value}%,
        #ccc 100%`
    }

    let volumeIcon;
    if (volume && audio) {
      if (volume.value === 0 || audio.volume === 0) {
        volumeIcon = <FontAwesomeIcon icon="volume-mute" className="scale-icon"/>
      }
      else if(volume.value < 0.35){
        volumeIcon = <FontAwesomeIcon icon="volume-down" className="scale-icon" />
      }
      else{
        volumeIcon = <FontAwesomeIcon icon="volume-up" className="scale-icon" />
      }
    }

    return (
      <div className={this.props.currentTrack.id ? "playbar-footer-open" : "playbar-footer-close"}>
          <div className="playbar-footer-wrapper">
            <div className="media-container">
              <audio 
                id='audio' 
                onLoadedMetadata={this.setDuration}
                src={this.props.currentTrack.audioUrl} 
              />
              <button onClick={this.getPrevTrackManual}> <FontAwesomeIcon icon="step-backward"/> </button>
              <button 
                onClick={this.handlePlay}>
                  {
                  this.props.paused ? 
                    <FontAwesomeIcon icon="play"/> : 
                    <FontAwesomeIcon icon="pause"/>}
              </button>
              <button onClick={this.getNextTrackManual}> <FontAwesomeIcon icon="step-forward" /> </button>
              <button onClick={this.setShuffle}> 
              {
                this.state.shuffle ? 
                  <FontAwesomeIcon icon="random" color="red" className="scale-icon"/> :
                  <FontAwesomeIcon icon="random" className="scale-icon"/>
              }
              </button>
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
                  <Link to={`/tracks/${this.props.currentTrack.id}`}>
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
            <Playlist shuffle={this.state.shuffle}/>
          </div>
      </div>
    )
  }
}

export default Playbar