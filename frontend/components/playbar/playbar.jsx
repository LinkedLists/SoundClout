import React from 'react';

class Playbar extends React.Component {
  constructor(props) {
    super(props);


  }



  playTrack() {
    
  }

  render() {
    if (this.props.currentSessionId === null) return <></>

    return (
      <div className="playbar-footer">
        <audio id='audio' src={this.props.currentTrack.audioUrl} />
        {/* <button onClick={this.playTrack}>play</button> */}
        <button onClick={() => document.getElementById('audio').play()}>play</button>
        <button onClick={() => document.getElementById('audio').pause()}>pause</button>

        <div>
          current song: {this.props.currentTrack.title}
        </div>
      </div>
    )
  }
}

export default Playbar