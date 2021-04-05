import React from 'react'
import { connect } from 'react-redux'

import Modal from '../modal/modal'

class Homepage extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className="homepage-container">

        <div className='homepage-header'>
          {/* {this.props.state.session.id ? null : <Modal />} */}
          <Modal />
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
              iOS, Android, Sonos, Chromecast, and Xbox One near you.
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
              Save tracks, follow artists and build playlists. All for free.
            </p>
            <button className="homepage-signup-footer-signup">
              Create Account
            </button>
            <div className="homepage-signup-footer-alt-auth">
              Already have an account?
              <button className="homepage-signup-footer-alt-auth-btn">
                Sign In
              </button>
            </div>
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