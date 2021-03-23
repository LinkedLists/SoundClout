import React from 'react';

class Playbar extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
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

  componentWillUnmount() {
    this.props.clearPlaybarState();
  }

  handlePlay() {
    let audio = document.getElementById('audio')
    if (!this.props.paused) {
      audio.pause()
      this.props.pauseTrack();
    } else {
      this.props.playTrack();
      audio.play()
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
            <audio id='audio' autoPlay src={this.props.currentTrack.audioUrl} />
            <button onClick={this.handlePlay}>{this.props.paused ? <i className="fas fa-play"/> : <i className="fas fa-pause"/>}</button>
            <button onClick={this.handleMute}>{this.state.muted ? <i className="fas fa-volume-mute"/> : <i className="fas fa-volume-up"/>}</button>
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