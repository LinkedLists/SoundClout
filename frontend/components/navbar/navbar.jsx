import React from 'react';
import { Link } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <h1>this is the navbar</h1>


        {/* taken from a/A */}
        <nav className="login-signup">
          <button onClick={() => openModal('login')}>Login</button>
          &nbsp;or&nbsp;
          <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
      </div>
    )
  }
}

export default NavBar