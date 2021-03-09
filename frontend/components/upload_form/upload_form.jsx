import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      uploader_id: this.props.uploader,
      description: "test",
      genre: "genre",
      audio_file: null,
      photo_file: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    console.log(this.state)
    return e => this.setState({[field]: e.target.files[0]})
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("track[title]",this.state.title)
    formData.append("track[uploader_id]",this.state.uploader_id)
    formData.append("track[description]",this.state.description)
    formData.append("track[genre]",this.state.genre)
    formData.append("track[audio_file]", this.state.audio_file)
    formData.append("track[photo_file]", this.state.photo_file)
    $.ajax({
      url: 'api/tracks',
      method: 'POST',
      data: { formData },
      contentType: false,
      processData: false
    })
  }
  
  render() {
    // console.log(this.state)
    return (
      <div className="content-container">
        awef
        <form>
          <input type="file" onChange={this.handleChange("audio_file")} placeholder="audio file" />
          <input type="file" onChange={this.handleChange("photo_file")} placeholder="photo file" />
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}


export default UploadForm