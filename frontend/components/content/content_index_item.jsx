import React from 'react';
import { Link } from 'react-router-dom'
import PlayButton from '../playbutton/playbutton_container'

class ContentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="content-list-item">
        <div className="content-list-item-wrapper">

          <div className="content-list-item-img-link">
            <div className="content-list-item-img-wrapper">
              <PlayButton track={this.props.track}/>
              <img className="content-list-item-img" src={this.props.track.photoUrl}/>
            </div>
          </div>

          <div className="content-list-item-description">
            <div className="content-list-item-title">
              <Link to={`/tracks/${this.props.track.id}`} className="content-list-item-title-link">
                {this.props.track.title}
              </Link>
            </div>
            <div className="content-list-item-uploader">
              <Link to={`/users/${this.props.track.uploader_id}`} className="comment-item-username-link">
                By: {this.props.track.username}
              </Link>
            </div>


            <div className="content-list-item-genre">Genre: {this.props.track.genre}</div>
          </div>
        </div>
        {/* </Link> */}
      </li>
    )
  }
}

export default ContentIndexItem;