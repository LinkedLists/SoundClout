import React from 'react';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);

    this.sendTrack = this.sendTrack.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
  }


  sendTrack() {
    // .play() has an issue of being async
    // made attempts to solve this by doing try catches and promises

    // let pausePromise = document.getElementById('audio').pause();
    // let playPromise = document.getElementById('audio').play();

    // if (this.props.currentTrack.paused === false) {

    if (this.props.currentTrack.paused !== false) {
      document.getElementById('audio').pause();
      this.props.playTrack()
      this.props.sendTrack(this.props.track)
      document.getElementById('audio').play();
    } else {
      this.props.pauseTrack()
      this.props.sendTrack(this.props.track)
      document.getElementById('audio').play()
    }
  }


  render() {
    if (this.props.track === undefined) return null;
    // debugger
    return (
      <div className="content-container">
        <div className="track-show-container">
          
          <img className="track-show-list-item-img" src={this.props.track.photoUrl}/>
          <div className="track-show-list-item-description">
            <div className="track-show-list-item-uploader">{this.props.track.uploader_id}</div>
            <div className="track-show-list-item-title">{this.props.track.title}</div>
            {/* <div className="track-show-description">Description: {this.props.track.description}</div> */}
          </div>
          {/* <audio id='audio' src={this.props.track.audioUrl} /> */}
          {/* <button onClick={() => document.getElementById('audio').play()}>play</button> */}
          <button onClick={this.sendTrack}>play (double click)</button>
          <button onClick={() => document.getElementById('audio').pause()}>pause</button>
        </div>
      </div>
    )
  }
}

export default TrackShow