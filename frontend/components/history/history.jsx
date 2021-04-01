import React from 'react';
import { connect } from 'react-redux';
import { receiveNewTrack, playTrack, pauseTrack } from '../../actions/playbar_actions';
import { clearHistory } from '../../actions/history_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HistoryIndexItem from './history_index_item'

class History extends React.Component {
  constructor(props) {
    super(props);

    this.state={}
    this.handleClearHistory = this.handleClearHistory.bind(this)
  }

  handleClearHistory(e) {
    e.preventDefault()
    this.props.clearHistory();
    window.localStorage.setItem("history", JSON.stringify([]))
  }

  render() {
    let history = this.props.history.slice(-7)
    let tracks

    tracks = history.map((track, i) => {
        return <HistoryIndexItem key={i} track={track} />
    })
    return(
      <div className="content-sidebar-right-container">
        <div className="history-container">
          <div className="history-header">
            <FontAwesomeIcon 
              icon="calendar-day"
              size="lg"
              className="calendar-icon" />Listening History
              <button onClick={this.handleClearHistory}>Clear History</button>
          </div>
          <ul className="history-track-ul">
            {tracks}
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
    clearHistory: () => dispatch(clearHistory())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
