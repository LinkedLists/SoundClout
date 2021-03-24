import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trackId: this.props.track.id,
      uploader_id: this.props.currentUserId,
      body: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault();

    this.props.createComment(this.state)
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }  
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange("body")} placeholder="Write a comment"/>
        <button type='submit'>post</button>
      </form>
    )
  }
}

export default CommentForm