import React from 'react';
import { connect } from 'react-redux';
import { receiveNewTrack, playTrack, pauseTrack } from '../../actions/playbar_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HistoryIndexItem from './history_index_item'

class History extends React.Component {
  constructor(props) {
    super(props);

    this.state={}
  }

  render() {
    let history = Object.values(this.props.history)[0]
    
    return(
      <div className="content-sidebar-right-container">
        <div className="history-container">
          <div className="history-header">
            <FontAwesomeIcon 
              icon="calendar-day"
              size="lg"
              className="calendar-icon" />Listening History
          </div>
          <ul className="history-track-ul">
            {/* <HistoryIndexItem history={history} /> */}
            <li className="history-track-item">
              {
                history ? <img src={history.photoUrl} className="history-track-icon"/>: null
              }
              <div className="history-track-details">
                {
                  history ? <span>{history.username}</span> : null
                }
                {
                  history ? <span>{history.title}</span> : null
                }
                {
                  history ? 
                      <div>
                          <FontAwesomeIcon icon="comment-alt" color="#999" id="history-comment-icon"/>
                          <span style={{fontSize: 11}}>{history.comments && Object.values(history.comments).length ? 
                              Object.values(history.comments).length : null }
                          </span>
                      </div> 
                      : null
                }
              </div>
            </li>
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
