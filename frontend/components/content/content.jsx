import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    // debugger
    let tracks = Object.values(this.props.tracks)
    
    return (
      <div className="content-container">

        <img src={tracks[0].photoUrl}/>
        {/* {
        tracks.forEach( (track) => {
          <img src={track.photoUrl}/>
        })
        } */}
      </div>
    )
  }

}

export default Content