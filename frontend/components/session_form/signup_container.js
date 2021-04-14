import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { signup, login, clearErrors } from '../../actions/session_actions'

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

    otherForm: (
      <a   
        onClick={() => dispatch(openModal('login'))}
        className="other-form">
        Login
      </a>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal()),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)