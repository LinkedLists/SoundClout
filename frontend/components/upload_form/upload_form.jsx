import React from 'react';

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
  }

  handleFile(field) {
    // return e => this.setState({[field]: e.target.files[0]})
  }

  handleSubmit(e) {
    e.preventDefault();
    const track = new FormData();
    track.append("track[title]", this.state.title)
    track.append("track[uploader_id]", this.state.uploader_id)
    track.append("track[description]", this.state.description)
    track.append("track[genre]", this.state.genre)
    track.append("track[audio]", this.state.audio_file)
    track.append("track[photo]", this.state.photo_file)

    $.ajax({
      url: 'api/tracks',
      method: 'POST',
      data:  track ,
      contentType: false,
      processData: false
    }).then(
      (res) => console.log(res.message)
    )
    // debugger
    // this.props.createTrack(track)
  }
  
  render() {
    return (
      <div className="content-container">
        awef
        <form onSubmit={this.handleSubmit}>
          audio
          <input type="file" onChange={this.handleFile("audio_file")} placeholder="audio file" />
          <input type="file" onChange={this.handleFile("photo_file")} placeholder="photo file" />
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}


export default UploadForm