import React from 'react';
import {connect} from 'react-redux';
import SignUpForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions'

import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'Login'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(login(user)),

    // taken from open a/A
    // remeber to refactor this later
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)