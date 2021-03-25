import React from 'react';
import { Redirect } from 'react-router-dom';
import EditTrackContainer from '../track_form/edit_track_container'
import CommentFormContainer from '../comment_form/comment_form_container'
import CommentShow from '../comment_show/comment_show_container';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      colored: false
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

  componentDidUpdate() {
    const background = document.getElementsByClassName("track-show-header-container")[0];
    if (background) this.cuteColors(background)
  }

  componentWillUnmount() {
    this.props.removeComments();
  }

  deleteTrack(e) {
    e.preventDefault();
    this.props.deleteTrack(this.props.track.id).then(this.deleted = true);
    this.props.removeComments();
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
    if (!this.state.colored) {
      this.setState( {colored: true} )
      const r1 = this.getRandomInt(160, 200)
      const g1 = this.getRandomInt(160, 200)
      const b1 = this.getRandomInt(170, 250)
      const r2 = r1 + this.getRandomInt(5, 30)
      const g2 = g1 + this.getRandomInt(5, 30)
      const b2 = b1 - this.getRandomInt(5, 30)
      const r3 = r2 + this.getRandomInt(5, 30)
      const g3 = g2 + this.getRandomInt(5, 30)
      const b3 = b2 - this.getRandomInt(5, 30)
      background.style.background = `linear-gradient(to left, 
          rgb(${r1}, ${g1}, ${b1}), 
          rgb(${r2}, ${g2}, ${b2}), 
          rgb(${r3}, ${g3}, ${b3}))`
    }
  }

  sendTrack() {
    let playbtn = document.getElementsByClassName("track-show-list-item-playbtn")[0]
    if (this.props.track !== this.props.currentTrack) {
      this.props.playTrack(this.props.sendTrack(this.props.track))
      playbtn.classList.add("playing");
    }
    else if (this.props.playbar.paused) {
      this.props.playTrack()
      document.getElementById('audio').play();
      playbtn.classList.add("playing");
    } else {
      this.props.pauseTrack()
      document.getElementById('audio').pause()
      playbtn.classList.remove("playing");
    }
  }

  render() {
    if (this.props.track === undefined) return null;
    if (this.props.deleted === false) return <Redirect to="/discover" />

    return (
      <div className="content-container">
        <EditTrackContainer track={this.props.track} closeEdit={this.closeEdit} />
        {/* {
          this.state.showEdit ? <EditTrackContainer track={this.props.track} closeEdit={this.closeEdit} /> : null
        } */}
        <div className="track-show-header-container">
          <img className="track-show-list-item-img" src={this.props.track.photoUrl}/>
          <div className="track-show-list-item-description">
            <div className="track-show-play-content">
              <a onClick={this.sendTrack} className="track-show-list-item-playbtn"/>
              <div className="track-show-list-item-info">
                <div className="track-show-list-item-uploader">{this.props.track.username}</div>
                <div className="track-show-list-item-title">{this.props.track.title}</div>
              </div>
            </div>
            {/* <div className="track-show-description">Description: {this.props.track.description}</div> */}
          </div>
        </div>
        <div className="track-show-body-container">
          <div className="track-show-body-wrapper">
            <div className="track-show-body-left-wrapper">
              <div className="track-show-body-left-content">
                <div className="track-body-left-header">
                  <CommentFormContainer track={this.props.track} />
                  <div className="track-show-btns">
                    <button onClick={this.deleteTrack}>delete</button>
                    <button onClick={this.showEdit} className="track-show-edit-btn"><div className="test"><p>edit</p></div></button>
                  </div>
                </div>
                <div className="track-body-main-content">
                  <div className="track-show-uploader-container">
                    <img src={this.props.track.photoUrl} className="track-show-uploader-img"/>
                    <span>i am the auther lol</span>
                  </div>
                  <CommentShow track={this.props.track} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackShow