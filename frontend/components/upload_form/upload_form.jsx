import React from 'react';
import { Link } from 'react-router-dom';
import UploadTrackContainer from '../track_form/upload_track_container'

class UploadForm extends React.Component {
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

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.grabInputElement = this.grabInputElement.bind(this);
    // this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.handleAudioFile = this.handleAudioFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleCloseForm = this.handleCloseForm.bind(this);
    this.clearState = this.clearState.bind(this);
    // this.handleValidations = this.handleValidations.bind(this);
    // this.switchModalState = this.switchModalState.bind(this);
    this.showForm = this.showForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
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
    console.log(file)
    this.setState({title: file.name});
    this.setState({audio_file: file});
    if (file) this.showForm()
    // let form = document.getElementsByClassName('modal-background-close')[0];
    // form.classList.remove("closed")
  }

  showForm() {
    // e.preventDefault();
    this.setState( {showForm: true} );
  }

  closeForm() {
    this.setState( {showForm: false} )
  }

  handleKeyPress(e) {
    if (e.key == "Escape") {
      this.switchModalState()
      setTimeout(() => {
        this.handleCloseForm(e)
      }, 600)
    }
  }

  handleMouseDown(e) {
    if (e.target.className === "modal-background-close" ||
      e.target.className === "cancel-submit") {
        this.switchModalState()
        setTimeout(() => {
          this.handleCloseForm(e)
        }, 600)
    }
  }

  switchModalState() {
    if (this.state.open === "open") {
      this.setState({open: "close"})
    } else if(this.state.open === "close"){
      this.setState({open: "open"})
    }
  }

  handleCloseForm(e) {
    e.preventDefault();
    let audio = document.getElementById('upload-audio');
    audio.value = '';
    
    // setTimeout(() => {
      // setState is asyc so modal background will still be closed before state changes it to
      // modal-background-open
      let form = document.getElementsByClassName('modal-background-close')[0];
      form.classList.add("closed")
      this.clearState();
      this.props.clearTrackErrors();
      this.switchModalState()
    // }, 600)
    // let audioBtn = document.getElementsByClassName("upload-wrapper")[0];
    // audioBtn.classList.remove("closed")
    // this.clearState();
    // this.props.clearTrackErrors();
  }

  clearState() {
    this.setState({
      title: "",
      uploader_id: this.props.uploader,
      description: "",
      genre: "None",
      audio_file: '',
      photo_file: '',
      photo_preview: null,
      errors: {}
    })
  }

  handleValidations() {
    let title = this.state.title.length
    let validForm = true;
    let errors = {}

    if (title === 0){
      errors["Title"] = "Title cannot be empty"
      validForm = false;
    } 
    this.setState( {errors: errors} )
    return validForm
  }

  handleLiveVaidation(length) {
    let errors = Object.assign(this.state.errors)
    
    if (length === 0) {
      errors["Title"] = "Title cannot be empty"
    } else {
      delete errors["Title"]
    } 
    this.setState( {errors: errors} )
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value})
      if (field === "title") this.handleLiveVaidation(e.target.value.length)
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
    // const preview = this.state.photo_preview ? 
    //   <img src={this.state.photo_preview} className="upload-photo-preview"/> : 
    //   <img src={this.state.photo_preview} className="upload-photo-preview default-preview"/>
    return (
      <div className="content-container">
        <div className="upload-wrapper">
          <h4>Drag and drop your tracks and albums here</h4>
          <input type="file" id="upload-audio" onChange={this.handleAudioFile}/>
          <button 
            className="upload-btn"
            id="audio-upload-btn" 
            onClick={
              e => {e.preventDefault(); this.grabInputElement("upload-audio")}
              }>upload an audio file</button>

        </div>
        {
          this.state.showForm ? <UploadTrackContainer track={this.state} closeForm={this.closeForm} /> : null
        }
              
      </div>
    )
  }
}

export default UploadForm