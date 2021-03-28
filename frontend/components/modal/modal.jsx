import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_container';
import SignupFormContainer from '../session_form/signup_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: "close"
    }

    this.component
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)

    this.switchModalState = this.switchModalState.bind(this)
  }

  selectComponent() {
    switch (this.props.modal) {
      case 'login':
        this.component = <LoginFormContainer/>;
        break;
      case 'signup':
        this.component = <SignupFormContainer/>;
        break;
      default:
        this.component = null;
        return null
    }
  }

  handleKeyPress(e) {
    if (e.key == "Escape") {
      this.switchModalState()
      setTimeout(() => {
        this.switchModalState()
        this.props.closeModal();
      }, 600)
    }
  }

  handleMouseDown(e) {
    if (e.target.className === "modal-background-close") {
      this.switchModalState()
      setTimeout(() => {
        this.switchModalState()
        this.props.closeModal();
      }, 600)
      // setTimeout(() => {
      // }, 666)
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  switchModalState() {
    if (this.state.open === "open") {
      this.setState({open: "close"})
      // return "close"
    } else if(this.state.open === "close"){
      this.setState({open: "open"})
      // return "open"
    }
  }

  render() { 
    if (!this.props.modal) {
      this.component = null;
      return null
    }
    this.selectComponent();
    return(
      <div className={`modal-background-${this.state.open}`} onMouseDown={this.handleMouseDown} onKeyDown={this.handleKeyPress}>
        <div className={`modal-child-${this.state.open}`} onClick={e => e.stopPropagation()}>
          { this.component }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
    currentUserId: state.session.id
  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);