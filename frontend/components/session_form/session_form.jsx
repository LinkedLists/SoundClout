import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
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

  demoLogin() {
    // e.preventDefault();        
    const demoAccount = {
      username: 'Demo',
      password: 'secretpasswordlol'
    }
    this.props.login(demoAccount).then(this.props.closeModal);
    // add .then.props.history to redirect to the root i think....
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <form onSubmit={this.handleSubmit}>

          {/* taken from a/A */}
          Please {this.props.formType} or {this.props.otherForm}
          <br />
          {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
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

          {/* 
            If-else does not work inside .jsx. .jsx is syntactic sugar for function calls
            and object construction. A work around is to use a ternary operation.
          */}
          { this.props.formType === "Sign Up" ? 
            <button onClick={this.demoLogin}>uhh why does this work</button> : null 
          }
      </div>
    )
  }
}

export default SessionForm