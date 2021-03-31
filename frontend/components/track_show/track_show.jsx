import React from 'react';
import { Redirect } from 'react-router-dom';
import EditTrackContainer from '../track_form/edit_track_container'
import CommentFormContainer from '../comment_form/comment_form_container'
import CommentShow from '../comment_show/comment_show_container';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      colored: false,
      // volume: this.props.audio ? this.props.audio.volume : 0.6
    }
    this.deleted = false;
    this.sendTrack = this.sendTrack.bind(this)
    this.deleteTrack = this.deleteTrack.bind(this)
    this.showForm = this.showForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.bringBackVolume = this.bringBackVolume.bind(this)
    this.bringDownVolume = this.bringDownVolume.bind(this)
    this.intervalUp;
    this.intervalDown;
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

  showForm(e) {
    e.preventDefault();
    this.setState( {showForm: true} );
  }

  closeForm() {
    this.setState( {showForm: false} )
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
    let audio = this.props.audio

    if (this.props.track.id !== this.props.currentTrack.id) {
      this.props.sendTrack(this.props.track, () => audio.play())
      this.props.playTrack()
      // this.props.playTrack(this.props.sendTrack(this.props.track))
      window.localStorage.setItem("currentTrack", JSON.stringify(this.props.track))
      playbtn.classList.add("playing");
      audio.setAttribute("autoPlay", true)
      
      setTimeout(() => {
        audio.paused? audio.play() : null
      }, 10)
    }
    else if (audio.paused) {
      console.log(audio.paused)
      this.props.playTrack()
      audio.setAttribute("autoPlay", true)
      this.bringBackVolume();
      clearInterval(this.intervalDown)
      // audio.play()
      playbtn.classList.add("playing");
    } else if (!audio.paused) {
      this.props.pauseTrack()
      // audio.pause()
      this.bringDownVolume()
      clearInterval(this.intervalUp)
      audio.removeAttribute("autoPlay")
      playbtn.classList.remove("playing");
    }
  }

  // volume swells to gradually change volume on pause/play
  // so that user does not experience abrupt volume changes
  bringBackVolume() {
    const volume = document.getElementsByClassName("slider-background")[0].value
    if (volume) {
      this.props.audio.volume === 0 ? null : this.props.audio.volume = 0.01;
      this.props.audio.play()
      this.intervalUp = setInterval(() => {
        // console.log("up")
        if (this.props.audio.volume <= (volume - volume/60 )) {
          if (volume/60 === 0 ) {
            this.props.audio.volume = volume
            clearInterval(this.intervalUp)
          }
          this.props.audio.volume += volume/60 
        } else {
          this.props.audio.volume = volume
          clearInterval(this.intervalUp)
        }
      }, 3)
    }
  }

  bringDownVolume() {
    // this.setState( {volume: this.props.audio.volume} )
    const volume = document.getElementsByClassName("slider-background")[0].value
    if (volume) {
      this.intervalDown = setInterval(() => {
        // console.log(this.props.audio.volume)
        if (this.props.audio.volume >= volume/60 ) {
          if (volume/60 === 0 ) {
            // this.props.audio.volume = 0
            this.props.audio.pause()
            clearInterval(this.intervalDown)
          }
          this.props.audio.volume -= volume/60 
        } else {
          // this.props.audio.volume = 0
          this.props.audio.pause()
          clearInterval(this.intervalDown)
        }
      }, 3)
    }
  }

  render() {
    if (this.props.track === undefined) return null;
    if (this.props.deleted === false) return <Redirect to="/discover" />
    let audio = this.props.audio
    return (
      <div className="content-container">
        {/* <EditTrackContainer track={this.props.track} closeForm={this.closeForm} /> */}
        {
          this.state.showForm ? <EditTrackContainer track={this.props.track} closeForm={this.closeForm} /> : null
        }
        <div className="track-show-header-container">
          <img className="track-show-list-item-img" src={this.props.track.photoUrl}/>
          <div className="track-show-list-item-description">
            <div className="track-show-play-content">
              <a 
                onClick={this.sendTrack} 
                className={
                  !audio.paused && this.props.track.id === this.props.currentTrack.id && !audio.ended?
                  "track-show-list-item-playbtn playing" :
                  "track-show-list-item-playbtn"
                }
                />
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
                  {
                    this.props.currentUserId === this.props.track.uploader_id ||
                    this.props.currentUser.username === "God Hand"?
                      <div className="track-show-btns">
                        <button onClick={this.deleteTrack}>delete</button>
                        <button onClick={this.showForm} className="track-show-edit-btn"><div className="test"><p>edit</p></div></button>
                      </div> : null
                  }
                </div>

                <div className="track-body-main-content">
                  <div className="track-show-uploader-container">
                    <img src={this.props.track.profileUrl} className="track-show-uploader-img"/>
                    <div className="track-show-uploader-details">
                      <div className="track-show-uploader-name">{this.props.track.username}</div>
                    </div>
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