import React from 'react';
import { Link } from 'react-router-dom';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "testeer",
      uploader_id: this.props.uploader,
      description: "teset",
      genre: "genere",
      audio_file: 'awefaw',
      photo_file: "https://img.freepik.com/free-icon/black-music-icon_318-9277.jpg?size=338&ext=jpg",
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
      this.setState({photo_file: e.target.files[0], photo_preview: fileReader.result})
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleAudioFile(e) {
    this.setState({audio_file: e.target.files[0]})
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
    track.append("track[photo_file]", this.state.photo_file)
    
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
        <div className="upload-form-container">
            <input type="file" id="upload-audio" onChange={this.handleAudioFile}/>
            <button 
              className="upload-btn" 
              onClick={
                e => {e.preventDefault(); this.grabInputElement("upload-audio")}
                }>upload an audio file</button>

            <input type="file" id="upload-photo" onChange={this.handlePhotoFile}/>
            <button 
              className="upload-btn" 
              onClick={
                e => {e.preventDefault(); this.grabInputElement("upload-photo")}
                }>for a photo file lol</button>

          <form className="upload-form" onSubmit={this.handleSubmit}>
            <label>title</label>
            <input type="text" onChange={this.handleChange("title")}></input>

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