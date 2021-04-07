import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import EditTrackContainer from '../track_form/edit_track_container'
import History from '../history/history'
import UploadTrackContainer from '../track_form/upload_track_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      colored: false,
    }

    this.cuteColors = this.cuteColors.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
    // this.props.fetchTracks();
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
    const background = document.getElementsByClassName("user-show-header-container")[0];
    if (background) this.cuteColors(background)
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  cuteColors(background) {
    // console.log(this.state.colored)
    // if (!this.state.colored) {
      // this.setState( {colored: true} )
      const r1 = this.getRandomInt(160, 200)
      const g1 = this.getRandomInt(160, 200)
      const b1 = this.getRandomInt(170, 250)
      const r2 = r1 + this.getRandomInt(5, 30)
      const g2 = g1 + this.getRandomInt(5, 30)
      const b2 = b1 - this.getRandomInt(5, 30)
      const r3 = r2 + this.getRandomInt(5, 30)
      const g3 = g2 + this.getRandomInt(5, 30)
      const b3 = b2 - this.getRandomInt(5, 30)
      background.style.background = `linear-gradient(to left, 
          rgb(${r1}, ${g1}, ${b1}), 
          rgb(${r2}, ${g2}, ${b2}), 
          rgb(${r3}, ${g3}, ${b3}))`
    // }
  }

  render() {
    let tracks = Object.values(this.props.tracks)
    let ownedTracks
    if (this.props.user) ownedTracks = tracks.map((track, i) => {
      // if (track.uploader_id === this.props.user.id) {
        return (
          <li key={i} className="track-uploader-item">
            <h4>{track.title}</h4>
            <img src={track.photoUrl} className="track-uploader-item-img"/>
          </li>
        )
      // }
    })

    return (
      this.props.user ? 
      <div className="content-container">
        <div className="user-show-header-container">
          {
            this.props.user ? 
            <img src={this.props.user.profileUrl} className="user-show-uploader-img"/> :
            setTimeout(() => {
              console.log("user showpage img was not fetched")
              return <img src={this.props.user.profileUrl} className="user-show-uploader-img"/>
            }, 20)
          }
          <div className="user-show-header-details">
            <h3 className="user-show-header-username">
              {this.props.user.username}
            </h3>
          </div>
        </div>
        <div className="user-show-content-banner">
          <ul className="user-show-content-banner-ul">
            <li>All</li>
            <li>Popular tracks</li>
            <li>Tracks</li>
            <li>Albums</li>
            <li>Playlists</li>
            <li>Reposts</li>
          </ul>
        </div>

        <div className="user-show-content-container">
          <div className="track-show-body-container">
            <History user={this.props.user.id} />
            <div className="track-show-body-wrapper">
              <div className="track-show-body-left-wrapper">
                <div className="track-show-body-left-content">
                  {/* header */}
                  <h2 className="user-show-content-header">
                    Recent
                  </h2>
                  {/* track list */}
                  <div>
                    <ul>
                      {ownedTracks}
                    </ul>
                  </div>

                  {/* footer here */}
                  <div className="user-show-content-footer">
                    <div className="upload-more">
                      More uploads means more listeners.
                    </div>
                    <Link to='/upload' className="upload-redirect-link">Upload more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>: null

    )
  }
}

export default UserShow