import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentIndexItem from './comment_index_item'

class CommentShow extends React.Component {
  constructor(props) {
    super(props);

  }

  // for the future - add opacity transition only when creating a new comment
  componentDidUpdate() {
    this.props.setHistory()
    // let recentComment = document.getElementsByClassName("comment-items")

    // for (let comment of recentComment) {
    //   if (this.props.currentUserId) {
    //     comment.style.background = "#f2f2f2"
    //   } 
    // }
    // recentComment.forEach( comment => {
    //   if (this.props.currentUserId) {
    //     comment.style.background = "#f2f2f2"
    //   } 
    // })
    // console.log(Object.values(this.props.track.comments).length)
    // recentComment = recentComment[recentComment.length - 1]
    // recentComment.classList.add("new")
  }

  render() {
    let comments = Object.values(this.props.comments)
    let bodies
    bodies = comments.map( comment => {
      return <CommentIndexItem 
          key={comment.id} 
          photoUrl={comment.profileUrl} 
          deleteComment={this.props.deleteComment} 
          comment={comment}
          currentUserId={this.props.currentUserId}
          currentUsername={this.props.currentUsername}
          currentTrackId={this.props.track.id}
          />
    })
    return (
      <div className="comment-show-container">
        <p className="track-show-description">{this.props.track.description}</p>
        <div className="comment-show-container-header">
          <FontAwesomeIcon icon="comment-alt" color="#999" id="comment-icon"/>
          <span id="test">{Object.keys(this.props.comments).length + " comments"}</span>
        </div>
        <ul className="comment-items-ul">
          {bodies}
        </ul>
      </div>
    )
  }
}

export default CommentShow