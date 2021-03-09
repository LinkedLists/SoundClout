import React from 'react';
import { Link, Redirect } from 'react-router-dom'
// import { fetchTracks } from '../../actions/track_actions'

class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.sessionContainer = this.sessionContainer.bind(this);
    this.navContainer = this.navContainer.bind(this);
  }

  fetchTracks() {
    $.ajax({
      url: 'api/tracks',
      method: 'GET'
    }).then(tracks => {this.setState({tracks})})
  }

  componentDidMount() {
    this.props.fetchTracks();
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

  navContainer() {
    return(
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <ul className="nav-links">
            {/* in soundcloud the logo is outside of nav-links ul */}
            {/* navbar is divided into ul sections */}
            <li><Link to='/discover' className='nav-links-li'>place logo here</Link></li>
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
              <li><Link to='/discover' className='nav-links-li'>User #{this.props.state.session.id}</Link></li>
              <li>
                <Link to='/' className='nav-links-li' onClick={() => this.props.logout()}>Logout</Link>
              </li>
              <li><a href="google.com"><img src="../frontend/assets/angellist.png" /></a></li>
              <li><a href="google.com"><img src="../frontend/assets/github.png" /></a></li>
              <li><a href="google.com"><img src="../frontend/assets/linkedin.png" /></a></li>
              
            </ul>
          </div>
        </div>
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
