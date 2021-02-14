import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_container';
import SignupFormContainer from '../session_form/signup_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.component
    // this.selectComponent = this.selectComponent.bind(this)
  }

  selectComponent() {
    if (!this.props.modal) {
      this.component = null;
      return null
    }
    switch (this.props.modal) {
      case 'login':
        this.component = <LoginFormContainer />;
        break;
      case 'signup':
        this.component = <SignupFormContainer />;
        break;
      default:
        this.component = null;
        return null
    }
  }

  render() { 
    this.selectComponent();
    return(
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { this.component }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);