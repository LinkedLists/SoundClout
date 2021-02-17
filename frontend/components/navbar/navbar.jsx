import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.sessionContainer = this.sessionContainer.bind(this);
    this.navContainer = this.navContainer.bind(this);
  }

  sessionContainer() {
    return (
      <div className="login-signup-container">
        <nav className="login-signup-nav">
          <div className="site-logo">logo placeholder</div>
          <div className="login-signup">
            {/* temp inline style for login */}
            <button className='login-btn' onClick={() => this.props.openModal('login')} style={{color: 'green'}}>Login</button>
            <button className='signup-btn' onClick={() => this.props.openModal('signup')}>Create Account</button>
          </div>
        </nav>
      </div>
    )
  }

  navContainer() {
    return(
      <div className="navbar-container">
        <ul className="nav-links">
          {/* in soundcloude the logo is outside of nav-links ul */}
          {/* navbar is divided into ul sections */}
          <li><Link to='/discover' className='nav-links-li'>place logo here</Link></li>
          <li><Link to='/discover' className='nav-links-li'>Home</Link></li>
          <li><Link to='/discover' className='nav-links-li'>Stream</Link></li>
          <li><Link to='/discover' className='nav-links-li'>Library</Link></li>
          <li><Link to='/discover' className='nav-links-li'>User #{this.props.state.session.id}</Link></li>
          <li>
            <Link to='/' className='nav-links-li' onClick={() => this.props.logout()}>Logout</Link>
          </li>
        </ul>

        {/* login and logout does not change the url. consider change button to <Link> maybe */}
      </div>
    )
  }
  
  render() {
    return (
      this.props.state.session.id ? this.navContainer() : this.sessionContainer()
    )
  }
}

export default NavBar
