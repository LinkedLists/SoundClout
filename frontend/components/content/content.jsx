import React from 'react';
import ContentIndexItem from './content_index_item'
import History from '../history/history'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchTracks()

    let track = JSON.parse(window.localStorage.getItem("currentTrack"))
    if (track && Object.keys(track).length > 0) {
      if (!this.props.currentTrack.id)
      this.props.refreshTrack(JSON.parse(window.localStorage.getItem("currentTrack")));
    }
    setTimeout(() => {
      this.setState( {loading: false} )
    }, 2000)
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
        <History />
        <div className="content-wrapper">

          <div className="content-playlist-main-wrapper">
            <div className="playlist-wrapper">
              <div className="playlist-header">Charts: New and hot</div>
              {
                this.state.loading ?
                  <FontAwesomeIcon icon="spinner" spin size="3x" className="homepage-spinner" /> :
                  <ul className="content-list-ul">
                    {trackItems}
                  </ul>
              }
            </div>
          </div>
          {/* <History /> */}
        </div>
      </div>
    )
  }
}

export default Content