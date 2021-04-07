import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import EditTrackContainer from '../track_form/edit_track_container'
import CommentFormContainer from '../comment_form/comment_form_container'
import CommentShow from '../comment_show/comment_show_container';
import History from '../history/history'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      // colored: false,
      // volume: this.props.audio ? this.props.audio.volume : 0.6
    }
    this.deleted = false;
    this.sendTrack = this.sendTrack.bind(this)
    this.deleteTrack = this.deleteTrack.bind(this)
    this.showForm = this.showForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.bringBackVolume = this.bringBackVolume.bind(this)
    this.bringDownVolume = this.bringDownVolume.bind(this)
    this.setHistory = this.setHistory.bind(this)
    this.intervalUp;
    this.intervalDown;
    this.loading = true;
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)

    const background = document.getElementsByClassName("track-show-header-container")[0];
    if (background) this.cuteColors(background)
  }

  componentDidUpdate() {
    const background = document.getElementsByClassName("track-show-header-container")[0];
    if (background && background.style.background === "") this.cuteColors(background)
  }

  componentWillUnmount() {
    this.props.removeComments();
  }

  deleteTrack(e) {
    e.preventDefault();
    if (this.props.track.id === this.props.currentTrack.id) {
      this.props.clearPlaybarState()
      window.localStorage.setItem("currentTrack", JSON.stringify({}))
    }
    this.props.deleteTrack(this.props.track.id);
    this.props.removeComments();
    this.props.history.push(`/`)
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

  setHistory() {
    window.localStorage.setItem("history", JSON.stringify(this.props.trackHistory))
    setTimeout(() => {
      let history = JSON.parse(window.localStorage.getItem("history"))
      if (history.length !== this.props.trackHistory.length) {
        window.localStorage.setItem("history", JSON.stringify(this.props.trackHistory))
      }
    }, 70)
  }

  sendTrack() {
    let playbtn = document.getElementsByClassName("track-show-list-item-playbtn")[0]
    let audio = this.props.audio

    if (this.props.track.id !== this.props.currentTrack.id) {
      this.props.sendTrack(this.props.track, () => audio.play())
      this.props.playTrack()
      window.localStorage.setItem("currentTrack", JSON.stringify(this.props.track))
      playbtn.classList.add("playing");
      audio.setAttribute("autoPlay", true)
      this.setHistory()

      // failsafe
      setTimeout(() => {
        audio.paused? audio.play() : null
      }, 10)
    }
    else if (audio.paused) {
      // console.log(audio.paused)
      this.props.playTrack()
      audio.setAttribute("autoPlay", true)
      this.bringBackVolume();
      clearInterval(this.intervalDown)
      playbtn.classList.add("playing");

      // failsafe
      setTimeout(() => {
        playbtn.classList.add("playing");
        audio.paused ? audio.play() : null
      }, 10)
    } 
    else if (!audio.paused) {
      this.props.pauseTrack()
      this.bringDownVolume()
      clearInterval(this.intervalUp)
      audio.removeAttribute("autoPlay")
      playbtn.classList.remove("playing");

      // failsafe
      setTimeout(() => {
        playbtn.classList.remove("playing");
        !audio.paused ? audio.pause() : null
      }, 10)
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
    const volume = document.getElementsByClassName("slider-background")[0].value
    if (volume) {
      this.intervalDown = setInterval(() => {
        if (this.props.audio.volume >= volume/60 ) {
          if (volume/60 === 0 ) {
            this.props.audio.pause()
            clearInterval(this.intervalDown)
          }
          this.props.audio.volume -= volume/60 
        } else {
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
                  // !audio.paused && this.props.track.id === this.props.currentTrack.id && !audio.ended?
                  !this.props.playbar.paused && this.props.track.id === this.props.currentTrack.id && !audio.ended?
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
          <History fetchTrack={this.props.fetchTrack} currentTrack={this.props.track}/>
          <div className="track-show-body-wrapper">
            <div className="track-show-body-left-wrapper">
              <div className="track-show-body-left-content">
                <div className="track-body-left-header">
                  <CommentFormContainer track={this.props.track} />
                  {
                    this.props.currentUserId === this.props.track.uploader_id ||
                    this.props.currentUser.username === "God Hand"?
                      <div className="track-show-btns">
                        <button onClick={this.deleteTrack} className="track-show-edit-btn">
                          <FontAwesomeIcon icon="trash" id="trash"/>
                          Delete Track
                          {this.deleted ? <Redirect to='/'/> : null}
                        </button>
                        <button onClick={this.showForm} className="track-show-edit-btn">
                          <FontAwesomeIcon icon="pen" id="pen"/>
                          Edit
                        </button>
                      </div> 
                        :
                      <div className="track-show-no-btns">
                        <span id="asterisk">*</span> You can update or delete a track if you are the uploader
                      </div>
                  }
                </div>
                {
                  // this.loading ?
                  // <FontAwesomeIcon icon="spinner" spin size="2x" className="homepage-spinner" /> :
                  <div className="track-body-main-content">
                    <div className="track-show-uploader-container">
                      <Link to={`/users/${this.props.track.uploader_id}`}>
                        {
                          this.props.track ? 
                            <img src={this.props.track.profileUrl} className="track-show-uploader-img"/> :
                            setTimeout(() => {
                              console.log("profile image could not be fetched atm")
                              return <img src={this.props.track.profileUrl} className="track-show-uploader-img"/>
                            }, 20)
                        }
                      </Link>
                      <div className="track-show-uploader-details">
                        <div className="track-show-uploader-name">{this.props.track.username}</div>
                      </div>
                    </div>
                    <CommentShow 
                      track={this.props.track}
                      setHistory={this.setHistory} />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackShow