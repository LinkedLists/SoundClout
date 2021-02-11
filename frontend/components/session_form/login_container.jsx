import React from 'react';
import {connect} from 'react-redux';
import SignUpForm from './session_form';
import { login } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'Login'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)