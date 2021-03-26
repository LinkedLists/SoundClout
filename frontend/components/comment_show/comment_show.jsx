import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CommentShow extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    let comments = Object.values(this.props.comments)
    let bodies
    bodies = comments.map( comment => {
      return <li key={comment.id} className="comment-items">{comment.body}</li>
    })
    return (
      <div className="comment-show-container">
        <div className="comment-show-container-header">
          <FontAwesomeIcon icon="comment-alt" color="#999" id="comment-icon"/>
          <span id="test">{Object.keys(this.props.comments).length + " comments"}</span>
        </div>
        <ul>
          {bodies}
        </ul>
      </div>
    )
  }
}

export default CommentShow