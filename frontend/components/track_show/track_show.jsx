import React from 'react';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
    // console.log(this.props.track.id)
    // console.log(this.props.match.params.trackId)
  }

  render() {
    if (this.props.track === undefined) return null;
    // debugger
    return (
      <div className="content-container">
          <img className="content-list-item-img" src={this.props.track.photoUrl}/>
          <div className="content-list-item-description">
            title: {this.props.track.title}
            <br />
            genre: {this.props.track.genre}
            <br/>
            description: {this.props.track.description}
          </div>
          <audio id='audio' src={this.props.track.audioUrl} />
          <button onClick={() => document.getElementById('audio').play()}>play</button>
          <button onClick={() => document.getElementById('audio').pause()}>pause</button>
      </div>
    )
  }
}

export default TrackShow