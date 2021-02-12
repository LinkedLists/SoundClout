import React from 'react';
import {connect} from 'react-redux';
import SignUpForm from './session_form';
import { login } from '../../actions/session_actions'

import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'Login'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(login(user)),

    // taken from open a/A
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)