import React from 'react';
import { connect } from 'react-redux';
import Content from './content'
import { fetchTracks } from '../../actions/track_actions'
import { playTrack, pauseTrack, receiveNewTrack, refreshTrack, clearPlaybarState } from '../../actions/playbar_actions'

const mapStateToProps = (state) => {
  return {
    tracks: Object.values(state.entities.tracks),
    currentTrack: state.ui.playbar.currentTrack,
    history: state.ui.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // lets just grab all tracks for now
    fetchTracks: () => dispatch(fetchTracks()),
    refreshTrack: (track) => dispatch(refreshTrack(track)),
    // receiveNewTrack: (track) => dispatch(receiveNewTrack(track)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)