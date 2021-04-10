import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import History from '../history/history'
import UserShowIndexItem from './user_show_index_item'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      colored: false,
    }

    this.cuteColors = this.cuteColors.bind(this)
    this.checkCurrentUser = this.checkCurrentUser.bind(this)
    this.colored
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }
  
  componentDidUpdate() {
    // window.scrollTo(0, 0)
    const background = document.getElementsByClassName("user-show-header-container")[0];
    if (background) this.cuteColors(background)
    // fail safe incase the background did not update
    setTimeout(() => {
      if (background && background.style.background === "" ) {
        this.colored = false
        this.cuteColors(background) 
      }
    }, 50)
    this.checkCurrentUser()
  }

  checkCurrentUser() {
    let userLink = document.getElementById("nav-currentUser");
    if (this.props.user && this.props.user.id === this.props.sessionId) {
      userLink.classList.add("disable")
    } else {
      userLink.classList.remove("disable")
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  cuteColors(background) {
    if (!this.colored) {
      this.colored = true;
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
    }
  }

  render() {
    let ownedTracks
    if (this.props.user) {
      if ("tracks" in this.props.user) {
        ownedTracks = Object.values(this.props.user.tracks).map((track, i) => {
          return (
            <UserShowIndexItem 
              key={i}
              itemKey={i}
              track={track} 
              user={this.props.user}
              currentTrack={this.props.currentTrack}
              deleteTrack={this.props.deleteTrack}
              removeComments={this.props.removeComments}
              sessionId={this.props.sessionId}
              currentUser={this.props.currentUser}
              clearPlaybarState={this.props.clearPlaybarState}/>
          )
        })
      }
    }

    return (
      this.props.user ? 
      <div className="content-container">
        <div className="user-show-header-container">
          {
            this.props.user ? 
            <img src={this.props.user.profileUrl} className="user-show-uploader-img"/> :
            setTimeout(() => {
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

                    <div className="user-show-footer-logo-container">
                      <div className="user-show-footer-logo"></div>

                    </div>

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

        {/* hidden input that has the current user page id so that other components
        can grab this info */}
        <input style={{display: 'none'}} value={this.props.user.id} id="hidden-id" onChange={() => {}}/> 

      </div>: null

    )
  }
}

export default UserShow