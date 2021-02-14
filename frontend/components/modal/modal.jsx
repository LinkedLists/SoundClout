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
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  selectComponent() {
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

  handleKeyPress(e) {
    console.log("hei")
    if (e.keyCode === 27) {
      console.log("AFAFA")
    }
  }

  render() { 
    if (!this.props.modal) {
      this.component = null;
      return null
    }
    this.selectComponent();
    return(
      <div onKeyPress={this.handleKeyPress}>
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onKeyPress={this.handleKeyPress} onClick={e => e.stopPropagation()}>
          { this.component }
        </div>
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