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

        <ul>
        {
          tracks.map( (track) => {
            return (
            <li>
              <img src={track.photoUrl}/>
            </li>)
          })
        }
        </ul>
      </div>
    )
  }

}

export default Content