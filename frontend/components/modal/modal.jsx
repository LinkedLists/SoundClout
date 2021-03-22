import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_container';
import SignupFormContainer from '../session_form/signup_container';
import EditTrackContainer from '../track_form/edit_track_container';
import { fetchTracks } from '../../actions/track_actions'
import { fetchTrack, deleteTrack } from '../../actions/track_actions';

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
        // console.log(this.props)
        // debugger
        this.component = <EditTrackContainer track={this.props.track} />;
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
    // this.props.fetchTrack(this.props.match.params.trackId)
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
        {/* <div className="modal-child" onClick={e => e.stopPropagation()}> */}
          { this.component }
        {/* </div> */}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.track)
  return {
    track: ownProps,
    modal: state.ui.modal,
    // tracks: Object.values(state.entities.tracks)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);