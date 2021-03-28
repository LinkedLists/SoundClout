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
      percentPlayed: 0
    }

    this.handlePlay = this.handlePlay.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleRepeat = this.handleRepeat.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.timeIncrementer = this.timeIncrementer.bind(this);
    this.prettifyTime = this.prettifyTime.bind(this);
    this.timeIncrementerInstance
    this.handleChange = this.handleChange.bind(this);

    this.addBarListener = this.addBarListener.bind(this)
  }

  componentDidMount() {
    let track = JSON.parse(window.localStorage.getItem("currentTrack"))
    if (track && Object.keys(track).length > 0) {
      this.props.receiveNewTrack(JSON.parse(window.localStorage.getItem("currentTrack")));
    }
  }

  // componentDidMount() {
  //   let audio = document.getElementById('audio')
  //   this.setState( {playing: audio.paused} )
  // }

  // componentDidUpdate() {
    // debugger
    // let audio = document.getElementById('audio')
    // this.setState( {playing: audio.paused} )
  // }

  componentWillUnmount() {
    this.props.clearPlaybarState();
  }

  componentDidUpdate() {
    // console.log("i")
  }

  handleChange(e) {
    let audio = this.props.audio
    audio.currentTime = e.target.value
    this.setState( {percentPlayed: e.target.value} )
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
    let progressBarSlider = document.getElementsByClassName('progress-bar-slider')[0];
    return setInterval(() => {
      // console.log("f")
      let percentPlayed = 100 * (audio.currentTime / audio.duration)
      progressBar.style.width = `${percentPlayed}%`;
      // progressBarSlider.style.width = `${percentPlayed}%`;
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

    


    playbar.addEventListener("click", (e) => {
      x = e.offsetX + 4;
      percentPlayed = (x / width)
      currentTime = this.props.audio.duration * percentPlayed

      this.setState({
        currentTime: this.prettifyTime(currentTime),
        percentPlayed: percentPlayed * 100
      })
      audio.currentTime = currentTime
    })

    // playbtn.addEventListener("click", (e) => {
    // })

    document.getElementById("logout").addEventListener("click", () => {
      clearInterval(this.timeIncrementerInstance)
      this.props.pauseTrack()
      // playbtn.classList.remove("playing");
    })

    audio.addEventListener("ended", () => {
      // this.props.pauseTrack(() => {
      //   let playbtn = document.getElementsByClassName("track-show-list-item-playbtn")[0]
      //   playbtn.classList.remove("playing")
      // })

      this.props.pauseTrack()
      document.getElementsByClassName("track-show-list-item-playbtn")[0].classList.remove("playing");
      // playbtn.classList.remove("playing");
    })

    audio.addEventListener("play", () => {
      this.timeIncrementerInstance = this.timeIncrementer()
      console.log("play")
    })

    audio.addEventListener("pause", () => {
      clearInterval(this.timeIncrementerInstance)
      console.log("pause")
    })



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
      // clearInterval(this.timeIncrementerInstance)
      this.props.pauseTrack();
    } else {
      this.props.playTrack();
      audio.setAttribute("autoPlay", true)
      audio.play()
      // this.timeIncrementerInstance = this.timeIncrementer()
    }
  }

  handleMute() {
    let audio = this.props.audio
    if (this.state.muted) {
      audio.muted = false;
      this.setState( {muted: false} )
    } else {
      audio.muted = true;
      this.setState( {muted: true} )
    }
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
    document.getElementsByClassName('progress-bar-slider')[0].style.opacity = "1"
  }

  hideSlider() {
    document.getElementsByClassName('progress-bar-slider')[0].style.opacity = "0"
  }

  render() {
    if (this.props.currentSessionId === null) return <></>
    let audio = this.props.audio
    
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
              <button onClick={e => e.preventDefault()}> <FontAwesomeIcon icon="step-backward" color="red"/> </button>
              <button onClick={this.handlePlay}>{this.props.paused || audio.ended ? <FontAwesomeIcon icon="play"/> : <FontAwesomeIcon icon="pause"/>}</button>
              <button onClick={e => e.preventDefault()}> <FontAwesomeIcon icon="step-forward" color="red"/> </button>
              <button onClick={e => e.preventDefault()}> <FontAwesomeIcon icon="random" color="red"/> </button>
              <button onClick={this.handleRepeat}>{this.state.repeat ? <FontAwesomeIcon icon="redo" color="#f50" /> : <FontAwesomeIcon icon="redo" /> }</button>
            </div>
            <div className="progress-bar-container">
              <div className="progress-current-time">{this.state.currentTime}</div>
              <div className="progress-timeline-wrapper" onMouseEnter={this.revealSlider} onMouseLeave={this.hideSlider}>
                <div className="progress-background">
                  {/* <input type="range" className="progress-bar2" min={0} max={100} step="1" value={this.state.percentPlayed} onChange={this.handleChange} /> */}
                  <div className="progress-bar"> <div className="progress-bar-slider"/></div>
                </div>
              </div>
              <div className="progress-duration">{this.state.duration}</div>
            </div>


            <div className="volume-control-container">
              <button onClick={this.handleMute} id="volume-btn">{this.state.muted ? <FontAwesomeIcon icon="volume-mute" /> : <FontAwesomeIcon icon="volume-up" />}</button>
              <div className="thumb" onClick={this.handleMute}>
                <div className="volume-control-wrapper">
                  <div className="slider-container" />
                  <div className="slider-background" />
                  <div className="volume-slider-ball" />
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