import React from 'react';

class SignUpForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
    this.setState({
      email: '',
      password: ''
    })
    console.log("i am here")
  }

  handleChange(field) {
    return e => this.setState( {[field]: e.target.value} )
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type='text' onChange={this.handleChange('email')} value={this.state.email} />
          </label>
          <br/>
          <label>Password:
            <input type='text' onChange={this.handleChange('password')} value={this.state.password} />
          </label>
          <br/>
          <input type='submit' value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default SignUpForm