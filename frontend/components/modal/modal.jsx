import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_container';
import SignupFormContainer from '../session_form/signup_container';
import EditTrackContainer from '../track_form/edit_track_container'
class Modal extends React.Component {
  constructor(props) {
    super(props);
    // this.component
    this.state = {
      track: this.props.track
    }
    this.track = this.props.track
    this.component = this.props.component
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  selectComponent() {
    switch (this.props.modal) {
      case 'login':
        this.component = <LoginFormContainer />;
        break;
      case 'signup':
        this.component = <SignupFormContainer />;
        break;
      case 'edit':
        this.component = <EditTrackContainer track={this.state.track} />;
        break;
      default:
        this.component = null;
        return null
    }
  }

  handleKeyPress(e) {
    if (e.key == "Escape") {
      this.props.closeModal()
    }
  }

  handleMouseDown(e) {
    if (e.target.className === "modal-background") {
      this.props.closeModal();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() { 
    if (!this.props.modal) {
      this.component = null;
      return null
    }
    this.selectComponent();
    return(
      <div className="modal-background" onMouseDown={this.handleMouseDown} onKeyDown={this.handleKeyPress}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { this.component }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // track: state.entities.tracks[ownProps.match.params.trackId],
    modal: state.ui.modal
  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);