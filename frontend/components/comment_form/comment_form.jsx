import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      track_id: this.props.track.id,
      uploader_id: this.props.currentUserId,
      body: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
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
      <div className="comment-form-container">
        <div className="comment-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="comment-form-input-wrapper">
              <input onChange={this.handleChange("body")} placeholder="Write a comment"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CommentForm