import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar'
import { openModal } from '../../actions/modal_actions';
import { login, logout } from '../../actions/session_actions'
import { pauseTrack, clearPlaybarState } from '../../actions/playbar_actions'

// importing this to test it out in order to resolve issues with the playbar
import { fetchTracks } from '../../actions/track_actions'

const mapStateToProps = (state) => {
  return {
    state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    pauseTrack: () => dispatch(pauseTrack()),
    clearPlaybarState: () => dispatch(clearPlaybarState()),

    // fetching tracks just for a test
    fetchTracks: () => dispatch(fetchTracks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)