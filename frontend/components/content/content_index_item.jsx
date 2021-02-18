import React from 'react';

class ContentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="content-list-item">
        <img className="content-list-item-img" src={this.props.track.photoUrl}/>
        <div className="content-list-item-description">
          {this.props.track.genre}
        </div>
      </li>
    )
  }
}

export default ContentIndexItem;