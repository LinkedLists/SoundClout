import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import EditTrackContainer from '../track_form/edit_track_container'
import CommentFormContainer from '../comment_form/comment_form_container'
import CommentShow from '../comment_show/comment_show_container';
import History from '../history/history'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PlayButton from '../playbutton/playbutton_container'

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    }
    this.deleteTrack = this.deleteTrack.bind(this)
    this.showForm = this.showForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.setHistory = this.setHistory.bind(this)
    this.enableCurrentUser = this.enableCurrentUser.bind(this)
    this.loading = true;
    this.trackPage = this.trackPage.bind(this)
  }

  trackPage(page) {
    ReactGA.set({
      page
    });
    ReactGA.pageview(page);
  };

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
    this.enableCurrentUser();
    const background = document.getElementsByClassName("track-show-header-container")[0];
    if (background) this.cuteColors(background)
    
    const page = this.props.location.pathname;
    this.trackPage(page);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
    const background = document.getElementsByClassName("track-show-header-container")[0];
    if (background && background.style.background === "") this.cuteColors(background)
  }

  componentWillUnmount() {
    this.props.removeComments();
  }

  enableCurrentUser() {
    let userLink = document.getElementById("nav-currentUser");
    if (userLink) {
      userLink.classList.remove("disable")
    }
  }

  getDateMeta(time) {
    if (this.props.track.created_at) {
    const now = new Date();
    let years = now.getUTCFullYear() - time.slice(0, 4);
    let months = now.getUTCMonth() + 1 - time.slice(5, 7);
    let days = now.getUTCDate() - time.slice(8, 10);
    let hours = now.getUTCHours() - time.slice(11, 13);
    let minutes = now.getUTCMinutes() - time.slice(14, 16);
    let seconds = now.getUTCSeconds() - time.slice(17, 19);

    if (months > 0 && months % 12 < 1) {
      if (months === 1) {
        return <span className="track-show-timestamp">1 month ago</span>
      } else {
        return <span className="track-show-timestamp">{`${months} months ago`}</span>
      }
    }
    else if (years > 0) {
      if (years === 1) {
        return <span className="track-show-timestamp">1 year ago</span>
      } else {
        return <span className="track-show-timestamp">{`${years} years ago`}</span>
      }
    }
    else if (days > 0) {
      if (days === 1) {
        return <span className="track-show-timestamp">1 day ago</span>
      } else {
        return <span className="track-show-timestamp">{`${days} days ago`}</span>
      }
    }
    else if (hours > 0) {
      if (hours === 1) {
        return <span className="track-show-timestamp">1 hour ago</span>
      } else {
        return <span className="track-show-timestamp">{`${hours} hours ago`}</span>
      }
    }
    else if (minutes > 0) {
      if (minutes === 1) {
        return <span className="track-show-timestamp">1 minute ago</span>
      } else {
        return <span className="track-show-timestamp">{`${minutes} minutes ago`}</span>
      }
    }
    else if (seconds > 0) {
      if (seconds === 1) {
        return <span className="track-show-timestamp">1 second ago</span>
      } else {
        return <span className="track-show-timestamp">{`${seconds} seconds ago`}</span>
      }
    } else {
      return <span className="track-show-timestamp">Right now</span>
    }
  }
    
    else {
      return <span className="item-timestamp">Right now</span>
    }
  }

  deleteTrack(e) {
    e.preventDefault();
    if (this.props.track.id === this.props.currentTrack.id) {
      this.props.clearPlaybarState()
      window.localStorage.setItem("currentTrack", JSON.stringify({}))
    }
    this.props.deleteTrack(this.props.track)  
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

  render() {
    if (this.props.track === undefined) return null;
    let audio = this.props.audio
    return (
      <div className="content-container">
        {
          this.state.showForm ? <EditTrackContainer track={this.props.track} closeForm={this.closeForm} /> : null
        }
        <div className="track-show-header-container">
          <img className="track-show-list-item-img" src={this.props.track.photoUrl}/>
          <div className="track-show-list-item-description">
            <div className="track-show-play-content">
              <div className="track-show-playbtn-container">
                <PlayButton track={this.props.track} />
              </div>
              <div className="track-show-list-item-info">
                <div className="track-show-list-item-uploader">
                  <Link to={`/users/${this.props.track.uploader_id}`} className="track-show-list-item-uploader-link">
                    {this.props.track.username}
                  </Link>
                </div>
                <div className="track-show-list-item-title">{this.props.track.title}</div>
              </div>
            </div>
              <span className="track-show-info-container">
                {this.getDateMeta(this.props.track.created_at)}
                <div className="track-show-genre noselect">
                  # {this.props.track.genre}
                </div>
              </span>
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
                        </button>
                        <button onClick={this.showForm} className="track-show-edit-btn">
                          <FontAwesomeIcon icon="pen" id="pen"/>
                          Edit
                        </button>
                      </div> 
                        :
                      <div className="track-show-no-btns">
                        <span id="asterisk1">*</span> You can update or delete a track if you are the uploader
                      </div>
                  }
                </div>
                  <div className="track-body-main-content">
                    <div className="track-show-uploader-container">
                      <Link to={`/users/${this.props.track.uploader_id}`}>
                        {
                          this.props.track ? 
                            <img src={this.props.track.profileUrl} className="track-show-uploader-img"/> :
                            setTimeout(() => {
                              return <img src={this.props.track.profileUrl} className="track-show-uploader-img"/>
                            }, 20)
                        }
                      </Link>
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