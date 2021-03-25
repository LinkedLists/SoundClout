import React from 'react';
import { Link, Redirect } from 'react-router-dom'
class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.sessionContainer = this.sessionContainer.bind(this);
    this.navContainer = this.navContainer.bind(this);
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    // this.props.fetchTracks();
    this.props.state
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

  handleLogout() {
    this.props.logout();
    this.props.pauseTrack();
    this.props.clearPlaybarState();
  }

  navContainer() {
    return(
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <ul className="nav-links">
            {/* in soundcloud the logo is outside of nav-links ul */}
            {/* navbar is divided into ul sections */}
            <li><Link to='/discover' className='nav-links-li'>logo here</Link></li>
            <li><Link to='/discover' className='nav-links-li'>Home</Link></li>
            <li><Link to='/discover' className='nav-links-li'>Stream</Link></li>
            <li><Link to='/discover' className='nav-links-li'>Library</Link></li>
          </ul>
          <form className="searchbar-form">
            <input type="text" placeholder="Search for artists, bands, tracks, podcasts"></input>
            <button type="submit" className="search-btn"/>
          </form>
          <div className="right-nav">
            <ul className="nav-links">
              <li><Link to='/upload' className='nav-links-li'>Upload</Link></li>
              <li><Link to='/discover' className='nav-links-li'>{this.props.user.username}</Link></li>
              <li>
                <Link to='/' className='nav-links-li' id="logout" onClick={this.handleLogout}>Logout</Link>
              </li>
              <li><a href="google.com" className="link-wrapper">
                <img src="https://fsp-seed.s3-us-west-1.amazonaws.com/angellist2.png" 
                className="link-imgs" /></a></li>
              <li><a href="google.com" className="link-wrapper">
                <img src="https://fsp-seed.s3-us-west-1.amazonaws.com/github2.png" 
                className="link-imgs"/></a></li>
              <li><a href="google.com" className="link-wrapper">
                <img src="https://fsp-seed.s3-us-west-1.amazonaws.com/linkedin.png" 
                className="link-imgs"id="linkedin-img"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  render() {
    return (
      this.props.sessionId ? this.navContainer() : this.sessionContainer()
    )
  }
}

export default NavBar
