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
      photo_preview: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabInputElement = this.grabInputElement.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.handleAudioFile = this.handleAudioFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    this.setState({title: file.name})
    this.setState({audio_file: file})

    let audio = document.getElementById('upload-audio');
    let form = document.getElementsByClassName('upload-form-container')[0];
    if (audio) {
      if (form) {
        audio.value !== "" ? form.classList.remove("closed") : null;
        // console.log(form.classList)
      }
    }
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const track = new FormData();
    track.append("track[title]", this.state.title)
    track.append("track[uploader_id]", this.state.uploader_id)
    track.append("track[description]", this.state.description)
    track.append("track[genre]", this.state.genre)
    track.append("track[audio_file]", this.state.audio_file)

    if (this.state.photo_file) {
      track.append("track[photo_file]", this.state.photo_file)
    }
    
    $.ajax({
      url: 'api/tracks',
      method: 'POST',
      data:  track ,
      contentType: false,
      processData: false
    }).then(console.log("song uploaded"))
    // debugger
    // this.props.createTrack(track)
  }
  
  render() {
    const preview = this.state.photo_preview ? 
      <img src={this.state.photo_preview} className="upload-photo-preview"/> : 
      <img src={this.state.photo_preview} className="upload-photo-preview default-preview"/>

    
    return (

      <div className="content-container">
        <input type="file" id="upload-audio" onChange={this.handleAudioFile}/>
        <button 
          className="upload-btn" 
          onClick={
            e => {e.preventDefault(); this.grabInputElement("upload-audio")}
            }>upload an audio file</button>

        <div className="upload-form-container closed">
          <input type="file" id="upload-photo" onChange={this.handlePhotoFile}/>
          <button 
            className="upload-btn" 
            onClick={
              e => {e.preventDefault(); this.grabInputElement("upload-photo")}
              }>for a photo file lol</button>
          <form className="upload-form" onSubmit={this.handleSubmit}>
            <label>title</label>
            <input type="text" onChange={this.handleChange("title")} value={this.state.title}></input>

            <label>genre</label>
            <select onChange={this.handleChange("genre")}>
              <option>None</option>
              <option>Pop</option>
              <option>Rock</option>
              <option>Blues</option>
              <option>Instrumental</option>
              <option>Electronic</option>
              <option>Classical</option>
              <option>Metal</option>
              <option>Reggae</option>
              <option>Country</option>
            </select>

            <label>description</label>
            <textarea type="text" onChange={this.handleChange("description")}></textarea>
            <button type="submit">upload</button>
          </form>
          {preview}
        </div>
      </div>
    )
  }
}

export default UploadForm