import React from 'react';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
    // console.log(this.props.track.id)
    // console.log(this.props.match.params.trackId)
  }

  render() {
    if (this.props.track === undefined) return null;
    return (
      <div>
          <img className="content-list-item-img" src={this.props.track.photoUrl}/>
          <div className="content-list-item-description">
            {this.props.track.genre}
            <br />
            {this.props.track.description}
          </div>
      </div>
    )
  }
}

export default TrackShow