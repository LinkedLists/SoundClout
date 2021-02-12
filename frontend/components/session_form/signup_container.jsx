import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions'

import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'Sign Up'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),

    // taken from open a/A
    // remeber to refactor this later
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)