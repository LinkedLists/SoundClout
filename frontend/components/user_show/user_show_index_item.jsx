import React from 'react';
import EditTrackContainer from '../track_form/edit_track_container'
import UploadTrackContainer from '../track_form/upload_track_container'
import { Link } from 'react-router-dom'
import CommentFormContainer from '../comment_form/comment_form_container'


class UserShowIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="user-list-item">
        <img src={this.props.track.photoUrl} className="track-uploader-item-img"/>
        <div className="user-list-item-content-container">
          <div className="user-list-item-detail">
            <div className="user-list-item-detail-info">
              <span>
                {this.props.user.username}  
              </span>
              <span>
                {this.props.track.title}
              </span>            
            </div>
            <div>created at here</div>
          </div>
          <CommentFormContainer track={this.props.track} />
        </div>
      </li>
    )
  }
}

export default UserShowIndexItem;