import React from 'react'
import ReactGA from 'react-ga';
class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.bringBackVolume = this.bringBackVolume.bind(this)
    this.bringDownVolume = this.bringDownVolume.bind(this)
    this.sendTrack = this.sendTrack.bind(this)
    this.generatePlaylist = this.generatePlaylist.bind(this)
    this.intervalUp;
    this.intervalDown;
    this.trackEvent = this.trackEvent.bind(this)
  }

  getRandTrackId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  generatePlaylist() {
    if (this.props.playlist.length === 0) {
      let playlist = []
      let genre = this.props.track.genre
      let tracks = Object.values(this.props.tracks)

      tracks.forEach( track => {
        if (track.genre === genre && track !== this.props.track) {
          playlist.push(track.id)
        }
      })

      let trackKeys = Object.keys(this.props.tracks)
      let randTrackId

      for (let i = 0; i < 120; i++) {
        // Make it more random
        randTrackId = this.getRandTrackId(trackKeys[0], trackKeys[trackKeys.length - 1])
        if (i % 3 === 0) {
          randTrackId = this.getRandTrackId(trackKeys[0], trackKeys[trackKeys.length - 1])
          // Not fun if the same track gets pushed often
          if (playlist.length > 2 &&
            playlist[playlist.length - 1] !== randTrackId && 
            playlist[playlist.length - 2] !== randTrackId) {
                  playlist.push(randTrackId)
          }
        }
      }

      this.props.generatePlaylist(playlist)
    }
  }

  trackEvent(event) {
    ReactGA.event({
      category: 'Play',
      action: 'Played new track',
      label: event.title
    });
  }

  sendTrack() {
    let audio = this.props.audio
    
    if (this.props.track.id !== this.props.currentTrack.id) {
      this.generatePlaylist()
      this.props.sendTrack(this.props.track, () => audio.play())
      this.props.playTrack()
      this.trackEvent(this.props.track)
      window.localStorage.setItem("currentTrack", JSON.stringify(this.props.track))
      audio.setAttribute("autoPlay", true)

      setTimeout(() => {
        audio.paused? audio.play() : null
      }, 10)
    }
    else if (audio.paused) {
      this.props.playTrack()
      audio.setAttribute("autoPlay", true)
      this.bringBackVolume();
      clearInterval(this.intervalDown)

      setTimeout(() => {
        audio.paused ? audio.play() : null
      }, 10)
    } 
    else if (!audio.paused) {
      this.props.pauseTrack()
      this.bringDownVolume()
      clearInterval(this.intervalUp)
      audio.removeAttribute("autoPlay")

      setTimeout(() => {
        !audio.paused ? audio.pause() : null
      }, 10)
    }
  }

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
      <div 
        onClick={this.sendTrack} 
        className={
          !this.props.playbar.paused && this.props.track.id === this.props.currentTrack.id && !audio.ended?
          "variable-playbtn playing" :
          "variable-playbtn"
        }
        id={this.props.track.id}
      />
    )
  }

}

export default PlayButton