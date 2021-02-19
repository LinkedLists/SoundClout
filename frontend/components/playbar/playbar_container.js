import { connect } from 'react-redux'
import Playbar from './playbar'
import { playTrack, pauseTrack } from '../../actions/playbar_actions'
import { fetchTrack } from '../../actions/track_actions'

const mapStateToProps = (state) => {
  return {
    state
  }
}
