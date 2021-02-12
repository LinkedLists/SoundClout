import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)