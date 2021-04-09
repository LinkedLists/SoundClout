import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar'
import { openModal } from '../../actions/modal_actions';
import { login, logout } from '../../actions/session_actions'
import { pauseTrack, clearPlaybarState } from '../../actions/playbar_actions'
import { fetchUser } from '../../actions/user_actions'
import { fetchTracks } from '../../actions/track_actions'

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.id],
    sessionId: state.session.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    pauseTrack: () => dispatch(pauseTrack()),
    clearPlaybarState: () => dispatch(clearPlaybarState()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)