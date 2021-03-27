import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.getDateMeta = this.getDateMeta.bind(this)
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
    if (this.props.comment.uploader_id === this.props.currentUserId) {
      document.getElementsByClassName("comment-items")[0].style.background = "#f2f2f2"
      return <span>You</span>
    } else {
      return <span>{this.props.comment.username}</span>
    }
  }

  render() {
    return (
      <li className="comment-items">
        <img src={this.props.photoUrl} className="wtf" />
        <div className="comment-item-content">
          <div className="comment-item-username">
            {this.props.comment.username}
            {/* {
              this.props.comment.uploader_id === this.props.currentUserId?
                this.colorOwner() : this.props.comment.username
            } */}
            {/* {this.colorOwner()} */}
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
                color="#999" 
                className="trash" 
                id="comment-icon" 
                onClick={() => this.props.deleteComment(this.props.comment.id)}
                /> : null
          }
        </div>
      </li>
    )
  }
}

export default CommentIndexItem