import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  
  render() {
    return (
      <div>
        {
          this.props.state.session.id ? 
          <button onClick={() => this.props.logout()}>Logout for user #{this.props.state.session.id}</button> : 
          <nav className="login-signup">
            <button className='signup' onClick={() => this.props.openModal('signup')}>Create Account</button>

            <button className='login' onClick={() => this.props.openModal('login')}>Login</button>
          </nav>
        }
      </div>
    )
  }
}
export default NavBar
