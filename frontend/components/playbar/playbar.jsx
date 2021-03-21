import React from 'react';

class Playbar extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      playing: false,
      muted: false
    }

    this.handlePlay = this.handlePlay.bind(this);
    this.handleMute = this.handleMute.bind(this);
  }

  // componentDidMount() {
  //   let audio = document.getElementById('audio')
  //   this.setState( {playing: audio.paused} )
  // }

  // componentDidUpdate() {
  //   let audio = document.getElementById('audio')
  //   this.setState( {playing: audio.paused} )
  // }

  handlePlay() {
    let audio = document.getElementById('audio')
    if (this.state.playing) {
      audio.pause()
      this.setState( {playing: false} )
    } else {
      audio.play()
      this.setState( {playing: true} )
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

  render() {
    if (this.props.currentSessionId === null) return <></>
    return (
      <div className="playbar-footer">
        <div className="playbar-footer-wrapper">
          <div className="media-container">
            <audio id='audio' src={this.props.currentTrack.audioUrl} />
            <button onClick={this.handlePlay}>{this.state.playing ? "Pause" : "Play"}</button>
            {/* <button onClick={() => audio.pause()}>pause</button> */}
            <button onClick={this.handleMute}>{this.state.muted ? "Unmute" : "Mute"}</button>
            {/* <button onClick={() => audio.muted = false}>unmute</button> */}
          </div>
          <div className="current-track">
            { 
              // this ternary is not working
              this.props.currentTrack !== undefined ? 
              <img src={this.props.currentTrack.photoUrl} className="current-track-img" /> : <></>
            }
            <div className="current-track-description">
              <div className="description-wrapper" >
                <div>
                  user {this.props.currentTrack.uploader_id}
                </div>
                <div className="current-track-title">
                  {this.props.currentTrack.title}
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