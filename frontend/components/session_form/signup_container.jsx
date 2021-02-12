import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions'

import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'Sign Up'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(signup(user)),



    // taken from open a/A
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)