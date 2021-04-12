import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TrackForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.track.title,
      uploader_id: this.props.track.uploader_id,
      description: this.props.track.description,
      genre: this.props.track.genre,
      audio_file: this.props.track.audio_file,
      photo_file: this.props.track.photo_file,
      photo_preview: this.props.track.photo_preview,
      errors: {},
      open: "close",
      uploading: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabInputElement = this.grabInputElement.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    // this.resetState = this.resetState.bind(this);
    this.handleValidations = this.handleValidations.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.switchModalState = this.switchModalState.bind(this);
    this.setHistory = this.setHistory.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    this.props.clearTrackErrors();
    document.removeEventListener('keydown', this.handleKeyPress);
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

  handleKeyPress(e) {
    if (e.key == "Escape") {
      this.handleCloseForm(e)
    }
    else if (e.key == "Enter") {
      e.preventDefault();
    }
  }

  handleMouseDown(e) {
    if (e.target.className === "modal-background-close" ||
      e.target.className === "cancel-submit" ||
      e.target.className === "edit-form-container-close") {
        this.switchModalState()
        setTimeout(() => {
          this.props.closeForm()
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
    this.switchModalState()
    if (this.props.formType === "Upload" && this.state.uploading) {
      setTimeout(() => {
        this.setState( {uploading: false} ) 
        this.props.closeForm()
        let keys = Object.keys(this.props.tracks)
        let id = keys[keys.length - 1]
        this.props.history.push(`/tracks/${id}`)
      }, 600)
    } else {
      setTimeout(() => {
        // setHistory here so that when a track is updated it is reflected in localstorage
        // UPDATE: this is no longer needed as history is an array of track ids
        // this.setHistory()
        this.props.closeForm()
      }, 600)
    }
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
      if (this.props.formType === "Save Changes") {
        track.append("track[id]", this.props.track.id)
        track.append("track[title]", this.state.title)
        track.append("track[description]", this.state.description ? this.state.description : '')
        track.append("track[genre]", this.state.genre)

        let titlesToUpdate = document.getElementsByClassName(this.props.track.id)
        for (let i = 0; i < titlesToUpdate.length; i++) {
          titlesToUpdate[i].innerHTML = this.state.title
        }
      }
      else if (this.props.formType === "Upload") {
        track.append("track[title]", this.state.title)
        track.append("track[uploader_id]", this.state.uploader_id)
        track.append("track[description]", this.state.description)
        track.append("track[genre]", this.state.genre)
        track.append("track[audio_file]", this.state.audio_file)

      }
  
      if (this.state.photo_file) {
        track.append("track[photo_file]", this.state.photo_file)
      }

      if (this.props.formType === "Upload") {
        this.props.trackAction(track)
        this.setState( {uploading: true} )
        setTimeout(() => {
          this.handleCloseForm(e)
        }, 3000)
      } else {
        this.props.trackAction(track, this.handleCloseForm(e))
      }
    }
  }

  setHistory() {
    window.localStorage.setItem("history", JSON.stringify(this.props.trackHistory))
    setTimeout(() => {
      let history = JSON.parse(window.localStorage.getItem("history"))
      if (history.length !== this.props.trackHistory.length) {
        window.localStorage.setItem("history", JSON.stringify(this.props.trackHistory))
      }
    }, 70)
  }
  
  render() {
    const preview = this.state.photo_preview ? 
      <img src={this.state.photo_preview} className="upload-photo-preview"/> : 
      <img src={this.props.track.photoUrl} className="upload-photo-preview default-preview"/>
    return (
      <div className={`modal-background-${this.state.open}`} onMouseDown={this.handleMouseDown} >
        <div className={`edit-form-container-${this.state.open}`}>
          <form className="upload-form" onSubmit={this.handleSubmit}>
            <h2 className="track-form-header">Basic Info</h2>
            <div className="track-form-wrapper">
              <div className="upload-photo-wrapper">
                {preview}
                <input type="file" id="upload-photo" onChange={this.handlePhotoFile}/>
                <button
                  type="button"
                  className="upload-btn" 
                  // onKeyPress={this.preventKeyPress}
                  onClick={
                    e => {e.preventDefault(); this.grabInputElement("upload-photo")}
                    }>for a photo file lol</button>
              </div>
              <div className="upload-field-wrapper">
                  <div className="field">
                    <label className="field-label">Title <span id="asterisk2">*</span></label>
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
                      <option value="Hip-hop" className="select-item">Hip-hop</option>
                      <option value="Rap" className="select-item">Rap</option>
                      <option value="Kpop" className="select-item">Kpop</option>
                      <option value="Rock" className="select-item">Rock</option>
                      <option value="Lofi" className="select-item">Lofi</option>
                      <option value="Instrumental" className="select-item">Instrumental</option>
                      <option value="Electronic" className="select-item">Electronic</option>
                      <option value="Classical" className="select-item">Classical</option>
                      <option value="Blues" className="select-item">Blues</option>
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
                <div className="track-form-footer-required">
                  <span id="asterisk2">*</span>Required fields</div>
                <button className="cancel-submit" onClick={this.handleMouseDown}>Cancel</button>

                {
                  this.state.uploading ? 
                    <button className="uploading-submit">
                      <FontAwesomeIcon icon="spinner" spin id="uploading-spinner" />
                      Saving
                    </button> :
                    <button type="submit" className="upload-submit">{this.props.formType}</button>
                }
              </div>
            </form>
          </div>
      </div>
    )
  }
}

export default TrackForm