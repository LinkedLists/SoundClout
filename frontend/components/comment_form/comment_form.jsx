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
    this.setHistory = this.setHistory.bind(this)
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    // fail safe when track id does not properly update when
    // navigating through user show pages
    if (this.state.track_id !== this.props.track.id) {
      this.setState({track_id: this.props.track.id})
    }
  }

  componentWillUnmount() {
  }

  // componentDidMount() {
  // componentDidUpdate() {
  //   let profileContainer = document.getElementsByClassName("comment-form-profile-img")[0];
  //   // profileContainer.style.backgroundImage = `url(${this.props.currentUser.user.profileUrl})`
  //   profileContainer.style.backgroundImage = 
  //     this.props.currentUser.profileUrl ? 
  //       `url${this.props.currentUser.profileUrl}` :
  //       `url(https://fsp-seed.s3-us-west-1.amazonaws.com/rick.jpg)`
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state).then(() => this.setHistory())
    this.setState( {body: ''} )
  }

  setHistory() {
    window.localStorage.setItem("history", JSON.stringify(this.props.trackHistory))
    setTimeout(() => {
      let history = JSON.parse(window.localStorage.getItem("history"))
      if (history.length !== this.props.trackHistory.length) {
        window.localStorage.setItem("history", JSON.stringify(this.props.trackHistory))
      }
    }, 70)
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
    let profileUrl = this.props.currentUser.profileUrl ? 
      this.props.currentUser.profileUrl :
      `https://fsp-seed.s3-us-west-1.amazonaws.com/rick.jpg`
    return (
      <div className="comment-form-container">
        <div className="comment-form-wrapper">
          {/* <span className="comment-form-profile-img" /> */}
          <img src={profileUrl} className="comment-form-profile-img" />
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