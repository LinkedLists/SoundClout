import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.getDateMeta = this.getDateMeta.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // ActiveRecord timestamps are UTC by default
  // comment.created_at format 2021-03-26T22:10:40.062Z
  getDateMeta(time) {
    if (this.props.comment.created_at) {
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

  colorOwner() {
    return this.props.comment.uploader_id === this.props.currentUserId || 
    this.props.currentTrack.uploader_id === this.props.currentUserId ||
    this.props.currentUsername === "God Hand" ?
     "comment-items owner" : "comment-items"
  }

  handleHover(comment) {
    if (comment.uploader_id === this.props.currentUserId || 
      this.props.currentTrack.uploader_id === this.props.currentUserId ||
      this.props.currentUsername === "God Hand" ) {
      let li = document.getElementById(`li-${comment.id}`)
      document.getElementById(`${comment.id}`).style.opacity = "1"
      li.style.outline = "1px solid #e0e0e0"
      li.style.zIndex = "10"
    }
  }

  handleLeave(comment) {
    if (comment.uploader_id === this.props.currentUserId || 
      this.props.currentTrack.uploader_id === this.props.currentUserId ||
      this.props.currentUsername === "God Hand" ) {
      let li = document.getElementById(`li-${comment.id}`)
      document.getElementById(`${comment.id}`).style.opacity = "0"
      li.style.outline = "none"
      li.style.zIndex = "0"
    }
  }

  handleDelete() {
    this.props.deleteComment([this.props.currentTrack, this.props.comment.id, this.props.numComments - 1])
  }

  render() {
    this.colorOwner()
    return (
      <li 
        className={this.colorOwner()} 
        id={`li-${this.props.comment.id}`}
        onMouseOver={() => this.handleHover(this.props.comment)} 
        onMouseLeave={() => this.handleLeave(this.props.comment)}>
        <Link to={`/users/${this.props.comment.uploader_id}`} className="comment-item-profile-img-container">
          <img src={this.props.photoUrl} className="comment-item-profile-img" />
        </Link>

        <div className="comment-item-content">
          <div className="comment-item-username">
            <Link to={`/users/${this.props.comment.uploader_id}`} className="comment-item-username-link">
              {
                this.props.comment.uploader_id === this.props.currentUserId ?
                  "You" : this.props.comment.username
              }
            </Link>
          </div>
          <div className="comment-item-body">
            {this.props.comment.body}
          </div>
        </div>
        <div className="comment-item-meta">
          {this.getDateMeta(this.props.comment.created_at)}
          {
            this.props.currentUserId === this.props.comment.uploader_id || 
            this.props.currentTrack.uploader_id === this.props.currentUserId ||
            this.props.currentUsername === "God Hand" ?
              <FontAwesomeIcon 
                icon="trash" 
                size="lg"
                className="trash"
                id={this.props.comment.id} 
                onClick={this.handleDelete}
                /> : null
          }
        </div>
      </li>
    )
  }
}

export default CommentIndexItem