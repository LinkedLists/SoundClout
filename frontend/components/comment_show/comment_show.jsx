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
      <ul>
        {bodies}
      </ul>
    )
  }
}

export default CommentShow