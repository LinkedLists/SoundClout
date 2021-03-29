import React from 'react';
import { Link } from 'react-router-dom';

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
      open: "close"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabInputElement = this.grabInputElement.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.handleAudioFile = this.handleAudioFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.clearState = this.clearState.bind(this);
    this.handleValidations = this.handleValidations.bind(this);
    this.switchModalState = this.switchModalState.bind(this);
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

    let form = document.getElementsByClassName('modal-background-close')[0];
    form.classList.remove("closed")
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
    const preview = this.state.photo_preview ? 
      <img src={this.state.photo_preview} className="upload-photo-preview"/> : 
      <img src={this.state.photo_preview} className="upload-photo-preview default-preview"/>
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
              

        <div className={`modal-background-${this.state.open} closed`} >
          <div className={`edit-form-container-${this.state.open}`}>
            {/* <div className="upload-form-wrapper"> */}
            <form className="upload-form" onSubmit={this.handleSubmit}>
              <div className="img-field-wrapper">
                <div className="upload-photo-wrapper">
                  {preview}
                  <input type="file" id="upload-photo" onChange={this.handlePhotoFile}/>
                  <button 
                    className="upload-btn" 
                    onClick={
                      e => {e.preventDefault(); this.grabInputElement("upload-photo")}
                      }>for a photo file lol</button>
                </div>
                <div className="upload-field-wrapper">
                    <div className="field">
                      <label className="field-label">Title</label>
                      <input type="text" 
                        className={Object.keys(this.state.errors).length ? "form-input input-error" : "form-input"}
                        onChange={this.handleChange("title")}
                        placeholder="Name your track" 
                        value={this.state.title} />
                      {this.state.errors['Title'] ? <div className="upload-errors hidden">{this.state.errors['Title']}</div> : null}
                    </div>
                    <div className="field">
                      <label className="field-label">Genre</label>
                      <select onChange={this.handleChange("genre")} className="form-input select">
                        <option className="select-item">None</option>
                        <option className="select-item">Pop</option>
                        <option className="select-item">Rock</option>
                        <option className="select-item">Blues</option>
                        <option className="select-item">Instrumental</option>
                        <option className="select-item">Rap</option>
                        <option className="select-item">Hip-hop</option>
                        <option className="select-item">Electronic</option>
                        <option className="select-item">Classical</option>
                        <option className="select-item">Metal</option>
                        <option className="select-item">Reggae</option>
                        <option className="select-item">Country</option>
                      </select>
                    </div>
                    <div className="field">
                      <label className="field-label">Description</label>
                      <textarea type="text" 
                        className="form-input textarea" 
                        onChange={this.handleChange("description")} 
                        placeholder="Describe your track" />
                    </div>
                  </div>
              </div>

                <div className="button-footer">
                  <button className="cancel-submit" onClick={this.handleCloseForm}>Cancel</button>
                  <button type="submit" className="upload-submit">Upload</button>
                </div>
              </form>
          </div>

          {/* </div> */}
        </div>        
      </div>
    )
  }
}

export default UploadForm