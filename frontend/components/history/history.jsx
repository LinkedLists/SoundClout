import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class History extends React.Component {
  constructor(props) {
    super(props);

    this.state={}
  }

  render() {
    return(
      <div className="content-sidebar-right-container">
        <div className="history-container">
          <div className="history-header">
            <FontAwesomeIcon 
              icon="calendar-day"
              size="lg"
              className="calendar-icon" />Listening History
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
