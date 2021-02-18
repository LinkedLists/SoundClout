import React from 'react';
import ContentIndexItem from './content_index_item'

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    // debugger
    const tracks = this.props.tracks;
    const trackItems = this.props.tracks.map( track => {
      return (
        // for now just return an image, later uploader id will be needed
        // so that a user can edit and delete their own tracks
        <ContentIndexItem key={track.id} photoUrl={track.photoUrl} />
      )
    })
    
    return (
      <div className="content-container">
        <ul>
          {trackItems}
        </ul>
      </div>
    )
  }

}

export default Content