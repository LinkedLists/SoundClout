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
    }

    this.handleChange = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWTF = this.handleWTF.bind(this);
  }

  handleWTF(id) {
    document.getElementById(id).click();
  }

  handleFile(field) {
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
    return (
      <div className="content-container">
        <div className="upload-form-container">
          <form className="upload-form" onSubmit={this.handleSubmit}>
            {/* <label for="upload-audio">audio...</label> */}
            <input type="file" className="upload-btn" id="upload-audio" onChange={this.handleFile("audio_file")}/>
            <button onClick={e => {e.preventDefault(); this.handleWTF("upload-audio")}}>upload an audio file</button>

            {/* <label for="upload-photo">photo...</label> */}
            <input type="file" className="upload-btn" id="upload-photo" onChange={this.handleFile("photo_file")}/>
            <button onClick={e => {e.preventDefault(); this.handleWTF("upload-photo")}}>for a photo file lol</button>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    )
  }
}


export default UploadForm