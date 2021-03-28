import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.getDateMeta = this.getDateMeta.bind(this)
    this.handleHover = this.handleHover.bind(this)
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
        return <span className="comment-item-timestamp">1 month ago</span>
      } else {
        return <span className="comment-item-timestamp">{`${months} months ago`}</span>
      }
    }
    else if (years > 0) {
      if (years === 1) {
        return <span className="comment-item-timestamp">1 year ago</span>
      } else {
        return <span className="comment-item-timestamp">{`${years} years ago`}</span>
      }
    }
    else if (days > 0) {
      if (days === 1) {
        return <span className="comment-item-timestamp">1 day ago</span>
      } else {
        return <span className="comment-item-timestamp">{`${days} days ago`}</span>
      }
    }
    else if (hours > 0) {
      if (hours === 1) {
        return <span className="comment-item-timestamp">1 hour ago</span>
      } else {
        return <span className="comment-item-timestamp">{`${hours} hours ago`}</span>
      }
    }
    else if (minutes > 0) {
      if (minutes === 1) {
        return <span className="comment-item-timestamp">1 minute ago</span>
      } else {
        return <span className="comment-item-timestamp">{`${minutes} minutes ago`}</span>
      }
    }
    else if (seconds > 0) {
      if (seconds === 1) {
        return <span className="comment-item-timestamp">1 second ago</span>
      } else {
        return <span className="comment-item-timestamp">{`${seconds} seconds ago`}</span>
      }
    } else {
      return <span className="comment-item-timestamp">Right now</span>
    }
  }
    
    else {
      return <span className="comment-item-timestamp">Right now</span>
    }
  }

  colorOwner() {
    return this.props.comment.uploader_id === this.props.currentUserId ?
     "comment-items owner" : "comment-items"
  }

  handleHover(comment) {
    if (comment.uploader_id === this.props.currentUserId) {
      let li = document.getElementById(`li-${comment.id}`)
      document.getElementById(`${comment.id}`).style.opacity = "1"
      li.style.outline = "1px solid #e0e0e0"
      li.style.zIndex = "10"
    }
  }

  handleLeave(comment) {
    if (comment.uploader_id === this.props.currentUserId) {
      let li = document.getElementById(`li-${comment.id}`)
      document.getElementById(`${comment.id}`).style.opacity = "0"
      li.style.outline = "none"
      li.style.zIndex = "0"
    }
  }

  render() {
    this.colorOwner()
    return (
      <li 
        className={this.colorOwner()} 
        id={`li-${this.props.comment.id}`}
        onMouseEnter={() => this.handleHover(this.props.comment)} 
        onMouseLeave={() => this.handleLeave(this.props.comment)}>
        <img src={this.props.photoUrl} className="wtf" />
        <div className="comment-item-content">
          <div className="comment-item-username">
            {/* {this.props.comment.username} */}
            {
              this.props.comment.uploader_id === this.props.currentUserId ?
                "You" : this.props.comment.username
            }
          </div>
          <div className="comment-item-body">
            {this.props.comment.body}
          </div>
        </div>
        <div className="comment-item-meta">
          {this.getDateMeta(this.props.comment.created_at)}
          {
            this.props.currentUserId === this.props.comment.uploader_id ?
              <FontAwesomeIcon 
                icon="trash" 
                size="lg"
                // color="#999" 
                className="trash"
                id={this.props.comment.id} 
                onClick={() => this.props.deleteComment(this.props.comment.id)}
                /> : null
          }
        </div>
      </li>
    )
  }
}

export default CommentIndexItem