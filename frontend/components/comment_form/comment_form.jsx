import React from 'react'


class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      track_id: this.props.track.id,
      uploader_id: this.props.currentUserId,
      body: '',
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleValidations = this.handleValidations.bind(this);
  }

  componentDidMount() {
    let profileContainer = document.getElementsByClassName("comment-form-profile-img")[0];
    // profileContainer.style.backgroundImage = `url(${this.props.currentUser.user.profileUrl})`
    profileContainer.style.backgroundImage = 
      this.props.currentUser.profileUrl ? 
        `url${this.props.currentUser.profileUrl}` :
        `url(https://fsp-seed.s3-us-west-1.amazonaws.com/rick.jpg)`
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state)
    this.setState( {body: ''} )
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }  
  }

  handleValidations() {
    let body = this.state.body.length
    let validForm = true;
    let errors = {}

    if (body === 0){
      errors["Body"] = "body cannot be empty"
      validForm = false;
    } 
    this.setState( {errors: errors} )
    return validForm
  }

  handleLiveVaidation(length) {
    let errors = Object.assign(this.state.errors)
    
    if (length === 0) {
      errors["Body"] = "body cannot be empty"
    } else {
      delete errors["Body"]
    } 
    this.setState( {errors: errors} )
  }

  render() {
    return (
      <div className="comment-form-container">
        <div className="comment-form-wrapper">
          <span className="comment-form-profile-img" />
          <form onSubmit={this.handleSubmit}>
            <div className="comment-form-input-wrapper">
              <input onChange={this.handleChange("body")} placeholder="Write a comment" value={this.state.body}/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CommentForm