import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import History from '../history/history'
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
    console.log("im here")
    this.props.fetchUser(this.props.match.params.userId)
    // this.props.fetchTracks()
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
    if (!this.state.colored) {
      this.setState( {colored: true} )
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
    return (
      <div>
        <div className="user-show-header-container">
          <img src={this.props.track.profileUrl} className="track-show-uploader-img"/>
        </div>
      </div>
    )
  }
}

export default UserShow