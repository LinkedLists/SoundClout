import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar'
import { openModal } from '../../actions/modal_actions';
import { login, logout } from '../../actions/session_actions'


const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)