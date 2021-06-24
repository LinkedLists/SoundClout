import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import UploadTrackContainer from '../track_form/upload_track_container'

class UploadShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      uploader_id: this.props.uploader,
      description: "",
      genre: "None",
      audio_file: '',
      photo_file: '',
      photo_preview: null,
      errors: {},
      open: "close",
      showForm: false,
    }

    this.grabInputElement = this.grabInputElement.bind(this);
    this.handleAudioFile = this.handleAudioFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.trackPage = this.trackPage.bind(this)
  }

  trackPage(page) {
    ReactGA.set({
      page
    });
    ReactGA.pageview(page);
  };

  componentDidMount() {
    let userLink = document.getElementById("nav-currentUser");
    if (userLink) userLink.classList.remove("disable")
    
    const page = this.props.location.pathname;
    this.trackPage(page);
  }

  componentWillUnmount() {
    this.props.clearTrackErrors();
  }

  grabInputElement(id) {
    document.getElementById(id).click();
  }

  handlePhotoFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photo_file: file, photo_preview: fileReader.result})
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleAudioFile(e) {
    let file = e.target.files[0];
    this.setState({title: file.name});
    this.setState({audio_file: file});
    if (file) this.showForm();

  }

  showForm() {
    this.setState( {showForm: true} );
  }

  closeForm() {
    this.setState( {showForm: false} )
    this.setState({title: ''});
    this.setState({audio_file: null});
    // must reset input value so onChange can retrigger
    document.getElementById("upload-audio").value = null
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }  
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidations()) {
      const track = new FormData();
      track.append("track[title]", this.state.title)
      track.append("track[uploader_id]", this.state.uploader_id)
      track.append("track[description]", this.state.description)
      track.append("track[genre]", this.state.genre)
      track.append("track[audio_file]", this.state.audio_file)
  
      if (this.state.photo_file) {
        track.append("track[photo_file]", this.state.photo_file)
      }
      
      this.props.createTrack(track)
    }
  }
  
  render() {
    return (
      <div className="content-container">
        <div className="upload-wrapper">
          <h4>Drag and drop your tracks and albums here (Soon)</h4>
          <input type="file" id="upload-audio" onChange={this.handleAudioFile}/>
          <button 
            className="upload-btn"
            id="audio-upload-btn" 
            onClick={
              e => {e.preventDefault(); this.grabInputElement("upload-audio")}
              }>upload an audio file</button>
        </div>
        {
          this.state.showForm ? 
            <UploadTrackContainer 
              track={this.state} 
              closeForm={this.closeForm} 
              history={this.props.history}
            /> : null
        }
      </div>
    )
  }
}

export default UploadShow