import React from 'react';
import { Link } from 'react-router-dom'

class ContentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="content-list-item">
        {/* for now the entire item is nested in to the track show */}
        {/* eventually allow for a link to see the user would be a good idea */}
        <Link className="content-list-item-link" to={`/tracks/${this.props.track.id}`}>
          <img className="content-list-item-img" src={this.props.track.photoUrl}/>
          <div className="content-list-item-description">
            <div className="content-list-item-title">{this.props.track.title}</div>
            <div className="content-list-item-uploader">By: {this.props.track.username}</div>
            <div className="content-list-item-genre">Genre: {this.props.track.genre}</div>
          </div>
        </Link>
      </li>
    )
  }
}

export default ContentIndexItem;