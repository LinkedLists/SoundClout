import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
    }

    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    this.setState({file: e.target.files[0]})
    console.log(this.state.file)
  }
  
  render() {
    // console.log(this.state)
    return (
      <div className="content-container">
        awef
        <form>
          <input type="file" onChange={this.handleFile}/>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}


export default UploadForm