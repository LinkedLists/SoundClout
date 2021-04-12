import React from 'react';
import { Link } from 'react-router-dom'
class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.sessionContainer = this.sessionContainer.bind(this);
    this.navContainer = this.navContainer.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRoute = this.handleRoute.bind(this);
  }

  sessionContainer() {
    return (
      <div className="login-signup-container">
        <nav className="login-signup-nav">
          <div className="site-logo"></div>
          <div className="login-signup">
            <button className='login-btn' onClick={() => this.props.openModal('login')} style={{color: 'green'}}>Login</button>
            <button className='signup-btn' onClick={() => this.props.openModal('signup')}>Create Account</button>
          </div>
        </nav>
      </div>
    )
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  cuteColors(background) {
    if (background) {
      const r1 = this.getRandomInt(160, 200)
      const g1 = this.getRandomInt(160, 200)
      const b1 = this.getRandomInt(170, 250)
      const r2 = r1 + this.getRandomInt(5, 30)
      const g2 = g1 + this.getRandomInt(5, 30)
      const b2 = b1 - this.getRandomInt(5, 30)
      const r3 = r2 + this.getRandomInt(5, 30)
      const g3 = g2 + this.getRandomInt(5, 30)
      const b3 = b2 - this.getRandomInt(5, 30)
      background.style.background = `linear-gradient(to left, 
          rgb(${r1}, ${g1}, ${b1}), 
          rgb(${r2}, ${g2}, ${b2}), 
          rgb(${r3}, ${g3}, ${b3}))`
    }
  }

  handleRoute() {
    this.props.fetchUser(this.props.sessionId)
    const background = document.getElementsByClassName("user-show-header-container")[0];
    this.cuteColors(background)
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
            <li id="logo-container"><Link to='/discover'><span id="logo-icon"></span></Link></li>
            <li><Link to='/discover' className='nav-links-li'>Home</Link></li>
            <li><Link to='/discover' className='nav-links-li'>Stream</Link></li>
            <li><Link to='/discover' className='nav-links-li'>Library</Link></li>
          </ul>
          <form className="searchbar-form">
            <input type="text" placeholder="Search for artists, bands, tracks, podcasts (soon)"></input>
            <button type="submit" onClick={e => e.preventDefault()} className="search-btn"/>
          </form>
          <div className="right-nav">
            <ul className="nav-links">
              <li><Link to='/upload' className='nav-links-li'>Upload</Link></li>

              <li>
                <Link 
                  to={`/users/${this.props.sessionId}`} 
                  className='nav-links-li noselect' 
                  id="nav-currentUser" 
                  onClick={this.handleRoute}>
                  <img src={ this.props.user.profileUrl ? 
                    this.props.user.profileUrl : 
                    'https://fsp-seed.s3-us-west-1.amazonaws.com/rick.jpg'} 
                    className="nav-currentUser-img"/>
                  <span className="nav-currentUser-name">{this.props.user.username}</span>
                </Link>
              </li>
              
              <li>
                <Link to='/' className='nav-links-li noselect' id="logout" onClick={this.handleLogout}>Logout</Link>
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
