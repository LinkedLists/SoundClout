import React from 'react'
import { connect } from 'react-redux'

import Modal from '../modal/modal'

class Homepage extends React.Component {
  constructor(props){
    super(props)

    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
  }

  signup(e) {
    e.preventDefault();
    let signupBtn = document.getElementsByClassName("signup-btn")[0]
    signupBtn.click()
  }

  login(e) {
    e.preventDefault();
    let loginBtn = document.getElementsByClassName("login-btn")[0]
    loginBtn.click()
  }
  
  render() {
    return (
      <div className="homepage-container">

        <div className='homepage-header'>
          {/* {this.props.state.session.id ? null : <Modal />} */}
          <Modal />

          <div id="homepage-logo-container">
            <span id="homepage-logo"/>
            <h2 id="homepage-logo-name">SOUNDCLOUT</h2>
          </div>

        </div>

        <div className="homepage-mobile">
          <div className="homepage-mobile-img-container">
            <div className="homepage-mobile-img">

            </div>
          </div>
          <div className="homepage-details">
            <h2 className="homepage-details-header">
              Never Stop Listening
            </h2>
            <p>
              SoundClout is available on Web and soon on 
              iOS, Android, Sonos, Chromecast, and an Xbox One near you.
            </p>
          </div>
        </div>

        <div className="homepage-bottom-banner">
          <div className="homepage-details">
              <h2 className="homepage-details-header">
                Calling all creators
              </h2>
              <p>
                Get on SoundClout to connect with fans, share your sounds, 
                and grow your audience. What are you waiting for?              
                </p>
            </div>
          </div>

        <div className="homepage-signup-footer">
          <div className="homepage-signup-footer-details">
            <h2 className="homepage-signup-footer-header">
              Thanks for listening. Now join in.
            </h2>
            <p>
              Save tracks, listen to artists, and build a fanbase. All for free.
            </p>
            <button className="homepage-signup-footer-signup" onClick={this.signup}>
              Create Account
            </button>
            <div className="homepage-signup-footer-alt-auth">
              Already have an account?
              <button className="homepage-signup-footer-alt-auth-btn" onClick={this.login}>
                Sign In
              </button>
            </div>
          </div>
          
        </div>

        <div className="social-links-footer-container">
          <div className="social-links-footer-wrapper">
            <a href="google.com">AngelList</a>
            &nbsp;⁃
            <a href="google.com"> Github</a>
            &nbsp;⁃
            <a href="google.com"> Linkedin</a>
          </div>
        </div>

      </div>
      
    )
  }
}


const mapStateToProps = state => {
  return {state: state}
};


export default connect(mapStateToProps, null)(Homepage)