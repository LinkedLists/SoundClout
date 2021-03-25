import React from 'react'

class CommentShow extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    let comments = Object.values(this.props.comments)
    let bodies
    bodies = comments.map( comment => {
      return <li key={comment.id}>{comment.body}</li>
    })
    return (
      <div className="comment-show-container">
        <ul>
          {bodies}
        </ul>
      </div>
    )
  }
}

export default CommentShow