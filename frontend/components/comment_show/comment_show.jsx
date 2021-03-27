import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentIndexItem from './comment_index_item'

class CommentShow extends React.Component {
  constructor(props) {
    super(props);

  }

  // for the future - add opacity transition when creating a new comment
  // componentDidUpdate() {
  //   let recentComment = document.getElementsByClassName("comment-items")
  //   recentComment = recentComment[recentComment.length - 1]
  //   recentComment.style.opacity = "1"
  // }

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
          />
        
    })
    return (
      <div className="comment-show-container">
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