import React from 'react';
import { Link } from 'react-router-dom';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.track.title,
      uploader_id: this.props.uploader,
      description: this.props.track.description,
      genre: this.props.track.genre,
      audio_file: this.props.track.audio_file,
      photo_file: this.props.track.photo_file,
      photo_preview: this.props.track.photo_preview,
      errors: {},
    }

    // this.state = this.props.track

    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabInputElement = this.grabInputElement.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
    // this.handleAudioFile = this.handleAudioFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    // this.clearState = this.clearState.bind(this);
    this.handleValidations = this.handleValidations.bind(this);
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


  handleCloseForm(e) {
    e.preventDefault();
    let form = document.getElementsByClassName('upload-form-container')[0];
    let background = document.getElementsByClassName('track-edit-background')[0];
    background.classList.remove("open")
    form.classList.add("closed")
    background.classList.add("closed")
    form.classList.remove("open")

    this.props.closeEdit()
    this.props.clearTrackErrors();
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
      track.append("track[id]", this.props.track.id)
      track.append("track[title]", this.state.title)
      // track.append("track[uploader_id]", this.state.uploader_id)
      track.append("track[description]", this.state.description)
      track.append("track[genre]", this.state.genre)
      // track.append("track[audio_file]", this.state.audio_file)
  
      if (this.state.photo_file) {
        track.append("track[photo_file]", this.state.photo_file)
      }
      this.handleCloseForm(e);
      this.props.updateTrack(track)
    }
  }
  
  render() {
    const preview = this.state.photo_preview ? 
      <img src={this.state.photo_preview} className="upload-photo-preview"/> : 
      <img src={this.props.track.photoUrl} className="upload-photo-preview default-preview"/>
    // const errors = {}
    // console.log(this.state.errors)
    // if (this.state.errors.length > 0 && this.state.errors) this.state.errors.forEach( (error) => {
    //     errors[error.split(" ")[0]] = error
    // })
    return (
      <div className="modal-background track-edit-background closed">
        <div className="upload-form-container edit closed">
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
                    <select onChange={this.handleChange("genre")} className="form-input select" value={this.state.genre}>
                      <option value="None" className="select-item">None</option>
                      <option value="Pop" className="select-item">Pop</option>
                      <option value="Rock" className="select-item">Rock</option>
                      <option value="Blues" className="select-item">Blues</option>
                      <option value="Instrumental" className="select-item">Instrumental</option>
                      <option value="Electronic" className="select-item">Electronic</option>
                      <option value="Classical" className="select-item">Classical</option>
                      <option value="Metal" className="select-item">Metal</option>
                      <option value="Reggae" className="select-item">Reggae</option>
                      <option value="Country" className="select-item">Country</option>
                    </select>
                  </div>
                  <div className="field">
                    <label className="field-label">Description</label>
                    <textarea type="text" 
                      className="form-input textarea" 
                      onChange={this.handleChange("description")} 
                      placeholder="Describe your track"
                      value={this.state.description} />
                  </div>
                </div>
            </div>

              <div className="button-footer">
                <button className="cancel-submit" onClick={this.handleCloseForm}>Cancel</button>
                <button type="submit" className="upload-submit">Save Chages</button>
              </div>
            </form>
          </div>
      </div>
    )
  }
}

export default TrackForm