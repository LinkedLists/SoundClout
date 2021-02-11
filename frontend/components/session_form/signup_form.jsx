import React from 'react';

class SignUpForm extends React.Component {

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
    this.props.signup(user);
    this.setState({
      username: '',
      password: ''
    })
  }

  handleChange(field) {
    return e => this.setState( {[field]: e.target.value} )
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
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
          <label>Username:
            <input type='text' onChange={this.handleChange('username')} value={this.state.username} />
          </label>
          <br/>

          <label>Password:
            <input type='text' onChange={this.handleChange('password')} value={this.state.password} />
          </label>
          <br/>

          {this.renderErrors()}
          <input type='submit' value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default SignUpForm