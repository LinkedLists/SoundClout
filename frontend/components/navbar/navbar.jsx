import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  
  render() {
    return (
      <div className="nav-header-container">
        {
          this.props.state.session.id ? 
          <button onClick={() => this.props.logout()}>Logout for user #{this.props.state.session.id}</button> : 
          <nav className="nav-header">
            <div className="hi">logo placeholder</div>

            <div className="login-signup">
              {/* temp inline style for login */}
              <button className='login' onClick={() => this.props.openModal('login')} style={{color: 'green'}}>Login</button>
              <button className='signup' onClick={() => this.props.openModal('signup')}>Create Account</button>
            </div>
          </nav>
        }
      </div>
    )
  }
}
export default NavBar
