import React from 'react'

class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.bringBackVolume = this.bringBackVolume.bind(this)
    this.bringDownVolume = this.bringDownVolume.bind(this)
    this.sendTrack = this.sendTrack.bind(this)
    this.intervalUp;
    this.intervalDown;
  }

  sendTrack() {
    // let playbtn = document.getElementsByClassName("track-show-list-item-playbtn")[0]
    let audio = this.props.audio

    if (this.props.track.id !== this.props.currentTrack.id) {
      this.props.sendTrack(this.props.track, () => audio.play())
      this.props.playTrack()
      window.localStorage.setItem("currentTrack", JSON.stringify(this.props.track))
      // playbtn.classList.add("playing");
      audio.setAttribute("autoPlay", true)

      // failsafe
      setTimeout(() => {
        audio.paused? audio.play() : null
      }, 10)
    }
    else if (audio.paused) {
      this.props.playTrack()
      audio.setAttribute("autoPlay", true)
      this.bringBackVolume();
      clearInterval(this.intervalDown)
      // playbtn.classList.add("playing");

      // failsafe
      setTimeout(() => {
        // playbtn.classList.add("playing");
        audio.paused ? audio.play() : null
      }, 10)
    } 
    else if (!audio.paused) {
      this.props.pauseTrack()
      this.bringDownVolume()
      clearInterval(this.intervalUp)
      audio.removeAttribute("autoPlay")
      // playbtn.classList.remove("playing");

      // failsafe
      setTimeout(() => {
        // playbtn.classList.remove("playing");
        !audio.paused ? audio.pause() : null
      }, 10)
    }
  }

  // volume swells to gradually change volume on pause/play
  // so that user does not experience abrupt volume changes
  bringBackVolume() {
    const volume = document.getElementsByClassName("slider-background")[0].value
    if (volume) {
      this.props.audio.volume === 0 ? null : this.props.audio.volume = 0.01;
      this.props.audio.play()
      this.intervalUp = setInterval(() => {
        if (this.props.audio.volume <= (volume - volume/60 )) {
          if (volume/60 === 0 ) {
            this.props.audio.volume = volume
            clearInterval(this.intervalUp)
          }
          this.props.audio.volume += volume/60 
        } else {
          this.props.audio.volume = volume
          clearInterval(this.intervalUp)
        }
      }, 3)
    }
  }

  bringDownVolume() {
    const volume = document.getElementsByClassName("slider-background")[0].value
    if (volume) {
      this.intervalDown = setInterval(() => {
        if (this.props.audio.volume >= volume/60 ) {
          if (volume/60 === 0 ) {
            this.props.audio.pause()
            clearInterval(this.intervalDown)
          }
          this.props.audio.volume -= volume/60 
        } else {
          this.props.audio.pause()
          clearInterval(this.intervalDown)
        }
      }, 3)
    }
  }

  render() {
    return (
      // <div>
        <div 
          onClick={this.sendTrack} 
          className={
            !this.props.playbar.paused && this.props.track.id === this.props.currentTrack.id && !audio.ended?
            "variable-playbtn playing" :
            "variable-playbtn"
          }
          id={this.props.track.id}
        />
      // </div>
    )
  }

}

export default PlayButton