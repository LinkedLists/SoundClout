import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user).then(this.props.closeModal);
    this.setState({
      username: '',
      password: ''
    })
  }

  handleChange(field) {
    return e => this.setState( {[field]: e.target.value} )
  }

  // The following is a list of renderable errors:
  // "Invalid credentials. Please try again!"
  // "Username has already been taken"
  // "Password is too short (minimum is 6 characters)"

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <ul>
          { this.props.errors.map( (error, i) => <li key={i}>{error}</li>) }
        </ul>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <form onSubmit={this.handleSubmit}>

          {/* taken from a/A */}
          Please {this.props.formType} or {this.props.otherForm}
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {/* taken from a/A */}

          <label>Username:
            <input type='text' onChange={this.handleChange('username')} value={this.state.username} />
          </label>
          <br/>

          <label>Password:
            <input type='text' onChange={this.handleChange('password')} value={this.state.password} />
          </label>
          <br/>

          {this.renderErrors()}
          <input type='submit' value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default SessionForm