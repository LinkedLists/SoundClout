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
          <div className="homepage-mobile-details">
            <h2 className="homepage-mobile-details-header">
              Never Stop Listening
            </h2>
            <p>
              SoundClout is available on Web and soon on iOS, Android, Sonos, Chromecast, and Xbox One near you.
            </p>
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