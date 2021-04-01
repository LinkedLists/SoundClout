import React from 'react';
import { connect } from 'react-redux';
import { receiveNewTrack, playTrack, pauseTrack } from '../../actions/playbar_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class History extends React.Component {
  constructor(props) {
    super(props);

    this.state={}
  }

  render() {
    return(
      <div className="content-sidebar-right-container">
        <div className="history-container">
          <div className="history-header">
            <FontAwesomeIcon 
              icon="calendar-day"
              size="lg"
              className="calendar-icon" />Listening History
          </div>
          <ul>
            
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.ui.history
  }
};

const mapDispatchToProps = dispatch => {
  return {
    sendTrack: (track) => dispatch(receiveNewTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
