import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HistoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="history-track-item">
        <img src={this.props.track.photoUrl} className="history-track-icon"/>
        <div className="history-track-details">
          <span>{this.props.track.username}</span> 
          <span>{this.props.track.title}</span> 
          <div>
            <FontAwesomeIcon icon="comment-alt" color="#999" id="history-comment-icon"/>
            <span style={{fontSize: 11}}>{this.props.track.comments && Object.values(this.props.track.comments).length ? 
                Object.values(this.props.track.comments).length : 0 }
            </span>
          </div>  
        </div>
      </li>
    )
  }
}

export default HistoryIndexItem;