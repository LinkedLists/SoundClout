import React from 'react';
import { Link } from 'react-router-dom'

class HistoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="history-track-item">
        {
          history.length > 0 ? <img src={history.photoUrl} className="history-track-icon"/>: null
        }
        <div className="history-track-details">
          {
            history.length > 0 ? <span>{history.username}</span> : null
          }
          {
            history.length > 0 ? <span>{history.title}</span> : null
          }
          {
            history.length > 0 ? 
                <div>
                    <FontAwesomeIcon icon="comment-alt" color="#999" id="history-comment-icon"/>
                    <span style="font-size:11px">{history.comments && Object.values(history.comments).length ? 
                        Object.values(history.comments).length : null }
                    </span>
                </div> 
                : null
          }
        </div>
      </li>
    )
  }
}

export default HistoryIndexItem;