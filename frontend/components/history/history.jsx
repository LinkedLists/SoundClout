import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveNewTrack, playTrack, pauseTrack } from '../../actions/playbar_actions';
import { clearHistory } from '../../actions/history_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HistoryIndexItem from './history_index_item'
import { fetchUser } from '../../actions/user_actions'

class History extends React.Component {
  constructor(props) {
    super(props);

    this.state={}
    this.handleClearHistory = this.handleClearHistory.bind(this)
  }

  componentDidUpdate() {
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
        return <HistoryIndexItem 
            key={i} 
            track={track} 
            fetchTrack={this.props.fetchTrack}
            cuteColors={this.props.cuteColors}
            currentTrack={this.props.currentTrack}
            comments={this.props.history[i].numComments}
            fetchUser={this.props.fetchUser}
            currentUserShowPage={this.props.user}
            />
    })
    return(
      <div className="content-sidebar-right-container">
        <div className="history-container">
          <div className="history-header">
            <div>
              <FontAwesomeIcon 
                icon="calendar-day"
                size="lg"
                className="calendar-icon" />Listening History
            </div>
            <button onClick={this.handleClearHistory} id="view-history-btn">Clear History</button>
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
    comments: state.entities.comments,
    history: state.ui.history,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    sendTrack: (track) => dispatch(receiveNewTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    clearHistory: () => dispatch(clearHistory()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(History));
