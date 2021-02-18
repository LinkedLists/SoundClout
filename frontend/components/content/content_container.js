import React from 'react';
import { connect } from 'react-redux';
import Content from './content'
import { fetchTracks } from '../../actions/track_actions'

const mapStateToProps = (state) => {
  return {
    tracks: Object.values(state.entities.tracks)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // lets just grab all tracks for now
    fetchTracks: () => dispatch(fetchTracks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)