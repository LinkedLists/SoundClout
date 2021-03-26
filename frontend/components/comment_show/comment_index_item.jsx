import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <li className="comment-items">
        <img src={this.props.photoUrl} className="wtf" />
        <div className="comment-item-content">
          {/* {this.props.comment.} */}
          {this.props.comment.body}
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