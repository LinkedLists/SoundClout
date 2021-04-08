import React from 'react';
import EditTrackContainer from '../track_form/edit_track_container'
import { Link } from 'react-router-dom'
// import CommentFormContainer from './comment_form_container'
import CommentFormContainer from '../comment_form/comment_form_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class UserShowIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      // colored: false,
    }
    this.deleteTrack = this.deleteTrack.bind(this)
    this.showForm = this.showForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }

  componentDidUpdate() {
  }

  componentDidMount() {
  }

  deleteTrack(e) {
    e.preventDefault();
    if (this.props.track.id === this.props.currentTrack.id) {
      this.props.clearPlaybarState()
      window.localStorage.setItem("currentTrack", JSON.stringify({}))
    }
    this.props.deleteTrack(this.props.track.id);
    this.props.removeComments();
  }

  showForm(e) {
    e.preventDefault();
    this.setState( {showForm: true} );
  }

  closeForm() {
    this.setState( {showForm: false} )
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
        return <span className="item-timestamp">1 month ago</span>
      } else {
        return <span className="item-timestamp">{`${months} months ago`}</span>
      }
    }
    else if (years > 0) {
      if (years === 1) {
        return <span className="item-timestamp">1 year ago</span>
      } else {
        return <span className="item-timestamp">{`${years} years ago`}</span>
      }
    }
    else if (days > 0) {
      if (days === 1) {
        return <span className="item-timestamp">1 day ago</span>
      } else {
        return <span className="item-timestamp">{`${days} days ago`}</span>
      }
    }
    else if (hours > 0) {
      if (hours === 1) {
        return <span className="item-timestamp">1 hour ago</span>
      } else {
        return <span className="item-timestamp">{`${hours} hours ago`}</span>
      }
    }
    else if (minutes > 0) {
      if (minutes === 1) {
        return <span className="item-timestamp">1 minute ago</span>
      } else {
        return <span className="item-timestamp">{`${minutes} minutes ago`}</span>
      }
    }
    else if (seconds > 0) {
      if (seconds === 1) {
        return <span className="item-timestamp">1 second ago</span>
      } else {
        return <span className="item-timestamp">{`${seconds} seconds ago`}</span>
      }
    } else {
      return <span className="item-timestamp">Right now</span>
    }
  }
    
    else {
      return <span className="item-timestamp">Right now</span>
    }
  }

  render() {
    return (
      <li className="user-list-item">
        {
          this.state.showForm ? <EditTrackContainer track={this.props.track} closeForm={this.closeForm} /> : null
        }
        <div className="user-list-item-container">
          <Link to={`/tracks/${this.props.track.id}`} className="track-uploader-item-img-container">
            <img src={this.props.track.photoUrl} className="track-uploader-item-img"/>
          </Link>      
          <div className="user-list-item-content-container">
            <div className="user-list-item-detail">
              <div className="user-list-item-detail-info">
                <span className="user-list-item-username">
                  {this.props.user.username}  
                </span>
                <span>
                <Link to={`/tracks/${this.props.track.id}`} className="user-list-item-title">
                  {this.props.track.title}
                </Link>  
                </span>            
              </div>
              <div>{this.getDateMeta(this.props.track.created_at)}</div>
            </div>
            <CommentFormContainer track={this.props.track} />
          </div>
        </div>
          {
            this.props.sessionId === this.props.user.id ||
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
                : <></>
              // <div className="track-show-no-btns">
              //   <span id="asterisk">*</span> You can update or delete a track if you are the uploader
              // </div>
          }
      </li>
    )
  }
}

export default UserShowIndexItem;