import React from 'react';
import { Redirect } from 'react-router-dom';
import EditTrackContainer from '../track_form/edit_track_container'

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
    }
    this.deleted = false;
    this.sendTrack = this.sendTrack.bind(this)
    this.deleteTrack = this.deleteTrack.bind(this)
    this.showEdit = this.showEdit.bind(this)
    this.closeEdit = this.closeEdit.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
  }

  deleteTrack(e) {
    e.preventDefault();
    this.props.deleteTrack(this.props.track.id).then(this.deleted = true);
    return <Redirect to='/discover'/>
  }

  showEdit(e) {
    e.preventDefault();
    let form = document.getElementsByClassName('upload-form-container')[0];
    let background = document.getElementsByClassName('track-edit-background')[0];
    background.classList.remove("closed")
    background.classList.add("open")
    form.classList.remove("closed")
    form.classList.add("open")
    this.setState( {showEdit: true} );
  }

  closeEdit() {
    this.setState( {showEdit: false} )
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  cuteColors(background) {
    let one = this.getRandomInt(160, 200)
    let two = this.getRandomInt(160, 200)
    let three = this.getRandomInt(170, 200)
    let one2 = one + this.getRandomInt(5, 30)
    let two2 = two + this.getRandomInt(5, 30)
    let three2 = three - this.getRandomInt(5, 30)
    let one3 = one2 + this.getRandomInt(5, 30)
    let two3 = two2 + this.getRandomInt(5, 30)
    let three3 = three2 - this.getRandomInt(5, 30)
    background.style.background = `linear-gradient(to left, rgb(${one}, ${two}, ${three}), rgb(${one2}, ${two2}, ${three2}), rgb(${one3}, ${two3}, ${three3}))`
  }

  sendTrack() {
    if (this.props.track !== this.props.currentTrack) {
      this.props.playTrack(this.props.sendTrack(this.props.track))
    }
    else if (this.props.playbar.paused) {
      this.props.playTrack()
      document.getElementById('audio').play();
    } else {
      this.props.pauseTrack()
      document.getElementById('audio').pause()
    }
  }

  render() {
    if (this.props.track === undefined) return null;
    if (this.props.deleted === false) return <Redirect to="/discover" />
    let background = document.getElementsByClassName("track-show-container")[0];
    if (background) this.cuteColors(background)

    return (
      <div className="content-container">
        <EditTrackContainer track={this.props.track} closeEdit={this.closeEdit} />
        <div className="track-show-container">
          <img className="track-show-list-item-img" src={this.props.track.photoUrl}/>
          <div className="track-show-list-item-description">
            <div className="track-show-play-content">
              <a onClick={this.sendTrack} className="track-show-list-item-playbtn"/>
              <div className="track-show-list-item-info">
                <div className="track-show-list-item-uploader">{this.props.track.uploader_id}</div>
                <div className="track-show-list-item-title">{this.props.track.title}</div>
              </div>
            </div>


            {/* <div className="track-show-description">Description: {this.props.track.description}</div> */}
          </div>
        </div>
        <button onClick={this.deleteTrack}>delete</button>
        {/* <button onClick={() => this.props.openModal('edit')}>edit</button> */}
        <button onClick={this.showEdit}>edit</button>
      </div>
    )
  }
}

export default TrackShow