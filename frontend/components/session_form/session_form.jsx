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
    this.demoAttempt = false;
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    this.demoAttempt ? this.props.login(this.state).then(this.props.closeModal) : this.props.action(this.state).then(this.props.closeModal);
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
        <ul className="credential-errors-ul">
          { this.props.errors.map( (error, i) => <li key={i}>{error}</li>) }
        </ul>
      )
    }
  }

  demoLogin() {
    const demoAccount = {
      username: 'Demo',
      password: 'secretpasswordlol'
    }
    this.state = demoAccount;
    this.demoAttempt = true;
    // this.props.login(demoAccount).then(this.props.closeModal);
    // add .then.props.history to redirect to the root i think....
  }

  render() {
    return (
      <div>
        {/* 
          If-else does not work inside .jsx. .jsx is syntactic sugar for function calls
          and object construction. A work around is to use a ternary operation.
        */}

        <form className="modal-form" onSubmit={this.handleSubmit}>
          <button className="demo-user-login-button" onClick={this.demoLogin}>Try as a demo user!</button>

          <br />
          <div className="auth-separator">
            or
          </div>
          <br />
          <div onClick={this.props.closeModal} className="close-x">X</div>
            <input type='text' onChange={this.handleChange('username')} placeholder="Your username" value={this.state.username} />
          <br/>
            <input type='text' onChange={this.handleChange('password')} placeholder="Your password" value={this.state.password} />
          <br/>

          {this.renderErrors()}
          <button className="modal-form-submit-button" type='submit'>{this.props.formType}</button>
        </form>

      </div>
    )
  }
}

export default SessionForm