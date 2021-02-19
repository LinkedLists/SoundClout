import React from 'react';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);

    this.sendTrack = this.sendTrack.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
    // console.log(this.props.track.id)
    // console.log(this.props.match.params.trackId)
  }


  sendTrack() {
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
          <img className="content-list-item-img" src={this.props.track.photoUrl}/>
          <div className="content-list-item-description">
            Title: {this.props.track.title}
            <br />
            Genre: {this.props.track.genre}
            <br/>
            Description: {this.props.track.description}
          </div>
          {/* <audio id='audio' src={this.props.track.audioUrl} /> */}
          <button onClick={this.sendTrack}>play</button>
          {/* <button onClick={() => document.getElementById('audio').play()}>play</button> */}
          <button onClick={() => document.getElementById('audio').pause()}>pause</button>
      </div>
    )
  }
}

export default TrackShow