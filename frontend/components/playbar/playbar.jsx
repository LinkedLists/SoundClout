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
        <div className="playbar-footer-wrapper">
          <div className="media-container">
            <audio id='audio' src={this.props.currentTrack.audioUrl} />
            {/* <button onClick={this.playTrack}>play</button> */}
            <button onClick={() => document.getElementById('audio').play()}>play</button>
            <button onClick={() => document.getElementById('audio').pause()}>pause</button>
          </div>

          <div className="current-track">
            { 
              this.props.currentTrack !== {} ? 
              <img src={this.props.currentTrack.photoUrl} className="current-track-img" /> : <></>
            }
            <div className="current-track-description">
              <div className="description-wrapper" >
                <div>
                  user {this.props.currentTrack.uploader_id}
                </div>
                <div>
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