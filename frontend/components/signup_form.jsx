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
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type='text' value={this.state.email}/>
          </label>
          <br/>
          <label>Password:
            <input type='text' value={this.state.password}/>
          </label>
          <input type='submit'>Sign Up</input>
        </form>
      </div>
    )
  }
}

export default SignUpForm