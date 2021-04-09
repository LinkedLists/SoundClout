import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentIndexItem from './comment_index_item'

class CommentShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidUpdate() {
    this.props.setHistory()
  }

  render() {
    let comments = Object.values(this.props.comments)
    let numComments = comments.length
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
          currentTrack={this.props.track}
          numComments={numComments}
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