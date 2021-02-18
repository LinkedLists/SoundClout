import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    return (
      <div className="content-container">
        {/* render stuff here */}
      </div>
    )
  }

}

export default Content