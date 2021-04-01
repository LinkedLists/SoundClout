import React from 'react';
import ContentIndexItem from './content_index_item'
import History from '../history/history'

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks()

    let track = JSON.parse(window.localStorage.getItem("currentTrack"))
    if (track && Object.keys(track).length > 0) {
      if (!this.props.currentTrack.id)
      this.props.receiveNewTrack(JSON.parse(window.localStorage.getItem("currentTrack")));
    }
  }

  render() {
    const trackItems = this.props.tracks.map( track => {
      return (
        // for now just return an image, later uploader id will be needed
        // so that a user can edit and delete their own tracks
        <ContentIndexItem key={track.id} photoUrl={track.photoUrl} track={track}/>
      )
    })
    
    
    return (
      <div className="content-container">
        <div className="content-wrapper">
          <div className="content-playlist-main-wrapper">
            <div className="playlist-wrapper">
              <div className="playlist-header">Charts: New and hot</div>
              <ul className="content-list-ul">
                {trackItems}
              </ul>
            </div>
          </div>


          {/* this should be its own container */}
          {/* <div className="content-sidebar-right-container">
            <div className="history-container">
              <div className="history-header">
                Listening History
              </div>
            </div>
          </div> */}
          <History />


        </div>
      </div>
    )
  }
}

export default Content