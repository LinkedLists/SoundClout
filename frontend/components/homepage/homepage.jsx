import React from 'react'
import { connect } from 'react-redux'

class Homepage extends React.Component {
  render() {
    return (
      <div className='homepage-container'>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return state
};


export default connect(mapStateToProps, null)(Homepage)