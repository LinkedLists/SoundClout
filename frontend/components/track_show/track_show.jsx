import React from 'react';
import { Redirect } from 'react-router-dom';
import Modal from "../modal/modal"


class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showEdit: false,
      track: this.props.track
    }

    this.track = this.props.track


    this.deleted = false;

    this.sendTrack = this.sendTrack.bind(this)
    this.deleteTrack = this.deleteTrack.bind(this)

    // this.showEdit = this.showEdit.bind(this)
    // this.closeEdit = this.closeEdit.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
  }

  deleteTrack(e) {
    e.preventDefault();
    this.props.deleteTrack(this.props.track.id).then(this.deleted = true);
    return <Redirect to='/discover'/>
  }

  // showEdit(e) {
  //   e.preventDefault();
  //   this.setState( {showEdit: true} );
  // }

  // closeEdit() {
  //   this.setState( {showEdit: false} )
  // }

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
    if (this.props.deleted === false) return <Redirect to="/discover" />
    return (
      <div className="content-container">
        <Modal track={this.props.track} component="edit" />
        {/* {
          this.state.showEdit ? <EditTrackContainer track={this.props.track} closeEdit={this.closeEdit} /> : null
        } */}
        <div className="track-show-container">
          <img className="track-show-list-item-img" src={this.props.track.photoUrl}/>
          <div className="track-show-list-item-description">
            <div className="track-show-play-content">
              <button onClick={this.sendTrack}>play (double click)</button>
              {/* <button onClick={() => document.getElementById('audio').pause()}>pause</button> */}
              <div className="track-show-list-item-info">
                <div className="track-show-list-item-uploader">{this.props.track.uploader_id}</div>
                <div className="track-show-list-item-title">{this.props.track.title}</div>
              </div>
            </div>


            {/* <div className="track-show-description">Description: {this.props.track.description}</div> */}
          </div>
          {/* <audio id='audio' src={this.props.track.audioUrl} /> */}
          {/* <button onClick={() => document.getElementById('audio').play()}>play</button> */}
        </div>
        <button onClick={this.deleteTrack}>delete</button>
        <button onClick={() => this.props.openModal('edit')}>edit</button>
        {/* <button onClick={this.showEdit}>edit</button> */}
      </div>
    )
  }
}

export default TrackShow