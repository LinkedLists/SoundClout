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
      photo_file: 'awefaw',
      // photo_preview: null
    }

    this.handleChange = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabInputElement = this.grabInputElement.bind(this);
    // this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.handleAudioFile = this.handleAudioFile.bind(this);
  }

  grabInputElement(id) {
    document.getElementById(id).click();
  }

  // handlePhotoFile(field) {
  //   const file = e.target.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {

  //     this.setState({[field]: e.target.files[0]}, {photo_preview: fileReader.result})
  //   }

  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }

  //   return e => this.setState({[field]: e.target.files[0]})
  // }

  handleAudioFile(field) {
    return e => this.setState({[field]: e.target.files[0]})
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
    // const preview = this.state.photo_preview ? <img src={this.state.photo_preview} /> : null;
    return (
      <div className="content-container">
        <div className="upload-form-container">
          <form className="upload-form" onSubmit={this.handleSubmit}>

            {/* <input type="file" id="upload-audio" onChange={this.handleAudioFile("audio_file")}/>
            <button 
              className="upload-btn" 
              onClick={
                e => {e.preventDefault(); this.grabInputElement("upload-audio")}
                }>upload an audio file</button>

            <input type="file" id="upload-photo" onChange={this.handlePhotoFile("photo_file")}/>
            <button 
              className="upload-btn" 
              onClick={
                e => {e.preventDefault(); this.grabInputElement("upload-photo")}
                }>for a photo file lol</button> */}

            <button type="submit">submit</button>
          </form>
          {/* {preview} */}
        </div>
      </div>
    )
  }
}

export default UploadForm