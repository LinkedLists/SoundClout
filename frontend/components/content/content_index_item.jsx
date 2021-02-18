import React from 'react';

class ContentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li><img src={this.props.photoUrl}/></li>
    )
  }
}

export default ContentIndexItem;