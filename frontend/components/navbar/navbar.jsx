import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <h1>this is the navbar</h1>


        {/* taken from a/A */}
        <nav className="login-signup">
          <button onClick={() => this.props.openModal('login')}>Login</button>
          &nbsp;or&nbsp;
          <button onClick={() => this.props.openModal('signup')}>Signup</button>
        </nav>
      </div>
    )
  }
}

export default NavBar