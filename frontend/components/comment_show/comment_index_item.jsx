import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.dateMeta = this.dateMeta.bind(this)
  }

  // ActiveRecord timestamps are UTC by default
  // comment.created_at format 2021-03-26T22:10:40.062Z
  dateMeta() {
    const now = new Date();
    let years = now.getUTCFullYear() - this.props.comment.created_at.slice(0, 4);
    let months = now.getUTCMonth() + 1 - this.props.comment.created_at.slice(5, 7);
    let days = now.getUTCDate() - this.props.comment.created_at.slice(8, 10);
    let hours = now.getUTCHours() - this.props.comment.created_at.slice(11, 13);
    let minutes = now.getUTCMinutes() - this.props.comment.created_at.slice(14, 16);
    let seconds = now.getUTCSeconds() - this.props.comment.created_at.slice(17, 19);

    if (months > 0 && months % 12 < 1) {
      if (months === 1) {
        return <span>1 month ago</span>
      } else {
        return <span>{`${months} months ago`}</span>
      }
    }
    else if (years > 0) {
      if (years === 1) {
        return <span>1 year ago</span>
      } else {
        return <span>{`${years} years ago`}</span>
      }
    }
    else if (days > 0) {
      if (days === 1) {
        return <span>1 day ago</span>
      } else {
        return <span>{`${days} days ago`}</span>
      }
    }
    else if (hours > 0) {
      if (hours === 1) {
        return <span>1 hour ago</span>
      } else {
        return <span>{`${hours} hours ago`}</span>
      }
    }
    else if (minutes > 0) {
      if (minutes === 1) {
        return <span>1 minute ago</span>
      } else {
        return <span>{`${minutes} minutes ago`}</span>
      }
    }
    else if (seconds > 0) {
      if (seconds === 1) {
        return <span>1 second ago</span>
      } else {
        return <span>{`${seconds} seconds ago`}</span>
      }
    } else {
      return <span>Right now</span>
    }
  }

  render() {
    return (
      <li className="comment-items">
        <img src={this.props.photoUrl} className="wtf" />
        <div className="comment-item-content">
          <div className="comment-item-username">
            {this.props.comment.username}
          </div>
          <div className="comment-item-body">
            {this.props.comment.body}
          </div>
          <div className="comment-item-meta">
            {this.dateMeta()}
          </div>

        </div>
        <FontAwesomeIcon 
          icon="trash" 
          color="#999" 
          className="trash" 
          id="comment-icon" 
          onClick={() => this.props.deleteComment(this.props.comment.id)}
          />
      </li>
    )
  }
}

export default CommentIndexItem