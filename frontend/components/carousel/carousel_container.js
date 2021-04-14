import { connect } from 'react-redux';
import Carousel from './carousel'
import { fetchTracks } from '../../actions/track_actions'
import { refreshTrack } from '../../actions/playbar_actions'
import { receiveHistory } from '../../actions/history_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    tracks: Object.values(state.entities.tracks),
    currentTrack: state.ui.playbar.currentTrack,
    trackHistory: state.ui.history,
    genre: ownProps.genre
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
    refreshTrack: (track) => dispatch(refreshTrack(track)),
    receiveHistory: (history) => dispatch(receiveHistory(history)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)